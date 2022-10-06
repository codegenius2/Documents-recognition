/* tslint:disable */
/* eslint-disable */
/**
 * Regula Document Reader Web API
 * Documents recognition as easy as reading two bytes.  # Clients: * [JavaScript](https://github.com/regulaforensics/DocumentReader-web-js-client) client for the browser and node.js based on axios * [Java](https://github.com/regulaforensics/DocumentReader-web-java-client) client compatible with jvm and android * [Python](https://github.com/regulaforensics/DocumentReader-web-python-client) 3.5+ client * [C#](https://github.com/regulaforensics/DocumentReader-web-csharp-client) client for .NET & .NET Core 
 *
 * The version of the OpenAPI document: 6.5.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base.js';
// @ts-ignore
import { ProcessRequest } from '../models.js';
// @ts-ignore
import { ProcessResponse } from '../models.js';
/**
 * ProcessApi - axios parameter creator
 * @export
 */
export const ProcessApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Process list of documents images and return extracted data
         * @param {ProcessRequest} processRequest 
         * @param {string} [xRequestID] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiProcess: async (processRequest: ProcessRequest, xRequestID?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'processRequest' is not null or undefined
            if (processRequest === null || processRequest === undefined) {
                throw new RequiredError('processRequest','Required parameter processRequest was null or undefined when calling apiProcess.');
            }
            const localVarPath = `/api/process`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (xRequestID !== undefined && xRequestID !== null) {
                localVarHeaderParameter['X-RequestID'] = String(xRequestID);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const nonString = typeof processRequest !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(processRequest !== undefined ? processRequest : {})
                : (processRequest || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ProcessApi - functional programming interface
 * @export
 */
export const ProcessApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Process list of documents images and return extracted data
         * @param {ProcessRequest} processRequest 
         * @param {string} [xRequestID] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiProcess(processRequest: ProcessRequest, xRequestID?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProcessResponse>> {
            const localVarAxiosArgs = await ProcessApiAxiosParamCreator(configuration).apiProcess(processRequest, xRequestID, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ProcessApi - factory interface
 * @export
 */
export const ProcessApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Process list of documents images and return extracted data
         * @param {ProcessRequest} processRequest 
         * @param {string} [xRequestID] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiProcess(processRequest: ProcessRequest, xRequestID?: string, options?: any): AxiosPromise<ProcessResponse> {
            return ProcessApiFp(configuration).apiProcess(processRequest, xRequestID, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ProcessApi - object-oriented interface
 * @export
 * @class ProcessApi
 * @extends {BaseAPI}
 */
export class ProcessApi extends BaseAPI {
    /**
     * 
     * @summary Process list of documents images and return extracted data
     * @param {ProcessRequest} processRequest 
     * @param {string} [xRequestID] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProcessApi
     */
    public apiProcess(processRequest: ProcessRequest, xRequestID?: string, options?: any) {
        return ProcessApiFp(this.configuration).apiProcess(processRequest, xRequestID, options).then((request) => request(this.axios, this.basePath));
    }
}
