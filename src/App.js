import React, { useState } from 'react';
import './App.css'
import ToDoList from './ToDoList';

const App = () => {

  const [inputList, setInputList] = useState('');
  const [items, setItems] = useState([]);


  const itemEvent = (e) => {
    setInputList(e.target.value);
  };

  const listOfItems = () => {
    setItems((olditems) => {
      return [...olditems, inputList]
    });
    setInputList('');
  }

  const deleteItems = (id) => {

    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      })
    })

  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <div className='inBt'>
            <input type="text" placeholder='Add an Item' onChange={itemEvent} value={inputList} />
            <button onClick={listOfItems}>+</button>
          </div>
          <ol>
            {
              // n is element  and i is index
              items.map((n, i) => {
                return <ToDoList key={i} id={i} text={n}
                  onSelect={deleteItems}
                />
              })
            }
          </ol>
        </div>
      </div>
    </>
  )
}
export default App;