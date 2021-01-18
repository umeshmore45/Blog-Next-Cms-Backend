import Head from "next/head";
import fetchData from "../fetchData/entry";
import styles from "../styles/Home.module.css";

export default function Home(props) {
  console.log(props);
  return (
    <div className={styles["container"]}>
      <h1>Home</h1>
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
