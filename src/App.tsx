

import './App.css'
import Form from './components/Form';
import Header from './components/Header';
import Hero from './components/Hero';

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
  <Form/>

  </div>
  );
    
}

export default App
