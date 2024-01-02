import Datacall from "./api/Datacall";

export default function About(){
    return (
        <div>
            <Datacall range='Sheet1!B1'/>
            <Datacall range='Sheet1!B2'/>
        </div>
    )
}