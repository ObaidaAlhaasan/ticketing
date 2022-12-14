import "bootstrap/dist/css/bootstrap.css";
import Header from "../components/header";
import buildClient from "../api/build-client";

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <div>
      <Header currentUser={currentUser} />
      <div className="container">
        <Component currentUser={currentUser} {...pageProps} />
      </div>
    </div>
  );
};

AppComponent.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);
  console.log('====================================');
  console.log(client);
  console.log('====================================');
  const { data } = await client.get("/api/users/currentuser");

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(
      appContext.ctx,
      client,
      data.currentUser
    );
  }

  return {
    pageProps,
    ...data,
  };
};


// AppComponent.getInitialProps = async (appContext) => {
//   let pageProps = {};
//   let data = {};
//   try {
//     const r = await axios.get("http://www.ez-app.online/api/users/currentuser");
//     data = r.data;

//     if (appContext.Component.getInitialProps) {
//       pageProps = await appContext.Component.getInitialProps(
//         appContext.ctx,
//         client,
//         data.currentUser
//       );
//     }

//     return {
//       pageProps,
//       ...data,
//     };
//   } catch (error) {
//     console.error(error);
//   }

//   return {
//     pageProps,
//     ...data,
//   };
// };

export default AppComponent;
