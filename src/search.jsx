import React from "react";
import "./home.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import  { useState } from 'react';
import "./serach.css"
function Search() {
 

  const navigate = useNavigate();
  return (
    <>
      <div className="container bg-black  w-full ">
        
        <div className="sidebar bg-side">
          <div className="navigation bg-side2">
            <ul>
              <li>
                <a href="#" className="logo ms-16">
                  <img
                    src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
                    className="mt-3 "
                    alt="Logo"
                  />
                </a>
                <a href="#">
                  <h4 className="font-2 mt-3 ">
                    <i class="bi bi-house-door-fill"></i> Home
                  </h4>
                </a>
              </li>

              <li>
                <a href="#">
                  <h4 className="font-2">
                    <i class="bi bi-search"></i> Search
                  </h4>
                </a>
              </li>
            </ul>
          </div>

          <div className="navigation mt-5 bg-side2 ">
            <ul>
              <li>
                <a href="#">
                  <h4 className="font-2 ">
                    <i class="bi bi-collection-fill"></i> Your Library{" "}
                    <strong>
                      <i class="bi bi-plus-lg ms-16"></i>
                    </strong>
                  </h4>
                </a>
              </li>
            </ul>
            <div className="bg-side1 border-solid-side1 rounded-lg ms-2 me-2 pt-4">
              <ul>
                <li>
               
                    <h4 className="font-2 ">Create Your First playlist</h4>
                  
                </li>

                <li>
                <a href="/play">
                    <button type="button" className="but" >
                      <h4>Create Playlist</h4>
                    </button>
             </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="navigation bg-side2 ">
            <ul>
              <li>
                <a href="#" className="logo"></a>
                <a href="#">
                  <h6 className="font-2 mt-3 me-10">Legal</h6>
                </a>
                <a href="#">
                  <h6 className="font-2 mt-3  me-10">Privacy Policy</h6>
                </a>
                <a href="#">
                  <h6 className="font-2 mt-3 me-10">Cookies</h6>
                </a>
                <a href="#">
                  <h6 className="font-2 mt-3 me-10">Accessability</h6>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <button type="button" className="butt">
              <i class="bi bi-globe"></i> English
            </button>
          </div>
        </div>

        <div className="row ms-80 ">
          <div className="">
           <h2></h2>
            <input
              type="text"
              placeholder="What do you want to listen to?" className="mt-5" size={24} 
             
            />
            <button type="button" className="butt ">Search</button>
          </div>
        </div>
       
        
        <div className="row  ms-80 ">
       
        <div className="grid gap-3 grid-cols-5">
                        <div className="col-span-1 bg-pink-700 py-24 p-4 rounded-lg  ">
                          <h4 className="mt-0 ">J-Pop</h4>
                         <div class="tilted-image-container ms-28 ">
                          <img src="https://i.scdn.co/image/ab67706c0000da84694d34dd1ae689065310bce7" alt="Tilted Image" class="tilted-image"/>
                       </div>
                            </div>
                            <div className="col-span-1 bg-pink-400 py-24 p-4 rounded-lg  ">
                                <h4 className="mt-0 ">Top Hits</h4>
                                <div class="tilted-image-container ms-28 ">
                          <img src="https://audiohype.io/wp-content/uploads/2021/04/Todays-Top-Hits-e1617896889213.jpg" alt="Tilted Image" class="tilted-image"/>
                       </div>
                            </div>

                            <div className="col-span-1 bg-slate-100 py-24 p-4 rounded-lg  ">
                                <h4 className="mt-0 ">Friday</h4>
                                <div class="tilted-image-container ms-28 ">
                          <img src=" https://i.scdn.co/image/ab67706f0000000244abeb5ae788aa90006b67ec" alt="Tilted Image" class="tilted-image"/>
                       </div>
                               
                            </div>

                            <div className="col-span-1 bg-blue-700 py-24 p-4 rounded-lg  ">
                                <h4 className="mt-0 ">Bollywood</h4>
                                <div class="tilted-image-container ms-28 ">
                          <img src="https://i.scdn.co/image/ab67706f00000002efcd35fd64a73060bb6605e4" alt="Tilted Image" class="tilted-image"/>
                       </div>
                            </div>
                            
                            <div className="col-span-1 bg-blue-700 py-24 p-4 rounded-lg  ">
                                <h4 className="mt-0 ">Hot Hits</h4>
                                <div class="tilted-image-container ms-28 ">
                          <img src="https://i.scdn.co/image/ab67706f00000002319bd79eba1610f1f5fe6a4b" alt="Tilted Image" class="tilted-image"/>
                       </div>
                            </div>

                        </div>
            </div>

            <div className="row  ms-80 mt-3 ">
            
            <div className="grid gap-3 grid-cols-5 ">
                                <div className="col-span-1 bg-pink-800 py-24  p-4 rounded-lg  ">
                                    <h4 className="mt-0 ">Science</h4>
                                    <div class="tilted-image-container ms-28 ">
                          <img src="https://i.scdn.co/image/ab6765630000ba8aa3ccdbf467a2fa4ed8f18a6e" alt="Tilted Image" class="tilted-image"/>
                       </div>
                                </div>

                                <div className="col-span-1 bg-yellow-200 py-24 p-4 rounded-lg  ">
                                    <h4 className="mt-0 ">Hits</h4>
                                    <div class="tilted-image-container ms-28 ">
                          <img src="https://i.scdn.co/image/ab67706c0000da8415036e5f123965d9da2d06cb" alt="Tilted Image" class="tilted-image"/>
                       </div>
                                </div>

                                <div className="col-span-1 bg-slate-500 py-24 p-4 rounded-lg  ">
                                    <h4 className="mt-0 ">Video Podcast</h4>
                                    <div class="tilted-image-container ms-28 ">
                          <img src="https://i.scdn.co/image/9af79fd06e34dea3cd27c4e1cd6ec7343ce20af4" alt="Tilted Image" class="tilted-image"/>
                       </div>
                                </div>

                                <div className="col-span-1 bg-blue-300 py-24 p-4 rounded-lg  ">
                                    <h4 className="mt-0 ">Punjabi </h4>
                                    <div class="tilted-image-container ms-28 ">
                          <img src="https://i.scdn.co/image/ab67706f000000020f9071523edb8a48b0e961e2" alt="Tilted Image" class="tilted-image"/>
                       </div>
                                </div>

                                <div className="col-span-1 bg-blue-900 py-24 p-4 rounded-lg  ">
                                    <h4 className="mt-0 ">Mantras</h4>
                                    <div class="tilted-image-container ms-28 ">
                          <img src="https://i.scdn.co/image/ab67706f00000002f57919b4b0bc49c125c2023d" alt="Tilted Image" class="tilted-image"/>
                       </div>
                                </div>
                            </div>
                </div>

                <div className="row  ms-80 mt-3">
            
        <div className="grid gap-3 grid-cols-5 ">
                            <div className="col-span-1 bg-red-500 py-24 p-4 rounded-lg  ">
                                <h4 className="mt-0 ">Radar</h4>
                                <div class="tilted-image-container ms-28 ">
                          <img src="  https://i.scdn.co/image/ab67706f00000002170562c6efeba3412eae2774" alt="Tilted Image" class="tilted-image"/>
                       </div>
                            </div>

                            <div className="col-span-1 bg-purple-400 py-24 p-4 rounded-lg  ">
                                <h4 className="mt-0 ">Equal</h4>
                                <div class="tilted-image-container ms-28 ">
                          <img src="https://bandwagon-gig-finder.s3.amazonaws.com/system/tinymce/image/file/2405/content_mceu_10663303011619766722274.jpg" alt="Tilted Image" class="tilted-image"/>
                       </div>
                            </div>

                            <div className="col-span-1 bg-purple-500 py-24 p-4 rounded-lg  ">
                                <h4 className="mt-0 ">Indian classical</h4>
                                <div class="tilted-image-container ms-28 ">
                          <img src="https://i.scdn.co/image/ab67706f000000028bc55791c7c394b24c319877" alt="Tilted Image" class="tilted-image"/>
                       </div>
                            </div>

                            <div className="col-span-1 bg-teal-600 py-24 p-4 rounded-lg  ">
                                <h4 className="mt-0 ">Instrumental</h4>
                                <div class="tilted-image-container ms-28 ">
                          <img src="https://i.scdn.co/image/ab67706f00000002c1811d50fbd4df02ea3b06a3" alt="Tilted Image" class="tilted-image"/>
                       </div>
                            </div>

                            <div className="col-span-1 bg-fuchsia-500 py-24 p-4 rounded-lg  ">
                                <h4 className="mt-0 ">K-POP</h4>
                                <div class="tilted-image-container ms-28 ">
                          <img src="https://pbs.twimg.com/media/FxmXTK9acAAvor5.jpg:large" alt="Tilted Image" class="tilted-image"/>
                       </div>
                            </div>
                        </div>
            </div>



            <div className="row  ms-80 mt-3">
            
        <div className="grid gap-3 grid-cols-5 ">
                            <div className="col-span-1 bg-orange-700 py-24  p-4 rounded-lg  ">
                                <h4 className="mt-0 ">Rock</h4>
                                <div class="tilted-image-container ms-28 ">
                          <img src="https://i.scdn.co/image/ab67706f0000000203792fde72b1f9138019bbb3" alt="Tilted Image" class="tilted-image"/>
                       </div>
                            </div>

                            <div className="col-span-1 bg-yellow-500 py-24 p-4 rounded-lg  ">
                                <h4 className="mt-0 ">Fresh Folk</h4>
                                <div class="tilted-image-container ms-28 ">
                          <img src="https://i.scdn.co/image/ab67706c0000da84dbd8955e68b5f4485981ab2a" alt="Tilted Image" class="tilted-image"/>
                       </div>
                            </div>

                            <div className="col-span-1 bg-sky-400 py-24 p-4 rounded-lg  ">
                                <h4 className="mt-0 ">Disney</h4>
                                <div class="tilted-image-container ms-28 ">
                          <img src="https://i.scdn.co/image/ab67706f00000002215fab676f73bd0b8e813692" alt="Tilted Image" class="tilted-image"/>
                       </div>
                            </div>

                            <div className="col-span-1 bg-rose-400 py-24 p-4 rounded-lg  ">
                                <h4 className="mt-0 ">Nature</h4>
                                <div class="tilted-image-container ms-28 ">
                          <img src="https://i.scdn.co/image/ab67706f000000027eac3a22b6b3756d62373f48" alt="Tilted Image" class="tilted-image"/>
                       </div>
                            </div>

                            <div className="col-span-1 bg-blue-400 py-24 p-4 rounded-lg  ">
                                <h4 className="mt-0 ">Summer</h4>
                                <div class="tilted-image-container ms-28 ">
                          <img src="https://i.scdn.co/image/ab67706f000000024fdcd4954713745550ba27b3" alt="Tilted Image" class="tilted-image"/>
                       </div>
                            </div>
                        </div>
            </div>


        </div>
        </>
  );
}

export default Search;
