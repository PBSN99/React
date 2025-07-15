import RestroCard from "./RestroCard";
import { useEffect, useState } from "react";
import {resList} from "../utils/mocdata"
const Body = () => {
  //local state variable - super powerful variable 
  //const [stateVariable, setStateVariable] = useState(initialValue);
  const [listOfRestaurants, setListOfRestaurants]= useState(resList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0843007&lng=80.2704622&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    ); 
    const json = await data.json();
    console.log(json);
    // setListOfRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  };

  return(
    <div className="body">
      <div className="filter">
        <button 
          className="filter-btn" 
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating >= 4.0
            );
           setListOfRestaurants(filteredList);
            }}
        >
          Top Rated Restaurants
              </button>
      </div>
      <div className="res-cointer">
        { listOfRestaurants.map((restaurant) => (
          <RestroCard key={restaurant.data.id} resData={restaurant}/>
          ))}  
      </div>
    </div>
  )
}
export default Body;