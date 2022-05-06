import './App.css';
import { useState, useEffect } from 'react'
import ImageCard from './ImageCard';
import Navbar from './Navbar';


function App() {

  const [images, setImages] = useState([])
  const [term, setTerm] = useState('')

  useEffect( ()=> {
    fetch(`https://pixabay.com/api/?key=27088582-822778ecba4aeacddc33f04b2&q=${term}&image_type=photo&pretty=true`)
    .then(response => response.json())
    .then(data => setImages(data.hits))
  },[term])

  return (
    <div className="App">
      <Navbar searchText={ text=> setTerm(text)}/>
      {images.map( image => (
          <ImageCard key={image.id} image={image} />
      ))}      
    </div>
  );
}

export default App;
