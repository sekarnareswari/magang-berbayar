"use client";

import React from "react";

interface ButtonProps {
    label: string;
    targetId?: string; // For scroll buttons
    link?: string; // For regular buttons
    type: "scroll" | "link"; // Type of the button
}

const Button: React.FC<ButtonProps> = ({ label, targetId, link, type }) => {
    const handleClick = () => {
        if (type === "scroll" && targetId) {
            document.getElementById(targetId)?.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    if (type === "link" && link) {
        return (
            <a
                href={link}
                className="bg-mb-green-400 hover:bg-mb-green-300 duration-200 text-white font-medium px-6 py-3 rounded-full"
            >
                {label}
            </a>
        );
    }

    return (
        <button
            onClick={handleClick}
            className="bg-mb-green-400 hover:bg-mb-green-300 duration-200 text-white font-medium px-6 py-3 rounded-full"
        >
            {label}
        </button>
    );
};

export default Button;
