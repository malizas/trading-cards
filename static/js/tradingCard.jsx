'use strict';

const tradingCardData = [            
  {
    name: "Balloonicorn",
    skill: "video games",
    imgUrl: "/static/img/balloonicorn.jpg",
    cardId: 1,
  },
  {
    name: "Float",
    skill: "baking pretzels",
    imgUrl: "/static/img/float.jpg",
    cardId: 2,
  },
  {
    name: "Llambda",
    skill: "knitting scarves",
    imgUrl: "/static/img/llambda.jpg",
    cardId: 3,
  },
  {
    name: "Seed.py",
    skill: "making curry dishes",
    imgUrl: "/static/img/seedpy.jpeg",
    cardId: 4,
  },
  {
    name: "Merge",
    skill: "bullet journaling",
    imgUrl: "/static/img/merge.png",
    cardId: 5,
  },
];

function TradingCard(props) {
  return (
    <div className="card">
      <h2>Name: {props.name}</h2>
      <img src={props.imgUrl} alt="profile" />
      <h2>Skill: {props.skill}</h2>
    </div>
  );
}

function TradingCardContainer() {
  const cards = [];

  for (let card of tradingCardData) {
    cards.push(
      <TradingCard
        name={card.name}
        skill={card.skill}
        imgUrl={card.imgUrl}
      />
    );
  }
  return (
    <React.Fragment>
      {cards}
    </React.Fragment>
  )
}

ReactDOM.render(<TradingCardContainer />, document.querySelector('#all-cards'))