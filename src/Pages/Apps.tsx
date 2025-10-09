import axios from 'axios';
import {useEffect, useState} from "react";
import AppTile from "../components/AppTile.tsx";
import type {AppData} from "../types/types.ts";

const Apps = () => {
    const [data, setData] = useState<AppData[]>([]);
    const [error, setError] = useState<string | null>(null);
    const getAppsData = async () => {
       try {
           const response = await axios.get('https://68e66b1f21dd31f22cc58fcc.mockapi.io/connectors/app');
           setData(response.data);
           setError(null);
       }
       catch (e) {
           setError('Failed to retrieve data');
           console.log('Failed fetch apps : ', e);
       }
    }
    useEffect(() => {
        getAppsData().catch(console.error);
    },[])

    return (
        <div className="m-2">
            <h1 className="font-bold text-3xl mb-5 display-flex flex-1 items-center justify-center text-center">
                Your Apps
            </h1>
            {error && (<div className="flex items-center text-red-500 justify-center text-center bg-black p-4">
                <span>{error}</span>
            </div>)}
            <div className="grid sm:grid-cols-5 sm:gap-4 grid-cols-2 gap-6">
                {data.map((item : AppData, index : number) => (
                    <div key={item?.id ?? `item-${index}`}>
                        <AppTile  item = {item} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Apps;