/* tslint:disable */
/* eslint-disable */
/**
 * Regula Document Reader Web API
 * Documents recognition as easy as reading two bytes.  # Clients: * [JavaScript](https://github.com/regulaforensics/DocumentReader-web-js-client) client for the browser and node.js based on axios * [Java](https://github.com/regulaforensics/DocumentReader-web-java-client) client compatible with jvm and android * [Python](https://github.com/regulaforensics/DocumentReader-web-python-client) 3.5+ client * [C#](https://github.com/regulaforensics/DocumentReader-web-csharp-client) client for .NET & .NET Core 
 *
 * The version of the OpenAPI document: 6.7.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Critical } from './critical';
import { Light } from './light';
import { RectangleCoordinates } from './rectangle-coordinates';

/**
 * 
 * @export
 * @interface OCRSecurityTextResultAllOf
 */
export interface OCRSecurityTextResultAllOf {
    /**
     * 
     * @type {Critical}
     * @memberof OCRSecurityTextResultAllOf
     */
    CriticalFlag?: Critical;
    /**
     * 
     * @type {Light}
     * @memberof OCRSecurityTextResultAllOf
     */
    LightType?: Light;
    /**
     * 
     * @type {RectangleCoordinates}
     * @memberof OCRSecurityTextResultAllOf
     */
    FieldRect?: RectangleCoordinates;
    /**
     * 
     * @type {number}
     * @memberof OCRSecurityTextResultAllOf
     */
    EtalonResultType?: number;
    /**
     * 
     * @type {number}
     * @memberof OCRSecurityTextResultAllOf
     */
    EtalonFieldType?: number;
    /**
     * 
     * @type {number}
     * @memberof OCRSecurityTextResultAllOf
     */
    EtalonLightType?: number;
    /**
     * 
     * @type {string}
     * @memberof OCRSecurityTextResultAllOf
     */
    SecurityTextResultOCR?: string;
    /**
     * 
     * @type {string}
     * @memberof OCRSecurityTextResultAllOf
     */
    EtalonResultOCR?: string;
    /**
     * 
     * @type {number}
     * @memberof OCRSecurityTextResultAllOf
     */
    Reserved1?: number;
    /**
     * 
     * @type {number}
     * @memberof OCRSecurityTextResultAllOf
     */
    Reserved2?: number;
}


