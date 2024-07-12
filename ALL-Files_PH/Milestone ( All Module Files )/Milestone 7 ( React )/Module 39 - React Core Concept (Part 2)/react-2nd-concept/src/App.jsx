import "./App.css";

import Users from "./Users";
import Counter from "./counter";
import Team from "./team";
import Friends from "./Friends";
import Home from "./Home";

function App() {
  function handleClick() {
    alert("button clicked");
  }

  const handleClick2 = () => {
    alert("button 2 click");
  };

  const addToFive = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h1>React Core Concepts</h1>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>
      <Home></Home>
      <button onClick={handleClick}>Click ME</button>
      <button onClick={handleClick2}>Click Me 222</button>

      <button
        onClick={() => {
          alert("click 3333");
        }}
      >
        Click 333
      </button>
      <button onClick={() => addToFive(3)}>444</button>
    </>
  );
}

export default App;
