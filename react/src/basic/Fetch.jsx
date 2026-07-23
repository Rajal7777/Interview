import { useState, useEffect } from "react";

export default function Fetch() {
  const [data, setData] = useState([]);

  console.log(data); //the data will be empty array in the first render, because the useEffect is called after the first render. so the data will be fetched after the first render.

  //the browser display ui. only after the first render(screen is painted) the useEffect will be called. so the data will be fetched after the first render.

  /*
  useEffect(() => {
    const fetchData = async () => {
      try {
        ////await Pause this async function until the Promise finishes. only this function is paused, not the whole program. The rest of the program continues to run while this function is paused.
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=10",
        );
        ////convert the response body into javascipt object.(takes time)
        const data = await response.json();

        //setData(data) doest not immediately update the data. it will update the data in the next render. so if you console.log(data) after setData(data), you will get the old data, not the new data.
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  */

  //best practise
  useEffect(() => {
    const fetchD = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10",
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setData(data);
    };
    fetchD();
  }, []);
  return (
    <div>
      <h1>Display data</h1>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}
