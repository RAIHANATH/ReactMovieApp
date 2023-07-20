import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AddMovie from './AddMovie';

const Home = () => {
    var [movies,setMovies] = useState([]);
    var [edit,setEdit] = useState(false);
    var [singleValue,setSingleValue] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3008/viewmovies")
        .then((response)=>{
          console.log(response.data);
          setMovies(response.data);
        })
      },[])
    
    // const deleteMovies = ()=>{
    //     console.log('clicked')
    // }
        var deleteMovies =(id)=>{
            console.log(id);
            axios.delete("http://localhost:3008/deletemovies/"+id)
            .then((response)=>{
              alert("Deleted!");
              window.location.reload(false)
            })
            .catch((err)=>console.log(err))
          }
    

    const editMovies = (value)=>{
        console.log("Update Clicked!")
        setEdit(true);
        setSingleValue(value);
    }
    var finalJSX = (
                <TableContainer style={{paddingTop:'110px'}}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{fontWeight:'bold'}}>MovieName</TableCell>
                                <TableCell style={{fontWeight:'bold'}}>Actor</TableCell>
                                <TableCell style={{fontWeight:'bold'}}>Actress</TableCell>
                                <TableCell style={{fontWeight:'bold'}}>Director</TableCell>
                                <TableCell style={{fontWeight:'bold'}}>ReleasedYear</TableCell>
                                <TableCell style={{fontWeight:'bold'}}>Camera</TableCell>
                                <TableCell style={{fontWeight:'bold'}}>Producer</TableCell>
                                <TableCell style={{fontWeight:'bold'}}>Language</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {movies.map((val,i)=>{
              return (
                <TableRow key={i}>
                  <TableCell>{val.movieName}</TableCell>
                  <TableCell>{val.actor}</TableCell>
                  <TableCell>{val.actress}</TableCell>
                  <TableCell>{val.director}</TableCell>
                  <TableCell>{val.releasedYear}</TableCell>
                  <TableCell>{val.camera}</TableCell>
                  <TableCell>{val.producer}</TableCell>
                  <TableCell>{val.language}</TableCell>
                  <TableCell>
                    <Button variant='contained' onClick={()=>editMovies(val)}>
                      Edit
                    </Button>
                    </TableCell>
                    <TableCell>
                      <Button variant='contained' onClick={()=>deleteMovies(val._id)}>
                        Delete
                      </Button>
                    </TableCell>
                </TableRow>
              )
             })}
                        </TableBody>
                    </Table>
                </TableContainer>
          )
    if(edit) finalJSX = <AddMovie data={singleValue} method='put'/>
    return finalJSX;
};
  


export default Home