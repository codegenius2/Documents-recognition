import {
  CheckResult,
  CrossSourceValueComparison,
  Source,
  SourceValidity,
  TextField as BaseTextField,
  TextFieldType,
  TextFieldValue
} from "../models/index.js";

export class TextField implements BaseTextField {

  // see BaseTextField for docs
  fieldType: TextFieldType;
  fieldName: string;
  lcid?: number;

  status: CheckResult;
  validityStatus: CheckResult;
  comparisonStatus: CheckResult;

  value: string
  valueList: Array<TextFieldValue>;
  validityList: Array<SourceValidity>;
  comparisonList: Array<CrossSourceValueComparison>;

  constructor(origin: BaseTextField) {
    this.fieldType = origin.fieldType
    this.fieldName = origin.fieldName
    this.lcid = origin.lcid
    this.status = origin.status
    this.validityStatus = origin.validityStatus
    this.comparisonStatus = origin.comparisonStatus
    this.value = origin.value
    this.valueList = origin.valueList
    this.validityList = origin.validityList
    this.comparisonList = origin.comparisonList
  }

  /**
   * This method returns value of the text field. Value encoded in UTF8.
   * Fields value obtained in the following order:
   * - if MRZ value is present, it will be taken
   * - if no MRZ, but RFID value is present, it will be taken
   * - if no MRZ, no RFID, but Barcode value is present, it will be taken
   * - if no MRZ, no RFID, no Barcode, but Visual OCR value is present, it will be taken
   *
   * @param source See {@code Source}
   * @param original Each value formatted according to input params and server settings.
   * To get original representation, set this flag to true. Date example:
   *  - original visual value - "3 January 2009"
   *  - formatted value - "03.01.2009"
   */
  public getValue(source?: Source, original = false): string | undefined {

    if (!source) {
      return this.value;
    }

    const value = this.getValueBySource(source)
    if (original) {
      return value?.originalValue
    }
    return value?.value
  }

  /**
   * Returns validity check of all values for given source.
   * @param source See {@code Source}
   */
  public sourceValidity(source: Source): CheckResult {
    for (const validity of this.validityList) {
      if (validity.source === source) {
        return validity.status
      }
    }
    return CheckResult.WAS_NOT_DONE
  }

  /**
   * Returns value matching result for different sources.
   */
  public crossSourceComparison(one: Source, other: Source): CheckResult {
    for (const c of this.comparisonList) {
      if ((c.sourceLeft === one && c.sourceRight === other) || (c.sourceLeft === other && c.sourceRight === one)) {
        return c.status
      }
    }
    return CheckResult.WAS_NOT_DONE
  }

  private getValueBySource(source: Source): TextFieldValue | undefined {
    for (const value of this.valueList) {
      if (value.source == source) {
        return value
      }
    }
    return undefined
  }
}
