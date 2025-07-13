import RestroCard from "./RestroCard";
import { useState } from "react";
import resList from "../utils/mocdata";
const Body = () => {
  return(
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {console.log("Button Pressed")}}>Top Rated Restaurants</button>
      </div>
      <div className="res-cointer">
          <RestroCard name="Balu Biriyani" cuisines="Indian, American, Italian" rating="4.5 Stars" delivery_time="38min"/>
          <RestroCard name="Balu Biriyani" cuisines="Indian, American, Italian" rating="4.5 Stars" delivery_time="38min"/>
          <RestroCard name="Balu Biriyani" cuisines="Indian, American, Italian" rating="4.5 Stars" delivery_time="38min"/>
          <RestroCard name="Balu Biriyani" cuisines="Indian, American, Italian" rating="4.5 Stars" delivery_time="38min"/>
          <RestroCard name="Balu Biriyani" cuisines="Indian, American, Italian" rating="4.5 Stars" delivery_time="38min"/>
          <RestroCard name="Balu Biriyani" cuisines="Indian, American, Italian" rating="4.5 Stars" delivery_time="38min"/>
          <RestroCard name="Balu Biriyani" cuisines="Indian, American, Italian" rating="4.5 Stars" delivery_time="38min"/>
          <RestroCard name="Balu Biriyani" cuisines="Indian, American, Italian" rating="4.5 Stars" delivery_time="38min"/>
          <RestroCard name="Balu Biriyani" cuisines="Indian, American, Italian" rating="4.5 Stars" delivery_time="38min"/>
         
       
      </div>
    </div>
  )
}
export default Body;
