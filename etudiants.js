"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Etudiants = void 0;
var Etudiants = /** @class */ (function () {
    function Etudiants(id, nom) {
        this.notes = [];
        this._id = id;
        this._nom = nom;
    }
    Object.defineProperty(Etudiants.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Etudiants.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        set: function (value) {
            this._nom = value;
        },
        enumerable: false,
        configurable: true
    });
    Etudiants.prototype.calculerMoyenne = function () {
        var sum = 0;
        var moyenne = 0;
        for (var i = 0; i < this.notes.length - 1; i++) {
            sum += this.notes[i];
            moyenne = sum / this.notes.length;
        }
        return moyenne;
    };
    Etudiants.prototype.getMax = function () {
        var max;
        for (var i = 0; i < this.notes.length - 1; i++) {
            if (this.notes[i] > this.notes[i + 1]) {
                max = this.notes[i];
            }
            return max;
        }
    };
    Etudiants.prototype.getMin = function () {
        var min;
        for (var i = 0; i < this.notes.length - 1; i++) {
            if (this.notes[i] < this.notes[i + 1]) {
                min = this.notes[i];
            }
            return min;
        }
    };
    return Etudiants;
}());
exports.Etudiants = Etudiants;
