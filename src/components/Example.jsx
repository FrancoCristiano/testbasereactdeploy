import { useState, useEffect } from "react";
import useCounterProva from "../hooks/userCounterProva";

function Example() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    document.title = "Conteggio" + count;
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setData(data);
    //     console.log(data);
    //   });
  }, [count]);

  useCounterProva();

  return (
    <div>
      <p>Conteggio: {count}</p>
      <button onClick={() => setCount(count + 1)}> Increment </button>
    </div>
  );
}

export default Example;
