/* tslint:disable */
/* eslint-disable */
/**
 * Regula Document Reader Web API
 * Regula Document Reader Web API
 *
 * The version of the OpenAPI document: 5.2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { CheckResult } from './check-result';

/**
 * 
 * @export
 * @interface DetailsOptical
 */
export interface DetailsOptical {
    /**
     * 
     * @type {CheckResult}
     * @memberof DetailsOptical
     */
    overallStatus: CheckResult;
    /**
     * 
     * @type {CheckResult}
     * @memberof DetailsOptical
     */
    docType: CheckResult;
    /**
     * 
     * @type {CheckResult}
     * @memberof DetailsOptical
     */
    expiry: CheckResult;
    /**
     * 
     * @type {CheckResult}
     * @memberof DetailsOptical
     */
    imageQA: CheckResult;
    /**
     * 
     * @type {CheckResult}
     * @memberof DetailsOptical
     */
    mrz: CheckResult;
    /**
     * Number of processed pages in the document
     * @type {number}
     * @memberof DetailsOptical
     */
    pagesCount: number;
    /**
     * 
     * @type {CheckResult}
     * @memberof DetailsOptical
     */
    security: CheckResult;
    /**
     * 
     * @type {CheckResult}
     * @memberof DetailsOptical
     */
    text: CheckResult;
}


