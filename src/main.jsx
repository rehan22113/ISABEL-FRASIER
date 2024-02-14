import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import FollowPointer from './Components/FollowPointer.jsx'
import { emojiCursor } from 'cursor-effects'
// import JSCursor from './Components/JSCursor.jsx'
new emojiCursor({ element: document.querySelector("#emoji"),emoji: ["💗","💓","💝","💕","💘","💖","😊"]  })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div className='bg' id='emoji'>
  {/* <FollowPointer/> */}
  {/* <JSCursor/> */}
    <App />
  </div>
  </React.StrictMode>,
)
