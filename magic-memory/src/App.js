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
  
  const[choiceOne, setChoiceOne] = useState(null) // these are for the card choices
  const[choiceTwo, setChoiceTwo] = useState(null)

  // shuffle cards for new game
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages] // duplicating card so now we have 12 instead of 6 using the spread operator
      .sort(() => Math.random() - 0.5) //generate a random order for cards
      .map(card => ({ ...card, id: Math.random() })) // add an id property to each card
      
    setCards(shuffledCards)
    setTurns(0)
  }

 //handle a choice
  const handleChoice = (card) => {

  }

   return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <SingleCard 
			key={card.id} // key goes here as we mapping over the cards
            card={card} // passed a prop to send it to the SingleCard component
			handleChoice={handleChoice}  
		  />
        ))}
      </div>

    </div>
  );
}

export default App