import { Route, Routes} from 'react-router-dom'
import HomePage from '../src/Pages/HomePage'
import AboutPage from '../src/Pages/AboutPage'
import ResumePage from '../src/Pages/ResumePage'
import DegreePage from '../src/Pages/DegreePage'

function App() {
  return (
    <div>
         <Routes>
         <Route path="/" element={<HomePage/>} />
         <Route path="/about" element={<AboutPage/>} />
         <Route path="/education" element={<DegreePage/>} />
         <Route path="/resume" element={<ResumePage/>} />
       </Routes>
    </div>
  );
}

export default App;