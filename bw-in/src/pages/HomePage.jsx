import React from "react";



import FeedComponent from "../components/FeedComponent";
import AsideComponent from "../components/AsideComponent";


export default function MainComponent() {

  return (
    <div id="main">
      <div id="center">
        <div id="settanta">
         <FeedComponent/>
        </div>
        <div id="trenta">
          <AsideComponent/>
        </div>
      </div>
    </div>
  );
}
