import {
  TextAvailableSource as AvailableSource,
  CheckResult,
  Text as BaseText,
  TextFieldType, LCID
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
    let result = undefined
    for (const field of this.fieldList) {
      if (field.fieldType == type) {
        if (lcid != undefined && field.lcid == lcid) {
          return field
        } else if (lcid == undefined && field.lcid == LCID.LATIN) {
          return field
        } else if (lcid == undefined && result == undefined) {
          result = field
        }
      }
    }
    return result
  }

  public getFieldByName(name: string, lcid?: number): TextField | undefined {
    let result = undefined
    for (const field of this.fieldList) {
      if (field.fieldName == name) {
        if (lcid != undefined && field.lcid == lcid) {
          return field
        } else if (lcid == undefined && field.lcid == LCID.LATIN) {
          return field
        } else if (lcid == undefined && result == undefined) {
          result = field
        }
      }
    }
    return result
  }

  public getFieldValue(type: TextFieldType, lcid?: number): string | undefined {
    return this.getField(type, lcid)?.getValue()
  }

  public getFieldValueByName(name: string, lcid?: number): string | undefined {
    return this.getFieldByName(name, lcid)?.getValue()
  }
}
