import React, {useState} from 'react';
import { useTranslation } from "react-i18next";
import {Link} from 'react-router-dom';
import { useAnimate } from '../hooks/useAnimate';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ServicesM(props) {
    const { t } = useTranslation("common");
    const [askOpen, setaskOpen] = useState(null);
    useAnimate();

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false
    };

    return (
        <main>
            <section id="solut">
                <div className="row justify-between">
                    <div className="col w-30 solut-col">
                        <div className="wrapper">
                            <div className="title-1 anim-flip"><span>{t("solut-info.title")}</span></div>
                            <div className="sol-txt anim-up delay-1">{t("solut-info.txt")}</div>
                            <div className="sol-btn anim-up delay-2"><Link to={"/contact"}><button className="btn-orange">{t("solut-info.btn")}</button></Link></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="wrapper">
                            <div className="solut-img"><img className="anim-img delay-1" src="https://static.wixstatic.com/media/c837a6_ef1f68dbc06f4c6d888f67f63943639a~mv2.png/v1/fill/w_816,h_1019,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Wix%20Style%20-%20Photoshoot%20Collection%20-%209%20images_Wix%20Style%20-%20Photoshoot%20Collection%20-%209%20images_.png" alt=""/></div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="what">
                <div className="row">
                    <div className="col">
                        <div className="wrapper">
                            <div className="title-1 anim-flip"><span>{t("what-title.title")}</span></div>
                        </div>
                    </div>
                </div>
                <div className="row justify-between sprow specrow1">
                    <div className="col w-40 spec-col">
                        <div className="wrapper">
                            <div className="num anim-up"><div className="specnum">1</div></div>
                            <div className="title-3 spec-title anim-flip"><span>{t("spectr-title.title1")}</span></div>
                            <div className="spec-txt anim-up delay-1">{t("spectr-txt.txt1")}</div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="wrapper">
                            <div className="spec-img"><img className="anim-img delay-1" src="https://static.wixstatic.com/media/c837a6_9b4e08f58fab4538a07d6ec33f313c43~mv2.png/v1/crop/x_0,y_118,w_2840,h_2105/fill/w_481,h_356,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/xas.png" alt=""/></div>
                        </div>
                    </div>
                </div>
                <div className="row justify-between sprow specrow2">
                    <div className="col w-40 spec-col">
                        <div className="wrapper">
                            <div className="num anim-up"><div className="specnum">2</div></div>
                            <div className="title-3 spec-title anim-flip"><span>{t("spectr-title.title2")}</span></div>
                            <div className="spec-txt anim-up delay-1">{t("spectr-txt.txt2")}</div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="wrapper">
                            <div className="spec-img"><img className="anim-img delay-1" src="https://static.wixstatic.com/media/c837a6_66525e11f4994d7f9717df898c133039~mv2.png/v1/crop/x_0,y_224,w_2655,h_1579/fill/w_569,h_339,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/dsdfdsa.png" alt=""/></div>
                        </div>
                    </div>
                </div>
                <div className="row justify-between sprow specrow3">
                    <div className="col w-40 spec-col">
                        <div className="wrapper">
                            <div className="num anim-up"><div className="specnum">3</div></div>
                            <div className="title-3 spec-title anim-flip"><span>{t("spectr-title.title3")}</span></div>
                            <div className="spec-txt anim-up delay-1">{t("spectr-txt.txt3")}</div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="wrapper">
                            <div className="spec-img"><img className="anim-img delay-1" src="https://static.wixstatic.com/media/c837a6_234bee28908c4c2bac4b8511e870bedd~mv2.png/v1/crop/x_0,y_301,w_2693,h_1862/fill/w_509,h_351,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/sasccf.png" alt=""/></div>
                        </div>
                    </div>
                </div>
                <div className="row justify-between sprow specrow4">
                    <div className="col w-40 spec-col">
                        <div className="wrapper">
                            <div className="num anim-up"><div className="specnum">4</div></div>
                            <div className="title-3 spec-title anim-flip"><span>{t("spectr-title.title4")}</span></div>
                            <div className="spec-txt anim-up delay-1">{t("spectr-txt.txt4")}</div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="wrapper">
                            <div className="spec-img"><img className="anim-img delay-1" src="https://static.wixstatic.com/media/c837a6_1ddbd9c130e64595861893a0302690a6~mv2.png/v1/crop/x_0,y_1,w_1580,h_1031/fill/w_524,h_341,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/sadcx.png" alt=""/></div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="slide">
                <div className="row">
                    <div className="col w-60">
                        <div className="wrapper">
                            <div className="title-1 anim-flip"><span>{t("slide-title.title")}</span></div>
                        </div>
                    </div>
                </div>
                <div className="row slide-row">
                    <Slider {...settings}>
                        <div className="slide-img"><img src="https://static.wixstatic.com/media/11062b_669cbdf84a7e4ad4817c73950b6d468e~mv2.jpg/v1/fill/w_1873,h_699,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/Solar%20Panel%20Installation.jpg" alt=""/></div>
                        <div className="slide-img"><img src="https://static.wixstatic.com/media/00340cf241244b8f89c79933dc2cd5f8.jpg/v1/fill/w_1873,h_699,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/Red%20Tile%20Roof.jpg" alt=""/></div>
                        <div className="slide-img"><img src="https://static.wixstatic.com/media/f8b94c6bd4cc4a1e9d20c56fd59457f2.jpg/v1/fill/w_1873,h_699,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/Roof%20Repair%20Person.jpg" alt=""/></div>
                        <div className="slide-img"><img src="https://static.wixstatic.com/media/defe51ec28b144bf837e391e91626341.jpg/v1/fill/w_1873,h_699,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/House%20Roof%20Detail.jpg" alt=""/></div>
                        <div className="slide-img"><img src="https://static.wixstatic.com/media/11062b_9d2bf705f4c048e8be0861e3b107a36d~mv2.jpg/v1/fill/w_1873,h_699,fp_0.82_0.53,q_85,usm_0.66_1.00_0.01,enc_auto/Solar%20Panel%20Roof.jpg" alt=""/></div>
                    </Slider>
                </div>
            </section>

            <section id="ask">
                <div className="row justify-between gap-20">
                    <div className="col w-50 ask-col1">
                        <div className="wrapper">
                            <div className="ask-img"><img src="https://static.wixstatic.com/media/e660359c9b8348f9869ff1de328b08cb.jpg/v1/fill/w_933,h_728,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/Red%20Roof%20Tiles.jpg" alt=""/></div>
                        </div>
                    </div>
                    <div className="col w-50 ask-col2">
                        <div className="wrapper">
                            <div className="title-2  anim-flip"><span>{t("ask-title.title")}</span></div>

                            <div className="ask1 gic anim-up delay-1">
                                <div className="as flex justify-between align-center">
                                    <div className="a">{t("ask-question.q1")}</div>
                                    <div className="plus-minus" onClick={() => setaskOpen(askOpen === 1 ? null : 1)}>
                                        {askOpen === 1 ? '-' : '+'}
                                    </div>
                                </div>
                                <div className={`answer ${askOpen === 1 ? 'open' : ''}`}>
                                    {t("ask-answer.a1")}
                                </div>
                            </div>

                            <div className="ask2 gic anim-up delay-2">
                                <div className="as flex justify-between align-center">
                                    <div className="a">{t("ask-question.q2")}</div>
                                    <div className="plus-minus" onClick={() => setaskOpen(askOpen === 2 ? null : 2)}>
                                        {askOpen === 2 ? '-' : '+'}
                                    </div>
                                </div>
                                <div className={`answer ${askOpen === 2 ? 'open' : ''}`}>
                                    {t("ask-answer.a2")}
                                </div>
                            </div>

                            <div className="ask3 gic anim-up delay-3">
                                <div className="as flex justify-between align-center">
                                    <div className="a">{t("ask-question.q3")}</div>
                                    <div className="plus-minus" onClick={() => setaskOpen(askOpen === 3 ? null : 3)}>
                                        {askOpen === 3 ? '-' : '+'}
                                    </div>
                                </div>
                                <div className={`answer ${askOpen === 3 ? 'open' : ''}`}>
                                    {t("ask-answer.a3")}
                                </div>
                            </div>

                            <div className="ask4 gic anim-up delay-4">
                                <div className="as flex justify-between align-center">
                                    <div className="a">{t("ask-question.q4")}</div>
                                    <div className="plus-minus" onClick={() => setaskOpen(askOpen === 4 ? null : 4)}>
                                        {askOpen === 4 ? '-' : '+'}
                                    </div>
                                </div>
                                <div className={`answer ${askOpen === 4 ? 'open' : ''}`}>
                                    {t("ask-answer.a4")}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ServicesM;