import React, {useState, useEffect, useCallback} from 'react';
import Datacall from "./api/Datacall";
import Navbar from './components/navbar';

export default function Games(){
    const dataArray = Datacall({range: "Sheet1!D:D"});
    var dataEntries:string[] = (dataArray as string[][]).flatMap(innerArray => innerArray);
    console.log(dataEntries, dataEntries.length);

    return (
    <div>
        <h1>{dataEntries[0]}</h1>
        <Navbar/>
        <div>
            <a href={dataEntries[1]}>
                {dataEntries[1]}
            </a>
            <p></p>
            <a href={dataEntries[2]}>
                {dataEntries[2]}
            </a>
        </div>
        
    </div>)
}