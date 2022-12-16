import { ConfigParams } from 'pip-services3-commons-nodex';
import { CommandableHttpClient } from 'pip-services3-rpc-nodex';

import { EmailMessageV1 } from './EmailMessageV1';
import { EmailRecipientV1 } from './EmailRecipientV1';
import { IEmailClientV1 } from './IEmailClientV1';

export class EmailCommandableHttpClientV1 extends CommandableHttpClient implements IEmailClientV1 {
    private _defaultParameters: ConfigParams;

    constructor(config?: any) {
        super('v1/email');

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
