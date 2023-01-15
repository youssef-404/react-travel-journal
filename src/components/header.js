import Logo from '../images/logo.png'


export default function Header(){
    return(
        <nav>
            <img src={Logo} alt="logo"/>
            <p>my travel journal.</p>
        </nav>
    );
}