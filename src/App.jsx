import React from 'react'
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import Header from './components/Header';
import Post from './components/Post';
import Grid from './components/Grid';
import Search from './components/Search'
import './App.css'

function App() {
 

  return (
    <>
    <Container>
    <Header />
    <Post />
    <Search />
    <Grid />
    </Container>
    
     
    </>
  )
}

export default App
