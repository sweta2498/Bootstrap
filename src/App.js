
import './App.css';
// import React,{createRef} from 'react'
import React,{useRef, useState} from 'react';
// import Usersss from './Usersss';
// import { Table } from 'react-bootstrap';


function App()
{
  return(
    <div className='App'>
      <h2> HOC - High oder component </h2>
      <Couter />
      <HOCRed cmp={Couter}/>
      <HOCGreen cmp={Couter}/>
    </div>
  )
}

function HOCRed(props)
{
  return <h2 style={{backgroundColor:'red',width:100}}>Red<props.cmp /></h2>
}
function HOCGreen(props)
{
  return <h2 style={{backgroundColor:'green',width:100}}>Grren<props.cmp /></h2>
}

function Couter()
{
  const [count,setCount]=useState();
  return(
    <div>
      <h3>
        {count}
      </h3>
      <button>Update</button>
    </div>
  )
}
export default App;

// function App()
// {
//   let [val,setval]=useState("Sweta ");
//   return(
//     <div className='App'>
//       <h1>Controlled component</h1>
//       <input type="text" value={val}  onChange={(e)=>setval(e.target.value)}/>
//       <h2>Value {val}</h2>

//     </div>
//   )
// }

// export default App; 

// function App()
// {
//   let inputRef=useRef(null)
//   function handle()
//   {
//     inputRef.current.focus();
//     inputRef.current.style.color="peter"
//   }
//   return(
//     <div>
//       <h1>useRef in react</h1>
//       <input type="text" ref={inputRef}/>
//       <button omClick={handle}>Handle</button>
//     </div>
//   );
// }

// export default App;


// class App extends React.Component {
//   constructor()
//   {
//     super();
//     this.inputRef=createRef();
//   }
//   componentDidMount()
//   {
//     // console.warn(this.inputRef.current.value="1000")
//   }
//   getVal()
//   {
//     console.warn(this.inputRef.current.value)
//     this.inputRef.current.style.color="red"
//     this.inputRef.current.style.backgroundColor="black"

//   }
//   render() {
//     return (
//       <div className="App">
//         <h1>Ref in React </h1>
//         <input type="text" ref={this.inputRef}  />
//         <button onClick={()=>this.getVal()}>Check Ref</button>
//       </div>
//     );
//   }
// }

// export default App;

// class App extends React.Component
// {
//   constructor()
//   {
//     super();
//     this.state={
//       count:1
//     }
//   }
//   render()
//   {
//     return(
//       <div>
//         <Usersss count={this.state.count}/>
//         <h2>React : </h2>
//         <button onClick={()=>this.setState({count:this.state.count+1})}>
//           Update Count
//         </button>
//       </div>
//     )
//   }

// }

// export default App;


// function App() {

//   // const st=['abc','pqr','efg','xyz'];
//   const users = [
//    {
//       name: 'Anil', email: 'anil@test.com', address: [
//         { hm: '101', city: 'Noida', country: 'India' },
//         { hm: '10', city: 'Gurgaon', country: 'India' },
//         { hm: '23', city: 'Noida', country: 'India' },
//         { hm: '45', city: 'Delhi', country: 'India' },
//       ]
//     },
//     {
//       name: 'Burce', email: 'bruce@test.com', address: [
//         { hm: '101', city: 'Noida', country: 'India' },
//         { hm: '10', city: 'Gurgaon', country: 'India' },
//         { hm: '23', city: 'Noida', country: 'India' },
//         { hm: '45', city: 'Delhi', country: 'India' },
//       ]
//     },
//     {
//       name: 'Peter', email: 'peter@test.com', address: [
//         { hm: '101', city: 'Noida', country: 'India' },
//         { hm: '10', city: 'Gurgaon', country: 'India' },
//         { hm: '23', city: 'Noida', country: 'India' },
//         { hm: '45', city: 'Delhi', country: 'India' },
//       ]
//     },
//     {
//       name: 'Sam', email: 'sam@test.com', address: [
//         { hm: '101', city: 'Noida', country: 'India' },
//         { hm: '10', city: 'Gurgaon', country: 'India' },
//         { hm: '23', city: 'Noida', country: 'India' },
//         { hm: '45', city: 'Delhi', country: 'India' },
//       ]
//     },
//   ]
//   // st.map((data)=>{
//   //   console.log("name",data)
//   // })
//   return (
//     <div className="App">
//       <h1>Bootstrap table</h1>
//       <Table striped variant='console.warn();'>

//       <tbody>       
//       <tr>
//             <td> key</td>
//             <td>name</td>
//             <td>email</td>
//             <td>address</td>
//           </tr>
//       {
//         users.map((data,i)=>
          
//           <tr key={i}>
//             <td>{i}</td>
//             <td>{data.name}</td>
//             <td>{data.email}</td>
//             <td>
//             <Table variant="dark"  >
//         <tbody>
//               {
//                 data.address.map((item)=>

//                 <tr>
//                   <td>{item.hm}</td>
//                   <td>{item.city}</td>
//                   <td>{item.country}</td>
//                 </tr>
//                 )
//               }
//               </tbody>
//               </Table>
//             </td>
//           </tr>
//         )
//       }
//       </tbody> 
//       </Table>
//     </div>
//   );
// }

// export default App;




// function App() {

//   // const st=['abc','pqr','efg','xyz'];
//   const st=[
//     {name:"abc",email:"abcW@gmail.com",contact:8888},
//     {name:"abc",email:"abcW@gmail.com",contact:1111},
//     {name:"xyz",email:"xyzW@gmail.com",contact:5656},
//     {name:"xyz",email:"xyzW@gmail.com",contact:1111},
//     {name:"pqr",email:"pqrW@gmail.com",contact:2323},
//     {name:"pqr",email:"pqrW@gmail.com",contact:1111},
//   ];

//   // st.map((data)=>{
//   //   console.log("name",data)
//   // })
//   return (
//     <div className="App">
//       <h1>Bootstrap table</h1>
//       <Table striped variant='console.warn();'>

//       <tbody>       
//       <tr>
//             <td>lkey</td>
//             <td>name</td>
//             <td>email</td>
//             <td>contact</td>
//           </tr>
//       {
//         st.map((data,i)=>
//           data.contact ===1111?
//           <tr key={i}>
//             <td>{i}</td>
//             <td>{data.name}</td>
//             <td>{data.email}</td>
//             <td>{data.contact}</td>
//           </tr>:null 
//         )
//       }
//       </tbody> 
//       </Table>
//     </div>
//   );
// }

// export default App;
