import React from "react";
import "./card.css";
import location from "../static/location.svg"

export function Card({countryName, placeToVisit, dates, description, image}) {
  return(
    <>
      <div className="card">
        <div>
          <img className="placeImg" src={image}></img>
        </div>
        <div className="columnFlex">
          <div>
            <div className="content">
              <div className="countryInfo">
                <img className="locationLogo" src={location}></img>
                <div className="country">
                  {countryName}
                </div>
              </div>
              <div className="googlemaps">
                <a href="https://www.google.com/maps">View on Google maps</a>
              </div>
            </div>
          </div>
          <div className="locationName">
            {placeToVisit}
          </div>
          <div className="tourDates">
            {dates}
          </div>
          <div className="tourDetails">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  )
}