import Layout from './components/Layout/index.js';
import './App.scss';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element = {<Layout/>}></Route>
    </Routes>
    </>
  );
}

export default App;
