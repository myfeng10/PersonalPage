import React, { useState } from 'react';

function ClickCount(){
    // declare a variable named count and initialize it to 0
    const [count,setCount] = useState(0);
    
    return(
        <div class="browser">
            <div class="content">
            <p>You've clicked {count} Times</p>
            <button onClick={()=> setCount(count+1)}>Click Me</button>
            </div>
        </div>
    );
}
export default ClickCount;