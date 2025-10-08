import axios from 'axios';
import {useEffect, useState} from "react";
import AppTile from "../components/AppTile.tsx";
const Apps = () => {
    const [data, setData] = useState([]);
    const getAppsData = async () => {
       const response=  await axios.get('https://68e66b1f21dd31f22cc58fcc.mockapi.io/connectors/app');
       setData(response.data);
    }
    useEffect(() => {
        getAppsData().catch(console.error);
    },[])

    return (
        <div className="m-2">
            <h1 className="font-bold text-3xl mb-5 display-flex flex-1 items-center justify-center text-center">
                Your Apps
            </h1>
            <div className="grid sm:grid-cols-5 sm:gap-4 grid-cols-2 gap-6">
                {data.map((item) => (
                    <div key={item?.id}>
                        <AppTile  item = {item} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Apps;