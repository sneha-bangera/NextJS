import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import POst from "@/models/POst";
import connect from "@/utils/db";


// async function getData() {
//   const res = await fetch(`${process.env.NEXTAUTH_URL || ''}/api/posts`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

async function getAllPosts() {
  await connect();
  return await POst.find(); // or Post.find().lean()
}

const Blog = async () => {
  const data = await getAllPosts();
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link href={`/blog/${item._id}`} className={styles.container} key={item.id}>
          <div className={styles.imageContainer}>
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;