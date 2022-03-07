import './App.css';
import { useState } from 'react';
import {Invent} from "./Components/Invent"
function App() {


  const [total,setTotal] = useState(145)

  return (
    <div className="App">
     <Invent initial={13} itemName={"Books:"} addcls={"addBook"} remcls={"remBook"} totalcls={"totalBooks"} settotal={setTotal} />
     <Invent initial={10} itemName={"Pens:"} addcls={"addPen"} remcls={"remPen"} totalcls={"totalPens"} settotal={setTotal} />
     <Invent initial={44} itemName={"Notebooks:"} addcls={"addNotebook"} remcls={"remNotebook"} totalcls={"totalNotebooks"} settotal={setTotal} />
     <Invent initial={78} itemName={"Inkpens:"} addcls={"addInkpen"} remcls={"remInkpen"} totalcls={"totalInkpens"} settotal={setTotal} />

     <div className="total">{total}</div>
    </div>
  );
}

export default App;
