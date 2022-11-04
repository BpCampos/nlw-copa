let createGame = (player1, hour, player2) => `
    <li class="match">
        <img src="./images/${player1}.svg" alt="" />
        <p>${hour}</p>
        <img src="./images/${player2}.svg" alt="" />
    </li>
`;

let createCard = (date, day, games) =>
`
<div class="card">
  <div class="date">
    <h2>${date}</h2>
    <span>${day}</span>
  </div>
  <ul class="matches">
    ${games}
  </ul>
</div>
`

document.querySelector(".cards").innerHTML =
  createCard(
    "24/11",
    "QUINTA",
    createGame("switzerland", "07:00", "camaroes") +
      createGame("uruguai", "10:00", "coreia-do-sul") +
      createGame("portugal", "13:00", "ghana") +
      createGame("brasil", "16:00", "servia")
  ) +
  createCard(
    "28/11",
    "SEGUNDA",
    createGame("camaroes", "07:00", "servia") +
      createGame("coreia-do-sul", "10:00", "ghana") +
      createGame("brasil", "13:00", "switzerland") +
      createGame("portugal", "16:00", "uruguai")
  ) +
  createCard(
    "28/11",
    "SEGUNDA",
    createGame("camaroes", "07:00", "servia") +
      createGame("coreia-do-sul", "10:00", "ghana") +
      createGame("brasil", "13:00", "switzerland") +
      createGame("portugal", "16:00", "uruguai")
  ) +
  createCard(
    "28/11",
    "SEGUNDA",
    createGame("camaroes", "07:00", "servia") +
      createGame("coreia-do-sul", "10:00", "ghana") +
      createGame("brasil", "13:00", "switzerland") +
      createGame("portugal", "16:00", "uruguai")
  );
