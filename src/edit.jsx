// import React from "react";
// import "./home.css"
// import { Link, useNavigate } from 'react-router-dom';
// import  { useState } from 'react';
// function Home() {
//   const [isPlaying, setIsPlaying] = useState(false);

//   const audioFile = './music1.mp3';

//   const handlePlayPause = () => {
//     const audio = document.getElementById('audioPlayer');

//     if (isPlaying) {
//       audio.pause();
//     } else {
//       audio.play();
//     }

//     setIsPlaying(!isPlaying);
//   };

//   const navigate = useNavigate();
//   return (
//     <>
//       <div className="container bg-black h-full">
        
//         <div className="sidebar bg-side">
//           <div className="navigation bg-side2">
//             <ul>
//               <li>
//                 <a href="#" className="logo ms-16">
//                   <img
//                     src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
//                     className="mt-3"
//                     alt="Logo"
//                   />
//                 </a>
//                 <a href="#">
//                   <h4 className="font-2 mt-3 ">
//                     <i class="bi bi-house-door-fill"></i> Home
//                   </h4>
//                 </a>
//               </li>

//               <li>
//                 <a href="#">
//                   <h4 className="font-2">
//                     <i class="bi bi-search"></i> Search
//                   </h4>
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div className="navigation mt-5 bg-side2 ">
//             <ul>
//               <li>
//                 <a href="#">
//                   <h4 className="font-2 ">
//                     <i class="bi bi-collection-fill"></i> Your Library{" "}
//                     <strong>
//                       <i class="bi bi-plus-lg ms-16"></i>
//                     </strong>
//                   </h4>
//                 </a>
//               </li>
//             </ul>
//             <div className="bg-side1 border-solid-side1 rounded-lg ms-2 me-2 pt-4">
//               <ul>
//                 <li>
               
//                     <h4 className="font-2 ">Create Your First playlist</h4>
                  
//                 </li>

//                 <li>
//                    <Link to="/play">
//                     <button type="button" className="but">
//                       <h4>Create Playlist</h4>
//                     </button>
//                  </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="navigation bg-side2 ">
//             <ul>
//               <li>
//                 <a href="#" className="logo"></a>
//                 <a href="#">
//                   <h6 className="font-2 mt-3 me-10">Legal</h6>
//                 </a>
//                 <a href="#">
//                   <h6 className="font-2 mt-3  me-10">Privacy Policy</h6>
//                 </a>
//                 <a href="#">
//                   <h6 className="font-2 mt-3 me-10">Cookies</h6>
//                 </a>
//                 <a href="#">
//                   <h6 className="font-2 mt-3 me-10">Accessability</h6>
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <button type="button" className="butt">
//               <i class="bi bi-globe"></i> English
//             </button>
//           </div>
//         </div>

//         <div class="topbar">
//           <div class="prev-next-buttons"></div>

//           <div class="navbar">
//             <ul>
//               <li>
//               <Link to="/user">
//               <h4 className="font-2">Sign Up</h4>
//             </Link>
//               </li>
//             </ul>
            
           
//             <Link to="/login" className="mb-5"> <button type="button "> 
//               <h4>Log In</h4>
            
//             </button></Link>
//           </div>
//         </div>
//         <div className="row">


// {/* COMMENST ith thotte */}

//             {/* <div class="spotify-playlists">
//               <h2>Focus</h2>
//               <div class="list">
                
//           <div className="grid grid-cols-8 ms-80  ">
//                 <div class="item">
//                   <img src="https://images.seattletimes.com/wp-content/uploads/2023/07/07222023_swift_213100.jpg?d=2040x1479" className="img" />
//                   <div class="play">
//                     <span class="fa fa-play"></span>
//                   </div>
//                   <h4>Peaceful Piano</h4>
//                   <p>Relax and indulge with beautiful piano pieces</p>
//                 </div>

//                 <div class="item ms-4">
//                   <img src="https://i.dawn.com/primary/2021/12/61c070dad6d05.png" className="img" />
//                   <div class="play">
//                     <span class="fa fa-play"></span>
//                   </div>
//                   <h4>Deep Focus</h4>
//                   <p>Keep calm and focus with ambient and pos...</p>
//                 </div>

//                 <div class="item ms-8">
//                   <img src="https://d2l4kn3pfhqw69.cloudfront.net/wp-content/uploads/2021/02/the-weeknd.jpg" className="img"  />
//                   <div class="play">
//                     <span class="fa fa-play"></span>
//                   </div>
//                   <h4>Instrumental Study</h4>
//                   <p>Focus with soft study music in the...</p>
//                 </div>

//                 <div class="item ms-12">
//                   <img src="https://media.allure.com/photos/6127ac0b238beb835812ce4c/4:3/w_2247,h_1685,c_limit/Ariana%20Grande%20Allure%20Cover%20No%20Coverlines.jpg" className="img"  />
//                   <div class="play">
//                     <span class="fa fa-play"></span>
//                   </div>
//                   <h4>chill lofi study beats</h4>
//                   <p>The perfect study beats, twenty four...</p>
//                 </div>

