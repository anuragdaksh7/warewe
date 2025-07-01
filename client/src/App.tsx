import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const App = () => {

  useEffect(() => {
    if (localStorage.getItem("client_id") == null) {
      localStorage.setItem("client_id", uuidv4())
    }
  }, [])
  return (
    <div>App</div>
  )
}

export default App