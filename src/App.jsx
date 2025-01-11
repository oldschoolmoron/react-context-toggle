import { createContext, useContext, useState } from 'react'
import './App.css'
const BulbContext = createContext();

function App(){
  const [BulbOn, SetBulbOn] = useState(true);
  return <div>
    <BulbContext.Provider value = {{
      BulbOn,
      SetBulbOn
    }}>
      <Light />
    </BulbContext.Provider>
  </div>
}

function Light(){
    return <div>
      <BulbState />
      <ToggleBulbState />
  </div>
}

function BulbState(){
  const { BulbOn }= useContext(BulbContext);
  return <div>
    {BulbOn ? "Bulb on" : "Bulb off"}
  </div>
}


function ToggleBulbState(){
  const { SetBulbOn } = useContext(BulbContext);
  return <div>
    {/* <button onClick={() => SetBulbOn(!BulbOn)}>Toggle the bulb</button> */}
    <button onClick={() => SetBulbOn((prev)=> !prev)}>Toggle the bulb</button>
{/* Why Two Functions?
Outer Arrow Function: Allows passing the SetBulbOn call to the onClick handler.
Inner Updater Function: Ensures the new state is calculated based on the previous state (prev), preventing potential inconsistencies. */}

  </div>
}


export default App