import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, incrementByAmount } from "./redux/counter"

const App = () => {
  const { count } = useSelector( state => state.counter )
  const dispatch = useDispatch()
  
  return (
    <div>
      <h1>Count:</h1>
      <span>{ count }</span>
      <div>
        <button onClick={ () => dispatch( increment() ) }>Increment</button>
        <button onClick={ () => dispatch( decrement() ) }>Decrement</button>
        <button onClick={ () => dispatch( incrementByAmount(44) ) }>Increment by 44</button>
      </div>
    </div>
  )
}

export default App
