import s from './style.module.css';

const Layout = ({ title, descr, urlBg, colorBg }) => {
    const inline_style = urlBg ? { backgroundImage: `url(${urlBg})` } : { backgroundColor: `${colorBg}` }

    return (
        <section className={s.root} style={inline_style}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>{title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={s.full + ' ' + s.desc}>
                        <p>{descr}</p>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Layout;