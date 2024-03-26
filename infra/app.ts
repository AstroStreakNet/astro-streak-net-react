import { App } from "aws-cdk-lib";
import { SpaceTitleStack } from "./stack";
import { Stages } from "./utils/types";

const stages: Stages[] = [Stages.DEV, Stages.PROD];

const app = new App();

stages.forEach((stage) => {
  new SpaceTitleStack(app, `LaunchPadReactApp-${stage}`, stage);
});

app.synth();
