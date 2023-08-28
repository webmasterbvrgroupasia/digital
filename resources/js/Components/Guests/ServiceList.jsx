import React from "react";
import {motion} from "framer-motion";

export default function ServiceList({ logo, title, description }) {

    return (
        <motion.div
            className="box"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            <div
                className="p-6 bg-gray-800 text-white shadow-lg shadow-neutral-800/50 space-y-[8px] rounded-lg">
                <div className="p-2 rounded-md bg-gray-700 w-fit drop-shadow-md">
                    {logo}
                </div>
                <h3 className="text-lg font-semibold">
                    {title}
                </h3>
                <p className="text-base font-normal text-gray-400">
                    {description}
                </p>
            </div>

        </motion.div>
    )
}
