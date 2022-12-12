import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
import * as apigateway from "aws-cdk-lib/aws-apigateway";

export class CdkStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // Core storage infrastructure
        const bucket = new s3.Bucket(this, "imageBucket", {});
        const table = new dynamodb.Table(this, "cardsTable", { partitionKey: { name: "id", type: dynamodb.AttributeType.STRING } });

        // Create main API
        const api = new apigateway.RestApi(this, "restApi", {});
        const cardsResource = api.root.addResource("cards");
    }
}
