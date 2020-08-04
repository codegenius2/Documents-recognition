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


import { GraphicFieldType } from './graphic-field-type';
import { ImagesFieldValue } from './images-field-value';

/**
 * 
 * @export
 * @interface ImagesField
 */
export interface ImagesField {
    /**
     * Human readable field name. Do not bind to this name - use GraphicFieldType instead.
     * @type {string}
     * @memberof ImagesField
     */
    fieldName: string;
    /**
     * 
     * @type {GraphicFieldType}
     * @memberof ImagesField
     */
    fieldType: GraphicFieldType;
    /**
     * 
     * @type {Array<ImagesFieldValue>}
     * @memberof ImagesField
     */
    valueList: Array<ImagesFieldValue>;
}


