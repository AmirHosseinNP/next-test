import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const article = ({ article }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { id } = router?.query;
  console.log(router?.params);

  return (
    <>
      <Head>
        <title>Article {article.id}</title>
      </Head>
      <Box>
        <Paper className="p-5 space-y-5" elevation={5}>
          <Typography variant="h5" component="h1">
            {article.title}
          </Typography>
          <Typography variant="body1">{article.body}</Typography>
          <Link href="/">Go back</Link>
        </Paper>
      </Box>
    </>
  );
};

export const getStaticProps = async ({ params: { id } }) => {
  const article = await (
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  ).json();
  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const articles = await (
    await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")
  ).json();

  const paths = articles.map((article) => ({
    params: { id: article.id.toString() },
  }));

  return { paths, fallback: false };
};

export default article;
