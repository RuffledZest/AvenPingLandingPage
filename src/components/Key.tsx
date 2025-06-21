import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const Key = (props: HTMLAttributes<HTMLDivElement>) => {
    const { className, children, ...rest } = props;

    return (
        <div
            className={twMerge(
                "size-14 bg-white border border-gray-300 inline-flex px-3 py-1.5 rounded-2xl text-gray-700 justify-center items-center shadow-sm",
                className
            )}
            {...rest}
        >
            {children}
        </div>
    );
};

export default Key;