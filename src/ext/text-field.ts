import {
    CheckResult,
    CrossSourceValueComparison, Source,
    SourceValidity,
    TextField as BaseTextField,
    TextFieldType,
    TextFieldValue
} from "../models";

export class TextField implements BaseTextField {

    // see BaseTextField for docs
    fieldType: TextFieldType;
    lcid?: number;

    status: CheckResult;
    validityStatus: CheckResult;
    comparisonStatus: CheckResult;

    valueList: Array<TextFieldValue>;
    validityList: Array<SourceValidity>;
    comparisonList: Array<CrossSourceValueComparison>;

    constructor(origin: BaseTextField) {
        this.fieldType = origin.fieldType
        this.lcid = origin.lcid
        this.status = origin.status
        this.validityStatus = origin.validityStatus
        this.comparisonStatus = origin.comparisonStatus
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
            return "todo value"
        }

        const value = this.valueList.find(value => value.source === source)
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
        return this.validityList.find(sv => sv.source === source)?.status || CheckResult.WAS_NOT_DONE
    }

    /**
     * Returns result of value matching from different sources.
     */
    public crossSourceComparison(one: Source, other: Source): CheckResult {

        const comparison = this.comparisonList.find(sv => {
            return (sv.sourceLeft === one && sv.sourceRight === other)
                || (sv.sourceLeft === other && sv.sourceRight === one);
        })
        return comparison?.status || CheckResult.WAS_NOT_DONE
    }
}