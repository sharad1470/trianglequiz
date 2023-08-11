import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [marks,setMarks]=useState("your marks");
  let map=new Map();

  const changeValue=(e)=>{
    console.log(e.target.name);
    let name=e.target.name;
    let val=e.target.value;
    map.set(name,val);
    console.log(map.size)
  }

  const submit=(e)=>{
    e.preventDefault();
    let sum=0;
    for (let [key, value] of map) {
      //console.log(key + " = " + value);
      if(value==="correct")
        sum++;
      }
      setMarks(sum);

  }


  return (
    
    <div className='App'>
      <header>
        <h1>Triangle quiz</h1>
      </header>
      <form onSubmit={submit}>
        <div>
          <label>1.If a triangle has angles 1350, 150, 300. Is it an obtuse triangle?</label>
          <div onChange={changeValue}>
           <input type="radio" value="correct" name="q1"  /> yes
            <input type="radio" value="icorrect" name="q1"  /> No
          </div>
        </div>
        <div onChange={changeValue}>
          <label>2.If a triangle has angles 1350, 150, 300. Is it an eqilateral triangle?</label>
          <input type="radio" value="correct" name="q2"  /> yes
            <input type="radio" value="icorrect" name="q2"  /> No
        </div>
        <div onChange={changeValue}>
          <label>3.If a triangle has angles 1150, 250, 400. Is it an acute triangle?</label>
          <input type="radio" value="correct" name="q3"  /> yes
            <input type="radio" value="icorrect" name="q3"  /> No
        </div>
        <h2>{marks}</h2>

        <button type='submit'>submit</button>
      </form>
    </div>
  );
}

export default App;
