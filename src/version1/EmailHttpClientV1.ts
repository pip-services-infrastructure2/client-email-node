import { ConfigParams } from 'pip-services3-commons-nodex';
import { CommandableHttpClient } from 'pip-services3-rpc-nodex';

import { EmailMessageV1 } from './EmailMessageV1';
import { EmailRecipientV1 } from './EmailRecipientV1';
import { IEmailClientV1 } from './IEmailClientV1';

export class EmailHttpClientV1 extends CommandableHttpClient implements IEmailClientV1 {
    private _defaultParameters: ConfigParams;

    constructor(config?: any) {
        super('v1/email');

        let thisConfig = ConfigParams.fromValue(config);
        this._defaultParameters = thisConfig.getSection('parameters');
        if (config != null) this.configure(thisConfig);
    }

    public async sendMessage(correlationId: string, message: EmailMessageV1, parameters: ConfigParams): Promise<void> {
        parameters = this._defaultParameters.override(parameters);

        let timing = this.instrument(correlationId, 'email.send_message');

        try {
            await this.callCommand(
                'send_message',
                correlationId,
                {
                    message: message,
                    parameters: parameters
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async sendMessageToRecipient(correlationId: string, recipient: EmailRecipientV1,
        message: EmailMessageV1, parameters: ConfigParams): Promise<void> {
        parameters = this._defaultParameters.override(parameters);

        let timing = this.instrument(correlationId, 'email.send_message_to_recipient');

        try {
            await this.callCommand(
                'send_message_to_recipient',
                correlationId,
                {
                    recipient: recipient,
                    message: message,
                    parameters: parameters
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async sendMessageToRecipients(correlationId: string, recipients: EmailRecipientV1[],
        message: EmailMessageV1, parameters: ConfigParams): Promise<void> {
        parameters = this._defaultParameters.override(parameters);
        
        let timing = this.instrument(correlationId, 'email.send_message_to_recipients');

        try {
            await this.callCommand(
                'send_message_to_recipients',
                correlationId,
                {
                    recipients: recipients,
                    message: message,
                    parameters: parameters
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

}
