import Blogs from "../src/components/blogs";
import { getBlogs } from "../src/services/blogService";
import { getTopics } from "../src/services/topicService";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import NavBar from "../src/components/navBar";
import styles from "../styles/Home.module.css";

export default function Index({ blogs, topics }) {
  const props = { blogs: blogs, topics: topics };
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Blog Example with</title>
      </Head>
      <main className="container">
        <ToastContainer />
        <Blogs {...props} />
      </main>
    </div>
  );
}
/*
export async function getStaticProps() {
  const { data } = await getTopics();

  const topics = [{ _id: "", name: "All Topics" }, ...data];
  const { data: blogs } = await getBlogs();

  return {
    props: { blogs, topics },
  };
}*/

async function getServerSideProps(context) {
  const { data } = await getTopics();

  const topics = [{ _id: "", name: "All Topics" }, ...data];
  const { data: blogs } = await getBlogs();

  return {
    props: { blogs, topics },
  };
}
