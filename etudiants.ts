export class Etudiants {
    private _id: number; // un attribut privée de type nombre.
    private _nom: string; // un attribut privée de type chaîne de caractères
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

    calculerMoyenne() {
        let sum: number = 0;
        for (let i = 0; i < this.notes.length - 1; i++) {
            sum += this.notes[i];
        }
        return  sum / this.notes.length;
    }

    getMax() {
        let max = this.notes[0];
        for (let i = 1; i < this.notes.length - 1; i++) {
            if (this.notes[i] > max) {
                max = this.notes[i];
            }
        }
        return max;
    }

    getMin() {
        let min = this.notes[0];
        for (let i = 0; i < this.notes.length - 1; i++) {
            if (this.notes[i] < min) {
                min = this.notes[i];
            }
        }
        return min;
    }
}
