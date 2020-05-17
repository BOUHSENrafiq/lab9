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
console.log('Etudiant : '+etudiant1.nom); // affichage du nom
console.log ('moyenne = '+etudiant1.calculerMoyenne()); // affichage de la moyenne
console.log ('Max = ' +etudiant1.getMax()); // afffichage de la note maximale
console.log ('Min = ' +etudiant1.getMin()); // affichage de la note minimale
console.log('Etudiant : '+etudiant2.nom);
console.log ('moyenne = ' +etudiant2.calculerMoyenne());
console.log ('Max = ' +etudiant2.getMax());
console.log ('Min = ' +etudiant2.getMin());
console.log('Etudiant : '+etudiant3.nom);
console.log ('moyenne = ' +etudiant3.calculerMoyenne());
console.log ('Max = ' +etudiant3.getMax());
console.log ('Min = ' +etudiant3.getMin());
/**
 * Création de l'objet cours
 */
const etudiants : Etudiants[]=[etudiant1,etudiant2,etudiant3];
let cours1 = new Cours(1,"java",120,etudiants);
console.log('Titre du cours: '+cours1.title); //affichage du titre du cours
console.log('la moyenne de la classe est: '+cours1.calculerMoyenneCours()); // affichage de la moyenne de la classe
console.log("L'indice de l'étudiant ayant la meilleure moyenne est : "+cours1.getIndexMax()); // affichage de l'indice de l'étudiant qui a la meilleure moyenne
console.log("le nom de l'étudiant ayant la meilleure moyenne est : "+cours1.getNomMax()); // affichage du nom de l'étudiant qui a la meilleur moyenne
console.log("la moyenne est : "+cours1.getMoyenneParNom("salma")); // tapper le nom de personne (parmis les noms des objets etudiant) dont vous voulez afficher la moyenne.
