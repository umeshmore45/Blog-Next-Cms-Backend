import Head from "next/head";
import BlogCard from "../component/BlogCard";
import Layout from "../component/layout";
import fetchData from "../fetchData/entry";
import styles from "../styles/Home.module.css";

export default function Home(props) {
  return (
    <Layout {...props.navi}>
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
    let navi = await fetchData("umesh_blog_header", "blt0af670cb3617c3dc");

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
