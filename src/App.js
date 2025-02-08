import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { createContext, useState } from "react";
import axios from 'axios';
import { useEffect } from "react";


const MyContext = createContext();

function App() {

  const [countryList,setCountryList] = useState([]);
  const [selectedCountry,setselectedCountry] = useState('');

  useEffect(()=>{
    getCountry("https://countriesnow.space/api/v0.1/countries");
  },[]);

  const getCountry = async(url)=>{
    const responsive = await axios.get(url).then((res)=>{
      setCountryList(res.data.data)
      console.log(res.data.data)
    })
  }

  const getCountryList = async()=>{
    const responsive = await axios.get("https://countriesnow.space/api/v0.1/countries").then((res)=>{
      setCountryList(res.data.data)
      console.log(res.data.data)
    })
  }

  const values={
    countryList,
    setselectedCountry,
    selectedCountry

  }

  return (

    <BrowserRouter>
    <MyContext.Provider value={values}>
    <Header />
    <Routes>
      <Route path="/" exact={true} element={<Home />} />
    </Routes>
    </MyContext.Provider>
    </BrowserRouter>
    

  );
}

export default App;

export {MyContext}
