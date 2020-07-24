import {
    TextAvailableSource as AvailableSource,
    CheckResult,
     
    Text as BaseText,
    TextFieldType
} from "../models/index.js";
import {TextField} from "./text-field.js";


export class Text implements BaseText {

    status: CheckResult;
    validityStatus: CheckResult;
    comparisonStatus: CheckResult;

    availableSourceList: Array<AvailableSource>;
    fieldList: Array<TextField>;

    constructor(origin: BaseText) {
        this.status = origin.status
        this.validityStatus = origin.validityStatus
        this.comparisonStatus = origin.comparisonStatus
        this.availableSourceList = origin.availableSourceList
        this.fieldList = origin.fieldList.map(field => new TextField(field))
    }

    public getField(type: TextFieldType, lcid?: number): TextField | undefined {
        return this.fieldList.find(field => field.fieldType == type && (!lcid || field.lcid == lcid))
    }
}