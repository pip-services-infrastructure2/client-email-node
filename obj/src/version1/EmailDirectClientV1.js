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
exports.EmailDirectClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_2 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
//import { IEmailController } from 'service-email-node';
class EmailDirectClientV1 extends pip_services3_rpc_nodex_1.DirectClient {
    constructor(config) {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_nodex_2.Descriptor("service-email", "controller", "*", "*", "*"));
        let thisConfig = pip_services3_commons_nodex_1.ConfigParams.fromValue(config);
        this._defaultParameters = thisConfig.getSection('parameters');
        if (config != null)
            this.configure(thisConfig);
    }
    sendMessage(correlationId, message, parameters) {
        return __awaiter(this, void 0, void 0, function* () {
            parameters = this._defaultParameters.override(parameters);
            let timing = this.instrument(correlationId, 'email.send_message');
            try {
                yield this._controller.sendMessage(correlationId, message, parameters);
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
            let timing = this.instrument(correlationId, 'email.send_message_to_recipient');
            try {
                yield this._controller.sendMessageToRecipient(correlationId, recipient, message, parameters);
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
            let timing = this.instrument(correlationId, 'email.send_message_to_recipients');
            try {
                yield this._controller.sendMessageToRecipients(correlationId, recipients, message, parameters);
                timing.endTiming();
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
}
exports.EmailDirectClientV1 = EmailDirectClientV1;
//# sourceMappingURL=EmailDirectClientV1.js.map