import React, { useState } from 'react'
import Register from './register';
import  {Route,Routes,BrowserRouter} from 'react-router-dom'
import '../src/page.css'

function App() {
  const [language,setLanguage] = useState('english')
  return (
    <div>
    <div className='languageToggle'>
        <div className="switch">
            <button value="english" className={language=="english" ? 'englishClicked' : 'english'} onClick={(e)=>setLanguage(e.target.value)}>ENG</button>
            <button value="tamil" className={language=="tamil" ? 'tamilClicked' : 'tamil'} onClick={(e)=>setLanguage(e.target.value)}>தமிழ்</button>
        </div>
        </div>
    <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Register language={language}/>} />
    </Routes>  
    </BrowserRouter>
    </div>
  );
}

export default App;
