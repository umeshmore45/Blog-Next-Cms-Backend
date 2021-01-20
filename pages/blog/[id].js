import Head from "next/head";
import Layout from "../../component/layout";
import SingleBlog from "../../component/SingleBlog";
import fetchData from "../../fetchData/entry";

function blog(props) {
  return (
    <Layout {...props.navi}>
      <Head>
        <title>Blog Rendering</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <SingleBlog {...props.blog} />
      </div>
    </Layout>
  );
}

export const getStaticProps = async (context) => {
  try {
    let blog = await fetchData("umesh_blog_component", context.params.id);
    let navi = await fetchData("umesh_blog_header", process.env.TOKEN);
    return {
      props: {
        blog: blog,
        navi: navi,
      },
    };
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const getStaticPaths = async () => {
  try {
    let blogs = await fetchData("umesh_blog_component");

    let paths = blogs.map((blog) => {
      return {
        params: {
          id: `${blog.uid}`,
        },
      };
    });

    return {
      paths,
      fallback: false,
    };
  } catch (e) {
    console.log(e);
    return e;
  }
};

export default blog;
