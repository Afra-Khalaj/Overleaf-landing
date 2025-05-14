"use client";

import { Typewriter } from 'react-simple-typewriter';
import React from 'react';

export default function TypewriterText() {
  return (
    <h1 style={{ fontSize: '4rem', fontFamily: 'Vazir', direction: 'ltr', color: '#098842', paddingInlineStart: "90px", paddingInlineEnd: "60px" }}>
      <Typewriter
        words={['Hello World! ']}
        // words={['سلام دنیا ! ']}
        loop={0} // 0 = infinite loop
        cursor
        cursorStyle=" |"
        typeSpeed={160}
        deleteSpeed={160}
        delaySpeed={2000}
      />
    </h1>
  );
}
