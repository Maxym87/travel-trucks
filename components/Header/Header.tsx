
import Link from 'next/link';


const Header = () => {
    return (<header>
    <Link href='/' aria-label='TravelTruck'>TravelTruck</Link>
    <nav>
        <ul>
            <li>
                <Link href='/'>Home</Link>
            </li>
        <li>
            <Link href='/catalog'>Catalog</Link></li></ul></nav>
</header>)
}

export default Header