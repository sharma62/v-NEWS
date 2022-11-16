import { useEffect, useState } from 'react';
import Greet from './components/Greet';
import Home from './components/Home';

function App() {
  const [showComponent, setComponent] = useState( <Greet /> );
  useEffect(()=>{
        setInterval(() => {
                setComponent(<Home/>);
        }, 5000);

  },[]);

  return (
    
    showComponent // landing page after greeting page
    
    

    
  );
}

export default App;
