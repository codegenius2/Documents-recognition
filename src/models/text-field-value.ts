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


import { Source } from './source';

/**
 * 
 * @export
 * @interface TextFieldValue
 */
export interface TextFieldValue {
    /**
     * 
     * @type {string}
     * @memberof TextFieldValue
     */
    value: string;
    /**
     * 
     * @type {string}
     * @memberof TextFieldValue
     */
    originalValue?: string;
    /**
     * Index of image from input list
     * @type {number}
     * @memberof TextFieldValue
     */
    pageIndex: number;
    /**
     * 
     * @type {Source}
     * @memberof TextFieldValue
     */
    source: Source;
    /**
     * Value correct recognition probability. Combined probability from single characters probabilities
     * @type {number}
     * @memberof TextFieldValue
     */
    probability?: number;
}


