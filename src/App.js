import Button from "./Components/Button";
import Counter from "./Components/Counter";
import CounterHolder, { CounterContext } from "./Context/CounterHolder";
import { useContext } from "react";

function App() {
  const {count} = useContext(CounterContext)
  return (
    //<CounterHolder>
    <div className='flex items-center justify-center w-full h-screen'>
      <Counter/>
      <div>
        RS {count *500}
      </div>
      
    </div>
    //</CounterHolder>
  );
}

export default App;
