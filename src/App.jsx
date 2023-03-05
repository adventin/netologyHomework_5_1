import Card from './components/Card'
import CardImage from './components/CardImage'

function App() {

  const cardData = {
    srcImage: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
    title: "Card title",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "/",
    buttonText: "Go somewhere"
  };

  return (
    <div className="container">
      <Card {...cardData}>
        <CardImage {...cardData} />
      </Card>
      
      <Card {...cardData} />
    </div>
  )
}

export default App
