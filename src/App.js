import './App.css';
import { useState } from 'react';
import {Invent} from "./Components/Invent"
function App() {


  const [total,setTotal] = useState(145)

  return (
    <div className="App">
     <Invent start={13} itemName={"Books:"} ClassADD={"addBook"} ClassRemove={"remBook"} ClassTotal={"totalBooks"} settotal={setTotal} />
     <Invent initial={10} itemName={"Pens:"} ClassADD={"addPen"} ClassRemove={"remPen"} ClassTotal={"totalPens"} settotal={setTotal} />
     <Invent initial={44} itemName={"Notebooks:"} ClassADD={"addNotebook"} ClassRemove={"remNotebook"} ClassTotal={"totalNotebooks"} settotal={setTotal} />
     <Invent initial={78} itemName={"Inkpens:"} ClassADD={"addInkpen"} ClassRemove={"remInkpen"} ClassTotal={"totalInkpens"} settotal={setTotal} />

     <div className="total">{total}</div>
    </div>
  );
}

export default App;
