var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var object;
(function (object) {
    var Lable = /** @class */ (function (_super) {
        __extends(Lable, _super);
        /**
         *Creates an instance of Lable.
         * @param {string} text
         * @param {string} fontSize
         * @param {string} fontFamily
         * @param {string} fontColour
         * @param {number} [x=0]
         * @param {number} [y=0]
         * @param {boolean} [isCentered=false]
         * @memberof Lable
         */
        function Lable(text, fontSize, fontFamily, fontColour, x, y, isCentered) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (isCentered === void 0) { isCentered = false; }
            var _this = _super.call(this, text, fontSize + " " + fontFamily, fontColour) || this;
            _this.isCentered = isCentered;
            _this._intialize();
            if (isCentered) {
                _this.regX = _this.halfWidth;
                _this.regY = _this.halfHeight;
            }
            _this.x = x;
            _this.y = y;
            return _this;
        }
        /**
         *
         *
         * @private
         * @memberof Lable
         */
        Lable.prototype._intialize = function () {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width * 0.5;
            this.halfHeight = this.width * 0.5;
        };
        Lable.prototype.Start = function () {
        };
        Lable.prototype.update = function () {
        };
        return Lable;
    }(createjs.Text));
    object.Lable = Lable;
})(object || (object = {}));
//# sourceMappingURL=label.js.map