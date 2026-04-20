import css from './Header.module.css'
import Link from 'next/link';


const Header = () => {
    return (
    <header className={css.header}>
        <div className={css.headerContainer}>
    <Link className={css.icon} href='/' aria-label='TravelTruck'>TravelTruck</Link>
    <nav>
        <ul className={css.navList}>
            <li>
                <Link href='/'>Home</Link>
            </li>
        <li>
            <Link href='/catalog'>Catalog</Link></li></ul></nav>
            </div>
</header>)
}

export default Header