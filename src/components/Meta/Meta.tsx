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
        </Helmet>
      </HelmetProvider>
      <Favicon url="https://placehold.jp/16x16.png?text=P" />
      <Normalize />
    </>
  );
};

export default Meta;
