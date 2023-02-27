import './App.css'
import Home from './page/home/Home'
import About from './page/about/About'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './page/contact/Contact'
import { Routes, Route } from 'react-router-dom'
import ErrorPage from './page/error_page/ErrorPage';

// firebase
import { db } from './firebase'
import { uid } from 'uid'
import { set } from 'firebase/database'
import Admin from './page/admin/Admin';
import Layout from './page/Layout/Layout';
import Lists from './page/admin/components/Lists';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/g' element={<Home />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/About' element={<About />} />
        </Route>
        <Route path='/admin' element={<Admin />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App
