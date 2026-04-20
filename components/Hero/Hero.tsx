
import css from './Hero.module.css'
import Link from "next/link"
import Image from "next/image"

const Hero = () => {return (
    <div className={css.container}>
<section className={css.heroSection}>
      <Image
        src="/hero/Picture.png"
        alt="Hero image"


        fill
        priority
        style={{objectFit: 'cover', objectPosition: 'center', zIndex: -1,}}
    
      />
    <h1 className={css.title}>Campers of your dreams</h1>
    <h2 className={css.subTitle}>You can find everything you want in our catalog</h2>
    <Link href='/catalog' className={css.heroBtn}>View Now</Link>
</section>
</div>
)}

export default Hero