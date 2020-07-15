import {
    ContainerList, 
    ProcessingStatus,
    ProcessResponse,
    Result,
    ResultItem,
    RfidLocation,
    TextResult,
    TransactionInfo
} from "../models";
import {Text} from "./text";


export class Response {

    // other modules:
    // - images
    // - status
    // - authenticity
    // - document
    text?: Text

    lowLvlResponse: LowLvlResponse

    constructor(original: ProcessResponse) {

        const lowLvlResponse = new LowLvlResponse(original)
        this.lowLvlResponse = lowLvlResponse

        const textResult = lowLvlResponse.textResult()
        if (textResult) {
            this.text = new Text(textResult.Text)
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

    public textResult(): TextResult | undefined {
        return <TextResult>this.resultByType(Result.TEXT)
    }

    public resultByType(type: Result): ResultItem | undefined {
        return this.ContainerList.List.find(container => container.result_type === type)
    }
}
