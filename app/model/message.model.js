var Message = /** @class */ (function () {
    function Message(text, created) {
        if (text === void 0) { text = ''; }
        if (created === void 0) { created = Date.now(); }
        this.text = text;
        this.created = created;
    }
    Message.newEmptyMessage = function () {
        return new Message();
    };
    Message.prototype.toString = function () {
        var _a = this, created = _a.created, text = _a.text;
        return "Message created at: " + created + " - Text: " + text;
    };
    return Message;
}());
export default Message;
var m = new Message();
