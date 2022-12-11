import Btn from "./Button.js";
import headerStyle from "./App.module.css"
import { useState } from "react";
import { useEffect } from "react"; //첫번째 인자 argument는 한번만 실해앟고 싶은 코드

function App() {
  const [counter,setValue]= useState(0);
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => setKeyword(event.target.value);
  const onClick=() => setValue((prev) => prev + 1);

  useEffect(() => {
    console.log("i run only one");
  }, []); 
  useEffect(() => {
    if (keyword !=="" && keyword.length > 2){
      console.log("search for", keyword);
    } //처음에 실행되는거 막으려고
  }, [keyword]); //keyword가 변화할 때 코드를 실행하는 것
  useEffect(() => {
    if ( counter !== 0){
      console.log("i run when 'counter' changes.");
    }
  }, [counter]); 
  useEffect(() => {
    if ( counter !== 0 || keyword !==""){
      console.log("i run when 'counter'&'keyword' changes.");
    }
  }, [counter,keyword]); 
  
  return (
    <div>
      <input onChange={onChange} value={keyword} type="text" placeholder="Search here..."/>
       <h2 className={headerStyle.title}>Welcome</h2>
       <h1>{counter}</h1>
       <button onClick={onClick}>up</button>
       <hr/>
       <Btn text="a"/>
    </div>
  );
}

export default App;

/*
  react.js 는 변화가 일어날 때만 refresh/ 근데 전체 컴포넌트가 다시 refresh 되기 때문에 useEffect 로, 바뀔때만 실행되는 코드 작성 가능
  function useEffect(effect: EffectCallback, deps?: DependencyList): void
                        DependencyList는 reactjs가 지켜봐야 하는 리스트.
*/