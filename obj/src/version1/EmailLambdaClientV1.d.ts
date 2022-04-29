import { ConfigParams } from 'pip-services3-commons-nodex';
import { CommandableLambdaClient } from 'pip-services3-aws-nodex';
import { EmailMessageV1 } from './EmailMessageV1';
import { EmailRecipientV1 } from './EmailRecipientV1';
import { IEmailClientV1 } from './IEmailClientV1';
export declare class EmailLambdaClientV1 extends CommandableLambdaClient implements IEmailClientV1 {
    private _defaultParameters;
    constructor(config?: any);
    sendMessage(correlationId: string, message: EmailMessageV1, parameters: ConfigParams): Promise<void>;
    sendMessageToRecipient(correlationId: string, recipient: EmailRecipientV1, message: EmailMessageV1, parameters: ConfigParams): Promise<void>;
    sendMessageToRecipients(correlationId: string, recipients: EmailRecipientV1[], message: EmailMessageV1, parameters: ConfigParams): Promise<void>;
}
