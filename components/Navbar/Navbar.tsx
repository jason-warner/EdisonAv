// import homeStyles from '../../styles/components/Home.module.css';
import navStyles from '../../styles/components/Navbar/Navbar.module.css';
import MenuItems from './MenuItems';
import { useState, Fragment } from 'react';
import Link from 'next/link'




const Navbar = () => {
    // const [linkClicked, linkIs] = useState(false);
    const [buttonClicked, buttonIs] =useState(false);
    const menuChange = ` ${buttonClicked && navStyles.change}`;

    return(
        <nav className={navStyles.NavbarItems}>
            <ul className={navStyles.listGroup} >
                <div className={navStyles.ediHome}>
                    <Link href="/">
                        <img className={navStyles.imgEffect1} src="../../ediHome.png" title="Home" alt="Home"/>
                    </Link>
                </div>
                <div className={navStyles.menu} onClick={() => buttonIs(!buttonClicked)}>
                    <div className={navStyles.menu_1 + menuChange }></div>
                    <div className={navStyles.menu_2 + menuChange }></div>
                    <div className={navStyles.menu_3 + menuChange }></div>
                </div>
                {MenuItems.map((item, index) => {
                    return(
                        <Fragment>
                            <li className={navStyles.listItem} key={index}>
                                <Link href={"/" + item.url}>
                                    <a  className={item.cName + ` ${navStyles.anchor}`} href={item.url}> {item.title} </a>
                                </Link>
                            </li>
                        </Fragment>
                    );
                })}
            </ul>
        </nav>

    )
}

export default Navbar;