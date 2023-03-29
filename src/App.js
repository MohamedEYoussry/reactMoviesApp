import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/home';
import AboutUS from './Pages/Aboutus/aboutus';
import ContactUS from './Pages/Contactus/contactus';
import NotFound from './Pages/NotFoiund/notfound';
import BasicExample from './Components/Header/header';
import Products from './Pages/Products/products';
import Details from './Pages/Details/details';
import Favourite from './Pages/Favourite/favourite'
import { LangProvider } from './Contexts/lang';
import { useState } from 'react';


function App() {
  const [lang ,setLang]=useState("EN");
  return (
<>
<LangProvider value={{lang,setLang}}>  

    <div >
     <BasicExample/>
       <Routes>
    <Route path='/' element={<Home/>} >  </Route>
    <Route path='/about' element={<AboutUS/>} >  </Route>
    <Route path='/contact' element={<ContactUS/>} >  </Route>
    <Route path='/produtcs' element={<Products/>} >  </Route>
    <Route path='/details/:id' element={<Details/>} >  </Route>
    <Route path='/favourite' element={<Favourite/>} >  </Route>

    <Route path='*' element={<NotFound/>} >  </Route>
    </Routes>
    </div>
    </LangProvider>
    
    </>



  );
}

export default App;
