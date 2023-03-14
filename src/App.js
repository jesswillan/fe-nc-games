import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Reviews from './components/Reviews';
import SingleReview from './components/SingleReview'
import BackButton from './components/BackButton';

function App() {
  return <div className="App">
    <Header className='Header' />
    <BackButton/>
    <Routes>
      <Route path='/' element={<Reviews />}></Route>
      <Route path='/reviews/:review_id' element={<SingleReview />} />
    </Routes>
  </div>;
}

export default App;
