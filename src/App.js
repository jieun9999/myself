/*eslint-disable*/
import './App.css';
import { useState } from 'react';


function App() {

  //4가지 state를 선언
  let [글제목,글제목변경] = useState(["“요즘 MZ세대 가장 돈 안쓴다”…경기 수축기 30% 소비 줄여",'금리: 미 연준의 기준금리 인상이 나와 상관있는 5가지 이유','비트코인 “고점 다시 간다” 장밋빛 전망까지... “크립토 스프링은 시기상조” 신중론도']);
  let [하트,하트변경] = useState([0,0,0]);
  let [modal,setModal] = useState(false);
  let [title,setTitle] = useState(0);
  
  return (
    <div className="App">
      <div className ="blue-nav">
        <h4>요즘경제</h4>
      </div>
   
    <button onClick={()=>{
      let align = [...글제목].sort();
      글제목변경(align)}}>가나다순 정렬</button>

    <button onClick={()=>{
      let translation = [...글제목];
      translation[0]='"MZ generation spends the least money these days"...Reduce consumption by 30% during the economic contraction period"'
      translation[1]="Rate: 5 Reasons Why the U.S. Fed's Base Rate Hike Is Correlated to Me"
      translation[2]=`Bitcoin "Going to the High Point Again" Even a rosy outlook... "Crypto Spring Is Early" Prudence`
      글제목변경(translation)
    }}>영어로</button>

    {
      글제목.map(function(a,i){
      return (
        <div className='list' key={i}>
          {/*각 글제목 클릭시 모달창이 나오도록*/}
          <h4 onClick={()=>{setModal(true); setTitle(i)} }>{글제목[i]}</h4>
          {/*하트클릭시 +1이 될수있도록*/}
          <span onClick={()=>{
            let heartCopy =[...하트]; //[0,0,0]
            heartCopy[i] = heartCopy[i] +1
            하트변경(heartCopy)}}>💟</span>{하트[i]}
          <p>2월 17일 발행</p>
        </div>
      )
      })
    }
    {
      //modal이 true면 <Modal/>로, false면 null
     modal === true ? <Modal title ={title} 글제목 ={글제목} 글제목변경={글제목변경}/> : null
    }
    </div>
  );
}
//0번 글을 누르면 0번 글제목이 모달창안에 등장하고
//1번 글을 누르면 1번 글제목이 모달창안에 등장하고
//2번 글을 누르면 1번 글제목이 모달창안에 등장하고

function Modal(props){
return(
  <div className='modal'>
    <h4>{props.글제목[props.title]}</h4> 
    <p>날짜</p>
    <p>상세내용</p>
  </div>
)
}

export default App;

// state 중 글제목과 title의 차이점이 뭘까요?
// </span> 뒤에 {heartCopy[i]}가 아닌 {하트[i]} 써야하는 이유?
//=> 클릭 전에도 초기값이 떠줘야 하기 때문에