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


import { ImageData } from './image-data';

/**
 * Contains cropped and rotated with perspective compensation image of document. Single input image can contain multiple document side/pages, which will be returned as separated results. Most of coordinates in other types defined on that image
 * @export
 * @interface DocumentImageResultAllOf
 */
export interface DocumentImageResultAllOf {
    /**
     * 
     * @type {ImageData}
     * @memberof DocumentImageResultAllOf
     */
    RawImageContainer: ImageData;
}


