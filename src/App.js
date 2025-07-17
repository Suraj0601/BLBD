
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap.min.css';
// import './style.css';


import Navbar from './components/Navbar';
import Service from './components/Service';
import Aboutus from './components/Aboutus';
import Footer from './components/Footer';

 
function App() {
  return (
   <>

{/* <Navbar tittle="Home" /> */}
<Navbar tittle="Home" />
<Service/>
<Aboutus/>
<Footer/>

   </>
  ); 
    
}

export default App;
