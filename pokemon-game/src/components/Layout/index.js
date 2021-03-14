import s from './style.module.css';

const Layout = ({ title, urlBg, colorBg, children }) => {
    let style = {};
    if (urlBg) { style.backgroundImage = `url(${urlBg})` }
    if (colorBg) { style.backgroundColor = colorBg }

    return (
        <section className={s.root} style={style}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>{title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={`${s.full} ${s.desc}`}>
                        {children}
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Layout;