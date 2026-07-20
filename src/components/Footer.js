import React from 'react';
import {Link} from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { useAnimate } from '../hooks/useAnimate';
function Footer(props) {
    const { t, i18n } = useTranslation("common");
    useAnimate();
    return (
         <footer>
              <section id="footer">
                   <div className="row justify-between">
                       <div className="col anim-up delay-1">
                           <div className="wrapper">
                              <Link to={"/"}>{t("menu-title.home")}</Link>
                              <Link to={"/about"}>{t("menu-title.about")}</Link>
                              <Link to={"/services"}>{t("menu-title.services")}</Link>
                              <Link to={"/contact"}>{t("menu-title.contact")}</Link>
                           </div>
                       </div>
                       <div className="col anim-up delay-2">
                           <div className="wrapper">
                               <div className="f-info foot-adres">500 Terry Francine Street, <br/>San Francisco, CA 94158</div>
                               <div className="f-info foot-tel">123-456-7890</div>
                               <div className="f-info foot-em">info@mysite.com</div>
                           </div>
                       </div>
                       <div className="col anim-up delay-3">
                           <div className="wrapper">
                               <div className="stat text-end f-info">Accessibility Statement</div>
                               <div className="pol text-end f-info">Privacy Policy</div>
                               <div className="icons flex gap-10 f-cent ">
                                   <div className="face"><i className="fa-brands fa-facebook-f"></i></div>
                                   <div className="inst"><i className="fa-brands fa-instagram"></i></div>
                                   <div className="youtube"><i className="fa-brands fa-youtube"></i></div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="row foot-row justify-center anim-up delay-4">
                       <div className="col">
                           <div className="wrapper">
                               <div className="foot-img"><img src="https://static.wixstatic.com/shapes/c837a6_47de21c40dea46a786e1ff6f44a1f146.svg" alt=""/></div>
                           </div>
                       </div>                      
                   </div>
              </section>
         </footer>
    );
}

export default Footer;