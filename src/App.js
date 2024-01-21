import Navbar from './components/Navbar';
import NewsContent from './components/NewsContent';
import './App.css';
import { useState } from 'react';

function App() {
  const [category,setcategory]=useState("general");
  console.log(category);
  return (
    <>
    <Navbar setcategory={setcategory}/>
    <NewsContent category={category}/>
</>
  );
}

export default App;


// api_key=90e33b3959734346acf5721a7c290ef0
