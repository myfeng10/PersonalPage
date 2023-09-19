import React from 'react';
import {ClickCount,TaskManager} from './Component/Usestate';
function Record(){
    return(
        <div class="browser">
            <ClickCount />
            <TaskManager />
        </div>
    );
}
export default Record;