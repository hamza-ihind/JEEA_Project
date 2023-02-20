import React from "react";

//framer motion
import { motion } from "framer-motion";

export default function Animation(props) {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
    >
      {props.children}
    </motion.div>
  );
}
