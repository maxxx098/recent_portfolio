import * as React from "react";
import { cubicBezier, motion } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { MobileNavigation } from "./MobileNavigation";
import Link from "next/link";

const variants = {
  open: {
    left: 0,
    pointerEvent: "none",
    transition: {
      duration: 1,
      ease: cubicBezier(0.6, 0.01, -0.05, 0.9),
    },
  },
  closed: {
    left: "-100vw",
    pointerEvent: "none",
    transition: {
      delay: 1,
      duration: 1,
      ease: cubicBezier(0.6, 0.01, -0.05, 0.9),
    },
  },
};

export const Navigation = ({ isOpen, toggleOpen }: any) => {
  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="navigation-wrapper"
    >
      <MobileNavigation variants={variants} isOpen={isOpen} />
      <div
        data-scroll
        data-scroll-sticky
        data-scroll-target="#menu-target"
        className="menu-top"
      >
        <Link style={{textDecorationLine:`none`}} href="/" className="brand-logo">
          <img
            className="brand-logo__icon"
            src="png/Logo.png"
            alt="adeola logo icon"
          />
          <span className="brand-logo__text-wrapper">
           <p className="sy_crafts" style={{
            display:`flex`,
            color:`var(--color-gray)`,
           }}>SY CRAFTS</p>
          </span>
        </Link>
        <MenuToggle toggle={toggleOpen} toggleState={isOpen} />
      </div>
    </motion.div>
  );
};
