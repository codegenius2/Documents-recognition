import {
  AuthenticityCheckResult,
  AuthenticityResultType,
  CheckResult,
  FiberResult
} from "../../models";


export class FiberChecks implements AuthenticityCheckResult {
  List: Array<FiberResult>;
  Result: CheckResult;
  Type: AuthenticityResultType;

  constructor(origin: AuthenticityCheckResult) {
    this.List = <Array<FiberResult>>origin.List
    this.Result = origin.Result
    this.Type = origin.Type
  }
}
