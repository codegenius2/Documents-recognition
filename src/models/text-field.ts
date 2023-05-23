/* tslint:disable */
/* eslint-disable */
/**
 * Regula Document Reader Web API
 * Documents recognition as easy as reading two bytes.  # Clients: * [JavaScript](https://github.com/regulaforensics/DocumentReader-web-js-client) client for the browser and node.js based on axios * [Java](https://github.com/regulaforensics/DocumentReader-web-java-client) client compatible with jvm and android * [Python](https://github.com/regulaforensics/DocumentReader-web-python-client) 3.5+ client * [C#](https://github.com/regulaforensics/DocumentReader-web-csharp-client) client for .NET & .NET Core 
 *
 * The version of the OpenAPI document: 6.8.0
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
     * Field name. Only use to search values for fields with fieldType=50(other). In general, use fieldType for lookup.
     * @type {string}
     * @memberof TextField
     */
    fieldName: string;
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
     * The most confidence value, selected from valueList
     * @type {string}
     * @memberof TextField
     */
    value: string;
    /**
     * 
     * @type {Array<TextFieldValue>}
     * @memberof TextField
     */
    valueList: Array<TextFieldValue>;
    /**
     * Validity of all field values for given source. If there are two values on different pages for one field-source pair, then validity also will include logical match checking. If such values do not match, validity will return error.
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


