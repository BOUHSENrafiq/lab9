import {Etudiants} from "./etudiants";
import {Cours} from "./cours";
import {Activite} from "./activite";

/**
 * création des objets de type Etudiants.
 */
let etudiant1= new Etudiants(1,"smail");
let etudiant2= new Etudiants(2,"salma");
let etudiant3= new Etudiants(3,"siham");
// affectation des notes.
etudiant1.notes[0]=9;
etudiant1.notes.push(10);
etudiant1.notes.push(10);
etudiant1.notes.push(11);
etudiant2.notes[0]=19;
etudiant2.notes.push(19);
etudiant2.notes.push(7);
etudiant2.notes.push(9);
etudiant3.notes[0]=5;
etudiant3.notes.push(20);
etudiant3.notes.push(18);
etudiant3.notes.push(8);
console.log('Etudiant : '+etudiant1.nom);
console.log ('moyenne = '+etudiant1.calculerMoyenne());
console.log ('Max = ' +etudiant1.getMax());
console.log ('Min = ' +etudiant1.getMin());
console.log('Etudiant : '+etudiant2.nom);
console.log ('moyenne = ' +etudiant2.calculerMoyenne());
console.log ('Max = ' +etudiant2.getMax());
console.log ('Min = ' +etudiant2.getMin());
console.log('Etudiant : '+etudiant3.nom);
console.log ('moyenne = ' +etudiant3.calculerMoyenne());
console.log ('Max = ' +etudiant3.getMax());
console.log ('Min = ' +etudiant3.getMin());
const etudiants : Etudiants[]=[etudiant1,etudiant2,etudiant3];
let cours1 = new Cours(1,"java",120,etudiants);
console.log('Titre du cours: '+cours1.title);
console.log('la moyenne de la classe est: '+cours1.calculerMoyenneCours());
console.log("L'indice de l'étudiant ayant la meilleure moyenne est : "+cours1.getIndexMax());
console.log("le nom de l'étudiant ayant la meilleure moyenne est : "+cours1.getNomMax());
