'use strict';

// Membri del team
const team = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        'stringa della foto': 'wayne-barnett-founder-ceo.jpg'
    },

    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        'stringa della foto': 'angela-caroll-chief-editor.jpg'
    },

    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        'stringa della foto': 'walter-gordon-office-manager.jpg'
    },

    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        'stringa della foto': 'angela-lopez-social-media-manager.jpg'
    },

    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        'stringa della foto': 'scott-estrada-developer.jpg'
    },

    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        'stringa della foto': 'barbara-ramos-graphic-designer.jpg'
    }
]

const container = document.getElementById('container');

// Ciclo per prendere i singoli elementi della lista
for (let i = 0; i < team.length; i++) {
    console.log(team[i]);
    const person = team[i];

    // Box membri del team
    const personBox = document.createElement('div');
    personBox.classList.add('box');
    container.append(personBox);

    // Singolo membro del team
    personBox.innerHTML = `<div class="image"><img src="img/${person['stringa della foto']}"></div><div class="name">${person.nome}</div><div class="role">${person.ruolo}</div>`;

    //Ciclo per prendere le singole proprietà dell'oggetto 
    for (let key in person) {
        console.log(`${key}: ${person[key]}`);
    }
}