const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

// MILESTONE 1:
// stampare su console le informazioni di nome, ruolo e la stringa della foto

// stampa con dot notation
for (let i = 0; i < team.length; i++) {
    const infoElement = team[i];
    console.log(infoElement.name, infoElement.role, infoElement.image);
}
// MILESTONE 2:
// stampare le stesse informazioni su DOM sottoforma di stringhe
// const teamInfoDom = document.querySelector('.team');
// let myString = JSON.stringify(person);
// document.getElementById("demo").innerHTML = myString;

let teamInfoDom = JSON.stringify(team);
document.getElementById("team").innerHTML = teamInfoDom;
