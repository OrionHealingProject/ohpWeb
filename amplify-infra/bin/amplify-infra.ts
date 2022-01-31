import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { PRODAmplifyInfraStackOHPWEB } from "../lib/amplify-infra-stack";

const app = new cdk.App();

new PRODAmplifyInfraStackOHPWEB(app, "AmplifyInfraStackOHPWEB", {
  env: { account: "019564818632", region: "us-west-2" },
});
