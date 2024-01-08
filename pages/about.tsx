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
                <p>{dataEntries[1]}</p>
            </div>
        </div>
    )
}