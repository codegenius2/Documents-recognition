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
import { DetailsOptical } from './details-optical';
import { DetailsRFID } from './details-rfid';

/**
 * 
 * @export
 * @interface Status
 */
export interface Status {
    /**
     * Overall checks status. Root status.
     * @type {CheckResult}
     * @memberof Status
     */
    complete: CheckResult;
    /**
     * 
     * @type {CheckResult}
     * @memberof Status
     */
    optical: CheckResult;
    /**
     * 
     * @type {CheckResult}
     * @memberof Status
     */
    portrait: CheckResult;
    /**
     * 
     * @type {CheckResult}
     * @memberof Status
     */
    rfid: CheckResult;
    /**
     * 
     * @type {CheckResult}
     * @memberof Status
     */
    stopList: CheckResult;
    /**
     * 
     * @type {DetailsRFID}
     * @memberof Status
     */
    detailsRFID: DetailsRFID;
    /**
     * 
     * @type {DetailsOptical}
     * @memberof Status
     */
    detailsOptical: DetailsOptical;
}