//                 <div class="item ms-16">
//                   <img src="https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTg2MTA4Njk5MDQxODY2ODgx/top-5-hottest-young-singers-today.jpg" className="img"  />
//                   <div class="play">
//                     <span class="fa fa-play"></span>
//                   </div>
//                   <h4>Coding Mode</h4>
//                   <p>Dedicated to all the programmers out there.</p>
//                 </div>

//                 <div class="item ms-20">
//                   <img src="https://qph.cf2.quoracdn.net/main-qimg-3a8af4f2128be7a52b86afc3ebf77c70-lq" className="img" />
//                   <div class="play">
//                     <span class="fa fa-play"></span>
//                   </div>
//                   <h4>Focus Flow</h4>
//                   <p>Uptempo instrumental hip hop beats.</p>
//                 </div>

//                 <div class="item ms-24">
//                   <img src="https://static.javatpoint.com/top10-technologies/images/top-10-english-singers8.jpg" className="img" />
//                   <div class="play">
//                     <span class="fa fa-play"></span>
//                   </div>
//                   <h4>Calm Before The Storm</h4>
//                   <p>Calm before the storm music.</p>
//                 </div>

                
//               </div>
//             </div>
// </div> */} 
// {/* COMMENST ith vare */}

// <div className="grid grid-cols-1 ms-80 ">
//             <div class="spotify-playlists">
//               <h2 className="font-12 mt-4">Spotify Playlist</h2>
//               <div class="list">

//               <div className="item"> 
//                <Link to="/scroll">
//       <img src="https://media.allure.com/photos/6127ac0b238beb835812ce4c/4:3/w_2247,h_1685,c_limit/Ariana%20Grande%20Allure%20Cover%20No%20Coverlines.jpg" className="img"  />
//         <div className="play">
//           <i className="bi bi-play-fill fa fa-play"></i>
//         </div>
//         <h4>Mood Booster</h4>
//         <p>Get ready to boost your mood!</p> </Link>
//       </div>

//                 <div class="item">
//                 <Link to="/scroll2">
//                 <img src="https://i.dawn.com/primary/2021/12/61c070dad6d05.png" className="img" />
//                   <div class="play">
//                   <i class="bi bi-play-fill fa fa-play"></i>
//                   </div>
//                   <h4>Feelin' Good</h4>
//                   <p>Feel good with this positively timeless...</p>
//                   </Link>
//                 </div>

//                 <div class="item">
//                 <Link to="/scroll3">
//                 <img src="https://d2l4kn3pfhqw69.cloudfront.net/wp-content/uploads/2021/02/the-weeknd.jpg" className="img"  />
//                   <div class="play">
//                   <i class="bi bi-play-fill fa fa-play"></i>
//                   </div>
//                   <h4>Dark & Stormy</h4>
//                   <p>Beautifully dark, dramatic tracks.</p>  </Link>
//                 </div>
     
//                 <div class="item">
//                 <Link to="/scroll4">
//               <img src="https://images.seattletimes.com/wp-content/uploads/2023/07/07222023_swift_213100.jpg?d=2040x1479" className="img" />
//                 <div class="play" >
//                   <i class="bi bi-play-fill fa fa-play" ></i>
                
//                 </div>
//                 <h4>Mood Booster</h4>
//                 <p>Get happy with today's dose of feel-good...</p>
//                 </Link>
//               </div>
   
//                 <div class="item">
//                 <Link to="/scroll5">
//                 <img src="https://static.javatpoint.com/top10-technologies/images/top-10-english-singers8.jpg" className="img"  />
//                   <div class="play">
//                   <i class="bi bi-play-fill fa fa-play"></i>
//                   </div>
//                   <h4>Feelin' Good</h4>
//                   <p>Feel good with this positively timeless...</p></Link>
//                 </div>
//                 <div class="item">
//                 <Link to="/scroll6">
//                 <img src="https://qph.cf2.quoracdn.net/main-qimg-3a8af4f2128be7a52b86afc3ebf77c70-lq" className="img" />
//                   <div class="play">
//                   <i class="bi bi-play-fill fa fa-play"></i>
//                   </div>
//                   <h4>Feelin' Myself</h4>
//                   <p>The hip-hop playlist that's a whole mood...</p></Link>
//                 </div>



// {/* COMMENST ith thotte */}


//                 {/* <div class="item">
//                 <img src="https://static.javatpoint.com/top10-technologies/images/top-10-english-singers8.jpg" className="img" />
//                   <div class="play">
//                     <span class="fa fa-play"></span>
//                   </div>
//                   <h4>Chill Tracks</h4>
//                   <p>Softer kinda dance</p>
//                 </div> */}


// {/* COMMENST ith vare */}
                
//               </div>
//             </div>
//           </div>

// {/* COMMENST ith thotte */}

