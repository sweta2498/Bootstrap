import React from "react";


function User(props)
{
    const data="abcd";
    return(
        <div>
            <h1> </h1>
            <button onClick={()=>props.alert(data)}>Click me</button>
        </div>
    )
}

export default User;


///////parent to data fetch
// function User(props)
// {
//     return(
//         <div>
//             <h1>{props.name }</h1>
//             <button>Click me</button>
//         </div>
//     )
// }

// export default User;