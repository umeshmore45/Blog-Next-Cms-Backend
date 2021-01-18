import Head from "next/head";
import BlogCard from "../component/BlogCard";
import fetchData from "../fetchData/entry";
import styles from "../styles/Home.module.css";

export default function Home(props) {
  return (
    <div className={styles["container"]}>
      {props.blogs.map((blog) => {
        return <BlogCard key={blog.uid} {...blog} />;
      })}
    </div>
  );
}

export const getStaticProps = async () => {
  try {
    let blogs = await fetchData("umesh_blog_component");

    return {
      props: {
        blogs: blogs,
      },
    };
  } catch (e) {
    console.log(e);
    return e;
  }
};
