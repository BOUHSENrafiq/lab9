import {Etudiants} from "./etudiants";

export class Cours {
    private _id: number; // un attribut privé de type number.
    private _title: string; // un attribut privé de type string.
    private _nbrJours: number // un attribut privé de type number.
    private _etudiant: Etudiants[]; //  un tableau d'objets de type Etudiants.

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
    // retourne la moyenne d'un objet de type cours (la moyenne des moyennes des étudiants)
    calculerMoyenneCours():void{}
    // retourne l'indice de l’étudiant dans le tableau etudiants ayant la meilleure moyenne de le cours.
    getIndexMax():void{}
    // affiche le nom du premier étudiant ayant la meilleure moyenne dans le cours.
    getNomMax():void{}
    // affiche la moyenne du premier Etudiant dont le nom est passé en paramètre.
    getMoyenneParNom(nom: string):void{}
}
