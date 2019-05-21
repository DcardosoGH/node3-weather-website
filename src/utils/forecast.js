const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/2cd3ca62dfe0cb6d9f6c1b47f9998fca/" +
    latitude +
    "," +
    longitude +
    "?units=si&lang=pt";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Erro de conecção.", undefined);
    } else if (body.error) {
      callback("Localização não encontrada", undefined);
    } else {
      const { temperature, precipProbability } = body.currently;
      const { summary } = body.daily.data[0];
      const message = `${summary} Estão ${Math.floor(
        temperature
      )}ºC, com ${precipProbability}% probabilidade de chuva.`;
      callback(undefined, message);
    }
  });
};

module.exports = forecast;
