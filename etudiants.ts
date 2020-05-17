/**
 * @author rafiq BOUHSEN
 */

/**
 * @class Etudiants
 */
export class Etudiants {
    /**
     * variable id
     * @type {number}
     */
    private _id: number; // un attribut privée de type nombre.
    /**
     * variable nom
     * @type {string}
     */
    private _nom: string; // un attribut privée de type chaîne de caractères
    /**
     * variable notes
     * @type {(number|Array.)}
     */
    public notes: number[] = []; // un attribut privée de type tableau de nombres

    /**
     * constructor de la classe Etudiant
     * @param id
     * @param nom
     */
    constructor(id: number, nom: string) {
        this._id = id;
        this._nom = nom;
    }

    /**
     * les getters et les setters des attributs id et nom
     */
    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get nom(): string {
        return this._nom;
    }

    set nom(value: string) {
        this._nom = value;
    }

    /**
     * @ return la moyenne d'un étudiant
     */
    calculerMoyenne() {
        /**
         * variable sum
         * @type {number}
         */
        let sum: number = 0;
        for (let i = 0; i < this.notes.length; i++) {
            sum += this.notes[i]; // calcul de la somme des notes
        }
        return  sum/this.notes.length; // calcul de la moyenne; la moyenne est égale à la somme des notes divisée par le nombre des notes (la longueur du tableau)
    }
    /**
     * @return la note max d'un étudiant.
     */
    getMax() {
        let max = this.notes[0];
        for (let i = 0; i < this.notes.length; i++) {
            if (this.notes[i] > max) {
                max = this.notes[i];
            }
        }
        return max;
    }
    /**
     * @return la note min d'un étudiant.
     */
    getMin() {
        let min = this.notes[0];
        for (let i = 0; i < this.notes.length; i++) {
            if (this.notes[i] < min) {
                min = this.notes[i];
            }
        }
        return min;
    }
}
