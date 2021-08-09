import React from 'react';
function formatName(user){

    return user.firstName + ' ' + user.lastName;
       
}

const user = {
    firstName: 'Cristian',
    lastName: 'Suarez penia' 
};

function element () {
 return (   <h1>
        Hello, {formatName(user)}!
    </h1>
 )
};

export default element;
