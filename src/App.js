import Card from "./components/card";
import Header from "./components/header";
import data from "./data"

function App() {
  const cards =data.map(item =>{
    return(
      <Card
        key={item.imageUrl}
        {...item}
      />
    )
  })
  return (
    <div className="App">
      <Header/>
      <div className="card-list">
        {cards}
      </div>
    </div>
  );
}

export default App;
