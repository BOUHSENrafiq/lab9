"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Etudiants = /** @class */ (function () {
    /**
     * constructor de la classe Etudiant
     * @param id
     * @param nom
     */
    function Etudiants(id, nom) {
        /**
         * variable notes
         * @type {(number|Array.)}
         */
        this.notes = []; // un attribut privée de type tableau de nombres
        this._id = id;
        this._nom = nom;
    }
    Object.defineProperty(Etudiants.prototype, "id", {
        /**
         * les getters et les setters des attributs id et nom
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
    Object.defineProperty(Etudiants.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        set: function (value) {
            this._nom = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @ return la moyenne d'un étudiant
     */
    Etudiants.prototype.calculerMoyenne = function () {
        /**
         * variable sum
         * @type {number}
         */
        var sum = 0;
        for (var i = 0; i < this.notes.length; i++) {
            sum += this.notes[i];
        }
        return sum / this.notes.length;
    };
    /**
     * @return la note max d'un étudiant.
     */
    Etudiants.prototype.getMax = function () {
        var max = this.notes[0];
        for (var i = 0; i < this.notes.length; i++) {
            if (this.notes[i] > max) {
                max = this.notes[i];
            }
        }
        return max;
    };
    /**
     * @return la note min d'un étudiant.
     */
    Etudiants.prototype.getMin = function () {
        var min = this.notes[0];
        for (var i = 0; i < this.notes.length - 1; i++) {
            if (this.notes[i] < min) {
                min = this.notes[i];
            }
        }
        return min;
    };
    return Etudiants;
}());
exports.Etudiants = Etudiants;
//# sourceMappingURL=etudiants.js.map