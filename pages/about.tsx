import React, {useState} from 'react';
import Datacall from "./api/Datacall";

export default function About(){
    return (
        <div>
            <p><Datacall range='Sheet1!B1'/></p>
            <p><Datacall range='Sheet1!B2'/></p>
        </div>
    )
}