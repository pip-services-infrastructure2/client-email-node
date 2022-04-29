import { ConfigParams } from 'pip-services3-commons-nodex';

import { EmailClientFixtureV1 } from './EmailClientFixtureV1';
import { EmailLambdaClientV1 } from '../../src/version1/EmailLambdaClientV1';

suite('EmailLambdaClient', ()=> {
    let AWS_LAMDBA_ARN = process.env["AWS_LAMDBA_ARN"] || "";
    let AWS_ACCESS_ID = process.env["AWS_ACCESS_ID"] || "";
    let AWS_ACCESS_KEY = process.env["AWS_ACCESS_KEY"] || "";

    if (!AWS_LAMDBA_ARN || !AWS_ACCESS_ID || !AWS_ACCESS_KEY)
        return;

    let config = ConfigParams.fromTuples(
        'connection.protocol', 'aws',
        'connection.arn', AWS_LAMDBA_ARN,
        'credential.access_id', AWS_ACCESS_ID,
        'credential.access_key', AWS_ACCESS_KEY
    )

    let client: EmailLambdaClientV1;
    let fixture: EmailClientFixtureV1;

    setup(async () => {
        client = new EmailLambdaClientV1();
        client.configure(config);

        fixture = new EmailClientFixtureV1(client);

        await client.open(null);
    });

    teardown(async () => {
        await client.close(null);
    });

    test('Send Email to Address', async () => {
        await fixture.testSendEmailToAddress();
    });

    test('Send Email to Recipients', async () => {
        await fixture.testSendEmailToRecipients();
    });

});