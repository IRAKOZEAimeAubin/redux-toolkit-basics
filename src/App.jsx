import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, incrementByAmount } from "./redux/counter"

const App = () => {
  const { count } = useSelector( state => state.counter )
  const dispatch = useDispatch()
  
  return (
    <div className="flex flex-col items-center mt-4 gap-3">
      <div className="flex items-center justify-center text-xl gap-1 font-bold rounded-sm">
        <h1 className="tracking-wider">Count:</h1>
        <span className="bg-orange-200 py-1 px-2 rounded-sm">{ count }</span>
      </div>
      <div className="flex items-center justify-center gap-4">
        <button onClick={ () => dispatch( increment() ) } className="bg-green-300 p-2 rounded-md font-semibold">Increment</button>
        <button onClick={ () => dispatch( decrement() ) } className="bg-red-300 p-2 rounded-md font-semibold">Decrement</button>
        <button onClick={ () => dispatch( incrementByAmount(44) ) } className="bg-blue-300 p-2 rounded-md font-semibold">Increment by 44</button>
      </div>
    </div>
  )
}

export default App
