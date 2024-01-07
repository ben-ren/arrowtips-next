import React, {useState} from 'react';
import Datacall from "./api/Datacall";
import Navbar from './components/navbar';

export default function About(){
    return (
        <div>
            <p><Datacall range='Sheet1!B1'/></p>
            <Navbar/>
            <div>
                <p><Datacall range='Sheet1!B2'/></p>
            </div>
        </div>
    )
}