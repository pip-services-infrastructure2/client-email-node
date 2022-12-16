import { ConfigParams } from 'pip-services3-commons-nodex';
import { CommandableLambdaClient } from 'pip-services3-aws-nodex';

import { EmailMessageV1 } from './EmailMessageV1';
import { EmailRecipientV1 } from './EmailRecipientV1';
import { IEmailClientV1 } from './IEmailClientV1';

export class EmailCommandableLambdaClientV1 extends CommandableLambdaClient implements IEmailClientV1 {
    private _defaultParameters: ConfigParams;

    constructor(config?: any) {
        super('email');

        let thisConfig = ConfigParams.fromValue(config);
        this._defaultParameters = thisConfig.getSection('parameters');
        if (config != null) this.configure(thisConfig);
    }

    public async sendMessage(correlationId: string, message: EmailMessageV1, parameters: ConfigParams): Promise<void> {
        parameters = this._defaultParameters.override(parameters);
        
        await this.callCommand(
            'send_message',
            correlationId,
            {
                message: message,
                parameters: parameters
            }
        );
    }

    public async sendMessageToRecipient(correlationId: string, recipient: EmailRecipientV1,
        message: EmailMessageV1, parameters: ConfigParams): Promise<void> {
        parameters = this._defaultParameters.override(parameters);
        
        await this.callCommand(
            'send_message_to_recipient',
            correlationId,
            {
                recipient: recipient,
                message: message,
                parameters: parameters
            }
        );
    }

    public async sendMessageToRecipients(correlationId: string, recipients: EmailRecipientV1[],
        message: EmailMessageV1, parameters: ConfigParams): Promise<void> {
        parameters = this._defaultParameters.override(parameters);

        await this.callCommand(
            'send_message_to_recipients',
            correlationId,
            {
                recipients: recipients,
                message: message,
                parameters: parameters
            }
        );
    }

}
