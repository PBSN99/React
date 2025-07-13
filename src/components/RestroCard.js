const RestroCard = (props) => {

  // const {
  //   name,
  //   rating,
  //   cuisines,
  //   delivery_time
  // } = resData?.restaurant_data;


  return(
    <div className="res-card">
      <img 
        className="res-logo" alt ="res-logo" 
        src="https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1662123565/rldy0mhqrr1dsnmf1cq4.webp"></img>
      <h3>{props.name}</h3>
      <h4>{props.cuisines}</h4>
      <h4>{props.rating}</h4>
      <h4>{props.delivery_time}</h4>
    </div>
  )
}

export default RestroCard;