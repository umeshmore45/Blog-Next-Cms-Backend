import Link from "next/link";
import styles from "../styles/component/SingleBlog.module.css";

function SingleBlog(props) {
  let { heading, image, content, links } = props;
  return (
    <div className={styles["container"]}>
      <div className={styles["content"]}>
        <h1>{heading}</h1>
        <img src={image.url} alt={image.title} className={styles["img"]} />
        <p>{content}</p>
      </div>
      <div className={styles["links"]}>
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
    </div>
  );
}

export default SingleBlog;
