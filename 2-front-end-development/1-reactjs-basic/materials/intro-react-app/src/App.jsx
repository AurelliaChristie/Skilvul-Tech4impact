// Import css
import React from 'react';
import './App.css';
import Todo from "./components/Todo";
import ClassComponent from './components/ClassComponent';
import ListName from './components/ListName';
import Notification from './components/Notification';
import FormComponent from './components/FormComponent';

function handleClick(){
  console.log("Hit me!")
}

const users = [
  {id:'1', firstName:'Agus', lastName:'Nurjaman'},
  {id:'2', firstName:'Rizky', lastName:'Rafly'},
]
function App() {
  return (
    // Notice that class -> className
    <>
      <h1 className="text-red">Hello World</h1>
      <h2>H2</h2>
    {/* Add props */}
      <Todo todoName="Todo 1"/>
      <Todo todoName="Todo 2"/>
      <Todo todoName="Todo 3"/>
      <ClassComponent/>
      <ListName data={users}/>
      <button onClick={handleClick}>Hit me</button>
      <FormComponent/>
      <Notification status="Warning"/>
    </>
  );
}

export default App;
