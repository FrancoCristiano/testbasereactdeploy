import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Card from "./components/Card.jsx";
import CardForm from "./components/CardForm.jsx";
import Example from "./components/Example.jsx";

function App() {
  const [count, setCount] = useState(0);

  const [items, setItems] = useState([1, 2, 3]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, [count]);

  const aggiungiItems = () => {
    const nuovoItem = 4;
    setItems([...items, nuovoItem]);
    console.log(items);
  };

  const [cities, setCities] = useState([
    {
      id: 0,
      name: "TOKYO",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel maxime voluptatum repellendus at autem blanditiis?",
      imgUrl:
        "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: true,
    },
    {
      id: 1,
      name: "CAYOKEN",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel maxime voluptatum repellendus at autem blanditiis?",
      imgUrl:
        "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: true,
    },
    {
      id: 2,
      name: "ROTTERMDAM",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel maxime voluptatum repellendus at autem blanditiis?",
      imgUrl:
        "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: true,
    },
    {
      id: 3,
      name: "PARIS",
      description: "PARIGIIGIGIGIGIGIGIG ",
      imgUrl:
        "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1120&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: true,
    },
  ]);

  const aggiungiCity = (city) => {
    setCities([...cities, city]);
  };

  function handleClick() {
    alert("SATANA ");
  }

  function handleChange(e) {
    console.log(e.target.value);
  }

  function handleSubmit(e) {
    console.log(e);
    e.preventDefault();
  }

  return (
    <>
      {/* <Navbar></Navbar> */}
      <Example></Example>
      <CardForm addCity={aggiungiCity}></CardForm>
      <div className="grid grid-cols-4 gap-5">
        {cities.map((city) => (
          <Card
            key={city.id}
            title={city.name}
            isVisited={city.isVisited}
            imgUrl={city.imgUrl}
          >
            {city.description}
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-5">
        {data.map((item) => (
          <div key={item.id} className="bg-slate-400 rounded-lg p-3">
            <p> User ID : {item.userId}</p>
            <p> {item.title}</p>
            <p> {item.body}</p>
          </div>
        ))}
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <button onClick={aggiungiItems}> AGGIUNGI ITEM</button>
        <button onClick={handleClick}>alert</button>
        <input type="text" onChange={handleChange} />

        <form action="" onSubmit={handleSubmit}>
          <button type="submit">INVIA</button>
        </form>
      </div>
    </>
  );
}

export default App;
