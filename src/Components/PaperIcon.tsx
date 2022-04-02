import React from 'react';
import Colors from "../Colors";
import {Highlightable, IconContainer} from "./Icons";


const PaperIcon: React.FC<Highlightable> = ({highlighted}) => {
    return (
        <IconContainer>
            <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="30" fill={highlighted ? Colors.Highlighted : Colors.BackgroundM}/>
                <path
                    d="M43.4025 15.4042C43.3592 15.2574 43.2514 15.1338 43.1051 15.0635C42.8164 14.9225 42.4585 15.0242 42.3057 15.2906C42.3053 15.2913 42.3049 15.292 42.3046 15.2926C42.3046 15.3077 39.3081 20.672 30.1097 21.6068C28.9098 21.7249 27.737 22.0138 26.6329 22.4632C24.6567 23.256 23.0246 24.6358 21.9961 26.3831C21.0359 28.0245 20.6382 29.8961 20.8557 31.7505C21.0159 33.1023 21.5051 34.4032 22.2869 35.5559C20.6531 36.6384 15.4706 40.3804 15.0033 44.3969C14.969 44.6966 15.2046 44.9653 15.5294 44.9969C15.8543 45.0286 16.1454 44.8112 16.1797 44.5115C16.6077 40.9262 21.47 37.4495 22.9862 36.4424C24.8063 38.5049 27.5315 39.6688 30.456 39.8588C32.4244 39.976 34.3951 39.6662 36.2104 38.9542C38.1809 38.1912 39.9213 36.9981 41.2818 35.4775C44.788 31.5575 46.4577 24.9689 43.4025 15.4042ZM23.326 35.0161C23.1006 34.6884 22.9018 34.3457 22.7313 33.9909C22.3725 33.2421 22.1411 32.4468 22.0451 31.6329C21.845 29.9997 22.1868 28.3488 23.0254 26.8988C23.9319 25.3614 25.3697 24.1481 27.11 23.4522C28.1049 23.0524 29.1608 22.7972 30.2404 22.6953C36.3117 22.0923 39.8832 19.5986 41.7262 17.7894C40.6434 21.079 38.7791 24.1045 36.2692 26.6455L35.9098 23.3045C35.8915 23.0035 35.6122 22.7732 35.2861 22.7901C34.96 22.807 34.7104 23.0647 34.7287 23.3656C34.7296 23.3804 34.7312 23.3953 34.7334 23.41L35.1941 27.7039C32.446 30.276 28.6262 32.8601 23.326 35.0161ZM40.3668 34.7779V34.7809C39.1307 36.1697 37.5473 37.2604 35.7529 37.9591C34.1028 38.6026 32.3119 38.8794 30.5247 38.7672C28.0366 38.6509 25.7018 37.623 24.0384 35.9117C25.9877 35.1157 27.8725 34.1916 29.6783 33.1466L34.8706 34.0512C35.1933 34.0978 35.4959 33.8942 35.5465 33.5965C35.5952 33.3093 35.3914 33.0371 35.083 32.9777L31.0932 32.2812C32.9355 31.1136 34.6503 29.7836 36.2137 28.3099C36.2423 28.2872 36.2685 28.2619 36.2921 28.2346C40.4159 24.2724 42.1706 20.3524 42.9025 17.9401C44.9219 25.8886 43.3763 31.4188 40.3668 34.7779Z"
                    fill="white"/>
            </svg>
        </IconContainer>
    );
}

export default PaperIcon;