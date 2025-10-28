import React from "react";

type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'black' | 'white';

interface ButtonProps {
    children: React.ReactNode;
    variant?: Variant;
    onClick?: () => void;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}

const colorMap: Record<Variant, string> = {
    primary: "#3B82F6", // blue-500
    secondary: "#A855F7", // purple-500
    success: "#22C55E", // green-500
    warning: "#F59E0B", // amber-500
    danger: "#EF4444", // red-500
    black: "#000000",
    white: "#FFFFFF",
};

function Button({
                    children,
                    variant = 'primary',
                    onClick,
                    disabled = false,
                    type = 'button',
                    className = ''
                }: ButtonProps) {
    const color = colorMap[variant];

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            // set màu động bằng inline style
            style={{
                borderColor: color,
                color: color,
            }}
            className={`relative px-6 py-3 font-semibold overflow-hidden rounded-xl cursor-pointer group transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed border-2 ${className}`}
        >
            {/* Overlay trái */}
            <span
                style={{ backgroundColor: color }}
                className="absolute inset-0 w-full h-full transform scale-x-0 origin-left rounded-tr-full rounded-br-full group-hover:scale-x-100 transition-transform duration-700 ease-in-out z-0"
            ></span>

            {/* Overlay phải */}
            <span
                style={{ backgroundColor: color }}
                className="absolute inset-0 w-full h-full transform scale-x-0 origin-right rounded-tl-full rounded-bl-full group-hover:scale-x-100 transition-transform duration-700 ease-in-out z-0"
            ></span>

            {/* Nội dung */}
            <span className="relative z-10 group-hover:text-white transition-colors duration-700">
        {children}
      </span>
        </button>
    );
}

export default Button;