//import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Header from './Header';
//import Display from './Display';
import Aboutus from './Aboutus';
//import Footer from './Footer';
import Services from './Services';
import Login from './Login';
import Signup from './Signup';
/* React Router imports: 
   - Router: wraps the entire app to enable routing
   - Routes: container for all route definitions
   - Route: defines individual page paths and their components
*/
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       {/* Router enables client-side navigation without page reloads */}
       <Router>
              <Routes>
                   {/* Main routes - all paths starting with /* show Header + content */}
                   <Route path='/*'  element={
                    <>
                      {/* Header appears on all main pages */}
                      <Header/>
                      {/* Nested Routes for main pages */}
                      <Routes>
                        {/* Home page - displays at / path */}
                        <Route path='/' element={<Home/>}/>
                        {/* About Us page - displays school info at /Aboutus */}
                        <Route path='/Aboutus' element={<Aboutus/>}/>
                        {/* Services page - displays services at /Services */}
                        <Route path='/Services' element={<Services/>}/>
                       {/* <Route path='/Footer' element={<Footer/>}/>*/}
                      </Routes>
                      {/*<Footer/>*/}
                    </>
                   }/>
                   {/* Authentication pages - no Header/Footer on these pages */}
                   {/* Login page - displays at /login */}
                   <Route path='/login' element={<Login/>}/>
                   {/* Signup page - displays at /Signup */}
                   <Route path='/Signup' element={<Signup/>}/>
                 {/* <Route path='/Dashboard' element={</>}/>*/}
              </Routes>
            </Router>
      
    {/* Old code - displaying all pages at once (now replaced by routing) */}
    {/* <section className='main'>
      <Header/>
      <Display/>
      <Aboutus/>
      <Services/>
      <Login/>
      <Signup/>
      <Footer/>
    
      </section> */} 
    </div>
  );
}

export default App;
