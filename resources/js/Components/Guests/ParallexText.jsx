import React, { useRef } from "react";
import { useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity, motion } from "framer-motion";
import { wrap } from "@motionone/utils";
const ParallaxText = ({ children, baseVelocity = 100 }) => {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
    });

    const x = useTransform(baseX, (v) => `${wrap(-40, 20, v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    const rotation = useTransform(x, [0, 100], [0, 260]); // Adjusted rotation range


    return (
        <div className="parallax">
            <motion.div className="scroller" style={{ x }}>
                <span>{children} </span>

            </motion.div>
        </div>
    );
};

export default ParallaxText;
