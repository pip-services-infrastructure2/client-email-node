import { Descriptor } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { EmailController } from 'service-email-node';
import { EmailHttpServiceV1 } from 'service-email-node';

import { EmailCommandableHttpClientV1 } from '../../src/version1/EmailCommandableHttpClientV1';
import { EmailClientFixtureV1 } from './EmailClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('EmailHttpCommandableClientV1', ()=> {
    let service: EmailHttpServiceV1;
    let client: EmailCommandableHttpClientV1;
    let fixture: EmailClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let controller = new EmailController();
        controller.configure(ConfigParams.fromTuples(
            "options.disabled", true
        ));

        service = new EmailHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-email', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('service-email', 'service', 'commandable-http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new EmailCommandableHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new EmailClientFixtureV1(client);

        await service.open(null);
        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
        await service.close(null);
    });

    test('Send Email to Address', async () => {
        await fixture.testSendEmailToAddress();
    });

    test('Send Email to Recipients', async () => {
        await fixture.testSendEmailToRecipients();
    });

});
