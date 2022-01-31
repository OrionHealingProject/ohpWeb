import * as cdk from "@aws-cdk/core";
import * as amplify from "@aws-cdk/aws-amplify";

export class PRODAmplifyInfraStackOHPWEB extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const amplifyApp = new amplify.App(this, "OHPWEB", {
      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
        owner: "OrionHealingProject",
        repository: "ohpWeb",
        oauthToken: cdk.SecretValue.secretsManager(
          "test/Developer/GithubMachine",
          { jsonField: "my-github-token" }
        ),
      }),
    });
    const mainBranch = amplifyApp.addBranch("main");

    const domain = amplifyApp.addDomain("orionhealingproject.com", {
      enableAutoSubdomain: true, // in case subdomains should be auto registered for branches
      autoSubdomainCreationPatterns: ["*", "pr*"], // regex for branches that should auto register subdomains
    });
    domain.mapRoot(mainBranch); // map master branch to domain root
    domain.mapSubDomain(mainBranch, "www");
    amplifyApp.addCustomRule(
      amplify.CustomRule.SINGLE_PAGE_APPLICATION_REDIRECT
    ); // required rule for amplify to handle SPA
  }
}
