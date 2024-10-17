import * as React from "react";
import { cubicBezier, motion } from "framer-motion";

const openTransition = {
  duration: 1.1,
  delay: 1.2,
  ease: cubicBezier(0.6, 0.01, -0.05, 0.9),
};

const openTopTransition = {
  duration: 1.1,
  delay: 1.3,
  ease: cubicBezier(0.6, 0.01, -0.05, 0.9),
};

const openBottomTransition = {
  duration: 1.1,
  delay: 1.7,
  ease: cubicBezier(0.6, 0.01, -0.05, 0.9),
};

const closedTansition = {
  duration: 1,
  ease: cubicBezier(0.6, 0.01, -0.05, 0.9),
};

export const MobileNavigation = ({ variants, isOpen }: any) => (
  <motion.div
    data-scroll
    data-scroll-sticky
    data-scroll-target="#menu-target"
    variants={variants}
    className="menu-wrapper"
  >
    <motion.div
      animate={
        isOpen
          ? { opacity: 1, transition: openTransition }
          : { opacity: 0, transition: closedTansition }
      }
    >
      <motion.div
        animate={
          isOpen
            ? { opacity: 1, transition: openTopTransition }
            : { opacity: 0, transition: closedTansition }
        }
        className="navigation-top"
      >
        <div className="navigation-top__left">
          <h4 className="navigation-h4">DONT BE A STRANGER</h4>
          <div className="navigation-top__left--links">
            <a
              href="https://github.com/maxxx098"
              rel="noopener"
              target="_blank"
            >
              👾 GH
            </a>
            <a
              href="/"
              rel="noopener"
              target="_blank"
            >
              🐦 TW
            </a>
            <a
              href="https://www.linkedin.com/in/symonfalcatan/"
              rel="noopener"
              target="_blank"
            >
              💼 LD
            </a>
            <a
              href="https://www.instagram.com/symoncrafts/"
              rel="noopener"
              target="_blank"
            >
              📸 IN
            </a>
          </div>
          
        </div>
        <div className="navigation-top__right">
          <h4 className="navigation-h4">HAVE AN IDEA?</h4>
          <a
            href="mailto:symonfalcatan08@gmail.com"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            Tell me about it
          </a>
        </div>
      </motion.div>

      <motion.div
        animate={
          isOpen
            ? { opacity: 1, transition: openBottomTransition }
            : { opacity: 0, transition: closedTansition }
        }
        className="navigation-bottom"
      >
        <h4 className="navigation-h5">FEATURED PROJECTS</h4>
        <div style={{marginBottom:`20vh`}} className="navigation-bottom__projects">
          <div className="navigation-bottom__projects-card">
          <a
            target="_blank"
            rel="noopener"
            href="https://healthcare-seven-kappa.vercel.app/"           
          >
            <img src="webp/healthcare.webp" alt="alexxandria" />
          </a>
          <p className="name">HEALTHHCARE <br /> APP</p>
          </div>
          <div className="navigation-bottom__projects-card">
          <a
            href="https://snapgram-one.vercel.app/"
            target="_blank"
            rel="noopener"
          >
            <img src="png/snapgram.png" alt="safarika" />
          </a>
          <p className="name">SNAPGRAM <br /> APP</p>
          </div>
          <div className="navigation-bottom__projects-card">
          <a
            href="https://web3-block-chain-oyvj.vercel.app/"
            target="_blank"
            rel="noopener"           
          >
            <img src="png/blockchain_web.png" alt="adeola" />
          </a>
          <p className="name">KRYPTO <br /> 2024</p>
          </div>
          <div className="navigation-bottom__projects-card">
          <a
            href="/"
            target="_blank"
            rel="noopener"           
          >
            <img src="png/HotelManagement.png" alt="adeola" />
          </a>
          <p className="name">BORCELLE BOOKING <br /> APP</p>
          </div>
        </div>
      </motion.div>
      <footer className="footer">
         <div style={{display:`flex`}} className="footer_">
         <div>
         <img
            src="png/Logo.png"
            alt="design and devloped by sycrafts"
          />
         </div>
          <div style={{marginTop:`15px`, marginLeft:`10px`}}>
          <p style={{fontSize:`10px`, fontWeight:`800`, letterSpacing:`1px`}} className="paragraph paragraph__sub">
               FULL STACK DEVELOPMENT
              </p>
          </div>
         </div>
          <div className="footer__socials">
            <a
              href="/"
              target="_blank"
              rel="noopener"
            >
              <img src="svg/dribble.svg" alt="dribble logo" />
            </a>
            <a
              href="https://github.com/maxxx098"
              target="_blank"
              rel="noopener"
            >
              <img src="svg/github.svg" alt="github logo" />
            </a>
          </div>
        </footer>
    </motion.div>
  </motion.div>
);
