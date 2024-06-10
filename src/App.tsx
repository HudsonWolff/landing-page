

import './App.css'
import About from './components/About';
import Form from './components/Form';
import Header from './components/Header';
import Hero from './components/Hero';
import Tickets from './components/Tickets';

function App() {

  

  return (
  <div
   style= {{
display:'flex',
flexDirection: "column",
justifyContent:"center",
alignItems:"center",
width:"100vw",
gap:"2rem",
backgroundColor:" #00BBFfff"

  }}>


<Header/>
<Hero/>
<Tickets/>
  <Form/>
  <About/>

  </div>
  );
    
}

export default App
