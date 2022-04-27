import React, { useEffect, useRef } from "react";

import "./App.css";
import Base from "./components/core/Base";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/UI/Navigation";
import Images from "./components/core/Images";
import { useNavigate,useLocation} from "react-router";
import Maps from "./components/core/Maps";
function useKey(key, cb) {
  const callbackRef = useRef(cb);
  useEffect(() => {
    callbackRef.current = cb;
  });
  useEffect(() => {
    function handle(event) {
      console.log(event)
      if (event.code === key) {
        callbackRef.current(event);
      }
    }
    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [key]);
}

function App() {
  const history = useNavigate();
  const location = useLocation();
  function handleArrowLeft() {
    if (location.pathname === "/images") {
      history("/");
      window.location.reload(false);
    } else if (location.pathname === "/") {
      console.log(location);
      history("/maps");
      window.location.reload(false);
    } else if (location.pathname === "/maps") {
      console.log(location);
      history("/images");
      window.location.reload(false);
    }
  }
  function handleArrowRight() {
    if (location.pathname === "/images") {
      history("/maps");
      window.location.reload(false);
    } else if (location.pathname === "/") {
      console.log(location);
      history("/images");
      window.location.reload(false);
    } else if (location.pathname === "/maps") {
      console.log(location);
      history("/");
      window.location.reload(false);
    }
  }
  useKey("ArrowLeft", handleArrowLeft);
  useKey("ArrowRight", handleArrowRight);
  
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Base />} />
        <Route path="/images" element={<Images />} />
        <Route path="/maps" element={<Maps />} />
      </Routes>
      <Navigation />

    </div>
  );
}

export default App;
