import { Helmet, HelmetProvider } from "react-helmet-async";
import { Normalize } from "styled-normalize";
import Favicon from "react-favicon";

const Meta = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Sample Profile Page</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Philosopher:wght@700&family=Piazzolla:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
      </HelmetProvider>
      <Favicon url="https://placehold.jp/16x16.png?text=P" />
      <Normalize />
    </>
  );
};

export default Meta;
