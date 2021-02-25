import {
  AuthenticityCheckResult,
  AuthenticityResultType,
  CheckResult,
  OCRSecurityTextResult
} from "../../models";

export class OCRSecurityTextChecks implements AuthenticityCheckResult {
  List: Array<OCRSecurityTextResult>;
  Result: CheckResult;
  Type: AuthenticityResultType;

  constructor(origin: AuthenticityCheckResult) {
    this.List = <Array<OCRSecurityTextChecks>>origin.List
    this.Result = origin.Result
    this.Type = origin.Type
  }
}
