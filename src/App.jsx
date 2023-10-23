import './App.css'
import Home from './components/Home';
import Books from './components/Books';
import Nasa from './components/Nasa';
import CounterButton from './components/CounterButton';
import People from './components/People';
import NotFound from './components/NotFound';
import { 
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
 
  

  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>{' | '}
          <Link to="/books">Books</Link>{' | '}
          <Link to="/counter">Counter</Link>{' | '}
          <Link to="/people">People</Link>{' | '}
          <Link to="/nasa">Nasa</Link>
        </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/counter" element={<CounterButton />} />
            <Route path="/people" element={<People />} />
            <Route path="/nasa" element={<Nasa />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </>
  )
}

export default App
