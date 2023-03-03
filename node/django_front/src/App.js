import React from 'react';
import logo from './logo.svg';
import './App.css';
// import ApiFetch from './componets/ApiFetch';
// import AppContext from './contexts/AppContext';
// import B from './componets/B';
// import BasicReducer from './componets/BasicReducer';
import {useReducer,useState,useCallback} from 'react'
// import Memo from './componets/Memo';
import CountDisplay from './componets/CountDisplay';
import CountClick from './componets/CountClick';
import rootReducer from './reducers/index';
import { SELL_MEAT,SELL_VEGETABLE } from './reducers/actionTypes';
import reducerVegetable from './reducers/reducerVegetable';
import DrfAPIFetch from './componets/DrfAPIFetch';



// const initialState=0
// const reducer=(currentState,action)=>{
//     switch(action) {
//         case 'add_1':
//             return currentState+1;
//         case 'multiple_3':
//             return currentState*3;
//         case 'reset':
//             return initialState;
//         default:
//             return currentState;
//     }
// }

function App() {

  // const [count,dispatch]=useReducer(reducer,initialState);

    const [count1,setCount1]=useState(0);
    const [count2,setCount2]=useState(0);

    const AddCount1=useCallback(()=>{
        setCount1(prevCount1=>prevCount1+1);
    },[]);

    const AddCount2=useCallback(()=>{
        setCount2(prevCount2=>prevCount2+1);
    },[]);


    const initialState={
      reducerMeat:{numOfMeat:30},
      reducerVegetable:{numOfVegetable:25}
    }
    const [state,dispatch]=useReducer(rootReducer,initialState)

  return (
  // <AppContext.Provider value={{countProvided:count,dispatchProvided:dispatch}}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>Today's Meat:{state.reducerMeat.numOfMeat}</p>
        <button onClick={()=>dispatch({type:SELL_MEAT})}>Sell Meat</button>
        <br/>
        <p>Today's Vegetable:{state.reducerVegetable.numOfVegetable}</p>
        <button onClick={()=>dispatch({type:SELL_VEGETABLE})}>Sell Vegetable</button> */}
        {/* <p>Count {count}</p>
         <B />  */}
        {/* <ApiFetch />  */}
        {/* <BasicReducer ></BasicReducer> */}
        {/* <Memo /> */}
        {/* <CountDisplay name="count1" count={count1}/>
        <CountClick handleClick={AddCount1}>AddCount1</CountClick>
        <CountDisplay name="count2" count={count2}/>
        <CountClick handleClick={AddCount2}>AddCount2</CountClick> */}
        <DrfAPIFetch />
      </header>
    </div>
  // </AppContext.Provider>
  );
}

export default App;
