
import React, { useState, useEffect } from 'react'
import List from './component/List'
import Header from './component/Header'
import { makeStyles } from '@material-ui/core/styles';
import PostAddSharpIcon from '@material-ui/icons/PostAddSharp';

import './App.css'

// style input
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '350px',
      marginLeft: "520px",
      height:'30px',
      top:"100px"

    },

  },
  button:{
    width:'100px',
    height:'30px',
    marginLeft:'880px',
    position:'absolute',
    top:"168px"
  },
  body:{
    // backgroundColor:"#E4D713",
  }
}));
export default function App() {
  const [data, setData] = useState(JSON.parse(localStorage.getItem('todos')) || [])
  const [value, setValue] = useState("")

  // style
   
   const updateTodo=allTodos=>{
     setData(allTodos)
   }
   
   const updatelocalStorage=todoList=>{
     localStorage.setItem('todos',JSON.stringify(todoList))
   }

const classes = useStyles();

  const addTodo = (event) => {
    event.preventDefault()


    let todo = {
      id: data.length ? data[data.length - 1].id + 1 : 1,
      todo: value,
      status: false
    }


    let arr = [...data, todo]
    updateTodo(arr)
    updatelocalStorage(arr)
    setValue('')
  }

  const doneTodo = (id) => {
    let todos = data
    let todo = todos.findIndex(item => item.id === id)
    todos[todo].status = true
   updateTodo(todos)
    updatelocalStorage(todos)
  }

  const deleteTodo = (id) => {
    let todos = data.filter(todos => todos.id !== id)
    updateTodo(todos)
    updatelocalStorage(todos)
  }

  const save = (id, val) => {
    let todos = data
    let todo = todos.findIndex(item => item.id === id)
    todos[todo].todo = val
   updateTodo(todos)
    updatelocalStorage(todos)
  }

  return (
    <div>
      <Header />
      <form onSubmit={addTodo}  className={classes.body} >
      <div  className={classes.root} noValidate autoComplete="off">
        <input type='text' value={value} id="standard-basic" label="Standard"   placeholder="Enter text"
        
          onChange={(event) => {
            setValue(event.target.value)
          }}
        />
        
      </div>
      <button
        className={classes.button}
        ><PostAddSharpIcon/></button>
        
        
      </form>
      
      <List
        data={data}
        done={doneTodo}
        delete={deleteTodo}
        save={save}
      />
      
    </div>
  )
}