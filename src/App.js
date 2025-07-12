
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap.min.css';
// import './style.css';


import Navbar1 from './components/Navbar1';
import Service from './components/Service';
import Aboutus from './components/Aboutus';
import Footer from './components/Footer';

function App() {
  return (
   <>

{/* <Navbar tittle="Home" /> */}
<Navbar1 tittle="Home" />
<Service/>
<Aboutus/>
<Footer/>

   </>
  ); 
    
}

export default App;
