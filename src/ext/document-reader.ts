import {DefaultApi} from "../api/default-api.js";
import {Light, ProcessRequest as ProcessRequestBase, Scenario, Result} from "../models/index.js";
import {Response} from "./process-response.js";
import {Configuration} from "../configuration.js";
import globalAxios, {AxiosInstance} from "axios";
import {BASE_PATH} from "../base.js";
import {ProcessRequestImage as ProcessRequestImageBase} from "../models/index.js";
import {ProcessRequest} from "./process-request.js";
import {ProcessRequestImage} from "./process-request-image.js";

import converter from "base64-arraybuffer";


export class DocumentReaderApi extends DefaultApi {

  private license: string | undefined

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
    if (!processRequest.systemInfo) {
      processRequest.systemInfo = {}
    }
    
    if (!processRequest.systemInfo.license && this.license) {
      processRequest.systemInfo.license = this.license
    }

    const baseRequest = requestToBaseRequest(processRequest)
    return super.apiProcess(baseRequest, options)
      .then((axiosResult) => new Response(axiosResult.data));
  }

  public getLicense(): string | undefined {
    return this.license
  }

  public setLicense(license: string): void {
    this.license = license
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
    List: imageList,
    systemInfo: request.systemInfo
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
  return converter.encode(buffer);
}