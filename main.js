
const cardContainer = document.getElementById('cards-container');
const submitButton = document.getElementById('submit-button');
let selectedCards = [];

const cardBackUrl = 'back/back_1.jpeg'; // Заменяется на твой путь
const totalCards = 6;

for (let i = 0; i < totalCards; i++) {
  const card = document.createElement('div');
  card.className = 'card';
  card.dataset.index = i;
  card.addEventListener('click', () => {
    if (selectedCards.includes(i)) {
      selectedCards = selectedCards.filter(index => index !== i);
      card.classList.remove('selected');
    } else if (selectedCards.length < 3) {
      selectedCards.push(i);
      card.classList.add('selected');
    }
  });
  cardContainer.appendChild(card);
}

submitButton.addEventListener('click', () => {
  if (selectedCards.length !== 3) {
    alert('Выбери ровно 3 карты');
    return;
  }
  const chosen = selectedCards.map(i => `Карта ${i + 1}`).join(', ');
  alert(`Вы выбрали: ${chosen}`);
  // Здесь можно вставить fetch/postMessage для отправки в Telegram WebApp
});
