import { Descriptor } from 'pip-services3-commons-nodex';
import { Factory } from 'pip-services3-components-nodex';

import { EmailNullClientV1 } from '../version1/EmailNullClientV1';
import { EmailDirectClientV1 } from '../version1/EmailDirectClientV1';
import { EmailCommandableHttpClientV1 } from '../version1/EmailCommandableHttpClientV1';
import { EmailCommandableLambdaClientV1 } from '../version1/EmailCommandableLambdaClientV1';
import { EmailCommandableGrpcClientV1 } from '../version1/EmailCommandableGrpcClientV1';
import { EmailGrpcClientV1 } from '../version1/EmailGrpcClientV1';

export class EmailClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('service-email', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('service-email', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('service-email', 'client', 'direct', 'default', '1.0');
	public static CmdHttpClientV1Descriptor = new Descriptor('service-email', 'client', 'commandable-http', 'default', '1.0');
	public static CmdLambdaClientV1Descriptor = new Descriptor('service-email', 'client', 'commandable-lambda', 'default', '1.0');
	public static CommandableGrpcClientV1Descriptor = new Descriptor('service-email', 'client', 'commandable-grpc', 'default', '1.0');
	public static GrpcClientV1Descriptor = new Descriptor('service-email', 'client', 'grpc', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(EmailClientFactory.NullClientV1Descriptor, EmailNullClientV1);
		this.registerAsType(EmailClientFactory.DirectClientV1Descriptor, EmailDirectClientV1);
		this.registerAsType(EmailClientFactory.CmdHttpClientV1Descriptor, EmailCommandableHttpClientV1);
		this.registerAsType(EmailClientFactory.CmdLambdaClientV1Descriptor, EmailCommandableLambdaClientV1);
		this.registerAsType(EmailClientFactory.CommandableGrpcClientV1Descriptor, EmailCommandableGrpcClientV1);
		this.registerAsType(EmailClientFactory.GrpcClientV1Descriptor, EmailGrpcClientV1);
	}
	
}
