import {DefaultApi} from "../api/default-api";
import {Light, ProcessRequest as ProcessRequestBase, Result, Scenario} from "../models";
import {Response} from "./process-response";
import {Configuration} from "../configuration";
import globalAxios, {AxiosInstance} from "axios";
import {BASE_PATH} from "../base";
import {ProcessRequestImage as ProcessRequestImageBase} from "../models";
import {ProcessRequest} from "./process-request";
import {ProcessRequestImage} from "./process-request-image";

import {encode} from "base64-arraybuffer";


export class DocumentReaderApi extends DefaultApi {

    constructor(configuration?: Configuration, basePath: string = BASE_PATH, axios: AxiosInstance = globalAxios) {
        super(configuration, basePath, axios)
    }

    /**
     *
     * @summary Process list of documents images and return extracted data
     * @param {ProcessRequest} [processRequest] Request options such as image, results types and etc.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError} If some request params are missed
     * */
    process(processRequest: ProcessRequest, options?: any): Promise<Response> {

        if (!processRequest.processParam) {
            processRequest.processParam = {
                scenario: Scenario.FULL_PROCESS,
                resultTypeOutput: [Result.TEXT]
            }
        }

        return super.apiProcess(requestToBaseRequest(processRequest), options)
            .then((axiosResult) => new Response(axiosResult.data));
    }
}


function requestToBaseRequest(request: ProcessRequest): ProcessRequestBase {

    const imageList: Array<ProcessRequestImageBase> = []

    request.images.forEach((image, index) => {
        if (typeof image === "string") {
            imageList.push({ImageData: {'image': image}, LightIndex: Light.WHITE, page_idx: index});
        } else if (image instanceof ArrayBuffer) {
            const data = bufferToBase64String(image);
            imageList.push({ImageData: {'image': data}, LightIndex: Light.WHITE, page_idx: index});
        } else {
            imageList.push(imageDataToBaseImageData(image, index))
        }
    });

    return {
        processParam: request.processParam,
        List: imageList
    }
}

function imageDataToBaseImageData(image: ProcessRequestImage, pageId: number): ProcessRequestImageBase {
    let data: string
    if (typeof image.ImageData === "string") {
        data = image.ImageData
    } else {
        data = bufferToBase64String(image.ImageData)
    }
    return {ImageData: {'image': data}, LightIndex: image.LightIndex, page_idx: image.page_idx || pageId}
}

function bufferToBase64String(buffer: ArrayBuffer): string {
    return encode(buffer);
}