import axios from "axios";
import logger from "./logger.js";

const extractData = async (city) => {
  try {
    const baseApi = `https://api.waqi.info/feed/${city}/?token=${process.env.TOKEN}`;
    const response = await axios.get(baseApi);
    const data = response.data;
    logger.log("info", "success extract data");
    return data;
  } catch (error) {
    logger.log("info", `error at ${error}`);
    return error;
  }
};

export const searchByCity = async (req, res) => {
  const { city } = req.body;
  const response = extractData(city);

  res.send("success");
};
