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


import { FaceApiSearch } from './face-api-search';

/**
 * 
 * @export
 * @interface FaceApi
 */
export interface FaceApi {
    /**
     * The URL of the Regula Face Web service to be used.
     * @type {string}
     * @memberof FaceApi
     */
    url?: string;
    /**
     * The processing mode: \"match\" or \"match+search\".
     * @type {string}
     * @memberof FaceApi
     */
    mode?: string;
    /**
     * 
     * @type {FaceApiSearch}
     * @memberof FaceApi
     */
    search?: FaceApiSearch;
    /**
     * The similarity threshold, 0-100. Above 75 means that the faces\' similarity is verified, below 75 is not.
     * @type {number}
     * @memberof FaceApi
     */
    threshold?: number;
    /**
     * The Regula Face Web service requests timeout, ms.
     * @type {number}
     * @memberof FaceApi
     */
    serviceTimeout?: number;
    /**
     * Proxy to use, should be set according to the <a href=\"https://curl.se/libcurl/c/CURLOPT_PROXY.html\" target=\"_blank\">cURL standard</a>.
     * @type {string}
     * @memberof FaceApi
     */
    proxy?: string;
    /**
     * Username and password to use for proxy authentication, should be set according to the <a href=\"https://curl.se/libcurl/c/CURLOPT_PROXYUSERPWD.html\" target=\"_blank\">cURL standard</a>.
     * @type {string}
     * @memberof FaceApi
     */
    proxy_userpwd?: string;
    /**
     * Proxy protocol type, should be set according to the <a href=\"https://curl.se/libcurl/c/CURLOPT_PROXYTYPE.html\" target=\"_blank\">cURL standard</a>.
     * @type {number}
     * @memberof FaceApi
     */
    proxy_type?: number;
}

