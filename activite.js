"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *@author rafiq BOUHSEN
 */
var Activite = /** @class */ (function () {
    /**Constructor
     *
     * @param id
     * @param title
     * @param Description
     * @param urlYoutube
     */
    function Activite(id, title, Description, urlYoutube) {
        this._id = id;
        this._title = title;
        this._Description = Description;
        this._urlYoutube = urlYoutube;
    }
    Object.defineProperty(Activite.prototype, "id", {
        /**
         *  Les getters et les setters.
         */
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Activite.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            this._title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Activite.prototype, "Description", {
        get: function () {
            return this._Description;
        },
        set: function (value) {
            this._Description = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Activite.prototype, "urlYoutube", {
        get: function () {
            return this._urlYoutube;
        },
        set: function (value) {
            this._urlYoutube = value;
        },
        enumerable: true,
        configurable: true
    });
    return Activite;
}());
exports.Activite = Activite;
//# sourceMappingURL=activite.js.map