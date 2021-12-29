import './App.css';
import Navbar from './Components/Navbar'
import News from './Components/News';

function App() {
  return (
   <div>
     <Navbar/>
     <News pageSize={6} country="in" category="sports"/>
   </div>
  );
}

export default App;
