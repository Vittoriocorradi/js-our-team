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

// Ciclo per prendere i singoli elementi della lista
for (let i = 0; i < team.length; i++) {
    const person = team[i];
    console.log(`Membro ${i + 1}`);

    //Ciclo per prendere le singole proprietà dell'oggetto 
    for (let key in team[i]) {
        console.log(`${key}: ${team[i][key]}`);
    }
}