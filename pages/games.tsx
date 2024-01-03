import React, {useState, useEffect, useCallback} from 'react';
import Datacall from "./api/Datacall";

export default function Games(){
    const dataArray = Datacall({range: "Sheet1!D1:D3"});

    var dataEntries:string[] = (dataArray as string[][]).flatMap(innerArray => innerArray);
    console.log(dataEntries);

    return (
    <div>
        <h1><Datacall range='Sheet1!D1'/></h1>
        <a href={dataEntries[1]}>
            {dataEntries[1]}
        </a>
        <p></p>
        <a href={dataEntries[2]}>
            {dataEntries[2]}
        </a>
    </div>)
}