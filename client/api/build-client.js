import axios from "axios";

const buildClient = ({ req }) => {

  if (typeof window === "undefined") {
    // We are on the server
    // local dev baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local'
    return axios.create({
      baseURL: "http://www.ez-app.online/",
      headers: req.headers,
    });
  } else {
    // We must be on the browser
    return axios.create({
      baseUrl: "/",
    });
  }
};

export default buildClient;
