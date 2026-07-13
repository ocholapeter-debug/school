import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Display from './Display';
import Aboutus from './Aboutus';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      
     <section className='main'>
      <Header/>
      <Display/>
      <Aboutus/>
      <Footer/>
      
      
      </section> 
    </div>
  );
}

export default App;
