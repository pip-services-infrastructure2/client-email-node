import { ConfigParams } from 'pip-services3-commons-nodex';

import { IEmailClientV1 } from './IEmailClientV1';
import { EmailMessageV1 } from './EmailMessageV1';
import { EmailRecipientV1 } from './EmailRecipientV1';

export class EmailNullClientV1 implements IEmailClientV1 {
    public sendMessage(correlationId: string, message: EmailMessageV1, parameters: ConfigParams): Promise<void> {
        return null;
    }
    public sendMessageToRecipient(correlationId: string, recipient: EmailRecipientV1, message: EmailMessageV1, parameters: ConfigParams): Promise<void> {
        return null;
    }
    public sendMessageToRecipients(correlationId: string, recipients: EmailRecipientV1[], message: EmailMessageV1, parameters: ConfigParams): Promise<void> {
        return null;
    }
}