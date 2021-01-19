import Link from "next/link";

function SingleBlog(props) {
  let { heading, image, content, links } = props;
  return (
    <div>
      <h1>{heading}</h1>
      <img src={image.url} alt={image.title} />
      <p>{content}</p>
      {links.map((link) => {
        let id = link.realted_links[0].uid;
        return (
          <div key={link._metadata.uid}>
            <Link href={`/blog/${id}`}>
              <p>{link.link_tiltle}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default SingleBlog;
