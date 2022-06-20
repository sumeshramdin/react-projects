import { useState } from 'react'
import './App.css'
import SingleCard from './components/SingleCard'
  // object created outside of main component so it wont bet re-evaluated everytime the function is rnu

const cardImages = [
  { "src": "/img/helmet-1.png" },
  { "src": "/img/potion-1.png" },
  { "src": "/img/ring-1.png" },
  { "src": "/img/scroll-1.png" },
  { "src": "/img/shield-1.png" },
  { "src": "/img/sword-1.png" },
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  // shuffle cards for new game
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages] // duplicating card so now we have 12 instead of 6 using the spread operator
      .sort(() => Math.random() - 0.5) //generate a random order for cards
      .map(card => ({ ...card, id: Math.random() })) // add an id property to each card
      
    setCards(shuffledCards)
    setTurns(0)
  }

  console.log(cards, turns)

   return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <SingleCard 
			key={card.id}
            card={card}
		  />
        ))}
      </div>

    </div>
  );
}

export default App