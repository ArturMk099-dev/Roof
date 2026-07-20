import React from 'react';
import { useTranslation } from "react-i18next";
import {Link} from 'react-router-dom';
import { useAnimate } from '../hooks/useAnimate';

function AboutM(props) {
    const { t } = useTranslation("common");
    useAnimate();
    return (
      <main>
          <section id="craft">
               <div className="row justify-between">
                   <div className="col w-40 craft-col">
                       <div className="wrapper">
                           <div className="title-1 anim-flip"><span>{t("craft-info.title")}</span></div>
                           <div className="craft-txt anim-up delay-1">{t("craft-info.txt")}</div>
                       </div>
                   </div>
                   <div className="col">
                       <div className="wrapper">
                           <div className="craft-img"><img className="anim-img" src="https://static.wixstatic.com/media/c837a6_02b3203bbe7e472ca1782cfcbcdac85f~mv2.png/v1/fill/w_819,h_1019,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/untitled_Topaz%20Image%20Upscale_2026-03-25_15-08-57.png" alt=""/></div>
                       </div>
                   </div>
               </div>
          </section>
          <section id="lead">
              <div className="row justify-center align-center">
                  <div className="col w-70">
                      <div className="wrapper">
                          <div className="d flex justify-center anim-up">
                              <div className="do flex align-center justify-center gap-40">
                                  <div className="kl"></div>
                                  <div className="do-title">{t("lead-info.title")}</div>
                              </div>
                          </div>
                          <div className="do-txt text-center anim-up delay-1">{t("lead-info.txt")}</div>
                      </div>
                  </div>
              </div>
              <div className="row justify-between ">
                  <div className="col w-33 lead-col anim-up delay-1">
                      <div className="wrapper">
                           <div className="lead-img"><img src="https://static.wixstatic.com/media/c837a6_9d54f3df00204d8283b33e52038c8313~mv2.jpg/v1/fill/w_264,h_331,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ai-generated-IMAGE.jpg" alt=""/></div>
                           <div className="lead-name title-3 text-center">{t("lead-name.n1")}</div>
                           <div className="lead-job text-center">{t("lead-job.j1")}</div>
                      </div>
                  </div>
                  <div className="col w-33 lead-col anim-up delay-2">
                      <div className="wrapper">
                          <div className="lead-img"><img src="https://static.wixstatic.com/media/c837a6_7506472a9a2f4703a9167005c4dfe95e~mv2.jpg/v1/fill/w_264,h_331,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ai-generated-IMAGE.jpg" alt=""/></div>
                          <div className="lead-name title-3 text-center">{t("lead-name.n2")}</div>
                          <div className="lead-job text-center">{t("lead-job.j2")}</div>
                      </div>
                  </div>
                  <div className="col w-33 lead-col anim-up delay-3">
                      <div className="wrapper">
                          <div className="lead-img"><img src="https://static.wixstatic.com/media/c837a6_da067a473d354132bdbe3ce922f3f097~mv2.jpg/v1/fill/w_264,h_331,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ai-generated-IMAGE.jpg" alt=""/></div>
                          <div className="lead-name title-3 text-center">{t("lead-name.n3")}</div>
                          <div className="lead-job text-center">{t("lead-job.j3")}</div>
                      </div>
                  </div>
              </div>
          </section>
          <section id="safe">
              <div className="row justify-between ">
                  <div className="col w-40 safe-col">
                      <div className="wrapper">
                          <div className="title-2 anim-flip"><span>{t("safe-info.title")}</span></div>
                          <div className="safe-txt anim-up delay-1">{t("safe-info.txt")}</div>
                          <div className="safe-btn anim-up delay-2"><Link to={"/contact"}><button className="btn-orange">{t("safe-info.btn")}</button></Link></div>
                      </div>
                  </div>
                  <div className="col">
                      <div className="wrapper">
                          <div className="safe-img"><img className="anim-img" src="https://static.wixstatic.com/media/c837a6_a435f5cbde964174a13e8ba2fead9d86~mv2.jpg/v1/fill/w_786,h_885,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ai-generated-IMAGE.jpg" alt=""/></div>
                      </div>
                  </div>
              </div>
          </section>
      </main>
    );
}

export default AboutM;