/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable default-case */
import { useEffect, useState } from "react";
import './App.css';

const App = () => {

  
  const [userChoice, setUserChoice] = useState(null);
  const [computersChoice, setComputersChoice] = useState(null);
  const choices = ["rock", "paper", "scissors"];
  const [result, setResult] = useState(null);
  // const [count, setCount] = useState(0);

  const whenClicked = (value) => {
    setUserChoice(value);
    // setTimeout(() => {
      whatComputersChooses()
    // }, 1000);
  }

  const whatComputersChooses = () => {
    const randomChoiceFromChoices = choices[Math.floor(Math.random() * choices.length)]
    setComputersChoice(randomChoiceFromChoices)
  }

  useEffect(() => {
//  setTimeout(() => {
    whatsTheResult();
    // }, 1000);
  }, [computersChoice, userChoice])
  

  const whatsTheResult = () => {
    switch (userChoice + computersChoice) {
      case "paperrock":
      case "rockscissors":
      case "scissorspaper":
        setResult("You won!!!")
        break;
      case "rockpaper":
      case "scissorsrock":
      case "paperscissors":
        setResult("Oh no!!! You lost!!!")
        break;
      case "rockrock":
      case "scissorsscissors":
      case "paperpaper":
        setResult("Unbelievable. It's a draw!!!")
        break;
    }
  }

  return (
    
    <div className="App">
      <div className="App-header">
        <img src="/images/rps.png" className="App-image" alt="rock paper scissors" />
        <h2>Rock Paper Scissors</h2>
      </div>
       <p className="App-intro">
          “At 5.45 a.m. the important scientists finished their coffee and played rock paper scissors to see who had to phone the government.” ― Mitch Benn, Terra.
        </p>
           
      <h3>
        Make your choice
      </h3>
      {choices.map((choice, index) =>
        <button key={index} onClick={() => whenClicked(choice)}>{choice}</button>)
      }
      <p>user chose: <strong>{userChoice}</strong></p> 
      <p>computer chose: <strong>{computersChoice}</strong></p>

      {/* <p>{count} rounds played</p> */}
     
      <h3>{result}</h3>

      <button onClick={() => window.location.reload()}>Reset</button>
    </div>
    
  );
}

export default App;
