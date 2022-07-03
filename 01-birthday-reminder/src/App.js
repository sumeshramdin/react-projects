import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);

	const clearAll = () => {
		setPeople([])
	}
	
  return <main>
		  <section className = "container">
			<h1>{people.length} birthdays today</h1>
			  <List people={people}/>
			  <button onClick={clearAll}>clear all</button>
		
		 </section>
		
	    </main>;
}

export default App;
