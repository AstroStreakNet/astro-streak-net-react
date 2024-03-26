import { Construct } from "constructs";
import { SinglePageApp } from "./constructs/SinglePageApp";
import { Stack } from "aws-cdk-lib";

export class SpaceTitleStack extends Stack {
  constructor(scope: Construct, id: string, stage: string) {
    super(scope, id);

    new SinglePageApp(this, "SpaceTitleReact", {
      sourcePath: `./build-${stage}`,
    });
  }
}
