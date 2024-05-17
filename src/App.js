import React from 'react';
import './App.css';
import { useState } from "react";


function CalcButton({bcolor, opbutton, label, buttonClassName = "CalcButton", onClick}) {

  return (
    <button className= {buttonClassName} onClick={onClick} style={{ color: opbutton, background: bcolor }}>
      {label}
    </button>
  );
}

function CalcDisplay({display}) {
  return (
    <div className="CalcDisplay">
      {display}
    </div>    
  );
}

export default function App() {

  const[disp, setDisp] = useState(0);
  const[num1, setNum1] = useState(null);
  const[num2, setNum2] = useState(null);
  const[op, setOp] = useState(null);

  const clrClickHandler = (e) => {
    setDisp(0);
    setNum1(null);
    setNum2(null);
    setOp(null);
  }

  const equalClickHandler = (e) => {
    console.log('Num1 ' + num1 + ' | ' + 'Op ' + op + ' | ' + 'Num2 ' + num2);

    let result = null;

    if (op === "ADD") {
      result = (parseInt(num1) + parseInt(num2))
    } else if (op === "SUB") {
      result = (parseInt(num1) - parseInt(num2))
    } else if (op === "MUL") {
      result = (parseInt(num1) * parseInt(num2))
    } else if (op === "MOD") {
      result = (parseInt(num1) % parseInt(num2))
    } else if (op === "EXP") {
      result = (parseInt(num1) ** parseInt(num2))
    } else if (op === "DIV") {
      if (parseInt(num2) !==0) {
        result = (parseInt(num1) / parseInt(num2));
      } else{
        result = ("Cannot divided by 0");
      }
    } else {
      result = ('Invalid Operation');
    }

    setDisp(result.toString());
    setNum1(result.toString());
    setNum2(null);
    setOp(null);
  }

  const numberClickHandler = (e) => {
    e.preventDefault();
    const value  = e.target.innerHTML;

    if (disp === 0 && value === '0'){
    } else if ( op === null){
      if(num1 === null /*&& num1.includes('.')*/) {
        setNum1(value);
        setDisp(value);
      } else {
        // if (!num1.includes('.') && value !== '.'){
          setNum1(num1 + value);
          setDisp(num1 + value);
        // }
      }
      
    } else {
      if(num2 === null /*&& num2.includes('.')*/) {
        setNum2(value);
        setDisp(value);
      } else {
        // if (!num2.includes('.') && value !== '.'){
          setNum1(num2 + value);
          setDisp(num2 + value);
        // }
      }
    }
  }

  const opClickHandler = (e) => {
    e.preventDefault();
    const value  = e.target.innerHTML;
    setOp(value);
    setDisp(value);
  }

  const negClickHandler = () => {
    if (disp === '0'){
      return;
    }
    if (op === null){
      setNum1((parseFloat(num1) * -1).toString());
      setDisp((parseFloat(disp) * -1).toString());
    } else {
      setNum2((parseFloat(num2) * -1).toString());
      setDisp((parseFloat(disp) * -1).toString());
    }
  }


  return (
    <div className="App">
      <div className="App">
        <header className="Header">
          <h1>Carl Andrew Yap Dizon - CPE 2A</h1>
        </header>
      </div>
      <div className="CalcContainer">
        <CalcDisplay display={disp} />
        <div className="ButtonContainer">
          <CalcButton label={"CLR"} onClick={clrClickHandler} opbutton={'#d88946'} bcolor={"#603a5e"}/>
          <CalcButton label={"EXP"} onClick={opClickHandler} opbutton={'#d9e1f5'} bcolor={'#3e4859'}/>
          <CalcButton label={"MOD"} onClick={opClickHandler} opbutton={'#d9e1f5'} bcolor={'#3e4859'}/>
          <CalcButton label={"DIV"} onClick={opClickHandler} opbutton={'#d9e1f5'} bcolor={'#3e4859'}/>
          <CalcButton label={7} onClick={numberClickHandler}/>
          <CalcButton label={8} onClick={numberClickHandler}/>
          <CalcButton label={9} onClick={numberClickHandler}/>
          <CalcButton label={"MUL"} onClick={opClickHandler} opbutton={'#d9e1f5'} bcolor={'#3e4859'}/>
          <CalcButton label={4} onClick={numberClickHandler}/>
          <CalcButton label={5} onClick={numberClickHandler}/>
          <CalcButton label={6} onClick={numberClickHandler}/>
          <CalcButton label={"SUB"} onClick={opClickHandler} opbutton={'#d9e1f5'} bcolor={'#3e4859'}/>
          <CalcButton label={1} onClick={numberClickHandler}/>
          <CalcButton label={2} onClick={numberClickHandler}/>
          <CalcButton label={3} onClick={numberClickHandler}/>
          <CalcButton label={"ADD"} onClick={opClickHandler} opbutton={'#d9e1f5'} bcolor={'#3e4859'}/>
          <CalcButton label={"NEG"} onClick={negClickHandler} opbutton={'#d9e1f5'} bcolor={'#3e4859'}/>
          <CalcButton label={0} onClick={numberClickHandler}/>
          <CalcButton label={"."} onClick={numberClickHandler}/>
          <CalcButton label={"EQ"} onClick={equalClickHandler} opbutton={'#d9e1f5'} bcolor={'#304481'}/>
        </div>
      </div>
    </div>
  );
}