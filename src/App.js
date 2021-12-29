import './App.css';
import Navbar from './Components/Navbar'
import News from './Components/News';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
   <>
     {/* <Navbar/> */}



     <div className="container">
    { <Routes>
       
     
       {<Route  path="/" element={<Navbar key="general"  backgroundColor="primary" />}/> }
       {<Route  path="/business" element={<Navbar key="business" backgroundColor="secondary" />}/> }
       {<Route  path="/entertainment" element={<Navbar key="entertainment"  backgroundColor="success" />}/> }
       {<Route  path="/general" element={<Navbar key="general"  backgroundColor="dark" />}/> }
       {<Route  path="/health" element={<Navbar key="health"  backgroundColor="primary" />}/> }
       {<Route  path="/science" element={<Navbar key="science"  backgroundColor="danger" />}/> }
       {<Route  path="/sports" element={<Navbar key="sports"  backgroundColor="info" />}/> }
       {<Route  path="/technology" element={<Navbar key="technology"  backgroundColor="warning" />}/> }
      
     
     </Routes> }
     </div>



    
     
   
    <div className="container">
    { <Routes>
       
     
       {<Route exact  path="/" element={<News key="general" pageSize={6} country="in" category="general" backgroundColor="primary" />}/> }
       {<Route exact  path="/business" element={<News key="business" pageSize={6} country="in" category="business" backgroundColor="secondary" />}/> }
       {<Route exact  path="/entertainment" element={<News key="entertainment" pageSize={6} country="in" category="entertainment" backgroundColor="success" />}/> }
       {<Route exact  path="/general" element={<News key="general" pageSize={6} country="in" category="general" backgroundColor="dark" />}/> }
       {<Route exact  path="/health" element={<News key="health" pageSize={6} country="in" category="health" backgroundColor="primary" />}/> }
       {<Route exact  path="/science" element={<News key="science" pageSize={6} country="in" category="science" backgroundColor="danger" />}/> }
       {<Route exact  path="/sports" element={<News key="sports" pageSize={6} country="in" category="sports" backgroundColor="info" />}/> }
       {<Route exact  path="/technology" element={<News key="technology" pageSize={6} country="in" category="technology" backgroundColor="warning" />}/> }
      
     
     </Routes> }
     </div>
     


  

  </>



  );
}

export default App;
