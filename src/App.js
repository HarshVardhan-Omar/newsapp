import './App.css';
import Navbar from './Components/Navbar'
import News from './Components/News';

function App() {
  return (
   <div>
     <Navbar/>
     <News pageSize={6}/>
   </div>
  );
}

export default App;
