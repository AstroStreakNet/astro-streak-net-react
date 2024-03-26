import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment";
import {
  CfnDistribution,
  CloudFrontWebDistribution,
  OriginAccessIdentity,
} from "aws-cdk-lib/aws-cloudfront";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";
import { RemovalPolicy } from "aws-cdk-lib";
import CustomErrorResponseProperty = CfnDistribution.CustomErrorResponseProperty;

type SinglePageAppProps = {
  sourcePath: string;
};

export class SinglePageApp extends Construct {
  constructor(scope: Construct, id: string, props: SinglePageAppProps) {
    super(scope, id);

    const bucket = new Bucket(this, id, {
      removalPolicy: RemovalPolicy.DESTROY,
      websiteIndexDocument: "index.html",
    });

    const originAccessIdentity = new OriginAccessIdentity(
      this,
      "SpaceTitleOIA",
      {
        comment: "OIA created by CDK, used for CloudFront to access S3",
      }
    );

    bucket.grantRead(originAccessIdentity);

    const notFoundRedirectErrorResponse: CustomErrorResponseProperty = {
      errorCode: 404,
      responseCode: 200,
      responsePagePath: "/index.html",
      errorCachingMinTtl: 10,
    };

    // TODO: Add SSL certs
    const distribution = new CloudFrontWebDistribution(
      this,
      `${id}SpaCloudFront`,
      {
        originConfigs: [
          {
            s3OriginSource: {
              s3BucketSource: bucket,
              originAccessIdentity: originAccessIdentity,
            },
            behaviors: [{ isDefaultBehavior: true }],
          },
        ],
        errorConfigurations: [notFoundRedirectErrorResponse],
      }
    );

    new BucketDeployment(this, `${id}SpaDeployment`, {
      sources: [Source.asset(props.sourcePath)],
      destinationBucket: bucket,
      distribution,
      distributionPaths: ["/*"],
    });
  }
}
