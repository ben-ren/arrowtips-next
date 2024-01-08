import React, {useState} from 'react';
import Datacall from "./api/Datacall";
import Navbar from './components/navbar';

export default function About(){
    const dataArray = Datacall({range: "Sheet1!B:B"});
    var dataEntries:string[] = (dataArray as string[][]).flatMap(innerArray => innerArray);
    console.log(dataEntries, dataEntries.length);

    return (
        <div>
            <h1>{dataEntries[0]}</h1>
            <Navbar/>
            <div>
                {dataEntries.slice(1).map((entry, index) => (
                //check entry isn't null or undefined before rendering
                entry != null ?
                    <p key={index+1}>{entry}</p>
                : null
                ))}
            </div>
        </div>
    )
}