"use client";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import React from "react";

type Props = {};

export default function Header({}: Props) {
    return (
        <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
            <motion.div
                initial={{ x: -500, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="flex flex-row items-center"
            >
                {/* Social Icons */}

                <SocialIcon
                    url="https://www.linkedin.com/in/brunogomes11/"
                    fgColor="gray"
                    bgColor="transparent"
                />
                <SocialIcon
                    url="https://www.linkedin.com/in/brunogomes11/"
                    fgColor="gray"
                    bgColor="transparent"
                />
                <SocialIcon
                    url="https://www.linkedin.com/in/brunogomes11/"
                    fgColor="gray"
                    bgColor="transparent"
                />
            </motion.div>

            <motion.div>
                <SocialIcon
                    className="cursor-pointer"
                    network="email"
                    fgColor="gray"
                    bgColor="transparent"
                />
                <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
                    Get in Touch
                </p>
            </motion.div>
        </header>
    );
}
