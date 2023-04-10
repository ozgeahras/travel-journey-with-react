
import data from './data.js'
import Card from './components/Card.jsx'
import Nav from './components/Nav.jsx'

import './App.css'

function App() {
  const allData = data.map(item=>(
     <Card 
      id={item.id}
      {...item}
      /> 
    )
  )

  console.log(allData);

  return (
    <div className="App">
      <Nav />
      {allData}
    </div>
  )
}

export default App
