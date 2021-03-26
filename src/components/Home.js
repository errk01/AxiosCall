import React, { useState,useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [people, setPeople] = useState("");
  // The API is from: https://swapi.dev/documentation

  // Here is a basic axios call that is making a call to the API.
  // To make a request for a user with a given ID with /people and to get the id add /1.
  // to see the changes go the the browser and right click and go to inspect. You will see a object,
  //and inside the object you will see a keyword called data. In the data you will see a list of starwars characters.

  // Here we will use useEffect to help render the data
  useEffect(() => {
      // we will use a function and wrapp it in a async and put wait infront of the axios. The axios gets a "get method".
      // axios accepts a promis, to return the data. The promis makes sure the data is returned.  
      //Once we have the responce we will store in a responce variable and check the data.
    async function fetchData(){
      await axios
        .get("https://swapi.dev/api/people/1")
        .then((response) => {
          // handle success
          setPeople(response.data)
          console.log(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    };
    // Here we will call the function
      fetchData()
    // The useEffect needs this array to to run the data that is being returned 
  },[setPeople]);

  /// then we simply return the data
  return <div>{people.name}</div>;
}
