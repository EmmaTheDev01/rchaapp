import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";

const PlaceCard = ({ place }) => {
  return (
    <div className="place">
      <div className="image place">{/* You can add an image here */}</div>
      <div className="bottom-card-places">
        <h5 className="title-place">{place.place_name}</h5>
        <p className="description">{place.place_location}</p>
        <p className="category">{place.place_category}</p>
        <p>{place.category_id}</p>
      </div>
    </div>
  );
};

const Place = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetching data");
      try {
        await axios.get(
          "http://127.0.0.1:8000/api/auth/placeFeature/Available",
           {Headers:{
            'Authorization': `Bearer ${localStorage.getItem("access_token")}`,
           }
          
          }
        ).then((response) => {
          setPlaces(response.data);
          setLoading(false);
          console.log(response)
        })
        // console.log(response)
        // if (response.status === 200) {
        //   setPlaces(response.data.places);
         
        //   setLoading(false);
        // } else {
        //   setError("Failed to fetch places. Please try again later.");
        // }
      } catch (err) {
        console.log(err); // Log the actual error for debugging
        setError("An error occurred while fetching places. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="mt-5">
        <Spinner animation="grow" variant="info" />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!places || places.length === 0) {
    return <div>No places available.</div>;
  }

  return (
    <div>
      {places.map((place) => (
        <PlaceCard key={place.id} place={place} />
      ))}
    </div>
  );
};

export default Place;