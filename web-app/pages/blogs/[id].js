import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getBlog, getBlogs } from "../../src/services/blogService";
import { getTopics } from "../../src/services/topicService";
import BlogForm from "../../src/components/posts";
import Head from "next/head";

export default function Blog({ topics, blog }) {
  const router = useRouter();
  console.log(router);
  // if (!router.isFallback && !post?.id) {
  //    return <ErrorPage statusCode={404} />;
  //  }
  return (
    <>
      <Head>
        <title>| Next.js Blog Example with</title>
      </Head>
      <main className="container">
        <BlogForm topics={topics} blog={blog} />
      </main>
    </>
  );
}
/*
export async function getStaticProps({ params }) {
  console.log(params);
  const { data: topics } = await getTopics();
  const { data: blog } = await getBlog(params.id);
  //const blog = await getBlog(blogId);

  return {
    props: {
      topics,
      blog,
    },
  };
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const { data: blogs } = await getBlogs();

  // Get the paths we want to pre-render based on posts
  const paths = blogs.map((blog) => `/blogs/${blog._id}`);
  console.log(paths);
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}*/

export async function getServerSideProps(context) {
  console.log(context);
  const { data: topics } = await getTopics();

  //const blog = await getBlog(blogId);
  try {
    const { data: blog } = await getBlog(context.params.id);
    return {
      props: {
        topics,
        blog,
      },
    };
  } catch (ex) {
    console.log(ex);
  }

  return {
    props: {
      topics,
    },
  };
}

