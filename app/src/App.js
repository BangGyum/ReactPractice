import Btn from "./Button.js";
import headerStyle from "./App.module.css"
import { useState } from "react";
import { useEffect } from "react"; //첫번째 인자 argument는 한번만 실해앟고 싶은 코드

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then(response => response.json())
    //.then(json => console.log(json)
    .then(json => {
      setCoins(json);
      setLoading(false);
    });
  },[]);
  return (  
    <div>
      <h1>The Coins!{coins.length} </h1>
      {loading ?
       <strong>Loading</strong>
        :
        <select>
        {coins.map((coin) => <option>{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}USD</option>)}
      </select>
        }


    </div>
  ); //
}

export default App;

/*
  react.js 는 변화가 일어날 때만 refresh/ 근데 전체 컴포넌트가 다시 refresh 되기 때문에 useEffect 로, 바뀔때만 실행되는 코드 작성 가능
  function useEffect(effect: EffectCallback, deps?: DependencyList): void
                        DependencyList는 reactjs가 지켜봐야 하는 리스트.


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
*/

/* cleanup function, useEffect 사용때, 해당 컴포넌트가 지워질 시에 return값을 줌으로써 사용. but 잘안씀


function Hello() {
  useEffect(() =>{
    console.log("created");
    return () => console.log("destroyed: :( "); //언제 파괴됐는지 확인가능, 파괴될때 function 사용가능
  },[]);
  return <h1>Hello</h1>;
}
function App() {
  const [showing, setShowing] = useState(false);
  const onClick =() =>{
    setShowing((prev) => !prev);
  }
  return (

    <div>
      {showing ? <Hello /> :null};
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}
*/

/*
 const [todo, setTodo]= useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();//메서드는 어떤 이벤트를 명시적으로 처리하지 않은 경우, 해당 이벤트에 대한 사용자 에이전트의 기본 동작을 실행하지 않도록 지정gksek.
    
    if (todo ===""){
      return;
    }
    console.log("onSubmit");
    
    setTodo("");
    setTodos(currentArray => [todo,...currentArray]);
    console.log(todos);
  }
  console.log(todos.map((item,index) => <li key={index}>{item}</li>));
  return (  

    <div>
      <h1>My To Dos {todos.length}</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={todo} type="text" placeholder="Write your to do.."/>
        <button>Add todo</button>
      </form>
      <hr/>
      <ul>
        {todos.map((item,index) => <li key={index}>{item}</li>)} 
      </ul>
    </div>
  ); //.map(()=>"?")은 리스트에 대해, 원소 수만큼 실행되고, 결과물들을 다시 재배치하는데 (전부 물음표로), 그럼 기존게 없어지잖아
    // .map((item)=>item.ToUpperCase()) 하면 그대로 return함
    // 이러면 key를 넣으라 하는데 react가 식별하는데 도움을 주기때문, 또 변경 추가 삭제할때 쉽,
    // map argu 보면 첫번재는 value (각각의 todo), 두번째는 index이다. 
*/

/*Fetch API는 HTTP 파이프라인을 구성하는 요청과 응답 등의 요소를 JavaScript에서 접근하고 조작할 수 있는 인터페이스를 제공합니다. 

*/