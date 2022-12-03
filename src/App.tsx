import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import HomeIndex from "./Screens/HomeScreen/Index";
import QRScanIndex from "./Screens/QRScanScreen/Index";
import styled from "styled-components"

const SApp = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`

function App() {
  return (
    <SApp>
       <Router>
           <Routes>
              <Route path="/" element={<HomeIndex/>}/>
              <Route path="/qrScan" element={<QRScanIndex/>}/>
           </Routes>
       </Router>
    </SApp>
  );
}

export default App;
