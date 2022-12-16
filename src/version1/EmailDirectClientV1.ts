import { ConfigParams } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';
import { DirectClient } from 'pip-services3-rpc-nodex';

import { IEmailClientV1 } from './IEmailClientV1';
import { EmailMessageV1 } from './EmailMessageV1';
import { EmailRecipientV1 } from './EmailRecipientV1';

//import { IEmailController } from 'service-email-node';

export class EmailDirectClientV1 extends DirectClient<any> implements IEmailClientV1 {
    private _defaultParameters: ConfigParams;

    public constructor(config?: any) {
        super();
        this._dependencyResolver.put('controller', new Descriptor("service-email", "controller", "*", "*", "*"));

        let thisConfig = ConfigParams.fromValue(config);
        this._defaultParameters = thisConfig.getSection('parameters');
        if (config != null) this.configure(thisConfig);
    }
    
    public async sendMessage(correlationId: string, message: EmailMessageV1, parameters: ConfigParams): Promise<void> {
        parameters = this._defaultParameters.override(parameters);
        let timing = this.instrument(correlationId, 'email.send_message');
        

        try {
            await this._controller.sendMessage(correlationId, message, parameters);
            timing.endTiming();
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async sendMessageToRecipient(correlationId: string, recipient: EmailRecipientV1,
        message: EmailMessageV1, parameters: ConfigParams): Promise<void> {
        parameters = this._defaultParameters.override(parameters);
        let timing = this.instrument(correlationId, 'email.send_message_to_recipient');
        
        try {
            await this._controller.sendMessageToRecipient(correlationId, recipient, message, parameters);
            timing.endTiming();
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async sendMessageToRecipients(correlationId: string, recipients: EmailRecipientV1[],
        message: EmailMessageV1, parameters: ConfigParams): Promise<void> {
        parameters = this._defaultParameters.override(parameters);
        let timing = this.instrument(correlationId, 'email.send_message_to_recipients');
        
        try {
            await this._controller.sendMessageToRecipients(correlationId, recipients, message, parameters);
            timing.endTiming();
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

}