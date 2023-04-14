import logo from './logo.svg';
import './App.css';
import react,{useState,useEffect} from 'react';
import EmpInfo from './EmpInfo';

function App() {
  const [state,setState] = useState(2);
  const [data, setData] =useState([]);
  
  useEffect(()=>{
   // alert('you clicked the button and use effect gets called');


   async function getData(){
    const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`);
    const res = await get.json();
    setData(res);
    console.log('res'+res);
    console.log('data'+data);
   }

   getData();
   document.title = `(${state}) Employees List fetched Sucessfully..`;
  },[state])
  return (
    <>
    <h1>Hello Raghunatha welcome to here...</h1>
    <button onClick={()=> setState(state+2)}>Fetch Records {state}</button>
    <div className="container">
    {
      data.map((elements, index)=>{
        
        return<EmpInfo ele={elements} ind={index}/>
      })
    }
    </div>
    </>
  );
}

export default App;
