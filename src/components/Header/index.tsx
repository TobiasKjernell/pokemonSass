import Image from "next/image";
import Logo from '../../../public/logo.png';
import HeaderLogo from '../../../public/pokemonHeader.png';

const Header = () => {
    return (
        <header className="header">
            <div className="header__icon">
                <Image src={Logo} alt="PokebollLogo" />
            </div>
            <div className="header__logo">
                <Image src={HeaderLogo} alt="HeaderLogo" />
            </div>
            <div className="header__avatar">
                <Image src={Logo} alt="PokebollLogo" />
            </div>
        </header>
    )
}

export default Header;