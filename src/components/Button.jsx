import React from 'react'

const Button = ({ className="", size = "default", children, ...props }) => {
    const baseClasses = "relative overflow-hidden rounded-full font-medium focus:outline-none focus:visible-ring-2 focus:visible-ring-primary bg-primary text-primary-background hover:bg-primary/90 shadow-lg shadow-primary/25 cursor-pointer";

    const sizeClasses = {
        sm: "px-24 py-2 text-sm",
        default: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg"
    };

    const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;

    return (
        <button className={classes} {...props}>
            <span className='flex relative items-center justify-center gap-2'>
                {children}
            </span>
        </button>
    )
}

export default Button

