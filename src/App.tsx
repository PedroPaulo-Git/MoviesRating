import './App.css';
import { Link,Outlet} from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  

  return (
  
      <div>
          <Nav/>
       <Link to={'/'}></Link>
       <Link to={'movie/:id'}></Link>

      <Outlet/>
      </div>
  
  )
}

export default App
