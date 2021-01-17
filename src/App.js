import './App.css';
import React, { useEffect, useState } from "react"
import ReactHtmlParser from 'react-html-parser';

const App = () =>{

  const [joke, setJoke] = useState("");

  const fetchJoke = () => {
    fetch("https://api.icndb.com/jokes/random")
    .then(res => res.json())
    .then(data => {
        setJoke(data.value.joke)
      },
      error => {
        console.log(error);
      }
    )
  }



  useEffect(() => {
    fetchJoke()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Joke of the Day
        </h1>
        <p
          className="App-link"
          onClick={fetchJoke} >
          Surprise Me!
        </p>
      </header>
      <section className="App-joke">
        <p>{ReactHtmlParser(joke)}</p>
      </section>
      <footer className="App-footer">&copy; JokeApp</footer>
    </div>
  )
}


export default App
