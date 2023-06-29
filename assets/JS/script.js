const humberger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-list');
const logo = document.querySelector('.logo');
const bars = document.querySelector('.fa-bars');
humberger.addEventListener('click', () => {
  humberger.classList.toggle('active');
  navMenu.classList.toggle('active');
  logo.classList.toggle('active');
  bars.classList.toggle('active');
});
document.querySelectorAll('.nav-items').forEach((n) => n.addEventListener('click', () => {
  humberger.classList.remove('active');
  navMenu.classList.remove('active');
  logo.classList.remove('active');
  bars.classList.remove('active');
}));

const playerDetails = [
  {
    fullName: 'Islam Amiri',
    position: 'Centre-back',
    description: 'Amiri made his debut in the 2005 SAFF Gold Cup against Maldives.',
    playerImage: '/assets/images/guest-player-1.png',
    altText: 'Islam Amiri',
  },
  {
    fullName: 'Faysal Shayesteh',
    position: 'Attacking midfielder',
    description: 'Born in Kabul, Shayesteh moved to the Netherlands and played in the youth academy',
    playerImage: '/assets/images/guest-player-2.png',
    altText: 'Faysal Shayesteh',
  },
  {
    fullName: 'Abassin Alikhil',
    position: 'Defensive midfielder',
    description: 'Abassin Alikhil is an Afghan professional footballer who plays as a defensive midfielder.',
    playerImage: '/assets/images/guest-player-3.png',
    altText: 'Abassin Alikhil',
  },
  {
    fullName: 'Mustafa Hadid',
    position: 'Right back',
    description: 'Born in Kabul, Hadid moved to Hamburg with his family in 2016 escaping the Third Afghan Civil War (1996–2001).',
    playerImage: '/assets/images/guest-player-4.png',
    altText: 'Mustafa Hadid',
  },
];

window.addEventListener('load', () => {
  document
    .querySelector('.more-btn')
    .addEventListener('click', () => {
      document.querySelector(
        '.players-feature',
      ).style.maxHeight = '100%';
      document.querySelector(
        '.more-btn',
      ).style.display = 'none';
    });

  const player = document.querySelector('.players-feature');

  for (let i = 0; i < playerDetails.length; i += 1) {
    const card = `
  <div class="col-md-6">
    <div class="row p-lg-4">
        <div class="players">
            <div class="col-md-6 align-self-start">
                <img src="${playerDetails[i].playerImage}" alt="${playerDetails[i].altText}" class="guest-player-1">
            </div>
            <div class="col-md-6  p-lg-4 txt-cus">
                <h3>${playerDetails[i].fullName}</h3>
                <p class="player-position">
                    ${playerDetails[i].position}
                </p>
                <div class="border-players"></div>
                <p>
                    ${playerDetails[i].description}
                </p>
            </div>
        </div>      
    </div>
  </div>      
            `;
    player.innerHTML += card;
  }
});