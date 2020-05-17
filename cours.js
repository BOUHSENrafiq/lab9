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
        return sum / this.etudiant.length; // calcul de la moyenne de la classe dans un cours
    };
    /** Retourne l'indice de l’étudiant dans le tableau etudiants ayant la meilleure moyenne du cours.
     *
     */
    Cours.prototype.getIndexMax = function () {
        var max = this.etudiant[0].calculerMoyenne(); // initialiser le max
        var indice = 0; // initialiser l'indice à 0
        var nom = this.etudiant[0].nom;
        for (var i = 0; i < this.etudiant.length; i++) { // boucle for pour parcourir les élément du tableau
            if (this.etudiant[i].calculerMoyenne() > max) { // condition  sur les éléments du tableau : pour détérminer la moyenne
                //max = this.etudiant[i].calculerMoyenne(); pour afficher la meilleur moyenne.
                indice = i; // affectation de l'indice
            }
        }
        return indice;
    };
    /** Affiche le nom du premier étudiant ayant la meilleure moyenne dans le cours.
     *
     */
    Cours.prototype.getNomMax = function () {
        var max = this.etudiant[0].calculerMoyenne();
        var nom = this.etudiant[0].nom;
        for (var i = 0; i < this.etudiant.length; i++) { // boucle for pour parcourir les élément du tableau
            if (this.etudiant[i].calculerMoyenne() > max) { // condition  sur les éléments du tableau : pour détérminer la moyenne la plus grande
                nom = this.etudiant[i].nom; // détérminer le nom
            }
        }
        return nom;
    };
    /** Affiche la moyenne du premier Etudiant dont le nom est passé en paramètre.
     *
     * @param nom
     */
    Cours.prototype.getMoyenneParNom = function (nom) {
    };
    return Cours;
}());
exports.Cours = Cours;
//# sourceMappingURL=cours.js.map