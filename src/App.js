import React, { Component } from 'react'
import BirthShow from './MyComponents/BirthShow/BirthShow'
import axios from 'axios'
import Header from './MyComponents/Header'
import BirthAdd  from './MyComponents/BirthAdd/BirthAdd'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"; 

//----------Axios Instance----------------//
const ai = axios.create({
    baseURL:'http://127.0.0.1:8000/api'
})

class App extends Component {
  // state = {
  //   items: [],
  //   text: ""
  // }
  
//Show the listed data from API
  // showBirth = ()=>{
  //   ai.get('/list/')
  //   .then((res)=>{
  //     // console.log(res.data)
  //       this.setState({items:res.data})
       
  //   })
  // }

  //Show the listed data from API
  // addBirth = (data)=>{
  //   // axios.post('http://127.0.0.1:8000/create/', data)
  //   ai.post('/create/', data)
  //   .then((res)=>{
  //     // console.log(res.data)
  //       this.setState({text: ''})
  //       this.showBirth()
  //   })
  // }


  // handleChange = e => {
  //   this.setState({ text: e.target.value })
  // }

  // handleAdd = e => {

  //   //---------------Manually Added Data--------------------//
  //   // if (this.state.text !== "") {
  //   //   const item = [...this.state.items, this.state.text];
  //   //   this.setState({ items: item, text: "" });
  //   // }
  //   //--------------------------------------------------------//

  //   let birthData = {item: this.state.text}
  //   this.addBirth(birthData)
  // } 

  handleDelete = id => {
    console.log(id)
    ai.delete(`/delete/${id}`)
    .then((res)=>{
      this.showBirth()
    })
  }

  //---------------Show the list in console--------------------//
  // componentDidMount(){
  //   this.showBirth();
  // }

  render() {
    return (
      <Router>
     <Header title = "Birthday reminder"/>  
      <Switch>
          <Route exact path="/" render={()=>{
             return (
              <>
                <BirthShow/>
              </> 
              )}}>
          </Route>
          <Route exact path="/add" render={()=>{
             return (
              <>
                <BirthAdd/>
              </> 
              )}}>
          </Route>
      </Switch>
      </Router>

              
    )
  }
}

export default App;




















