import React from "react";
import { motion } from "framer-motion";
export default function CompenyList({ title }) {
    return (
        <motion.div
            className="box"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            <div className="h-32 bg-gray-800 rounded-lg">{title}</div>
        </motion.div>
    )
}
