import React from 'react';




function Welcome(props){
    return <h1> hello, {props.name}</h1>
}


function App(){
    return(
        <div>
         <Welcome name ="Cristian" />
         <Welcome name ="Paula" />
         <Welcome name ="Camilo" />
         </div>   

    );
}

export default App;