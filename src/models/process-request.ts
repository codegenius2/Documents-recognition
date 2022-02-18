/* tslint:disable */
/* eslint-disable */
/**
 * Regula Document Reader Web API
 * Documents recognition as easy as reading two bytes.  # Clients: * [JavaScript](https://github.com/regulaforensics/DocumentReader-web-js-client) client for the browser and node.js based on axios * [Java](https://github.com/regulaforensics/DocumentReader-web-java-client) client compatible with jvm and android * [Python](https://github.com/regulaforensics/DocumentReader-web-python-client) 3.5+ client * [C#](https://github.com/regulaforensics/DocumentReader-web-csharp-client) client for .NET & .NET Core 
 *
 * The version of the OpenAPI document: 6.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ContainerList } from './container-list';
import { ProcessParams } from './process-params';
import { ProcessRequestImage } from './process-request-image';
import { ProcessSystemInfo } from './process-system-info';

/**
 * 
 * @export
 * @interface ProcessRequest
 */
export interface ProcessRequest {
    /**
     * 
     * @type {ProcessParams}
     * @memberof ProcessRequest
     */
    processParam: ProcessParams;
    /**
     * 
     * @type {Array<ProcessRequestImage>}
     * @memberof ProcessRequest
     */
    List?: Array<ProcessRequestImage>;
    /**
     * 
     * @type {ContainerList}
     * @memberof ProcessRequest
     */
    ContainerList?: ContainerList;
    /**
     * 
     * @type {ProcessSystemInfo}
     * @memberof ProcessRequest
     */
    systemInfo?: ProcessSystemInfo;
    /**
     * Free-form object to be included in response. Must be object, not list or simple value. Do not affect document processing. Use it freely to pass your app params. Stored in process logs.
     * @type {{ [key: string]: object; }}
     * @memberof ProcessRequest
     */
    passBackObject?: { [key: string]: object; };
}


