import React, {useState} from 'react';
import Datacall from "./api/Datacall";
import Navbar from './components/navbar';

export default function Posts(){
    return (
        <div>
            <p><Datacall range='Sheet1!C1'/></p>
            <Navbar/>
            <div>
                <p><Datacall range='Sheet1!C2'/></p>
            </div>
        </div>
    )
}