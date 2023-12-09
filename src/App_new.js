import './App.css';
import React from 'react';

import User from './User.js';

function App_new()
{
    function parentAlert(data)
    {
        alert(" helloooooo....!!!!"+data)
    }
    
    return(
        <div>
            <h1>Lifting state up</h1>
            <User alert={parentAlert}/>
        </div>
    );
}

export default App_new;


/// parent to child data pass
// function App_new()
// {
//     let data="Parent to child";
//     return(
//         <div>
//             <h1>Lifting state up</h1>
//             <User name={data} />
//         </div>
//     );
// }
