import {
  GraphicFieldType,
  Images as BaseImages,
  ImagesField as BaseImagesField,
  ImagesAvailableSource, ImagesFieldValue, Source, RawImageResult,
} from "../models/index.js";

// @ts-ignore
import converter from "base64-arraybuffer";

export class Images implements BaseImages {

  availableSourceList: Array<ImagesAvailableSource>;
  fieldList: Array<ImagesField>;
  normalizedInputImages: Array<RawImageResult>;

  constructor(origin: BaseImages, normalizedInputImages: Array<RawImageResult>) {
    this.normalizedInputImages = normalizedInputImages;
    this.availableSourceList = origin.availableSourceList
    this.fieldList = origin.fieldList.map(field => new ImagesField(field))
  }

  public getField(type: GraphicFieldType): ImagesField | undefined {
    return this.fieldList.find(field => field.fieldType == type)
  }

  public getNormalizedInputImage(page = 0): ArrayBuffer | undefined {
    const imageAsBase64 = this.normalizedInputImages.find(i=>i.page_idx==page)?.RawImageContainer?.image
    if(imageAsBase64) {
      return base64ToBuffer(imageAsBase64)
    }
    return undefined
  }
}

export class ImagesField implements BaseImagesField {

  fieldName: string;
  fieldType: GraphicFieldType;
  valueList: Array<ImagesFieldValue>;

  constructor(origin: BaseImagesField) {
    this.fieldType = origin.fieldType
    this.fieldType = origin.fieldType
    this.valueList = origin.valueList
  }

  public getValue(source?: Source, original = false): ArrayBuffer | undefined {
    let fieldValue
    if (!source) {
      // rfid -> visual -> barcode
      fieldValue = this.valueList.find(v => v.source == Source.RFID)
        || this.valueList.find(v => v.source == Source.VISUAL)
        || this.valueList.find(v => v.source == Source.BARCODE)
    } else {
      fieldValue = this.valueList.find(v => v.source == source)
    }

    if (!fieldValue) {
      return undefined
    }

    if (original) {
      return base64ToBuffer(fieldValue.originalValue)
    }
    return base64ToBuffer(fieldValue.value)
  }
}

function base64ToBuffer(str: string): ArrayBuffer {
  return converter.decode(str);
}