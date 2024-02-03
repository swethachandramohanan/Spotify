import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "./home.css";

function Side() {
  const navigate = useNavigate();

  return (
    <>
     
        <div className="sidebar bg-side">
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
                <Link to="#">
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
                  <Link to="#">
                    <button type="button" className="but">
                      <h4>Create Playlist</h4>
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="navigation bg-side2 ">
            <ul>
              <li>
                <Link to="#" className="logo"></Link>
                <Link to="#">
                  <h6 className="font-2 mt-3 me-10">Legal</h6>
                </Link>
                <Link to="#">
                  <h6 className="font-2 mt-3  me-10">Privacy Policy</h6>
                </Link>
                <Link to="#">
                  <h6 className="font-2 mt-3 me-10">Cookies</h6>
                </Link>
                <Link to="#">
                  <h6 className="font-2 mt-3 me-10">Accessibility</h6>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <button type="button" className="butt">
              <i className="bi bi-globe"></i> English
            </button>
          </div>
        </div>
     
    </>
  );
}

export default Side;
