import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

function Header(props) {
    const { t, i18n } = useTranslation("common");
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <section>
                {/* ДЕСКТОП */}
                <div className="row justify-between align-center desktop">
                    <div className="col">
                        <div className="wrapper">
                            <div className="logo"><Link to={'/'}><img src="https://static.wixstatic.com/shapes/84770f_3874204412b54d1ab889921875e150ba.svg" alt=""/></Link></div>
                        </div>
                    </div>
                    <div className="col headcol-2">
                        <div className="wrapper flex justify-between align-center gap-30">
                            <div className="menu flex justify-between align-center gap-20">
                                <div className="home"><Link to={'/'}>{t("menu-title.home")}</Link></div>
                                <div className="about"><Link to={'/about'}>{t("menu-title.about")}</Link></div>
                                <div className="services"><Link to={'/services'}>{t("menu-title.services")}</Link></div>
                            </div>
                            <div className="language flex justify-between align-center gap-10">
                                <button onClick={() => i18n.changeLanguage('am')}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYzAv9e82xGvzlWIOT16j99lzpcoCq1lX2NXeGawtBUQ&s=10" alt=""/></button>
                                <button onClick={() => i18n.changeLanguage('ru')}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxFbSYC_SWeLVM5GHKVB45gu1J-IO1lQwIPcWwq-M_iw&s=10" alt=""/></button>
                                <button onClick={() => i18n.changeLanguage('en')}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkpgLfJKzteMGy0cA-NSEhYoANF3YqQRb657sX6yKHQw&s=10" alt=""/></button>
                                <button onClick={() => i18n.changeLanguage('de')}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlEA4pMVOwyeZCvvXit2HlCRk2SFf8-iLX8r2OfpGdXw&s=10" alt=""/></button>
                            </div>
                            <div className="cont">
                                <div className="contact-us"><Link to={'/contact'}>{t("menu-title.contact")}</Link></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* МОБИЛЬНЫЙ */}
                <div className="mobile-header mobile">
                    <div className="row justify-between align-center mobile-top">
                        <div className="logo">
                            <Link to={'/'}><img src="https://static.wixstatic.com/shapes/84770f_3874204412b54d1ab889921875e150ba.svg" alt=""/></Link>
                        </div>
                        <button className="burger-btn" onClick={() => setMenuOpen(!menuOpen)}>
                            <span className={`burger-line ${menuOpen ? 'open' : ''}`}></span>
                            <span className={`burger-line ${menuOpen ? 'open' : ''}`}></span>
                            <span className={`burger-line ${menuOpen ? 'open' : ''}`}></span>
                        </button>
                    </div>

                    {/* МЕНЮ */}
                    <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                        <div className="mobile-menu-inner">
                            <div className="mobile-link" onClick={() => setMenuOpen(false)}>
                                <Link to={'/'}>{t("menu-title.home")}</Link>
                            </div>
                            <div className="mobile-link" onClick={() => setMenuOpen(false)}>
                                <Link to={'/about'}>{t("menu-title.about")}</Link>
                            </div>
                            <div className="mobile-link" onClick={() => setMenuOpen(false)}>
                                <Link to={'/services'}>{t("menu-title.services")}</Link>
                            </div>
                            <div className="mobile-lang language flex align-center gap-10">
                                <button onClick={() => i18n.changeLanguage('am')}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYzAv9e82xGvzlWIOT16j99lzpcoCq1lX2NXeGawtBUQ&s=10" alt=""/></button>
                                <button onClick={() => i18n.changeLanguage('ru')}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxFbSYC_SWeLVM5GHKVB45gu1J-IO1lQwIPcWwq-M_iw&s=10" alt=""/></button>
                                <button onClick={() => i18n.changeLanguage('en')}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkpgLfJKzteMGy0cA-NSEhYoANF3YqQRb657sX6yKHQw&s=10" alt=""/></button>
                                <button onClick={() => i18n.changeLanguage('de')}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlEA4pMVOwyeZCvvXit2HlCRk2SFf8-iLX8r2OfpGdXw&s=10" alt=""/></button>
                            </div>
                            <div className="mobile-cont" onClick={() => setMenuOpen(false)}>
                                <Link to={'/contact'}>{t("menu-title.contact")}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    );
}

export default Header;