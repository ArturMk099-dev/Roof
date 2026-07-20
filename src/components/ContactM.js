import React from 'react';
import { useTranslation } from "react-i18next";
import { useAnimate } from '../hooks/useAnimate';
function ContactM(props) {
    const { t } = useTranslation("common");
    useAnimate();
    return (
      <main>
          <section id="lets">
              <div className="row justify-between ">
                  <div className="col w-30 lets-col1">
                      <div className="wrapper">
                          <div className="title-2 anim-flip"><span>{t("lets-info.title")}</span></div>
                          <div className="lets-txt anim-up delay-1">{t("lets-info.txt")}</div>
                      </div>
                  </div>
                  <div className="col lets-col2">
                      <div className="wrapper">
                          <div className="cont-details let anim-up delay-1">
                              <div className="n">{t("lets-name.n1")}</div>
                              <div className="add title-3">500 Terry Francine Street, <br/>San Francisco, CA 94158</div>
                          </div>
                          <div className="direct-line let anim-up delay-2">
                              <div className="n">{t("lets-name.n2")}</div>
                              <div className="add title-3">123-456-7890</div>
                          </div>
                          <div className="email-cor let anim-up delay-3">
                              <div className="n">{t("lets-name.n3")}</div>
                              <div className="add title-3">info@mysite.com</div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section id="form">
              <div className="row justify-center  ">
                  <div className="col w-40">
                      <div className="wrapper">
                          <div className="title-2 text-center">{t("form-title.title")}</div>
                          <form >
                              <div className="f-name">
                                  <div className="form-n">{t("form-name.f-n")}</div>
                                  <input className="w-100" type="text"/>
                              </div>
                              <div className="l-name">
                                  <div className="form-n">{t("form-name.l-n")}</div>
                                  <input className="w-100" type="text"/>
                              </div>
                              <div className="em">
                                  <div className="form-n">{t("form-name.em")}</div>
                                  <input className="w-100" type='email'/>
                              </div>
                              <div className="phone">
                                  <div className="form-n">{t("form-name.ph")}</div>
                                  <input className="w-100" type="number"/>
                              </div>
                              <div className="service">
                                  <div className="form-n">{t("form-name.serv")}</div>
                                  <input className="w-100" type="text"/>
                              </div>
                              <div className="textarea">
                                  <div className="form-n">{t("form-name.answer")}</div>
                                  <textarea className="w-100"></textarea>
                              </div>
                              <div className="form-btn w-100"><button className="btn-f w-100">{t("form-name.submit")}</button></div>
                          </form>
                      </div>
                  </div>
              </div>
          </section>
      </main>
    );
}

export default ContactM;