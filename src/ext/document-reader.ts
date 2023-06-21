import {DefaultApi} from "../api/default-api.js";
import {ProcessApi} from "../api/process-api.js";
import {
  Light,
  ProcessRequest as ProcessRequestBase,
  Scenario,
  Result,
  
  DeviceInfo
} from "../models/index.js";
import {Response} from "./process-response.js";
import {Configuration} from "../configuration.js";
import globalAxios, {AxiosInstance} from "axios";
import {BASE_PATH} from "../base.js";
import {ProcessRequestImage as ProcessRequestImageBase} from "../models/index.js";
import {Base64String, instanceOfProcessRequest, ProcessRequest} from "./process-request.js";
import {ProcessRequestImage} from "./process-request-image.js";
import * as converter from "base64-arraybuffer";


export class DocumentReaderApi {

  private readonly defaultApi: DefaultApi
  private readonly processApi: ProcessApi

  private license: string | undefined

  constructor(configuration?: Configuration, basePath: string = BASE_PATH, axios: AxiosInstance = globalAxios) {
    this.defaultApi = new DefaultApi(configuration, basePath, axios)
    this.processApi = new ProcessApi(configuration, basePath, axios)
  }

  ping(xRequestID?: string): Promise<DeviceInfo> {
    return this.defaultApi.ping(xRequestID)
      .then((axiosResult) => axiosResult.data);
  }

  /**
   *
   * @summary Process list of documents images and return extracted data
   * @param {ProcessRequest} [request] Request options such as image, results types and etc.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError} If some request params are missed
   * */
  process(request: ProcessRequest | ProcessRequestBase, xRequestID?: string, options?: any): Promise<Response> {
    let baseRequest;

    if (instanceOfProcessRequest(request)) {
      if (!request.processParam) {
        request.processParam = {
          scenario: Scenario.FULL_PROCESS,
          resultTypeOutput: [Result.TEXT]
        }
      }
      if (!request.systemInfo) {
        request.systemInfo = {}
      }

      if (!request.systemInfo.license && this.license) {
        request.systemInfo.license = this.license
      }

      baseRequest = requestToBaseRequest(request)
    } else {
      baseRequest = request
      console.log();
    }

    return this.processApi.apiProcess(baseRequest, xRequestID, options)
      .then((axiosResult) => new Response(axiosResult.data));
  }

  public setLicense(license: ArrayBuffer | Base64String): void {
    if (typeof license === "string") {
      this.license = license
    } else {
      this.license = bufferToBase64String(license);
    }
  }
}


export function requestToBaseRequest(request: ProcessRequest): ProcessRequestBase {

  const imageList: Array<ProcessRequestImageBase> = []

  request.images.forEach((image, index) => {
    if (typeof image === "string") {
      imageList.push({ImageData: {'image': image}, light: Light.WHITE, page_idx: index});
    } else if (image instanceof ArrayBuffer) {
      const data = bufferToBase64String(image);
      imageList.push({ImageData: {'image': data}, light: Light.WHITE, page_idx: index});
    } else {
      imageList.push(imageDataToBaseImageData(image, index))
    }
  });

  return {
    processParam: request.processParam,
    List: imageList,
    systemInfo: request.systemInfo,
    passBackObject: request.passBackObject
  }
}

function imageDataToBaseImageData(image: ProcessRequestImage, arrayIndex: number): ProcessRequestImageBase {
  let data: string
  if (typeof image.ImageData === "string") {
    data = image.ImageData
  } else {
    data = bufferToBase64String(image.ImageData)
  }
  return {
    ImageData: {'image': data},
    light: image.light,
    page_idx: (typeof image.page_idx === 'undefined') ? arrayIndex : image.page_idx
  }
}

function bufferToBase64String(buffer: ArrayBuffer): string {
  return converter.encode(buffer);
}
