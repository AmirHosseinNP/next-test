import Head from "next/head";
import Nav from "./Nav";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import { Box, NoSsr } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0,
      xs: 400,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1536,
    },
  },
});

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      {/* <NoSsr> */}
        <Nav />
        <Box
          component="main"
          sx={{
            mt: 7,
            "@media (min-width: 600px)": {
              mt: 8,
            },
          }}
          className="px-5"
        >
          <div className="container mx-auto">
            <Header />
            {children}
          </div>
        </Box>
      {/* </NoSsr> */}
    </>
  );
};

export default Layout;
