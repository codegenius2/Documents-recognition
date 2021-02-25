import {
  AuthenticityCheckResult,
  AuthenticityResultType,
  CheckResult,
  PhotoIdentResult
} from "../../models";

export class ImageIdentChecks implements AuthenticityCheckResult {
  List: Array<PhotoIdentResult>;
  Result: CheckResult;
  Type: AuthenticityResultType;

  constructor(origin: AuthenticityCheckResult) {
    this.List = <Array<PhotoIdentResult>>origin.List
    this.Result = origin.Result
    this.Type = origin.Type
  }
}
