import React from 'react';
import { useTranslation } from "react-i18next";
import {Link} from 'react-router-dom';
import { useAnimate } from '../hooks/useAnimate';

function HomeM(props) {
    const { t } = useTranslation("common");
    useAnimate();

    return (
        <main className="home">
            <section id="hero">
                <div className="row">
                    <div className="col w-25">
                        <div className="wrapper">
                            <div className="title-1 anim-flip"><span>{t("hero-info.title")}</span></div>
                            <div className="hero-txt anim-up delay-1">{t("hero-info.txt")}</div>
                            <div className="hero-btn anim-up delay-2"><Link to={"/contact"}><button className='btn-orange'>{t("hero-info.btn")}</button></Link></div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="do">
                <div className="row justify-center align-center">
                    <div className="col w-70">
                        <div className="wrapper">
                            <div className="d flex justify-center anim-up">
                                <div className="do flex align-center justify-center gap-40">
                                    <div className="kl"></div>
                                    <div className="do-title">{t("do-info.title")}</div>
                                </div>
                            </div>
                            <div className="do-txt text-center anim-up delay-1">{t("do-info.txt")}</div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="vertex">
                <div className="row flex-wrap">
                    <div className="col w-100 vert-col">
                        <div className="wrapper flex justify-between align-center">
                            <div className="title-1 w-40 anim-flip"><span>{t("vert-info.title")}</span></div>
                            <div className="vert-btn anim-up delay-2"><Link to={"/contact"}><button className="btnlrg-orange">{t("vert-info.btn")}</button></Link></div>
                        </div>
                    </div>
                    <div className="col w-100 vert-col2">
                        <div className="wrapper flex justify-between align-center">
                            <div className="vert-img"><img className="anim-img" src="https://static.wixstatic.com/media/c837a6_59e42b17b4f346cfbb57f4e0c0aa1714~mv2.png/v1/crop/x_541,y_761,w_2876,h_1578/fill/w_386,h_213,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/image03%201.png" alt=""/></div>
                            <div className="vert-txt w-30 anim-up delay-1">{t("vert-info.txt")}</div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="spectr">
                <div className="row justify-center align-center">
                    <div className="col w-70">
                        <div className="wrapper">
                            <div className="d flex justify-center anim-up">
                                <div className="do flex align-center justify-center gap-40">
                                    <div className="kl"></div>
                                    <div className="do-title">{t("spectr-info.title")}</div>
                                </div>
                            </div>
                            <div className="do-txt text-center anim-up delay-1">{t("spectr-info.txt")}</div>
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
                <div className="row mec-row anim-up">
                    <div className="col w-100">
                        <div className="wrapper w-100">
                            <div className="mec-img"><img src="https://static.wixstatic.com/media/c837a6_e78347cbd0d54954a06c9af641c5d0fe~mv2.png/v1/fill/w_1878,h_941,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_auto/sasdxas.png" alt=""/></div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="proces">
                <div className="row justify-between">
                    <div className="col">
                        <div className="wrapper">
                            <div className="title-1 anim-flip"><span>{t("proc-info.title")}</span></div>
                            <div className="proc-img"><img className="anim-img" src="https://static.wixstatic.com/media/c837a6_a77a2757528b4e139b78e710d8f50331~mv2.png/v1/fill/w_626,h_885,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/untitled_Topaz%20Image%20Upscale_2026-03-24_15-15-45.png" alt=""/></div>
                        </div>
                    </div>
                    <div className="col proc-col w-40">
                        <div className="wrapper">
                            <div className="proc1 anim-up delay-1">
                                <div className="num"><div className="specnum">1</div></div>
                                <div className="title-3 proc-title">{t("proc-title.title1")}</div>
                                <div className="proc-txt">{t("proc-txt.txt1")}</div>
                            </div>
                            <div className="proc2 anim-up delay-2">
                                <div className="num"><div className="specnum">2</div></div>
                                <div className="title-3 proc-title">{t("proc-title.title2")}</div>
                                <div className="proc-txt">{t("proc-txt.txt2")}</div>
                            </div>
                            <div className="proc3 anim-up delay-3">
                                <div className="num"><div className="specnum">3</div></div>
                                <div className="title-3 proc-title">{t("proc-title.title3")}</div>
                                <div className="proc-txt">{t("proc-txt.txt3")}</div>
                            </div>
                            <div className="proc4 anim-up delay-4">
                                <div className="num"><div className="specnum">4</div></div>
                                <div className="title-3 proc-title">{t("proc-title.title4")}</div>
                                <div className="proc-txt">{t("proc-txt.txt4")}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="test">
                <div className="row justify-center align-center">
                    <div className="col w-70">
                        <div className="wrapper">
                            <div className="d flex justify-center anim-up">
                                <div className="do flex align-center justify-center gap-40">
                                    <div className="kl"></div>
                                    <div className="do-title">{t("test-info.title")}</div>
                                </div>
                            </div>
                            <div className="do-txt text-center anim-up delay-1">{t("test-info.txt")}</div>
                        </div>
                    </div>
                </div>
                <div className="row test-row">
                    <div className="col w-33 anim-up delay-1">
                        <div className="wrapper">
                            <div className="test-txt">{t("test-txt.txt1")}</div>
                            <div className="test-name">{t("test-name.name1")}</div>
                        </div>
                    </div>
                    <div className="col w-33 anim-up delay-2">
                        <div className="wrapper">
                            <div className="test-txt">{t("test-txt.txt2")}</div>
                            <div className="test-name">{t("test-name.name2")}</div>
                        </div>
                    </div>
                    <div className="col w-33 anim-up delay-3">
                        <div className="wrapper">
                            <div className="test-txt">{t("test-txt.txt3")}</div>
                            <div className="test-name">{t("test-name.name3")}</div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="ready">
                <div className="row justify-between">
                    <div className="col w-30 ready-col">
                        <div className="wrapper">
                            <div className="title-3 anim-flip"><span>{t("ready-info.title")}</span></div>
                            <div className="ready-txt anim-up delay-1">{t("ready-info.txt")}</div>
                            <div className="ready-btn anim-up delay-2"><Link to={"/contact"}><button className="btn-orange">{t("ready-info.btn")}</button></Link></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="wrapper">
                            <div className="ready-img"><img className="anim-img" src="https://static.wixstatic.com/media/c837a6_aecb05a36fb94de4b64b713259032371~mv2.png/v1/fill/w_786,h_885,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/untitled_Topaz%20Image%20Upscale_2026-03-24_15-43-01.png" alt=""/></div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default HomeM;