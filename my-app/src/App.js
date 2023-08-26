import Layout from './components/Layout/index.js';
import './App.scss';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home/index.js';
import About from './components/About/index.js';
import Contact from './components/Contact/index.js';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element = {<Layout/>}>
        <Route index element={<Home/>}></Route>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
