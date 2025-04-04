import Abc from "./Abc";
import Headname from "./components/headName";
import Input from "./components/input";
import Task1 from "./components/task";
import Task2 from "./components/Task2";
import Task3 from "./components/Task3";
import Hello from "./Hello";
import Randomgen from "./random";
import "./App.css"
import Map from "./components/map";
import Prop from "./components/Prop";
import PassingData from "./components/PassingData";

function App() {
  return <div>

    {/* <h1>Sunfire Sensei</h1>
    <button>Subscribed</button>
    <Abc/>
    <Hello/>
    <Randomgen/> */}

    {/* TodoList */}
    <PassingData>
    <center>
      {/* <Headname/>
    <Input/>
    <Task1/>
    <Task2/>
    <Task3/> */}
      {/* <Map /> */}
      <Prop />

    </center>
    </PassingData>
    
{/* 
    <PassingData>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum eligendi perferendis odio magnam sit commodi dolor veritatis ratione, cumque vitae id tempora provident amet, nesciunt assumenda rem, sunt labore nam.</p>
    </PassingData> */}
    

  </div>
}
export default App;