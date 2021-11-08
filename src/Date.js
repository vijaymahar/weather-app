import React, { useEffect } from "react";
var date, time;
const Date = () => {
  date = new Date();
  time = date.toLocaleTimeString();
  console.log(time);

  return (
    <>
      <h1>time</h1>
    </>
  );
};

export default Date;
