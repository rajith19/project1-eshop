import './Header.css';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import StoreFrontIcon from '@material-ui/icons/Storefront';
import SeachIcon from '@material-ui/icons/Search';


function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                <StoreFrontIcon fontSize='large' className="header__logoImage" />
                <h2 className='header__logoTitle'>E-Shop</h2>
            </div>
            <div className="header__search">
                <input type="text" className="header__searchInput" placeholder="Search..." />
                <SeachIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <div className="nav__item">
                    <span className="nav__itemLineOne">Hello Guest</span>
                    <span className="nav__itemLineTwo">Sign In</span>
                </div>
                <div className="nav__item">
                    <span className="nav__itemLineOne">Your</span>
                    <span className="nav__itemLineTwo">Shop</span>

                </div>
                <div className="nav__itembasket">
                    <ShoppingBasketIcon    />
                    <span className="nav__itemLineTwo nav__basketCount">0</span>

                </div>
            </div>
        </div>
    );
}

export default Header;