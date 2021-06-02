import {
  AuthenticityResult,
  ContainerList,
  ImageQualityCheckList,
  ImageQualityResult,
  ImagesResult,
  ProcessingStatus,
  ProcessResponse,
  Result,
  ResultItem,
  RfidLocation,
  Status,
  StatusResult,
  TextResult,
  TransactionInfo
} from "../models/index.js";
import {Text} from "./text.js";
import {Images} from "./images.js";
// @ts-ignore
import converter from "base64-arraybuffer";
import {Authenticity} from "./authenticity/authenticity.js";
import pako from 'pako'

export class Response {

  // other future modules:
  // - authenticity
  // - document
  status?: Status
  text?: Text
  images?: Images

  lowLvlResponse: LowLvlResponse

  constructor(original: ProcessResponse) {

    const lowLvlResponse = new LowLvlResponse(original)
    this.lowLvlResponse = lowLvlResponse

    this.status = lowLvlResponse.statusResult()?.Status
    const textResult = lowLvlResponse.textResult()
    if (textResult) {
      this.text = new Text(textResult.Text)
    }
    const imagesResult = lowLvlResponse.imagesResult()
    if (imagesResult) {
      this.images = new Images(imagesResult.Images)
    }
  }

  public authenticity(page_idx = 0): Authenticity | undefined {
    const r = <AuthenticityResult>this.lowLvlResponse.resultByTypeAndPage(Result.AUTHENTICITY, page_idx)
    if (r) {
      return new Authenticity(r.AuthenticityCheckList, page_idx)
    }
  }

  public authenticityPerPage(): Array<Authenticity> {
    return this.lowLvlResponse.resultsByType(Result.AUTHENTICITY)
      .map((e: AuthenticityResult, i) => new Authenticity(e.AuthenticityCheckList, e.page_idx))
      .sort((a, b) => a.page_idx - b.page_idx)
  }

  public imageQualityChecks(page_idx = 0): ImageQualityCheckList | undefined {
    const result = <ImageQualityResult>this.lowLvlResponse.resultByTypeAndPage(Result.IMAGE_QUALITY, page_idx)
    if(result)
    {
      return result.ImageQualityCheckList;
    }
  }

  public decodedLog(): string | undefined {
    const log = this.lowLvlResponse.log
    if (log) {
      const decoded = converter.decode(log)
      const uintArray = new Uint8Array(decoded)

      let dataUintArray
      try {
        dataUintArray = pako.inflate(uintArray);
      } catch (err) {
        console.log(err);
        dataUintArray = uintArray
      }

      const uintArraySize = dataUintArray.length
      const step = 10000
      const result = []
      // To avoid maximum call stack size excess
      for (let i = 0; i < uintArraySize; i += step) {
        const chunk = String.fromCharCode.apply(null, dataUintArray.slice(i, i + step))
        result.push(chunk)
      }
      return result.join('')
    } else {
      return undefined
    }
  }
}

export class LowLvlResponse implements ProcessResponse {

  ContainerList: ContainerList
  ProcessingFinished: ProcessingStatus
  TransactionInfo: TransactionInfo
  ChipPage: RfidLocation
  log?: string
  passBackObject?: { [key: string]: any; };

  constructor(original: ProcessResponse) {
    this.ContainerList = original.ContainerList
    this.ProcessingFinished = original.ProcessingFinished
    this.TransactionInfo = original.TransactionInfo
    this.ChipPage = original.ChipPage
    this.log = original.log
    this.passBackObject = original.passBackObject
  }

  public statusResult(): StatusResult | undefined {
    return <StatusResult>this.resultByType(Result.STATUS)
  }

  public textResult(): TextResult | undefined {
    return <TextResult>this.resultByType(Result.TEXT)
  }

  public imagesResult(): ImagesResult | undefined {
    return <ImagesResult>this.resultByType(Result.IMAGES)
  }

  public resultByType(type: Result): ResultItem | undefined {
    for (const container of this.ContainerList.List) {
      if (container.result_type === type) {
        return container
      }
    }
    return undefined
  }

  public resultByTypeAndPage(type: Result, page_idx = 0): ResultItem | undefined {
    for (const container of this.ContainerList.List) {
      if (container.result_type === type && container.page_idx == page_idx) {
        return container
      }
    }
    return undefined
  }

  public resultsByType(type: Result): Array<ResultItem> {
    return this.ContainerList.List.filter(container => container.result_type === type)
  }
}
