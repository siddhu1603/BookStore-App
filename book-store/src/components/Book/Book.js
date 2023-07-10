import {Button} from '@mui/material';
import {Link, useNavigate} from 'react-router-dom';
import React from 'react';
import "./Book.css"
import axios from 'axios';
const Book = (props) => {
  const history = useNavigate();
  const {_id, name, author, description, price, image } = props.book;
  const deleteHandler = async() => {
    await axios
    .delete(`http://localhost:5000/books/${_id}`)
    .then(res=>res.data)
    .then(()=>history("/"))
    .then(()=>history("/books"));
  }
  return (
    <div className="card">
        <img src={image} alt={name}/>
        <article>By {author}</article>
        <h3>{name}</h3>
        <p className='desc'>{description}</p>
        <h3>Rs {price}</h3>
        <div>
        <table border="0" style={{width:'100%' }}>
          <tr>
            <td><Button LinkComponent ={Link} to={ `/books/${_id}`} sx={{mt:"auto"}}>Update</Button></td>
            <td><Button onClick={deleteHandler} sx={{mt:"auto"}}>Delete</Button></td>
          </tr>
        </table>
        </div>
        
        
    </div>
  );
};

export default Book;