import React, {useContext} from "react";

import { userContext } from "./componentA";
function ComponentD(){
    

    const user = useContext(userContext);
    return (
        <div className="box">
            <h1>ComponentD</h1>
            <h2>Hello {user}</h2>
        </div>
    );

}
export default ComponentD