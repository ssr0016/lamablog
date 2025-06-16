import Link from 'next/link'
import styles from './postCard.module.css'

import Image from 'next/image'

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/29173986/pexels-photo-29173986/free-photo-of-serene-pond-with-boats-in-giverny-garden.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className={styles.img}/>
        </div>
        <span className={styles.date}>01.01.2025</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quis temporibus error atque illo molestiae, numquam, adipisci a aspernatur alias corporis fugit vero eligendi autem quod omnis. Tempora, nesciunt sunt?</p>
        <Link className={styles.link}  href={'/blog/post'}>READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard