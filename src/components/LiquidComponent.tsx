import React from "react";

const LiquidComponent: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="164"
        height="172"
        viewBox="0 0 164 172"
        fill="none"
        {...props}
    >
        <g filter="url(#filter0_dii_47_2)">
            <g clipPath="url(#clip0_47_2)">
                <rect
                    x="3"
                    y="3"
                    width="156"
                    height="164"
                    rx="10"
                    fill="white"
                    fillOpacity="0.01"
                    shapeRendering="crispEdges"
                />
                {/* foreignObject and HTML content are not supported in React SVG, so omitted */}
                <g filter="url(#filter1_g_47_2)">
                    <rect
                        x="-31"
                        y="-36"
                        width="224"
                        height="243"
                        fill="white"
                        fillOpacity="0.03"
                    />
                </g>
            </g>
        </g>
        <defs>
            <filter
                id="filter0_dii_47_2"
                x="0"
                y="0"
                width="164"
                height="172"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                />
                <feOffset dx="1" dy="1" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
                />
                <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_47_2"
                />
                <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_47_2"
                    result="shape"
                />
                <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                />
                <feOffset dx="1" dy="1" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 0.995192 0 0 0 0 0.995192 0 0 0 0.6 0"
                />
                <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect2_innerShadow_47_2"
                />
                <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                />
                <feOffset dx="-1" dy="-1" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.631373 0 0 0 0 0.631373 0 0 0 0 0.631373 0 0 0 0.666667 0"
                />
                <feBlend
                    mode="normal"
                    in2="effect2_innerShadow_47_2"
                    result="effect3_innerShadow_47_2"
                />
            </filter>
            <filter
                id="filter1_g_47_2"
                x="-71"
                y="-76"
                width="304"
                height="323"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                />
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.011111111380159855 0.011111111380159855"
                    numOctaves="3"
                    seed="5805"
                />
                <feDisplacementMap
                    in="shape"
                    scale="80"
                    xChannelSelector="R"
                    yChannelSelector="G"
                    result="displacedImage"
                    width="100%"
                    height="100%"
                />
                <feMerge result="effect1_texture_47_2">
                    <feMergeNode in="displacedImage" />
                </feMerge>
            </filter>
            <clipPath id="bgblur_1_47_2_clip_path" transform="translate(71 76)">
                <rect x="-31" y="-36" width="224" height="243" />
            </clipPath>
            <clipPath id="clip0_47_2">
                <rect x="3" y="3" width="156" height="164" rx="10" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

export default LiquidComponent;