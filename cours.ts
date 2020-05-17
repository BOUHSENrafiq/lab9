/**
 * @author rafiq BOUHSEN
 */

import {Etudiants} from "./etudiants";

/**
 *  @class Cours
 */
export class Cours {
    /**id
     * @type {number}
     */
    private _id: number; // un attribut privé de type number.
    /**title
     * @type {number}
     */
    private _title: string; // un attribut privé de type string.
    /** nbrJours
     * @type {number}
     */
    private _nbrJours: number // un attribut privé de type number.
    /** etudiant
     * @type {(number|Array)}
     */
    private _etudiant: Etudiants[]; //  un tableau d'objets de type Etudiants.
    /**
     * les getters et les setters des attributs: id, title, nbrJours et etudiant
     */
    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get nbrJours(): number {
        return this._nbrJours;
    }

    set nbrJours(value: number) {
        this._nbrJours = value;
    }

    get etudiant(): Etudiants[] {
        return this._etudiant;
    }

    set etudiant(value: Etudiants[]) {
        this._etudiant = value;
    }


    constructor(id: number, title: string, nbrJours: number, etudiant: Etudiants[]) {
        this._id = id;
        this._title = title;
        this._nbrJours = nbrJours;
        this._etudiant = etudiant;
    }

    /** Retourne la moyenne d'un objet de type cours (la moyenne des moyennes des étudiants)
     *
     */
    calculerMoyenneCours() {
        let sum: number = 0;
        console.log('nombre des etudiants est: '+this.etudiant.length);
        for (let i = 0; i < this.etudiant.length; i++) {
            sum += this.etudiant[i].calculerMoyenne();     // calcul de la somme des moyennes des étudiants
        }
        return  sum/this.etudiant.length;  // calcul de la moyenne de la classe dans un cours
    }

    /** Retourne l'indice de l’étudiant dans le tableau etudiants ayant la meilleure moyenne du cours.
     *
     */
    getIndexMax() {
        let max = this.etudiant[0].calculerMoyenne(); // initialiser le max
        let indice=0; // initialiser l'indice à 0
        let nom:string = this.etudiant[0].nom;
        for (let i=0; i < this.etudiant.length; i++) {  // boucle for pour parcourir les élément du tableau
            if (this.etudiant[i].calculerMoyenne() > max){   // condition  sur les éléments du tableau : pour détérminer la moyenne
            //max = this.etudiant[i].calculerMoyenne(); pour afficher la meilleur moyenne.
            indice = i;  // affectation de l'indice
            }
        }
        return indice;
    }

    /** Affiche le nom du premier étudiant ayant la meilleure moyenne dans le cours.
     *
     */
    getNomMax(){
        let max = this.etudiant[0].calculerMoyenne();
        let nom:string = this.etudiant[0].nom;
        for (let i=0; i < this.etudiant.length; i++) {  // boucle for pour parcourir les élément du tableau
            if (this.etudiant[i].calculerMoyenne() > max){   // condition  sur les éléments du tableau : pour détérminer la moyenne la plus grande
                nom = this.etudiant[i].nom; // détérminer le nom
            }
        }
        return nom;
    }

    /** Affiche la moyenne du premier Etudiant dont le nom est passé en paramètre.
     *
     * @param nom
     */
    getMoyenneParNom(nom: string) {

    }
}
