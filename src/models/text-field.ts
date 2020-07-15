/* tslint:disable */
/* eslint-disable */
/**
 * Regula Document Reader Web API
 * Regula Document Reader Web API
 *
 * The version of the OpenAPI document: 5.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { CheckResult } from './check-result';
import { CrossSourceValueComparison } from './cross-source-value-comparison';
import { LCID } from './lcid';
import { SourceValidity } from './source-validity';
import { TextFieldType } from './text-field-type';
import { TextFieldValue } from './text-field-value';

/**
 * 
 * @export
 * @interface TextField
 */
export interface TextField {
    /**
     * 
     * @type {TextFieldType}
     * @memberof TextField
     */
    fieldType: TextFieldType;
    /**
     * 
     * @type {LCID}
     * @memberof TextField
     */
    lcid?: LCID;
    /**
     * 
     * @type {CheckResult}
     * @memberof TextField
     */
    status: CheckResult;
    /**
     * 
     * @type {CheckResult}
     * @memberof TextField
     */
    validityStatus: CheckResult;
    /**
     * 
     * @type {CheckResult}
     * @memberof TextField
     */
    comparisonStatus: CheckResult;
    /**
     * 
     * @type {Array<TextFieldValue>}
     * @memberof TextField
     */
    valueList: Array<TextFieldValue>;
    /**
     * Validity of all field values for given source. If there are two values on different pages for one field-source pair, than validity also will include logical match checking. If such values do not match, validity will return error.
     * @type {Array<SourceValidity>}
     * @memberof TextField
     */
    validityList: Array<SourceValidity>;
    /**
     * 
     * @type {Array<CrossSourceValueComparison>}
     * @memberof TextField
     */
    comparisonList: Array<CrossSourceValueComparison>;
}


