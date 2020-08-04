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
}

export class LowLvlResponse implements ProcessResponse {

  ContainerList: ContainerList
  ProcessingFinished: ProcessingStatus
  TransactionInfo: TransactionInfo
  ChipPage: RfidLocation

  constructor(original: ProcessResponse) {
    this.ContainerList = original.ContainerList
    this.ProcessingFinished = original.ProcessingFinished
    this.TransactionInfo = original.TransactionInfo
    this.ChipPage = original.ChipPage
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
    return this.ContainerList.List.find(container => container.result_type === type)
  }

  public resultsByType(type: Result): Array<ResultItem> | undefined {
    return this.ContainerList.List.filter(container => container.result_type === type)
  }
}
