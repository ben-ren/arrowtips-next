import React, { useEffect, useState } from "react";

interface DatacallProps {
    range: string;
    //onData: (data: string) => void;
}

const Datacall: React.FC<DatacallProps> = ({ range }) => {
    const [sheetData, setSheetData] = useState<string[] | undefined>(undefined);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/data_pull?range=${encodeURIComponent(range)}`); //${encodeURIComponent(range)}
                //console.log('API Response:', response);

                //const data = await response.json();
                if(!response.ok){
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const reader = response.body?.getReader();

                if(!reader){
                    throw new Error('ReadableStream not available');
                }
                const result = await reader?.read();

                if(result.done || result.value === undefined){
                    throw new Error('no data recieved');
                }

                //Convert byte array to a string using TextDecoder
                const text = new TextDecoder().decode(result.value);

                const jsonData = JSON.parse(text);
                
                setSheetData(jsonData.data);
                //onData(jsonData.data[0]);
                
            } catch (error) {
                console.error("Error fetching data", error instanceof Error ? error.message : "Unknown error");
            }
        };

        fetchData();
    }, [range]);
    
    //return sheetData != null ? sheetData : []
    return sheetData || [];
}

export default Datacall;