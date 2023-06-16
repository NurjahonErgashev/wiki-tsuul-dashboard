import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Media from "./pages/Media";
import MediaCategory from "./pages/MediaCategory";
import Pharse from "./pages/Phrase";
import SinglePharse from "./pages/SinglePharse";
import Words from "./pages/Words";
import Login from "./pages/Login";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />

      <Routes>
        {/* <ProtectedRoute> */}
          <Route path="/" element={<Media />} />
        {/* </ProtectedRoute> */}
        <Route path="/media-category" element={<MediaCategory />}></Route>
        <Route path="/pharse" element={<Pharse />}></Route>
        <Route path="/pharse/:id" element={<SinglePharse />}></Route>
        <Route path="/words" element={<Words />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App