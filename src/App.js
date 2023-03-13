import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Reviews from './components/Reviews';

function App() {
  return <div className="App">
    <Header className='Header' />
    <Routes>
      <Route path='/' element={<Reviews />}></Route>
    </Routes>
  </div>;
}

export default App;
