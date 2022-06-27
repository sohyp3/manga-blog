import './App.css';

import SearchView from './components/searchView';
import HomeView from './components/homeView';
import NavBar from './components/navbar';

import { BrowserRouter as Router , Route, Routes} from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

          <Routes>
            <Route path='/' element={<HomeView />} />

            <Route path='/search' element={<SearchView />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
