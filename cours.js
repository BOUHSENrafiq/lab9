"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cours = void 0;
var Cours = /** @class */ (function () {
    function Cours() {
    }
    Object.defineProperty(Cours.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cours.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            this._title = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cours.prototype, "nbrJours", {
        get: function () {
            return this._nbrJours;
        },
        set: function (value) {
            this._nbrJours = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cours.prototype, "etudiant", {
        get: function () {
            return this._etudiant;
        },
        set: function (value) {
            this._etudiant = value;
        },
        enumerable: false,
        configurable: true
    });
    // retourne la moyenne d'un objet de type cours (la moyenne des moyennes des étudiants)
    Cours.prototype.calculerMoyenneCours = function () { };
    // retourne l'indice de l’étudiant dans le tableau etudiants ayant la meilleure moyenne de le cours.
    Cours.prototype.getIndexMax = function () { };
    // affiche le nom du premier étudiant ayant la meilleure moyenne dans le cours.
    Cours.prototype.getNomMax = function () { };
    // affiche la moyenne du premier Etudiant dont le nom est passé en paramètre.
    Cours.prototype.getMoyenneParNom = function (nom) { };
    return Cours;
}());
exports.Cours = Cours;
