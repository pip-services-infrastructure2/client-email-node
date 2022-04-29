"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailClientFactory = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const EmailNullClientV1_1 = require("../version1/EmailNullClientV1");
const EmailDirectClientV1_1 = require("../version1/EmailDirectClientV1");
const EmailHttpClientV1_1 = require("../version1/EmailHttpClientV1");
const EmailLambdaClientV1_1 = require("../version1/EmailLambdaClientV1");
const EmailCommandableGrpcClientV1_1 = require("../version1/EmailCommandableGrpcClientV1");
const EmailGrpcClientV1_1 = require("../version1/EmailGrpcClientV1");
class EmailClientFactory extends pip_services3_components_nodex_1.Factory {
    constructor() {
        super();
        this.registerAsType(EmailClientFactory.NullClientV1Descriptor, EmailNullClientV1_1.EmailNullClientV1);
        this.registerAsType(EmailClientFactory.DirectClientV1Descriptor, EmailDirectClientV1_1.EmailDirectClientV1);
        this.registerAsType(EmailClientFactory.HttpClientV1Descriptor, EmailHttpClientV1_1.EmailHttpClientV1);
        this.registerAsType(EmailClientFactory.LambdaClientV1Descriptor, EmailLambdaClientV1_1.EmailLambdaClientV1);
        this.registerAsType(EmailClientFactory.CommandableGrpcClientV1Descriptor, EmailCommandableGrpcClientV1_1.EmailCommandableGrpcClientV1);
        this.registerAsType(EmailClientFactory.GrpcClientV1Descriptor, EmailGrpcClientV1_1.EmailGrpcClientV1);
    }
}
exports.EmailClientFactory = EmailClientFactory;
EmailClientFactory.Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-email', 'factory', 'default', 'default', '1.0');
EmailClientFactory.NullClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-email', 'client', 'null', 'default', '1.0');
EmailClientFactory.DirectClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-email', 'client', 'direct', 'default', '1.0');
EmailClientFactory.HttpClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-email', 'client', 'http', 'default', '1.0');
EmailClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-email', 'client', 'lambda', 'default', '1.0');
EmailClientFactory.CommandableGrpcClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-email', 'client', 'commandable-grpc', 'default', '1.0');
EmailClientFactory.GrpcClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-email', 'client', 'grpc', 'default', '1.0');
//# sourceMappingURL=EmailClientFactory.js.map