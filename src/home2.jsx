import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "./home.css";

function Home2() {
  const navigate = useNavigate();
  const recentlyPlayed = JSON.parse(localStorage.getItem('recentlyPlayed')) || [];
 
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };
  return (
    <>
     <div className="bg-black h-max w-full">

   
        <div className="sidebar bg-side ">
          <div className="navigation bg-side2">
            <ul>
              <li>
                <Link to="#" className="logo ms-16">
                  <img
                    src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
                    className="mt-3"
                    alt="Logo"
                  />
                </Link>
                <Link to="#">
                  <h4 className="font-2 mt-3">
                    <i className="bi bi-house-door-fill"></i> Home
                  </h4>
                </Link>
              </li>

              <li>
                <Link to="/search">
                  <h4 className="font-2">
                    <i className="bi bi-search"></i> Search
                  </h4>
                </Link>
              </li>
            </ul>
          </div>

          <div className="navigation mt-5 bg-side2 ">
            <ul>
              <li>
                <Link to="#">
                  <h4 className="font-2 ">
                    <i className="bi bi-collection-fill"></i> Your Library{" "}
                    <strong>
                      <i className="bi bi-plus-lg ms-16"></i>
                    </strong>
                  </h4>
                </Link>
              </li>
            </ul>
            <div className="bg-side1 border-solid-side1 rounded-lg ms-2 me-2 pt-4">
              <ul>
                <li>
                  <Link to="#">
                    <h4 className="font-2 ">Create Your First playlist</h4>
                  </Link>
                </li>

                <li>
                <Link to="/play">
                    <button type="button" className="but">
                      <h4>Create Playlist</h4>
                    </button>
                 </Link>
                </li>
                <li>
                <button type="button" onClick={handleLogout} className='butt'>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
  
        <div className="row six">
      <div className="grid grid-cols-1 ms-80">
        <div className="spotify-playlists">

          <h2 className="font-12 mt-4">Recently Played</h2>
          <div className="list">
            {recentlyPlayed.map((track, index) => (
              <div className="item" key={index}>
                {/* Display each recently played track */}
                <img src={track.img} className="img" alt={track.title} />
                <div className="play">
                  <i className="bi bi-play-fill fa fa-play"></i>
                </div>
                <h4>{track.title}</h4>
                <p>{track.album}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
       
  

        <div className="row">
          
<div className="grid grid-cols-1 ms-80 ">
            <div class="spotify-playlists">
              <h2 className="font-12 mt-4">Spotify Playlist</h2>
              <div class="list">

              <div className="item"> 
               <Link to="/scroll">
      <img src="https://media.allure.com/photos/6127ac0b238beb835812ce4c/4:3/w_2247,h_1685,c_limit/Ariana%20Grande%20Allure%20Cover%20No%20Coverlines.jpg" className="img"  />
        <div className="play">
          <i className="bi bi-play-fill fa fa-play"></i>
        </div>
        <h4>Mood Booster</h4>
        <p>Get ready to boost your mood!</p> </Link>
      </div>

                <div class="item">
                <Link to="/scroll2">
                <img src="https://i.dawn.com/primary/2021/12/61c070dad6d05.png" className="img" />
                  <div class="play">
                  <i class="bi bi-play-fill fa fa-play"></i>
                  </div>
                  <h4>Feelin' Good</h4>
                  <p>Feel good with this positively timeless...</p>
                  </Link>
                </div>

                <div class="item">
                <Link to="/scroll3">
                <img src="https://d2l4kn3pfhqw69.cloudfront.net/wp-content/uploads/2021/02/the-weeknd.jpg" className="img"  />
                  <div class="play">
                  <i class="bi bi-play-fill fa fa-play"></i>
                  </div>
                  <h4>Dark & Stormy</h4>
                  <p>Beautifully dark, dramatic tracks.</p>  </Link>
                </div>
     
                <div class="item">
                <Link to="/scroll4">
              <img src="https://images.seattletimes.com/wp-content/uploads/2023/07/07222023_swift_213100.jpg?d=2040x1479" className="img" />
                <div class="play" >
                  <i class="bi bi-play-fill fa fa-play" ></i>
                
                </div>
                <h4>Mood Booster</h4>
                <p>Get happy with today's dose of feel-good...</p>
                </Link>
              </div>
   
                <div class="item">
                <Link to="/scroll5">
                <img src="https://static.javatpoint.com/top10-technologies/images/top-10-english-singers8.jpg" className="img"  />
                  <div class="play">
                  <i class="bi bi-play-fill fa fa-play"></i>
                  </div>
                  <h4>Feelin' Good</h4>
                  <p>Feel good with this positively timeless...</p></Link>
                </div>
                <div class="item">
                <Link to="/scroll6">
                <img src="https://qph.cf2.quoracdn.net/main-qimg-3a8af4f2128be7a52b86afc3ebf77c70-lq" className="img" />
                  <div class="play">
                  <i class="bi bi-play-fill fa fa-play"></i>
                  </div>
                  <h4>Feelin' Myself</h4>
                  <p>The hip-hop playlist that's a whole mood...</p></Link>
                </div>

                

                
              </div>
            </div>
          </div>
        </div>



        <div className="row two mt-10">
          
<div className="grid grid-cols-1 ms-80 ">
            <div class="spotify-playlists">
              <h2 className="font-12 mt-4">90's Love Story</h2>
              <div class="list">

              <div className="item"> 
               <Link to="/page"> <img src="https://i.pinimg.com/564x/49/4f/e7/494fe7ef8ff8d98e56f98f6f35e320ca.jpg" className="img" />
    
        <div className="play">
          <i className="bi bi-play-fill fa fa-play"></i>
        </div>
        <h4>Mood Booster</h4>
        <p>Get ready to boost your mood!</p> </Link>
      </div>

                <div class="item">
                <Link to="/page2">
                 <img src="https://i.pinimg.com/564x/84/53/ac/8453ac4d0eaa58c957e44239e40a19b8.jpg" className="img"  />
                  <div class="play">
                  <i class="bi bi-play-fill fa fa-play"></i>
                  </div>
                  <h4>Feelin' Good</h4>
                  <p>Feel good with this positively timeless...</p>
                  </Link>
                </div>

                <div class="item">
                <Link to="/page3">
                <img src="https://i.pinimg.com/564x/18/39/1c/18391c6407ca527947fe849d0b0d8985.jpg" className="img"  />
                  <div class="play">
                  <i class="bi bi-play-fill fa fa-play"></i>
                  </div>
                  <h4>Dark & Stormy</h4>
                  <p>Beautifully dark, dramatic tracks.</p>  </Link>
                </div>
     
                <div class="item">
                <Link to="/page4">
              <img src="https://i.pinimg.com/564x/29/01/a8/2901a88a3c6f450798a6549dacf045da.jpg" className="img" />
                <div class="play" >
                  <i class="bi bi-play-fill fa fa-play" ></i>
                
                </div>
                <h4>Mood Booster</h4>
                <p>Get happy with today's dose of feel-good...</p>
                </Link>
              </div>
   
                <div class="item">
                <Link to="/page5">
                <img src="https://i.pinimg.com/564x/b5/ab/f2/b5abf21f1fbde103cc202bf05cb2db0c.jpg" className="img"  />
                  <div class="play">
                  <i class="bi bi-play-fill fa fa-play"></i>
                  </div>
                  <h4>Feelin' Good</h4>
                  <p>Feel good with this positively timeless...</p></Link>
                </div>
                <div class="item">
                <Link to="/page6">
                <img src="https://i.pinimg.com/564x/0d/9c/21/0d9c21754979854458424dc26892b6b1.jpg" className="img" />
                  <div class="play">
                  <i class="bi bi-play-fill fa fa-play"></i>
                  </div>
                  <h4>Feelin' Myself</h4>
                  <p>The hip-hop playlist that's a whole mood...</p></Link>
                </div>

              

                
              </div>
            </div>
          </div>
        </div>


        <div className="row three mt-10">
          
<div className="grid grid-cols-1 ms-80 ">
            <div class="spotify-playlists">
              <h2 className="font-12 mt-4">KPOP</h2>
              <div class="list">

              <div className="item"> 
               <Link to="/page1">
      <img src="https://i.pinimg.com/736x/34/75/ff/3475ffa0216b7733b33657b6754f9c07.jpg" className="img"  />
        <div className="play">
          <i className="bi bi-play-fill fa fa-play"></i>
        </div>
        <h4>Mood Booster</h4>
        <p>Get ready to boost your mood!</p> </Link>
      </div>

                <div class="item">
                <Link to="/page22">
                <img src="https://i.pinimg.com/564x/8e/08/95/8e08958ca6d4a6b698c25a2abfb73d66.jpg" className="img" />
                  <div class="play">
                  <i class="bi bi-play-fill fa fa-play"></i>
                  </div>
                  <h4>Feelin' Good</h4>
                  <p>Feel good with this positively timeless...</p>
                  </Link>
                </div>

                <div class="item">
                <Link to="/page33">
                <img src="https://i.pinimg.com/564x/73/43/2a/73432a5c3cc4d00fa707e7e3f1be517d.jpg" className="img"  />
                  <div class="play">
                  <i class="bi bi-play-fill fa fa-play"></i>
                  </div>
                  <h4>Dark & Stormy</h4>
                  <p>Beautifully dark, dramatic tracks.</p>  </Link>
                </div>
     
                <div class="item">
                <Link to="/page44">
              <img src="https://i.pinimg.com/564x/f9/7b/28/f97b2847437d19e3594f3034d0bc3825.jpg" className="img" />
                <div class="play" >
                  <i class="bi bi-play-fill fa fa-play" ></i>
                
                </div>
                <h4>Mood Booster</h4>
                <p>Get happy with today's dose of feel-good...</p>
                </Link>
              </div>
   
                <div class="item">
                <Link to="/page55">
                <img src="https://i.pinimg.com/564x/14/7b/4d/147b4d5c6d6fece5caedc872aae24a57.jpg" className="img"  />
                  <div class="play">
                  <i class="bi bi-play-fill fa fa-play"></i>
                  </div>
                  <h4>Feelin' Good</h4>
                  <p>Feel good with this positively timeless...</p></Link>
                </div>
                <div class="item">
                <Link to="/page66">
                <img src="https://i.pinimg.com/564x/4b/47/53/4b475393e386f4a4d1f6cadc9a0e47ba.jpg" className="img" />
                  <div class="play">
                  <i class="bi bi-play-fill fa fa-play"></i>
                  </div>
                  <h4>Feelin' Myself</h4>
                  <p>The hip-hop playlist that's a whole mood...</p></Link>
                </div>


                
              </div>
            </div>
          </div>
        </div>



        <div className="row four mt-10">
          
<div className="grid grid-cols-1 ms-80 ">
            <div class="spotify-playlists">
              <h2 className="font-12 mt-4">Made For You</h2>
              <div class="list">

              <div className="item"> 
               <Link to="/s1">
      <img src="https://i.pinimg.com/564x/5a/c9/d7/5ac9d7b05bf6cf11362f2b3953a79417.jpg" className="img"  />
        <div className="play">
          <i className="bi bi-play-fill fa fa-play"></i>
        </div>
        <h4>Mood Booster</h4>
        <p>Get ready to boost your mood!</p> </Link>
      </div>

                <div class="item">
                <Link to="/s2">
                <img src="https://i.pinimg.com/564x/60/af/a7/60afa748d011b434bdff3d4b960fa0cf.jpg" className="img" />
                  <div class="play">
                  <i class="bi bi-play-fill fa fa-play"></i>
                  </div>
                  <h4>Feelin' Good</h4>
                  <p>Feel good with this positively timeless...</p>
                  </Link>
                </div>

                <div class="item">
                <Link to="/s3">
                <img src="https://i.pinimg.com/564x/46/64/e3/4664e3baa0b53117078eb642f9ede23d.jpg" className="img"  />
                  <div class="play">
                  <i class="bi bi-play-fill fa fa-play"></i>
                  </div>
                  <h4>Dark & Stormy</h4>
                  <p>Beautifully dark, dramatic tracks.</p>  </Link>
                </div>
     
                <div class="item">
                <Link to="/s4">
              <img src="https://i.pinimg.com/564x/75/e0/03/75e0032dd8775071a93c0bf898f8af16.jpg" className="img" />
                <div class="play" >
                  <i class="bi bi-play-fill fa fa-play" ></i>
                
                </div>
                <h4>Mood Booster</h4>
                <p>Get happy with today's dose of feel-good...</p>
                </Link>
              </div>
   
                <div class="item">
                <Link to="/s5">
                <img src="https://i.pinimg.com/564x/1d/8c/bb/1d8cbbe231f4e8630eba66b4c92b465e.jpg" className="img"  />
                  <div class="play">
                  <i class="bi bi-play-fill fa fa-play"></i>
                  </div>
                  <h4>Feelin' Good</h4>
                  <p>Feel good with this positively timeless...</p></Link>
                </div>
                <div class="item">
                <Link to="/s6">
                <img src="https://i.pinimg.com/564x/1a/fd/65/1afd6524d1bb543d93a1012908181263.jpg" className="img" />
                  <div class="play">
                  <i class="bi bi-play-fill fa fa-play"></i>
                  </div>
                  <h4>Feelin' Myself</h4>
                  <p>The hip-hop playlist that's a whole mood...</p></Link>
                </div>


                
              </div>
            </div>
          </div>
        </div>


        <div className="row five mt-10">
          
<div className="grid grid-cols-1 ms-80 ">
            <div class="spotify-playlists">
              <h2 className="font-12 mt-4">Mood</h2>
              <div class="list">

              <div className="item"> 
               <Link to="/p1">
      <img src="https://i.pinimg.com/564x/9d/ad/f9/9dadf9fccc6d462ba836ef1378f53f70.jpg" className="img"  />
        <div className="play">
          <i className="bi bi-play-fill fa fa-play"></i>
        </div>
        <h4>Mood Booster</h4>
        <p>Get ready to boost your mood!</p> </Link>
      </div>

            
                <div class="item">
                <Link to="/p3">
                <img src="https://i.pinimg.com/564x/af/6a/e7/af6ae766b4c72f2690fedaf9897d548e.jpg" className="img"  />
                  <div class="play">
                  <i class="bi bi-play-fill fa fa-play"></i>
                  </div>
                  <h4>Dark & Stormy</h4>
                  <p>Beautifully dark, dramatic tracks.</p>  </Link>
                </div>
                <div class="item">
                <Link to="/p2">
                <img src="https://i.pinimg.com/564x/57/5e/28/575e2824b8f02a83e663174ead9aa033.jpg" className="img" />
                  <div class="play">
                  <i class="bi bi-play-fill fa fa-play"></i>
                  </div>
                  <h4>Feelin' Good</h4>
                  <p>Feel good with this positively timeless...</p>
                  </Link>
                </div>
     
                <div class="item">
                <Link to="/p4">
              <img src="https://i.pinimg.com/564x/c2/a4/f9/c2a4f9f0dbb86cd557d2b8d867e1fc7b.jpg" className="img" />
                <div class="play" >
                  <i class="bi bi-play-fill fa fa-play" ></i>
                
                </div>
                <h4>Mood Booster</h4>
                <p>Get happy with today's dose of feel-good...</p>
                </Link>
              </div>
   
              <div class="item">
                <Link to="/p5">
                <img src="https://i.pinimg.com/564x/47/5b/72/475b72acb3f65dd57e938e4eab8ac895.jpg" className="img" />
                  <div class="play">
                  <i class="bi bi-play-fill fa fa-play"></i>
                  </div>
                  <h4>Feelin' Myself</h4>
                  <p>The hip-hop playlist that's a whole mood...</p></Link>
                </div>


                <div class="item">
                <Link to="/p6">
                <img src="https://i.pinimg.com/564x/18/aa/4f/18aa4ff70bcb47c84e78c22561e8591e.jpg" className="img"  />
                  <div class="play">
                  <i class="bi bi-play-fill fa fa-play"></i>
                  </div>
                  <h4>Feelin' Good</h4>
                  <p>Feel good with this positively timeless...</p></Link>
                </div>
               

               

                
              </div>
            </div>
          </div>
        </div>
       


    


        </div>
    </>
  );
}

export default Home2;
