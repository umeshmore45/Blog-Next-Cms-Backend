import Link from "next/link";
import styles from "../styles/component/BlogCard.module.css";

function BlogCard(props) {
  let { heading, image, content, uid } = props;
  return (
    <div className={styles["container"]}>
      <div className={styles["img-container"]}>
        <img src={image.url} alt={image.title} className={styles["img-p"]} />
      </div>
      <div className={styles["content"]}>
        <Link href={`/blog/${uid}`}>
          <h1>{heading}</h1>
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
