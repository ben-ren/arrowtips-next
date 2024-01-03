import React, {useState} from 'react';
import Datacall from "./api/Datacall";

export default function Posts(){
    return (
        <div>
            <p><Datacall range='Sheet1!C1'/></p>
            <p><Datacall range='Sheet1!C2'/></p>
        </div>
    )
}