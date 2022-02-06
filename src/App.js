import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((current) => current+1);
  //console.log("I run all the time.");
  useEffect(() => console.log("I run only once."), []);

  const onChange = (event) => setKeyword(event.target.value);
  
  useEffect(() => { // keyword가 바뀔 때만 검색하고 싶어. 지금은 버튼 누를 때도 검색이 됨
    console.log("I run when 'keyword' changes.");
  }, [keyword]); // keyword가 변화할 때 코드를 실행할거라고 react.js에게 알려주는 거야

  useEffect(() => console.log("I run when 'counter' changes."), [counter]);

  return (
    <div>
      <input onChange={onChange} type="text" placeholder="Search here...." />
      <h1>{counter}!</h1>
      <button onClick={onClick}>click me 🤍</button>
    </div>
  );
}

export default App;
