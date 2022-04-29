"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailNullClientV1 = void 0;
class EmailNullClientV1 {
    sendMessage(correlationId, message, parameters) {
        return null;
    }
    sendMessageToRecipient(correlationId, recipient, message, parameters) {
        return null;
    }
    sendMessageToRecipients(correlationId, recipients, message, parameters) {
        return null;
    }
}
exports.EmailNullClientV1 = EmailNullClientV1;
//# sourceMappingURL=EmailNullClientV1.js.map