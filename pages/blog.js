import React from 'react'
import styles from "../styles/Blog.module.css"
import Link from 'next/link'

//Step 1: Collect all the files from blogdata directory
// Step2: Iterate through the and Display them
const Blog = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
          <div className={styles.blogItem}>
            <Link href={'/blogpost/learn-javascript'}>
            <h2 className={styles.blogItemh3}>How to learn JavaScript in 2022?</h2>
            </Link>
            <p>JS us the language used to design logic for the web</p>
          </div>
          
          
      </main>
    </div>
  )
}

export default Blog