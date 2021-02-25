import {
  AuthenticityCheckResult,
  AuthenticityResultType,
  CheckResult,
  SecurityFeatureResult,
  SecurityFeatureType
} from "../../models";

export class SecurityFeatureChecks implements AuthenticityCheckResult {
  List: Array<SecurityFeatureResult>;
  Result: CheckResult;
  Type: AuthenticityResultType;

  constructor(origin: AuthenticityCheckResult) {
    this.List = <Array<SecurityFeatureResult>>origin.List
    this.Result = origin.Result
    this.Type = origin.Type
  }

  public checksByElement(elementType: SecurityFeatureType): Array<SecurityFeatureResult> {
    const results = []
    for (const result of this.List) {
      if (result.ElementType === elementType) {
        results.push(result)
      }
    }
    return results
  }
}
