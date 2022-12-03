import React, { useState } from 'react';
import QrReader from 'react-qr-scanner'

const previewStyle = {
  height: 240,
  width: 320,
}

const delay = 1000;

function QRScanIndex() {

  const [data, setData] = useState('No result');
  const [err,setErr] = useState("err")

  function handleScan(data){
    console.log(data)
    if(data){
     setData(data.text)
    }
  }
  function handleError(err){
    console.error(err)
    setData(err)
  }

  return (
    <>
    <QrReader
          delay={delay}
          style={previewStyle}
          onError={(e)=>handleError(e)}
          onScan={(e)=>handleScan(e)}
          legacyMode = {true}
          facingMode = {"rear"}
          />
     <p>{data}</p>
  </>
  )
}

export default QRScanIndex