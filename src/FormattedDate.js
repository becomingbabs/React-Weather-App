/** @format */

import React from "react";

export default function FormattedDate(props) {
  console.log(props.date);
  return "hi";
  /* let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[props.date.getDay()];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[props.date.getMonth()];
  let date = props.date.getDate();
  let fullDate = `${day}, ${month} ${date}`;

  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div>
      {fullDate} {hours} : {minutes}
    </div>
  ); */
}
