import { Box, Card, CardContent, Typography } from "@mui/material";
import Head from "next/head";
import Link from "next/link";

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Box
        className="grid gap-10 max-w-screen-xl mx-auto py-10"
        gridTemplateColumns="repeat(auto-fill, minmax(220px, 1fr))"
      >
        {articles.map((article) => (
          <Link key={article.id} href={`/articles/${article.id}`} passHref>
            <Card
              variant="outlined"
              className="hover:border-primary-main cursor-pointer"
              component="a"
            >
              <CardContent>
                <Typography color="text.primary" variant="h6">
                  {article.title} &rarr;
                </Typography>
                <Typography color="text.secondary" variant="body">
                  {article.body}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        ))}
      </Box>
    </div>
  );
}

export const getStaticProps = async () => {
  // fetching posts
  const articles = await (
    await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  ).json();

  return { props: { articles } };
};
