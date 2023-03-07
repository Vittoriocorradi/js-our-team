'use strict';

// FUNZIONI

// Funzione per creare e appendere un singolo elemento
function createAppendSingle(container, element) {
    const list = document.createElement(element);
    container.append(list);
    return list;
}

// MAIN

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
    const person = team[i];
    console.log(`Membro ${i + 1}`);
    
    // Creo ul appesi al contenitore
    const list = createAppendSingle(container, 'ul');
    list.append(`Membro ${i + 1}`);

    //Ciclo per prendere le singole proprietà dell'oggetto 
    for (let key in person) {

        // Creo li appesi agli ul
        const listElement = createAppendSingle(list, 'li');
        console.log(`${key}: ${person[key]}`);
        listElement.innerHTML = `${key}: ${person[key]}`;
    }
}