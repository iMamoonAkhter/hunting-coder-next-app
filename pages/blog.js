import React, { useEffect } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

//Step 1: Collect all the files from blogdata directory
// Step2: Iterate through the and Display them
const Blog = () => {
  const [blog, setBlogs] = React.useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/blogs")
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        setBlogs(parsed);
      });
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blog.map((blogItem) => {
          return (
            <div className={styles.blogItem} key={blogItem.title}>
              <Link href={`/blogpost/${blogItem.slug}`}>
                <h2 className={styles.blogItemh3}>{blogItem.title}</h2>
              </Link>
              <p className={styles.blogItempara}>{blogItem.content.substr(0, 150)}...</p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Blog;
