import Link from "next/link";

function BlogCard(props) {
  let { heading, image, content, uid } = props;
  return (
    <div>
      <img src={image.url} alt={image.title} />
      <Link href={`/blog/${uid}`}>
        <h1>{heading}</h1>
      </Link>

      <p>{content}</p>
    </div>
  );
}

export default BlogCard;
