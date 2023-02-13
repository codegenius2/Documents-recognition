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



/**
 * 
 * @export
 * @interface DataModule
 */
export interface DataModule {
    /**
     * 
     * @type {string}
     * @memberof DataModule
     */
    mData?: string;
    /**
     * 
     * @type {number}
     * @memberof DataModule
     */
    mLength?: number;
    /**
     * 
     * @type {number}
     * @memberof DataModule
     */
    mReserved1?: number;
    /**
     * 
     * @type {number}
     * @memberof DataModule
     */
    mReserver2?: number;
    /**
     * 
     * @type {number}
     * @memberof DataModule
     */
    mType?: number;
}


