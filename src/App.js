import logo from './logo.svg';
import './App.css';
import ChartComponent from './ChartComponent';
import {Form} from './Components/Form';

function App() {

  const chart = [
    {
      label: "Task 1",
      value: "60"
    },
    { 
      
      label: "Task 2",
      value: "20"
    },
    {
      
      label: "Task 3",
      value: "10"
    },
    { 
      label: "Task 4",
      value: "15"
    }
    
  ];
  return (
    <div className="App">
     <h1>Enter the dynamic values to render the chart</h1>
     <Form  chart ={chart}/>
     {/* shifted this component to the <Form /> Component and shared the dynamic object as props*/}
     {/* <ChartComponent chart = {chart}/> */}
    </div>
  );
}

export default App;
