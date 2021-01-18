function BlogCard(props) {
  console.log(props);
  let { heading, image, content } = props;
  return (
    <div>
      <h1>{heading}</h1>
      <img src={image.url} alt={image.title} />
      <p>{content}</p>
    </div>
  );
}

export default BlogCard;
