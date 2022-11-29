import { useState } from "react";


import Arro from "./Ordner/Arro"
import './App.css';

import movies from "./Data";



const Moviecomp = movies
function App() {
 

const [ ,setA] = useState()
const [ ,setB] = useState()
const [ ,setC] = useState()


const handleClick = () =>{ setA(Moviecomp.sort((a, b) => {
    let fa = a.title.toLowerCase(),
        fb = b.title.toLowerCase();
console.log('object');
    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
}));



}

 const handleClick1 = () =>{ setB(Moviecomp.sort((b, a) => {
  let fa = a.title.toLowerCase(),
      fb = b.title.toLowerCase();
  console.log('object');

  if (fa < fb) {
      return -1;
  }
  if (fa > fb) {
      return 1;
  }
  return 0;
}));

} 

const handleClick2 = () =>{ setC(Moviecomp.sort((a, b) => {
  let fa = a.rate.toLowerCase(),
      fb = b.rate.toLowerCase();
  console.log('object');
  if (fa < fb) {
      return -1;
  }
  if (fa > fb) {
      return 1;
  }
  return 0;

}));

} 

  return (
 
    <div className="App">
      <button id="1" onClick={handleClick}>Sortieren nach Titel</button>
      <button id="1" onClick={handleClick1}>Sortieren nach Titel</button>  
        <button id="1" onClick={handleClick2}>Rating</button>
<Arro  ContactData={Moviecomp}/>

    </div>
  );
}












export default App;
