import { useState } from 'react'
import { BrowserRouter, Routes, Route, Form } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './home.jsx'
import User from './register.jsx';
import Login from './login.jsx';
import Side from './side.jsx';
import {Scroll,Scroll2,Scroll3,Scroll4,Scroll5,Scroll6} from './scroll.jsx';
import Play from './playlist.jsx';
import { PlaylistProvider } from './playlistContext.jsx';
import Home2 from './home2.jsx';
import {Page1,Page22,Page33,Page44,Page55,Page66} from './page2.jsx';
import {Page,Page2,Page3,Page4,Page5,Page6} from './page.jsx';
import {S1,S2,S3,S4,S5,S6} from "./page3.jsx"
import Search from './search.jsx';
import {P1,P2,P3,P4,P5,P6} from "./page4.jsx"
function App() {


  return (
    <>
    <BrowserRouter>
    <PlaylistProvider>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="search" element={<Search />} />
    <Route path="/scroll" element={<Scroll/>} />
    <Route path="/home2" element={<Home2/>} />
    <Route path="/scroll2" element={<Scroll2/>} />
    <Route path="/scroll3" element={<Scroll3/>} />
    <Route path="/scroll4" element={<Scroll4/>} />
    <Route path="/scroll5" element={<Scroll5/>} />
    <Route path="/scroll6" element={<Scroll6/>} />
    <Route path="/play" element={<Play/>} />
    <Route path="/user" element={<User />} />
    <Route path="/login" element={<Login />} />
    <Route path="/page" element={<Page/>} />
    <Route path="/page2" element={<Page2/>} />
    <Route path="/page3" element={<Page3/>} />
    <Route path="/page4" element={<Page4/>} />
    <Route path="/page5" element={<Page5/>} />
    <Route path="/page6" element={<Page6/>} />

    <Route path="/page1" element={<Page1/>} />
    <Route path="/page22" element={<Page22/>} />
    <Route path="/page33" element={<Page33/>} />
    <Route path="/page44" element={<Page44/>} />
    <Route path="/page55" element={<Page55/>} />
    <Route path="/page66" element={<Page66/>} />


    <Route path="/s1" element={<S1/>} />
    <Route path="/s2" element={<S2/>} />
    <Route path="/s3" element={<S3/>} />
    <Route path="/s4" element={<S4/>} />
    <Route path="/s5" element={<S5/>} />
    <Route path="/s6" element={<S6/>} />


    <Route path="/p1" element={<P1/>} />
    <Route path="/p2" element={<P2/>} />
    <Route path="/p3" element={<P3/>} />
    <Route path="/p4" element={<P4/>} />
    <Route path="/p5" element={<P5/>} />
    <Route path="/p6" element={<P6/>} />

   </Routes>
   </PlaylistProvider>
   </BrowserRouter>
   <ToastContainer />
      
    </>
  )
}

export default App
