import React from 'react';
import logo from './logo.svg';
import home_img from './img/home.png';
import share from './img/share.png';
import stopSharing from './img/stop_sharing.png'
import airplay from './img/airplay.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='section'>
        <h1>Home Screen</h1>
        <img src={home_img} alt="Home" />
        <p>This is the main screen the MTR will display while not in use. From here you can access many of the room's features.</p>
        <ol style={{ marginTop: 0 }}>
          <li>Scheduled Meetings join.</li>
          <li>Start a Meeting.</li>
          <li>Make a Call.</li>
          <li>Share content.</li>
          <li>More Options.</li>
        </ol>
      </div>
      <div className='section'>
        <h1>Sharing Content</h1>
        <div><img src={share} alt="Home" /></div>
        <div>Content can be shared in the room locally without a Teams meeting in progress by connecting devices to Apple TV.</div>
        <div>
          <ol>
            <li>Select the Share button to begin sharing from your laptop or IPad or Mobile via AirPlay or USB-C or HDMI cable.</li>
            <li>Click 'Share' option in MTR touch panel.</li>
            <li>When you are finished select Stop Sharing<br/><img src={stopSharing} alt="Home" /></li>            
          </ol>
        </div>
        <div>Apple Airplay Device Name is <strong>CEO Conference Room</strong></div>
      </div>
      <div className='section'>
        <h1>Sharing Content - Airplay</h1>
        <div><img src={airplay} alt="Home" /></div>
        <div>To Share content via AirPlay</div>
        <div>
          <ol>
            <li>Search for AirPlay device <strong>CEO Conference Room</strong>.</li>
            <li>Enter the authentication number displaying on the screen</li>
            <li>Enable screen mirroring on device</li>            
            <li>Enable Share on touch screen</li>
          </ol>
        </div>
        <div>Apple Airplay Device Name is <strong>CEO Conference Room</strong></div>
      </div>      
    </div>
  );
}

export default App;
