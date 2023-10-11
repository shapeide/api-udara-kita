import axios from "axios";
import logger from "./logger.js";

const extractData = async (city) => {
  try {
    const baseApi = `https://api.waqi.info/feed/${city}/?token=${process.env.TOKEN}`;
    const response = await axios.get(baseApi);
    const data = response.data.data;

    const tranformResponse = {
      aqi: data.aqi,
      idx: data.idx,
      from: data.attributions.map((item) => item.name),
    };

    logger.log(`info`, `success extract and transform data`);

    return tranformResponse;
  } catch (error) {
    logger.log("info", `error at ${error}`);
    return error;
  }
};

export const searchByCity = async (req, res) => {
  try {
    const { city } = req.body;
    const transformApi = await extractData(city);

    res.send(transformApi);
  } catch (error) {
    return error;
  }
};
