"use strict";
/**
 * @author rafiq BOUHSEN
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *  @class Cours
 */
var Cours = /** @class */ (function () {
    function Cours(id, title, nbrJours, etudiant) {
        this._id = id;
        this._title = title;
        this._nbrJours = nbrJours;
        this._etudiant = etudiant;
    }
    Object.defineProperty(Cours.prototype, "id", {
        /**
         * les getters et les setters des attributs: id, title, nbrJours et etudiant
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
    Object.defineProperty(Cours.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            this._title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cours.prototype, "nbrJours", {
        get: function () {
            return this._nbrJours;
        },
        set: function (value) {
            this._nbrJours = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cours.prototype, "etudiant", {
        get: function () {
            return this._etudiant;
        },
        set: function (value) {
            this._etudiant = value;
        },
        enumerable: true,
        configurable: true
    });
    /** Retourne la moyenne d'un objet de type cours (la moyenne des moyennes des étudiants)
     *
     */
    Cours.prototype.calculerMoyenneCours = function () {
        var sum = 0;
        console.log('nombre des etudiants est: ' + this.etudiant.length);
        for (var i = 0; i < this.etudiant.length; i++) {
            sum += this.etudiant[i].calculerMoyenne(); // calcul de la somme des moyennes des étudiants
        }
        return sum / this.etudiant.length; // calcul de la moyenne de la classe
    };
    return Cours;
}());
exports.Cours = Cours;
//# sourceMappingURL=cours.js.map