import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert'
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from 'react-router-dom'

function App() {
  const [switchMode, setSwitchMode] = useState('Enable Dark Mode')
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      setSwitchMode('Disable Dark Mode')
      document.body.style.backgroundColor = '#181936'
      showAlert("Dark Mode Enabled", "success")
      // setInterval(() => {
      //   document.title = "Get TextUtils"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install Now!"
      // }, 1500);
    } else {
      setMode('light')
      setSwitchMode('Enable Dark Mode')
      document.body.style.backgroundColor = 'white'
      showAlert("Dark Mode Disabled", "success")
    }
  }
  return (
    <>
      {/* <Router> */}
        {/* <Navbar title="TextUtils" about="About TextUtils" switchMode={switchMode} mode={mode} toggleMode={toggleMode} /> */}
        <Navbar title="TextUtils" switchMode={switchMode} mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          {/* <Routes> */}
            {/* <Route path="/" element={<TextForm heading="Enter The Text To Analyze" mode={mode} showAlert={showAlert} />} /> */}
            <TextForm heading="Enter The Text To Analyze" mode={mode} showAlert={showAlert} />
            {/* <Route path="/about" element={<About heading="About TextUtils" mode={mode} />} /> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
