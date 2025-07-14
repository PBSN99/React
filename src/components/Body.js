import RestroCard from "./RestroCard";
import { useState } from "react";
import {restaurantList} from "../utils/mocdata"
const Body = () => {

  const [listOfRestaurants, setListOfRestaurants]= useState(restaurantList);

  return(
    <div className="body">
      <div className="filter">
        <button 
          className="filter-btn" 
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating >= 4
            );
           setListOfRestaurants(filteredList);
            }}
        >
          Top Rated Restaurants
              </button>
      </div>
      <div className="res-cointer">
        { listOfRestaurants.map((restaurantList) => (
          <RestroCard key={restaurantList.data.id} resData={restaurantList}/>
          ))}  
      </div>
    </div>
  )
}
export default Body;
