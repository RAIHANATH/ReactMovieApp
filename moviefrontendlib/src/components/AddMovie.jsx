import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AddMovie = (props) => {
    var navigate = useNavigate();
    console.log("props.data", props.data);
    console.log("props.method", props.method);
    const[inp,setInp] = useState(props.data);
    
    const inputHandler = (e)=>{
        const {name, value} = e.target;
        setInp((inp)=>({...inp,[name]:value}))
        console.log(inp)
      }
    const submitMovies = ()=>{
        console.log('clicked');
        if(props.method==="post"){
          axios.post("http://localhost:3008/addmovies",inp)
          .then((Response)=>{
            alert("Data Added!");
            navigate('/')
          })
          .catch(err=>console.log(err))
        };
        

        if(props.method==="put"){
          axios.put("http://localhost:3008/edit/"+inp._id,inp)
          .then((response)=>{
            alert("Updated!");
            window.location.reload(false)
          })
        }


    }
  return (
    <div style={{paddingTop:'100px'}}>
        <TextField name='movieName' value={inp.bookName} onChange={inputHandler} label='Movie Name'/> &nbsp; &nbsp; &nbsp; &nbsp; <TextField name='releasedYear' value={inp.releasedYear} onChange={inputHandler} label='Released year'/>
        <br /><br />
        <TextField name='actor' value={inp.actor} onChange={inputHandler} label='Actor'/> &nbsp; &nbsp; &nbsp; &nbsp;<TextField name='camera' value={inp.camera} onChange={inputHandler} label='Camera'/>
        <br /><br />
        <TextField name='actress' value={inp.actress} onChange={inputHandler} label='Actress'/> &nbsp; &nbsp; &nbsp; &nbsp;<TextField name='producer' value={inp.producer} onChange={inputHandler} label='Producer'/>
        <br /><br />
        <TextField name='director' value={inp.director} onChange={inputHandler} label='Director'/> &nbsp; &nbsp; &nbsp; &nbsp;<TextField name='language' value={inp.language} onChange={inputHandler} label='Language'/>
        <br /><br />
        <Button variant='contained' onClick={submitMovies}>ADD</Button>
    </div>
  )
}

export default AddMovie