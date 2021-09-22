"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 型は引数にクラスを持って、その引数はレストパラメータでいくつあってもいい。戻り値は書かれた型を返す形の関数でなければいけない。
function Timestamped(Base) {
    // BaseにUserが割り当てられて、開始する。（UserはConstructor型に適合するかを検討しないといけない。）
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.timestamp = Date.now();
            return _this;
            // Userにtimestampを拡張したクラスを返却する。
        }
        return class_1;
    }(Base));
}
function Activatable(Base) {
    // BaseにUserが割り当てられて、開始する。（UserはConstructor型に適合するかを検討しないといけない。）
    return /** @class */ (function (_super) {
        __extends(class_2, _super);
        function class_2() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // Userをベースにして以下を拡張する。
            // そして拡張したものを返却する。
            _this.isActivated = false;
            return _this;
        }
        class_2.prototype.activate = function () {
            this.isActivated = true;
        };
        class_2.prototype.deactivate = function () {
            this.isActivated = false;
        };
        return class_2;
    }(Base));
}
var User = /** @class */ (function () {
    function User() {
        this.name = '';
    }
    return User;
}());
var TimestampedUser = Timestamped(User);
// Userクラスにtimestampのプロパティが追加されたものがTimestampedUserに格納されてる。
var ActivatableUser = Activatable(User);
// UserクラスにisActivatedプロパティ、activateメソッド、deactivateメソッドが追加されたものがActivatableUserに格納されてる。
var TimestampedActivatableUser = Timestamped(Activatable(User));
// isActivated, activate, deactivateを追加したUserに更にtimestampedを追加したものをTimestampedActivatableUserに格納してる。
var TimestampedActivatableUserExample = new TimestampedActivatableUser();
// それのインスタンスを作成する。
console.log(TimestampedActivatableUserExample.timestamp);
console.log(TimestampedActivatableUserExample.isActivated);
