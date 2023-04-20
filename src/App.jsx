import data from "./data.js";
import Card from "./components/Card.jsx";
import Nav from "./components/Nav.jsx";

import "./App.css";

function App() {
  const allData = data.map((item) => <Card key={item.id} {...item} />);

  return (
    <div className="App">
      <Nav />
      {allData}
    </div>
  );
}

export default App;
