"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var etudiants_1 = require("./etudiants");
var etudiant1 = new etudiants_1.Etudiants(1, "smail");
etudiant1.notes[0] = 8;
etudiant1.notes.push(10);
etudiant1.notes.push(2);
etudiant1.notes.push(11);
console.log('moyenne = ' + etudiant1.calculerMoyenne());
console.log('Max = ' + etudiant1.getMax());
console.log('Min = ' + etudiant1.getMin());
