import './index.css';
import { useState } from 'react';
import { render } from '@testing-library/react';

/*
const shouldShowLanding2 = () => {
  if (shouldShowLanding === false) {
    return "Home"
  } else {
    return "Landing"
  }
}
*/

/*
const showLanding = true;
const toggle = () => {
  console.log(showLanding);
  showLanding = !showLanding;
  console.log(showLanding);
}
*/


function App() {
  //a use state egy darab komponensen belül használható. nem csak átállítja, hanem újra is rendereli. fent importálni kell. a setterrel állítjuk be az új értéket.
  const [shouldShow, setterFunctionShowLanding] = useState(false);
  /*  const toggle = () => {
    setterFunctionShowLanding(!shouldShow)
  }  */

  const [showPage, setPageName] = useState("Click to choose a page")

  // const inputValue = "start";
  const [inputValue, setInputValue] = useState("Strain name");
  console.log("render");
  console.log(inputValue);
  const isValid = inputValue.length >= 3

  const strains = [
    { name: "AK-47", flavor: "earthy", effect: "talkative" },
    { name: "Sour Diesel", flavor: "diesel", effect: "energetic" },
    { name: "Zkittlez", flavor: "sweet", effect: "relaxed" },
    { name: "Moby Dick", flavor: "citrus", effect: "energetic" },
    { name: "Strawberry Mango Haze", flavor: "mango", effect: "uplifted" }
  ];

  return (
    <div>
      <h1>Hello world</h1>
      {/* Ternary operator */}
      <div>{shouldShow ? <div>Landing</div> : <div>Home</div>}</div>
      {/* <button onClick={toggle}>Click me to change</button> */}
      <button onClick={() => setterFunctionShowLanding(!shouldShow)}>Click me to change</button>

      {/* conditional rendering */}
      <button onClick={() => setPageName("Home")}>Home</button>
      <button onClick={() => setPageName("Landing")}>Landing</button>
      <button onClick={() => setPageName("About")}>About</button>

      <main>
        {showPage === "Home" && <div>Homepage component</div>}
        {showPage === "Landing" && <div>Landing component</div>}
        {showPage === "About" && <div>About component</div>}
      </main>

      <div>{showPage === "Landing" || <div>This is NOT the landing page</div>}</div>
      <div>{showPage !== "Landing" && <div>This is NOT the landing page</div>}</div>


      <hr />
      <h1>I'm a title</h1>
      {/* első bemeneti paraméterként megkap egy eventet */}
      <input type="text" defaultValue={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button type="submit" disabled={!isValid}>Submit</button>
      {/* fenti sor
      {!isValid && <button type="submit" disabled>Submit</button>}
      {isValid && <button type="submit">Submit</button>} 
      */}
      {!isValid && <div>Min. 3 char!</div>}

      <hr />
      <ul>
        {strains.map((strain) => {
          if (strain.name.startsWith(inputValue)) {
            return <li>{strain.name} - {strain.flavor}</li>
          }
        })}
      </ul>
    </div>
  );

}

export default App;
