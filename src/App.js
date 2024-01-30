import React, { useState } from "react"

// Convert the class below to a functional component that uses the useState hook to initalize a count vartiable to 0 and display the count on the screen.
// Don't worry about the part where the button changes the count quite yet, that's what you're here to learn about!

function App() {
  const [count, setCount] = useState(0)
  // const [answer, setAnswer] = useState("Yes")

  function Increment() {
    setCount(count => count + 1)
  }

  function Decrement() {
    setCount(count => count - 1)
  }

  function Double() {

    setCount(count => count * 2)
  }

  function Triple() {
    setCount(count => count * 3)
  }
  function Log() {
    if (count > 0) {
      setCount(count => Math.log(count))
    }

    else {
      alert('Number has to be greater than 0)')
    }
  }
  function Sine() {

    setCount(count => Math.sin(count))
  }

  function SquareRoot() {
    if (count >= 0) {
      setCount(count => Math.sqrt(count))
    }

    else {
      alert('Cannot be a negative number)')
    }
  }
  function Reset() {
    setCount(count => 0)
  }

  return (
    <div>


      <h1>Math Operations</h1>
      {/* <input type="number" value={count} />*/}
      <h1>{count}</h1><br></br>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Double}>Double</button>
      <button onClick={Triple}>Triple</button>
      <button onClick={Log}>Find the Log </button>
      <button onClick={Sine}>Find the sine value</button>
      <button onClick={SquareRoot}>Find the square root </button>
      <button onClick={Reset}>Reset to zero </button>
    </div>
  )
}

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             count: 0,
//             answer: "Yes"
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button>Change!</button>
//             </div>
//         )
//     }
// }

export default App
