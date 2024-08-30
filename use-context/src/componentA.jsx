import React,{ useState } from 'react';
import ComponentB from './componentB.jsx'
import { createContext } from 'react';

export const userContext = createContext();

function ComponentA(){
    const [user, setUser] = useState("BroCode")

    return (
        <div className="box">
            <h1>ComponentA</h1>
            <h2>hello {user}</h2>
            <userContext.Provider value ={user}>
                <ComponentB></ComponentB>
            </userContext.Provider>
        </div>
    );

}
export default ComponentA