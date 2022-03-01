import {ContainerList, ProcessParams, ProcessSystemInfo} from "../models/index.js";
import {ProcessRequestImage} from "./process-request-image.js";

export type Base64String = string;

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
    images: Array<ProcessRequestImage | ArrayBuffer | Base64String>;

    /**
     * @type {ContainerList}
     * @memberOf ProcessRequest
     */
    ContainerList: ContainerList

    /**
     *
     * @type {ProcessParams}
     * @memberof ProcessRequest
     */
    systemInfo?: ProcessSystemInfo;

    /**
     * Free-form object to be included in response. Must be object, not list or simple value.
     * Do not affect document processing. Use it freely to pass your app params. Stored in process logs.
     * @type {{ [key: string]: object; }}
     * @memberof ProcessRequest
     */
    passBackObject?: { [key: string]: any; };
}

export const instanceOfProcessRequest = (data: any): data is ProcessRequest => {
    return 'images' in data
}
