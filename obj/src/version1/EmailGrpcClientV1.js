"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailGrpcClientV1 = void 0;
const services = require('../../../src/protos/email_v1_grpc_pb');
const messages = require('../../../src/protos/email_v1_pb');
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_grpc_nodex_1 = require("pip-services3-grpc-nodex");
const EmailGrpcConverterV1_1 = require("./EmailGrpcConverterV1");
class EmailGrpcClientV1 extends pip_services3_grpc_nodex_1.GrpcClient {
    constructor(config) {
        super(services.EmailClient);
        let thisConfig = pip_services3_commons_nodex_1.ConfigParams.fromValue(config);
        this._defaultParameters = thisConfig.getSection('parameters');
        if (config != null)
            this.configure(thisConfig);
    }
    sendMessage(correlationId, message, parameters) {
        return __awaiter(this, void 0, void 0, function* () {
            parameters = this._defaultParameters.override(parameters);
            let request = new messages.EmailMessageRequest();
            request.setMessage(EmailGrpcConverterV1_1.EmailGrpcConverterV1.fromMessage(message));
            EmailGrpcConverterV1_1.EmailGrpcConverterV1.setMap(request.getParametersMap(), parameters);
            let timing = this.instrument(correlationId, 'email.send_message');
            try {
                let response = yield this.call('send_message', correlationId, request);
                if (response.error != null)
                    throw EmailGrpcConverterV1_1.EmailGrpcConverterV1.toError(response.error);
                timing.endTiming();
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    sendMessageToRecipient(correlationId, recipient, message, parameters) {
        return __awaiter(this, void 0, void 0, function* () {
            parameters = this._defaultParameters.override(parameters);
            let request = new messages.EmailMessageWithRecipientRequest();
            request.setMessage(EmailGrpcConverterV1_1.EmailGrpcConverterV1.fromMessage(message));
            EmailGrpcConverterV1_1.EmailGrpcConverterV1.setMap(request.getParametersMap(), parameters);
            request.setRecipient(EmailGrpcConverterV1_1.EmailGrpcConverterV1.fromRecipient(recipient));
            let timing = this.instrument(correlationId, 'email.send_message_to_recipient');
            try {
                let response = yield this.call('send_message_to_recipient', correlationId, request);
                if (response.error != null)
                    throw EmailGrpcConverterV1_1.EmailGrpcConverterV1.toError(response.error);
                timing.endTiming();
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    sendMessageToRecipients(correlationId, recipients, message, parameters) {
        return __awaiter(this, void 0, void 0, function* () {
            parameters = this._defaultParameters.override(parameters);
            let request = new messages.EmailMessageWithRecipientsRequest();
            request.setMessage(EmailGrpcConverterV1_1.EmailGrpcConverterV1.fromMessage(message));
            EmailGrpcConverterV1_1.EmailGrpcConverterV1.setMap(request.getParametersMap(), parameters);
            request.setRecipientList(EmailGrpcConverterV1_1.EmailGrpcConverterV1.fromRecipients(recipients));
            let timing = this.instrument(correlationId, 'email.send_message_to_recipients');
            try {
                let response = yield this.call('send_message_to_recipients', correlationId, request);
                if (response.error != null)
                    throw EmailGrpcConverterV1_1.EmailGrpcConverterV1.toError(response.error);
                timing.endTiming();
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
}
exports.EmailGrpcClientV1 = EmailGrpcClientV1;
//# sourceMappingURL=EmailGrpcClientV1.js.map