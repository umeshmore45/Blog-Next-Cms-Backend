import SingleBlog from "../../component/SingleBlog";
import fetchData from "../../fetchData/entry";

function blog(props) {
  return (
    <div>
      <SingleBlog {...props.blog} />
    </div>
  );
}

export const getStaticProps = async (context) => {
  try {
    let blog = await fetchData("umesh_blog_component", context.params.id);

    return {
      props: {
        blog: blog,
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
