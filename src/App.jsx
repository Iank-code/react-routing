import Navbar from "./Navbar";
import "./App.css";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState()
  const [password, setPassword] = useState()

  // useEffect(() => {
  //   console.log("React started");
  // }, [number]);

  // function addNumber() {
  //   return setNumber(number + 1);
  // }
  function submitForm(event){
    event.preventDefault()
    alert(`Hello ${name} your password is ${password}`);
    // console.log(name);
  }

  return (
    <div>
      {/* <Navbar /> */}
      {/* <Link to="/about">About Page</Link> */}
      <NavLink to="/about">About Page</NavLink>
      <h1>Landing</h1>

      {/* <h1>{number}</h1>
      <button onClick={addNumber}>Add</button> */}

      <form onSubmit={submitForm}>
        <input type="text" placeholder="Enter your name" onChange={(event) => setName(event.target.value)}/>
        <input type="password" placeholder="Enter your password" onChange={(event)=>  setPassword(event.target.value)}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
