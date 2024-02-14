import React, { useRef } from 'react'
import EmohiFollower from './EmojiFollower';

const FollowPointer = () => {
    const ref = useRef();
  return (
    <div className="follow-pointer absolute z-20" ref={ref}>
    <EmohiFollower emoji="❤️" offset={1} delay={0.009} />
    <EmohiFollower emoji="😊" offset={2} delay={0.007} />
    <EmohiFollower emoji="🌟" offset={3} delay={0.004} />
  </div>
  )
}

export default FollowPointer