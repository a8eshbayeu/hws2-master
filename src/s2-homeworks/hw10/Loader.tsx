import React from 'react';

export const Loader = () => (
    <svg width="100" height="100" viewBox="0 0 50 50">

        <defs>
            {/* Градиент вдоль окружности */}
            <linearGradient id="spinnerFade" x1="0" y1="25" x2="50" y2="25" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#8000ff" stopOpacity="1" />   {/* начало — яркое */}
                <stop offset="30%" stopColor="#8000ff" stopOpacity="0.4" /> {/* середина — полупрозрачно */}
                <stop offset="100%" stopColor="#8000ff" stopOpacity="0" />  {/* конец — полностью прозрачный */}
            </linearGradient>
        </defs>

        <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke="url(#spinnerFade)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="80 600"  // короткий яркий сегмент + прозрачный хвост
        >
            <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 25 25"
                to="360 25 25"
                dur="1s"
                repeatCount="indefinite"
            />
        </circle>
    </svg>
);
