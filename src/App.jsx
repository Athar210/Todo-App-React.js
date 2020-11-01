import React, {Component} from 'react';
import firebase from './config/firebase';
import './style.css'
class App extends Component{
  constructor(){
    super()
    this.state={
      todos:[ ],
      value:""
    }
  }
  addItem = () =>{
    if(this.state.value===""){
      alert("Empty Field")
    }
    else{
      let obj = {title:this.state.value}
    firebase.database().ref('/').child("todos").push(obj)
   this.setState({
      todos:[...this.state.todos,obj],
      value: ''
    })
    }
    
  }

  deleteItem = (i) => {
    this.state.todos.splice(i,1)
    this.setState({
      todos:this.state.todos
    })
  }

  editItem = (i,val)=>{
    this.state.todos[i].edit=true;
    this.setState({
      todos:this.state.todos
    })
   }


   
   handleChange = (e,i)=>{
    this.state.todos[i].title = e.target.value;
    this.setState({
      todos:this.state.todos
    })
  }



  updateItem = (i)=>{
    this.state.todos[i].edit=false;
    this.setState({
      todos:this.state.todos
    })
   }




  render(){
    let {todos,value}=this.state;
    return(
            
        <div className='wid'>
          <button  type="button" class="btn btn-outline-light" style={{height:"50px"},{width:"600px"}} >TO DO APPLICATION</button>
          <br/><br/><br/><br/><br/>          
          <input class='inp' value={value} onChange={(e)=> this.setState({value:e.target.value})} type="text" placeholder="Enter Item" />
      <button type="button" class="btn btn-outline-light" onClick={this.addItem}> ADD ITEM </button>
      <ol>
        {
          
          todos.map((v,i)=>{
            return <li key={i} >
              {v.edit?  <input id="outlined-basic" label="Outlined" variant="outlined" type="text" value={v.title} onChange={(e)=>this.handleChange(e,i)} /> : v.title} 
          {v.edit? 
          <button  type="button" class="btn btn-outline-light" className='btnn'  onClick={()=>{this.updateItem(i)} }>Update</button>
          :
          <button  type="button" class="btn btn-outline-light" onClick={()=> this.editItem(i,v.title)}>Edit</button>
          }
          <button  type="button" class="btn btn-outline-light" onClick={()=> this.deleteItem(i)}>Delete</button>
          </li>})
        }
      </ol>

      
      </div>

    )
  }
}

export default App;
