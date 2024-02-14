// components/EmohiFollower.js

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useFollowPointer } from "./use-follow-pointer";

const EmohiFollower = ({ emoji, offset,delay }) => {
  const ref = React.useRef();
  const [isPointerDown, setIsPointerDown] = useState(false);
  const { x, y } = useFollowPointer(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (isPointerDown) {
      controls.start({
        x: x + offset,
        y: y + offset,
        transition: { type: "spring", damping: 15, stiffness: 20 },
      });
    } else {
      controls.start({
        x: x + offset,
        y: y + offset,
        transition: { type: "spring", damping: 20, stiffness: 150,delay },
      });
    }
  }, [x, y, offset, controls, isPointerDown,delay]);

  return (
    <motion.div 
      ref={ref} 
      className="animated-emoji"
      style={{ x: x + offset, y: y + offset }}
      animate={controls}
      onMouseDown={() => setIsPointerDown(true)}
      onMouseUp={() => setIsPointerDown(true)}
      onMouseLeave={() => setIsPointerDown(false)}
    >
      {emoji}
    </motion.div>
  );
};

export default EmohiFollower;
