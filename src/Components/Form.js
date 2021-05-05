import React, {useState, useContext} from 'react';
import ChartComponent from '../ChartComponent';
const ChartContext = React.createContext();

 const Form = ({chart}) => {
    const [label, setLabel] = useState('');
    const [value, setValue] = useState('');
    const [chartData, setChartData] = useState([]);
    console.log(chartData);
  
    const handleSubmit = (event) => {
            event.preventDefault();
           
            if(label && value) {
                 const enteredValues = {
                     id:new Date().getTime().toString(),
                     label:label,
                     value:value
                 }
        const anotherVal = {
            ...enteredValues
        }

                    
        setChartData([...chartData, enteredValues]);
        setLabel('');
        setValue('');
        
        
        
            }
        else {
            alert("please add the valid values")
        }
        
            }
            
           
    
    return (
      
        <div>
< form type = "submit" onSubmit={handleSubmit} className="form">
  <div className="input-fields">
    <input type="text "
     value={label} 
    placeholder="Enter Task"
     className="inputs"
     onChange ={(e) => {
         setLabel(e.target.value);
     }}
     
     />
    <input type="text"
     value ={value} 
     placeholder="enter days"
      className="inputs"
      onChange ={(e) => {
          setValue(e.target.value);
      }}
      />
    <button type="submit" className="btn-submit"> add value</button>
    </div>
    <ChartComponent chart={chartData} />
</form>

            
        </div>
      
    )
}

export { Form};
