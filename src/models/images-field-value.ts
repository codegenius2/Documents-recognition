/* tslint:disable */
/* eslint-disable */
/**
 * Regula Document Reader Web API
 * Documents recognition as easy as reading two bytes.  # Clients: * [JavaScript](https://github.com/regulaforensics/DocumentReader-web-js-client) client for the browser and node.js based on axios * [Java](https://github.com/regulaforensics/DocumentReader-web-java-client) client compatible with jvm and android * [Python](https://github.com/regulaforensics/DocumentReader-web-python-client) 3.5+ client * [C#](https://github.com/regulaforensics/DocumentReader-web-csharp-client) client for .NET & .NET Core 
 *
 * The version of the OpenAPI document: 6.6.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Light } from './light';
import { RectangleCoordinates } from './rectangle-coordinates';
import { RfidOrigin } from './rfid-origin';
import { Source } from './source';

/**
 * 
 * @export
 * @interface ImagesFieldValue
 */
export interface ImagesFieldValue {
    /**
     * 
     * @type {Source}
     * @memberof ImagesFieldValue
     */
    source: Source;
    /**
     * Base64 encoded image
     * @type {string}
     * @memberof ImagesFieldValue
     */
    value: string;
    /**
     * Base64 encoded image
     * @type {string}
     * @memberof ImagesFieldValue
     */
    originalValue?: string;
    /**
     * Page index of the image from input list
     * @type {number}
     * @memberof ImagesFieldValue
     */
    pageIndex: number;
    /**
     * 
     * @type {Light}
     * @memberof ImagesFieldValue
     */
    lightIndex: Light;
    /**
     * Same as Result type, but used for safe parsing of not-described values. See Result type.
     * @type {number}
     * @memberof ImagesFieldValue
     */
    containerType: number;
    /**
     * 
     * @type {RectangleCoordinates}
     * @memberof ImagesFieldValue
     */
    fieldRect?: RectangleCoordinates;
    /**
     * 
     * @type {RfidOrigin}
     * @memberof ImagesFieldValue
     */
    rfidOrigin?: RfidOrigin;
}


