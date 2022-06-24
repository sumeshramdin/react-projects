import './SingleCard.css'

export default function SingleCard({ card, handleChoice }) { // destructured card which is passed down
	
	const handleClick = () => {
		handleChoice(card)
	}
	
  return (
    <div className="card">
      <div>
        <img className="front" src={card.src} alt="card front" />
        <img 
			className="back" 
			src="/img/cover.png"
			onClick={handleClick} 
			alt="cover" 
		/>
      </div>
    </div>
  )
}