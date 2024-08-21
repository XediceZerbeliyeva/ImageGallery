import React, { useState } from 'react';
import './App.css'
import axios from "axios"
function App() {
  const [inputValue, setinputValue] = useState("");
  const [images, setImages] = useState([]);
  const searchValue = () => {
    //  console.log(inputValue);
    getApi(inputValue);

  }
  const accessKey = "JViQ3_vAZW_ifzvllfB7bGdaNwMm5-2dANxJ5tc-LNk";
  const getApi = async (query) => {
    const response = await axios.get(`https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`);
    // console.log(response.data);
    setImages(response.data.results)
  }
  return (
    <div>
      <h1>Image Gallery</h1>
      <div className="Search-Input">
        <input type="text" name="" id="" onChange={(e) => { setinputValue(e.target.value) }} value={inputValue} />
        <button onClick={searchValue}>Submit</button>
      </div>
      <div>
        {images.map((image) => (
          <img key={image.id} src={image.urls.small} alt={image.alt_description} />
        ))}
      </div>
    </div>
  )
}

export default App