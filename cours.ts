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


    /** Retourne la moyenne d'un objet de type cours (la moyenne des moyennes des étudiants)
     *
     */
    calculerMoyenneCours(): void {
    }

    /** Retourne l'indice de l’étudiant dans le tableau etudiants ayant la meilleure moyenne de le cours.
     *
     */
    getIndexMax(): void {
    }

    /** Affiche le nom du premier étudiant ayant la meilleure moyenne dans le cours.
     *
     */
    getNomMax(): void {
    }

    /** Affiche la moyenne du premier Etudiant dont le nom est passé en paramètre.
     *
     * @param nom
     */
    getMoyenneParNom(nom: string): void {
    }
}
