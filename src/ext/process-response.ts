import {
  ContainerList, ImagesResult,
  ProcessingStatus,
  ProcessResponse,
  Result,
  ResultItem,
  RfidLocation, Status, StatusResult,
  TextResult,
  TransactionInfo
} from "../models/index.js";
import {Text} from "./text.js";
import {Images} from "./images.js";
// @ts-ignore
import converter from "base64-arraybuffer";


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

  public decodedLog(): string | undefined {
    const log = this.lowLvlResponse.log
    return log ? String.fromCharCode.apply(null, new Uint8Array(converter.decode(log))) : undefined;
  }
}

export class LowLvlResponse implements ProcessResponse {

  ContainerList: ContainerList
  ProcessingFinished: ProcessingStatus
  TransactionInfo: TransactionInfo
  ChipPage: RfidLocation
  log?: string

  constructor(original: ProcessResponse) {
    this.ContainerList = original.ContainerList
    this.ProcessingFinished = original.ProcessingFinished
    this.TransactionInfo = original.TransactionInfo
    this.ChipPage = original.ChipPage
    this.log = original.log
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

  public resultsByType(type: Result): Array<ResultItem> | undefined {
    return this.ContainerList.List.filter(container => container.result_type === type)
  }
}
