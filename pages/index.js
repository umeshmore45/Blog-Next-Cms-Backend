import Head from "next/head";
import BlogCard from "../component/BlogCard";
import Layout from "../component/layout";
import fetchData from "../fetchData/entry";
import styles from "../styles/Home.module.css";

export default function Home(props) {
  return (
    <Layout {...props.navi}>
      <Head>
        <title>Blog Rendering</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles["container"]}>
        {props.blogs.map((blog) => {
          return <BlogCard key={blog.uid} {...blog} />;
        })}
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  try {
    let blogs = await fetchData("umesh_blog_component");
    let navi = await fetchData("umesh_blog_header", process.env.TOKEN);

    return {
      props: {
        blogs: blogs,
        navi: navi,
      },
    };
  } catch (e) {
    console.log(e);
    return e;
  }
};
