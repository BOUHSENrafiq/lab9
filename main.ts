import { Etudiants} from "./etudiants";
import {Cours} from "./cours";
import {Activite} from "./activite";

let etudiant1= new Etudiants(1,"smail");
etudiant1.notes[0]=9;
etudiant1.notes.push(10);
etudiant1.notes.push(10);
etudiant1.notes.push(11);
console.log ('moyenne = ' + etudiant1.calculerMoyenne());
console.log ('Max = ' + etudiant1.getMax());
console.log ('Min = ' + etudiant1.getMin());

