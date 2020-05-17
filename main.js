"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var etudiants_1 = require("./etudiants");
var cours_1 = require("./cours");
/**
 * création des objets de type Etudiants.
 */
var etudiant1 = new etudiants_1.Etudiants(1, "smail");
var etudiant2 = new etudiants_1.Etudiants(2, "salma");
var etudiant3 = new etudiants_1.Etudiants(3, "siham");
// affectation des notes.
etudiant1.notes[0] = 9;
etudiant1.notes.push(10);
etudiant1.notes.push(10);
etudiant1.notes.push(11);
etudiant2.notes[0] = 5;
etudiant2.notes.push(19);
etudiant2.notes.push(7);
etudiant2.notes.push(9);
etudiant3.notes[0] = 5;
etudiant3.notes.push(20);
etudiant3.notes.push(3);
etudiant3.notes.push(8);
console.log('Etudiant : ' + etudiant1.nom);
console.log('moyenne = ' + etudiant1.calculerMoyenne());
console.log('Max = ' + etudiant1.getMax());
console.log('Min = ' + etudiant1.getMin());
console.log('Etudiant : ' + etudiant2.nom);
console.log('moyenne = ' + etudiant2.calculerMoyenne());
console.log('Max = ' + etudiant2.getMax());
console.log('Min = ' + etudiant2.getMin());
console.log('Etudiant : ' + etudiant3.nom);
console.log('moyenne = ' + etudiant3.calculerMoyenne());
console.log('Max = ' + etudiant3.getMax());
console.log('Min = ' + etudiant3.getMin());
var etudiants = [etudiant1, etudiant2, etudiant3];
var cours1 = new cours_1.Cours(1, "java", 120, etudiants);
console.log('Titre du cours: ' + cours1.title);
console.log('la moyenne de la classe est: ' + cours1.calculerMoyenneCours());
console.log("L'indice de l'étudiant est : " + cours1.getIndexMax());
//# sourceMappingURL=main.js.map