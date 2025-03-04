import React from 'react'
import {useRouter} from 'next/router'
import styles from "../../styles/BlogPost.module.css"
//Step 1; find the file corresponding slug
//step 2: display the content of the file
const slug = () => {
    const router = useRouter()
    const {slug} = router.query
    console.log(slug)
  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <h1>Title of the page:</h1>
      <hr />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nihil similique facilis rem dolorem possimus delectus, omnis perspiciatis id eaque? Recusandae, dolorem suscipit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, molestiae alias. Earum vero dolorem qui saepe voluptatem dignissimos expedita modi ipsam facere! Deleniti, neque laboriosam? Optio ipsum numquam nobis? Perferendis facilis consectetur rem et soluta quos iure expedita at, nemo dolore sapiente qui inventore doloremque?
      </div>
      </main>
    </div>
  )
}

export default slug