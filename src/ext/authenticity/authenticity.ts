import {
  AuthenticityCheckList as BaseAuthenticityCheckList, AuthenticityCheckResult, AuthenticityResultType
} from "../../models/index.js";
import {FiberChecks} from "./fiber.js";
import {IdentChecks} from "./ident.js";
import {ImageIdentChecks} from "./image-ident.js";
import {OCRSecurityTextChecks} from "./ocr-security-text.js";
import {SecurityFeatureChecks} from "./security-feature.js";

export class Authenticity implements BaseAuthenticityCheckList {
  List: Array<AuthenticityCheckResult>;
  page_idx: number;

  constructor(origin: BaseAuthenticityCheckList, page_idx: number) {
    this.List = origin.List
    this.page_idx = page_idx
  }

  public uvLuminescenceChecks(): SecurityFeatureChecks | undefined {
    return this.securityFeatureOrUndefined(AuthenticityResultType.UV_LUMINESCENCE)
  }

  public irB900Checks(): SecurityFeatureChecks | undefined {
    return this.securityFeatureOrUndefined(AuthenticityResultType.IR_B900)
  }

  public imagePatternChecks(): IdentChecks | undefined {
    return this.identOrUndefined(AuthenticityResultType.IMAGE_PATTERN);
  }

  public axialProtectionChecks(): SecurityFeatureChecks | undefined {
    return this.securityFeatureOrUndefined(AuthenticityResultType.AXIAL_PROTECTION);
  }

  public uvFiberChecks(): FiberChecks | undefined {
    return this.fiberOrUndefined(AuthenticityResultType.UV_FIBERS);
  }

  public irVisibilityChecks(): IdentChecks | undefined {
    return this.identOrUndefined(AuthenticityResultType.IR_VISIBILITY);
  }

  public ocrSecurityTextChecks(): OCRSecurityTextChecks | undefined {
    return this.ocrSecurityTextOrUndefined(AuthenticityResultType.OCR_SECURITY_TEXT);
  }

  public ipiChecks(): ImageIdentChecks | undefined {
    return this.imageIdentOrUndefined(AuthenticityResultType.IPI);
  }

  public embedImageChecks(): SecurityFeatureChecks | undefined {
    return this.securityFeatureOrUndefined(AuthenticityResultType.PHOTO_EMBED_TYPE);
  }

  public hologramsChecks(): SecurityFeatureChecks | undefined {
    return this.securityFeatureOrUndefined(AuthenticityResultType.HOLOGRAMS);
  }

  public imageAreaChecks(): SecurityFeatureChecks | undefined {
    return this.securityFeatureOrUndefined(AuthenticityResultType.PHOTO_AREA);
  }

  public portraitComparisonChecks(): IdentChecks | undefined {
    return this.identOrUndefined(AuthenticityResultType.PORTRAIT_COMPARISON);
  }

  public barcodeFormatCheckChecks(): SecurityFeatureChecks | undefined {
    return this.securityFeatureOrUndefined(AuthenticityResultType.BARCODE_FORMAT_CHECK);
  }

  public kinegramChecks(): IdentChecks | undefined {
    return this.identOrUndefined(AuthenticityResultType.KINEGRAM);
  }

  public letterScreenChecks(): IdentChecks | undefined {
    return this.identOrUndefined(AuthenticityResultType.LETTER_SCREEN);
  }

  public hologramDetectionChecks(): IdentChecks | undefined {
    return this.identOrUndefined(AuthenticityResultType.HOLOGRAM_DETECTION);
  }

  public mrzChecks(): SecurityFeatureChecks | undefined {
    return this.securityFeatureOrUndefined(AuthenticityResultType.EXTENDED_MRZ_CHECK);
  }

  public resultByType(authenticityType: number): AuthenticityCheckResult | undefined {
    for (const result of this.List) {
      if (result.Type == authenticityType) {
        return result
      }
    }
    return undefined
  }

  private fiberOrUndefined(authenticityType: number): FiberChecks | undefined {
    const result = this.resultByType(authenticityType)
    if (result) {
      return new FiberChecks(result)
    }
    return undefined
  }

  private identOrUndefined(authenticityType: number): IdentChecks | undefined {
    const result = this.resultByType(authenticityType)
    if (result) {
      return new IdentChecks(result)
    }
    return undefined
  }

  private imageIdentOrUndefined(authenticityType: number): ImageIdentChecks | undefined {
    const result = this.resultByType(authenticityType)
    if (result) {
      return new ImageIdentChecks(result)
    }
    return undefined
  }

  private ocrSecurityTextOrUndefined(authenticityType: number): OCRSecurityTextChecks | undefined {
    const result = this.resultByType(authenticityType)
    if (result) {
      return new OCRSecurityTextChecks(result)
    }
    return undefined
  }

  private securityFeatureOrUndefined(authenticityType: number): SecurityFeatureChecks | undefined {
    const result = this.resultByType(authenticityType)
    if (result) {
      return new SecurityFeatureChecks(result)
    }
    return undefined
  }
}
