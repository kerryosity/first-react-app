import s from './style.module.css';

const Footer = () => {
    const copyright = '© 2021 #ReactMarathon.';
    const thanks = 'THANKS FOR VISITING';
    return (
        <footer>
            <div className={s.wrapper}>
                <h3>{thanks}</h3>
                <p>{copyright}</p>
            </div>
        </footer>
    );
}

export default Footer;