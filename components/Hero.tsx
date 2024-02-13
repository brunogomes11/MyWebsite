"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, The Name's Bruno Gomes",
            "Guy-who-loves-Coffee.tsx",
            "<ButLovesToCodeMore />",
        ],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />
            <img
                className="relative rounded-full h-32 w-32 mx-auto object-cover"
                src="https://avatars.githubusercontent.com/u/70738873?v=4"
                alt=""
            />
            <div>
                <h1>
                    <span>{text}</span>
                    <Cursor cursorColor="#F7AB0A" />
                </h1>
            </div>
        </div>
    );
}
