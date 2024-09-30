import axios from "axios";

const BASEURL = "https://64b3dcd80efb99d862687569.mockapi.io/api";

export const getData = async () => {
  try {
    const response = await axios.get(`${BASEURL}/services`);

    if (response.status === 200) {
      const splitData = response.data; 
      console.log("API Response:", splitData);
      return splitData[0].services; 
    } else {
      console.error("Error fetching services:", response.statusText);
      return [];
    }
  } catch (error) {
    console.error("Error:", error.message);
    return [];
  }
};