// {/* <div className="grid grid-cols-1 ms-80 ">
//             <div class="spotify-playlists">
//               <h2>Mood</h2>
//               <div class="list">
//                 <div class="item">
//                   <img src="https://img.mensxp.com/media/content/2020/Apr/Leading-B-Wood-Singers-Who-Lost-On-Reality-Shows1200_5ea7d3e1ba5f2.jpeg" className="img"  />
//                   <div class="play">
//                     <span class="fa fa-play"></span>
//                   </div>
//                   <h4>Mood Booster</h4>
//                   <p>Get happy with today's dose of feel-good...</p>
//                 </div>

//                 <div class="item">
//                   <img src="https://d18hry5vavz86j.cloudfront.net/BlogImages/dedbdba9-412a-4d4f-92a9-d36b529b7948.jpg" className="img"  />
//                   <div class="play">
//                     <span class="fa fa-play"></span>
//                   </div>
//                   <h4>Feelin' Good</h4>
//                   <p>Feel good with this positively timeless...</p>
//                 </div>

//                 <div class="item">
//                   <img src="https://theindianeye.com/wp-content/uploads/2022/10/Shreya-1.jpg" className="img"  />
//                   <div class="play">
//                     <span class="fa fa-play"></span>
//                   </div>
//                   <h4>Dark & Stormy</h4>
//                   <p>Beautifully dark, dramatic tracks.</p>
//                 </div>

//                 <div class="item">
//                   <img src="https://hi.letsdiskuss.com/assets/upl_files/bdeb8e0ead.jpg" className="img"  />
//                   <div class="play">
//                     <span class="fa fa-play"></span>
//                   </div>
//                   <h4>Feel Good Piano</h4>
//                   <p>Happy vibes for an upbeat morning.</p>
//                 </div>
//                 <div class="item">
//                   <img src="https://www.superprof.co.in/blog/wp-content/uploads/2023/03/image2-4.png"  className="img" />
//                   <div class="play">
//                     <span class="fa fa-play"></span>
//                   </div>
//                   <h4>Feelin' Good</h4>
//                   <p>Feel good with this positively timeless...</p>
//                 </div>
//                 <div class="item">
//                   <img src="https://fancyodds.com/wp-content/uploads/2021/08/Nicki-Minaj.jpg" className="img" />
//                   <div class="play">
//                     <span class="fa fa-play"></span>
//                   </div>
//                   <h4>Feelin' Myself</h4>
//                   <p>The hip-hop playlist that's a whole mood...</p>
//                 </div>

//                 <div class="item">
//                   <img src="https://images.indulgexpress.com/uploads/user/imagelibrary/2023/6/29/original/InFrameKSChithra.jpg" className="img"  />
//                   <div class="play">
//                     <span class="fa fa-play"></span>
//                   </div>
//                   <h4>Chill Tracks</h4>
//                   <p>Softer kinda dance</p>
//                 </div>

                
//               </div>
//             </div>
//           </div> */} {/* COMMENST ethe avre */}


//         </div>

//         <div className="row">
//           <div className="grid grid-cols-5  ms-80 mt-28">
//             <div className="">
// <h4 className="text-white font-2">Company</h4>
// <h5 className="text-slate-400 font-2 mt-7">About</h5>
// <h5 className="text-slate-400 font-2 mt-3">Jobs</h5>
// <h5 className="text-slate-400 font-2 mt-3">For the Record</h5>

//             </div>

//             <div>
//             <h4 className="text-white font-2">Communities</h4>
// <h5 className="text-slate-400 font-2 mt-7">For Artists</h5>
// <h5 className="text-slate-400 font-2 mt-3">Developers</h5>
// <h5 className="text-slate-400 font-2 mt-3">Advertising</h5>
// <h5 className="text-slate-400 font-2 mt-3">Investors</h5>
// <h5 className="text-slate-400 font-2 mt-3">Vendors</h5>
//               </div>

//               <div>
//               <h4 className="text-white font-2">Useful links</h4>
// <h5 className="text-slate-400 font-2 mt-7">Support</h5>
// <h5 className="text-slate-400 font-2 mt-3">Free Mobile App</h5>

//               </div>

//               <div>
        
//               </div>

//               <div className="flex">
//                 <a href="https://www.instagram.com/spotify"><div className="circle-icon">
//     <i className="bi bi-instagram text-white"></i>
//   </div></a>
  
 
//   <a href=" https://twitter.com/spotify">
//   <div className="circle-icon">
//     <i className="bi bi-twitter text-white"></i>
//   </div></a>
//   <a href="https://www.facebook.com/Spotify"><div className="circle-icon">
//     <i className="bi bi-facebook text-white"></i>
//   </div></a>
  
// </div>





//           </div>
//         </div>
//          <div className="mt-8 ms-80 underline"></div>
//       </div>

//       <div className="conatiner-fluid bg-black  ">
// <div className="row">
// <div className="grid grid-cols-1 ms-80">
//   <h5 className="text-slate-400 font-2 mt-5 mb-10">© 2024 Spotify AB</h5>
// </div>
// </div>
//       </div>
      

     
//     </>
//   );
// }

// export default Home;
