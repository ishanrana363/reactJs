// import React,{useState} from 'react';
// import Child from './Component/StateLifting/Child';

// const App = () => {
//   const [item,setItem] = useState('')
//   let data = " I am from parent component app "

//   const handleData = (childData) =>{
//     setItem(childData)
//   }
//   return (
//     <div>
//       <Child data = {data} onData = {handleData} />
//       {item}
//     </div>
//   );
// };

// export default App;

import Todo from './Component/StateLifting/Todo';
import NewToDo from './Component/StateLifting/NewToDo';

const App = () => {
  const handleNewToDo = (data) =>{
    console.log(data)
  }
  return (
    <div>
      <NewToDo hanDleData = {handleNewToDo}  />
      <Todo data = "Learn React Js" />
    </div>
  );
};

export default App;