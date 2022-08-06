import axios from "axios";

const buildClient = ({ req }) => {

  if (typeof window === "undefined") {
    // We are on the server
    console.log('====================================');
    console.log('Requesting on the server');
    console.log('====================================');
    return axios.create({
      baseURL:
        "http://www.ez-app.online",
      headers: req.headers,
    });
  } else {
    // We must be on the browser
    console.log('====================================');
    console.log('Requesting on the browser');
    console.log('====================================');

    return axios.create({
      baseUrl: "/",
    });
  }
};

export default buildClient;
