import {
  AuthenticityCheckResult,
  AuthenticityResultType,
  CheckResult,
  IdentResult,
  SecurityFeatureType
} from "../../models";

export class IdentChecks implements AuthenticityCheckResult {
  List: Array<IdentResult>;
  Result: CheckResult;
  Type: AuthenticityResultType;

  constructor(origin: AuthenticityCheckResult) {
    this.List = <Array<IdentResult>>origin.List
    this.Result = origin.Result
    this.Type = origin.Type
  }

  public checksByElement(elementType: SecurityFeatureType): Array<IdentResult> {
    const results = []
    for (const result of this.List) {
      if (result.ElementType === elementType) {
        results.push(result)
      }
    }
    return results
  }
}
