define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventManager = /** @class */ (function () {
        function EventManager() {
            this.listeners = {};
        }
        EventManager.prototype.addListener = function (eventName, callable) {
            if (!(this.listeners[eventName] instanceof Array)) {
                this.listeners[eventName] = [];
            }
            this.listeners[eventName].push(callable);
        };
        EventManager.prototype.runEvent = function (eventName) {
            for (var _i = 0, _a = this.listeners[eventName]; _i < _a.length; _i++) {
                var callable = _a[_i];
                callable();
            }
        };
        return EventManager;
    }());
    exports.default = EventManager;
});
//# sourceMappingURL=event-manager.js.map