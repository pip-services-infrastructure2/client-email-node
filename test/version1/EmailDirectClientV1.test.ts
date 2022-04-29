import { Descriptor } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { EmailController } from 'service-email-node';
import { EmailDirectClientV1 } from '../../src/version1/EmailDirectClientV1';
import { EmailClientFixtureV1 } from './EmailClientFixtureV1';

suite('EmailDirectClientV1', ()=> {
    let client: EmailDirectClientV1;
    let fixture: EmailClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let controller = new EmailController();
        controller.configure(ConfigParams.fromTuples(
            "options.disabled", true
        ));

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-email', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new EmailDirectClientV1();
        client.setReferences(references);

        fixture = new EmailClientFixtureV1(client);

        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
    });

    test('Send Email to Address', async () => {
        await fixture.testSendEmailToAddress();
    });

    test('Send Email to Recipients', async () => {
        await fixture.testSendEmailToRecipients();
    });

});
