/** @format */

import styles from "./singlePost.module.css";
import Image from "next/image";

const SiglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src='https://images.pexels.com/photos/29173986/pexels-photo-29173986/free-photo-of-serene-pond-with-boats-in-giverny-garden.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src='https://images.pexels.com/photos/29173986/pexels-photo-29173986/free-photo-of-serene-pond-with-boats-in-giverny-garden.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>SSR Coder</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2025</span>
          </div>
        </div>
        <div className={styles.content}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis enim, facilis voluptas quam quo quos tenetur vero id in, earum velit dolor? Impedit, quibusdam officia illo eius accusantium laboriosam reprehenderit.
        </div>
      </div>
    </div>
  );
};

export default SiglePostPage;
