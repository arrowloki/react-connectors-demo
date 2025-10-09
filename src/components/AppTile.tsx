import type {AppData} from "../types/types.ts";

const AppTile = ({item} : {item : AppData}) => {
  return (
    <div className="flex flex-col items-center justify-center border border-gray-200 p-2">
        <img className="rounded-full" src={item?.icon} alt={item.name} style={{width: '80px'}} />
        <span title={item.name}>{(item?.name.length > 9) ? item?.name?.slice(0,8) : item.name}</span>
    </div>
  )
}

export default AppTile;