var ICONS = {"arrow": "<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" data-icon=\"arrow\"><path d=\"M5 12h14\"/><path d=\"m12 5 7 7-7 7\"/></svg>", "top": "<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" data-icon=\"top\"><path d=\"m5 12 7-7 7 7\"/><path d=\"M12 19V5\"/></svg>", "external": "<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" data-icon=\"external\"><path d=\"M7 7h10v10\"/><path d=\"M7 17 17 7\"/></svg>", "close": "<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" data-icon=\"close\"><path d=\"M18 6 6 18\"/><path d=\"m6 6 12 12\"/></svg>", "menu": "<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" data-icon=\"menu\"><path d=\"M4 5h16\"/><path d=\"M4 12h16\"/><path d=\"M4 19h16\"/></svg>", "download": "<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" data-icon=\"download\"><path d=\"M12 15V3\"/><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"/><path d=\"m7 10 5 5 5-5\"/></svg>", "sun": "<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" data-icon=\"sun\"><circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 2v2\"/><path d=\"M12 20v2\"/><path d=\"m4.93 4.93 1.41 1.41\"/><path d=\"m17.66 17.66 1.41 1.41\"/><path d=\"M2 12h2\"/><path d=\"M20 12h2\"/><path d=\"m6.34 17.66-1.41 1.41\"/><path d=\"m19.07 4.93-1.41 1.41\"/></svg>", "moon": "<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" data-icon=\"moon\"><path d=\"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401\"/></svg>", "trend": "<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" data-icon=\"trend\"><path d=\"M16 7h6v6\"/><path d=\"m22 7-8.5 8.5-5-5L2 17\"/></svg>", "shield": "<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" data-icon=\"shield\"><path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\"/><path d=\"m9 12 2 2 4-4\"/></svg>", "statement": "<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" data-icon=\"statement\"><path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"M10 9H8\"/><path d=\"M16 13H8\"/><path d=\"M16 17H8\"/></svg>", "build": "<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" data-icon=\"build\"><path d=\"M12 5v14\"/><path d=\"m18.065 8.496-12.125 7\"/><path d=\"m5.94 8.504 12.125 7\"/></svg>", "tier-foundation": "<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" data-icon=\"tier-foundation\"><path d=\"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z\"/><path d=\"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12\"/><path d=\"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17\"/></svg>", "tier-office": "<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" data-icon=\"tier-office\"><path d=\"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z\"/><path d=\"M5 21h14\"/></svg>", "tier-pro": "<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" data-icon=\"tier-pro\"><path d=\"M10.5 3 8 9l4 13 4-13-2.5-6\"/><path d=\"M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z\"/><path d=\"M2 9h20\"/></svg>", "present": "<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" data-icon=\"present\"><path d=\"M2 3h20\"/><path d=\"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3\"/><path d=\"m7 21 5-5 5 5\"/></svg>", "check": "<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" data-icon=\"check\"><path d=\"M20 6 9 17l-5-5\"/></svg>", "chevron": "<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" data-icon=\"chevron\"><path d=\"m6 9 6 6 6-6\"/></svg>", "next": "<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" data-icon=\"next\"><path d=\"m9 18 6-6-6-6\"/></svg>", "info": "<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" data-icon=\"info\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 16v-4\"/><path d=\"M12 8h.01\"/></svg>", "alert": "<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" data-icon=\"alert\"><path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3\"/><path d=\"M12 9v4\"/><path d=\"M12 17h.01\"/></svg>", "search": "<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" data-icon=\"search\"><path d=\"m21 21-4.34-4.34\"/><circle cx=\"11\" cy=\"11\" r=\"8\"/></svg>", "plus": "<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" data-icon=\"plus\"><path d=\"M5 12h14\"/><path d=\"M12 5v14\"/></svg>", "lock": "<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" data-icon=\"lock\"><rect width=\"18\" height=\"11\" x=\"3\" y=\"11\" rx=\"2\" ry=\"2\"/><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"/></svg>", "calendar": "<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" data-icon=\"calendar\"><path d=\"M8 2v3\"/><path d=\"M16 2v3\"/><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"/><path d=\"M3 9h18\"/></svg>", "eye": "<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" data-icon=\"eye\"><path d=\"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/></svg>", "settings": "<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" data-icon=\"settings\"><path d=\"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/></svg>", "user": "<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" data-icon=\"user\"><path d=\"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2\"/><circle cx=\"12\" cy=\"7\" r=\"4\"/></svg>", "users": "<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" data-icon=\"users\"><path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"/><path d=\"M16 3.128a4 4 0 0 1 0 7.744\"/><path d=\"M22 21v-2a4 4 0 0 0-3-3.87\"/><circle cx=\"9\" cy=\"7\" r=\"4\"/></svg>", "home": "<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" data-icon=\"home\"><path d=\"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8\"/><path d=\"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"/></svg>", "chart": "<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" data-icon=\"chart\"><path d=\"M3 3v16a2 2 0 0 0 2 2h16\"/><path d=\"m19 9-5 5-4-4-3 3\"/></svg>", "wallet": "<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" data-icon=\"wallet\"><path d=\"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1\"/><path d=\"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4\"/></svg>", "learn": "<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" data-icon=\"learn\"><path d=\"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z\"/><path d=\"M22 10v6\"/><path d=\"M6 12.5V16a6 3 0 0 0 12 0v-3.5\"/></svg>", "bell": "<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" data-icon=\"bell\"><path d=\"M10.268 21a2 2 0 0 0 3.464 0\"/><path d=\"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326\"/></svg>", "sidebar": "<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" data-icon=\"sidebar\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M9 3v18\"/></svg>", "more": "<svg class=\"ic\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" data-icon=\"more\"><circle cx=\"12\" cy=\"12\" r=\"1\"/><circle cx=\"19\" cy=\"12\" r=\"1\"/><circle cx=\"5\" cy=\"12\" r=\"1\"/></svg>"};
var SECTION_ICONS = {"pr-together": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"7.6\" cy=\"12.4\" r=\"2.3\"/> <circle cx=\"16.4\" cy=\"12.4\" r=\"2.3\"/> <path d=\"M3.9 20v-.5a3.7 3.7 0 0 1 7.4 0V20\"/> <path d=\"M12.7 20v-.5a3.7 3.7 0 0 1 7.4 0V20\"/> <path d=\"M12 3.1A5.734 5.734 0 0 1 13.9 5A5.734 5.734 0 0 1 12 6.9A5.734 5.734 0 0 1 10.1 5A5.734 5.734 0 0 1 12 3.1Z\" fill=\"currentColor\" stroke=\"none\"/></svg>", "pi-decisions": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"8\" width=\"12.6\" height=\"12.6\" rx=\"4\"/> <path d=\"M6.5 14.4 9 16.9 13.5 11.6\"/> <path d=\"M8 8V6.6A2.6 2.6 0 0 1 10.6 4h7.8A2.6 2.6 0 0 1 21 6.6V15a2.6 2.6 0 0 1-2.6 2.6h-2.8\"/></svg>", "pr-grow": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3.6\" y=\"13.6\" width=\"3.8\" height=\"6.8\" rx=\"1.9\"/> <rect x=\"9.1\" y=\"10.4\" width=\"3.8\" height=\"10\" rx=\"1.9\"/> <rect x=\"14.6\" y=\"7\" width=\"3.8\" height=\"13.4\" rx=\"1.9\"/> <path d=\"M16.5 1.6A5.734 5.734 0 0 1 18.4 3.5A5.734 5.734 0 0 1 16.5 5.4A5.734 5.734 0 0 1 14.6 3.5A5.734 5.734 0 0 1 16.5 1.6Z\" fill=\"currentColor\" stroke=\"none\"/></svg>", "pr-protect": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 3.2 4.8 6v5.6c0 4.4 3 7.1 7.2 8.6 4.2-1.5 7.2-4.2 7.2-8.6V6Z\"/> <path d=\"M12 9.1A6.941 6.941 0 0 1 14.3 11.4A6.941 6.941 0 0 1 12 13.7A6.941 6.941 0 0 1 9.7 11.4A6.941 6.941 0 0 1 12 9.1Z\" fill=\"currentColor\" stroke=\"none\"/></svg>", "pi-nextgen": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"8.5\" cy=\"7.9\" r=\"3\"/> <path d=\"M3.2 19.4a5.3 5.3 0 0 1 10.6 0\"/> <circle cx=\"17.6\" cy=\"12.6\" r=\"1.9\"/> <path d=\"M14.4 19.4a3.2 3.2 0 0 1 6.4 0\"/> <path d=\"M17.6 6.9A4.225 4.225 0 0 1 19.0 8.3A4.225 4.225 0 0 1 17.6 9.7A4.225 4.225 0 0 1 16.2 8.3A4.225 4.225 0 0 1 17.6 6.9Z\" fill=\"currentColor\" stroke=\"none\"/></svg>", "pi-identities": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"7.7\" cy=\"8.8\" r=\"2.7\"/> <path d=\"M2.9 19.4a4.8 4.8 0 0 1 9.6 0\"/> <circle cx=\"16.3\" cy=\"8.8\" r=\"2.7\"/> <path d=\"M11.5 19.4a4.8 4.8 0 0 1 9.6 0\"/></svg>", "fi-wealth": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 6h13\"/> <path d=\"M4 10.7h16\"/> <path d=\"M4 15.3h11\"/> <path d=\"M4 20h14\"/></svg>", "pi-maps": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"4.6\" width=\"18\" height=\"14.8\" rx=\"4\"/> <path d=\"M12 16.6c2.4-3 3.7-5 3.7-6.7a3.7 3.7 0 0 0-7.4 0c0 1.7 1.3 3.7 3.7 6.7Z\"/> <path d=\"M12 8.65A3.772 3.772 0 0 1 13.25 9.9A3.772 3.772 0 0 1 12 11.15A3.772 3.772 0 0 1 10.75 9.9A3.772 3.772 0 0 1 12 8.65Z\" fill=\"currentColor\" stroke=\"none\"/></svg>", "fi-family": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"9\" cy=\"8.6\" r=\"3\"/> <path d=\"M3.9 18.4a5.1 5.1 0 0 1 10.2 0\"/> <circle cx=\"17\" cy=\"9.6\" r=\"2.4\"/> <path d=\"M14.6 18.4a3.5 3.5 0 0 1 6.4 0\"/></svg>", "ri-capital": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><ellipse cx=\"12\" cy=\"6.5\" rx=\"7.5\" ry=\"3\"/> <path d=\"M4.5 6.5v9c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-9\"/> <path d=\"M4.5 11c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3\"/></svg>", "ri-liquidity": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8.2 3.9v3c0 1 .4 1.9 1.1 2.6L12 12l-2.7 2.5c-.7.7-1.1 1.6-1.1 2.6v3\"/> <path d=\"M15.8 3.9v3c0 1-.4 1.9-1.1 2.6L12 12l2.7 2.5c.7.7 1.1 1.6 1.1 2.6v3\"/> <path d=\"M6.6 3.9h10.8\"/> <path d=\"M6.6 20.1h10.8\"/> <path d=\"M12 10.5A4.527 4.527 0 0 1 13.5 12A4.527 4.527 0 0 1 12 13.5A4.527 4.527 0 0 1 10.5 12A4.527 4.527 0 0 1 12 10.5Z\" fill=\"currentColor\" stroke=\"none\"/></svg>", "pi-wealthmap": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"2.8\"/> <circle cx=\"12\" cy=\"4.6\" r=\"1.9\"/> <circle cx=\"4.8\" cy=\"17.4\" r=\"1.9\"/> <circle cx=\"19.2\" cy=\"17.4\" r=\"1.9\"/> <path d=\"M12 9.2V6.5\"/> <path d=\"M9.8 13.8 6.4 16.2\"/> <path d=\"M14.2 13.8 17.6 16.2\"/> <path d=\"M12 10.5A4.527 4.527 0 0 1 13.5 12A4.527 4.527 0 0 1 12 13.5A4.527 4.527 0 0 1 10.5 12A4.527 4.527 0 0 1 12 10.5Z\" fill=\"currentColor\" stroke=\"none\"/></svg>", "pi-protection": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 3.2 4.8 6v5.6c0 4.4 3 7.1 7.2 8.6 4.2-1.5 7.2-4.2 7.2-8.6V6Z\"/></svg>", "pi-structure": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"9\" y=\"3\" width=\"6\" height=\"5\" rx=\"2\"/> <rect x=\"3\" y=\"16\" width=\"6\" height=\"5\" rx=\"2\"/> <rect x=\"15\" y=\"16\" width=\"6\" height=\"5\" rx=\"2\"/> <path d=\"M12 8v4\"/> <path d=\"M6 16v-4h12v4\"/> <path d=\"M12 4.15A4.074 4.074 0 0 1 13.35 5.5A4.074 4.074 0 0 1 12 6.85A4.074 4.074 0 0 1 10.65 5.5A4.074 4.074 0 0 1 12 4.15Z\" fill=\"currentColor\" stroke=\"none\"/></svg>", "fi-invest": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3.6\" y=\"3.6\" width=\"7.4\" height=\"7.4\" rx=\"2.4\"/> <rect x=\"13\" y=\"3.6\" width=\"7.4\" height=\"7.4\" rx=\"2.4\"/> <rect x=\"3.6\" y=\"13\" width=\"7.4\" height=\"7.4\" rx=\"2.4\"/> <rect x=\"13\" y=\"13\" width=\"7.4\" height=\"7.4\" rx=\"2.4\"/></svg>", "pi-wills": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M13.9 3.6H8.2A2.6 2.6 0 0 0 5.6 6.2v11.6a2.6 2.6 0 0 0 2.6 2.6h7.6a2.6 2.6 0 0 0 2.6-2.6V8.1z\"/> <path d=\"M13.9 3.6v4.5h4.5\"/> <path d=\"M9 12h6\"/> <path d=\"M12 15.0A4.829 4.829 0 0 1 13.6 16.6A4.829 4.829 0 0 1 12 18.2A4.829 4.829 0 0 1 10.4 16.6A4.829 4.829 0 0 1 12 15.0Z\" fill=\"currentColor\" stroke=\"none\"/></svg>", "pi-filings": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M13.9 3.6H8.2A2.6 2.6 0 0 0 5.6 6.2v11.6a2.6 2.6 0 0 0 2.6 2.6h7.6a2.6 2.6 0 0 0 2.6-2.6V8.1z\"/> <path d=\"M13.9 3.6v4.5h4.5\"/> <path d=\"M9 12.8h6\"/> <path d=\"M9 16.2h3.6\"/></svg>", "fi-learn": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"6\" cy=\"18\" r=\"2.4\"/> <circle cx=\"18\" cy=\"6\" r=\"2.4\"/> <path d=\"M7.9 16.1 16.1 7.9\" stroke-dasharray=\"2.2 2.6\"/></svg>", "pr-forward": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M13.6 12h5.8\"/> <path d=\"M16.7 9.3 19.4 12 16.7 14.7\"/> <path d=\"M8 9A9.054 9.054 0 0 1 11 12A9.054 9.054 0 0 1 8 15A9.054 9.054 0 0 1 5 12A9.054 9.054 0 0 1 8 9Z\" fill=\"currentColor\" stroke=\"none\"/></svg>", "pi-timeline": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 12h18\"/> <circle cx=\"5.2\" cy=\"12\" r=\"2.1\"/> <path d=\"M9.6 9.4v5.2\"/> <path d=\"M14.1 9.4v5.2\"/> <path d=\"M18.6 9.4v5.2\"/> <path d=\"M5.2 10.85A3.471 3.471 0 0 1 6.35 12A3.471 3.471 0 0 1 5.2 13.15A3.471 3.471 0 0 1 4.05 12A3.471 3.471 0 0 1 5.2 10.85Z\" fill=\"currentColor\" stroke=\"none\"/></svg>", "pi-agreements": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10.4 7.4H6A2.6 2.6 0 0 0 3.4 10v7.9A2.6 2.6 0 0 0 6 20.5h6a2.6 2.6 0 0 0 2.6-2.6v-6.9z\"/> <path d=\"M10.4 7.4 14.6 11.6h-4.2z\"/> <path d=\"M8 7.4V6.1A2.6 2.6 0 0 1 10.6 3.5h4.9L20.6 8.6v7.3a2.6 2.6 0 0 1-2.6 2.6h-3.4\"/> <path d=\"M15.5 3.5v5.1h5.1\"/></svg>", "fi-decide": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7.9 12.2 10.9 15.2 16.1 9.3\"/> <rect x=\"3.6\" y=\"3.6\" width=\"16.8\" height=\"16.8\" rx=\"5\"/></svg>", "pi-balance": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"4.2\" y=\"4.4\" width=\"13.2\" height=\"4.8\" rx=\"2.4\"/> <rect x=\"4.2\" y=\"14.8\" width=\"8.6\" height=\"4.8\" rx=\"2.4\"/> <path d=\"M3 12h18\"/> <path d=\"M19.2 10.3A5.131 5.131 0 0 1 20.9 12A5.131 5.131 0 0 1 19.2 13.7A5.131 5.131 0 0 1 17.5 12A5.131 5.131 0 0 1 19.2 10.3Z\" fill=\"currentColor\" stroke=\"none\"/></svg>", "pi-paths": "<svg width=\"48\" height=\"48\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"5.6\" cy=\"18\" r=\"2.1\"/> <circle cx=\"12\" cy=\"12.4\" r=\"2.1\"/> <circle cx=\"18.4\" cy=\"6.6\" r=\"2.1\"/> <path d=\"M7.4 16.5 10.3 14\"/> <path d=\"M13.8 10.9 16.7 8.2\"/> <path d=\"M18.4 5.45A3.471 3.471 0 0 1 19.55 6.6A3.471 3.471 0 0 1 18.4 7.75A3.471 3.471 0 0 1 17.25 6.6A3.471 3.471 0 0 1 18.4 5.45Z\" fill=\"currentColor\" stroke=\"none\"/></svg>"};
/* the mark exactly as the site's bar draws it (design/source/index.html, .nav .brand) — currentColor, so the bar sets its colour */
var MARK = "<svg class=\"mark\" viewBox=\"38.75 38.75 50.5 50.5\" fill=\"none\" aria-hidden=\"true\"><circle cx=\"57\" cy=\"57\" r=\"16.5\" stroke=\"currentColor\" stroke-width=\"1.5\"/><circle cx=\"71\" cy=\"57\" r=\"16.5\" stroke=\"currentColor\" stroke-width=\"1.5\"/><circle cx=\"71\" cy=\"71\" r=\"16.5\" stroke=\"currentColor\" stroke-width=\"1.5\"/><circle cx=\"57\" cy=\"71\" r=\"16.5\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M64 56.06 A16.5 16.5 0 0 1 71.94 64 A16.5 16.5 0 0 1 64 71.94 A16.5 16.5 0 0 1 56.06 64 A16.5 16.5 0 0 1 64 56.06 Z\" fill=\"currentColor\"/></svg>";

/* ══ THE JOHNSEN HOUSEHOLD — invented sample data for the mockup ═══════════════════════
   Nobody here is real, and no institution named here is a real one. A US household in
   Edina, Minnesota; figures are in US dollars. The tutorial was finished on Sep 2, 2026
   and the first week's cards have all been done. The demo date is fixed at Sep 24, 2026.
   Valuations are append-only: the latest row for a line is its current value. */
var DEMO_TODAY = '2026-09-24';

var SEED = {
  version: 11,
  viewer: 'm1',
  household: { name: 'The Johnsen household', base: 'USD', plan: 'free', city: 'Edina, Minnesota', opened: '2026-09-02', tutorialDone: '2026-09-02' },

  members: [
    { id: 'm1', name: 'Michael Johnsen', role: 'owner', email: 'michael@johnsen.example', joined: '2026-09-02' },
    { id: 'm2', name: 'Lauren Johnsen', role: 'partner', email: 'lauren@johnsen.example', joined: '2026-09-03' }
  ],
  people: [
    { id: 'p1', name: 'Michael Johnsen', born: 1975, relationship: 'Owner', dependant: false, member: 'm1' },
    { id: 'p2', name: 'Lauren Johnsen', born: 1978, relationship: 'Spouse', dependant: false, member: 'm2' },
    { id: 'p3', name: 'Emma Johnsen', born: 2006, relationship: 'Daughter · at college in Madison, Wisconsin', dependant: true },
    { id: 'p4', name: 'Oscar Johnsen', born: 2011, relationship: 'Son · in high school', dependant: true },
    { id: 'p5', name: 'Ruth Johnsen', born: 1947, relationship: "Michael's mother", dependant: false }
  ],
  /* how the people are related (person_relation, build spec R11): parent = a is b's parent.
     Entered once in Records › Family; the tree in Succession reads the same rows. A partner row
     carries whether the two are married (status: married, civil or unmarried; 3 Oct 2026). */
  relations: [
    { a: 'p1', b: 'p2', kind: 'partner', status: 'married' },
    { a: 'p5', b: 'p1', kind: 'parent' },
    { a: 'p1', b: 'p3', kind: 'parent' }, { a: 'p2', b: 'p3', kind: 'parent' },
    { a: 'p1', b: 'p4', kind: 'parent' }, { a: 'p2', b: 'p4', kind: 'parent' }
  ],

  /* class = how the line is kept; mix = look-through into the chart classes
     (equities, fixed, cash, private, property, real) used by the policy and the map.
     program = the tax wrapper it sits in; heldAt = where it is held when that is not the
     institution; positions = the single investments inside it, as shares of the line's value
     from its latest statement (values are always computed from the valuation, never typed). */
  assets: [
    { id: 'a1', name: 'Home, Edina', cls: 'property', holder: 'Joint', country: 'United States', currency: 'USD', mix: { property: 1 }, liquidity: 'Property', docs: ['d1'] },
    { id: 'a2', name: 'Lake cabin, Gull Lake', cls: 'property', holder: 'Joint', country: 'United States', currency: 'USD', mix: { property: 1 }, liquidity: 'Property', docs: [] },
    { id: 'a3', program: 'Bank deposits', positions: [{ n: 'Checking balance', c: 'cash', w: 1 }], name: 'Joint checking', cls: 'cash', holder: 'Joint', country: 'United States', currency: 'USD', mix: { cash: 1 }, liquidity: 'Cash', institution: 'Birchwood Bank', docs: [] },
    { id: 'a4', program: 'Bank deposits', positions: [{ n: 'High-yield savings', c: 'cash', w: 1 }], name: 'Emergency savings', cls: 'cash', holder: 'Joint', country: 'United States', currency: 'USD', mix: { cash: 1 }, liquidity: 'Cash', institution: 'Birchwood Bank', docs: [] },
    { id: 'a5', program: 'Taxable brokerage', positions: [{ n: 'US total market index fund', c: 'equities', w: 0.46 }, { n: 'International developed index fund', c: 'equities', w: 0.22 }, { n: 'Individual shares · 11 companies', c: 'equities', w: 0.15 }, { n: 'US small-company index fund', c: 'equities', w: 0.10 }, { n: 'Emerging markets index fund', c: 'equities', w: 0.07 }], name: 'Brokerage account', cls: 'listed', holder: 'Michael', country: 'United States', currency: 'USD', mix: { equities: 1 }, liquidity: 'Listed shares', institution: 'Lakeview Brokerage', fee: 0.25, docs: ['d5'] },
    { id: 'a6', program: 'Employee stock plan', positions: [{ n: 'Employer shares · one company', c: 'equities', w: 1 }], name: 'Employer stock (RSUs), vested', cls: 'listed', holder: 'Lauren', country: 'United States', currency: 'USD', mix: { equities: 1 }, liquidity: 'Listed shares', institution: 'Employee stock plan', fee: 0, singleCompany: true, docs: ['d10'] },
    { id: 'a7', program: 'SEP IRA', positions: [{ n: 'US total market index fund', c: 'equities', w: 0.36 }, { n: 'International developed index fund', c: 'equities', w: 0.16 }, { n: 'US real estate index fund', c: 'equities', w: 0.08 }, { n: 'US aggregate bond index fund', c: 'fixed', w: 0.28 }, { n: 'Short-term Treasury fund', c: 'fixed', w: 0.12 }], name: 'SEP IRA', cls: 'pension', holder: 'Michael', country: 'United States', currency: 'USD', mix: { equities: 0.6, fixed: 0.4 }, liquidity: 'Listed shares', institution: 'Lakeview Brokerage', fee: 0.35, docs: ['d3'] },
    { id: 'a8', program: '401(k)', positions: [{ n: 'US large-company index fund', c: 'equities', w: 0.40 }, { n: 'International index fund', c: 'equities', w: 0.15 }, { n: 'US mid- and small-company fund', c: 'equities', w: 0.10 }, { n: 'Core bond fund', c: 'fixed', w: 0.25 }, { n: 'Stable value fund', c: 'fixed', w: 0.10 }], name: '401(k)', cls: 'pension', holder: 'Lauren', country: 'United States', currency: 'USD', mix: { equities: 0.65, fixed: 0.35 }, liquidity: 'Listed shares', institution: 'Employer 401(k) plan', fee: 0.45, docs: ['d4'] },
    { id: 'a9', program: 'Taxable brokerage', positions: [{ n: 'US Treasury note · 2027', c: 'fixed', w: 0.25 }, { n: 'US Treasury note · 2028', c: 'fixed', w: 0.25 }, { n: 'US Treasury note · 2029', c: 'fixed', w: 0.25 }, { n: 'US Treasury note · 2030', c: 'fixed', w: 0.25 }], name: 'Treasury ladder', cls: 'bonds', holder: 'Michael', country: 'United States', currency: 'USD', mix: { fixed: 1 }, liquidity: 'Government bonds', institution: 'Lakeview Brokerage', fee: 0, docs: [] },
    { id: 'a10', name: 'Johnsen Advisory LLC', cls: 'private', holder: 'Michael · 100%', country: 'United States', currency: 'USD', mix: { private: 1 }, liquidity: 'Private markets', company: true, docs: ['d8'], note: 'His consulting firm. Value is the owner’s equity in the 2025 financial statements.' },
    { id: 'a11', program: 'Limited partnership', heldAt: 'Lakes Seed Fund II', positions: [{ n: 'Limited partner interest', c: 'private', w: 1 }], name: 'Lakes Seed Fund II', cls: 'private', holder: 'Joint', country: 'United States', currency: 'USD', mix: { private: 1 }, liquidity: 'Private markets', institution: 'Limited partner interest', fee: 2.0, docs: ['d9'] },
    { id: 'a12', name: 'Art and prints', cls: 'valuables', holder: 'Lauren', country: 'United States', currency: 'USD', mix: { real: 1 }, liquidity: 'Property', docs: [] },
    { id: 'a13', name: 'Car, Toyota Highlander', cls: 'vehicle', holder: 'Joint', country: 'United States', currency: 'USD', mix: { real: 1 }, liquidity: 'Property', docs: [] },
    { id: 'a14', program: '529 plan', positions: [{ n: 'US equity index portfolio', c: 'equities', w: 0.45 }, { n: 'International equity index portfolio', c: 'equities', w: 0.25 }, { n: 'Bond index portfolio', c: 'fixed', w: 0.30 }], name: '529 plan for Oscar', cls: 'education', holder: 'Michael', country: 'United States', currency: 'USD', mix: { equities: 0.7, fixed: 0.3 }, liquidity: 'Listed shares', institution: 'State 529 plan', fee: 0.3, docs: [] }
  ],

  liabilities: [
    { id: 'l1', name: 'Mortgage on the home', type: 'Mortgage', lender: 'Birchwood Bank', securedOn: 'a1', rate: 2.9, rateType: '5/1 ARM · fixed until January 2027, then adjusts yearly', reset: '2027-01-01', maturity: '2051-12-01', kind: 'drawn', docs: ['d2'] },
    { id: 'l2', name: 'Home equity line (HELOC)', type: 'Home equity line', lender: 'Birchwood Bank', securedOn: 'a1', rate: 8.25, rateType: 'Variable · prime plus 0.75', reset: '', maturity: '2034-06-30', kind: 'drawn', docs: [] },
    { id: 'l3', name: 'Mortgage on the lake cabin', type: 'Mortgage', lender: 'Lakes Credit Union', securedOn: 'a2', rate: 4.1, rateType: 'Fixed · 30 years', reset: '', maturity: '2048-10-01', kind: 'drawn', docs: [] },
    { id: 'l4', name: 'Car loan', type: 'Loan', lender: 'Auto lender', securedOn: 'a13', rate: 6.9, rateType: 'Fixed', reset: '', maturity: '2028-06-30', kind: 'drawn', docs: [] },
    { id: 'l5', name: 'Lakes Seed Fund II, not yet called', type: 'Capital commitment', lender: 'Lakes Seed Fund II', securedOn: 'a11', rate: 0, rateType: '—', reset: '', maturity: '2030-12-31', kind: 'commitment', committed: 75000, docs: ['d9'] }
  ],

  valuations: [
    { line: 'a1', amount: 1450000, asOf: '2026-03-15', source: 'document', ref: 'd1', by: 'Michael', reason: 'Appraisal', at: '2026-09-02' },
    { line: 'a2', amount: 520000, asOf: '2025-06-20', source: 'entered', ref: '', by: 'Michael', reason: 'Our own estimate after the cabin next door sold', at: '2026-09-02' },
    { line: 'a3', amount: 36800, asOf: '2026-09-02', source: 'entered', ref: '', by: 'Michael', reason: 'Entered in the tutorial', at: '2026-09-02' },
    { line: 'a3', amount: 41500, asOf: '2026-09-19', source: 'statement', ref: '', by: 'Lauren', reason: 'From the September statement', at: '2026-09-19' },
    { line: 'a4', amount: 95000, asOf: '2026-09-19', source: 'statement', ref: '', by: 'Lauren', reason: 'From the September statement', at: '2026-09-19' },
    { line: 'a5', amount: 357000, asOf: '2026-09-02', source: 'entered', ref: '', by: 'Michael', reason: 'Entered in the tutorial', at: '2026-09-02' },
    { line: 'a5', amount: 380000, asOf: '2026-09-15', source: 'statement', ref: 'd5', by: 'Michael', reason: 'Monthly statement', at: '2026-09-15' },
    { line: 'a6', amount: 98000, asOf: '2026-09-02', source: 'entered', ref: '', by: 'Lauren', reason: 'Entered in the tutorial', at: '2026-09-03' },
    { line: 'a6', amount: 134000, asOf: '2026-09-12', source: 'document', ref: 'd10', by: 'Lauren', reason: 'A tranche vested on September 12', at: '2026-09-12' },
    { line: 'a7', amount: 548000, asOf: '2026-06-30', source: 'statement', ref: 'd3', by: 'Michael', reason: 'Quarterly statement', at: '2026-09-02' },
    { line: 'a8', amount: 372000, asOf: '2026-06-30', source: 'statement', ref: 'd4', by: 'Lauren', reason: 'Quarterly statement', at: '2026-09-03' },
    { line: 'a9', amount: 165000, asOf: '2026-09-15', source: 'statement', ref: '', by: 'Michael', reason: 'Monthly statement', at: '2026-09-15' },
    { line: 'a10', amount: 225000, asOf: '2025-12-31', source: 'document', ref: 'd8', by: 'Michael', reason: 'Owner’s equity in the 2025 financial statements', at: '2026-09-02' },
    { line: 'a11', amount: 45000, asOf: '2026-06-30', source: 'statement', ref: 'd9', by: 'Michael', reason: 'Quarterly report from the fund', at: '2026-09-02' },
    { line: 'a12', amount: 27000, asOf: '2024-11-02', source: 'entered', ref: '', by: 'Lauren', reason: 'Insurance appraisal', at: '2026-09-03' },
    { line: 'a13', amount: 38000, asOf: '2026-01-10', source: 'entered', ref: '', by: 'Michael', reason: 'Dealer trade-in quote', at: '2026-09-02' },
    { line: 'a14', amount: 58000, asOf: '2026-06-30', source: 'statement', ref: '', by: 'Michael', reason: 'Quarterly statement', at: '2026-09-02' },
    { line: 'l1', amount: 640000, asOf: '2026-09-01', source: 'statement', ref: 'd2', by: 'Michael', reason: 'Monthly statement', at: '2026-09-02' },
    { line: 'l2', amount: 58000, asOf: '2026-09-01', source: 'statement', ref: '', by: 'Michael', reason: 'Online banking', at: '2026-09-02' },
    { line: 'l3', amount: 185000, asOf: '2026-09-01', source: 'statement', ref: '', by: 'Michael', reason: 'Monthly statement', at: '2026-09-02' },
    { line: 'l4', amount: 21000, asOf: '2026-09-01', source: 'entered', ref: '', by: 'Michael', reason: 'From the lender’s app', at: '2026-09-02' },
    { line: 'l5', amount: 30000, asOf: '2026-06-30', source: 'statement', ref: 'd9', by: 'Michael', reason: 'Uncalled part of the $75,000 commitment', at: '2026-09-02' }
  ],

  documents: [
    { id: 'd1', name: 'Appraisal — Home, Edina', cat: 'Ownership', date: '2026-03-15', size: '1.2 MB', original: 'Digital only', lines: ['a1'], summary: 'An appraisal of the home at $1,450,000, dated March 15, 2026 (page 1). It compares three recent sales in the neighborhood (page 2) and notes the kitchen was renovated in 2019 (page 3).' },
    { id: 'd2', name: 'Mortgage note — home (5/1 ARM)', cat: 'Agreements', date: '2021-11-04', size: '0.8 MB', original: 'Filing cabinet, study', lines: ['l1'], summary: 'A 5/1 adjustable-rate mortgage of $720,000 on the home (page 1). The rate is fixed at 2.9% until January 1, 2027, then adjusts once a year (page 4). There is no prepayment penalty (page 6).' },
    { id: 'd3', name: 'SEP IRA statement Q2 2026 — Michael', cat: 'Statements', date: '2026-06-30', size: '0.4 MB', original: 'Digital only', lines: ['a7'], summary: 'Michael’s SEP IRA at $548,000 on June 30, 2026 (page 1). About 60% is in stock funds and 40% in bond funds (page 2). Lauren is the named beneficiary (page 3).' },
    { id: 'd4', name: '401(k) statement Q2 2026 — Lauren', cat: 'Statements', date: '2026-06-30', size: '0.4 MB', original: 'Digital only', lines: ['a8'], summary: '' },
    { id: 'd5', name: 'Brokerage account — September statement', cat: 'Statements', date: '2026-09-15', size: '0.2 MB', original: 'Digital only', lines: ['a5'], summary: '' },
    { id: 'd6', name: 'Homeowners policy 2025–26 — Edina', cat: 'Insurance', date: '2025-10-15', size: '0.6 MB', original: 'Digital only', lines: [], summary: 'Homeowners cover on the Edina home, with dwelling coverage of $1,050,000 (page 1). The policy renews on October 15, 2026 (page 2). The dwelling limit was last set in 2023 (page 2).' },
    { id: 'd7', name: 'Wills (copies)', cat: 'Estate', date: '2016-05-12', size: '0.3 MB', original: 'Holm & Reed LLP, Minneapolis', lines: [], summary: '' },
    { id: 'd8', name: 'Johnsen Advisory LLC — 2025 financial statements', cat: 'Statements', date: '2026-03-30', size: '1.9 MB', original: 'Digital only', lines: ['a10'], summary: '' },
    { id: 'd9', name: 'Lakes Seed Fund II — subscription agreement', cat: 'Agreements', date: '2024-02-01', size: '2.4 MB', original: 'Filing cabinet, study', lines: ['a11', 'l5'], summary: '' },
    { id: 'd10', name: 'RSU vesting confirmation', cat: 'Statements', date: '2026-09-12', size: '0.1 MB', original: 'Digital only', lines: ['a6'], summary: '' }
  ],

  advisers: [
    { id: 'v1', name: 'Andrew Holm', firm: 'Holm & Reed LLP', role: 'Estate attorney', covers: ['Succession', 'Governance'], contact: 'andrew.holm@holmreed.example', lastContact: '2025-11-18', open: 'Read the 2016 wills again now Oscar is 15, and ask whether a trust fits' },
    { id: 'v2', name: 'Dana Winther', firm: 'Winther & Co. CPAs', role: 'CPA', covers: ['Records', 'Governance'], contact: 'dana@winthercpa.example', lastContact: '2026-04-02', open: 'Owner’s pay and the SEP IRA contribution from the LLC for 2026' },
    { id: 'v3', name: 'Maria Lund', firm: 'Birchwood Bank', role: 'Mortgage banker', covers: ['Records'], contact: 'maria.lund@bank.example', lastContact: '2026-06-11', open: 'The options before the mortgage adjusts in January' },
    { id: 'v4', name: 'Jonas Kirk', firm: 'Kirk Insurance Group', role: 'Insurance agent', covers: ['Protection', 'Succession'], contact: 'jonas@kirkinsurance.example', lastContact: '2025-10-07', open: '' }
  ],

  identity: { whoFor: 'Us first, then Emma and Oscar', horizon: 14, badYear: 'Hold and wait it out', updated: '2026-09-02', savingsMonthly: 4500 },

  goals: [
    { id: 'g1', name: 'Retire at 62', amount: 2500000, date: '2037-06-30', priority: 'Need', linked: ['a5', 'a7', 'a8', 'a9'], monthly: 500, source: 'Written in the tutorial' },
    { id: 'g2', name: 'College for Oscar', amount: 160000, date: '2029-08-15', priority: 'Need', linked: ['a14'], monthly: 1200, source: 'Added by Michael' },
    { id: 'g3', name: 'A new roof and dock at the cabin', amount: 120000, date: '2027-06-30', priority: 'Want', linked: ['a4'], monthly: 2800, source: 'Added by Lauren' }
  ],

  policy: [
    { version: 1, effective: '2026-09-03', by: 'Michael', agreed: ['Michael', 'Lauren'], note: 'First written in the first week',
      purpose: 'This money is for a calm retirement at 62, and then for Emma and Oscar.',
      enough: '$2.5 million invested by 2037, with the home paid off.',
      exclusions: 'No single company above 10%. No borrowing to invest.',
      liquidityMin: 75000, concentrationMax: 10,
      bands: { equities: [55, 45, 65], fixed: [25, 15, 35], cash: [10, 5, 15], private: [10, 0, 10] } },
    { version: 2, effective: '2026-09-10', by: 'Lauren', agreed: ['Michael', 'Lauren'], note: 'Listed shares ceiling lowered to 60; private markets ceiling raised to 15',
      purpose: 'This money is for a calm retirement at 62, and then for Emma and Oscar.',
      enough: '$2.5 million invested by 2037, with the home paid off.',
      exclusions: 'No single company above 10%. No borrowing to invest.',
      liquidityMin: 75000, concentrationMax: 10,
      bands: { equities: [55, 45, 60], fixed: [25, 15, 35], cash: [10, 5, 15], private: [10, 0, 15] } }
  ],

  cover: [
    { id: 'c1', type: 'Life', covers: 'Michael', insurer: 'Term life · 20-year level term', sum: 1500000, premium: 1380, renews: '', beneficiaries: 'Lauren Johnsen', nominated: '2019-03-01', doc: '' },
    { id: 'c2', type: 'Life', covers: 'Lauren', insurer: "Group life through Lauren's employer", sum: 300000, premium: 0, renews: '2027-01-01', beneficiaries: 'Michael Johnsen', nominated: '2014-08-15', doc: '' },
    { id: 'c3', type: 'Homeowners', covers: 'Home, Edina', insurer: 'Homeowners insurer', sum: 1050000, premium: 3900, renews: '2026-10-15', beneficiaries: '', nominated: '', doc: 'd6' },
    { id: 'c4', type: 'Homeowners', covers: 'Lake cabin, Gull Lake', insurer: 'Homeowners insurer', sum: 410000, premium: 2100, renews: '2027-03-01', beneficiaries: '', nominated: '', doc: '' },
    { id: 'c5', type: 'Auto', covers: 'Car, Toyota Highlander', insurer: 'Auto insurer', sum: 0, premium: 1650, renews: '2027-01-10', beneficiaries: '', nominated: '', doc: '' },
    { id: 'c6', type: 'Health', covers: 'Michael, Lauren, Emma, Oscar', insurer: "Family plan through Lauren's employer", sum: 0, premium: 0, renews: '2027-01-01', beneficiaries: '', nominated: '', doc: '' }
  ],

  will: { exists: 'Yes', kind: 'Mirror wills, Michael and Lauren', signed: '2016-05-12', reviewed: '2016-05-12', reviewBy: '2026-12-31',
          original: 'Holm & Reed LLP, Minneapolis — in the firm’s vault', executors: 'The surviving spouse, then Andrew Holm', lawyer: 'v1', doc: 'd7' },

  security: { twoFactor: true, recoveryContact: '', sessions: [ { device: 'MacBook Air · Safari', place: 'Edina, MN', last: 'Now' }, { device: 'iPhone · Finna app', place: 'Edina, MN', last: 'Yesterday' } ] },
  notifications: { briefing: true, renewals: true, needsYou: true, learn: false },

  freya: { messages: 11, documents: 2, allowanceMessages: 40, allowanceDocuments: 4, briefingRead: false },

  /* Freya's conversations, kept with the household and included in the export (build spec §2,
     "What the skeleton needs underneath"). Titled by Freya after the first answer. */
  conversations: [
    { id: 'cv1', title: 'Where is the original of our wills?', at: '2026-09-15', by: 'Lauren', thread: [
      { role: 'user', content: 'Where is the original of our wills?' },
      { role: 'assistant', content: 'At Holm & Reed LLP in Minneapolis, in the firm’s vault [Will record · Succession]. A copy is in the Family Vault as Wills (copies) [Family Vault · Estate]. You set December 31, 2026 as the date to read them again, and it is in the Timeline.', meta: 'From your record' } ] },
    { id: 'cv2', title: 'What falls due in October?', at: '2026-09-21', by: 'Michael', thread: [
      { role: 'user', content: 'What falls due in October?' },
      { role: 'assistant', content: 'One thing: the homeowners policy on the Edina home renews on October 15 [Protection · cover]. Its dwelling coverage of $1,050,000 was last set in 2023 [Homeowners policy 2025–26, page 2]. Nothing else in the record falls due that month.', meta: 'From your record' } ] }
  ],
  /* earlier weekly briefings, newest first; the latest is `briefing` below */
  briefingArchive: [
    { week: 'Monday, September 14, 2026', items: [
      { text: 'Policy version 2 took effect on September 10: the listed shares ceiling is now 60% and the private markets ceiling 15%.', why: 'You agreed it together, and drift is measured against it from that day.', src: 'Policy · version 2' },
      { text: 'Your homeowners policy on the Edina home renews on October 15, about a month away.', why: 'Renewal is the moment the cover can change.', src: 'Protection · cover' },
      { text: 'The wills were recorded on September 8. They were signed in 2016 and have not been read since.', why: 'You set December 31 as the date to read them again.', src: 'Succession · the will' } ] }
  ],

  briefing: {
    week: 'Monday, September 21, 2026',
    items: [
      { text: 'Listed shares are now 61.2% of your investable assets, above the 60% ceiling you set on September 10.', why: 'A tranche of Lauren’s employer stock vested on September 12 ($36,000), and the brokerage account rose $23,000 on its September 15 statement.', src: 'RSU vesting confirmation · Sep 12, 2026 · Brokerage statement · Sep 15, 2026' },
      { text: 'Your homeowners policy on the Edina home renews on October 15. Its dwelling coverage of $1,050,000 was last set in 2023.', why: 'Renewal is the moment the coverage can change without a new policy.', src: 'Homeowners policy 2025–26, page 2' },
      { text: 'Two figures are past the date you set for checking them: the lake cabin (June 2025) and the company (December 2025).', why: 'They stay in your net worth with their dates until you check them.', src: 'Records · sources and staleness' }
    ]
  },

  /* Learn (the Map grows, 29 Sep 2026): only what the household did. The paths and quests are the
     catalogue in learn.js; a path's state, XP, the rank's rings and the week are all read from this. */
  learn: {
    done: { 'first-picture': [1, 2], 'fo-record': [1, 2, 3, 4, 5, 6] },   /* the quests answered, by path */
    days: ['2026-09-02', '2026-09-08', '2026-09-15', '2026-09-21', '2026-09-23'],   /* the days a quest was answered */
    tests: {},   /* a certificate path's test: { passed: date, tries: n } */
    earned: { 'first-picture': '2026-09-02' },   /* the day each badge or certificate was earned */
    tab: '',     /* the Map's tab last opened */
    tags: true   /* the Learn tags around the platform */
  },

  /* the pages opened most recently — Home's "Pick up where you left off" (build spec Q13:
     recent pages until there are weeks of use to rank from) */
  recent: [
    { path: '/policy/drift', label: 'Governance · Drift' },
    { path: '/learn/path/fo-record/quest/7', label: 'Learn · Quest 7' },
    { path: '/records/statement', label: 'Records · Statement' }
  ],
  /* view_pref: a member's pins and hides on each section's Suggested view */
  viewPrefs: {},

  log: [
    { at: '2026-09-02', who: 'Michael', what: 'Opened the office' },
    { at: '2026-09-02', who: 'Michael', what: 'Finished the tutorial' },
    { at: '2026-09-03', who: 'Lauren', what: 'Joined the household' },
    { at: '2026-09-03', who: 'Michael', what: 'Wrote policy version 1' },
    { at: '2026-09-05', who: 'Lauren', what: 'Listed six insurance policies' },
    { at: '2026-09-08', who: 'Michael', what: 'Recorded the wills and where they are' },
    { at: '2026-09-10', who: 'Lauren', what: 'Wrote policy version 2' },
    { at: '2026-09-15', who: 'Michael', what: 'Updated the brokerage account from its statement' },
    { at: '2026-09-21', who: 'Freya', what: 'Prepared the weekly briefing' }
  ]
};

/* ══ THE PLATFORM · core — state, derived figures, helpers ════════════════════════════
   ICONS (brand/icons.json) and SECTION_ICONS (the design repo's brand/build/plates.json) are injected by the build.
   Every figure on every screen is computed here from the record; nothing is typed in. */
var APP = (function () {
  'use strict';
  /* ?day-one is a review aid, like ?clean: the same household the morning it finished the
     tutorial with the picture skipped, kept in its own demo state. It shows the honest day one
     the build spec asks for (B1, B2, Suggested views). */
  var DAY_ONE = /[?&]day-one\b/.test(location.search);
  /* ?tutorial is the new household of THE TUTORIAL (freya-tutorial.js, 2 Oct 2026): nothing
     recorded and no name yet, in its own browser storage, so the demo and day one stay as they are */
  var TUT = /[?&]tutorial\b/.test(location.search);
  /* the tutorial's own version (S.tutor.v). A saved tutorial from before it is set aside and the
     household starts new, as SEED.version does for the demo: 3 since 3 Oct 2026 (five desks, one at
     a time), so a run begun in the eight-stage tutorial never opens half-way through the new one */
  var TUT_V = 5;   /* 4 Oct 2026: the Financial Identity after Records, Freya's map and the email in the Investment desk (4); investments as tags (5) */
  var KEY = TUT ? 'finna-platform-tutorial' : DAY_ONE ? 'finna-platform-day-one' : 'finna-platform-build'; /* its own demo state, so it never writes into the original's (original/) */
  /* ?tutorial&fresh (3 Oct 2026): a clean tutorial every time, from the name, for a test or a demo.
     The tutorial's household is cleared, then the word is dropped from the address so a reload goes on */
  if (TUT && /[?&]fresh\b/.test(location.search)) {
    try { localStorage.removeItem(KEY); } catch (e) {}
    window.history.replaceState(null, '', location.pathname + location.search.replace(/&fresh\b/, '') + location.hash);
  }

  function clone(o) { return JSON.parse(JSON.stringify(o)); }
  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) { var o = JSON.parse(raw); if (o && o.version === SEED.version && !(TUT && o.tutor && (o.tutor.v || 0) < TUT_V)) return o; }
    } catch (e) {}
    return TUT ? fresh() : DAY_ONE ? dayOne() : clone(SEED);
  }
  /* the tutorial's household before it has a name: day one with nothing of the Johnsens left in it */
  function fresh() {
    var s = dayOne();
    s.household = { name: '', base: 'USD', plan: 'free', city: '', opened: DEMO_TODAY, tutorialDone: '' };
    s.members = [{ id: 'm1', name: '', role: 'owner', email: '', joined: DEMO_TODAY }];
    s.people = [{ id: 'p1', name: '', born: null, relationship: 'Owner', dependant: false, member: 'm1' }];
    s.goals = []; s.identity = {}; s.advisers = []; s.log = [];
    s.learn = { done: {}, days: [], tests: {}, earned: {}, tab: '', tags: true };
    return s;
  }
  function dayOne() {
    var s = clone(SEED);
    s.household.opened = DEMO_TODAY; s.household.tutorialDone = DEMO_TODAY;
    s.members = [s.members[0]]; s.people = [s.people[0]]; s.relations = [];
    s.assets = []; s.liabilities = []; s.valuations = []; s.documents = []; s.advisers = []; s.cover = []; s.policy = [];
    s.goals = [{ id: 'g1', name: 'Retire at 62', amount: 2500000, date: '2037-06-30', priority: 'Need', linked: [], source: 'Written in the tutorial' }];
    s.will = { exists: '', kind: '', signed: '', reviewed: '', reviewBy: '', original: '', executors: '', lawyer: '', doc: '' };
    s.security.recoveryContact = ''; s.freya.messages = 0; s.freya.documents = 0; s.freya.briefingRead = true;
    s.conversations = []; s.briefingArchive = []; s.briefing = { week: '', items: [] }; s.recent = []; s.viewPrefs = {}; s.viewOrder = {};
    s.learn = { done: { 'first-picture': [1, 2] }, days: [DEMO_TODAY], tests: {}, earned: { 'first-picture': DEMO_TODAY }, tab: '', tags: true };
    s.log = [{ at: DEMO_TODAY, who: 'Michael', what: 'Opened the office' }, { at: DEMO_TODAY, who: 'Michael', what: 'Finished the tutorial' }];
    return s;
  }
  var S = load();
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }

  /* ── helpers ─────────────────────────────────────────────────────────── */
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  /* THE HOUSEHOLD'S CURRENCY (2 Oct 2026): every figure is shown in the household's base currency,
     USD unless the household chose another (the tutorial asks, ?tutorial). The words stay US English;
     only the currency changes: $1,234, €1,234, £1,234, DKK 1,234. Nothing is converted. */
  var NFS = {}, SYMS = {}, CNAMES = {};
  function base() { return (S && S.household && S.household.base) || 'USD'; }
  function nf(c) { if (!NFS[c]) { try { NFS[c] = new Intl.NumberFormat('en-US', { style: 'currency', currency: c, maximumFractionDigits: 0 }); } catch (x) { NFS[c] = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }); } } return NFS[c]; }
  /* the sign in front of a short figure: $ € £ CA$, or the code with a space (DKK 4.1M) */
  function sym() {
    var c = base(); if (SYMS[c] != null) return SYMS[c];
    var p = nf(c).formatToParts(0).filter(function (x) { return x.type === 'currency'; })[0], v = p ? p.value : c;
    return (SYMS[c] = /[A-Za-z]$/.test(v) ? v + '\u00a0' : v);
  }
  /* the currency's name in the plural, for words: dollars, euros, British pounds, Danish kroner */
  function curWords() {
    var c = base(); if (CNAMES[c]) return CNAMES[c];
    var w = c; try { var p = new Intl.NumberFormat('en-US', { style: 'currency', currency: c, currencyDisplay: 'name' }).formatToParts(2).filter(function (x) { return x.type === 'currency'; })[0]; if (p) w = p.value; } catch (x) {}
    return (CNAMES[c] = c === 'USD' ? 'dollars' : w);
  }
  function money(n) { return (n == null || n === '' || isNaN(n)) ? '—' : nf(base()).format(n); }
  /* short form for charts and chips: $4.1M, $380K */
  function short(n) {
    var a = Math.abs(n), sign = n < 0 ? '−' : '';
    if (a >= 1e6) return sign + sym() + (a / 1e6).toFixed(a >= 1e7 ? 1 : 2).replace(/\.?0+$/, '') + 'M';
    if (a >= 1e3) return sign + sym() + Math.round(a / 1e3) + 'K';
    return money(n);
  }
  function pct(x, dp) { return (x * 100).toFixed(dp == null ? 1 : dp) + '%'; }
  var DF = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  var DFM = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' });
  function date(s) { if (!s) return '—'; var t = new Date(s + 'T00:00:00'); return isNaN(+t) ? '—' : DF.format(t); }
  function month(s) { return DFM.format(new Date(s + 'T00:00:00')); }
  function days(a, b) { return Math.round((new Date(b + 'T00:00:00') - new Date(a + 'T00:00:00')) / 864e5); }
  function addDays(a, n) { var t = new Date(a + 'T00:00:00'); t.setDate(t.getDate() + n); return t.toISOString().slice(0, 10); }
  function uid(p) { return p + Math.random().toString(36).slice(2, 8); }
  /* icons the brand's set does not have yet — Lucide, drawn like the rest (1.75 stroke, round
     ends). Kept here, since refresh.py rewrites the ICONS line; promote them to brand/icons.json
     if the brand wants them. layout-dashboard and folder-lock: Desks and the Family Vault in the main bar (Rose, 28 Sep 2026 — in place of the
     pi-workbench and pi-agreements plates). */
  /* the panel key, redrawn on a 20-unit grid for the 20px it is shown at (Rose, 29 Sep 2026: "this
     icon seems blurry"). Lucide's panel-left is drawn on 24 units, so at 20px its lines fell
     between pixels and smeared; here they sit on the pixel grid (and on the half-pixel grid of a
     retina screen). Same drawing, same size, 1.5 stroke — the brand's weight under 24px. */
  ICONS.sidebar = '<svg class="ic" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-icon="sidebar"><rect x="2.75" y="2.75" width="14.5" height="14.5" rx="2"/><path d="M7.75 2.75v14.5"/></svg>';
  /* download, redrawn on an 18-unit grid for a size M key's 18px (Rose, 29 Sep 2026: "the button
     icon is too blurry" — Export everything). Same fix as the panel key: the shaft and the tray's
     outer edges sit on whole pixels, 1.5 stroke. */
  ICONS.download = '<svg class="ic" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-icon="download"><path d="M8.75 2.75v8.5"/><path d="m4.75 7.25 4 4 4-4"/><path d="M1.75 11.75v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2"/></svg>';
  ICONS.desks = '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-icon="desks"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>';
  /* sorting a table (28 Sep 2026): arrow-down for largest or newest first, chevrons-up-down for a
     column that sorts but is not sorted (arrow-up is the brand's "top") */
  ICONS.down = '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-icon="down"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>';
  ICONS.sort = '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-icon="sort"><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></svg>';
  ICONS.vault = '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-icon="vault"><rect width="8" height="5" x="14" y="17" rx="1"/><path d="M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5"/><path d="M20 17v-2a2 2 0 1 0-4 0v2"/></svg>';
  function ic(name, cls) { var s = ICONS[name] || ''; return cls ? s.replace('class="ic"', 'class="ic ' + cls + '"') : s; }
  /* Freya's mark, one drawing wherever she appears; its state follows hers (setFy).
     FLAT AND STILL, FROM THE BRAND SYSTEM (Rose, 4 Oct 2026): the brand's Freya section as it is (body.py
     _fy_mark): its box (39 39 50 50), four rings of radius 16.5 at 64±7, wall 1.5, centre open. Not the
     logo file's box (35.5 35.5 57 57), which leaves the logo's clear space round her and drew her 12%
     smaller (Rose, 4 Oct 2026: "the 12% is a yes").
     She does not turn or sway (the Lab's 3D, Bench 23, stays in the Lab).
     HER DOT IS LARGER, AND THE RINGS MAKE ROOM FOR IT (Rose, 29 Sep 2026: "too small — make it
     larger"): r 6 (was 4.5), and while it shows the rings are cut back round it by a small gap
     (the mask; frame.css switches it off in every other state), so it reads as a dot on her mark,
     not a blob stuck to a ring — on any ground. Each mark needs its own mask id. */
  var FYM = 0;
  function fyMark(state, extra) {
    var id = 'fym' + (++FYM);
    return '<svg class="fy-mk" viewBox="39 39 50 50" aria-hidden="true" data-fy-mark data-state="' + state + '"' + (extra || '') + '>' +
      '<mask id="' + id + '" maskUnits="userSpaceOnUse" x="30" y="30" width="70" height="70"><rect x="30" y="30" width="70" height="70" fill="white"/><circle cx="85" cy="43" r="8.5"/></mask>' +
      '<g class="fy-rings" mask="url(#' + id + ')"><g class="fy-spin"><path class="core" d="M64 56.06 A16.5 16.5 0 0 1 71.94 64 A16.5 16.5 0 0 1 64 71.94 A16.5 16.5 0 0 1 56.06 64 A16.5 16.5 0 0 1 64 56.06 Z"/>' +
      '<circle class="r r1" cx="57" cy="57" r="16.5"/><circle class="r r2" cx="71" cy="57" r="16.5"/><circle class="r r3" cx="71" cy="71" r="16.5"/><circle class="r r4" cx="57" cy="71" r="16.5"/></g></g>' +
      '<circle class="dot" cx="85" cy="43" r="6"/></svg>';
  }
  function sectionIcon(name) {
    var s = SECTION_ICONS[name] || '';
    return s.replace(/<svg width="48" height="48"/, '<svg class="ic-section" aria-hidden="true"');
  }
  function who() { var m = S.members.filter(function (x) { return x.id === S.viewer; })[0]; return m ? m.name.split(' ')[0] : 'Michael'; }
  function log(what) { S.log.push({ at: DEMO_TODAY, who: who(), what: what }); }

  /* ── vocabulary ──────────────────────────────────────────────────────── */
  var CLS = { cash: 'Cash', listed: 'Listed shares', pension: 'Retirement account', education: 'Education savings', bonds: 'Bonds', property: 'Property',
    private: 'Private holding', valuables: 'Valuables', vehicle: 'Vehicle' };
  var MIXL = { equities: 'Listed shares', fixed: 'Bonds', cash: 'Cash', private: 'Private markets', property: 'Property', real: 'Valuables and vehicles' };
  /* the chart colour of each class (app.css, CHART COLOURS, 3 Oct 2026): liquid green, illiquid blue.
     CLS_TOK names the class's token, for its five shades (--h-<tok>-1…5); valuables and vehicles are
     not an investment class and take the neutral Other */
  var CLS_TOK = { cash: 'cash', fixed: 'bonds', equities: 'eq', private: 'pe', property: 're' };
  var MIXC = { equities: 'var(--c-eq)', fixed: 'var(--c-bonds)', cash: 'var(--c-cash)', private: 'var(--c-pe)', property: 'var(--c-re)', real: 'var(--other)' };
  var DEFAULT_MIX = { cash: { cash: 1 }, listed: { equities: 1 }, pension: { equities: 0.6, fixed: 0.4 }, education: { equities: 0.7, fixed: 0.3 }, bonds: { fixed: 1 },
    property: { property: 1 }, private: { private: 1 }, valuables: { real: 1 }, vehicle: { real: 1 } };
  var LIQ = { cash: 'Cash', listed: 'Listed shares', pension: 'Listed shares', education: 'Listed shares', bonds: 'Government bonds', property: 'Property', private: 'Private markets', valuables: 'Property', vehicle: 'Property' };
  var STALE = { cash: 90, listed: 90, bonds: 90, pension: 200, education: 200, private: 183, property: 365, valuables: 730, vehicle: 365, liability: 120 };
  var SRC = { entered: 'Entered by you', statement: 'Statement', document: 'Document', checked: 'Checked', connection: 'Connection' };
  var POLICY_CLASSES = ['equities', 'fixed', 'cash', 'private'];

  var DESKS = {
    records: { noun: 'Records', q: 'What do we have?', verb: 'Gather it', pick: 'the household record', icon: 'pr-together', status: 'Open',
      lede: 'The household record. Everything in the other four desks is written from it.', held: 'Reconciled, not estimated.' },
    policy: { noun: 'Governance', q: 'What is it for?', verb: 'Govern it', pick: 'sets the rules', icon: 'pi-decisions', status: 'Open',
      lede: 'Your household’s rules, written down once, and monitored.', held: 'Measured against the policy your household agreed — not a benchmark we chose.' },
    investment: { noun: 'Investment', q: 'How does it grow?', verb: 'Grow it', pick: 'opens with the funds', icon: 'pr-grow', status: 'Open',
      lede: 'Invest like a family office — across public and private markets, over decades.', held: 'Access depends on demonstrated understanding, not net worth alone.' },
    protection: { noun: 'Protection', q: 'Are we covered?', verb: 'Protect it', pick: 'cover and risk', icon: 'pr-protect', status: 'Open',
      lede: 'What is covered, what is missing, what needs attention — before it is a claim.', held: 'Gaps named while they are still gaps.' },
    succession: { noun: 'Succession', q: 'What do we pass on?', verb: 'Pass it on', pick: 'the record carried forward', icon: 'pi-nextgen', status: 'Open',
      lede: 'The people, the papers and the reasoning, moving together.', held: 'Written so the people who inherit it can read it before they inherit it.' }
  };

  /* ── the record ──────────────────────────────────────────────────────── */
  function asset(id) { return S.assets.filter(function (a) { return a.id === id; })[0]; }
  function liability(id) { return S.liabilities.filter(function (a) { return a.id === id; })[0]; }
  function line(id) { return asset(id) || liability(id); }
  function doc(id) { return S.documents.filter(function (x) { return x.id === id; })[0]; }
  function adviser(id) { return S.advisers.filter(function (x) { return x.id === id; })[0]; }

  function history(lineId) {
    return S.valuations.map(function (v, i) { v._i = i; return v; })
      .filter(function (v) { return v.line === lineId; })
      .sort(function (a, b) { return a.asOf < b.asOf ? -1 : a.asOf > b.asOf ? 1 : a._i - b._i; });
  }
  function cur(lineId) { var h = history(lineId); return h[h.length - 1]; }
  function amount(lineId) { var c = cur(lineId); return c ? c.amount : 0; }
  function stale(l) {
    var c = cur(l.id); if (!c) return 0;
    var lim = asset(l.id) ? (STALE[l.cls] || 365) : STALE.liability;
    var age = days(c.asOf, DEMO_TODAY);
    return age > lim ? age : 0;
  }
  function staleLimit(l) { return asset(l.id) ? (STALE[l.cls] || 365) : STALE.liability; }
  function srcLabel(v) {
    if (!v) return '—';
    var base = SRC[v.source] || v.source;
    if (v.ref && doc(v.ref)) base = doc(v.ref).name;
    return base;
  }
  function isInvestable(a) { return ['cash', 'listed', 'pension', 'education', 'bonds', 'private'].indexOf(a.cls) > -1 && !a.company; }

  function totals() {
    var owned = 0, owed = 0, commit = 0, byMix = {}, owedByType = { mortgage: 0, loan: 0 };
    S.assets.forEach(function (a) {
      var v = amount(a.id); owned += v;
      var mix = a.mix || DEFAULT_MIX[a.cls] || {};
      Object.keys(mix).forEach(function (k) { byMix[k] = (byMix[k] || 0) + v * mix[k]; });
    });
    S.liabilities.forEach(function (l) {
      var v = amount(l.id);
      if (l.kind === 'commitment') { commit += v; return; }
      owed += v;
      if (l.type === 'Mortgage') owedByType.mortgage += v; else owedByType.loan += v;
    });
    return { owned: owned, owed: owed, commit: commit, net: owned - owed, byMix: byMix, owedByType: owedByType };
  }
  function investable() {
    var by = { equities: 0, fixed: 0, cash: 0, private: 0 }, total = 0;
    S.assets.forEach(function (a) {
      if (!isInvestable(a)) return;
      var v = amount(a.id), mix = a.mix || DEFAULT_MIX[a.cls] || {};
      Object.keys(mix).forEach(function (k) { if (by[k] != null) { by[k] += v * mix[k]; total += v * mix[k]; } });
    });
    return { by: by, total: total };
  }
  function policy() { return S.policy[S.policy.length - 1] || null; }
  function drift() {
    var inv = investable(), p = policy();
    if (!p) return [];
    return POLICY_CLASSES.map(function (k) {
      var b = p.bands[k], a = inv.total ? inv.by[k] / inv.total : 0, ap = a * 100;
      return { k: k, label: MIXL[k], actual: a, value: inv.by[k], target: b[0], min: b[1], max: b[2],
        out: ap < b[1] ? 'below' : ap > b[2] ? 'above' : '' };
    });
  }
  function reachableCash() { return S.assets.filter(function (a) { return a.cls === 'cash'; }).reduce(function (s, a) { return s + amount(a.id); }, 0); }
  function largestSingle() {
    var inv = investable().total, best = null;
    S.assets.forEach(function (a) { if (a.singleCompany && isInvestable(a)) { var s = amount(a.id) / inv; if (!best || s > best.share) best = { a: a, share: s }; } });
    return best;
  }
  /* what moved a class since the policy took effect: valuation changes on its lines */
  function movers(k, since) {
    var out = [];
    S.assets.forEach(function (a) {
      var mix = a.mix || DEFAULT_MIX[a.cls] || {}; if (!mix[k] || !isInvestable(a)) return;
      var h = history(a.id); if (h.length < 2) return;
      var before = null, after = h[h.length - 1];
      h.forEach(function (v) { if (v.asOf <= since) before = v; });
      if (!before) before = h[0];
      if (before === after) return;
      var delta = (after.amount - before.amount) * mix[k];
      if (Math.abs(delta) > 0) out.push({ a: a, delta: delta, v: after });
    });
    return out.sort(function (x, y) { return Math.abs(y.delta) - Math.abs(x.delta); });
  }
  function staleLines() { return S.assets.concat(S.liabilities).filter(function (l) { return stale(l); }); }
  function renewalsWithin(n) {
    return S.cover.filter(function (c) { return c.renews && days(DEMO_TODAY, c.renews) >= 0 && days(DEMO_TODAY, c.renews) <= n; });
  }
  /* ── the Family Vault: a document belongs to a line, a policy, the will or the household
     policy (build spec V1–V3). Each desk reads its own documents from here. */
  function belongsTo(d) {
    var out = [];
    (d.lines || []).forEach(function (id) { var l = line(id); if (l) out.push({ id: id, desk: 'Records', label: l.name, href: '#/records/' + (asset(id) ? 'own' : 'owe') }); });
    S.cover.forEach(function (c) { if (c.doc === d.id) out.push({ id: 'c:' + c.id, desk: 'Protection', label: c.type + ' cover · ' + c.covers, href: '#/protection/cover' }); });
    if (S.will.doc === d.id) out.push({ id: 'will', desk: 'Succession', label: 'The will', href: '#/succession/will' });
    S.policy.forEach(function (v) { if (v.doc === d.id) out.push({ id: 'policy', desk: 'Governance', label: 'The household policy · version ' + v.version, href: '#/policy/rules' }); });
    return out;
  }
  function filed(d) { return belongsTo(d).length > 0; }
  function fileTargets() {
    return [['Records', S.assets.concat(S.liabilities).map(function (l) { return [l.id, l.name]; })],
      ['Protection', S.cover.map(function (c) { return ['c:' + c.id, c.type + ' cover · ' + c.covers]; })],
      ['Succession', [['will', 'The will']]], ['Governance', [['policy', 'The household policy, signed']]]];
  }
  function catFor(t) {
    if (t === 'will') return 'Estate';
    if (t === 'policy') return 'Agreements';
    if (t.indexOf('c:') === 0) return 'Insurance';
    var a = asset(t); if (a) return a.cls === 'property' || a.cls === 'private' || a.cls === 'vehicle' ? 'Ownership' : 'Statements';
    return 'Agreements';
  }
  /* file a document in one place, taking it out of wherever it was */
  function fileDoc(d, t) {
    S.assets.concat(S.liabilities).forEach(function (l) { if (l.docs) l.docs = l.docs.filter(function (x) { return x !== d.id; }); });
    S.cover.forEach(function (c) { if (c.doc === d.id) c.doc = ''; });
    if (S.will.doc === d.id) S.will.doc = '';
    S.policy.forEach(function (v) { if (v.doc === d.id) v.doc = ''; });
    d.lines = [];
    if (!t) return;
    if (t === 'will') S.will.doc = d.id;
    else if (t === 'policy') policy().doc = d.id;
    else if (t.indexOf('c:') === 0) { var c = S.cover.filter(function (x) { return x.id === t.slice(2); })[0]; if (c) c.doc = d.id; }
    else { var l = line(t); if (l) { d.lines = [t]; (l.docs = l.docs || []).push(d.id); } }
  }
  /* A PROPOSAL FROM THE FILE'S NAME (preview only). In the platform Freya reads the document
     itself and cites its pages (V2); here the page matches the file's name against the record,
     and says so. */
  function propose(d) {
    var n = ' ' + d.name.toLowerCase().replace(/[^a-z0-9]+/g, ' ') + ' ', best = null;
    function words(s) { return s.toLowerCase().split(/[^a-z0-9]+/).filter(function (w) { return w.length > 2 && ['the', 'and', 'for', 'cover', 'account', 'insurer', 'group', 'through'].indexOf(w) < 0; }); }
    function consider(t, label, text) {
      var sc = words(text).filter(function (w) { return n.indexOf(' ' + w) > -1; }).length;
      if (sc && (!best || sc > best.score)) best = { target: t, label: label, cat: catFor(t), score: sc };
    }
    S.assets.concat(S.liabilities).forEach(function (l) { consider(l.id, l.name, l.name + ' ' + (l.institution || '') + ' ' + (l.lender || '') + ' ' + (l.type || '')); });
    S.cover.forEach(function (c) { consider('c:' + c.id, c.type + ' cover · ' + c.covers, c.type + ' ' + c.covers + ' ' + c.insurer + ' insurance schedule'); });
    consider('will', 'The will', 'will wills testament');
    return best;
  }
  /* ── the family: people, how they are related, and where each one is named ───────── */
  function person(id) { return S.people.filter(function (x) { return x.id === id; })[0]; }
  function rels() { return S.relations || (S.relations = []); }
  function parentsOf(id) { return rels().filter(function (r) { return r.kind === 'parent' && r.b === id; }).map(function (r) { return r.a; }); }
  function partnersOf(id) { return rels().filter(function (r) { return r.kind === 'partner' && (r.a === id || r.b === id); }).map(function (r) { return r.a === id ? r.b : r.a; }); }
  function viewerPerson() { return S.people.filter(function (x) { return x.member === S.viewer; })[0] || S.people[0]; }
  /* MARRIED OR NOT (3 Oct 2026, Christian: "the user should be able to define if its partner or married,
     because that is very important data for us"). A partner row says whether the two are married:
     married, civil (a civil partnership, civil union or registered partnership, which the law mostly
     treats as a marriage) or unmarried; '' is not recorded yet. It decides what a partner inherits
     without a will, and much of Succession and Protection. A record from before the field reads a
     partner called Spouse, Wife or Husband as married. The partner's relationship words follow it. */
  var UNION = [['married', 'Married'], ['civil', 'Civil partnership'], ['unmarried', 'Not married']];
  var UNION_WORD = { married: 'Spouse', civil: 'Civil partner', unmarried: 'Partner' };
  function unionRel(a, b) { return rels().filter(function (r) { return r.kind === 'partner' && ((r.a === a && r.b === b) || (r.a === b && r.b === a)); })[0] || null; }
  function unionStatus(a, b) {
    var r = unionRel(a, b); if (!r) return '';
    if (r.status) return r.status;
    return [person(a), person(b)].some(function (x) { return x && /\b(spouse|wife|husband)\b/i.test(x.relationship || ''); }) ? 'married' : '';
  }
  function setUnion(a, b, st) {
    var r = unionRel(a, b); if (!r || ['married', 'civil', 'unmarried', ''].indexOf(st) < 0) return;
    r.status = st;
    [a, b].forEach(function (id) {   /* the words follow, unless the household wrote its own */
      var x = person(id); if (x && st && (!x.relationship || /^(spouse|partner|civil partner|wife|husband)$/i.test(x.relationship))) x.relationship = UNION_WORD[st];
    });
  }
  /* "married to Lauren", "in a civil partnership with Lauren", "Lauren's partner, not married" */
  function unionLine(id) {
    return partnersOf(id).map(function (y) {
      var st = unionStatus(id, y), f = (person(y) || { name: '' }).name.split(' ')[0];
      return st === 'married' ? 'married to ' + f : st === 'civil' ? 'in a civil partnership with ' + f : st === 'unmarried' ? f + '’s partner, not married' : f + '’s partner · married or not, not recorded';
    }).join(' · ');
  }
  /* the tree by generation: a parent sits one row above, a partner, sibling or other beside;
     each row is ordered under its parents, partners kept side by side */
  function generations() {
    var gen = {}, ids = S.people.map(function (x) { return x.id; });
    function walk(start) {
      var q = [start]; gen[start] = gen[start] == null ? 0 : gen[start];
      while (q.length) {
        var id = q.shift();
        rels().forEach(function (r) {
          var other = null, g = null;
          if (r.a === id) { other = r.b; g = r.kind === 'parent' ? gen[id] + 1 : gen[id]; }
          else if (r.b === id) { other = r.a; g = r.kind === 'parent' ? gen[id] - 1 : gen[id]; }
          if (other != null && gen[other] == null && person(other)) { gen[other] = g; q.push(other); }
        });
      }
    }
    var v = viewerPerson(); if (v) walk(v.id);
    ids.forEach(function (id) { if (gen[id] == null) { gen[id] = v ? gen[v.id] : 0; walk(id); } });
    var min = Math.min.apply(null, ids.map(function (id) { return gen[id]; })), rows = [];
    ids.forEach(function (id) { var g = gen[id] - min; (rows[g] = rows[g] || []).push(id); });
    rows = rows.filter(Boolean);
    rows.forEach(function (row, gi) {
      var prev = rows[gi - 1] || [], key = {};
      row.forEach(function (id, i) {
        var ps = parentsOf(id).map(function (x) { return prev.indexOf(x); }).filter(function (x) { return x > -1; });
        key[id] = ps.length ? ps.reduce(function (s, x) { return s + x; }, 0) / ps.length : null;
      });
      row.forEach(function (id) { if (key[id] == null) { var pt = partnersOf(id).filter(function (x) { return key[x] != null; })[0]; key[id] = pt ? key[pt] + 0.01 : 1e3 + row.indexOf(id); } });
      row.sort(function (a, b) { return key[a] - key[b] || (person(a).born || 0) - (person(b).born || 0); });
    });
    return rows;
  }
  /* everywhere a person is named, read from the record (build spec R11, Figure 3) */
  function namedIn(x) {
    var first = x.name.split(' ')[0], re = new RegExp('\\b' + first + '\\b'), out = { records: [], policy: [], protection: [], succession: [] };
    S.assets.forEach(function (a) {
      var h = (a.holder || '').split(' ')[0];
      if (h === first) out.records.push(a.name);
      else if (x.member && h === 'Joint') out.records.push(a.name + ' · joint');
      else if (re.test(a.name)) out.records.push(a.name + ' · for ' + first);
    });
    S.goals.forEach(function (g) { if (re.test(g.name)) out.policy.push('Goal · ' + g.name); });
    S.cover.forEach(function (c) {
      if (re.test(c.covers)) out.protection.push(c.type + ' cover · covered');
      if (c.beneficiaries && c.beneficiaries.indexOf(x.name) > -1) out.protection.push(c.type + ' cover · beneficiary');
    });
    if (S.security.recoveryContact === x.name) out.protection.push('Recovery contact');
    var w = S.will;
    if (x.member && re.test(w.kind)) out.succession.push('Will · signed ' + (w.signed || '').slice(0, 4));
    if (x.member && /surviving spouse/i.test(w.executors)) out.succession.push('Executor, if the other dies first');
    if (w.executors && w.executors.indexOf(x.name) > -1) out.succession.push('Executor');
    return out;
  }
  function goalProgress(g) {
    var have = (g.linked || []).reduce(function (s, id) { return s + (asset(id) ? amount(id) : 0); }, 0);
    return { have: have, share: g.amount ? Math.min(1, have / g.amount) : 0 };
  }

  /* ── the timeline: every date in the record, in one list ─────────────── */
  function timeline() {
    var t = [];
    S.liabilities.forEach(function (l) {
      if (l.kind === 'commitment') { if (l.maturity) t.push({ date: l.maturity, title: l.name + ': the commitment period ends', desk: 'Records', href: '#/records/owe' }); return; }
      if (l.reset) t.push({ date: l.reset, title: l.name + ': the rate resets', desk: 'Records', href: '#/records/owe' });
      if (l.maturity && days(DEMO_TODAY, l.maturity) < 365 * 3) t.push({ date: l.maturity, title: l.name + ': paid off', desk: 'Records', href: '#/records/owe' });
    });
    S.cover.forEach(function (c) { if (c.renews) t.push({ date: c.renews, title: c.type + ' cover renews · ' + c.covers, desk: 'Protection', href: '#/protection/cover' }); });
    S.goals.forEach(function (g) { t.push({ date: g.date, title: 'Goal: ' + g.name, desk: 'Governance', href: '#/policy/planning' }); });
    var p1 = S.policy[0]; if (p1) t.push({ date: addDays(p1.effective, 365), title: 'Policy review, a year after version 1', desk: 'Governance', href: '#/policy/rules' });
    if (S.will.reviewBy) t.push({ date: S.will.reviewBy, title: 'Read the will again, by the date you set', desk: 'Succession', href: '#/succession/will' });
    staleLines().forEach(function (l) {
      var c = cur(l.id); t.push({ date: addDays(c.asOf, staleLimit(l)), title: 'Check the value: ' + l.name, desk: 'Records', href: '#/records/own', overdue: true });
    });
    return t.sort(function (a, b) { return a.date < b.date ? -1 : a.date > b.date ? 1 : 0; });
  }

  /* ── Today: three kinds, never three asks ───────────────────────────── */
  /* NEEDS YOU (build spec B2): every rule hit, highest first — outside the policy, a renewal
     within 30 days, a document waiting to be filed, no will recorded (after the first week's card
     has asked); a figure past its check date comes last. Each carries the line that says why. */
  function needsList() {
    var out = [], p = policy(), age = days(S.household.opened, DEMO_TODAY);
    drift().filter(function (x) { return x.out; }).forEach(function (d) {
      out.push({ topic: 'drift', desk: 'policy', rank: 100 + Math.abs(d.actual * 100 - (d.out === 'above' ? d.max : d.min)),
        text: d.label + ' are ' + pct(d.actual) + ' of your investable assets, ' + (d.out === 'above' ? 'above the ' + d.max + '% ceiling' : 'below the ' + d.min + '% floor') + ' in your policy.',
        src: 'Policy version ' + p.version + ' · computed from the record today', key: 'See why', href: '#/policy/drift',
        why: d.label.toLowerCase() + ' are ' + (d.out === 'above' ? 'above your ' + d.max + '% ceiling' : 'below your ' + d.min + '% floor') });
    });
    renewalsWithin(30).forEach(function (r) {
      var n = days(DEMO_TODAY, r.renews);
      out.push({ topic: 'renewal', desk: 'protection', rank: 90 + (30 - n) / 10, id: r.id, text: 'Your ' + r.type.toLowerCase() + ' cover for ' + r.covers + ' renews on ' + date(r.renews) + '.',
        src: r.insurer, key: 'Open the cover', href: '#/protection/cover', why: 'your ' + r.type.toLowerCase() + ' policy renews in ' + n + ' day' + (n === 1 ? '' : 's') });
    });
    var unf = S.documents.filter(function (d) { return !filed(d); });
    if (unf.length) out.push({ topic: 'filing', desk: 'vault', rank: 80, text: unf.length === 1 ? 'A document is waiting to be filed: ' + unf[0].name + '.' : unf.length + ' documents are waiting to be filed.',
      src: 'Family Vault · Needs filing', key: 'File it', href: '#/vault/needs-filing', why: unf.length === 1 ? 'a document is waiting to be filed' : unf.length + ' documents are waiting to be filed' });
    if (S.will.exists !== 'Yes' && S.will.exists !== 'No' && age >= 5) out.push({ topic: 'will', desk: 'succession', rank: 70, text: 'There is no will recorded yet.',
      src: 'Succession', key: 'Record where the will is', href: '#/succession/will', why: 'no will is recorded' });
    staleLines().forEach(function (s, i) {
      if (i) return;
      out.push({ topic: 'stale', desk: 'records', rank: 60, text: s.name + ' was last valued on ' + date(cur(s.id).asOf) + '. Check it, or update it.',
        src: 'Records · sources and staleness', key: 'Check it', href: '#/records/own', why: 'a figure is past the date you set for checking it' });
    });
    return out.sort(function (x, y) { return y.rank - x.rank; });
  }
  /* THE FIRST WEEK (build spec §3): the other desks open one card at a time through Opens next.
     Days are the earliest a card can appear; a card waits until the one before it is done or
     set aside. Not a second tutorial, and never a checklist wall. */
  var FIRST_WEEK = [
    { id: 'have', day: 0, desk: 'Records', done: function () { return S.assets.length > 0; }, text: function () { return 'Add what you have. Your household record is empty until you do.'; }, key: 'Add what you have', act: 'add-asset' },
    { id: 'owe', day: 0, desk: 'Records', done: function () { return S.liabilities.length > 0; }, text: function () { return (S.assets.length ? S.assets.length + (S.assets.length === 1 ? ' line is' : ' lines are') + ' in. ' : '') + 'Add what you owe: a mortgage, a loan, a card. It shows beside what you own, never netted away.'; }, key: 'Add what you owe', act: 'add-debt' },
    { id: 'rule', day: 1, desk: 'Governance', done: function () { return S.policy.length > 0; }, text: function () { return 'Write your first rule: how much cash must always be reachable.'; }, key: 'Write the rule', act: 'edit-policy' },
    { id: 'family', day: 2, desk: 'Records', done: function () { return S.people.length > S.members.length; }, text: function () { return 'Who is in the family? Add the children, parents, anyone you want in the record.'; }, key: 'Add a person', href: '#/records/family' },
    { id: 'cover', day: 3, desk: 'Protection', done: function () { return S.cover.length > 0; }, text: function () { return 'List the cover you have. One policy at a time, or upload the policy and Freya fills it in.'; }, key: 'List your cover', href: '#/protection/cover' },
    { id: 'will', day: 5, desk: 'Succession', done: function () { return S.will.exists === 'Yes' || S.will.exists === 'No'; }, text: function () { return 'Is there a will, and where is the original?'; }, key: 'Answer it', act: 'edit-will' }
  ];
  function firstWeek() {
    var age = days(S.household.opened, DEMO_TODAY), set = S.firstWeekSet || {};
    for (var i = 0; i < FIRST_WEEK.length; i++) {
      var c = FIRST_WEEK[i];
      if (c.done() || set[c.id]) continue;
      return c.day <= age ? c : null;
    }
    return null;
  }
  /* ── LEARN · the household's part (the Map grows, 29 Sep 2026) ─────────────────────────
     The catalogue is learn.js (LEARN: 33 paths, 320 quests); S.learn holds only what the household
     did. A path opens when the one before it on its branch is done. While a path is open or under
     way, the step after it shows as a bud; nothing deeper is drawn (M-02), so the second arm of a
     desk appears only once its Activate path is done. XP is 40 a quest and 200 for a test the first
     time it is passed; it belongs to the question, never to money (G-05). Rank is twelve growth
     rings on a curve cut to the Map as it stands: 400 × (rank − 1)^k, rounded to 100, k set so the
     twelfth ring (Luminary) closes at the whole Map (proposal L-4). */
  var LM = window.LEARN || { STAGES: [], DESKS: [], TREE: {}, ZONES: {}, PATHS: {}, POOLS: {} };
  var LPARENT = {}, LBUD = { 'first-picture': true }, LZONE = { 'first-picture': 'The trunk' }, LORDER = ['first-picture'];
  Object.keys(LM.TREE).forEach(function (d) {
    var t = LM.TREE[d], first = t[0], z = LM.ZONES[d] || [];
    LPARENT[first] = 'first-picture'; LZONE[first] = z[0]; LBUD[first] = true; LORDER.push(first);
    (t[1] || []).forEach(function (arm, ai) {
      arm.forEach(function (id, k) { LPARENT[id] = k ? arm[k - 1] : first; LZONE[id] = z[ai + 1]; LBUD[id] = k > 0 || ai === 0; LORDER.push(id); });
    });
    Object.keys(t[2] || {}).forEach(function (id) { LPARENT[id] = t[2][id]; });   /* a path that waits for another (Private markets for the Foundation) */
  });
  var LTOTAL = 0;
  Object.keys(LM.PATHS).forEach(function (k) { LTOTAL += 40 * LM.PATHS[k].quests.length + (LM.PATHS[k].cls === 'cert' ? 200 : 0); });
  var LEXP = Math.log(Math.max(LTOTAL, 4400) / 400) / Math.log(11), CURVE = [0];
  for (var rk = 2; rk <= 12; rk++) CURVE.push(Math.round(400 * Math.pow(rk - 1, LEXP) / 100) * 100);
  var RANKS = { 1: 'Explorer', 12: 'Luminary' };
  function lL() { var L = S.learn || (S.learn = {}); L.done = L.done || {}; L.days = L.days || []; L.tests = L.tests || {}; L.earned = L.earned || {}; return L; }
  function lAns(id) { return lL().done[id] || []; }
  function lComplete(id) {
    var P = LM.PATHS[id]; if (!P) return false;
    return lAns(id).length >= P.quests.length && (P.cls !== 'cert' || !!(lL().tests[id] && lL().tests[id].passed));
  }
  function lState(id) {
    if (lComplete(id)) return 'done';
    if (lAns(id).length) return 'progress';
    /* only in the tutorial: a desk's paths wait for the desk (Christian, 3 Oct 2026: "we are getting ahead of
       ourselves"). Its first path shows as a bud, "opens with the desk"; nothing deeper is drawn. */
    var P = LM.PATHS[id];
    if (P && !deskOpen(P.desk)) return LPARENT[id] === 'first-picture' ? 'next' : 'hidden';
    var par = LPARENT[id];
    if (!par || lComplete(par)) return 'open';
    var ps = lState(par);
    return LBUD[id] && (ps === 'open' || ps === 'progress') ? 'next' : 'hidden';
  }
  /* a path as every screen reads it */
  function lpath(id) {
    var P = LM.PATHS[id]; if (!P) return null;
    var a = lAns(id), st = lState(id), cert = P.cls === 'cert', n = P.quests.length, nq = 0;
    for (var i = 1; i <= n; i++) if (a.indexOf(i) < 0) { nq = i; break; }
    return { id: id, title: P.t, desk: P.desk, cls: cert ? 'certificate' : 'badge', cert: cert, blurb: P.blurb, minutes: P.min, quests: n,
      done: a.length, answered: a, state: st, nextQ: nq, testReady: cert && a.length >= n && st !== 'done', zone: LZONE[id] || '',
      parent: LPARENT[id] || '', earned: lL().earned[id] || '', lock: st === 'next' && !deskOpen(P.desk) };
  }
  function learnPaths(desk) { return LORDER.map(lpath).filter(function (p) { return p && (!desk || p.desk === desk); }); }
  /* the path to suggest: the one under way on the desk (or anywhere), else the first open */
  function nextPath(desk) {
    var ps = learnPaths().filter(function (p) { return p.desk !== 'trunk' && (!desk || p.desk === desk) && (p.state === 'progress' || p.state === 'open'); });
    return ps.filter(function (p) { return p.state === 'progress'; })[0] || ps[0] || null;
  }
  /* where a path picks up: its first quest not yet answered, or its test, or the path itself */
  function learnHref(p) {
    if (!p) return '#/learn';
    if (p.testReady) return '#/learn/path/' + p.id + '/test';
    return p.nextQ && (p.state === 'progress' || p.state === 'open') ? '#/learn/path/' + p.id + '/quest/' + p.nextQ : '#/learn/path/' + p.id;
  }
  function learnXP() {
    var L = lL(), x = 0;
    Object.keys(L.done).forEach(function (k) { if (LM.PATHS[k]) x += 40 * L.done[k].length; });
    Object.keys(L.tests).forEach(function (k) { if (L.tests[k].passed) x += 200; });
    return x + (LI ? idXP() : 0);
  }
  function ring(xp) {
    var r = 1; for (var i = 1; i < CURVE.length; i++) if (xp >= CURVE[i]) r = i + 1;
    var lo = CURVE[r - 1], hi = CURVE[r] || 0;
    return { r: r, lo: lo, hi: hi, frac: hi ? (xp - lo) / (hi - lo) : 1, toNext: hi ? hi - xp : 0, name: RANKS[r] || '' };
  }
  function lStates() { var o = {}; LORDER.forEach(function (id) { o[id] = lState(id); }); return o; }
  /* the paths whose state a change moved: what opened, what arrived as a bud */
  function lDiff(before) {
    var after = lStates(), out = { opened: [], arrived: [], shown: [] };
    LORDER.forEach(function (id) {
      if ((before[id] === 'next' || before[id] === 'hidden') && after[id] === 'open') out.opened.push(id);
      if (before[id] === 'hidden' && after[id] === 'next') out.arrived.push(id);
      if (before[id] === 'hidden' && after[id] !== 'hidden') out.shown.push(id);
    });
    return out;
  }
  /* a quest answered: the first time it earns 40 XP and a leaf; a second answer earns nothing more */
  function learnAnswer(id, n) {
    var L = lL(), P = LM.PATHS[id]; if (!P) return null;
    var a = L.done[id] || (L.done[id] = []), first = a.indexOf(n) < 0, before = learnXP(), st0 = lStates(), wasDone = lComplete(id);
    if (first) {
      a.push(n); a.sort(function (x, y) { return x - y; });
      if (L.days.indexOf(DEMO_TODAY) < 0) L.days.push(DEMO_TODAY);
      log('Answered quest ' + n + ' of ' + P.t);
      if (!wasDone && lComplete(id)) { L.earned[id] = DEMO_TODAY; log('Finished ' + P.t + ', a badge'); }
      L.last = { id: id, n: n, done: lComplete(id) };   /* the latest step (the old Map drew it; nothing reads it since 14 Oct 2026) */
      save();
    }
    var after = learnXP(), d = lDiff(st0);
    return { first: first, xpBefore: before, xp: after, ringUp: ring(after).r > ring(before).r, finished: !wasDone && lComplete(id), opened: d.opened, arrived: d.arrived, shown: d.shown };
  }
  /* a quest as the household reads it. In the tutorial (?tutorial) the quests that name the Johnsens
     are asked on the household's own record instead (freya-tutorial.js, FT.quest): same answer first,
     the household's own words and figures (3 Oct 2026) */
  function learnQ(pid, n) {
    var P = LM.PATHS[pid], q = P && P.quests[n - 1]; if (!q) return null;
    var o = TUT && window.FT && window.FT.quest ? window.FT.quest(pid, n) : null; if (!o) return q;
    var c = {}, k; for (k in q) c[k] = q[k]; for (k in o) if (o[k] != null) c[k] = o[k]; return c;
  }
  /* a certificate test taken: 6 of 8 passes; the first pass earns 200 XP and the certificate */
  function learnTest(id, right) {
    var L = lL(), t = L.tests[id] || (L.tests[id] = { tries: 0 }), before = learnXP(), st0 = lStates(), pass = right >= 6, first = pass && !t.passed;
    t.tries++; t.last = right;
    if (first) { t.passed = DEMO_TODAY; L.earned[id] = DEMO_TODAY; L.last = { id: id, test: true, done: true }; if (L.days.indexOf(DEMO_TODAY) < 0) L.days.push(DEMO_TODAY); log('Earned the certificate for ' + LM.PATHS[id].t + ', ' + right + ' of 8'); }
    else log('Took the ' + LM.PATHS[id].t + ' test, ' + right + ' of 8');
    save();
    var after = learnXP(), d = lDiff(st0);
    return { pass: pass, first: first, xpBefore: before, xp: after, ringUp: ring(after).r > ring(before).r, opened: d.opened, arrived: d.arrived, shown: d.shown };
  }
  /* ── LEARN · THE FINANCIAL IDENTITY, the household's part (29 Sep 2026) ────────────────────
     The branch is LEARN.IDENTITY (learn.js). S.learn.identity holds what the household answered:
     `main` quests of the path in order (quest 1 is the tutorial's four answers: nothing is asked
     twice), `side` quests of the side tree, the answers the title is drawn from (`ans`) and the
     rest (`more`), when each was given, the check-ups, and the history, which only adds. The title
     is drawn by written rules (idResolve), the same for every household; it firms at a stage end
     and at a check-up, never from one answer (ID-10), and it never decides access. */
  var LI = LM.IDENTITY || null, IDCUM = [];
  if (LI) LI.SQ.reduce(function (a, b) { IDCUM.push(a + b); return a + b; }, 0);
  if (LI) LTOTAL += 40 * (LI.QUESTS.length + LI.SIDE.length);   /* the identity's quests count towards the rings too */
  var IDEXP = Math.log(Math.max(LTOTAL, 4400) / 400) / Math.log(11);
  CURVE.length = 1; for (var rk2 = 2; rk2 <= 12; rk2++) CURVE.push(Math.round(400 * Math.pow(rk2 - 1, IDEXP) / 100) * 100);
  function idSeed(day) {
    var w = S.identity || {}, hz = w.horizon, bad = /cash/i.test(w.badYear || '') ? 'cash' : /ask/i.test(w.badYear || '') ? 'ask' : /rebalanc/i.test(w.badYear || '') ? 'rebalance' : 'hold';
    var who = /children|emma|oscar|kids/i.test(w.whoFor || '') ? 'family' : /partner|us\b/i.test(w.whoFor || '') ? 'partner' : 'family';
    var ans = { purpose: 'security', horizon: hz == null ? 'decade' : hz < 6 ? 'few' : hz <= 15 ? 'decade' : hz <= 30 ? 'decades' : 'generations', bad: bad, who: who, decide: '', reach: '', breadth: '', second: '' };
    var r = idResolve(ans), d = day || (S.household && S.household.tutorialDone) || DEMO_TODAY;
    return { main: 1, side: 0, charter: '', ans: ans, picks: [], sentence: '', more: {}, title: { arch: r.arch, mod: r.mod }, dates: { q1: d, bad: d }, stages: {}, checkups: [],
      hist: [{ date: d, t: 'A first reading', d: 'The ' + r.mod + ' ' + r.arch + ', from four answers you gave in the tutorial.' }] };
  }
  function idS() { var L = lL(); if (!L.identity) L.identity = idSeed(); return L.identity; }
  /* the title: the archetype from what the money is for and how long it can wait; the modifier from
     a bad year, how you decide, what stays reachable and breadth; the line under it from the second
     choice in quest 2, or, before it, from who the money is for */
  function idResolve(a) {
    if (!LI) return { arch: '', mod: '', sig: '', title: '', sigLine: '', chips: [] };
    var P = a.purpose || 'security', H = a.horizon || 'decade', B = a.bad || 'hold', Dd = a.decide || '', Rc = a.reach || '', Br = a.breadth || '';
    var arch = (LI.ARCH_TABLE[P] || LI.ARCH_TABLE.security)[H], calm = B === 'hold' || B === 'rebalance', mod;
    if (Br === 'wide' && (calm || B === 'ask')) mod = 'Curious';
    else if (B === 'cash') mod = 'Careful';
    else if (B === 'ask') mod = Dd === 'research' ? 'Deliberate' : Dd === 'depends' ? 'Adaptive' : 'Measured';
    else mod = Dd === 'conviction' ? 'Decisive' : Rc === 'committed' ? 'Patient' : Dd === 'depends' ? 'Adaptive' : Dd === 'research' ? 'Deliberate' : 'Steady';
    var W = a.who || 'family', sig;
    if (a.second) sig = a.second;
    else if (Rc === 'committed' || Rc === 'some') sig = 'time';
    else sig = W === 'family' ? 'family' : W === 'generations' ? 'legacy' : W === 'purpose' ? 'causes' : (H === 'decades' || H === 'generations') ? 'time' : 'security';
    var chips = [{ few: 'Near horizon', decade: 'Ten-year horizon', decades: 'Long horizon', generations: 'Generational horizon' }[H],
      { cash: 'Keeps a reserve first', hold: 'Holds through a bad year', rebalance: 'Rebalances in a bad year', ask: 'Asks before acting' }[B]];
    return { arch: arch, mod: mod, sig: sig, title: 'The ' + mod + ' ' + arch, sigLine: LI.SIGS[sig], chips: chips };
  }
  function idStageDone(I) { var n = 0; IDCUM.forEach(function (c) { if (I.main >= c) n++; }); return n; }
  /* a check-up: the answers that are due. A certificate that bears on an earlier answer opens it
     again (Investment Foundation, earned after the bad-year answer); time opens the rest six months
     after Foundation, and then every six months. Nothing is ever overdue. */
  function idCheckup() {
    var I = idS(); if (!LI || idStageDone(I) < 1) return null;
    var last = I.checkups.length ? I.checkups[I.checkups.length - 1].date : I.stages.s1, next = addDays(last, 182);
    var f = lL().tests['ia-found'], due = [];
    if (f && f.passed && f.passed >= (I.dates.bad || '') && !I.checkups.some(function (c) { return c.date >= f.passed; })) due.push({ k: 'bad', kind: 'Knowledge', why: 'You earned Investment Foundation on ' + date(f.passed) + ', after you gave this answer.' });
    return { next: next, ready: due.length > 0, due: due };
  }
  function idXP() { var I = idS(); return 40 * (I.main + I.side + I.checkups.length); }
  /* a quest of the path, saved: its answers go in, 40 XP the first time, and at a stage end the
     title is drawn again */
  function idSave(n, data) {
    var I = idS(), first = n > I.main, before = learnXP(), rb = ring(before).r, sd0 = idStageDone(I);
    if (first) lL().last = { id: 'identity', n: n };
    Object.keys(data || {}).forEach(function (k) {
      if (k in I.ans) I.ans[k] = data[k];
      else if (k === 'picks') I.picks = data.picks.slice();
      else if (k === 'sentence') I.sentence = data.sentence;
      else I.more[k] = data[k];
    });
    if (data && data.bad) I.dates.bad = DEMO_TODAY;
    if (first) { I.main = n; I.dates['q' + n] = DEMO_TODAY; if (lL().days.indexOf(DEMO_TODAY) < 0) lL().days.push(DEMO_TODAY); }
    var sd = idStageDone(I), stageEnd = sd > sd0 ? sd : 0, was = 'The ' + I.title.mod + ' ' + I.title.arch;
    if (n === 2) { var r2 = idResolve(I.ans); I.hist.push({ date: DEMO_TODAY, t: 'Quest 2 · What your money is for', d: 'The line under your title became “' + r2.sigLine.charAt(0).toUpperCase() + r2.sigLine.slice(1) + '”.' }); }
    if (stageEnd) {
      var r = idResolve(I.ans); I.title = { arch: r.arch, mod: r.mod }; I.stages['s' + stageEnd] = DEMO_TODAY;
      var now = 'The ' + r.mod + ' ' + r.arch, stg = LI.STAGES[stageEnd - 1];
      I.hist.push({ date: DEMO_TODAY, t: stg.name, d: stageEnd === 1 ? (was !== now ? 'Drawn again from your six Foundation answers.' : now + ', confirmed by your Foundation answers.') :
        stageEnd === 2 ? 'Your record now backs four of the traits: Aim, Horizon and Reach are firm, and Breadth appears.' :
        stageEnd === 3 ? 'Your intent is written, in your words; estate and tax are mapped as known, missing or for a professional.' : 'Your legacy line is written. The path is complete: a Completion Certificate, which records that you completed it and evidences nothing.',
        title: was !== now ? [was, now] : null });
      if (stageEnd === 4) L_earned('fo-identity-path');
    }
    if (first) log('Answered quest ' + n + ' of Your Financial Identity');
    save();
    var after = learnXP();
    return { first: first, stageEnd: stageEnd, xp: after, ringUp: ring(after).r > rb, was: was };
  }
  function L_earned(k) { var L = lL(); if (!L.earned[k]) L.earned[k] = DEMO_TODAY; }
  /* a quest of the side tree: with both members; the charter is drafted when the sixth is saved */
  function idSideSave(n, data) {
    var I = idS(), first = n > I.side, before = learnXP(), rb = ring(before).r;
    Object.keys(data || {}).forEach(function (k) { I.more[k] = data[k]; });
    if (first) { I.side = n; I.dates['f' + n] = DEMO_TODAY; if (lL().days.indexOf(DEMO_TODAY) < 0) lL().days.push(DEMO_TODAY); log('Answered quest ' + n + ' of Family Office Identity'); }
    if (n === 1 && first) I.hist.push({ date: DEMO_TODAY, t: 'Side tree · Two of you', d: 'Your Family Office Identity is formed from both titles, side by side.' });
    if (n === 6 && first) { I.charter = 'draft'; I.hist.push({ date: DEMO_TODAY, t: 'Family Charter · a draft', d: 'Drafted from the six quests of the side tree, for the two of you to agree.' }); }
    save();
    var after = learnXP();
    return { first: first, xp: after, ringUp: ring(after).r > rb };
  }
  function idAgree() {
    var I = idS(); if (I.charter !== 'draft') return;
    I.charter = 'agreed'; I.dates.charter = DEMO_TODAY; L_earned('fo-charter');
    I.hist.push({ date: DEMO_TODAY, t: 'Family Charter · version 1', d: 'Agreed by ' + S.members.map(function (m) { return m.name.split(' ')[0]; }).join(' and ') + '. Rules appears: by written rule.' });
    log('Agreed the Family Charter, version 1'); save();
  }
  /* a check-up saved: "Still true" is a full answer; the modifier may move, the archetype only when
     both of its answers do */
  function idCheckSave(changes) {
    var I = idS(), was = 'The ' + I.title.mod + ' ' + I.title.arch, before = learnXP(), rb = ring(before).r, moved = [];
    Object.keys(changes || {}).forEach(function (k) { if (changes[k] != null && I.ans[k] !== changes[k]) { moved.push({ k: k, from: I.ans[k], to: changes[k] }); I.ans[k] = changes[k]; if (k === 'bad') I.dates.bad = DEMO_TODAY; } });
    var r = idResolve(I.ans); I.title = { arch: I.title.arch, mod: r.mod };
    var now = 'The ' + I.title.mod + ' ' + I.title.arch;
    I.checkups.push({ date: DEMO_TODAY, moved: moved.map(function (m) { return m.k; }) });
    if (lL().days.indexOf(DEMO_TODAY) < 0) lL().days.push(DEMO_TODAY);
    I.hist.push({ date: DEMO_TODAY, t: 'Check-up', d: (moved.length ? (moved.length === 1 ? 'One answer changed. ' : moved.length + ' answers changed. ') : 'Every answer still true. ') + (was === now ? 'Your title stays ' + now + '.' : 'The modifier moved; the archetype stays.'), title: was !== now ? [was, now] : null });
    log('Took a Financial Identity check-up'); save();
    var after = learnXP();
    return { moved: moved, was: was, now: now, xp: after, ringUp: ring(after).r > rb };
  }

  /* Today: one card per kind, never three asks. Its cards come from fixed rules, so the heading no
     longer says Freya prepared them (27 Sep 2026) */
  function today() {
    var needs = needsList()[0] || null, noticed = null;
    ((S.briefing && S.briefing.items) || []).some(function (it, i) {
      var topic = i === 0 ? 'drift' : i === 1 ? 'renewal' : 'stale';
      if (needs && needs.topic === topic) return false;
      noticed = { text: it.text, src: it.src, ask: i === 1 ? 'What should we check before the home insurance renews?' : 'Tell me more about this: ' + it.text };
      return true;
    });
    var fw = firstWeek(), path = nextPath(), opens = null;
    if (fw) opens = { first: fw.id, text: fw.text(), sub: 'The first week · ' + fw.desk, key: fw.key, act: fw.act, href: fw.href };
    else if (path) opens = { text: path.title + (path.state === 'progress' ? ' · quest ' + (path.done + 1) + ' of ' + path.quests : ' · ' + path.quests + ' quests'), sub: path.minutes + ' minutes, one question at a time',
      key: path.state === 'progress' ? 'Continue' : 'Open path', href: learnHref(path) };
    return { needs: needs, noticed: noticed, opens: opens };
  }

  /* ── THE DESKS OPEN ONE AT A TIME (3 Oct 2026) ─────────────────────────────────────────
     After the deep user test of 2 Oct ("overwhelming that everything was available from the
     beginning"), and Christian's order: Records, then Investment, Policy, Protection, Succession.
     Only in the tutorial (?tutorial): a desk is open once the tutorial has opened it (S.tutor.open,
     a quest on Learn opens the next one), once the tutorial is done, or once the household chose
     "Open every desk now" (S.household.allDesks). Everywhere else every desk is open. A locked desk
     is still there: in the bar and on Home with a lock, and its page is a peek with "Open it now". */
  var DESK_ORDER = ['records', 'investment', 'policy', 'protection', 'succession'];
  function desksAllOpen() { return !TUT || !!S.household.allDesks || !!(S.tutor && S.tutor.done); }
  function deskOpen(k) {
    if (DESK_ORDER.indexOf(k) < 0 || desksAllOpen()) return true;
    return ((S.tutor && S.tutor.open) || ['records']).indexOf(k) > -1;
  }
  function openDesk(k, quiet) {
    if (deskOpen(k)) return false;
    var t = S.tutor || (S.tutor = {}); t.open = (t.open || ['records']).slice(); t.open.push(k);
    if (!quiet) log('Opened the ' + DESKS[k].noun + ' desk');
    save(); return true;
  }
  function openAllDesks() { if (desksAllOpen()) return; S.household.allDesks = DEMO_TODAY; log('Opened every desk'); save(); }
  function deskBefore(k) { var i = DESK_ORDER.indexOf(k); return i > 0 ? DESK_ORDER[i - 1] : ''; }
  function desksOpenCount() { return DESK_ORDER.filter(deskOpen).length; }
  /* a desk with a decision for the household (the concept, 11 Oct 2026): a renewal inside 30 days. It wears
     Bullion: a dot in the menu, the desk's one main key on its page, the first card of This week on Office */
  function deskDecision(k) { return k === 'protection' && renewalsWithin(30).length > 0; }

  /* ── FREYA GROWS WITH THE HOUSEHOLD (3 Oct 2026) ───────────────────────────────────────
     Christian: "find a visual idea to show how Freya is getting more and more individualized …
     understanding the deeper behavior … it will slowly very slowly grow … a long journey over months
     of use; unless they do all the paths and quests within a few weeks, but then the behavioural
     understanding will still be limited." Six strands, each 0–100:
       · five are the desks: what she knows of each, from the record (up to 30), from the quests the
         household answered on that desk (up to 50) and from time with the record kept (up to 20).
         A household that does every path can fill them in weeks;
       · the sixth, How you decide, is learned only from time together: the questions asked, the days
         the household comes back, the decisions it writes down, the months since it met her. It is
         held to about 8 points a month however fast the rest goes, so it takes most of a year.
     Drawn as her rings (VIEWS.fgRings): five arcs outside, one ring inside, her mark in the middle. */
  var FG_AT = [10, 30, 50, 70, 90];
  var FG_LEVEL = ['Not yet', 'Starting to understand', 'The outline', 'The detail', 'Knows it well', 'Knows it by heart'];
  var FG_YOU_LEVEL = ['Just met', 'Getting to know you', 'Knows your rhythm', 'Knows how you decide', 'Thinks a step ahead', 'Knows you deeply'];
  var FG = [
    { k: 'records', t: 'Your household record', can: ['I can tell you what you own and owe, with the source of every figure.', 'I notice when a figure is getting old, and which statement would make it exact.', 'I can tell your story over the years: what changed, when and why.'] },
    { k: 'investment', t: 'Your money at work', can: ['I can say what you hold, and how it’s spread.', 'I explain a drift the day it happens, and which holdings moved it.', 'I connect your mix to your goals and to the choices you made before.'] },
    { k: 'policy', t: 'Your rules and goals', can: ['I can read your rules back to you and check today against them.', 'I prepare your yearly review from what changed since the last one.', 'I see when a goal and a rule pull in different directions, before it costs you.'] },
    { k: 'protection', t: 'What protects you', can: ['I can list your cover and name what is not in the record.', 'I remind you before each renewal, with what changed since you bought it.', 'I weigh your cover against your family’s life as it changes.'] },
    { k: 'succession', t: 'What you pass on', can: ['I can say whether there is a will, and where the original is.', 'I keep the people and papers your family would need in one place.', 'I help you prepare the conversations that pass it on.'] }
  ];
  var FG_YOU_CAN = ['I answer the way you ask: short when you are brief, in full when you dig.', 'I know which pages you come back to, and start there.',
    'I know how you weigh a decision, and lay out the options that way.', 'I bring up what you would want to know before you ask.', 'I know what matters to your family, and why.'];
  function fgLevel(p) { var n = 0; FG_AT.forEach(function (a) { if (p >= a) n++; }); return n; }
  /* what she knows of a desk, fact by fact: [what, known, the words when known] */
  function fgFacts(k) {
    var inv = S.assets.filter(isInvestable), plural = function (n, w) { return n + ' ' + w + (n === 1 ? '' : 's'); };
    var stmt = function (list) { return list.some(function (a) { return S.valuations.some(function (v) { return v.line === a.id && v.source && v.source !== 'entered'; }); }); };
    var fam = S.people.length, homes = S.assets.filter(function (a) { return a.cls === 'property'; });
    var idDone = 0; try { idDone = LI ? idStageDone(idS()) : 0; } catch (x) { idDone = 0; }
    var w = S.will || {}, cv = S.cover || [];
    if (k === 'records') return [
      ['What you own', S.assets.length > 0, plural(S.assets.length, 'line') + ' you own'],
      ['What you owe', S.liabilities.length > 0, plural(S.liabilities.filter(function (l) { return l.kind !== 'commitment'; }).length, 'debt')],
      ['Who it is for', fam > 1, (fam === 1 ? 'One person' : fam + ' people') + ' in the family'],
      ['Your home', homes.length > 0, homes.length ? homes[0].name : ''],
      ['A statement behind a figure', stmt(S.assets), 'Figures from statements, not only typed in'],
      ['Your papers', S.documents.length > 0, plural(S.documents.length, 'document') + ' in the Family Vault'],
      ['Your advisers', S.advisers.length > 0, plural(S.advisers.length, 'adviser')]];
    if (k === 'investment') return [
      ['What you hold', inv.length > 0, plural(inv.length, 'account') + ', ' + short(investable().total)],
      ['Inside each account', inv.some(function (a) { return a.positions && a.positions.length; }), 'The funds and shares inside'],
      ['What it costs', inv.some(function (a) { return a.fee != null; }), 'Fees on ' + plural(inv.filter(function (a) { return a.fee != null; }).length, 'holding')],
      ['Every fee', inv.length > 0 && inv.every(function (a) { return a.fee != null; }), 'A fee on every holding'],
      ['A statement for an account', stmt(inv), 'Holdings read from a statement'],
      ['Private markets', inv.some(function (a) { return a.cls === 'private'; }), 'A private holding']];
    if (k === 'policy') return [
      ['Your Financial Identity', idDone > 0, idDone ? 'Stage ' + idDone + ' of 4' : ''],
      ['Your rules', !!policy(), policy() ? 'Version ' + S.policy.length + ', from ' + date(policy().effective) : ''],
      ['A goal', S.goals.length > 0, S.goals.length ? S.goals[0].name : ''],
      ['What each goal draws on', S.goals.some(function (g) { return g.linked && g.linked.length; }), 'Accounts linked to a goal'],
      ['Rules you have changed', S.policy.length > 1, plural(S.policy.length, 'version') + ' of your rules']];
    if (k === 'protection') return [
      ['Your cover', cv.length > 0, plural(cv.length, 'policy', 'policies').replace('policys', 'policies')],
      ['Life cover', cv.some(function (c) { return c.type === 'Life'; }), 'Life cover recorded'],
      ['Your home’s cover', cv.some(function (c) { return /home/i.test(c.type); }), 'Home cover recorded'],
      ['When each renews', cv.some(function (c) { return !!c.renews; }), 'Renewal dates'],
      ['A policy on file', cv.some(function (c) { return !!c.doc; }), 'A policy document in the Vault']];
    var me0 = S.people[0], mates = me0 ? partnersOf(me0.id) : [], wed = mates.length ? unionStatus(me0.id, mates[0]) : '';
    if (k === 'succession') return [
      mates.length ? ['Whether you are married', !!wed, wed === 'married' ? 'Married' : wed === 'civil' ? 'A civil partnership' : 'Partners, not married'] : null,
      ['Whether there is a will', !!w.exists, w.exists === 'Yes' ? 'A will is recorded' : w.exists === 'No' ? 'No will yet, recorded' : 'Not sure yet, recorded'],
      ['Where the original is', !!w.original, w.original || ''],
      ['Who carries it out', !!w.executors, w.executors || ''],
      ['When it was signed', !!w.signed, w.signed ? date(w.signed) : ''],
      ['Your partner in the office', S.members.length > 1, plural(S.members.length, 'member')]].filter(Boolean);
    return [];
  }
  function fgMonths() { return Math.max(0, days(S.household.opened || DEMO_TODAY, DEMO_TODAY) / 30.44); }
  function fgDays() {
    var d = {}; (S.log || []).forEach(function (x) { if (x.at) d[x.at] = 1; }); ((S.learn && S.learn.days) || []).forEach(function (x) { d[x] = 1; });
    return Math.max(1, Object.keys(d).length);
  }
  function freyaGrowth() {
    var mo = fgMonths(), out = { strands: [], months: mo, days: fgDays(), asked: (S.freya && S.freya.messages) || 0, decisions: S.policy.length + S.goals.length };
    FG.forEach(function (f) {
      var facts = fgFacts(f.k), known = facts.filter(function (x) { return x[1]; }).length, ps = learnPaths().filter(function (p) { return p.desk === f.k || (f.k === 'records' && p.desk === 'trunk'); });
      var qa = ps.reduce(function (s, p) { return s + p.done; }, 0), qn = ps.reduce(function (s, p) { return s + p.quests; }, 0);
      var pct = Math.round(30 * (facts.length ? known / facts.length : 0) + 50 * (qn ? qa / qn : 0) + 20 * (known ? Math.min(1, mo / 12) : 0));
      if (known && pct < FG_AT[0]) pct = FG_AT[0];   /* anything she knows of a desk is a start */
      var lv = fgLevel(pct);
      out.strands.push({ k: f.k, t: f.t, pct: pct, level: lv, name: FG_LEVEL[lv], facts: facts, known: known, quests: qa, of: qn,
        can: lv >= 1 ? f.can[lv >= 5 ? 2 : lv >= 3 ? 1 : 0] : '', next: lv < 1 ? { at: FG_AT[0], can: f.can[0] } : lv < 3 ? { at: FG_AT[2], can: f.can[1] } : lv < 5 ? { at: FG_AT[4], can: f.can[2] } : null, all: f.can });
    });
    var raw = 100 * (0.35 * Math.min(1, out.asked / 80) + 0.25 * Math.min(1, out.days / 90) + 0.25 * Math.min(1, mo / 12) + 0.15 * Math.min(1, out.decisions / 12));
    var you = Math.round(Math.min(raw, 4 + mo * 8)), ylv = fgLevel(you);
    out.you = { k: 'you', t: 'How you decide', pct: you, level: ylv, name: FG_YOU_LEVEL[ylv], can: ylv ? FG_YOU_CAN[ylv - 1] : '', next: ylv < 5 ? { at: FG_AT[ylv], can: FG_YOU_CAN[ylv] } : null, all: FG_YOU_CAN };
    out.pct = Math.round((out.strands.reduce(function (s, x) { return s + x.pct; }, 0) + out.you.pct) / 6);
    return out;
  }

  return {
    S: S, save: save, esc: esc, money: money, short: short, base: base, sym: sym, curWords: curWords, pct: pct, date: date, month: month, days: days,
    addDays: addDays, uid: uid, ic: ic, fyMark: fyMark, sectionIcon: sectionIcon, who: who, log: log,
    CLS: CLS, MIXL: MIXL, MIXC: MIXC, CLS_TOK: CLS_TOK, DEFAULT_MIX: DEFAULT_MIX, LIQ: LIQ, DESKS: DESKS, POLICY_CLASSES: POLICY_CLASSES,
    asset: asset, liability: liability, line: line, doc: doc, adviser: adviser, history: history, cur: cur, amount: amount,
    stale: stale, staleLimit: staleLimit, srcLabel: srcLabel, isInvestable: isInvestable, totals: totals, investable: investable,
    policy: policy, drift: drift, reachableCash: reachableCash, largestSingle: largestSingle, movers: movers,
    staleLines: staleLines, renewalsWithin: renewalsWithin, goalProgress: goalProgress, timeline: timeline, today: today, filed: filed,
    needsList: needsList, firstWeek: firstWeek, nextPath: nextPath, TUT: TUT, TUT_V: TUT_V, KEY: KEY,
    DESK_ORDER: DESK_ORDER, deskDecision: deskDecision, deskOpen: deskOpen, openDesk: openDesk, openAllDesks: openAllDesks, desksAllOpen: desksAllOpen, deskBefore: deskBefore, desksOpenCount: desksOpenCount,
    freyaGrowth: freyaGrowth, FG_AT: FG_AT, FG_LEVEL: FG_LEVEL, FG_YOU_LEVEL: FG_YOU_LEVEL, learnQ: learnQ,
    LM: LM, learnPath: lpath, learnPaths: learnPaths, learnHref: learnHref, learnXP: learnXP, ring: ring, learnAnswer: learnAnswer, learnTest: learnTest,
    LI: LI, idS: idS, idResolve: idResolve, idStageDone: idStageDone, idCheckup: idCheckup, idSave: idSave, idSideSave: idSideSave, idAgree: idAgree, idCheckSave: idCheckSave, sim: window.FinnaSim || null,
    belongsTo: belongsTo, fileTargets: fileTargets, fileDoc: fileDoc, catFor: catFor, propose: propose,
    person: person, parentsOf: parentsOf, partnersOf: partnersOf, generations: generations, namedIn: namedIn, viewerPerson: viewerPerson,
    UNION: UNION, UNION_WORD: UNION_WORD, unionStatus: unionStatus, setUnion: setUnion, unionLine: unionLine
  };
})();

/* ══ THE PLATFORM · views — each returns the markup for one screen ═══════════════════
   Built from the shared components only: .screen, .page-head/.intro, .panel, dl.pairs,
   .record, .data-table, .toolbar/.search, .status-label, .key, .input, .form-row,
   .choice, .switch, .collection-state, .actions. */
var VIEWS = (function (A) {
  'use strict';
  var e = A.esc;

  /* ── shared pieces ───────────────────────────────────────────────────── */
  /* A DESK PAGE (build spec §2, "A desk page"). Its Suggested view opens with the desk's name and
     its status; every other page with the page's own name. The lede under the title and the
     "Held to" line went on 28 Sep 2026 (Christian: they only interest someone at the start, and
     "we should not have marketing text like that on the platform, better with more white space");
     the words people need are explained where they stand, by the "i" tags. `lead` is kept in the
     signature so the pages that pass one still work, and is not drawn. */
  function deskIntro(key, actions) {
    var d = A.DESKS[key];
    return '<div class="page-head"><div class="intro">' +
      '<div class="title-row"><h1 class="title">' + e(d.noun) + '</h1><span class="status-label ' + (d.status === 'Open' ? 'ok' : 'neutral') + '">' + e(d.status) + '</span></div></div>' +
      (actions ? '<div class="page-head-actions">' + actions + '</div>' : '') + '</div>';
  }
  function deskPage(key, title, actions, lead) {
    return '<div class="page-head"><div class="intro"><h1 class="title">' + e(title) + '</h1></div>' +
      (actions ? '<div class="page-head-actions">' + actions + '</div>' : '') + '</div>';
  }
  /* a page outside the desks: Learn, Freya's briefings, the Family Vault, Profile */
  function placeHead(title, lead, actions) {
    return '<div class="page-head"><div class="intro"><h1 class="title">' + e(title) + '</h1>' + (lead ? '<p class="lead">' + e(lead) + '</p>' : '') + '</div>' +
      (actions ? '<div class="page-head-actions">' + actions + '</div>' : '') + '</div>';
  }
  /* ── THE "i" TAGS (28 Sep 2026) ──────────────────────────────────────────────────────────
     Christian: "implement the "i" tags at all the important words and sentences, we really want
     people with low financial literacy to easily be able to learn by hovering over the i tags."
     A term keeps its own words; the brand's info icon after it ("explanation on request") opens a
     short, plain explanation: on hover with a mouse, on focus from the keyboard, on a tap on a
     phone (tap again, or anywhere else, to close). The words live here, in one place, so a term
     is explained the same way wherever it appears. Plain words, one or two sentences, no advice. */
  var GLOSS = {
    'total-wealth': ['Your total wealth', 'Everything the household owns, less everything it owes: the one number that shows where you stand. The picture under it shows both, to the same scale.'],
    'net-worth': ['Net worth', 'Everything the household owns, minus everything it owes. It is the one number that shows where you stand.'],
    'debts': ['What you owe', 'Money the household has borrowed and must pay back, like a mortgage, a home equity line or a car loan.'],
    'commitment': ['Committed, not yet called', 'Money promised to a private fund, which it asks for in parts over several years. Until the fund asks, it is not a debt, and it is not taken off your net worth.'],
    'holder': ['Holder', 'Whose name the account or asset is in. Joint means it belongs to both partners together.'],
    'share': ['Share', 'This line’s part of the total, as a percentage. All the shares in the table add up to 100%.'],
    'as-of': ['As of', 'The date the figure was true, and where it came from: a statement, a document, or entered by you. Values change, so every figure keeps its date.'],
    'check': ['Check the value', 'A figure older than the date you set for checking it. It still counts, with its date, until you confirm it or enter a new one.'],
    'secured': ['Set against', 'What the loan is secured on. If it is not paid back, the lender can claim it. A mortgage is set against a home.'],
    'rate': ['Rate', 'The interest you pay each year, as a percentage of what you still owe. A fixed rate stays the same; a variable rate can go up or down.'],
    'range': ['Your range', 'The lowest and highest share you allow for one kind of investment. Inside it, nothing needs doing. Outside it, the household decides what to do.'],
    'floor': ['Floor', 'The lowest share you allow for this kind of investment.'],
    'target': ['Target', 'The share you aim for. The range around it leaves room for markets to move.'],
    'ceiling': ['Ceiling', 'The highest share you allow for this kind of investment. Above it, one kind of risk has grown larger than you agreed.'],
    'drift': ['Drift', 'As markets move, the mix of what you hold changes on its own. Drift is how far it has moved from the ranges you set.'],
    'investable': ['Investable assets', 'What you hold to grow over time: investment and retirement accounts, bonds, cash and private holdings. Your homes, your own company, the car and valuables are left out.'],
    'listed-shares': ['Listed shares', 'Small pieces of companies, bought and sold on a stock exchange. Over many years they tend to grow the most, and in a bad year they can fall the most.'],
    'bonds': ['Bonds', 'Loans to a government or a company that pay you interest. They usually rise and fall less than shares, which steadies the whole.'],
    'cash': ['Cash', 'Money in bank and savings accounts that you can use within days. It earns little, but it is there when you need it.'],
    'private': ['Private markets', 'Investments in companies and funds that are not on a stock exchange. They may pay more, but the money is usually tied up for years.'],
    'reachable-cash': ['Cash that must stay reachable', 'The least you want to be able to spend within days, whatever the markets do. You set the amount; Finna checks it.'],
    'single-company': ['Largest single company', 'A limit on how much of what you invest can sit in one company, so a bad year for that company cannot sink the rest.'],
    'look-through': ['Looks through to', 'What an account or fund holds inside it. A retirement account often holds shares and bonds together, and each part counts toward its own range.'],
    'fee': ['Yearly fee', 'What a fund or account charges each year, as a percentage of what you hold in it. 0.35% of $100,000 is $350 a year, paid in good years and bad.'],
    'fee-year': ['Fee a year', 'The yearly fee in dollars: the percentage times what you hold. Small percentages add up over decades.'],
    'priority': ['Priority', 'Need is what the household must have, Want is what it would like, and Wish is a nice-to-have. When money is short, Needs come first.'],
    'linked': ['Linked today', 'The accounts you set aside for this goal, at what they are worth today. No growth is added.'],
    'gap': ['The gap', 'What the goal needs, minus what is linked to it today, before any growth.'],
    'pace': ['The pace', 'What you would have by the goal’s date if you keep setting aside the same amount each month, with no growth added. Arithmetic, not a forecast.'],
    'sum-insured': ['Sum insured', 'The most the insurer will pay under the policy. If it is less than what it would cost to rebuild or replace, you are underinsured.'],
    'premium': ['Premium', 'What you pay the insurer to keep the cover, usually monthly or once a year.'],
    'renews': ['Renews', 'The day the policy ends and a new term starts. It is when the cover and its price can change.'],
    'beneficiary': ['Beneficiary', 'The person named to receive the money from a policy or an account. It passes by that form, outside the will, so it is worth checking when life changes.'],
    'executor': ['Executor', 'The person who carries out the will: gathers what was left, pays what is owed, and passes the rest on as the will says.'],
    'original': ['Where the original is', 'The signed paper will. A copy is usually not enough, so the people who will need it should know where the original is kept.'],
    /* the what-if tools (28 Sep 2026) */
    'real-estate': ['Real estate', 'Buildings that earn rent, such as offices, apartments and warehouses, owned through a fund. Valued a few times a year, so its price moves slowly on paper.'],
    'infrastructure': ['Infrastructure', 'Roads, power lines, pipelines and similar assets that earn steady fees for decades, owned through a fund. The money is usually tied up for years.'],
    'private-equity': ['Private equity', 'Stakes in companies that are not on a stock exchange, held through funds for several years. It may pay more than listed shares, and the money is tied up.'],
    'paths': ['Paths', 'The tool plays out 3,000 possible futures, each with its own run of good and bad years drawn from the expected return and volatility. The answer is how many of them last.'],
    'one-in-ten': ['1 in 10', 'A low that only one path in ten does worse than, or a high that only one in ten does better than. A bad or a good run, not the worst or best possible.'],
    'expected-return': ['Expected a year', 'The average yearly growth the assumptions point to over the next 10 to 15 years, compounded. Real years will be higher and lower.'],
    'volatility': ['Volatility', 'How far a year’s return tends to swing around its average. The higher it is, the bigger the ups and downs.'],
    'deepest-fall': ['Deepest fall', 'The largest drop from a high point to the low that followed, before the money grew back.'],
    'under-water': ['Months under water', 'How long it took from the high before the deepest fall until the money was back at that high.'],
    'sharpe': ['Sharpe ratio', 'The return above Treasury bills for each unit of ups and downs. Higher means more reward for the swings taken.'],
    'money-market': ['Money market', 'A fund that holds very short loans to governments and banks. It earns close to the Treasury bill rate and can be sold within days.'],
    'hypothetical': ['Hypothetical', 'A what-if worked out from assumptions: not a promise, and not a result anyone has had.']
  };
  /* the icon alone, and a term with its icon kept on the same line */
  function glI(key) {
    var g = GLOSS[key]; if (!g) return '';
    return '<button class="gl-i" type="button" data-gl="' + key + '" aria-label="Explain: ' + e(g[0]) + '" aria-expanded="false">' + A.ic('info') + '</button>';
  }
  /* THE QUESTION'S "i" (4 Oct 2026): after every quest's question, the same mark as the "i" tags; its tip says
     what the question asks in plain words, and what its money words mean (LEARN.PLAIN). The question's last
     word is held to the mark, as gl() does, so the "?" and the "i" never part at a line end. */
  function plainQ(text, key) {
    var t = e(text), P = (window.LEARN && window.LEARN.PLAIN || {})[key];
    if (!P) return t;
    var cut = t.lastIndexOf(' ') + 1;
    return t.slice(0, cut) + '<span class="gl">' + t.slice(cut) + '<button class="gl-i" type="button" data-glq="' + e(key) + '" aria-label="This question in plain words" aria-expanded="false">' + A.ic('info') + '</button></span>';
  }
  /* an email address may break after its @ — on a phone, where a row wraps, it then parts in the
     one place that still reads (phone pass, 29 Sep 2026) */
  function eMail(s) { return e(s).replace('@', '@<wbr>'); }
  /* the term and its "i": only the LAST WORD is held to the mark, so a long term still wraps (phone
     pass, 29 Sep 2026: a whole term held on one line pushed "Cash that must stay reachable" into its
     value and "Where the original is" off a phone's edge). A term ending in markup is held whole. */
  function gl(key, html) {
    if (!GLOSS[key]) return html != null ? html : '';
    var t = html != null ? html : e(GLOSS[key][0]), cut = t.lastIndexOf(' ') + 1;
    if (/[<>]/.test(t.slice(cut))) cut = 0;
    return t.slice(0, cut) + '<span class="gl">' + t.slice(cut) + glI(key) + '</span>';
  }
  /* a card on a Suggested view or an overview: a panel with its eyebrow, a link, and its body */
  function card(title, link, body, cls) {
    return '<section class="panel sg-card' + (cls ? ' ' + cls : '') + '"><div class="sg-h"><span class="eyebrow">' + e(title) + '</span>' + (link || '') + '</div>' + body + '</section>';
  }
  function more(href, label) { return '<a class="link" href="' + href + '">' + e(label) + A.ic('arrow') + '</a>'; }
  /* UPLOAD WHERE YOU ARE (V3): a key that files the document in the vault, already linked to
     `target` (a line id, c:<cover>, will, policy); with no target it lands in Needs filing.
     On a phone the picker offers the camera. */
  function uploadKey(label, secondary, target) {
    var id = 'upload' + (target ? '-' + String(target).replace(/[^\w]/g, '') : '');
    return '<label class="key' + (secondary ? ' key-s key-secondary' : '') + '" for="' + id + '">' + e(label || 'Upload') + '</label>' +
      '<input class="sr" id="' + id + '" type="file" data-upload' + (target ? ' data-upload-for="' + e(target) + '"' : ' multiple') + ' accept="application/pdf,image/*">';
  }
  function deskChip(b) { return '<span class="status-label neutral">' + e(b.desk) + '</span>'; }
  function feesYear() {
    var f = 0; A.S.assets.forEach(function (a) { if (A.isInvestable(a) && a.fee != null) f += A.amount(a.id) * a.fee / 100; }); return f;
  }
  /* the route to investing, drawn with the Map's own marks so the desk and the Map never disagree */
  function route() { return '<a class="lm-tip lm-route" href="#/learn/map/investment"><span class="lm-tip-h">' + deskPlate('investment') + 'The Investment branch</span>' + lmTip('investment') + '</a>'; }
  function sectionH(title, link, anchor) {
    var tag = anchor ? lt(anchor) : '';   /* the Learn tag runs on after the title's last word, so it wraps with it */
    return '<div class="section-h">' + (tag ? '<div class="sh-t"><h2>' + e(title) + '</h2>' + tag + '</div>' : '<h2>' + e(title) + '</h2>') + (link || '') + '</div>';
  }
  function opensNext(desk) {
    var p = A.nextPath(desk);
    if (!p) return '';
    var label = p.testReady ? 'Take the test' : p.state === 'progress' ? 'Continue' : 'Open path';
    return '<div class="opens-next">' + lmark(p) + '<div class="on-t"><small>In Learn</small><b>' + e(p.title) + '</b>' +
      '<span>' + p.quests + ' quests · about ' + p.minutes + ' minutes' + (p.done ? ' · ' + p.done + ' done' : '') + '</span></div>' +
      '<a class="key key-s key-secondary" href="' + A.learnHref(p) + '">' + label + '</a></div>';
  }
  function nextItems(list) {
    return '<div class="block">' + sectionH('Coming next to this desk') + '<div class="next-list">' +
      list.map(function (x) { return '<div class="next-item"><b>' + e(x[0]) + '</b>' + e(x[1]) + '</div>'; }).join('') + '</div></div>';
  }
  function srcChip(l) {
    var v = A.cur(l.id), s = A.stale(l);
    var chip = '<span class="st-src">' + e(A.srcLabel(v)) + ' · ' + A.date(v && v.asOf) + '</span>';
    if (s) chip += '<span class="status-label attention">Check it · ' + s + ' days old</span>';
    return chip;
  }
  function holderOptions(sel) {
    var opts = ['Joint'].concat(A.S.people.map(function (p) { return p.name.split(' ')[0]; }));
    return opts.map(function (o) { return '<option' + (o === sel ? ' selected' : '') + '>' + e(o) + '</option>'; }).join('');
  }

  /* ── SUGGESTED VIEWS (build spec §2, "Suggested views: each section's own home") ─────────
     Home keeps this catalogue (the desks' Suggested views became Freya's summaries on 28 Sep 2026,
     further down). Each has a fixed CATALOGUE of modules; Freya never lays out a screen of her own.
     CODE RANKS, FREYA EXPLAINS: a module's score comes from deterministic signals — the
     record's state, what is missing, and what the household understands (Learn). Usage, the
     fourth signal, joins once there are weeks of real use (Q13). The line under a module says
     why it is there. Rendering needs no model call.
       · What needs the household always leads; usage never pushes it down, and it can't be hidden.
       · Pins and hides (Edit view) beat the ranking. Nothing is hidden from the sub menu.
       · Stable while you look: the order is fixed once a day (viewOrder), never while open.
       · Day one is honest: with nothing recorded, the section's first step, not empty modules.
     A module: { id, name, score, needs, why, wide, title, link, body, cls } or raw(wide, why). */
  var CATALOGUE = {};
  function viewPrefs(section) {
    var S = A.S, all = S.viewPrefs || (S.viewPrefs = {}), mine = all[S.viewer] || (all[S.viewer] = {});
    return mine[section] || (mine[section] = { pinned: [], hidden: [] });
  }
  /* ── THE DESK SUMMARY: each desk's Suggested view (28 Sep 2026) ───────────────────────────
     Christian: "short text and some boxes only, like an easy overview of what is important. Like
     a summary for each desk at the time the user checks in", and Freya presents it: "we need to
     bring Freya closer as the Chief of Staff." So the view is one piece, in Freya's name: the
     desk's answer in a sentence, a line under it, then up to four boxes in order of importance,
     one of each kind — Needs you (Bullion, with the page's one bullion key), Noticed, Coming up,
     Opens next. A kind with nothing to say drops out. Each box is a figure, a line and one key;
     the pictures stay on the desk's pages. The order is still fixed rules underneath (what needs
     you first), so rendering needs no model call. No Edit view here: nothing lasting to pin. */
  var BR_KIND = { needs: ['notify', 'For you', 'bell'], noticed: ['neutral', 'Noticed', 'eye'], coming: ['neutral', 'Coming up', 'calendar'],
    opens: ['ok', 'Opens next', 'learn'], first: ['ok', 'First step', 'plus'] };
  var BR_DAY = new Intl.DateTimeFormat('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  var BR_ASK = { records: 'Walk me through Records today: what matters most, and why?', policy: 'Walk me through our policy today: what matters most, and why?',
    investment: 'Walk me through what we hold today: what matters most, and why?', protection: 'Walk me through our cover today: what matters most, and why?',
    succession: 'Walk me through the will and succession today: what matters most?' };
  function brIn(d) {   /* how far away a date is, in words */
    return d <= 0 ? 'today' : d === 1 ? 'tomorrow' : d <= 60 ? 'in ' + d + ' days' : d < 330 ? 'in about ' + Math.round(d / 30.4) + ' months' : 'in about ' + Math.max(1, Math.round(d / 365.25)) + (d < 548 ? ' year' : ' years');
  }
  function brList(xs) {   /* a, b and c; with a comma inside a name, the last joins with ", and" so it still reads */
    return xs.length < 2 ? xs.join('') : xs.slice(0, -1).join(', ') + (xs.length > 2 || /,/.test(xs[0]) ? ', and ' : ' and ') + xs[xs.length - 1];
  }
  /* a box: { kind, v, n, fmt, pre, l, key: { label, href | act (+ id) | q } } */
  function brBox(b) {
    var k = BR_KIND[b.kind], key = b.key || {}, cls = 'key key-s ' + (b.kind === 'needs' ? 'key-bullion' : 'key-secondary'), btn = '';
    if (key.q) btn = '<button class="' + cls + '" type="button" data-act="ask" data-q="' + e(key.q) + '">' + e(key.label || 'Ask Freya') + '</button>';
    else if (key.act) btn = '<button class="' + cls + '" type="button" data-act="' + key.act + '"' + (key.id ? ' data-id="' + e(key.id) + '"' : '') + '>' + e(key.label) + '</button>';
    else if (key.href) btn = '<a class="' + cls + '" href="' + key.href + '">' + e(key.label) + '</a>';
    return '<li class="br-box br-' + b.kind + (b.kind === 'needs' ? ' att' : '') + '"><span class="br-k"><span class="status-label ' + k[0] + '">' + e(k[1]) + '</span>' + (b.lt ? lt(b.lt) : '') + A.ic(k[2]) + '</span>' +
      (b.v != null ? '<b class="br-v"' + (b.n != null ? ' data-count="' + b.n + '" data-fmt="' + b.fmt + '"' + (b.pre ? ' data-pre="' + b.pre + '"' : '') : '') + '>' + e(b.v) + '</b>' : '') +
      '<span class="br-l">' + b.l + '</span>' + (btn ? '<span class="br-act">' + btn + '</span>' : '') + '</li>';
  }
  /* a summary's boxes carry the Learn tag of their topic (29 Sep 2026) */
  var BR_LT = { records: { needs: ['rec-stale', 'vault-file'], noticed: ['rec-source', 'rec-history'], coming: ['rec-time'] },
    policy: { needs: ['pol-drift'], noticed: ['pol-goals', 'pol-setaside'], coming: ['pol-goals'] }, investment: { needs: ['inv-hold', 'pol-drift'], noticed: ['inv-private'] },
    protection: { needs: ['pro-renew', 'pro-home'], noticed: ['pro-cover', 'pro-life'], coming: ['pro-renew'] }, succession: { noticed: ['suc-roles', 'rec-advisers'], coming: ['suc-review'] } };
  function brief(desk, answer, sub, boxes) {
    var d = A.DESKS[desk], list = boxes.filter(Boolean).slice(0, 4);
    list.forEach(function (b) { if (!b.lt && b.kind !== 'opens' && BR_LT[desk]) b.lt = BR_LT[desk][b.kind]; });
    return '<section class="scene on-tint scene-' + desk + ' brief" aria-label="Freya’s summary of ' + e(d.noun) + '">' +
      '<div class="sc-words"><div class="br-head">' + A.fyMark('ready') +
        '<span class="br-who"><span class="eyebrow">Freya · your AI chief of staff</span><span class="br-when">' + e(d.noun) + ' · ' + BR_DAY.format(new Date(DEMO_TODAY + 'T00:00:00')) + '</span></span>' +
        '<button class="key key-s key-secondary br-ask" type="button" data-act="ask" data-q="' + e(BR_ASK[desk] || 'Walk me through ' + d.noun + ' today: what matters most, and why?') + '">Ask Freya</button></div>' +
      '<p class="sc-answer">' + answer + '</p>' + (sub ? '<p class="sc-sub">' + sub + '</p>' : '') + '</div>' +
      (list.length ? '<ol class="br-boxes" style="--n:' + list.length + '">' + list.map(brBox).join('') + '</ol>' : '') + '</section>';
  }
  function brPage(desk, html) { return '<main class="screen">' + deskIntro(desk) + html + '</main>'; }
  /* the desk's next Learn path, as a box (one learning suggestion per visit, ruling 9) */
  function brOpens(desk) {
    var p = A.nextPath(desk); if (!p) return null;
    var go = p.state === 'progress';
    return { kind: 'opens', v: p.testReady ? 'The test' : go ? 'Quest ' + p.nextQ + ' of ' + p.quests : p.quests + ' quests', l: '<b>' + e(p.title) + '</b> · about ' + p.minutes + ' minutes, one question at a time.',
      key: { label: p.testReady ? 'Take the test' : go ? 'Continue' : 'Open path', href: A.learnHref(p) } };
  }
  /* the next date on this desk that is still ahead, from the Timeline */
  function brComing(desk, key) {
    var x = A.timeline().filter(function (t) { return t.desk === desk && !t.overdue && t.date >= DEMO_TODAY; })[0]; if (!x) return null;
    return { kind: 'coming', v: A.date(x.date), l: e(x.title) + ', ' + brIn(A.days(DEMO_TODAY, x.date)) + '.', key: key || { label: 'The Timeline', href: '#/records/timeline' } };
  }
  /* the class outside its range, as a Needs-you box */
  function brDrift(href, label) {
    var p = A.policy(); if (!p) return null;
    var out = A.drift().filter(function (x) { return x.out; }); if (!out.length) return null;
    var x = scDriftLead(out), mv = A.movers(x.k, p.effective).sort(function (a, b) { return Math.abs(b.delta) - Math.abs(a.delta); });
    return { kind: 'needs', v: A.pct(x.actual), n: +(x.actual * 100).toFixed(1), fmt: 'pct',
      l: 'of what you invest is in ' + e(x.label.toLowerCase()) + ', ' + (x.out === 'above' ? 'above your ' + x.max + '% ceiling' : 'below your ' + x.min + '% floor') + '.' +
        (mv.length ? ' ' + (mv.length === 1 ? 'One line moved it' : scCap(scW(Math.min(mv.length, 2))) + ' lines moved it most') + ': ' + brList(mv.slice(0, 2).map(function (m) { return e(m.a.name); })) + '.' : '') +
        (out.length > 1 ? ' ' + scCap(scW(out.length - 1)) + ' more ' + (out.length > 2 ? 'are' : 'is') + ' outside.' : ''),
      key: { label: label, href: href } };
  }

  /* ── RECORDS ── */
  function recSuggested() {
    var S = A.S, t = A.totals();
    if (!S.assets.length) return brPage('records', brief('records', 'Nothing is recorded yet.', 'Your household record starts with the first thing you add. Nothing here is a sample.',
      [{ kind: 'first', l: 'Add what you have: an account, a home, a company. Its value, and where the figure comes from.', key: { label: 'Add what you have', act: 'add-asset' } }]));
    var stale = A.staleLines(), unf = S.documents.filter(function (d) { return !A.filed(d); }), moved = 0, lines = [];
    S.assets.concat(S.liabilities).forEach(function (l) {
      var h = A.history(l.id); if (h.length < 2) return;
      var d = (h[h.length - 1].amount - h[0].amount) * (A.liability(l.id) ? -1 : 1); if (!d) return;
      moved += d; lines.push({ l: l, d: d });
    });
    lines.sort(function (a, b) { return Math.abs(b.d) - Math.abs(a.d); });
    var answer = gl('net-worth', scNum(t.net, 'short') + ' is yours') + (stale.length ? ', and ' + scW(stale.length) + (stale.length > 1 ? ' figures need' : ' figure needs') + ' checking.' : '.');
    var sub = 'Everything you own comes to <b>' + A.short(t.owned) + '</b>' + (t.owed ? ', less the <b>' + A.short(t.owed) + '</b> you owe.' : '. You owe nothing.') +
      (unf.length ? ' ' + (unf.length === 1 ? 'A document is' : scCap(scW(unf.length)) + ' documents are') + ' waiting to be filed.' : '');
    var needs = unf.length ? { kind: 'needs', v: String(unf.length), n: unf.length, fmt: 'int', l: (unf.length === 1 ? 'document is waiting to be filed: ' + e(unf[0].name) : 'documents are waiting to be filed') + '.', key: { label: 'File ' + (unf.length === 1 ? 'it' : 'them'), href: '#/vault/needs-filing' } } :
      stale.length ? { kind: 'needs', v: String(stale.length), n: stale.length, fmt: 'int', l: (stale.length === 1 ? 'figure is' : 'figures are') + ' past the date you set for checking: ' + brList(stale.map(function (l) { return e(l.name); })) + '.',
        key: stale.length === 1 ? { label: 'Check it', act: 'line', id: stale[0].id } : { label: 'Check them', href: '#/records/own' } } : null;
    var noticed = lines.length ? { kind: 'noticed', v: (moved >= 0 ? '+' : '−') + A.money(Math.abs(moved)), n: Math.abs(moved), fmt: 'money', pre: moved >= 0 ? '+' : '−',
      l: 'since ' + A.date(S.household.opened) + ', across ' + scW(lines.length) + (lines.length > 1 ? ' lines' : ' line') + '. The largest: ' + brList(lines.slice(0, 2).map(function (x) { return e(x.l.name) + ' ' + (x.d >= 0 ? '+' : '−') + A.short(Math.abs(x.d)); })) + '.',
      key: { q: 'What moved in our record since ' + A.date(S.household.opened) + ', and why?' } } : null;
    return brPage('records', brief('records', answer, sub, [needs, noticed, brComing('Records'), brOpens('records')]));
  }

  /* ── POLICY ── */
  function polSuggested() {
    var S = A.S, p = A.policy();
    if (!p) return brPage('policy', brief('policy', 'There is no policy yet.', 'A policy is the household’s rules, written down once. Finna supplies a blank template and never suggests a number.',
      [{ kind: 'first', l: 'Write your first rule: how much cash must always be reachable.', key: { label: 'Write the rule', act: 'edit-policy' } }, brOpens('policy')]));
    var d = A.drift(), out = d.filter(function (x) { return x.out; }), x = scDriftLead(d), answer;
    if (out.length) {
      var pts = Math.abs(x.actual * 100 - (x.out === 'above' ? x.max : x.min));
      answer = e(scCap(x.label)) + (/^cash$/i.test(x.label) ? ' is ' : ' are ') + scNum(pts, 'pts') + (x.out === 'above' ? ' over your ' + gl('ceiling', 'ceiling') + '.' : ' under your ' + gl('floor', 'floor') + '.');
    } else answer = 'Every class is inside its range.';
    var gs = S.goals, have = gs.reduce(function (s, g) { return s + A.goalProgress(g).have; }, 0), need = gs.reduce(function (s, g) { return s + g.amount; }, 0);
    var sub = 'Version ' + p.version + ' is in force since ' + A.date(p.effective) + ', agreed by ' + e(brList(p.agreed)) + '.' + (out.length ? ' Nothing is traded: what to do about it is the household’s decision.' : '');
    var gap = gs.map(function (g) { return { g: g, gap: Math.max(0, g.amount - A.goalProgress(g).have) }; }).sort(function (a, b) { return b.gap - a.gap; })[0];
    var noticed = gs.length && need ? { kind: 'noticed', v: Math.round(have / need * 100) + '%', n: Math.round(have / need * 100), fmt: 'pct0',
      l: 'of what your ' + (gs.length > 1 ? scW(gs.length) + ' goals need is' : 'goal needs is') + ' linked to them today.' + (gap && gap.gap ? ' The largest gap: <b>' + e(gap.g.name) + '</b>, ' + A.short(gap.gap) + '.' : ''),
      key: { q: 'Which of our goals is furthest from its amount, and what is linked to it?' } } : null;
    return brPage('policy', brief('policy', answer, sub, [brDrift('#/policy/drift', 'See why'), noticed, brComing('Governance', { label: 'Wealth planning', href: '#/policy/planning' }), brOpens('policy')]) + simTry('policy'));
  }

  /* ── INVESTMENT ── */
  function invSuggested() {
    var S = A.S, inv = A.investable(), p = A.policy();
    if (!inv.total) return brPage('investment', brief('investment', 'Nothing to measure yet.', 'What you hold elsewhere appears here from Records, against the ranges in your policy.',
      [{ kind: 'first', l: 'Add what you hold: a brokerage account, a retirement account, a private holding.', key: { label: 'Add what you hold', href: '#/records/own' } }, brOpens('investment')]) + ivDoor());
    /* no fees here (4 Oct 2026): Fees come later, with linked accounts; the summary reads how the money is spread */
    var out = p ? A.drift().filter(function (x) { return x.out; }) : [];
    var held = S.assets.filter(A.isInvestable);
    var answer = scNum(inv.total, 'short') + ' invested' + (!p ? '.' : out.length ? ', and ' + scW(out.length) + (out.length > 1 ? ' classes are' : ' class is') + ' outside its ' + gl('range', 'range') + '.' : ', every class inside its ' + gl('range', 'range') + '.');
    var sub = 'Across ' + scW(held.length) + (held.length === 1 ? ' holding' : ' holdings') + '.' + (p ? '' : ' Your ranges come from your policy.');
    var top = held.map(function (a) { return { a: a, v: A.amount(a.id) }; }).sort(function (a, b) { return b.v - a.v; })[0], tsh = top && inv.total ? top.v / inv.total : 0;
    var noticed = held.length > 1 && tsh ? { kind: 'noticed', v: A.pct(tsh, 0), n: Math.round(tsh * 100), fmt: 'pct', l: 'of what you invest is in <b>' + e(top.a.name) + '</b>, your largest holding.',
      key: { q: 'How is our money spread across our holdings?' } } : null;
    return brPage('investment', brief('investment', answer, sub, [brDrift('#/investment/holdings', 'What you hold'), noticed, brComing('Investment'), brOpens('investment')]) + ivDoor() + simTry('investment'));
  }

  /* ── PROTECTION ── */
  function proSuggested() {
    var S = A.S, sec = S.security;
    if (!S.cover.length) return brPage('protection', brief('protection', 'No cover is recorded yet.', 'What is covered, what is missing, and what needs attention, before it is a claim.',
      [{ kind: 'first', l: 'List the cover you have. One policy at a time, or upload the policy and Freya fills it in.', key: { label: 'Add cover', act: 'add-cover' } }, brOpens('protection')]));
    var soon = A.renewalsWithin(30).slice().sort(function (a, b) { return a.renews < b.renews ? -1 : 1; }), c = soon[0];
    var sum = S.cover.reduce(function (s, x) { return s + (x.sum || 0); }, 0), prem = S.cover.reduce(function (s, x) { return s + (x.premium || 0); }, 0);
    var n = c ? A.days(DEMO_TODAY, c.renews) : 0;
    var answer = scNum(sum, 'short') + ' ' + gl('sum-insured', 'insured') + (c ? ', and the ' + e(c.type.toLowerCase()) + ' cover renews in ' + scNum(n, 'int') + (n === 1 ? ' day.' : ' days.') : '.');
    var sub = scCap(scW(S.cover.length)) + (S.cover.length > 1 ? ' policies, ' : ' policy, ') + '<b>' + A.money(prem) + '</b> a year in premiums.' + (sec.recoveryContact ? '' : ' Your account has no recovery contact yet.');
    var needs = c ? { kind: 'needs', v: n + (n === 1 ? ' day' : ' days'), n: n, fmt: 'days',
      l: 'until the ' + e(c.type.toLowerCase()) + ' cover on ' + e(c.covers) + ' renews, on ' + A.date(c.renews) + '. Renewal is the moment the cover can change.' + (soon.length > 1 ? ' ' + scCap(scW(soon.length - 1)) + ' more renew' + (soon.length > 2 ? '' : 's') + ' within 30 days.' : ''),
      key: { label: 'Open the cover', href: '#/protection/cover' } } : null;
    var named = S.cover.filter(function (x) { return x.beneficiaries && x.nominated; }), old = named.filter(function (x) { return A.days(x.nominated, DEMO_TODAY) > 365 * 5; });
    var noticed = old.length ? { kind: 'noticed', v: String(old.length), n: old.length, fmt: 'int',
      l: (old.length === 1 ? 'policy names a beneficiary' : 'policies name beneficiaries') + ' chosen more than five years ago: ' + brList(old.map(function (x) { return e(x.type.toLowerCase()) + ' cover on ' + e(x.covers) + ', in ' + x.nominated.slice(0, 4); })) + '.',
      key: { q: 'Are the beneficiaries on our life policies still the people we would choose?' } } : null;
    var next = A.timeline().filter(function (t) { return t.desk === 'Protection' && t.date >= DEMO_TODAY && (!c || t.date > c.renews); });
    var coming = next.length ? { kind: 'coming', v: A.date(next[0].date), l: e(scCap(brList(next.filter(function (t) { return t.date === next[0].date; }).map(function (t) { return t.title.replace(' cover renews · ', ' cover on ').replace(/^(\w)/, function (m) { return m.toLowerCase(); }); })))) + ' ' + (next.filter(function (t) { return t.date === next[0].date; }).length > 1 ? 'renew' : 'renews') + ', ' + brIn(A.days(DEMO_TODAY, next[0].date)) + '.',
      key: { label: 'Cover', href: '#/protection/cover' } } : null;
    return brPage('protection', brief('protection', answer, sub, [needs, noticed, coming, brOpens('protection')]) + simTry('protection'));
  }

  /* ── SUCCESSION ── */
  function sucSuggested() {
    var S = A.S, w = S.will;
    if (w.exists !== 'Yes') return brPage('succession', brief('succession', w.exists === 'No' ? 'You recorded that there is no will.' : 'No will is recorded yet.',
      'The people, the papers and the reasoning, moving together. It starts with where the will is.',
      [{ kind: w.exists === 'No' ? 'first' : A.needsList().some(function (n) { return n.topic === 'will'; }) ? 'needs' : 'first', l: w.exists === 'No' ? 'When there is one, record where the original is.' : 'Is there a will, and where is the original? Two answers, and a copy if you want one on file.',
        key: { label: 'Record where the will is', act: 'edit-will' } }, brOpens('succession')]));
    var yrs = w.reviewed ? Math.floor(A.days(w.reviewed, DEMO_TODAY) / 365.25) : null, law = A.adviser(w.lawyer);
    var answer = 'The will is on file' + (yrs != null ? ', last read ' + scNum(yrs, 'int') + (yrs === 1 ? ' year ago.' : ' years ago.') : '.');
    var sub = [w.kind ? e(w.kind) + (w.signed ? ', signed ' + A.date(w.signed) : '') + '.' : w.signed ? 'Signed ' + A.date(w.signed) + '.' : '',
      law ? 'The original is with ' + e(law.firm) + '.' : w.original ? 'The original: ' + e(w.original) + '.' : '',
      w.executors ? 'Executors: ' + e(w.executors.charAt(0).toLowerCase() + w.executors.slice(1)) + '.' : ''].filter(Boolean).join(' ');   /* only what is recorded (a will from the tutorial has no kind, and maybe no date) */
    var open = S.advisers.filter(function (v) { return v.open && v.covers.indexOf('Succession') > -1; })[0];
    var noticed = open ? { kind: 'noticed', v: open.name, l: e(open.role) + ' at ' + e(open.firm) + ' has this open: ' + e(open.open.charAt(0).toLowerCase() + open.open.slice(1)) + '.',
      key: { q: 'What should we look at again in the will' + (yrs != null ? ', now that it is ' + yrs + ' years old' : '') + '?' } } : null;
    return brPage('succession', brief('succession', answer, sub, [null, noticed, brComing('Succession', { label: 'The will', href: '#/succession/will' }), brOpens('succession')]));
  }

  /* ── HOME (build spec Figures 1 and 14, redone 28 Sep 2026) ────────────────────────────
     Christian: "a full overview which is easy to digest", "not too much text", in the style the
     rest of the app has now. One screen for the whole household, in five pieces, each short:
       1 Freya's summary: the one sentence that matters most today, a second line, and one key, for
         what needs you most (the page's one bullion key). ONE KEY, NOT TWO (Christian, 29 Sep 2026:
         "take out the 'open cover' cta, it's producing more confusion than it helps … not to over
         explain"): the second line names the next thing, and the desks below carry it. Fixed rules
         rank it, as on the desks.
       2 Your family office: the five desks and Learn, one card each in its desk's ground — a status,
         one figure, one line and a small picture — the whole card opens the desk.
       3 What you own: the map, owned and owed, to net worth (treeMap('own')).
       4 Coming up, on the line, beside the what-if tools with their answers from the record.
       5 Pick up where you left off.
     Day one is honest: nothing recorded, the first step, no empty modules. No Edit view: the order
     is fixed, as on the desks' summaries. */
  var HM_HELLO = function () { var h = new Date().getHours(); return h < 12 ? 'Good morning' : h < 18 ? 'Good afternoon' : 'Good evening'; };
  function hmAnswer(n) {
    if (n.topic === 'drift') {
      var x = A.drift().filter(function (d) { return d.out; }).sort(function (a, b) { return Math.abs(b.actual * 100 - (b.out === 'above' ? b.max : b.min)) - Math.abs(a.actual * 100 - (a.out === 'above' ? a.max : a.min)); })[0];
      var pts = Math.abs(x.actual * 100 - (x.out === 'above' ? x.max : x.min));
      return e(scCap(x.label)) + (/^cash$/i.test(x.label) ? ' is ' : ' are ') + scNum(pts, 'pts') + (x.out === 'above' ? ' over your ' + gl('ceiling', 'ceiling') + '.' : ' under your ' + gl('floor', 'floor') + '.');
    }
    if (n.topic === 'renewal') { var c = A.S.cover.filter(function (x) { return x.id === n.id; })[0], d = A.days(DEMO_TODAY, c.renews); return 'Your ' + e(c.type.toLowerCase()) + ' cover renews in ' + scNum(d, 'int') + (d === 1 ? ' day.' : ' days.'); }
    return e(n.text);
  }
  function hmBrief() {
    var S = A.S, needs = A.needsList(), fw = A.firstWeek(), answer, sub = '', keys = '';
    if (!S.assets.length) {
      answer = 'Nothing is recorded yet.'; sub = 'Your household record starts with the first thing you add. Nothing here is a sample.';
    } else if (needs.length) {
      answer = hmAnswer(needs[0]);
      sub = (needs[1] ? scCap(needs[1].why) + '. ' : '') + (needs.length > 2 ? (needs.length === 3 ? 'One more thing is' : scCap(scW(needs.length - 2)) + ' more things are') + ' on the desks below.' : 'Everything else is in hand.');
    } else { answer = 'Everything is in hand today.'; sub = 'Nothing is outside your rules, and nothing falls due in the next 30 days.'; }
    if (needs[0] && S.assets.length) keys += '<a class="key key-bullion" href="' + needs[0].href + '">' + e(needs[0].key) + '</a>';
    if (fw && (!S.assets.length || !needs.length)) keys += (fw.act ? '<button class="key' + (keys ? ' key-secondary' : '') + '" type="button" data-act="' + fw.act + '">' + e(fw.key) + '</button>' : '<a class="key' + (keys ? ' key-secondary' : '') + '" href="' + fw.href + '">' + e(fw.key) + '</a>') +
      '<button class="link today-later" type="button" data-act="first-week-later" data-id="' + fw.id + '">Not now</button>';
    if (fw && !S.assets.length) sub = e(fw.text());
    return '<section class="scene on-tint brief hm-brief" aria-label="Freya’s summary of the household">' +
      '<div class="sc-words"><div class="br-head">' + A.fyMark('ready') +
        '<span class="br-who"><span class="eyebrow">Freya · your AI chief of staff</span><span class="br-when">' + e(S.household.name) + ' · ' + BR_DAY.format(new Date(DEMO_TODAY + 'T00:00:00')) + '</span></span>' +
        '<button class="key key-s key-secondary br-ask" type="button" data-act="ask" data-q="Walk me through the household today: what matters most, and why?">Ask Freya</button></div>' +
      '<p class="sc-answer">' + answer + '</p>' + (sub ? '<p class="sc-sub">' + sub + '</p>' : '') +
      (keys ? '<div class="hm-keys">' + keys + '</div>' : '') + '</div></section>';
  }

  /* YOUR FAMILY OFFICE — a card a desk: its status in a label, one figure, one line, and one small
     picture drawn on the same 6px line everywhere (a bar, a range, a mix, a year, a will, a path) */
  function hmCap(parts) { return '<span class="hm-cap">' + parts.map(function (p) { return '<span>' + p + '</span>'; }).join('') + '</span>'; }
  function hmCard(k, href, label, st, v, l, vis) {
    if (A.DESKS[k] && !A.deskOpen(k)) return hmLocked(k);
    return '<a class="hm-desk hm-' + k + (A.DESKS[k] ? ' scene-' + k : '') + '" href="' + href + '">' +
      '<span class="hm-dh">' + (A.DESKS[k] ? deskPlate(k) : A.ic('learn')) + '<b>' + e(label) + '</b></span>' + (st ? '<span class="status-label ' + st[0] + ' hm-st">' + e(st[1]) + '</span>' : '') +
      '<b class="hm-v">' + v + '</b><span class="hm-l">' + l + '</span>' + (vis ? '<span class="hm-vis" aria-hidden="true">' + vis + '</span>' : '') + '</a>';
  }
  function hmDesks() {
    var S = A.S, t = A.totals(), cards = [], first = !S.assets.length;
    function fc(k, href, l) { return hmCard(k, href, A.DESKS[k].noun, ['neutral', 'First step'], '—', e(l), ''); }
    if (first) {
      cards.push(fc('records', '#/records', 'Add what you have, and what you owe.'), fc('policy', '#/policy', 'Write your first rule.'), fc('investment', '#/investment', 'What you hold appears here from Records.'),
        fc('protection', '#/protection', 'List the cover you have.'), fc('succession', '#/succession', 'Record where the will is.'));
    } else {
      /* Records: net worth, owned against owed */
      var stale = A.staleLines(), unf = S.documents.filter(function (d) { return !A.filed(d); }), ow = t.owned ? Math.min(100, t.owed / t.owned * 100) : 0;
      cards.push(hmCard('records', '#/records', 'Records', stale.length ? ['attention', stale.length + ' to check'] : unf.length ? ['attention', unf.length + ' to file'] : ['ok', 'Up to date'],
        A.short(t.net), gl('net-worth', 'Net worth'),
        '<span class="hm-bar"><i style="width:' + (100 - ow).toFixed(1) + '%"></i><i class="owe" style="width:' + ow.toFixed(1) + '%"></i></span>' + hmCap(['Owned ' + A.short(t.owned), 'Owed ' + A.short(t.owed)])));
      /* Policy: the class furthest outside its range, on its range; or how much of the goals is linked */
      var p = A.policy(), d = A.drift(), out = d.filter(function (x) { return x.out; }), x = out.length ? scDriftLead(out) : null;
      if (!p) cards.push(hmCard('policy', '#/policy', 'Governance', ['neutral', 'First step'], '—', 'Write your first rule.', ''));
      else if (x) cards.push(hmCard('policy', '#/policy', 'Governance', ['attention', 'Outside a range'], A.pct(x.actual), 'in ' + e(x.label.toLowerCase()) + '; your ' + (x.out === 'above' ? 'ceiling is ' + x.max : 'floor is ' + x.min) + '%',
        '<span class="hm-band"><i class="rng" style="left:' + x.min + '%;width:' + (x.max - x.min) + '%"></i><i class="tgt" style="left:' + x.target + '%"></i><i class="now out" style="left:' + Math.min(100, x.actual * 100).toFixed(1) + '%"></i></span>' + hmCap(['Your range ' + x.min + '–' + x.max + '%', 'Today ' + A.pct(x.actual)])));
      else { var gs = S.goals, have = gs.reduce(function (s, g) { return s + A.goalProgress(g).have; }, 0), need = gs.reduce(function (s, g) { return s + g.amount; }, 0), sh = need ? have / need : 0;
        cards.push(hmCard('policy', '#/policy', 'Governance', ['ok', 'Inside every range'], Math.round(sh * 100) + '%', 'of what your goals need is linked', '<span class="hm-bar"><i style="width:' + (sh * 100).toFixed(1) + '%"></i></span>' + hmCap([A.short(have) + ' of ' + A.short(need)]))); }
      /* Investment: what is invested, in its mix */
      var inv = A.investable(), nInv = S.assets.filter(A.isInvestable).length, pI = A.policy(), outI = pI ? A.drift().filter(function (x) { return x.out; }).length : 0;
      if (inv.total) {
        var mix = A.POLICY_CLASSES.map(function (k) { return { k: k, v: inv.by[k] / inv.total }; }), MC = A.MIXC;
        var top = mix.slice().sort(function (a, b) { return b.v - a.v; }).slice(0, 2);
        /* no fees on the card (4 Oct 2026: Fees come later, with linked accounts) */
        cards.push(hmCard('investment', '#/investment', 'Investment', !pI ? ['neutral', 'No ranges yet'] : outI ? ['attention', outI + (outI === 1 ? ' class' : ' classes') + ' out of range'] : ['ok', 'Inside every range'],
          A.short(inv.total), 'invested · in ' + nInv + (nInv === 1 ? ' holding' : ' holdings'),
          '<span class="hm-mix">' + mix.map(function (m) { return m.v > 0.004 ? '<i style="flex:' + m.v.toFixed(4) + ';background:' + MC[m.k] + '"></i>' : ''; }).join('') + '</span>' +
          hmCap(top.map(function (m) { return Math.round(m.v * 100) + '% ' + A.MIXL[m.k].toLowerCase(); }))));
      } else cards.push(hmCard('investment', '#/investment', 'Investment', ['neutral', 'First step'], '—', 'What you hold appears here from Records.', ''));
      /* Protection: what is insured, and the year's renewals on a line */
      if (S.cover.length) {
        var sum = S.cover.reduce(function (s, c) { return s + (c.sum || 0); }, 0), yr = S.cover.filter(function (c) { return c.renews && c.renews >= DEMO_TODAY && A.days(DEMO_TODAY, c.renews) <= 365; }).sort(function (a, b) { return a.renews < b.renews ? -1 : 1; });
        var soon = yr[0] && A.days(DEMO_TODAY, yr[0].renews) <= 30 ? yr[0] : null, n0 = yr[0] ? A.days(DEMO_TODAY, yr[0].renews) : 0;
        cards.push(hmCard('protection', '#/protection', 'Protection', soon ? ['attention', 'Renews in ' + n0 + (n0 === 1 ? ' day' : ' days')] : yr[0] ? ['neutral', 'Next ' + A.date(yr[0].renews).replace(/, \d{4}$/, '')] : ['ok', 'In force'],
          A.short(sum), gl('sum-insured', 'insured') + ' across ' + scW(S.cover.length) + (S.cover.length === 1 ? ' policy' : ' policies'),
          '<span class="hm-year">' + yr.filter(function (c, i) { return !i || A.days(yr[i - 1].renews, c.renews) > 12; }).map(function (c, i) { return '<i class="' + (i === 0 && soon ? 'soon' : '') + '" style="left:' + (A.days(DEMO_TODAY, c.renews) / 365 * 100).toFixed(1) + '%"></i>'; }).join('') + '</span>' +
          hmCap(['Today', yr.length ? scCap(scW(yr.length)) + (yr.length === 1 ? ' renewal' : ' renewals') + ' in 12 months' : 'No renewal in 12 months'])));
      } else cards.push(hmCard('protection', '#/protection', 'Protection', ['neutral', 'First step'], '—', 'List the cover you have.', ''));
      /* Succession: the will, from the day it was signed to the day you set to read it again */
      var w = S.will;
      if (w.exists === 'Yes' && w.signed) {
        var yrs = w.reviewed ? Math.floor(A.days(w.reviewed, DEMO_TODAY) / 365.25) : null, end = w.reviewBy && w.reviewBy > DEMO_TODAY ? w.reviewBy : DEMO_TODAY, span = Math.max(1, A.days(w.signed, end)), lived = Math.min(100, A.days(w.signed, DEMO_TODAY) / span * 100);
        cards.push(hmCard('succession', '#/succession', 'Succession', w.reviewBy && w.reviewBy >= DEMO_TODAY ? ['neutral', 'Read by ' + A.date(w.reviewBy).replace(/, \d{4}$/, '')] : ['ok', 'On file'],
          yrs != null ? yrs + (yrs === 1 ? ' year' : ' years') : 'On file', yrs != null ? 'since the will was last read' : 'the will is on file',
          '<span class="hm-will"><i class="lived" style="width:' + lived.toFixed(1) + '%"></i><i class="today" style="left:' + lived.toFixed(1) + '%"></i></span>' + hmCap(['Signed ' + w.signed.slice(0, 4), w.reviewBy ? 'Read by ' + A.date(w.reviewBy).replace(/, \d{4}$/, '') : 'Today'])));
      } else if (w.exists === 'Yes') cards.push(hmCard('succession', '#/succession', 'Succession', ['ok', 'On file'], 'On file', 'the will is on file', hmCap([w.original ? 'The original is recorded' : 'Where the original is: not yet'])));   /* no signing date yet (the tutorial asks for it as optional) */
      else cards.push(hmCard('succession', '#/succession', 'Succession', ['neutral', 'First step'], '—', 'Record where the will is.', ''));
    }
    /* Learn: the path open now, quest by quest */
    var lp = A.nextPath();
    if (lp) {
      var go = lp.state === 'progress', seg = ''; for (var i = 0; i < lp.quests; i++) seg += '<i class="' + (lp.answered.indexOf(i + 1) > -1 ? 'done' : i === lp.nextQ - 1 ? 'now' : '') + '"></i>';
      cards.push(hmCard('learn', go ? A.learnHref(lp) : '#/learn', 'Learn', go ? ['ok', 'In progress'] : ['neutral', 'Opens next'],
        lp.testReady ? 'The test' : go ? 'Quest ' + lp.nextQ + ' of ' + lp.quests : e(String(lp.quests)) + ' quests', '<b>' + e(lp.title) + '</b> · ' + fmt(A.learnXP()) + ' XP',
        '<span class="hm-path">' + seg + '</span>' + hmCap([lp.done + ' of ' + lp.quests + ' done', 'about ' + lp.minutes + ' minutes'])));
    }
    return '<section class="hm-sec home-desks" aria-label="Your family office">' + sectionH('Your family office') + '<div class="hm-grid">' + cards.join('') + '</div></section>';
  }
  function hmComing() {
    var items = A.timeline().filter(function (x) { return !x.overdue && x.date >= DEMO_TODAY && A.days(DEMO_TODAY, x.date) <= 366; }).slice(0, 5)
      .map(function (x) { return { date: x.date, title: x.title.replace(/ · /, ' on '), href: x.href, desk: x.desk, chip: x.desk }; });
    if (!items.length) return '';
    return '<section class="hm-sec hm-coming" aria-label="Coming up">' + sectionH('Coming up', '<a class="link" href="#/records/timeline">The Timeline' + A.ic('arrow') + '</a>') +
      '<div class="panel tl-card">' + lineHTML(items, { today: true, label: 'What falls due in the next twelve months' }) + '</div></section>';
  }
  function home() {
    var S = A.S, t = A.totals();
    var html = '<main class="screen home">' +
      '<div class="page-head"><div class="intro"><h1 class="title">' + HM_HELLO() + (A.who() ? ', ' + e(A.who()) : '') + '</h1></div></div>' + hmBrief() + hmDesks();
    if (S.assets.length) html += '<section class="hm-sec home-map" aria-label="What you own">' + sectionH('What you own') + treeMap('own') + '</section>';
    var coming = hmComing(), tries = A.sim ? simTry('home') : '';
    if (coming || tries) html += '<div class="hm-pair' + (coming && tries ? '' : ' one') + '">' + coming + tries + '</div>';
    var recent = (S.recent || []).filter(function (x) { return x.path.indexOf('/home') !== 0; }).slice(0, 3);
    if (recent.length) html += '<section class="hm-sec home-recent" aria-label="Pick up where you left off">' + sectionH('Pick up where you left off') + '<div class="recent">' +
      recent.map(function (x) { return '<a class="recent-item" href="#' + x.path + '">' + e(x.label) + A.ic('arrow') + '</a>'; }).join('') + '</div></section>';
    return html + '</main>';
  }

  /* squarified treemap (Bruls, Huizing, van Wijk): lay rows along the short side while
     the worst aspect ratio in the row keeps improving */
  function worst(row, side) {
    var sum = 0, max = 0, min = Infinity;
    row.forEach(function (n) { sum += n.a; if (n.a > max) max = n.a; if (n.a < min) min = n.a; });
    var s2 = side * side, q = sum * sum;
    return Math.max(s2 * max / q, q / (s2 * min));
  }
  function squarify(nodes, x, y, w, h) {
    var total = nodes.reduce(function (s, n) { return s + n.v; }, 0), out = [], i = 0;
    if (!(total > 0) || w <= 0 || h <= 0) return out;
    nodes.forEach(function (n) { n.a = n.v / total * w * h; });
    while (i < nodes.length) {
      var side = Math.min(w, h), row = [nodes[i]], j = i + 1;
      while (j < nodes.length && worst(row.concat([nodes[j]]), side) <= worst(row, side)) { row.push(nodes[j]); j++; }
      var rs = row.reduce(function (s, n) { return s + n.a; }, 0);
      if (w >= h) { var cw = rs / h, yy = y; row.forEach(function (n) { var hh = n.a / cw; out.push({ n: n, x: x, y: yy, w: cw, h: hh }); yy += hh; }); x += cw; w -= cw; }
      else { var rh = rs / w, xx = x; row.forEach(function (n) { var ww = n.a / rh; out.push({ n: n, x: xx, y: y, w: ww, h: rh }); xx += ww; }); y += rh; h -= rh; }
      i = j;
    }
    return out;
  }
  /* the family tree's lines: a partner line between partners, and from a couple (or a single
     parent) down to a bar over their children. Measured after the nodes have their size. */
  function layoutTree(box) {
    var svg = box.querySelector('.ft-lines'); if (!svg) return;
    var R = box.getBoundingClientRect(), W = box.scrollWidth, H = box.scrollHeight, pos = {}, d = '';
    svg.setAttribute('width', W); svg.setAttribute('height', H); svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    box.querySelectorAll('[data-pid]').forEach(function (n) {
      var r = n.getBoundingClientRect(), dx = box.scrollLeft - R.left, dy = -R.top;
      pos[n.getAttribute('data-pid')] = { l: r.left + dx, r: r.right + dx, t: r.top + dy, b: r.bottom + dy, cx: (r.left + r.right) / 2 + dx, cy: (r.top + r.bottom) / 2 + dy };
    });
    function f(n) { return Math.round(n * 2) / 2; }
    (A.S.relations || []).forEach(function (rel) {
      var a = pos[rel.a], b = pos[rel.b];
      if (rel.kind !== 'partner' || !a || !b || Math.abs(a.cy - b.cy) > 4) return;
      var L = a.cx < b.cx ? a : b, Rt = a.cx < b.cx ? b : a; d += 'M' + f(L.r) + ' ' + f(L.cy) + 'H' + f(Rt.l);
    });
    var groups = {};
    A.S.people.forEach(function (x) {
      var ps = A.parentsOf(x.id).filter(function (id) { return pos[id]; }); if (!ps.length || !pos[x.id]) return;
      var k = ps.slice().sort().join('+'); (groups[k] = groups[k] || { ps: ps, kids: [] }).kids.push(x.id);
    });
    Object.keys(groups).forEach(function (k) {
      var ps = groups[k].ps.map(function (id) { return pos[id]; }), kids = groups[k].kids.map(function (id) { return pos[id]; }), ax, ay;
      var pb = Math.max.apply(null, ps.map(function (q) { return q.b; })), top = Math.min.apply(null, kids.map(function (q) { return q.t; }));
      if (ps.length === 2 && Math.abs(ps[0].cy - ps[1].cy) < 4) { ax = (Math.min(ps[0].r, ps[1].r) + Math.max(ps[0].l, ps[1].l)) / 2; ay = ps[0].cy; }
      else { ax = ps.reduce(function (s, q) { return s + q.cx; }, 0) / ps.length; ay = pb; }
      var bus = pb + (top - pb) / 2, xs = kids.map(function (q) { return q.cx; }).concat([ax]);
      d += 'M' + f(ax) + ' ' + f(ay) + 'V' + f(bus) + 'M' + f(Math.min.apply(null, xs)) + ' ' + f(bus) + 'H' + f(Math.max.apply(null, xs));
      kids.forEach(function (q) { d += 'M' + f(q.cx) + ' ' + f(bus) + 'V' + f(q.t); });
    });
    svg.innerHTML = '<path d="' + d + '"/>';
  }
  /* ── THE TREEMAPS · What you own (Home) and Your investments (What you hold) ─────────────
     One way of looking at money, the website's ("What Finna shows you"): flat blocks, each with
     its name, a line under it, its value, and its share pinned bottom-right; one green in steps,
     the darkest the largest. A switch regroups the same money (by category, by entity, …);
     selecting a block opens it into what it is made of, and the path above goes back. At the
     last step a block opens its own source and history. Nothing is dotted, nothing is nested:
     one level at a time, so the whole view reads at a glance. Blocks travel between views
     rather than redraw (CSS transitions on a flat layout; none with reduced motion).
     Everything is computed from the record; a single investment is its share of its account's
     latest statement. What the household owes is set out under the Home map, line by line,
     against what it owns. */
  var TM_PART = { equities: 'stock funds', fixed: 'bond funds' };
  /* stm: the same map as Home's, opening Records › Statement (28 Sep 2026) — its own path and lens */
  var TV = { own: { lens: 'cat', path: [] }, stm: { lens: 'cat', path: [] }, inv: { lens: 'cat', path: [] } };
  function tvOwn(id) { return id === 'own' || id === 'stm'; }
  var TV_LENS = {
    own: [['cat', 'By category'], ['entity', 'By entity']],
    stm: [['cat', 'By category'], ['entity', 'By entity']],
    inv: [['cat', 'By category'], ['entity', 'By entity'], ['held', 'By where it’s held', 'Where held'], ['program', 'By program']]
  };
  /* the map of what you own: one blue in six steps (app.css, CHART COLOURS, 3 Oct 2026), the largest
     first: darker is larger on light, lighter is larger on dark; the ink on each is the token for words on it */
  var TV_RAMP = ['--map-1', '--map-2', '--map-3', '--map-4', '--map-5', '--map-6'];
  /* the words on each step: white down to --primary-72 (27 Sep 2026: that step went white — it read
     as dark green, so black words looked wrong), black on the two palest steps */
  var TV_INK = ['--map-ink-1', '--map-ink-2', '--map-ink-3', '--map-ink-4', '--map-ink-5', '--map-ink-6'];
  var TV_NOUN = { property: ['property', 'properties'], real: ['item', 'items'] };
  function tvCount(c, n) { var w = TV_NOUN[c] || ['account', 'accounts']; return n + ' ' + (n === 1 ? w[0] : w[1]); }
  function tvEntity(a) {
    if (a.company) return { k: 'co:' + a.id, l: a.name, s: (a.holder || '').split(' ·')[0] + '’s company' + (a.holder && a.holder.indexOf('·') > -1 ? ' · ' + a.holder.split('· ')[1] : '') };
    if (!a.holder || a.holder === 'Joint') return { k: 'joint', l: 'Held jointly', s: 'Household' };
    var who = a.holder.split(' ·')[0]; return { k: 'p:' + who, l: who + ', personally', s: 'Sole name' };
  }
  function tvWho(a) { var en = tvEntity(a); return a.company ? a.name : en.k === 'joint' ? 'Held jointly' : en.l.replace(', personally', ''); }
  function tvOwedOn(a) { return A.S.liabilities.filter(function (l) { return l.securedOn === a.id && l.kind !== 'commitment'; }).reduce(function (s, l) { return s + A.amount(l.id); }, 0); }
  function tvPartName(a, c, many) { return a.name + (many ? ' · ' + (TM_PART[c] || A.MIXL[c].toLowerCase()) : ''); }
  /* an asset, looked through the way the policy counts it: its parts by class, and (for an
     investment) the single investments inside each part */
  function tvParts(a) {
    var v = A.amount(a.id), mix = a.mix || A.DEFAULT_MIX[a.cls] || {}, keys = Object.keys(mix).filter(function (k) { return mix[k] > 0; }), parts = {};
    var ps = a.positions && a.positions.length ? a.positions : keys.map(function (k) { return { n: tvPartName(a, k, keys.length > 1), c: k, w: mix[k] }; });
    ps.forEach(function (p, i) {
      var pt = parts[p.c] = parts[p.c] || { c: p.c, v: 0, name: tvPartName(a, p.c, keys.length > 1), pos: [] };
      pt.v += v * p.w; pt.pos.push({ k: a.id + '-p' + i, label: p.n, v: v * p.w, c: p.c, line: a.id });
    });
    return Object.keys(parts).map(function (k) { return parts[k]; });
  }
  function tvGroup(nodes, keyOf, make) {
    var by = {}, out = [];
    nodes.forEach(function (n) { var g = keyOf(n); if (!by[g.k]) { by[g.k] = make(g); out.push(by[g.k]); } by[g.k].v += n.v; by[g.k].kids.push(n); });
    return out;
  }
  /* the tree for a map and a lens: [{ k, label, sub, v, kids? , line? }] */
  function tvTree(id, lens) {
    var S = A.S, assets = S.assets.filter(function (a) { return A.amount(a.id) > 0 && (tvOwn(id) || A.isInvestable(a)); });
    if (tvOwn(id)) {
      if (lens === 'entity') {
        return tvGroup(assets.map(function (a) { return { k: a.id, label: a.name, sub: A.CLS[a.cls] + (tvOwedOn(a) ? ' · owed ' + A.short(tvOwedOn(a)) : ''), v: A.amount(a.id), line: a.id, a: a }; }),
          function (n) { return tvEntity(n.a); }, function (g) { return { k: g.k, label: g.l, sub: g.s, v: 0, kids: [] }; });
      }
      var partsOwn = [];
      assets.forEach(function (a) { tvParts(a).forEach(function (p, i, all) { partsOwn.push({ k: a.id + ':' + p.c, label: p.name, sub: tvWho(a) + (tvOwedOn(a) && all.length === 1 ? ' · owed ' + A.short(tvOwedOn(a)) : ''), v: p.v, line: a.id, a: a, c: p.c }); }); });
      return tvGroup(partsOwn, function (n) { return { k: n.c, l: A.MIXL[n.c] }; }, function (g) { return { k: g.k, label: g.l, v: 0, kids: [], c: g.k }; })
        .map(function (g) { g.sub = tvCount(g.c, g.kids.length); return g; });
    }
    /* investments: the last step is always the single investments */
    if (lens === 'cat') {
      var parts = [];
      assets.forEach(function (a) { tvParts(a).forEach(function (p) { parts.push({ k: a.id + ':' + p.c, label: p.name, sub: tvWho(a) + (a.heldAt || a.institution ? ' · ' + (a.heldAt || a.institution) : ''), v: p.v, c: p.c, a: a, kids: p.pos.map(function (x) { return { k: x.k, label: x.label, v: x.v, line: x.line }; }) }); }); });
      return tvGroup(parts, function (n) { return { k: n.c, l: A.MIXL[n.c] }; }, function (g) { return { k: g.k, label: g.l, v: 0, kids: [], c: g.k }; })
        .map(function (g) { g.sub = tvCount(g.c, g.kids.length); return g; });
    }
    var whole = assets.map(function (a) {
      var pos = []; tvParts(a).forEach(function (p) { p.pos.forEach(function (x) { pos.push({ k: x.k, label: x.label, sub: A.MIXL[x.c], v: x.v, line: x.line }); }); });
      var place = a.heldAt || a.institution || '';
      return { k: a.id, label: a.name, sub: lens === 'held' ? tvWho(a) + (a.program ? ' · ' + a.program : '') : lens === 'entity' ? place : place, v: A.amount(a.id), a: a, kids: pos };
    });
    return tvGroup(whole, function (n) {
      var a = n.a;
      if (lens === 'entity') return tvEntity(a);
      if (lens === 'held') { var h = a.heldAt || a.institution || 'Not recorded'; return { k: 'h:' + h, l: h }; }
      var g = a.program || 'Program not recorded'; return { k: 'g:' + g, l: g };
    }, function (g) { return { k: g.k, label: g.l, sub: g.s, v: 0, kids: [] }; })
      .map(function (g) { if (!g.sub) g.sub = tvCount('', g.kids.length); return g; });
  }
  /* where the path leads: the blocks on show, the trail, and the total they sit in */
  function tvView(id) {
    var st = TV[id], tree = tvTree(id, st.lens), total = tree.reduce(function (s, g) { return s + g.v; }, 0), nodes = tree, trail = [];
    for (var i = 0; i < st.path.length; i++) {
      var n = nodes.filter(function (x) { return x.k === st.path[i]; })[0];
      if (!n || !n.kids) { st.path = st.path.slice(0, i); break; }
      trail.push(n); nodes = n.kids;
    }
    nodes = nodes.slice().sort(function (x, y) { return y.v - x.v; });
    var shown = nodes.reduce(function (s, n) { return s + n.v; }, 0);
    return { nodes: nodes, trail: trail, total: total, shown: shown, depth: trail.length };
  }
  var TV_WORD = { own: 'what you own', stm: 'what you own', inv: 'your investments' };
  function tvHead(id, V) {
    var all = tvOwn(id) ? 'All you own' : 'All investments';
    var items = [[all, 0]].concat(V.trail.map(function (n, i) { return [n.label, i + 1]; }));
    var crumbs = items.map(function (it, i) {
      return i === items.length - 1 ? '<span aria-current="page">' + e(it[0]) + '</span>' : '<button class="link" type="button" data-act="tv-up" data-map="' + id + '" data-depth="' + it[1] + '">' + e(it[0]) + '</button>';
    }).join('<span aria-hidden="true">›</span>');
    var last = V.nodes.length && !V.nodes[0].kids;
    return '<nav class="crumbs tv-path" aria-label="Where you are on the map">' + crumbs + '<span class="tv-sum num">' + A.money(V.shown) + (V.depth ? ' · ' + A.pct(V.shown / V.total, 1) : '') + '</span></nav>' +
      '<span class="tv-hint">' + (last ? 'Select one for its source and history' : 'Select a block to open it') + '</span>' +
      (V.depth ? '<button class="key key-s key-secondary tv-back" type="button" data-act="tv-up" data-map="' + id + '" data-depth="' + (V.depth - 1) + '">' + A.ic('top', 'tv-back-ic') + 'Back</button>' : '');
  }
  function tvSeg(id) {
    var L = TV_LENS[id], i = L.map(function (l) { return l[0]; }).indexOf(TV[id].lens);
    return '<div class="seg-wrap"><div class="seg" role="group" aria-label="Group the map" style="--n:' + L.length + ';--i:' + Math.max(0, i) + '"><span class="seg-thumb" aria-hidden="true"></span>' +
      L.map(function (l) { var w = l[2] || l[1].replace(/^By /, ''); return '<button type="button" data-act="tv-lens" data-map="' + id + '" data-lens="' + l[0] + '" aria-pressed="' + (TV[id].lens === l[0]) + '"><span class="seg-l">' + e(l[1]) + '</span><span class="seg-s">' + e(w.charAt(0).toUpperCase() + w.slice(1)) + '</span></button>'; }).join('') + '</div></div>';
  }
  /* WHAT YOU OWE — a treemap of its own, drawn under what is owned and to the same scale: its area
     is to the map above as what is owed is to what is owned, so the two read against each other at
     a glance, never netted away (B3). Each debt is a block in the owed tones, sized by its balance,
     with what it is secured on; it opens its source and history. The arithmetic closes under it:
     owned − owed. Opened into a category or an entity, only what is owed against that part. */
  var TV_OWE = ['--l-owed', '--l-owed-2'];
  function tvDebts(V) {
    var S = A.S, scope = V.depth ? V.trail[V.depth - 1] : null;
    var ids = scope ? (function collect(n, out) { (n.kids || []).forEach(function (k) { if (k.line) out[k.line] = true; if (k.a) out[k.a.id] = true; collect(k, out); }); return out; })(scope, {}) : null;
    var debts = S.liabilities.filter(function (l) { return l.kind !== 'commitment' && (!ids || ids[l.securedOn]) && A.amount(l.id) > 0; })
      .sort(function (x, y) { return A.amount(y.id) - A.amount(x.id); });
    var commits = S.liabilities.filter(function (l) { return l.kind === 'commitment' && (!ids || ids[l.securedOn]); });
    var owned = scope ? V.shown : A.totals().owned, owed = debts.reduce(function (s, l) { return s + A.amount(l.id); }, 0);
    return { scope: scope, where: scope ? scope.label : '', debts: debts, commits: commits, owned: owned, owed: owed };
  }
  function tvOwe(V) {
    var D = tvDebts(V);
    var h = '<div class="tv-owe-wrap" data-tv-owe-wrap><div class="lg-h"><span class="eyebrow">' + (D.scope ? 'Owed against ' + e(D.where) : 'What you owe') + '</span>' +
      (D.debts.length ? '<span class="lg-count num">' + A.money(D.owed) + ' · ' + A.pct(D.owed / D.owned, 0) + ' of ' + (D.scope ? 'its value' : 'what you own') + ' · ' + D.debts.length + ' debt' + (D.debts.length === 1 ? '' : 's') + '</span>' : '') + '</div>';
    h += D.debts.length ? '<div class="tv tv-owe" data-tv-owe role="group" aria-label="What you owe, as blocks sized by balance, to the same scale as what you own"></div><p class="tv-more" data-tv-owe-more hidden></p>' :
      '<p class="lg-none">' + (D.scope ? 'Nothing is owed against ' + e(D.where) + '.' : 'Nothing is owed.') + '</p>';
    h += '<div class="lg-row is-net"><span class="lg-lab"><b>' + (D.scope ? 'Net · ' + e(D.where) : gl('net-worth', 'Net worth')) + '</b><small class="num">Owned ' + A.money(D.owned) + ' − owed ' + A.money(D.owed) + '</small></span><span class="lg-net num">' + A.money(D.owned - D.owed) + '</span></div>';
    /* a capital commitment is not a debt until it is called, so it is named under the sum, not in it */
    if (D.commits.length) h += '<p class="help lg-note">' + gl('commitment', 'Also committed, not yet called') + ': ' + D.commits.map(function (l) { return '<button class="link" type="button" data-act="line" data-id="' + l.id + '">' + e(l.lender) + ' ' + A.money(A.amount(l.id)) + '</button>'; }).join(', ') + '. It becomes a debt only when it is called.</p>';
    return h + '</div>';
  }
  function treeMap(id, opts) {
    var V = tvView(id); opts = opts || {};
    if (!V.nodes.length && !V.depth) return tvOwn(id) ? '' : '<section class="panel sg-card"><span class="eyebrow">Your investments</span><p class="sg-line">Nothing to map yet. Investments appear here from Records, with the single investments inside each account.</p><div><a class="key key-secondary" href="#/records/own">Add what you hold</a></div></section>';
    return '<div class="' + (opts.bare ? 'tv-card tv-bare' : 'panel tv-card') + '" data-tv-card="' + id + '" data-lens="' + TV[id].lens + '" data-depth="' + V.depth + '"><div class="tv-bar">' + tvSeg(id) + (id === 'own' ? '<a class="link" href="#/records/statement">Open the statement' + A.ic('arrow') + '</a>' : '') + '</div>' +
      '<div class="tv-head" data-tv-head>' + tvHead(id, V) + '</div>' +
      '<div class="tv" data-tv="' + id + '" role="group" aria-label="' + (tvOwn(id) ? 'What you own' : 'Your investments') + ', as blocks sized by value"></div>' +
      '<p class="tv-more" data-tv-more hidden></p>' +
      (tvOwn(id) ? tvOwe(V) : opts.foot != null ? opts.foot : '<p class="tv-foot">By category, each class wears its own colour: green for what can be cash within days, blue for what takes longer. Inside a class, and in the other views, the larger the block, the stronger its shade. Retirement accounts and the 529 are split into their stock and bond funds, the way your policy counts them; a single investment is its share of the account’s latest statement.</p>') + '</div>';
  }
  var TV_FIT = ['fs', 'f1', 'fn', 'f2', 'f3', 'f4', 'f5'];
  /* a block's words fit, or it steps down: the short value, no second line, a smaller name, … — and a
     name is never cut: a block whose name cannot be read whole is named under the map instead */
  function tvOver(el) {
    var i = el.firstChild, n = el.querySelector('.tv-n');
    return !!i && (i.scrollHeight > i.clientHeight + 1 || i.scrollWidth > i.clientWidth + 1 || (n && (n.scrollHeight > n.clientHeight + 1 || n.scrollWidth > n.clientWidth + 1)));
  }
  /* draw blocks into a box: items [{ k, v, label, sub, share, c, ink, open, line, aria }], keyed so a
     block that exists before and after travels. opts.from: the block new ones grow out of; opts.up:
     the block the household came out of, which shrinks back from the whole box. Returns the blocks
     too small to read, for the line under the map. */
  function tvDraw(box, items, motion, opts) {
    var W = box.clientWidth, H = box.clientHeight, gap = parseFloat(getComputedStyle(box).getPropertyValue('--tv-gap')) || 12;
    var old = {}, oldR = {}, nodes = [], more = [], keep = {};
    Array.prototype.forEach.call(box.children, function (el) { if (el.hasAttribute('data-gone')) return; var k = el.getAttribute('data-k'); old[k] = el; oldR[k] = { x: el.offsetLeft, y: el.offsetTop, w: el.offsetWidth, h: el.offsetHeight }; });
    /* a band much wider than tall is sliced into one row (squarifying it leaves slivers); anything
       squarer is squarified */
    function place(list) {
      var rects = W / H > 3 ? (function () { var tot = list.reduce(function (s, it) { return s + it.v; }, 0), x = 0; return list.map(function (it) { var w = tot ? it.v / tot * W : 0, r = { n: { it: it }, x: x, y: 0, w: w, h: H }; x += w; return r; }); })() :
        squarify(list.map(function (it) { return { it: it, v: it.v }; }), 0, 0, W, H);
      return rects.map(function (r) {
        var x0 = Math.round(r.x + gap / 2), y0 = Math.round(r.y + gap / 2), x1 = Math.round(r.x + r.w - gap / 2), y1 = Math.round(r.y + r.h - gap / 2);
        return { it: r.n.it, r: { x: x0, y: y0, w: Math.max(0, x1 - x0), h: Math.max(0, y1 - y0) } };
      });
    }
    nodes = place(items);
    /* THE TAIL IN ONE BLOCK (27 Sep 2026: "why are there two sections empty?"). Blocks too small to
       carry a name were drawn as blank slivers. Two or more of them become one block — "2 more",
       their sum — sized by that sum, and the line under the map names each one. */
    var tiny = nodes.filter(function (d) { return d.r.w < 64 || d.r.h < 44; });
    if (tiny.length > 1) {
      var tk = {}, t = tiny.map(function (d) { tk[d.it.k] = true; return d.it; });
      var sum = t.reduce(function (a, it) { return a + it.v; }, 0), last = t[t.length - 1];
      var share = t.reduce(function (a, it) { return a + (parseFloat(it.share) || 0); }, 0).toFixed(1) + '%';
      nodes = place(items.filter(function (it) { return !tk[it.k]; }).concat([{ k: 'tail:' + t.map(function (it) { return it.k; }).join('+'), v: sum,
        label: t.length + ' more', sub: '', share: share, c: last.c, ink: last.ink, tail: t,
        aria: t.length + ' more, ' + A.money(sum) + ' together: ' + t.map(function (it) { return it.label; }).join(', ') + '. Each is listed under the map' }]));
    }
    function put(el, r) { el.style.left = r.x + 'px'; el.style.top = r.y + 'px'; el.style.width = r.w + 'px'; el.style.height = r.h + 'px'; }
    nodes.forEach(function (d) {
      var it = d.it, el = old[it.k], isNew = !el;
      if (isNew) { el = document.createElement(opts.still ? 'span' : 'button'); if (!opts.still) el.type = 'button'; el.className = 'tv-t'; el.setAttribute('data-k', it.k); box.appendChild(el); }
      keep[it.k] = true;
      el.style.setProperty('--tv-c', 'var(' + it.c + ')'); el.style.setProperty('--tv-ink', 'var(' + it.ink + ')');
      el.classList.toggle('tv-tail', !!it.tail); el.removeAttribute('tabindex');
      if (opts.still) { /* a still picture: the words are on the blocks, the box names the whole */ }
      else if (it.tail) { el.removeAttribute('data-act'); el.removeAttribute('data-id'); el.removeAttribute('data-open'); el.setAttribute('tabindex', '-1'); el.setAttribute('aria-label', it.aria); }
      else if (it.open) { el.setAttribute('data-act', 'tv-open'); el.setAttribute('data-map', it.open.map); el.setAttribute('data-open', it.open.key); el.removeAttribute('data-id'); el.setAttribute('aria-label', it.aria + '. Open it'); }
      else if (it.act) { el.setAttribute('data-act', it.act); el.setAttribute('data-id', it.id); el.removeAttribute('data-open'); el.setAttribute('aria-label', it.aria + '. ' + (it.actWord || 'Show it in the table')); }
      else { el.setAttribute('data-act', 'line'); el.setAttribute('data-id', it.line); el.removeAttribute('data-open'); el.setAttribute('aria-label', it.aria + '. Opens its source and history'); }
      var html = '<span class="tv-in"><span class="tv-n">' + e(it.label) + '</span>' + (it.sub ? '<span class="tv-s">' + e(it.sub) + '</span>' : '') +
        '<span class="tv-v num"><span class="tv-vf">' + A.money(it.v) + '</span><span class="tv-vs">' + A.short(it.v) + '</span></span><span class="tv-p num">' + it.share + '</span></span>' +
        '<span class="tv-x num" aria-hidden="true">+' + (it.tail ? it.tail.length : 1) + '</span>';
      if (el.getAttribute('data-html') !== html) { el.innerHTML = html; el.setAttribute('data-html', html); if (motion) el.firstChild.classList.add('is-arriving'); }
      /* labels are fitted at the final size, then the block starts from where it was */
      el.style.transition = 'none'; put(el, d.r);
      TV_FIT.concat('xs').forEach(function (c) { el.classList.remove(c); });
      if (d.r.w < 64 || d.r.h < 44) el.classList.add('xs'); else for (var s = 0; s < TV_FIT.length && tvOver(el); s++) el.classList.add(TV_FIT[s]);
      if (it.tail) { if (tvOver(el)) el.classList.add('xs'); more = more.concat(it.tail); }
      else if (el.classList.contains('xs') || tvOver(el)) { el.classList.add('xs'); more.push(it); }
      if (motion) {
        var start = !isNew ? oldR[it.k] : (opts.up === it.k ? { x: 0, y: 0, w: W, h: H } : opts.from && oldR[opts.from]);
        if (start) put(el, start); else if (isNew) el.style.opacity = '0';
      }
    });
    var target = opts.up && nodes.filter(function (d) { return d.it.k === opts.up; })[0];
    Object.keys(old).forEach(function (k) {
      if (keep[k]) return;
      var el = old[k]; el.setAttribute('data-gone', ''); el.setAttribute('tabindex', '-1'); el.removeAttribute('data-act');
      if (!motion) { el.remove(); return; }
      el.style.transition = ''; el.style.opacity = '0'; if (target) put(el, target.r);
      setTimeout(function () { el.remove(); }, 700);
    });
    if (motion) void box.offsetWidth;
    nodes.forEach(function (d) { var el = box.querySelector('[data-k="' + CSS.escape(d.it.k) + '"]:not([data-gone])'); if (!el) return; el.style.transition = motion ? '' : 'none'; put(el, d.r); el.style.opacity = ''; });
    box.classList.add('ready');
    return more;
  }
  function tvMore(el, more, still) {
    el.innerHTML = more.length ? '<span class="tv-more-h">Also here</span>' + more.map(function (it) {
      if (still) return '<span class="tv-more-i"><i style="background:var(' + it.c + ')"></i>' + e(it.label) + ' <b class="num">' + A.short(it.v) + ' · ' + it.share + '</b></span>';
      return '<button class="tv-more-i" type="button" ' + (it.open ? 'data-act="tv-open" data-map="' + it.open.map + '" data-open="' + e(it.open.key) + '"' : it.act ? 'data-act="' + it.act + '" data-id="' + e(it.id) + '"' : 'data-act="line" data-id="' + it.line + '"') + '><i style="background:var(' + it.c + ')"></i>' + e(it.label) + ' <b class="num">' + A.short(it.v) + ' · ' + it.share + '</b></button>'; }).join('') : '';
    el.hidden = !more.length;
  }
  /* THE COLOURS OF A BLOCK (CHART COLOURS, 3 Oct 2026). The investments map by category wears the
     class colours: each class its own (liquid green, illiquid blue), and inside a class five shades of
     it, the largest first. Any other lens, and the map of what you own, stays the wealth blue. */
  function tvTone(id, lens, V, n, i) {
    var step = Math.min(i, TV_RAMP.length - 1), blue = [TV_RAMP[step], TV_INK[step]];
    if (id !== 'inv' || lens !== 'cat') return blue;
    var k = A.CLS_TOK[V.depth ? V.trail[0].c : n.c]; if (!k) return blue;
    if (!V.depth) return ['--c-' + k, '--c-' + k + '-ink'];
    var s = Math.min(i, 4) + 1; return ['--h-' + k + '-' + s, '--h-' + k + '-' + s + '-ink'];
  }
  function tvLayout(box, animate, opts) {
    if (!box) return; opts = opts || {};
    var id = box.getAttribute('data-tv'), W = box.clientWidth, H = box.clientHeight; if (!W || !H) return;
    var V = tvView(id), st = TV[id], motion = animate && !matchMedia('(prefers-reduced-motion: reduce)').matches;
    var items = V.nodes.map(function (n, i) {
      var tone = tvTone(id, st.lens, V, n, i), share = A.pct(n.v / V.total, 1);
      return { k: V.depth ? 'n:' + st.path.join('/') + '/' + n.k : 'r' + i, v: n.v, label: n.label, sub: n.sub, share: share, c: tone[0], ink: tone[1],
        open: n.kids ? { map: id, key: n.k } : null, line: n.line, aria: n.label + (n.sub ? ', ' + n.sub : '') + ', ' + A.money(n.v) + ', ' + share + ' of ' + TV_WORD[id] };
    });
    var more = tvDraw(box, items, motion, opts);
    var card = box.closest('[data-tv-card]'); if (!card) return;
    card.setAttribute('data-lens', st.lens); card.setAttribute('data-depth', String(V.depth));
    card.querySelector('[data-tv-head]').innerHTML = tvHead(id, V);
    var seg = card.querySelector('.seg');
    seg.querySelectorAll('button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-lens') === st.lens)); });
    var on = seg.querySelector('[aria-pressed="true"]');
    if (on) { seg.style.setProperty('--x', on.offsetLeft + 'px'); seg.style.setProperty('--w', on.offsetWidth + 'px'); }
    tvMore(card.querySelector('[data-tv-more]'), more);
    /* what is owed, under it and to its scale */
    var ow = card.querySelector('[data-tv-owe-wrap]'); if (!ow) return;
    var scopeKey = st.lens + '|' + st.path.join('/');
    if (ow.getAttribute('data-scope') !== scopeKey) { ow.outerHTML = tvOwe(V); ow = card.querySelector('[data-tv-owe-wrap]'); ow.setAttribute('data-scope', scopeKey); }
    var ob = ow.querySelector('[data-tv-owe]'); if (!ob) return;
    var D = tvDebts(V), floor = parseFloat(getComputedStyle(ob).getPropertyValue('--tv-owe-min')) || 96;
    ob.style.height = Math.round(Math.max(floor, Math.min(H, W * H * (D.owed / D.owned) / W))) + 'px';
    var oItems = D.debts.map(function (l, i) {
      var on2 = A.asset(l.securedOn), v = A.amount(l.id), share = A.pct(v / D.owned, 1);
      var sub = [l.rate ? l.rate + '%' : '', on2 ? 'against ' + on2.name : ''].filter(Boolean).join(' · ');
      return { k: 'd:' + l.id, v: v, label: l.name, sub: sub, share: share, c: TV_OWE[Math.min(i, TV_OWE.length - 1)], ink: '--white', line: l.id,
        aria: l.name + ', ' + l.lender + (sub ? ', ' + sub : '') + ', ' + A.money(v) + ', ' + share + ' of ' + (D.scope ? 'its value' : 'what you own') };
    });
    tvMore(ow.querySelector('[data-tv-owe-more]'), tvDraw(ob, oItems, motion, {}));
  }
  /* the switch, the blocks and the path, driven from the shell */
  function tvGo(id, fn, opts) { fn(TV[id]); tvLayout(document.querySelector('[data-tv="' + id + '"]'), true, opts); }
  function tvState(id) { return TV[id]; }
  /* A PLAIN MAP — the same blocks with no switch and no path: one level (28 Sep 2026). Fees: each
     holding sized by what it costs a year, opening its line. Cover: each policy sized by the sum it
     insures, finding its row in the table. Whatever has no size is named under the map. */
  function plainItems(id) {
    var S = A.S, list = [];
    if (id === 'fee') S.assets.filter(A.isInvestable).forEach(function (a) { var v = A.amount(a.id) * (a.fee || 0) / 100; if (v > 0) list.push({ k: a.id, v: v, label: a.name, sub: (a.holder || '').split(' ·')[0] + ' · ' + a.fee.toFixed(2) + '% a year', line: a.id }); });
    if (id === 'cov') S.cover.forEach(function (c) { if (c.sum > 0) list.push({ k: c.id, v: c.sum, label: c.type + ' · ' + c.covers, sub: c.insurer, act: 'row-jump', id: 'cov:' + c.id }); });
    if (id === 'inv') tvTree('inv', 'cat').forEach(function (n) { if (n.v > 0) list.push({ k: 'c:' + n.k, v: n.v, label: n.label, sub: n.sub, cls: n.c }); });
    list.sort(function (x, y) { return y.v - x.v; });
    var total = list.reduce(function (s2, it) { return s2 + it.v; }, 0);
    return list.map(function (it, i) {
      var step = Math.min(i, TV_RAMP.length - 1), tok = it.cls && A.CLS_TOK[it.cls]; it.share = A.pct(it.v / total, 1);
      it.c = tok ? '--c-' + tok : TV_RAMP[step]; it.ink = tok ? '--c-' + tok + '-ink' : TV_INK[step];
      it.aria = it.label + ', ' + it.sub + ', ' + A.money(it.v) + (id === 'fee' ? ' a year' : id === 'inv' ? '' : ' insured') + ', ' + it.share + ' of ' + (id === 'fee' ? 'the fees' : id === 'inv' ? 'your investments' : 'what is insured');
      return it;
    });
  }
  /* opts.still: the blocks open nothing (a picture inside a link or a card); the box is read as one picture */
  function plainMap(id, label, opts) {
    var still = opts && opts.still;
    return '<div class="tv-card tv-bare tv-plain' + (still ? ' tv-still' : '') + '"><div class="tv tv-pm" data-tvp="' + id + '"' + (still ? ' data-still role="img"' : ' role="group"') + ' aria-label="' + e(label) + '"></div><p class="tv-more" data-tvp-more hidden' + (still ? ' aria-hidden="true"' : '') + '></p>' + (opts && opts.foot || '') + '</div>';
  }
  function tvPlain(box, animate) {
    if (!box || !box.clientWidth || !box.clientHeight) return;
    var motion = animate && !matchMedia('(prefers-reduced-motion: reduce)').matches, still = box.hasAttribute('data-still');
    var more = tvDraw(box, plainItems(box.getAttribute('data-tvp')), motion, { still: still });
    var m = box.parentNode.querySelector('[data-tvp-more]'); if (m) tvMore(m, more, still);
  }

  /* ══ SCENES — the opener at the top of a desk page (Christian and Esben, 28 Sep 2026 · pilot) ══
     A light ground in the desk's own tint, the page's answer in a few plain words, and one moving
     picture of it, before the rows and the tables. Each page gets the form that fits its job:
       Records · Statement     a bridge: what you own, less what you owe, is what is yours
       Policy · Drift          a needle on a dial, against the range the household wrote
       Investment · Holdings   two rings: the mix the policy sets outside, what is held inside
       Protection · Cover      a year clock: every renewal on its day, the next 30 days lit
       Succession · The will   a line from the day it was signed, and what changed since
     Every figure is computed from the record when it is drawn; nothing is typed in. A picture is
     drawn in pixels once its box has a size (as the treemaps are), and again, still, when the box
     changes. Motion plays once, on arriving at the page: the words rise, the numbers count, the
     marks draw in order. Afterwards only attention moves (a slow bullion pulse). Reduced motion
     shows the final state at once. The rows and tables below stay the full, readable record, and
     every mark carries its value on hover and on keyboard focus.
     COLOUR: the chart tokens only (A.MIXC), in an order whose neighbours stay apart for every kind
     of colour vision (checked with the dataviz validator: adjacent ΔE ≥ 15). The brand's muted
     chart colours sit outside the validator's generic lightness and chroma bands; the brand wins,
     and every segment is named in a legend beside it. */
  var SC_EASE = 'cubic-bezier(.2,.7,.2,1)';
  var SC_FMT = {
    short: function (v) { return A.short(v); },
    money: function (v) { return A.money(v); },
    pct: function (v) { return v.toFixed(1) + '%'; },
    pts: function (v) { return v.toFixed(1) + (Math.abs(v - 1) < 0.05 ? ' point' : ' points'); },
    usd0: function (v) { return A.sym() + Math.round(v); },
    int: function (v) { return String(Math.round(v)); },
    pct0: function (v) { return Math.round(v) + '%'; },
    days: function (v) { var n = Math.round(v); return n + (n === 1 ? ' day' : ' days'); }
  };
  var SC_WORD = ['no', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  function scW(n) { return n <= 10 ? SC_WORD[n] : String(n); }
  function scCap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
  function f1(n) { return Math.round(n * 10) / 10; }
  function scNum(v, fmt, from) {
    return '<b class="sc-n" data-count="' + v + '" data-fmt="' + fmt + '"' + (from != null ? ' data-from="' + from + '"' : '') + '>' + SC_FMT[fmt](v) + '</b>';
  }
  /* the words: an eyebrow, the answer, a sentence under it, and the tiles when they sit with the words */
  function scWords(eyebrow, answer, sub, facts, extra) {
    return '<div class="sc-words"><span class="eyebrow">' + e(eyebrow) + '</span><p class="sc-answer">' + answer + '</p>' + (sub ? '<p class="sc-sub">' + sub + '</p>' : '') +
      (facts && facts.length ? scTiles(facts) : '') + (extra || '') + '</div>';
  }
  /* HIGHLIGHT TILES — two or three numbers beside the words: the value large, what it is small, its
     name and an icon on top. The one that needs you is the Needs-you card in miniature (option A,
     Christian 28 Sep 2026): a Champagne ground, a Bullion hairline, its name in the attention label.
     Text facts (the will: where the original is, the executors) keep a plain two-line tile. */
  function scTiles(facts) {
    return '<ul class="sc-facts' + (facts[0].txt ? ' txt' : ' hl') + '">' + facts.map(function (f) {
      if (f.txt) return '<li><span>' + (f.gl ? gl(f.gl, e(f.k)) : e(f.k)) + '</span><b class="sc-t">' + e(f.v) + '</b></li>';
      return '<li' + (f.att ? ' class="att"' : '') + '><span class="hl-k"><span class="hl-kn"><span class="hl-kt">' + e(f.k) + '</span>' + (f.att ? '<span class="status-label attention">' + e(f.k) + '</span>' : '') + (f.gl ? glI(f.gl) : '') + '</span>' + (f.ic ? A.ic(f.ic) : '') + '</span>' +
        '<b class="hl-v"' + (f.n != null ? ' data-count="' + f.n + '" data-fmt="' + f.fmt + '"' + (f.pre ? ' data-pre="' + f.pre + '"' : '') : '') + '>' + e(f.v) + '</b><span class="hl-l">' + e(f.l) + '</span></li>';
    }).join('') + '</ul>';
  }
  /* a scene: words beside the picture, or (stack) words and tiles on top with the picture full width under them */
  function scene(kind, desk, words, label, foot, opts) {
    opts = opts || {};
    var vis = opts.visRaw ? opts.vis : '<div class="sc-vis' + (opts.stack ? ' sc-wide' : '') + '" data-scene="' + kind + '">' + (opts.vis || '') + '</div>';
    var inner = opts.stack ? '<div class="sc-top">' + words + (opts.tiles || '') + '</div>' + vis : '<div class="sc-in">' + words + vis + '</div>';
    return '<section class="scene on-tint scene-' + desk + (opts.stack ? ' sc-stack' : '') + '" aria-label="' + e(label) + '">' + inner + (foot ? '<div class="sc-foot">' + foot + '</div>' : '') + '</section>';
  }
  function scSvg(w, h, inner, label) {
    return '<svg class="sc-svg" width="' + f1(w) + '" height="' + f1(h) + '" viewBox="0 0 ' + f1(w) + ' ' + f1(h) + '" role="img" aria-label="' + e(label) + '">' + inner + '</svg>';
  }
  var SC_CTX = null;
  function scTextW(s, weight) {
    if (!SC_CTX) SC_CTX = document.createElement('canvas').getContext('2d');
    SC_CTX.font = (weight || 400) + ' 13px "Lexend Variable", Arial, sans-serif';
    return SC_CTX.measureText(s).width;
  }
  /* the tooltip: value first, then what it is; same on hover and on keyboard focus */
  function scTips(box) {
    var tip = document.createElement('div'); tip.className = 'sc-tip'; tip.hidden = true; box.appendChild(tip);
    function show(el, x, y, focus) {
      var p = el.getAttribute('data-tip').split('|'); tip.textContent = '';
      var b = document.createElement('b'); b.textContent = p[0]; tip.appendChild(b);
      if (p[1]) { var s = document.createElement('span'); s.textContent = p[1]; tip.appendChild(s); }
      tip.hidden = false;
      /* beside the pointer, like every tip (the brand's Tip rule): right of it, or left near the
         picture's right edge; for keyboard focus, above the point */
      var r = box.getBoundingClientRect(), tw = tip.offsetWidth, th = tip.offsetHeight, lx, ly;
      if (focus) { lx = Math.max(0, Math.min(r.width - tw, x - r.left - tw / 2)); ly = y - r.top - th - 12; if (ly < 0) ly = y - r.top + 18; }
      else { lx = x - r.left + 16; if (lx + tw > r.width) lx = x - r.left - 16 - tw; lx = Math.max(0, lx); ly = y - r.top - th / 2; }
      tip.style.left = lx + 'px'; tip.style.top = ly + 'px';
    }
    Array.prototype.forEach.call(box.querySelectorAll('[data-tip]'), function (el) {
      el.addEventListener('pointermove', function (ev) { show(el, ev.clientX, ev.clientY); });
      el.addEventListener('pointerleave', function () { tip.hidden = true; });
      el.addEventListener('focus', function () { var q = el.getBoundingClientRect(); show(el, q.left + q.width / 2, q.top, true); });
      el.addEventListener('blur', function () { tip.hidden = true; });
    });
  }

  /* ══ THE FINNA VISUALS (28 Sep 2026, from the sandbox Christian approved: design repo
     mockups/finna-visuals-sandbox.html). One visual language across the desks, each picture
     answering one plain question:
       the map      what is it made of?     Statement, What you hold, Fees, Cover
       the range    where are we against our own rules?     Drift, What you hold, Your rules
       the line     when?     Timeline, the will, Cover's renewals, the policy's versions
       the goal map how far along are we?     Wealth planning
       tiles        what should we notice?     beside the words of every scene
     A table sits under every picture, in the same words; it sorts from its headers. Home and
     Learn come later. */

  /* ── Records · Statement: the map ───────────────────────────────────── */
  function sceneStatement() {
    var S = A.S, t = A.totals(); if (!S.assets.length || !t.owned) return '';
    var moved = 0, n = 0;
    S.assets.concat(S.liabilities).forEach(function (l) {
      var h = A.history(l.id); if (h.length < 2) return;
      var d = h[h.length - 1].amount - h[0].amount; if (!d) return;
      moved += A.liability(l.id) ? -d : d; n++;
    });
    var stale = A.staleLines().length, debts = S.liabilities.filter(function (l) { return l.kind !== 'commitment'; }).length, facts = [];
    if (n) facts.push({ k: 'Moved', v: (moved >= 0 ? '+' : '−') + A.money(Math.abs(moved)), n: Math.abs(moved), fmt: 'money', pre: moved >= 0 ? '+' : '−', ic: 'trend', l: scW(n) + ' line' + (n > 1 ? 's' : '') + ' since ' + A.date(S.household.opened).replace(', ' + DEMO_TODAY.slice(0, 4), '') });   /* shorter: one line in its tile (29 Sep 2026) */
    if (stale) facts.push({ k: 'To check', gl: 'check', v: String(stale), n: stale, fmt: 'int', ic: 'calendar', att: true, l: (stale > 1 ? 'figures' : 'figure') + ' past the date to check' });
    if (debts) facts.push({ k: 'Owed', gl: 'debts', v: String(debts), n: debts, fmt: 'int', ic: 'wallet', l: (debts > 1 ? 'debts, ' : 'debt, ') + A.short(t.owed) + (debts > 1 ? ' together' : '') });
    var words = scWords('Your statement · as of ' + A.date(DEMO_TODAY), scNum(t.net, 'short') + ' is yours.',
      'Everything you own comes to ' + scNum(t.owned, 'short') + '.' + (t.owed ? ' Take away the ' + scNum(t.owed, 'short') + ' you owe.' : ' You owe nothing.'));
    return scene('statement', 'records', words, 'Your statement in brief', '', { stack: true, tiles: facts.length ? scTiles(facts) : '', vis: treeMap('stm', { bare: true }) });
  }

  /* ── the range: a track, the household's range on it, the target, and today ───────── */
  function scDriftLead(d) {   /* the class the words lead with: the furthest outside, or the closest to an edge */
    var best = null, score = -1e9;
    d.forEach(function (x) {
      var a = x.actual * 100, s = x.out ? 100 + Math.abs(a - (x.out === 'above' ? x.max : x.min)) : -Math.min(a - x.min, x.max - a) / Math.max(1, x.max - x.min);
      if (s > score) { score = s; best = x; }
    });
    return best;
  }
  function sceneDrift() {
    var p = A.policy(); if (!p) return '';
    var d = A.drift(), out = d.filter(function (x) { return x.out; }), x = scDriftLead(d), answer, sub, facts = [];
    var verb = function (l) { return /^cash$/i.test(l) ? ' is ' : ' are '; };
    if (out.length) {
      var edge = x.out === 'above' ? x.max : x.min, gap = Math.abs(x.actual * 100 - edge), rest = d.length - out.length;
      answer = e(x.label) + verb(x.label) + scNum(gap, 'pts') + (x.out === 'above' ? ' over your ' + gl('ceiling', 'ceiling') + '.' : ' under your ' + gl('floor', 'floor') + '.');
      sub = 'Your range is ' + x.min + '–' + x.max + '%, and ' + e(x.label.toLowerCase()) + verb(x.label) + 'at ' + scNum(x.actual * 100, 'pct') + ' today. ' +
        (rest ? scCap(rest === d.length - 1 ? 'the other ' + scW(rest) : scW(rest) + ' more') + (rest > 1 ? ' sit' : ' sits') + ' inside ' + (rest > 1 ? 'their ranges.' : 'its range.') : '') + ' Nothing is traded: what to do is your household’s decision.';
      A.movers(x.k, p.effective).slice(0, 2).forEach(function (m) { facts.push({ k: 'What moved it', v: (m.delta > 0 ? '+' : '−') + A.money(Math.abs(m.delta)), n: Math.abs(m.delta), fmt: 'money', pre: m.delta > 0 ? '+' : '−', ic: 'trend', l: m.a.name + ' · ' + A.date(m.v.asOf) }); });
    } else {
      answer = 'Every class sits inside the range you set.';
      sub = 'Closest to an edge: ' + e(x.label.toLowerCase()) + ' at ' + scNum(x.actual * 100, 'pct') + ', in a range of ' + x.min + '–' + x.max + '%.';
    }
    return scene('drift', 'policy', scWords('Drift · against your ranges', answer, sub, facts), 'Drift in brief', '', { vis: '<div class="rg-card">' + bandsChart(d) + '</div>' });
  }
  /* a single rule, one row: the range is everything the rule allows */
  function ruleRow(title, sub, at, lo, hi, axis, ok, value) {
    return '<div class="rg-one"><div class="bands"><div class="band-row"><div class="band-name">' + title + '<small>' + e(sub) + '</small></div>' +
      '<div class="band-val' + (ok ? '' : ' out') + '"><b>' + e(value) + '</b><span class="status-label ' + (ok ? 'ok">Inside' : 'attention">Outside') + '</span></div>' +
      '<div class="band-track" aria-hidden="true"><div class="band-range" style="left:' + lo.toFixed(2) + '%;width:' + (hi - lo).toFixed(2) + '%"></div><div class="band-actual' + (ok ? '' : ' out') + '" style="left:' + Math.max(0, Math.min(100, at)).toFixed(2) + '%"></div>' +
      (ok ? '' : '<span class="band-halo" style="left:' + Math.max(0, Math.min(100, at)).toFixed(2) + '%"></span>') + '</div></div></div>' +
      '<div class="rg-axis">' + axis + '</div></div>';
  }
  function ruleRows() {
    var p = A.policy(); if (!p) return '';
    var cash = A.reachableCash(), big = A.largestSingle(), top = Math.max(cash, p.liquidityMin) * 1.4, html = '';
    if (p.liquidityMin) html += ruleRow(gl('reachable-cash', 'Cash that must stay reachable'), 'Your floor: ' + A.money(p.liquidityMin), cash / top * 100, p.liquidityMin / top * 100, 100,
      '<span>$0</span><span>' + A.short(p.liquidityMin) + ' floor</span><span>' + A.short(top) + '</span>', cash >= p.liquidityMin, A.money(cash));
    if (big && p.concentrationMax) {
      var sh = big.share * 100, scale = Math.max(20, p.concentrationMax * 2);
      html += ruleRow(gl('single-company', 'Largest single company'), big.a.name + ' · your limit ' + p.concentrationMax + '%', sh / scale * 100, 0, p.concentrationMax / scale * 100,
        '<span>0%</span><span>' + p.concentrationMax + '% limit</span><span>' + scale + '%</span>', sh <= p.concentrationMax, sh.toFixed(1) + '%');
    }
    return html ? '<div class="rg-singles">' + html + '</div>' : '';
  }

  /* ── Investment · What you hold: the range, and the map under it ─────── */
  var SC_RING_ORDER = ['equities', 'fixed', 'private', 'cash'];
  function sceneHoldings() {
    var inv = A.investable(), p = A.policy(); if (!inv.total) return '';
    var top = SC_RING_ORDER.slice().sort(function (a, b) { return inv.by[b] - inv.by[a]; })[0], share = inv.by[top] / inv.total;
    var accts = A.S.assets.filter(function (a) { return A.isInvestable(a) && A.amount(a.id) > 0; }).length;
    var d = p ? A.drift() : [], out = d.filter(function (x) { return x.out; });
    var facts = [{ k: 'Invested', gl: 'investable', v: A.short(inv.total), n: inv.total, fmt: 'short', ic: 'chart', l: 'across ' + scW(accts) + (accts === 1 ? ' account' : ' accounts') }];
    /* no fees tile (4 Oct 2026): Fees come later, with linked accounts */
    if (out.length) facts.push({ k: 'Outside', gl: 'range', v: String(out.length), n: out.length, fmt: 'int', att: true, ic: 'alert', l: (out.length > 1 ? 'classes' : 'class') + ' outside your range' });
    return scene('holdings', 'investment', scWords('What you hold · read from Records',
      scNum(share * 100, 'usd0') + ' of every $100 is in ' + e(A.MIXL[top].toLowerCase()) + '.',
      p ? 'Each class on its track: the range your policy sets, your target, and where you are today.' : 'Write a policy to see your own ranges beside what you hold.', facts),
      'What you hold in brief', '', { vis: p ? '<div class="rg-card">' + bandsChart(d) + '</div>' : '' });
  }

  /* ── Investment · Fees: the map, sized by what each holding costs a year ────────── */
  function sceneFees() {
    var S = A.S, inv = S.assets.filter(A.isInvestable), fy = feesYear(); if (!inv.length) return '';
    var withFee = inv.filter(function (a) { return (a.fee || 0) > 0; }), none = inv.filter(function (a) { return a.fee == null; });
    var worst = withFee.slice().sort(function (x, y) { return A.amount(y.id) * y.fee - A.amount(x.id) * x.fee; })[0];
    var facts = [];
    if (worst) facts.push({ k: 'The largest', gl: 'fee-year', v: A.money(A.amount(worst.id) * worst.fee / 100), n: A.amount(worst.id) * worst.fee / 100, fmt: 'money', ic: 'trend', l: worst.name + ', at ' + worst.fee.toFixed(2) + '% a year' });
    facts.push({ k: 'Invested', gl: 'investable', v: A.short(A.investable().total), n: A.investable().total, fmt: 'short', ic: 'chart', l: fy ? 'so the fees are ' + A.pct(fy / A.investable().total, 2) + ' of it' : 'no fee recorded yet' });
    if (none.length) facts.push({ k: 'Not entered', gl: 'fee', v: String(none.length), n: none.length, fmt: 'int', att: true, ic: 'alert', l: (none.length > 1 ? 'holdings' : 'holding') + ' with no fee entered' });
    var words = scWords('Fees · what leaks out', fy ? scNum(fy, 'money') + ' a year goes in fees.' : 'No fees recorded yet.',
      fy ? 'Each block is a holding, sized by what it costs a year. Computed from the fee you entered on each line; a fee you have not entered is not guessed.' : 'Enter the yearly fee on a holding and it appears here, sized by what it costs.');
    return scene('fees', 'investment', words, 'Fees in brief', '', { stack: true, tiles: scTiles(facts), vis: fy ? plainMap('fee', 'Fees a year, as blocks sized by what each holding costs') : '' });
  }

  /* ── Protection · Cover: the map, sized by what is insured; the renewals on the line ─ */
  function scRenewals() {
    return A.S.cover.filter(function (c) { return c.renews && A.days(DEMO_TODAY, c.renews) >= 0 && A.days(DEMO_TODAY, c.renews) <= 365; })
      .sort(function (a, b) { return a.renews < b.renews ? -1 : 1; });
  }
  function sceneCover() {
    var S = A.S; if (!S.cover.length) return '';
    var rn = scRenewals(), next = rn[0], soon = A.renewalsWithin(30);
    var sum = S.cover.reduce(function (s, c) { return s + (c.sum || 0); }, 0), prem = S.cover.reduce(function (s, c) { return s + (c.premium || 0); }, 0);
    var answer = next ? 'Next renewal in ' + scNum(A.days(DEMO_TODAY, next.renews), 'int') + ' days.' : 'Nothing renews in the next twelve months.';
    var sub = (next ? scCap(e(next.type.toLowerCase())) + ' cover on ' + e(next.covers) + ' renews on ' + A.date(next.renews) + '. ' : '') +
      'Each block is a policy, sized by what it insures; select one to find it in the table.';
    var facts = [{ k: 'Insured', gl: 'sum-insured', v: A.short(sum), n: sum, fmt: 'short', ic: 'shield', l: 'across ' + scW(S.cover.filter(function (c) { return c.sum > 0; }).length) + ' policies with a sum' },
      { k: 'Premiums', gl: 'premium', v: A.money(prem), n: prem, fmt: 'money', ic: 'wallet', l: 'a year, ' + scW(S.cover.length) + ' policies in all' }];
    if (soon.length) facts.push({ k: 'Renews soon', gl: 'renews', v: String(soon.length), n: soon.length, fmt: 'int', att: true, ic: 'calendar', l: 'within 30 days' });
    return scene('cover', 'protection', scWords('Cover · what is insured', answer, sub), 'Cover in brief', '', { stack: true, tiles: scTiles(facts), vis: sum ? plainMap('cov', 'What is insured, as blocks sized by the sum insured') : '' });
  }

  /* ── the line: every date in order, the year and the month on it, today with its halo ─
     items: { date, title, sub, href, desk, over, chip, att }. Past is dark green, today the halo,
     ahead the lighter green, past the date the household set in Bullion. */
  var LN_MONTH = new Intl.DateTimeFormat('en-US', { month: 'long' }), LN_MON = new Intl.DateTimeFormat('en-US', { month: 'short' });
  function lineHTML(items, opts) {
    opts = opts || {};
    var html = '', lastY = null, lastM = null, nowDone = !opts.today;
    function nowLi() { nowDone = true; return '<li class="ln-now" data-now><span class="ln-now-in">Today<small>' + A.date(DEMO_TODAY) + '</small></span></li>'; }
    items.forEach(function (t) {
      if (!nowDone && t.date >= DEMO_TODAY && !t.over) html += nowLi();
      var y = t.date.slice(0, 4), m = t.date.slice(0, 7), dt = new Date(t.date + 'T00:00:00'), past = t.date < DEMO_TODAY;
      if (y !== lastY) { html += '<li class="ln-year" data-y="' + y + '"><b>' + y + '</b></li>'; lastY = y; lastM = null; }
      if (m !== lastM) { html += '<li class="ln-month" data-m="' + m + '">' + LN_MONTH.format(dt) + '</li>'; lastM = m; }
      var tag = t.href ? 'a' : 'div', dl = A.days(DEMO_TODAY, t.date);
      var chip = t.over ? '<span class="status-label attention">Check it</span>' : t.chip ? '<span class="status-label ' + (t.att ? 'attention' : 'neutral') + '">' + e(t.chip) + '</span>' : '';
      html += '<li data-it' + (t.desk ? ' data-desk="' + e(t.desk) + '"' : '') + ' data-ym="' + m + '"><' + tag + ' class="ln-it ' + (t.over ? 'over' : past ? 'past' : 'ahead') + '"' + (t.href ? ' href="' + t.href + '"' : '') + '>' +
        '<span class="d">' + dt.getDate() + '<small>' + LN_MON.format(dt) + '</small></span>' +
        '<span class="t">' + e(t.title) + '<small>' + (t.sub ? e(t.sub) : t.over ? 'Past the date you set, ' + (-dl) + ' days ago' : !past && dl <= 60 && opts.soon !== false ? 'In ' + dl + ' days' : '') + '</small></span>' + chip + '</' + tag + '></li>';
    });
    if (!nowDone) html += nowLi();
    return '<ol class="ln" data-line' + (opts.label ? ' aria-label="' + e(opts.label) + '"' : '') + '><span class="ln-lived" data-lived aria-hidden="true"></span>' + html + '</ol>';
  }
  /* the Timeline page: every date in the record, on the line, filtered by desk */
  var TL_DESKS = ['Records', 'Governance', 'Protection', 'Succession'];
  function timelineBody() {
    var items = A.timeline().map(function (t) { return { date: t.date, title: t.title, href: t.href, desk: t.desk, over: t.overdue, chip: t.overdue ? '' : t.desk }; });
    items.sort(function (a, b) { return a.over && !b.over ? -1 : !a.over && b.over ? 1 : a.date < b.date ? -1 : a.date > b.date ? 1 : 0; });
    return '<section class="panel tl-card" data-tl-card><div class="tl-bar"><div class="seg-wrap"><div class="seg" role="group" aria-label="Show a desk" data-tl-seg><span class="seg-thumb" aria-hidden="true"></span>' +
      ['Every desk'].concat(TL_DESKS).map(function (d, i) { return '<button type="button" data-act="tl-desk" data-desk="' + (i ? d : '') + '" aria-pressed="' + (i === 0) + '">' + d + '</button>'; }).join('') +
      '</div></div><span class="tl-count" data-tl-count aria-live="polite">' + items.length + ' moments across every desk</span></div>' + lineHTML(items, { today: true, label: 'Everything that falls due' }) + '</section>';
  }

  /* ── Policy · Wealth planning: the goal map ──────────────────────────────
     Each goal is a circle on its date, its area set by what it needs, filled to what is linked to it
     today. Need, Want and Wish each have a row, a mark and a rim of their own. The pace line, off
     until it is switched on, is plain arithmetic: what is linked, plus what is set aside for the goal
     each month, to its date, before any growth. Above the rim: on pace. A Bullion chord inside: short.
     No forecast (P10): no growth, no return. */
  var GX = { sel: null, pace: false };
  var GX_LANES = [{ k: 'Need', c: 'need', mark: 'dot' }, { k: 'Want', c: 'want', mark: 'diamond' }, { k: 'Wish', c: 'wish', mark: 'ring' }];
  function gxGoals() { return A.S.goals.slice().sort(function (a, b) { return a.date < b.date ? -1 : 1; }); }
  function gxSel() {
    var gs = A.S.goals; if (!gs.length) return null;
    var g = gs.filter(function (x) { return x.id === GX.sel; })[0];
    return g || gs.slice().sort(function (a, b) { return b.amount - a.amount; })[0];
  }
  function gxPace(g) { var m = g.monthly || 0, left = Math.max(0, A.days(DEMO_TODAY, g.date) / 30.44), have = A.goalProgress(g).have; return { m: m, left: left, have: have, at: have + m * left }; }
  function gxLevel(r, f) {   /* the height, from the bottom, at which a circle's filled area is the given share of it */
    f = Math.max(0, Math.min(1, f)); var lo = 0, hi = 2 * r;
    for (var i = 0; i < 40; i++) { var h = (lo + hi) / 2, a = r * r * Math.acos((r - h) / r) - (r - h) * Math.sqrt(Math.max(0, 2 * r * h - h * h)); if (a / (Math.PI * r * r) < f) lo = h; else hi = h; }
    return (lo + hi) / 2;
  }
  function gxMark(kind, x, y, s) {
    if (kind === 'dot') return '<circle class="gx-mark" cx="' + x + '" cy="' + y + '" r="' + s / 2 + '"/>';
    if (kind === 'diamond') return '<path class="gx-mark" d="M' + x + ' ' + (y - s / 2) + ' L' + (x + s / 2) + ' ' + y + ' L' + x + ' ' + (y + s / 2) + ' L' + (x - s / 2) + ' ' + y + 'Z"/>';
    return '<circle class="gx-ring" cx="' + x + '" cy="' + y + '" r="' + (s / 2 - 1) + '"/>';
  }
  function gxCircle(g, r) {
    var have = A.goalProgress(g).have, f = Math.min(1, have / g.amount), lv = gxLevel(r - 2, f), P = gxPace(g), pf = P.at / g.amount, fillTop = (r - 2) - lv, id = 'gx-' + g.id + '-' + Math.round(r);
    var h = '<circle class="sel" r="' + (r + 5) + '"/><circle class="rim" r="' + r + '"/>' +
      '<clipPath id="' + id + '"><circle r="' + (r - 2) + '"/></clipPath><g clip-path="url(#' + id + ')"><rect class="fill" data-fill x="' + (-r) + '" y="' + f1(fillTop) + '" width="' + 2 * r + '" height="' + f1(2 * r) + '"/></g>';
    if (GX.pace && P.m) {
      if (pf >= 1) h += '<path class="pace" data-pace pathLength="1" d="M' + f1(-r * 0.55) + ' ' + f1(-r - 9) + ' H' + f1(r * 0.55) + '"/>';
      else { var pl = gxLevel(r - 2, pf), py = (r - 2) - pl, half = Math.sqrt(Math.max(0, (r - 2) * (r - 2) - py * py)); h += '<path class="pace short" data-pace pathLength="1" d="M' + f1(-half) + ' ' + f1(py) + ' H' + f1(half) + '"/>'; }
    }
    if (r >= 34) { var ty = Math.max(-r + 26, Math.min(r - 12, fillTop - 8)); h += '<text class="pct' + (fillTop < 4 ? '' : ' ink') + '" x="0" y="' + f1(fillTop < 4 ? 14 : ty) + '" text-anchor="middle">' + Math.round(f * 100) + '%</text>'; }
    return { inner: '<g class="gx-pop">' + h + '</g>', P: P, have: have };
  }
  function gxAria(g) { var have = A.goalProgress(g).have; return e(g.name + ', ' + g.priority + ', ' + A.money(have) + ' of ' + A.money(g.amount) + ' linked, by ' + A.date(g.date)); }
  function gxPaceWords(g, P) { return !P.m ? 'Nothing set aside for it' : P.at >= g.amount ? 'On pace' : 'Short by ' + A.short(g.amount - P.at); }
  function gxKey() {
    return '<div class="gx-key"><span><svg width="12" height="12" aria-hidden="true">' + gxMark('dot', 6, 6, 10) + '</svg>Need</span><span><svg width="12" height="12" aria-hidden="true">' + gxMark('diamond', 6, 6, 11) + '</svg>Want</span><span><svg width="12" height="12" aria-hidden="true">' + gxMark('ring', 6, 6, 12) + '</svg>Wish</span>' +
      '<span><svg width="14" height="14" aria-hidden="true"><circle cx="7" cy="7" r="6" class="gx-k-rim"/><path d="M1 9 H13 V13 H1Z" class="gx-k-fill"/></svg>Size: what it needs · fill: linked today</span>' +
      (GX.pace ? '<span><i class="gx-k-line"></i>On pace at what you set aside</span><span><i class="gx-k-line short"></i>Where you would be by the date: short</span>' : '') + '</div>';
  }
  function drawGoalsList(box) {
    var gs = gxGoals(), maxA = Math.max.apply(null, gs.map(function (g) { return g.amount; })), RM = 40, sel = gxSel();
    var h = GX_LANES.map(function (ln) {
      var mine = gs.filter(function (g) { return g.priority === ln.k; });
      return '<div class="gx-lrow"><span class="gx-lh"><svg width="12" height="12" aria-hidden="true">' + gxMark(ln.mark, 6, 6, ln.mark === 'ring' ? 12 : 10) + '</svg>' + ln.k + '</span>' +
        (mine.length ? mine.map(function (g) {
          var r = Math.max(14, Math.sqrt(g.amount / maxA) * RM), c = gxCircle(g, r), S2 = 2 * RM + 12;
          return '<button type="button" class="gx-goal gx-item ' + ln.c + '" data-act="gx-goal" data-id="' + g.id + '" aria-pressed="' + (sel && sel.id === g.id) + '" aria-label="' + gxAria(g) + '">' +
            '<svg width="' + S2 + '" height="' + S2 + '" viewBox="' + (-S2 / 2) + ' ' + (-S2 / 2) + ' ' + S2 + ' ' + S2 + '" aria-hidden="true">' + c.inner + '</svg>' +
            '<span class="gx-it" data-glbl="' + g.id + '"><b>' + e(g.name) + '</b><span>' + A.short(c.have) + ' of ' + A.short(g.amount) + ' · by ' + A.date(g.date) + '</span>' +
            (GX.pace ? '<span class="' + (c.P.m && c.P.at >= g.amount ? 'ok' : 'short') + '">' + gxPaceWords(g, c.P) + '</span>' : '') + '</span></button>';
        }).join('') : '<p class="gx-none">No ' + ln.k.toLowerCase() + ' yet.' + (ln.k === 'Wish' ? ' A wish is a goal you would like, not one you need.' : '') + '</p>') + '</div>';
    }).join('');
    box.innerHTML = '<div class="gx-list" role="group" aria-label="The goal map">' + h + '</div>' + gxKey();
  }
  function drawGoals(box) {
    if (!A.S.goals.length) { box.innerHTML = ''; return; }
    if (box.clientWidth < 520) { drawGoalsList(box); return; }
    var W = box.clientWidth - 2 * 16; if (W <= 0) return;
    var gs = gxGoals(), sel = gxSel();
    var maxA = Math.max.apply(null, gs.map(function (g) { return g.amount; })), RM = Math.max(40, Math.min(84, W * 0.09));
    gs.forEach(function (g) { g._r = Math.max(18, Math.sqrt(g.amount / maxA) * RM); });
    var L = 92, Rp = RM + 12, end = gs[gs.length - 1].date, span = Math.max(1, A.days(DEMO_TODAY, end)), plotW = W - L - Rp;
    function X(d) { return L + Math.max(0, A.days(DEMO_TODAY, d)) / span * plotW; }
    gs.forEach(function (g) {
      g._x = X(g.date); g._P = gxPace(g); g._have = A.goalProgress(g).have;
      g._lines = [[e(g.name), 'v'], [A.short(g._have) + ' of ' + A.short(g.amount) + ' · ' + g.date.slice(0, 4), '']];
      if (GX.pace) g._lines.push([gxPaceWords(g, g._P), g._P.m && g._P.at >= g.amount ? 'ok' : 'short']);
      g._lw = Math.max.apply(null, g._lines.map(function (l, i) { return scTextW(l[0].replace(/&amp;/g, '&'), i ? 400 : 600); })) + 6;
    });
    /* where each goal's words go: beside it, right then left, where they meet no other circle or words; else under it */
    var lanes = GX_LANES.map(function (ln) {
      var mine = gs.filter(function (g) { return g.priority === ln.k; }), taken = mine.map(function (g) { return [g._x - g._r - 6, g._x + g._r + 6, g]; });
      mine.forEach(function (g) {
        var R = [g._x + g._r + 14, g._x + g._r + 14 + g._lw], Lf = [g._x - g._r - 14 - g._lw, g._x - g._r - 14];
        function free(iv) { return iv[0] > L + 6 && iv[1] < W - 6 && taken.every(function (t) { return t[2] === g || iv[1] < t[0] || iv[0] > t[1]; }); }
        g._place = free(R) ? 'right' : free(Lf) ? 'left' : 'under';
        if (g._place !== 'under') taken.push(g._place === 'right' ? R.concat([null]) : Lf.concat([null]));
      });
      var rMax = mine.reduce(function (m, g) { return Math.max(m, g._r); }, 0), cyOff = Math.max(30, rMax + 16), need = cyOff + Math.max(rMax, 26) + 16;
      mine.forEach(function (g) { if (g._place === 'under') need = Math.max(need, cyOff + g._r + 20 + (g._lines.length - 1) * 17 + 12); });
      return { k: ln.k, c: ln.c, mark: ln.mark, h: Math.max(96, need), cyOff: cyOff, goals: mine };
    });
    var y = 8; lanes.forEach(function (ln) { ln.y = y; ln.cy = y + ln.cyOff; y += ln.h + 8; });
    var H = y + 26, h = '';
    lanes.forEach(function (ln) {
      h += '<rect class="gx-lane" x="0" y="' + ln.y + '" width="' + W + '" height="' + ln.h + '" rx="10"/>' + gxMark(ln.mark, 14, ln.y + 20, ln.mark === 'ring' ? 12 : 10) +
        '<text class="lane" x="28" y="' + (ln.y + 25) + '">' + ln.k + '</text>';
      if (!ln.goals.length) h += '<text x="' + (L + 14) + '" y="' + (ln.y + ln.h / 2 + 4) + '">No ' + ln.k.toLowerCase() + ' yet.' + (ln.k === 'Wish' ? ' A wish is a goal you would like, not one you need.' : '') + '</text>';
    });
    var y0 = +DEMO_TODAY.slice(0, 4), y1 = +end.slice(0, 4), step = Math.max(1, Math.ceil((y1 - y0) / (W < 760 ? 5 : 8)));
    for (var yr = y0 + 1; yr <= y1 + 1; yr += step) {
      var dx = X(yr + '-01-01'); if (dx > W - 10) break; if (dx < L + 44) continue;
      h += '<path class="gx-grid" d="M' + f1(dx) + ' 4 V' + (H - 22) + '"/><text x="' + f1(dx) + '" y="' + (H - 6) + '" text-anchor="middle">' + yr + '</text>';
    }
    h += '<path class="gx-today" d="M' + L + ' 4 V' + (H - 22) + '"/><text class="v" x="' + L + '" y="' + (H - 6) + '" text-anchor="middle">Today</text>';
    lanes.forEach(function (ln) {
      ln.goals.forEach(function (g) {
        var cx = g._x, cy = ln.cy, r = g._r, c = gxCircle(g, r), n = g._lines.length, tx, anchor, tyL;
        if (g._place === 'right') { tx = cx + r + 14; anchor = 'start'; tyL = cy - (n - 1) * 17 / 2 + 4; }
        else if (g._place === 'left') { tx = cx - r - 14; anchor = 'end'; tyL = cy - (n - 1) * 17 / 2 + 4; }
        else { tx = Math.max(L + g._lw / 2 + 4, Math.min(W - g._lw / 2 - 4, cx)); anchor = 'middle'; tyL = cy + r + 20; }
        h += '<g class="gx-goal ' + ln.c + '" data-act="gx-goal" data-id="' + g.id + '" tabindex="0" role="button" aria-pressed="' + (sel && sel.id === g.id) + '" aria-label="' + gxAria(g) + '" transform="translate(' + f1(cx) + ' ' + f1(cy) + ')">' + c.inner + '</g>' +
          g._lines.map(function (l, i) { return '<text class="' + l[1] + '" data-glbl="' + g.id + '" x="' + f1(tx) + '" y="' + f1(tyL + i * 17) + '" text-anchor="' + anchor + '">' + l[0] + '</text>'; }).join('');
      });
    });
    box.innerHTML = '<svg class="gx-svg" width="' + W + '" height="' + H + '" viewBox="0 0 ' + W + ' ' + H + '" role="group" aria-label="The goal map">' + h + '</svg>' + gxKey();
  }
  function goalDetail() {
    var g = gxSel(); if (!g) return '';
    var have = A.goalProgress(g).have, f = Math.min(1, have / g.amount), P = gxPace(g), gap = Math.max(0, g.amount - have), need = P.left ? gap / P.left : gap, pf = Math.min(1.2, P.at / g.amount);
    var draws = (g.linked || []).map(function (id) { var a = A.asset(id); return a ? '<div class="gx-draw"><dt><button class="link-row" type="button" data-act="line" data-id="' + a.id + '">' + e(a.name) + '</button>' + (a.holder ? '<span class="gx-who"><span class="gx-dot"> · </span>' + e(a.holder) + '</span>' : '') + '</dt><dd class="num">' + A.money(A.amount(id)) + '</dd></div>' : ''; }).join('');
    return '<div><span class="status-label ' + (g.priority === 'Need' ? 'ok' : 'neutral') + '">' + e(g.priority) + '</span><h3 class="gx-h">' + e(g.name) + '</h3>' +
      '<p class="gx-dl">' + A.money(g.amount) + ' by ' + A.date(g.date) + ' · ' + e(g.source) + '</p>' +
      '<div class="gx-bar" aria-hidden="true"><i style="width:' + (f * 100).toFixed(1) + '%"></i>' + (GX.pace && P.m ? '<u class="' + (P.at >= g.amount ? '' : 'short') + '" style="left:calc(' + (Math.min(1, pf) * 100).toFixed(1) + '% - 1.5px)"></u>' : '') + '</div>' +
      '<div class="gx-barl"><span>' + A.money(have) + ' linked · ' + Math.round(f * 100) + '%</span><span>' + A.money(g.amount) + '</span></div>' +
      (GX.pace ? '<p class="gx-dl gx-pace">' + (P.m ? 'At ' + A.money(P.m) + ' a month, before growth: ' + A.money(Math.round(P.at)) + ' by the date, ' + (P.at >= g.amount ? '<b>on pace</b>, ' + A.money(Math.round(P.at - g.amount)) + ' to spare.' : '<b>short by ' + A.money(Math.round(g.amount - P.at)) + '</b>.') : 'Nothing is set aside for it each month.') +
        (gap ? ' Closing the gap before growth takes ' + A.money(Math.round(need)) + ' a month.' : '') + '</p>' : '') + '</div>' +
      '<dl class="pairs"><div><dt><b>Draws on</b></dt><dd><button class="link" type="button" data-act="edit-goal" data-id="' + g.id + '">' + (draws ? 'Change' : 'Choose accounts') + '</button></dd></div>' + (draws || '<div><dt>Nothing linked yet</dt><dd></dd></div>') +
      '<div class="sg-total"><dt>Linked today</dt><dd class="num">' + A.money(have) + '</dd></div><div><dt>The gap</dt><dd class="num">' + A.money(gap) + '<span class="pair-note">' + A.money(g.amount) + ' less ' + A.money(have) + ' linked today</span></dd></div></dl>';
  }
  function scenePlanning() {
    var gs = A.S.goals; if (!gs.length) return '';
    var have = gs.reduce(function (s, g) { return s + A.goalProgress(g).have; }, 0), need = gs.reduce(function (s, g) { return s + g.amount; }, 0);
    var set = gxGoals().filter(function (g) { return g.monthly; });
    var words = scWords('The goal map · as of ' + A.date(DEMO_TODAY), scNum(Math.round(have / need * 100), 'int') + '% of what your goals need is linked to them today.',
      scCap(scW(gs.length)) + ' goal' + (gs.length > 1 ? 's' : '') + ', ' + A.short(need) + ' in all; ' + A.short(have) + ' of it is already set against them. Each circle is a goal on its date, filled by what is linked to it.');
    var ctl = '<div class="gx-ctl"><div class="gx-ctl-row"><label class="switch"><input type="checkbox" role="switch" data-act="gx-pace"' + (GX.pace ? ' checked' : '') + '>Show the pace at what you set aside</label>' + glI('pace') + '</div>' +
      '<p class="gx-ctl-note">Plain arithmetic, not a forecast: before any growth or return. ' + (set.length ? 'Set aside each month: ' + set.map(function (g) { return A.money(g.monthly) + ' to ' + e(g.name.charAt(0).toLowerCase() + g.name.slice(1)); }).join(', ') + '.' : 'Set an amount a month on a goal to see its pace.') + '</p></div>';
    return scene('goals', 'policy', words, 'Your goals in brief', '', { stack: true, tiles: ctl,
      vis: '<div class="gx-card"><div class="gx-plot" data-scene="goals"></div><div class="gx-detail" data-gx-detail aria-live="polite">' + goalDetail() + '</div></div>', visRaw: true });
  }
  function playGoals(box) {
    Array.prototype.forEach.call(box.querySelectorAll('.gx-goal'), function (g, i) {
      var t = 300 + i * 220, pop = g.querySelector('.gx-pop'), fill = g.querySelector('[data-fill]'), pace = g.querySelector('[data-pace]'), rim = g.querySelector('.rim'), r = rim ? +rim.getAttribute('r') : 20;
      if (pop) { pop.style.transformBox = 'fill-box'; pop.style.transformOrigin = 'center'; scAnim(pop, [{ transform: 'scale(0)' }, { transform: 'scale(1.06)', offset: 0.7 }, { transform: 'none' }], { d: 620, t: t }); }
      if (fill) scAnim(fill, [{ transform: 'translateY(' + (2 * r) + 'px)' }, { transform: 'none' }], { d: 1100, t: t + 380, e: 'cubic-bezier(.3,.8,.3,1)' });
      if (pace) scAnim(pace, [{ strokeDasharray: '1 1', strokeDashoffset: 1 }, { strokeDasharray: '1 1', strokeDashoffset: 0 }], { d: 520, t: t + 1300 });
      Array.prototype.forEach.call(box.querySelectorAll('[data-glbl="' + g.getAttribute('data-id') + '"]'), function (tx) { scAnim(tx, [{ opacity: 0 }, { opacity: 1 }], { d: 400, t: t + 300 }); });
    });
  }

  /* ── Succession · The will: a line from the day it was signed ─────────── */
  function scWillEvents(from, to) {
    var S = A.S, ev = [];
    S.people.forEach(function (p) { if (!p.born) return; var d = (p.born + 18) + '-07-01'; if (d > from && d <= to) ev.push({ d: d, y: String(p.born + 18), t: p.name.split(' ')[0] + ' turned 18' }); });
    S.cover.forEach(function (c) { if (c.beneficiaries && c.nominated && c.nominated > from && c.nominated <= to) ev.push({ d: c.nominated, y: c.nominated.slice(0, 4), t: c.beneficiaries.split(' ')[0] + ' named on ' + c.covers + '’s ' + c.type.toLowerCase() + ' cover' }); });
    S.documents.forEach(function (d) {
      if (d.cat !== 'Agreements' || !(d.date > from && d.date <= to)) return;
      var l = (d.lines || []).map(A.line).filter(Boolean)[0];
      ev.push({ d: d.date, y: d.date.slice(0, 4), t: (l ? l.name : d.name) + ', agreement signed' });
    });
    return ev.sort(function (a, b) { return a.d < b.d ? -1 : 1; });
  }
  function sceneWill() {
    var w = A.S.will; if (!w || w.exists !== 'Yes' || !w.signed) return '';
    var plural = /wills/i.test(w.kind || ''), last = w.reviewed || w.signed, yrs = Math.floor(A.days(last, DEMO_TODAY) / 365.25), unread = last === w.signed;
    var answer = 'Your ' + (plural ? 'wills are ' : 'will is ') + scNum(Math.floor(A.days(w.signed, DEMO_TODAY) / 365.25), 'int') + ' years old.';
    var sub = 'Signed on ' + A.date(w.signed) + (unread ? ' and not read since.' : ', last read on ' + A.date(last) + '.') +
      (w.reviewBy ? ' You set ' + A.date(w.reviewBy) + ' to read ' + (plural ? 'them' : 'it') + ' again' + (A.days(DEMO_TODAY, w.reviewBy) >= 0 ? ': in ' + A.days(DEMO_TODAY, w.reviewBy) + ' days.' : '.') : '');
    var law = A.adviser(w.lawyer), facts = [{ k: 'Where the original is', v: w.original, txt: true, gl: 'original' }, { k: 'Executors', v: w.executors, txt: true, gl: 'executor' }];
    if (law) facts.push({ k: 'Attorney', v: law.name + ', ' + law.firm, txt: true });
    return scene('will', 'succession', scWords('The will · ' + (w.kind ? w.kind.split(',')[0] : 'recorded'), answer, sub, facts), 'The will in brief');
  }
  function drawWill(box) {
    var w = A.S.will, W = box.clientWidth; if (!W || !w || w.exists !== 'Yes') return;
    var end = w.reviewBy && w.reviewBy > DEMO_TODAY ? w.reviewBy : DEMO_TODAY, ev = scWillEvents(w.signed, DEMO_TODAY);
    var yrs = Math.floor(A.days(w.signed, DEMO_TODAY) / 365.25);
    if (W < 560) {                          /* a phone: the same line, standing up */
      var items = [{ y: A.date(w.signed), t: 'Signed', c: 'start' }].concat(ev.map(function (x) { return { y: x.y, t: x.t }; }))
        .concat([{ y: 'Today', t: yrs + ' years on', c: 'now' }]).concat(end !== DEMO_TODAY ? [{ y: A.date(end), t: 'Read again, by your date', c: 'end' }] : []);
      box.innerHTML = '<ol class="sc-tl" data-tl>' + items.map(function (x) { return '<li' + (x.c ? ' class="' + x.c + '"' : '') + '><b>' + e(x.y) + '</b><span>' + e(x.t) + '</span></li>'; }).join('') + '</ol>';
      return;
    }
    var P = 12, span = A.days(w.signed, end), X = function (d) { return P + A.days(w.signed, d) / span * (W - 2 * P); };
    var H = 250, yL = 125, h = '';
    h += '<path class="sc-line" d="M' + P + ' ' + yL + ' H' + f1(W - P) + '"/>';
    h += '<path class="sc-lived" data-lived pathLength="1" d="M' + P + ' ' + yL + ' H' + f1(X(DEMO_TODAY)) + '"/>';
    if (end !== DEMO_TODAY) h += '<path class="sc-ahead" data-ahead d="M' + f1(X(DEMO_TODAY)) + ' ' + yL + ' H' + f1(X(end)) + '"/>';
    /* labels alternate above and below; one that would touch its neighbour moves further out */
    var lanes = { up: [], dn: [] }, marks = [{ d: w.signed, y: A.date(w.signed), t: 'Signed', k: 'start' }].concat(ev).concat([{ d: DEMO_TODAY, y: 'Today', t: yrs + ' years on', k: 'now' }]);
    if (end !== DEMO_TODAY) marks.push({ d: end, y: A.date(end), t: 'Read again, by your date', k: 'end' });
    marks.forEach(function (m, i) {
      var x = X(m.d), side = m.k === 'end' ? 'up' : m.k === 'now' ? 'dn' : i % 2 ? 'dn' : 'up';
      var tw = Math.max(scTextW(m.y, 600), scTextW(m.t)) + 8, anchor = x < W * 0.18 ? 'start' : x > W * 0.82 ? 'end' : 'middle';
      var lx = anchor === 'start' ? x - 4 : anchor === 'end' ? x - tw + 4 : x - tw / 2, lane = 0;
      while ((lanes[side][lane] || -1e9) > lx - 10) lane++;
      lanes[side][lane] = lx + tw;
      var stem = 26 + lane * 42, ty = side === 'up' ? yL - stem : yL + stem, tx = anchor === 'start' ? x - 4 : anchor === 'end' ? x + 4 : x;
      h += '<g class="sc-ev ' + (m.k || '') + '" data-ev data-f="' + (A.days(w.signed, m.d) / span).toFixed(3) + '">' +
        '<path class="sc-stem" d="M' + f1(x) + ' ' + yL + ' V' + f1(side === 'up' ? ty + 8 : ty - 22) + '"/>' +
        (m.k === 'now' ? '<circle class="sc-halo" cx="' + f1(x) + '" cy="' + yL + '" r="7"/>' : '') +
        '<circle cx="' + f1(x) + '" cy="' + yL + '" r="' + (m.k ? 7 : 5) + '"/>' +
        '<text class="v" x="' + f1(tx) + '" y="' + f1(side === 'up' ? ty - 12 : ty) + '" text-anchor="' + anchor + '">' + e(m.y) + '</text>' +
        '<text x="' + f1(tx) + '" y="' + f1(side === 'up' ? ty + 4 : ty + 16) + '" text-anchor="' + anchor + '">' + e(m.t) + '</text></g>';
    });
    var lanesUp = lanes.up.length, lanesDn = lanes.dn.length;
    H = yL + 26 + (lanesDn - 1) * 42 + 26; var top = yL - 26 - (lanesUp - 1) * 42 - 30;
    box.innerHTML = scSvg(W, H - top, '<g transform="translate(0 ' + f1(-top) + ')">' + h + '</g>', 'From ' + A.date(w.signed) + ' to today: ' + ev.map(function (x) { return x.y + ', ' + x.t; }).join('; '));
    scTips(box);
  }
  function playWill(box) {
    var T = 200, D = 1800;
    var tl = box.querySelector('[data-tl]');
    if (tl) {
      scAnim(tl, [{ '--tl': 0 }, { '--tl': 1 }], { d: D, t: T });
      Array.prototype.forEach.call(tl.children, function (li, i) { scAnim(li, [{ opacity: 0, transform: 'translateX(-8px)' }, { opacity: 1, transform: 'none' }], { d: 420, t: T + i * (D / tl.children.length) }); });
      return;
    }
    scAnim(box.querySelector('[data-lived]'), [{ strokeDasharray: '1 1', strokeDashoffset: 1 }, { strokeDasharray: '1 1', strokeDashoffset: 0 }], { d: D, t: T, e: 'cubic-bezier(.4,.1,.3,1)' });
    Array.prototype.forEach.call(box.querySelectorAll('[data-ev]'), function (g) {
      var f = +g.getAttribute('data-f'), end = g.classList.contains('end');
      scAnim(g, [{ opacity: 0, transform: 'translateY(4px)' }, { opacity: 1, transform: 'none' }], { d: 420, t: end ? T + D + 250 : T + D * Math.min(1, f / Math.max(0.001, +((box.querySelector('.sc-ev.now') || g).getAttribute('data-f')))) - 60 });
    });
    scAnim(box.querySelector('[data-ahead]'), [{ opacity: 0 }, { opacity: 1 }], { d: 500, t: T + D });
  }

  /* ── the registry, and the motion they share ─────────────────────────── */
  var SC_DRAW = { will: drawWill, goals: drawGoals };
  var SC_PLAY = { will: playWill, goals: playGoals };
  function scAnim(el, kf, o) {
    if (!el || !el.animate) return null;
    return el.animate(kf, { duration: o.d || 600, delay: o.t || 0, easing: o.e || SC_EASE, fill: 'backwards' });
  }
  /* A NUMBER THAT COUNTS TO ITS VALUE, AND NOTHING AROUND IT MOVES (Rose, 29 Sep 2026: "the rest of
     the sentence jumps back and forth"). Two causes, both gone:
       · it counted through different shapes — $0, $450K, $1.2M, $3.19M — so the figure changed
         length as it went. It now counts inside the FINAL figure's own shape: the same prefix,
         unit, decimals and thousands commas the whole way ($0.00M … $3.19M, +$0 … +$63,700);
       · the words after it were pushed as its width changed.
     THE LINE BREAKS ONCE, WHERE IT ENDS (Rose, 29 Sep 2026: "when it's done the line suddenly
     breaks"). Holding the width with an inline-block changed where a balanced headline wrapped
     ("Listed shares are 0.0 points / over your ceiling", then "Listed shares are / 1.2 points
     over…" when it let go). Now the final text stays in the sentence the whole time, its digits
     invisible, and the counting digits are drawn on top of them (.sc-slot, app.css) — the line is
     laid out once, exactly as it ends, and nothing moves.
     It eases out over about a second and always ends on the exact text the page shows. No
     rolling digits, no scramble. */
  function scCount(el, from, to, fmt, d, t) {
    if (!el || el.hasAttribute('data-counting')) return;   /* already counting: let that one finish */
    var fin = el.textContent, m = fin.match(/^(\D*?)(\d[\d,]*(?:\.\d+)?)(.*)$/);
    if (!m) return;
    var head = m[1], tail = m[3], dec = (m[2].split('.')[1] || '').length,
        end = parseFloat(m[2].replace(/,/g, '')), begin = to ? end * (from / to) : 0,
        nf = new Intl.NumberFormat('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec, useGrouping: m[2].indexOf(',') > -1 }),
        roll = null, start = null;
    /* in a page: the final digits hold their place, the count is drawn over them; in a chart's
       SVG text there is no line to break, so the text itself counts */
    if (el instanceof HTMLElement) {
      var slot = document.createElement('span'), ghost = document.createElement('span');
      roll = document.createElement('span');
      slot.className = 'sc-slot'; ghost.className = 'sc-ghost'; roll.className = 'sc-roll';
      ghost.textContent = m[2]; roll.setAttribute('aria-hidden', 'true');
      slot.append(ghost, roll); el.textContent = ''; el.append(head, slot, tail);
    }
    el.setAttribute('data-counting', '');
    function show(v) { if (roll) roll.textContent = nf.format(v); else el.textContent = head + nf.format(v) + tail; }
    function done() { el.textContent = fin; el.removeAttribute('data-counting'); }
    function step(now) {
      if (start == null) start = now + (t || 0);
      var p = (now - start) / d; if (p < 0) { requestAnimationFrame(step); return; }
      if (p >= 1) { done(); return; }
      show(begin + (end - begin) * (1 - Math.pow(1 - p, 3)));
      requestAnimationFrame(step);
    }
    show(begin); requestAnimationFrame(step);
  }
  function drawScene(box) { var k = box.getAttribute('data-scene'); if (SC_DRAW[k]) SC_DRAW[k](box); }
  function scMotionOk() { return !(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) && !!document.body.animate; }
  /* on arriving at a page: the words rise, the numbers in them count, the picture plays; a band
     chart lower down plays when it comes into view */
  function playScenes(root) {
    if (!scMotionOk()) return;
    function each(sel, el, fn) { Array.prototype.forEach.call(el.querySelectorAll(sel), fn); }
    function io(list, fn, thr) {
      if (!list.length) return;
      if (!window.IntersectionObserver) { Array.prototype.forEach.call(list, fn); return; }
      var o = new IntersectionObserver(function (es) { es.forEach(function (en) { if (!en.isIntersecting) return; o.unobserve(en.target); fn(en.target); }); }, { threshold: thr || 0.25 });
      Array.prototype.forEach.call(list, function (x) { o.observe(x); });
    }
    each('.scene', root, function (sc) {
      scAnim(sc, [{ opacity: 0 }, { opacity: 1 }], { d: 380 });
      each('.sc-words > *', sc, function (el, i) { scAnim(el, [{ opacity: 0, transform: 'translateY(10px)' }, { opacity: 1, transform: 'none' }], { d: 520, t: 80 + i * 90 }); });
      each('.sc-words .sc-n', sc, function (el) { scCount(el, el.hasAttribute('data-from') ? +el.getAttribute('data-from') : 0, +el.getAttribute('data-count'), el.getAttribute('data-fmt'), 1300, 220); });
      /* the tiles rise in turn, and their numbers count once */
      each('.sc-facts.hl li, .br-box', sc, function (li, i) { scAnim(li, [{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'none' }], { d: 480, t: 200 + i * 110 }); });
      each('.hl-v[data-count], .br-v[data-count]', sc, function (el) { scCount(el, 0, +el.getAttribute('data-count'), el.getAttribute('data-fmt'), 1100, 260, el.getAttribute('data-pre') || ''); });
      each('.sc-top > .gx-ctl', sc, function (el) { scAnim(el, [{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'none' }], { d: 480, t: 300 }); });
      /* a map's blocks grow in, largest first */
      each('.tv .tv-t', sc, function (el, i) { scAnim(el, [{ opacity: 0, transform: 'scale(.94)' }, { opacity: 1, transform: 'none' }], { d: 560, t: 260 + i * 70 }); });
      var box = sc.querySelector('[data-scene]'), k = box && box.getAttribute('data-scene');
      if (k && SC_PLAY[k] && box.firstChild) SC_PLAY[k](box);
    });
    /* the line draws from its start to today; the moments arrive as they come into view */
    each('[data-line]', root, function (ol) {
      scAnim(ol.querySelector('[data-lived]'), [{ transform: 'scaleY(0)' }, { transform: 'none' }], { d: 700, t: 100 });
      scAnim(ol.querySelector('[data-now]'), [{ opacity: 0 }, { opacity: 1 }], { d: 400, t: 650 });
      var batch = 0, t0 = Date.now();
      io(Array.prototype.filter.call(ol.querySelectorAll('li:not(.ln-now)'), function (li) { return li.getBoundingClientRect().bottom > 0; }), function (li) {
        if (Date.now() - t0 > 120) { batch = 0; t0 = Date.now(); }
        scAnim(li, [{ opacity: 0, transform: 'translateX(-10px)' }, { opacity: 1, transform: 'none' }], { d: 460, t: 120 + (batch++) * 70 });
      }, 0.2);
    });
    /* a range: the track opens, the marker slides from the target to today; outside keeps its pulse */
    io(root.querySelectorAll('.bands'), function (b) {
      each('.band-row', b, function (row, i) {
        var tg = row.querySelector('.band-target'), ac = row.querySelector('.band-actual'), rg = row.querySelector('.band-range'), ha = row.querySelector('.band-halo'), t = 120 + i * 110;
        scAnim(rg, [{ transform: 'scaleX(0.2)', opacity: 0 }, { transform: 'none', opacity: 1 }], { d: 520, t: t });
        var from = tg ? tg.style.left : rg ? rg.style.left : '0%';
        if (ac) scAnim(ac, [{ left: from, opacity: 0 }, { left: from, opacity: 1, offset: 0.15 }, { left: ac.style.left, opacity: 1 }], { d: 1100, t: t + 200, e: 'cubic-bezier(.3,.7,.2,1.08)' });
        if (ha) scAnim(ha, [{ opacity: 0 }, { opacity: 1 }], { d: 300, t: t + 1300 });
      });
    }, 0.35);
    /* a table's share bars grow once it is in view */
    io(root.querySelectorAll('.data-table'), function (dt) {
      each('.tb-bar i', dt, function (i, n) { scAnim(i, [{ transform: 'scaleX(0)' }, { transform: 'none' }], { d: 700, t: 120 + Math.min(n, 10) * 45 }); });
    }, 0.1);
  }

  /* ── TABLES (28 Sep 2026) ────────────────────────────────────────────────
     A header whose column's order means something sorts: th[data-sort] (num, date, text or status)
     with its first direction in data-first, the one that answers the page — the largest amount, the
     oldest date, what needs you. data-on marks the order the rows are drawn in. The value to sort by
     sits on the cell (data-v); a cell without one sorts by its text, an empty one goes last. The
     sorting itself, the phone's sort list and the sums in the foot are wired by render(). */
  function sth(label, type, first, cls, on, words, g) {
    return '<th scope="col"' + (cls ? ' class="' + cls + '"' : '') + ' data-sort="' + type + '" data-first="' + first + '"' + (on ? ' data-on="' + on + '"' : '') + (words ? ' data-words="' + words + '"' : '') + (g ? ' data-gl="' + g + '"' : '') + '>' + label + '</th>';
  }
  /* a plain head with its "i" tag */
  function gth(label, g, cls) { return '<th scope="col"' + (cls ? ' class="' + cls + '"' : '') + ' data-name="' + e(label) + '" data-gl="' + g + '">' + gl(g, e(label)) + '</th>'; }
  /* the share of a whole: a track that is everything, filled by the row's part of it */
  function shareCell(v, total, cls) {
    var sh = total ? v / total : 0;
    return '<td class="tb-share' + (cls ? ' ' + cls : '') + '" data-v="' + sh.toFixed(6) + '"><span class="tb-bar" aria-hidden="true"><i style="--w:' + Math.max(0.6, Math.min(100, sh * 100)).toFixed(2) + '%"></i></span><span class="tb-pct">' + A.pct(sh, 1) + '</span></td>';
  }
  /* the map in one line, over a table whose rows add up to a whole: select a part to show only it */
  function stripWrap(field, eyebrow, label, tone) {
    return '<div class="tb-strip-wrap" data-strip="' + field + '"' + (tone ? ' data-tone="' + tone + '"' : '') + '><div class="tb-strip-h"><span class="eyebrow">' + e(eyebrow) + '</span><span class="tb-strip-hint">Select a part to show only it</span></div>' +
      '<div class="tb-strip" role="group" aria-label="' + e(label) + '"></div><p class="tv-more" hidden></p></div>';
  }

  /* COMING LATER (Christian, 4 Oct 2026: "it says coming in a tag at the Fees and Add Advisor sub menu and not show
     the content (it will come later)"). The page keeps its place in the menu with a Coming tag (drawNav) and says
     only what it will do. Fees come with linked accounts. The data behind them stays in the record. */
  var COMING = {
    'records/advisers': ['Advisers', 'One register of the people who work for you: your attorney, your CPA, your adviser and your agents, what each looks after, and how to reach them.'],
    'investment/fees': ['Fees', 'What your funds and accounts cost you each year, holding by holding, read from your linked accounts.']
  };
  function comingPage(key) {
    var c = COMING[key];
    return '<main class="screen">' + deskPage(key.split('/')[0], c[0], '<span class="status-label neutral">Coming</span>') +
      '<section class="panel coming-page"><span class="eyebrow">Coming later</span><p class="coming-t">' + e(c[1]) + '</p>' +
      '<p class="help">It is not in this first version. Nothing here needs you yet.</p></section></main>';
  }

  /* ── RECORDS ─────────────────────────────────────────────────────────── */
  var ADD_LINES = '<button class="key key-secondary" type="button" data-act="add-debt">Add a debt</button><button class="key" type="button" data-act="add-asset">Add an asset</button>';
  function records(r) {
    var sub = r.sub, html = '<main class="screen">';
    if (!sub) return recSuggested();
    if (COMING['records/' + sub]) return comingPage('records/' + sub);
    var T = { statement: 'Statement', own: 'What you own', owe: 'What you owe', timeline: 'Timeline', advisers: 'Advisers', family: 'Family' };
    var actions = ADD_LINES;
    if (sub === 'advisers') actions = '<button class="key" type="button" data-act="add-adviser">Add an adviser</button>';
    if (sub === 'family') actions = '<button class="key" type="button" data-act="add-person">Add a person</button>';
    if (sub === 'timeline') actions = '';
    var lead = { timeline: 'Everything that falls due, from every date in the record. Add a date anywhere and it appears here.',
      family: 'Everyone in the family, entered once and read by every desk.' }[sub];
    html += deskPage('records', T[sub], actions, lead);
    if (sub === 'own') html += recOwn();
    else if (sub === 'owe') html += recOwe();
    else if (sub === 'timeline') html += timelineBody();
    else if (sub === 'advisers') html += recAdvisers();
    else if (sub === 'family') html += familyPage('records', r);
    else html += sceneStatement() + recStatement();
    return html + '</main>';
  }
  /* RECORDS · SUGGESTED (build spec Figure 2) — a fixed first arrangement. Freya's ranking,
     "Shown because", Edit view and the day-one states come with the Suggested views pass. */
  function recStatement() {
    var S = A.S, t = A.totals();
    var own = S.assets.slice().sort(function (a, b) { return A.amount(b.id) - A.amount(a.id); });
    var owe = S.liabilities.filter(function (l) { return l.kind !== 'commitment'; });
    var com = S.liabilities.filter(function (l) { return l.kind === 'commitment'; });
    function row(l, neg) {
      var sub = A.asset(l.id) ? (l.holder + ' · ' + A.CLS[l.cls] + (l.institution ? ' · ' + l.institution : '')) : (l.lender + ' · ' + l.type + (l.rate ? ' · ' + l.rate + '%' : ''));
      /* THE MARGIN (build spec Figure 12): the line's source and date, its document in the Family
         Vault, and what to check. The row opens the line; the margin's links go where they say. */
      var dref = A.cur(l.id) && A.cur(l.id).ref, dl = (dref && A.doc(dref)) || (l.docs || []).map(A.doc).filter(Boolean)[0];
      return '<div class="st-row"><button class="st-main" type="button" data-act="line" data-id="' + l.id + '"><span class="st-name"><b>' + e(l.name) + '</b><small>' + e(sub) + '</small></span>' +
        '<span class="st-amt">' + (neg ? '−' : '') + A.money(A.amount(l.id)) + '</span></button><span class="st-margin">' + srcChip(l) +
        (dl ? '<a class="st-doc" href="#/vault/doc/' + dl.id + '" data-act="doc" data-id="' + dl.id + '">Open in the vault</a>' : '') + '</span></div>';
    }
    var html = '<div class="panel statement-card"><div class="statement">';
    html += '<div class="st-group"><div class="st-gh"><span>What you own</span><span>Source · as of</span></div>' + own.map(function (l) { return row(l); }).join('') + '</div>';
    html += '<div class="st-group"><div class="st-gh"><span>What you owe</span><span></span></div>' + owe.map(function (l) { return row(l, true); }).join('') + '</div>';
    if (com.length) html += '<div class="st-group"><div class="st-gh"><span>Committed, not yet called · not counted in net worth</span><span></span></div>' + com.map(function (l) { return row(l); }).join('') + '</div>';
    html += '<div class="st-total"><span class="st-main"><b>' + gl('net-worth', 'Net worth') + '</b><b class="st-amt">' + A.money(t.net) + '</b></span><span class="st-margin">Owned ' + A.short(t.owned) + ' less owed ' + A.short(t.owed) + '</span></div>';
    html += '</div></div>';

    // net worth over time: honest about one month
    var moved = [];
    S.assets.concat(S.liabilities).forEach(function (l) {
      var h = A.history(l.id); if (h.length < 2) return;
      var d = h[h.length - 1].amount - h[0].amount; if (!d) return;
      moved.push({ l: l, d: A.liability(l.id) ? -d : d, v: h[h.length - 1] });
    });
    moved.sort(function (a, b) { return Math.abs(b.d) - Math.abs(a.d); });
    html += '<div class="block">' + sectionH('Net worth over time', '', 'rec-history') +
      '<div class="note">The record starts on <b>' + A.date(S.household.opened) + '</b>, the day the tutorial was finished. The chart draws once there are two months to compare. No figure before that date is estimated.</div>';
    if (moved.length) html += '<div class="panel"><div class="intro"><span class="eyebrow">What moved since ' + A.date(S.household.opened) + '</span></div><div>' +
      moved.map(function (m) { return '<div class="record"><div class="record-main"><span class="record-title">' + e(m.l.name) + '</span><span class="record-sub">' + e(A.srcLabel(m.v)) + ' · ' + A.date(m.v.asOf) + ' · ' + e(m.v.reason) + '</span></div><div class="record-meta">' + (m.d > 0 ? '+' : '−') + A.money(Math.abs(m.d)) + '</div></div>'; }).join('') + '</div></div>';
    html += '</div>' + opensNext('records');
    return html;
  }
  function recOwn() {
    var S = A.S, own = A.totals().owned;
    var rows = S.assets.slice().sort(function (a, b) { return A.amount(b.id) - A.amount(a.id); }).map(function (a) {
      var c = A.cur(a.id), s = A.stale(a), v = A.amount(a.id);
      return '<tr data-row="' + a.id + '" data-amt="' + v + '" data-text="' + e((a.name + ' ' + a.holder + ' ' + A.CLS[a.cls] + ' ' + (a.institution || '')).toLowerCase()) + '" data-cls="' + a.cls + '" data-holder="' + e(a.holder.split(' ')[0]) + '">' +
        '<td data-v="' + e(a.name.toLowerCase()) + '"><a href="#/records/own" data-act="line" data-id="' + a.id + '">' + e(a.name) + '</a><span class="cell-sub">' + e(A.CLS[a.cls]) + (a.institution ? ' · ' + e(a.institution) : '') + '</span></td>' +
        '<td>' + e(a.holder) + '</td><td class="num" data-v="' + v + '">' + A.money(v) + '<span class="cell-sub tb-vsub">' + A.pct(own ? v / own : 0, 1) + ' of it all</span></td>' + shareCell(v, own) +
        '<td data-v="' + ((c && c.asOf) || '') + '"><span class="nw">' + A.date(c && c.asOf) + '</span><span class="cell-sub">' + e(A.srcLabel(c)) + '</span></td>' +
        '<td data-v="' + (s ? 1 : 0) + '">' + (s ? '<span class="status-label attention">Check the value</span><span class="cell-sub">' + s + ' days old</span>' : '<span class="status-label ok">Up to date</span>') + '</td></tr>';
    }).join('');
    var classes = Object.keys(A.CLS).filter(function (k) { return S.assets.some(function (a) { return a.cls === k; }); });
    return '<div data-collection data-page-size="8" data-noun="assets" class="stack tb">' +
      '<div class="toolbar"><div class="search"><label class="sr" for="q-own">Search what you own</label><input class="input" id="q-own" type="search" placeholder="Search what you own…" data-search-input>' +
      '<button class="search-clear" type="button" aria-label="Clear the search">' + A.ic('close') + '</button></div>' +
      '<select class="input" data-filter="cls" aria-label="Kept as"><option value="">Every kind</option>' + classes.map(function (k) { return '<option value="' + k + '">' + A.CLS[k] + '</option>'; }).join('') + '</select>' +
      '<select class="input" data-filter="holder" aria-label="Holder"><option value="">Every holder</option>' + ['Joint'].concat(S.members.map(function (m) { return m.name.split(' ')[0]; })).map(function (h) { return '<option>' + e(h) + '</option>'; }).join('') + '</select>' +
      '<span class="result-count" data-count aria-live="polite"></span></div><div class="filter-tags" data-tags></div>' +
      (S.assets.length > 1 ? stripWrap('cls', 'By kind', 'What you own, by kind') : '') +
      '<div class="data-table" tabindex="0" role="region" aria-label="What you own, scrolls sideways on a small screen" data-sort-key="own" data-whole="' + own + '"><table><thead><tr>' +
      sth('Asset', 'text', 'asc') + gth('Holder', 'holder', 'nw') + sth('Value', 'num', 'desc', 'num', 'desc') + gth('Share', 'share', 'tb-share-h') + sth('As of', 'date', 'asc', '', '', '', 'as-of') + sth('Status', 'status', 'desc', '', '', '', 'check') +
      '</tr></thead><tbody>' + rows + '</tbody>' +
      '<tfoot data-foot><tr><td data-foot-label></td><td></td><td class="num" data-foot-sum></td><td class="tb-share" data-foot-share></td><td></td><td></td></tr></tfoot></table>' +
      '<div class="collection-state" data-state-host hidden><b>Nothing matches</b><p>No asset matches that search and those filters. Clear one and the list returns.</p></div></div>' +
      '<div class="pager" data-pager hidden><span class="pager-range" data-range aria-live="polite"></span><button class="key key-s key-secondary" type="button" data-prev>Previous</button><button class="key key-s key-secondary" type="button" data-next>Next</button></div></div>';
  }
  function recOwe() {
    var S = A.S, t = A.totals();
    var rows = S.liabilities.slice().sort(function (a, b) { return (a.kind === 'commitment') - (b.kind === 'commitment') || A.amount(b.id) - A.amount(a.id); }).map(function (l) {
      var sec = A.asset(l.securedOn), v = A.amount(l.id), com = l.kind === 'commitment', next = l.reset || l.maturity;
      return '<tr data-row="' + l.id + '" data-amt="' + (com ? 0 : v) + '" data-type="' + e(l.type) + '" data-text="' + e((l.name + ' ' + l.lender + ' ' + l.type + ' ' + (sec ? sec.name : '')).toLowerCase()) + '">' +
        '<td data-v="' + e(l.name.toLowerCase()) + '"><a href="#/records/owe" data-act="line" data-id="' + l.id + '">' + e(l.name) + '</a><span class="cell-sub">' + e(l.lender) + ' · ' + e(l.type) + '</span></td>' +
        '<td>' + (sec ? e(sec.name) : '—') + '</td><td class="num" data-v="' + (l.rate || '') + '">' + (l.rate ? l.rate + '%' : '—') + (l.rateType ? '<span class="cell-sub">' + e(l.rateType) + '</span>' : '') + '</td>' +
        '<td class="num" data-v="' + v + '">' + A.money(v) + (com ? '<span class="cell-sub">not yet called of ' + A.money(l.committed) + ' · not in net worth</span>' : '<span class="cell-sub tb-vsub">' + A.pct(t.owed ? v / t.owed : 0, 1) + ' of it all</span>') + '</td>' +
        (com ? '<td class="tb-share" data-v=""><span class="unknown">Not counted</span></td>' : shareCell(v, t.owed)) +
        '<td class="nw" data-v="' + (next || '') + '">' + (l.reset ? 'Resets ' + A.date(l.reset) : 'Ends ' + A.date(l.maturity)) + '</td></tr>';
    }).join('');
    var types = []; S.liabilities.forEach(function (l) { if (types.indexOf(l.type) < 0) types.push(l.type); });
    return '<div data-collection data-noun="debts" class="stack tb">' +
      '<div class="toolbar"><select class="input" data-filter="type" aria-label="Kind"><option value="">Every kind</option>' + types.map(function (k) { return '<option>' + e(k) + '</option>'; }).join('') + '</select>' +
      '<span class="result-count" data-count aria-live="polite"></span></div><div class="filter-tags" data-tags></div>' +
      (S.liabilities.length > 1 ? stripWrap('type', 'By kind', 'What you owe, by kind', 'owe') : '') +
      '<div class="data-table" tabindex="0" role="region" aria-label="What you owe" data-sort-key="owe" data-whole="' + t.owed + '"><table><thead><tr>' +
      sth('Debt', 'text', 'asc') + gth('Set against', 'secured') + sth('Rate', 'num', 'desc', 'num', '', 'lowest first|highest first', 'rate') + sth('Balance', 'num', 'desc', 'num', 'desc') + gth('Share', 'share', 'tb-share-h') + sth('Next date', 'date', 'asc') +
      '</tr></thead><tbody>' + rows + '</tbody>' +
      '<tfoot data-foot><tr><td data-foot-label></td><td></td><td></td><td class="num" data-foot-sum></td><td class="tb-share" data-foot-share></td><td></td></tr></tfoot></table>' +
      '<div class="collection-state" data-state-host hidden><b>Nothing matches</b><p>No debt of that kind. Clear the filter and the list returns.</p></div></div></div>' +
      '<p class="help">Drawn: ' + A.money(t.owed) + '. Committed and not yet called: ' + A.money(t.commit) + ', shown here and left out of net worth until it is called.</p>';
  }
  function recDocs(list) {
    var S = A.S;
    var rows = (list || S.documents).slice().sort(function (a, b) { return a.date < b.date ? 1 : -1; }).map(function (d) {
      var bt = A.belongsTo(d), desk = bt[0] ? bt[0].desk : 'Not filed';
      return '<tr data-row="' + d.id + '" data-text="' + e((d.name + ' ' + d.cat + ' ' + bt.map(function (x) { return x.label; }).join(' ') + ' ' + d.original + ' ' + (d.summary || '')).toLowerCase()) + '" data-desk="' + e(desk) + '">' +
        '<td data-v="' + e(d.name.toLowerCase()) + '"><a href="#/vault/doc/' + d.id + '" data-act="doc" data-id="' + d.id + '">' + e(d.name) + '</a><span class="cell-sub">' + e(d.cat) + ' · ' + e(d.size) + (d.summary ? ' · summarized by Freya' : '') + '</span></td>' +
        '<td data-v="' + e(bt.length ? (bt[0].desk + ' ' + bt[0].label).toLowerCase() : '') + '">' + (bt.length ? bt.map(function (x) { return deskChip(x) + '<span class="cell-sub">' + e(x.label) + '</span>'; }).join('') : '<span class="unknown">Not filed</span>') + '</td>' +
        '<td class="nw" data-v="' + d.date + '">' + A.date(d.date) + '</td><td>' + e(d.original) + '</td></tr>';
    }).join('');
    return '<div data-collection data-noun="documents" class="stack tb">' +
      '<div class="toolbar"><div class="search"><label class="sr" for="q-doc">Search documents</label><input class="input" id="q-doc" type="search" placeholder="Search by name, kind, line or summary" data-search-input>' +
      '<button class="search-clear" type="button" aria-label="Clear the search">' + A.ic('close') + '</button></div>' +
      '<select class="input" data-filter="desk" aria-label="Belongs to"><option value="">Belongs to: all</option>' + ['Records', 'Governance', 'Protection', 'Succession', 'Not filed'].map(function (c) { return '<option>' + c + '</option>'; }).join('') + '</select>' +
      '<span class="result-count" data-count aria-live="polite"></span></div><div class="filter-tags" data-tags></div>' +
      '<div class="data-table" tabindex="0" role="region" aria-label="Documents" data-sort-key="docs"><table><thead><tr>' + sth('Document', 'text', 'asc') + sth('Belongs to', 'text', 'asc') + sth('Dated', 'date', 'desc', 'nw', 'desc') + sth('Where the original is', 'text', 'asc') + '</tr></thead><tbody>' + rows + '</tbody></table>' +
      '<div class="collection-state" data-state-host hidden><b>Nothing matches</b><p>No document matches that search. Clear it and the list returns.</p></div></div></div>';
  }
  /* storage, and Freya's reading allowance (V1, V2) */
  function vaultFoot() {
    var S = A.S, used = S.documents.reduce(function (s, d) { return s + (parseFloat(d.size) || 0); }, 0);
    return '<div class="vault-foot"><div class="meter" aria-hidden="true"><i style="width:' + Math.max(1, used / 2048 * 100).toFixed(1) + '%"></i></div>' +
      '<div class="progress-line"><span>' + (used / 1024).toFixed(2) + ' GB of 2 GB on the free office</span><span>Freya has read ' + S.freya.documents + ' of ' + S.freya.allowanceDocuments + ' documents this month</span></div></div>';
  }
  var KINDS = ['Ownership', 'Agreements', 'Statements', 'Insurance', 'Estate', 'Identity', 'Tax', 'Other'];
  /* THE FAMILY VAULT (build spec Figure 11) — every document the household keeps, in one place.
     Fixed, not suggested: it opens on All documents every time. */
  function vault(r) {
    var S = A.S, sub = r.sub, kind = sub === 'kind' ? KINDS.filter(function (k) { return k.toLowerCase() === r.rest[0]; })[0] : null;
    var unfiled = S.documents.filter(function (d) { return !A.filed(d); });
    var title = sub === 'needs-filing' ? 'Needs filing' : kind || 'Vault';
    var lead = sub === 'needs-filing' ? 'Documents uploaded without a line. File each one where it belongs.' :
      kind ? 'Every ' + kind.toLowerCase() + ' document the household keeps.' : 'Every document the household keeps, and where each original is.';
    var html = '<main class="screen">' + placeHead(title, lead, uploadKey('Upload', false));
    if (unfiled.length && sub !== 'needs-filing') html += '<section class="panel sg-card sg-needs"><div class="sg-h"><span class="status-label attention">Needs filing · ' + unfiled.length + '</span>' + more('#/vault/needs-filing', 'Needs filing') + '</div><div>' +
      unfiled.map(function (d) { return '<div class="record">' + A.ic('statement') + '<div class="record-main"><span class="record-title">' + e(d.name) + '</span><span class="record-sub">Uploaded ' + A.date(d.date) + (d.proposal ? ' · proposed: ' + e(d.proposal.label) : '') + '</span></div><div class="record-meta"><button class="key key-s key-secondary" type="button" data-act="doc" data-id="' + d.id + '">File it</button></div></div>'; }).join('') + '</div></section>';
    var list = sub === 'needs-filing' ? unfiled : kind ? S.documents.filter(function (d) { return d.cat === kind; }) : S.documents;
    if (!list.length) html += '<div class="collection-state"><b>' + (sub === 'needs-filing' ? 'Nothing to file' : 'Nothing here yet') + '</b><p>' + (sub === 'needs-filing' ? 'Every document belongs to a line, a policy or the will.' : 'Upload one here, or from the desk it belongs to.') + '</p></div>';
    else html += recDocs(list);
    return html + vaultFoot() + '</main>';
  }
  function recAdvisers() {
    var S = A.S;
    return '<p class="help">The register is your own record of who covers what. Adding an adviser sends them nothing and gives them no access; inviting one in, to see what they cover, is the Advisers module.</p><div>' +
      S.advisers.map(function (v) {
        return '<div class="record">' + A.ic('user') + '<div class="record-main"><span class="record-title">' + e(v.name) + ' · ' + e(v.role) + '</span>' +
          '<span class="record-sub">' + e(v.firm) + ' · covers ' + e(v.covers.join(', ')) + ' · last contact ' + A.date(v.lastContact) + '</span>' +
          (v.open ? '<span class="record-sub">Open: ' + e(v.open) + '</span>' : '') + '<span class="record-sub">' + eMail(v.contact) + '</span></div>' +
          '<div class="record-meta"><button class="key key-s key-secondary" type="button" data-act="invite-adviser" data-id="' + v.id + '">Invite</button></div></div>';
      }).join('') + '</div>';
  }
  /* ── THE FAMILY TREE (build spec R11, Figures 3 and 7) ─────────────────────────────────
     Everyone in the family by generation: the two members with logins, and everyone else
     without one. Drawn from person + relations; the connecting lines are laid out once the
     boxes have a size (layoutTree), like the wealth map. mode: 'edit' (Records), 'read'
     (Succession, roles marked), 'mini' (a Succession card). */
  function personMeta(x) {
    var m = x.member ? A.S.members.filter(function (y) { return y.id === x.member; })[0] : null;
    return m ? 'Login · ' + (m.role === 'owner' ? 'owner' : 'partner') : x.dependant ? 'Dependent' : 'No login';
  }
  function roleMarks(x) {
    var n = A.namedIn(x), marks = [];
    if (n.succession.some(function (s) { return /Executor/.test(s); })) marks.push('Executor');
    if (n.protection.some(function (s) { return /beneficiary/.test(s); })) marks.push('Beneficiary');
    return marks;
  }
  function familyTree(mode, sel, base) {
    var rows = A.generations(), n = A.S.people.length;
    var html = '<div class="ftree ft-' + mode + '" data-ftree role="group" aria-label="The family tree, ' + rows.length + ' generations">';
    rows.forEach(function (row) {
      html += '<div class="ft-row">' + row.map(function (id) {
        var x = A.person(id), cur = id === sel, marks = mode === 'edit' ? [] : roleMarks(x);
        var inner = '<span class="ft-av" aria-hidden="true">' + A.ic(x.member ? 'user' : 'users') + '</span><span class="ft-t"><b>' + e(mode === 'mini' ? x.name.split(' ')[0] : x.name) + '</b>' +
          (mode === 'mini' ? '' : '<small>' + e(personMeta(x)) + '</small>') +
          (marks.length ? '<span class="ft-marks">' + marks.map(function (m) { return '<span class="status-label ' + (m === 'Executor' ? 'ok' : 'neutral') + '">' + m + '</span>'; }).join('') + '</span>' : '') + '</span>';
        return mode === 'mini' ? '<span class="ft-node' + (x.member ? ' is-member' : '') + '" data-pid="' + id + '">' + inner + '</span>' :
          '<a class="ft-node' + (x.member ? ' is-member' : '') + '" data-pid="' + id + '" href="#/' + base + '/family/' + id + '"' + (cur ? ' aria-current="true"' : '') + '>' + inner + '</a>';
      }).join('') + '</div>';
    });
    return html + '<svg class="ft-lines" aria-hidden="true"></svg></div>';
  }
  function familyPage(base, r) {
    var S = A.S, rows = A.generations(), x = A.person(r.rest[0]) || A.viewerPerson(), n = A.namedIn(x), first = x.name.split(' ')[0];
    var edit = base === 'records';
    function col(t, list, href) {
      return '<div class="fn-col"><span class="fn-h">' + t + '</span>' + (list.length ? '<div class="chips">' + list.map(function (s) { return '<a class="status-label neutral" href="' + href + '">' + e(s) + '</a>'; }).join('') + '</div>' : '<span class="help">Not named here.</span>') + '</div>';
    }
    var html = '<section class="panel sg-card ft-card"><div class="sg-h"><span class="eyebrow">The family tree</span><span class="sg-note">' + rows.length + ' generation' + (rows.length === 1 ? '' : 's') + ' · ' + S.people.length + ' people</span></div>' +
      familyTree(edit ? 'edit' : 'read', x.id, base) + '</section>';
    html += '<section class="panel sg-card"><div class="sg-h"><span class="eyebrow">Selected · where ' + e(first) + ' is named</span>' +
      (edit ? '<button class="key key-s key-secondary" type="button" data-act="edit-person" data-id="' + x.id + '">Edit</button>' : '<a class="link" href="#/records/family/' + x.id + '">Edit in Records' + A.ic('arrow') + '</a>') + '</div>' +
      '<p class="sg-line"><b>' + e(x.name) + '</b> · ' + e(x.relationship) + (x.born ? ' · born ' + x.born : '') + (x.dependant ? ' · dependent' : '') + (A.unionLine(x.id) ? ' · ' + e(A.unionLine(x.id)) : '') + '</p>' +
      '<div class="fn-cols">' + col('In Records', n.records, '#/records/own') + col('In Governance', n.policy, '#/policy/planning') + col('In Protection', n.protection, '#/protection/cover') + col('In Succession', n.succession, '#/succession/will') + '</div>' +
      (edit ? '<p class="help">Birth year, relationship, married or not, and dependent are edited here. People have no login and use no seat; the Family module adds logins for them.</p>' :
        '<p class="help">The same family as Records, read-only here: it is entered once, in Records › Family. Heirs and roles are marked when Who it goes to and Roles ship.</p>') + '</section>';
    return html;
  }

  /* ── POLICY ──────────────────────────────────────────────────────────── */
  function policy(r) {
    var sub = r.sub;
    if (!sub) return polSuggested();
    if (sub === 'identity' && A.LI) return '<main class="screen">' + policyIdentity(r) + '</main>';
    if (sub === 'charter' && A.LI) return '<main class="screen">' + policyCharter() + '</main>';
    var T = { rules: 'Your rules', drift: 'Drift', planning: 'Wealth planning', runway: 'Retirement runway', identity: 'Financial Identity' };
    var actions = sub === 'rules' ? uploadKey('Upload the signed copy', false, 'policy').replace('class="key"', 'class="key key-secondary"') + '<button class="key" type="button" data-act="edit-policy">Change the policy</button>' :
      sub === 'planning' ? '<button class="key" type="button" data-act="add-goal">Add a goal</button>' : '';
    var lead = sub === 'planning' ? 'Every goal, what it draws on, and what is linked to it today. No forecast.' : '';
    var html = '<main class="screen">' + deskPage('policy', T[sub], actions, lead);
    if (sub === 'drift') html += sceneDrift() + polDrift();
    else if (sub === 'planning') html += scenePlanning() + (A.sim ? simPlanBlock() : '') + polGoals();
    else if (sub === 'runway') html += A.sim ? simRunwayPage() : '';
    else html += polRules();
    return html + '</main>';
  }
  function noPolicy() {
    return '<div class="collection-state"><b>No policy yet</b><p>Your household’s rules, written down once: a range for each asset class, the cash that must stay reachable, the largest single holding, and when drift becomes action. Finna supplies a blank template and never suggests a number.</p>' +
      '<div><button class="key" type="button" data-act="edit-policy">Write the first rule</button></div></div>';
  }
  function polRules() {
    var p = A.policy(), S = A.S, inv = A.investable();
    if (!p) return noPolicy();
    var d = A.drift(), byK = {}; d.forEach(function (x) { byK[x.k] = x; });
    var html = '<div class="panel"><div class="intro"><span class="eyebrow">Version ' + p.version + ' · in force since ' + A.date(p.effective) + ' · agreed by ' + e(p.agreed.join(' and ')) + '</span><h2 class="title">What this money is for</h2></div>' +
      '<dl class="pairs"><div><dt>Purpose</dt><dd>' + e(p.purpose) + '</dd></div><div><dt>What enough means</dt><dd>' + e(p.enough) + '</dd></div><div><dt>What we will not do</dt><dd>' + e(p.exclusions) + '</dd></div><div><dt>Signed copy</dt><dd>' + (p.doc && A.doc(p.doc) ? '<a class="link" href="#/vault/doc/' + p.doc + '" data-act="doc" data-id="' + p.doc + '">' + e(A.doc(p.doc).name) + '</a>' : '<span class="unknown">Not uploaded</span>') + '</dd></div></dl></div>';
    html += '<div class="block">' + sectionH('The ranges', '', 'pol-ranges') +
      '<p class="help">Measured on ' + gl('investable', 'investable assets') + ', ' + A.money(inv.total) + ': everything except property, the company, the car and valuables. Finna supplied the blank template; every number here was written by the household.</p>' +
      '<div class="panel rg-panel">' + bandsChart(d) + '</div>' +
      '<div class="data-table"><table><thead><tr><th scope="col">Asset class</th>' + gth('Floor', 'floor', 'num') + gth('Target', 'target', 'num') + gth('Ceiling', 'ceiling', 'num') + '<th scope="col" class="num">Today</th></tr></thead><tbody>' +
      A.POLICY_CLASSES.map(function (k) { var b = p.bands[k], x = byK[k]; return '<tr><td>' + A.MIXL[k] + '</td><td class="num">' + b[1] + '%</td><td class="num">' + b[0] + '%</td><td class="num">' + b[2] + '%</td><td class="num">' + (x ? (x.actual * 100).toFixed(1) + '%' + (x.out ? '<span class="cell-sub"><span class="status-label attention">' + (x.out === 'above' ? 'Over' : 'Under') + '</span></span>' : '') : '—') + '</td></tr>'; }).join('') +
      '</tbody></table></div>' +
      '<dl class="pairs"><div><dt>Cash that must stay reachable</dt><dd class="num">' + A.money(p.liquidityMin) + '</dd></div><div><dt>Largest single company</dt><dd class="num">' + p.concentrationMax + '% of investable assets</dd></div><div><dt>When drift becomes action</dt><dd>Outside a range, the household is told the same day</dd></div></dl></div>';
    /* the versions, on the line: every version stays, and the year's review is ahead of today */
    var items = S.policy.map(function (v, i) {
      return { date: v.effective, title: 'Version ' + v.version + (i === S.policy.length - 1 ? ' · in force' : ''), sub: 'Written by ' + v.by + ' · agreed by ' + v.agreed.join(' and ') + (v.note ? '. ' + v.note : '') };
    });
    if (S.policy[0]) items.push({ date: A.addDays(S.policy[0].effective, 365), title: 'Policy review, a year after version 1', sub: 'In the Timeline' });
    items.sort(function (a, b) { return a.date < b.date ? -1 : 1; });
    html += '<div class="block">' + sectionH('Versions', '', 'pol-versions') + '<p class="help">A policy is never edited in place. A change is a new version, and every version stays.</p>' +
      '<div class="panel tl-card">' + lineHTML(items, { today: true, soon: false, label: 'The versions of your policy' }) + '</div></div>' + opensNext('policy');
    return html;
  }
  var BAND_GL = { equities: 'listed-shares', fixed: 'bonds', cash: 'cash', private: 'private' };
  function bandsChart(rows) {
    var html = '<div class="bands">', anyOut = false;
    rows.forEach(function (d) {
      var ap = d.actual * 100, at = Math.min(100, ap).toFixed(2); if (d.out) anyOut = true;
      html += '<div class="band-row"><div class="band-name">' + gl(BAND_GL[d.k], e(d.label)) + '<small>' + A.short(d.value) + '</small></div>' +
        '<div class="band-track" aria-hidden="true"><div class="band-range" style="left:' + d.min + '%;width:' + (d.max - d.min) + '%"></div>' +
        '<div class="band-target" style="left:' + d.target + '%"></div><div class="band-actual' + (d.out ? ' out' : '') + '" style="left:' + at + '%"></div>' + (d.out ? '<span class="band-halo" style="left:' + at + '%"></span>' : '') + '</div>' +
        '<div class="band-val' + (d.out ? ' out' : '') + '"><b>' + ap.toFixed(1) + '%</b><small>range ' + d.min + '–' + d.max + '%</small>' + (d.out ? '<span class="status-label attention">' + (d.out === 'above' ? 'Over' : 'Under') + '</span>' : '') + '</div></div>';
    });
    html += '<div class="band-axis"><span></span><div><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span></div><span></span></div></div>';
    html += '<div class="band-key"><span><i class="k-range"></i>' + gl('range', 'Your range') + '</span><span><i class="k-target"></i>' + gl('target', 'Your target') + '</span><span><i class="k-now"></i>Where you are today</span>' + (anyOut ? '<span><i class="k-out"></i>Outside your range</span>' : '') + '</div>';
    return html;
  }
  function polDrift() {
    var d = A.drift(), p = A.policy(), out = d.filter(function (x) { return x.out; }), html = '';
    if (!p) return noPolicy();
    out.forEach(function (x) {
      var mv = A.movers(x.k, p.effective);
      html += '<div class="panel"><div class="intro"><span class="eyebrow">Why it drifted</span><h2 class="title">' + e(x.label) + ' at ' + A.pct(x.actual) + '</h2>' +
        '<p class="lead">Your ' + (x.out === 'above' ? 'ceiling is ' + x.max : 'floor is ' + x.min) + '%. Since version ' + p.version + ' took effect on ' + A.date(p.effective) + ', these lines moved:</p></div><div>' +
        (mv.length ? mv.map(function (m) { return '<div class="record"><div class="record-main"><span class="record-title">' + e(m.a.name) + ' · ' + e(m.a.holder) + '</span><span class="record-sub">' + e(A.srcLabel(m.v)) + ' · ' + A.date(m.v.asOf) + ' · ' + e(m.v.reason) + '</span></div><div class="record-meta">' + (m.delta > 0 ? '+' : '−') + A.money(Math.abs(m.delta)) + '</div></div>'; }).join('') : '<p class="help">No single line explains it; the mix moved with the market.</p>') +
        '</div><p class="help">Freya explains drift. She does not suggest trades; what to do about it is the household’s decision, and yours to write down.</p>' +
        '<div class="actions"><a class="key key-secondary" href="#/policy/rules">Change the policy</a><button class="key" type="button" data-act="ask" data-q="Why are ' + e(x.label.toLowerCase()) + ' outside our range, and what are our options for deciding?">Ask Freya why</button></div></div>';
    });
    var rules = ruleRows();
    if (rules) html += '<div class="block">' + sectionH('The other rules', '', ['pol-liquid', 'pol-single']) + '<p class="help">One row each: the range is everything the rule allows.</p>' + rules + '</div>';
    return html;
  }
  /* WEALTH PLANNING (build spec P10) — every goal on one map: year across, amount up, one mark
     per goal sized by its priority. Under each mark, what is linked to it today; the rest of the
     way to the amount is the gap, as plain arithmetic. No plan line, no "on track", no growth
     rate on the map: what looks forward is the Set-aside planner (P11) between the map and this
     table, with its legend and its method (28 Sep 2026). */
  function polGoals() {
    var S = A.S, goals = S.goals.slice().sort(function (a, b) { return a.date < b.date ? -1 : 1; });
    if (!goals.length) return '<div class="collection-state"><b>No goals yet</b><p>Add what the money is for, with an amount, a date and a priority.</p></div>';
    var RANK = { Need: 2, Want: 1, Wish: 0 };
    var rows = goals.map(function (g) {
      var have = A.goalProgress(g).have, gap = Math.max(0, g.amount - have);
      return '<tr data-row="' + g.id + '"><td data-v="' + e(g.name.toLowerCase()) + '"><button class="link-row" type="button" data-act="gx-goal" data-id="' + g.id + '" data-scroll>' + e(g.name) + '</button><span class="cell-sub">' + e(g.source) + '</span></td>' +
        '<td data-v="' + (RANK[g.priority] != null ? RANK[g.priority] : 0) + '"><span class="status-label ' + (g.priority === 'Need' ? 'ok' : 'neutral') + '">' + e(g.priority) + '</span></td>' +
        '<td class="nw" data-v="' + g.date + '">' + A.date(g.date) + '</td><td class="num" data-v="' + g.amount + '">' + A.money(g.amount) + '</td>' +
        '<td class="num" data-v="' + have + '">' + A.money(have) + '</td>' + shareCell(Math.min(have, g.amount), g.amount) + '<td class="num" data-v="' + gap + '">' + A.money(gap) + '</td></tr>';
    }).join('');
    return '<div class="block">' + sectionH('Every goal', '', 'pol-goals') +
      '<div class="data-table" tabindex="0" role="region" aria-label="Every goal" data-sort-key="goals"><table><thead><tr>' +
      sth('Goal', 'text', 'asc') + sth('Priority', 'status', 'desc', '', '', 'Wish first|Need first', 'priority') + sth('Date', 'date', 'asc', 'nw', 'asc') + sth('It needs', 'num', 'desc', 'num') + sth('Linked today', 'num', 'desc', 'num', '', '', 'linked') + '<th scope="col" class="tb-share-h">Linked</th>' + sth('The gap', 'num', 'desc', 'num', '', '', 'gap') +
      '</tr></thead><tbody>' + rows + '</tbody></table></div>' +
      '<p class="help">No forecast: the map shows the amounts you named and what is linked today. The pace, when it is switched on, is arithmetic at what you set aside, before any growth. To try a change before making it, set aside more or move a goal in the planner above: nothing there is saved.</p></div>';
  }
  /* THE BOUNDARY: Profile's fine print since 4 Oct 2026 (Christian: "has to be transferred to the profile page as a
     legal compliance item"; it was a page of Policy, #/policy/boundary redirects). What Finna does not do, and where
     those questions go. "Who covers what" left with it (it read the advisers' register, which is coming, and showed an
     empty heading without one), and so did Policy's "Coming next to this desk". The wording is counsel's to supply. */
  function polBoundary() {
    return '<div class="boundary"><h3>What Finna does not do <span class="draft-tag">Draft · counsel to supply the wording</span></h3>' +
      '<p>Finna keeps the record, holds your rules and tells you when you drift from them. Three things sit outside the office, and Freya will say so when a question crosses the line:</p>' +
      '<ul><li>No tax structuring. Tax questions go to your CPA.</li><li>No legal advice. Wills, trusts and agreements go to your attorney.</li><li>No regulated personal advice. The office prepares; your household decides.</li></ul></div>';
  }

  /* ── INVESTMENT ──────────────────────────────────────────────────────── */
  function invHoldings() {
    var S = A.S, invT = A.investable().total;
    var html = '<section class="block" aria-label="Your investments"><span class="eyebrow">Your investments</span>' + treeMap('inv') + '</section>' + (!A.policy() ? '<div class="note"><b>No ranges yet.</b> What you hold is measured against the ranges in your policy; write it on the Governance desk.</div>' : '');
    var inv = S.assets.filter(A.isInvestable), vt = 0;
    var rows = inv.slice().sort(function (a, b) { return A.amount(b.id) - A.amount(a.id); }).map(function (a) {
      var v = A.amount(a.id); vt += v;
      var mix = Object.keys(a.mix || A.DEFAULT_MIX[a.cls]).map(function (k) { return Math.round((a.mix || A.DEFAULT_MIX[a.cls])[k] * 100) + '% ' + A.MIXL[k].toLowerCase(); }).join(', ');
      return '<tr data-row="' + a.id + '"><td data-v="' + e(a.name.toLowerCase()) + '"><a href="#/investment/holdings" data-act="line" data-id="' + a.id + '">' + e(a.name) + '</a><span class="cell-sub">' + e(a.holder) + (a.institution ? ' · ' + e(a.institution) : '') + '</span></td><td>' + e(mix) + '</td>' +
        '<td class="num" data-v="' + v + '">' + A.money(v) + '<span class="cell-sub tb-vsub">' + A.pct(vt && invT ? v / invT : 0, 1) + ' of it all</span></td>' + shareCell(v, invT) + '</tr>';
    }).join('');
    /* the fee columns left with Fees (4 Oct 2026): they come later, with linked accounts */
    html += '<div class="block">' + sectionH('Holdings', '', ['inv-private']) +
      '<div class="data-table" tabindex="0" role="region" aria-label="Holdings" data-sort-key="hold"><table><thead><tr>' +
      sth('Holding', 'text', 'asc') + gth('Looks through to', 'look-through') + sth('Value', 'num', 'desc', 'num', 'desc') + gth('Share', 'share', 'tb-share-h') +
      '</tr></thead><tbody>' + rows + '</tbody><tfoot><tr><td>All investments<span class="cell-sub">' + inv.length + ' holdings</span></td><td></td><td class="num">' + A.money(vt) + '</td>' + shareCell(vt, invT || vt) + '</tr></tfoot></table></div>' +
      '<p class="help">To add a holding or change one, go to <a class="link" href="#/records/own" style="font-size:var(--text-label)">Records › What you own</a>. This page reads it from there the moment it is saved.</p></div>';
    return html;
  }
  function investment(r) {
    var sub = r.sub;
    if (!sub) return invSuggested();
    if (COMING['investment/' + sub]) return comingPage('investment/' + sub);
    var T = { holdings: 'What you hold', mix: 'Mix lab', fees: 'Fees', access: 'The route to investing' };
    var first = lp('ia-start').state !== 'done' ? 'ia-start' : 'ia-found';   /* the route's key opens the step that is next */
    var html = '<main class="screen">' + deskPage('investment', T[sub], sub === 'access' ? '<a class="key" href="#/learn/path/' + first + '">Open ' + e(lp(first).title) + '</a>' : '',
      sub === 'holdings' ? 'What you hold elsewhere, read from Records, against the ranges in your policy.' : '');
    if (sub === 'fees') html += sceneFees() + invFees();
    else if (sub === 'mix') html += A.sim ? simMixPage() : '';
    else if (sub === 'access') html += invAccess();
    else html += sceneHoldings() + (lp('ia-found').state === 'done' ? invCurrency() : '') + invHoldings();
    return html + '</main>';
  }
  /* CURRENCY EXPOSURE — the view Investment Foundation opens (L4: capability is earned, data never
     is). Every figure was already on this desk: the positions in the record, read for the part held
     through international and emerging markets funds. */
  function cap1(t) { return t.charAt(0).toUpperCase() + t.slice(1); }
  function invCurrency() {
    var usd = 0, other = 0, accts = {};
    A.S.assets.filter(function (a) { return ['listed', 'pension', 'education', 'bonds'].indexOf(a.cls) > -1 && a.positions; }).forEach(function (a) {
      var v = A.amount(a.id); a.positions.forEach(function (p) { var x = v * p.w; if (/International|Emerging/.test(p.n)) { other += x; accts[a.id] = 1; } else usd += x; });
    });
    var tot = usd + other; if (!tot) return '';
    var sh = other / tot, n = Object.keys(accts).length, words = ['no', 'one', 'two', 'three', 'four', 'five', 'six'][n] || String(n);
    return '<section class="panel lm-cx" aria-label="Currency exposure"><div class="sg-h"><span class="eyebrow">Currency exposure</span><span class="status-label ok">Opened by Investment Foundation · ' + A.date(lp('ia-found').earned) + '</span></div>' +
      '<p class="sg-line">Of <b>' + A.short(tot) + '</b> in shares, bonds and funds, about <b>' + A.short(other) + '</b>, ' + Math.round(sh * 100) + '%, is exposed to other currencies, through international funds in ' + words + ' of your accounts.</p>' +
      '<div class="lm-bar2" role="img" aria-label="' + (A.base() === 'USD' ? 'US dollars' : cap1(A.curWords())) + ' ' + Math.round((1 - sh) * 100) + '%, other currencies ' + Math.round(sh * 100) + '%"><i style="width:' + ((1 - sh) * 100).toFixed(1) + '%"></i><i style="width:' + (sh * 100).toFixed(1) + '%"></i></div>' +
      '<div class="lm-leg"><span><i style="background:var(--you)"></i>' + (A.base() === 'USD' ? 'US dollars' : cap1(A.curWords())) + ' · ' + Math.round((1 - sh) * 100) + '%</span><span><i style="background:var(--ref-1)"></i>Other currencies · ' + Math.round(sh * 100) + '%</span></div>' +
      '<p class="help">From the positions in your accounts, as of their latest statements. Nothing was added or moved: the view is new, the figures were already yours.</p></section>';
  }
  function invFees() {
    var inv = A.S.assets.filter(A.isInvestable), tot = 0, fy = feesYear();
    var rows = inv.slice().sort(function (a, b) { return A.amount(b.id) * (b.fee || 0) - A.amount(a.id) * (a.fee || 0); }).map(function (a) {
      var v = A.amount(a.id), y = a.fee != null ? v * a.fee / 100 : null; tot += v;
      return '<tr data-row="' + a.id + '"><td data-v="' + e(a.name.toLowerCase()) + '"><a href="#/investment/fees" data-act="line" data-id="' + a.id + '">' + e(a.name) + '</a><span class="cell-sub">' + e(a.holder) + (a.institution ? ' · ' + e(a.institution) : '') + '</span></td>' +
        '<td class="num" data-v="' + v + '">' + A.money(v) + '</td><td class="num" data-v="' + (a.fee != null ? a.fee : '') + '">' + (a.fee != null ? a.fee.toFixed(2) + '%' : '<span class="unknown">Not entered</span>') + '</td>' +
        '<td class="num" data-v="' + (y != null ? y : '') + '">' + (y != null ? A.money(y) : '—') + '</td>' + (y != null && fy ? shareCell(y, fy) : '<td class="tb-share" data-v=""><span class="unknown">—</span></td>') + '</tr>';
    }).join('');
    return '<div class="block">' + sectionH('Every holding') + '<div class="data-table" tabindex="0" role="region" aria-label="Every holding and its fee" data-sort-key="fees"><table><thead><tr>' +
      sth('Holding', 'text', 'asc') + sth('Value', 'num', 'desc', 'num') + sth('Yearly fee', 'num', 'desc', 'num', '', 'lowest first|highest first', 'fee') + sth('Fee a year', 'num', 'desc', 'num', 'desc', '', 'fee-year') + '<th scope="col" class="tb-share-h">Of the fees</th>' +
      '</tr></thead><tbody>' + rows + '</tbody><tfoot><tr><td>All investments<span class="cell-sub">' + inv.length + ' holdings</span></td><td class="num">' + A.money(tot) + '</td><td class="num">' + (tot ? A.pct(fy / tot, 2) : '—') + '</td><td class="num">' + A.money(fy) + '</td><td></td></tr></tfoot></table></div>' +
      '<p class="help">Computed from the record, from the fee you entered on each line. A fee you have not entered is not guessed.</p></div>';
  }
  /* INVESTING THROUGH FINNA · COMING (6 Oct 2026, Christian: "show the user that the investing part of the platform
     is coming soon … the user should be able to do all the investing learn and inserting all their investments …
     it should say the investing through Finna is coming soon, and something about opening the door to investing like
     a family office"). Everything the desk does today stays open; only investing through Finna is Coming. One card
     under the desk's summary (ivDoor) and the route page as the door's own page (invAccess); the line in an
     Investment certificate's ceremony went with the old ceremony (14 Oct 2026). The route names one step ahead, as the Map does. "Tell me when
     it opens" keeps the date on the household (ivNotify); nothing is sent. Every word is a draft for the CCO and
     counsel. Mockups: Claude outputs/investing-coming-mockups-2026-10-06/. */
  var IV = { eyebrow: 'Investing through Finna', title: 'Open the door to investing like a family office.',
    line: 'Family offices invest across public and private markets and hold for decades. Investing through Finna is coming, and the door opens on what you understand, not on what you already have.',
    fine: 'Not available yet. Nothing here is an offer to buy or sell an investment, or advice.' };
  function ivNotify(cls) {
    var on = !!(A.S.household && A.S.household.ivNotify);
    return on ? '<span class="ivd-on">' + A.ic('check') + 'We’ll tell you here when it opens</span>'
      : '<button class="key key-s ' + (cls || 'key-secondary') + '" type="button" data-act="ivd-notify">' + A.ic('bell') + 'Tell me when it opens</button>';
  }
  /* the route, standing up: what is done, the path open now, the bud after it, the rest unnamed, and the door */
  function ivRoute(full) {
    var ps = lpaths().filter(function (p) { return p.desk === 'investment'; });
    var done = ps.filter(function (p) { return p.state === 'done'; }), live = ps.filter(function (p) { return p.state === 'open' || p.state === 'progress'; }),
      nx = ps.filter(function (p) { return p.state === 'next'; }), hid = ps.filter(function (p) { return p.state === 'hidden'; });
    var pick = full ? done.concat(live, nx.slice(0, 1)) : done.slice(-1).concat(live.slice(0, 1), nx.slice(0, 1));
    function sub(p) {
      if (p.state === 'done') return (p.cert ? 'Certificate' : 'Badge') + ' · ' + A.date(p.earned);
      if (p.state === 'progress') return 'Quest ' + p.nextQ + ' of ' + p.quests + ' · in progress';
      if (p.state === 'open') return 'Open now · ' + p.quests + ' quests, about ' + p.minutes + ' minutes';
      return (p.cert ? 'A certificate' : 'A badge') + (full ? ' · opens after ' + e(lp(p.parent).title) : ' · opens next');
    }
    var rows = pick.map(function (p) {
      var t = '<b>' + e(p.title) + '</b><span>' + sub(p) + '</span>';
      return '<li class="ivr-p is-' + p.state + '">' + lmark(p) + (full && p.state !== 'next' ? '<a class="ivr-t" href="' + A.learnHref(p) + '">' + t + '</a>' : '<span class="ivr-t">' + t + '</span>') + '</li>';
    });
    if (hid.length || nx.length > 1) rows.push('<li class="ivr-more"><svg class="ivr-dots" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="5" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="12" cy="19" r="1.6"/></svg><span class="ivr-t"><span>' + (full ? 'More paths open one at a time: public markets, private markets, then the funds in them.' : 'More paths, one at a time') + '</span></span></li>');
    rows.push('<li class="ivr-door"><span class="ivr-dm" aria-hidden="true">' + A.sectionIcon('pr-grow') + '</span><span class="ivr-t"><b>Investing through Finna</b><span><span class="status-label neutral">Coming</span>' + (full ? '<span class="ivr-why">Opened by understanding, one step at a time</span>' : '') + '</span></span></li>');
    return '<ol class="ivr' + (full ? ' is-full' : '') + '" aria-label="The route to investing">' + rows.join('') + '</ol>';
  }
  /* the card on the desk's summary, under Freya's summary */
  function ivDoor() {
    return '<section class="ivd panel" aria-label="' + e(IV.eyebrow) + '"><div class="ivd-in"><div class="ivd-words">' +
      '<div class="ivd-h"><span class="eyebrow">' + e(IV.eyebrow) + '</span><span class="status-label neutral">Coming</span></div>' +
      '<h2 class="ivd-t">' + e(IV.title) + '</h2><p class="ivd-l">' + e(IV.line) + '</p>' +
      '<div class="ivd-keys"><a class="key key-s key-secondary" href="#/investment/access">See the route</a>' + ivNotify('key-quiet') + '</div></div>' +
      '<div class="ivd-vis">' + ivRoute(false) + '</div></div>' +
      '<p class="ivd-fine">' + e(IV.fine) + '</p></section>';
  }
  /* THE ROUTE TO INVESTING — the door's own page */
  function invAccess() {
    var S = A.S, inv = A.investable(), held = S.assets.filter(A.isInvestable), p = A.policy(), out = p ? A.drift().filter(function (x) { return x.out; }) : [];
    var first = lp('ia-start').state !== 'done' ? lp('ia-start') : lp('ia-found');
    var html = scene('route', 'investment',
      '<div class="sc-words"><div class="ivd-h"><span class="eyebrow">' + e(IV.eyebrow) + '</span><span class="status-label neutral">Coming</span></div>' +
        '<p class="sc-answer">' + e(IV.title) + '</p>' +
        '<p class="sc-sub">Family offices own what most portfolios are never offered: private companies, private credit and real assets, held for decades. Investing through Finna is coming, and the door opens on what you understand, not on what you already have.</p>' +
        '<div class="ivd-keys">' + ivNotify() + '</div></div>',
      'The route to investing', '', { visRaw: true, vis: '<div class="sc-vis ivd-vis">' + ivRoute(true) + '</div>' });
    /* everything the desk does today */
    var rows = [
      ['statement', 'What you hold', inv.total ? A.short(inv.total) + ' across ' + scW(held.length) + (held.length === 1 ? ' holding' : ' holdings') + ', read from Records.' : 'Add a brokerage account, a retirement account or a private holding in Records.', inv.total ? '#/investment/holdings' : '#/records/own', inv.total ? 'What you hold' : 'Add what you hold'],
      ['chart', 'Your ranges', p ? (out.length ? scCap(scW(out.length)) + (out.length === 1 ? ' class is' : ' classes are') + ' outside its range today.' : 'Every class is inside its range.') : 'Write the ranges your household holds to.', p ? '#/policy/drift' : '#/policy/rules', p ? 'Drift' : 'Your rules'],
      ['trend', 'Mix lab', 'Try another mix on your own figures. Nothing you try is saved.', '#/investment/mix', 'Open the Mix lab'],
      ['learn', first.title, first.quests + ' quests, about ' + first.minutes + ' minutes. Each path opens the next.', A.learnHref(first), first.state === 'progress' ? 'Continue' : 'Start']
    ];
    html += '<div class="block">' + sectionH('Open now, while you wait') + '<div class="panel ivw">' + rows.map(function (r) {
      return '<a class="record ivw-r' + (r[0] === 'learn' ? ' is-learn' : '') + '" href="' + r[3] + '">' + A.ic(r[0]) + '<div class="record-main"><span class="record-title">' + e(r[1]) + '</span><span class="record-sub">' + e(r[2]) + '</span></div>' +
        '<div class="record-meta"><span class="ivw-go">' + e(r[4]) + A.ic('arrow') + '</span></div></a>';
    }).join('') + '</div></div>';
    /* how the door will open: the rules it keeps */
    html += '<div class="block">' + sectionH('How the door opens') + '<ul class="ivh">' +
      [['pi-paths', 'Understanding opens it', 'Each certificate opens the next step: a category, then the funds in it. Paying for anything never opens it.'],
       ['pr-together', 'Your record comes with you', 'What you hold and what you owe are already here. Nothing is entered twice.'],
       ['pi-decisions', 'Your rules still hold', 'What you invest in is measured against the ranges your household wrote, as everything here is.']].map(function (x) {
        return '<li>' + A.sectionIcon(x[0]) + '<b>' + e(x[1]) + '</b><span>' + e(x[2]) + '</span></li>';
      }).join('') + '</ul></div>';
    html += '<p class="ivd-fine">' + e(IV.fine) + '</p>';
    return html;
  }

  /* ── PROTECTION ──────────────────────────────────────────────────────── */
  function protection(r) {
    var sub = r.sub, S = A.S;
    if (!sub) return proSuggested();
    var html = '<main class="screen">' + deskPage('protection', sub === 'safety' ? 'Safety check' : 'Cover',
      sub === 'safety' ? '' : uploadKey('Upload a schedule', false).replace('class="key"', 'class="key key-secondary"') + '<button class="key" type="button" data-act="add-cover">Add cover</button>',
      sub === 'safety' ? 'Read from your settings: who can sign in, how, and what Finna will never ask for.' : 'Every policy: what it covers, the sum insured and when it renews.');
    if (sub === 'safety') {
      var sec = S.security, rc = sec.recoveryContact;
      html += (A.sim ? simCashBlock() : '') + '<div class="panel"><div class="intro"><span class="eyebrow">Read from your settings</span><h2 class="title">Account safety</h2></div><div>' +
        chk(sec.twoFactor, 'Two-factor sign-in is on', 'Every sign-in needs a second step.') +
        chk(!!rc, rc ? 'Recovery contact: ' + rc : 'No recovery contact yet', 'Who can help you back in if you lose access.', rc ? '' : '<button class="key key-s key-secondary" type="button" data-act="set-recovery">Set one</button>') +
        chk(true, 'Two people can see the household: ' + S.members.map(function (m) { return m.name.split(' ')[0]; }).join(' and '), 'Advisers are listed, not invited.') +
        '</div></div><div class="note"><b>What Finna will never ask for:</b> your passwords, a code sent to your phone, card details, or to move money. If a message asks for any of these, it is not from Finna.</div>';
    } else {
      var soon = A.renewalsWithin(30).map(function (c) { return c.id; });
      html += sceneCover();
      var rn = scRenewals(), none = S.cover.filter(function (c) { return !c.renews; });
      html += '<div class="block">' + sectionH('Renewals, the next twelve months', '', 'pro-renew') + '<div class="panel tl-card">' +
        (rn.length ? lineHTML(rn.map(function (c) { var dd = A.days(DEMO_TODAY, c.renews); return { date: c.renews, title: c.type + ' cover renews · ' + c.covers, sub: c.insurer + (dd > 30 && dd <= 60 ? ' · in ' + dd + ' days' : ''), chip: dd <= 30 ? 'In ' + dd + ' days' : '', att: dd <= 30 }; }), { today: true, label: 'Renewals over the next twelve months' }) : '<p class="help">Nothing renews in the next twelve months.</p>') +
        (none.length ? '<p class="help ln-foot">No renewal date: ' + none.map(function (c) { return e(c.type) + ' cover on ' + e(c.covers) + ' (' + e(c.insurer) + ')'; }).join(', ') + '.</p>' : '') + '</div></div>';
      var sumT = S.cover.reduce(function (s2, c) { return s2 + (c.sum || 0); }, 0), premT = S.cover.reduce(function (s2, c) { return s2 + (c.premium || 0); }, 0);
      html += '<div class="block">' + sectionH('Every policy', '', ['pro-life', 'pro-home']) + '<div class="data-table" tabindex="0" role="region" aria-label="Cover" data-sort-key="cover"><table><thead><tr>' +
        sth('Cover', 'text', 'asc') + sth('Covers', 'text', 'asc') + sth('Sum insured', 'num', 'desc', 'num', 'desc', '', 'sum-insured') + sth('Premium a year', 'num', 'desc', 'num', '', '', 'premium') + sth('Renews', 'date', 'asc', '', '', '', 'renews') + gth('Beneficiaries', 'beneficiary') + '<th scope="col">Schedule</th></tr></thead><tbody>' +
        S.cover.slice().sort(function (a2, b2) { return (b2.sum || 0) - (a2.sum || 0); }).map(function (c) {
          return '<tr data-row="cov:' + c.id + '"><td data-v="' + e(c.type.toLowerCase()) + '">' + e(c.type) + '<span class="cell-sub">' + e(c.insurer) + '</span></td><td>' + e(c.covers) + '</td><td class="num" data-v="' + (c.sum || '') + '">' + (c.sum ? A.money(c.sum) : c.monthly ? A.money(c.monthly) + '<span class="cell-sub">a month</span>' : '<span class="unknown">—</span>') + '</td><td class="num" data-v="' + (c.premium || '') + '">' + (c.premium ? A.money(c.premium) : '<span class="unknown">—</span>') + '</td>' +
            '<td data-v="' + (c.renews || '') + '">' + (c.renews ? A.date(c.renews) : '—') + (soon.indexOf(c.id) > -1 ? '<span class="cell-sub"><span class="status-label attention">In ' + A.days(DEMO_TODAY, c.renews) + ' days</span></span>' : '') + '</td>' +
            '<td>' + (c.beneficiaries ? e(c.beneficiaries) + '<span class="cell-sub">named ' + A.date(c.nominated) + '</span>' : '<span class="unknown">—</span>') + '</td>' +
            '<td>' + (c.doc && A.doc(c.doc) ? '<a class="link" href="#/vault/doc/' + c.doc + '" data-act="doc" data-id="' + c.doc + '" style="font-size:var(--text-label)">In the vault</a>' : uploadKey('Upload', true, 'c:' + c.id)) + '</td></tr>';
        }).join('') + '</tbody><tfoot><tr><td>Every policy<span class="cell-sub">' + S.cover.length + ' in all</span></td><td></td><td class="num">' + A.money(sumT) + '</td><td class="num">' + A.money(premT) + '</td><td></td><td></td><td></td></tr></tfoot></table></div>' +
        '<p class="help">Renewal dates are also in the Timeline. A gap is named here only when a rule finds one; nothing here is advice.</p></div>' +
        nextItems([['The protection review', 'What is covered, what is missing and what needs attention, from rules like “home cover below the recorded value”.'], ['Resilience', 'How long the household holds if income stops, and whether the emergency fund is where you want it.']]) + opensNext('protection');
    }
    return html + '</main>';
  }
  function chk(ok, title, sub, action) {
    return '<div class="record">' + (ok ? A.ic('check') : A.ic('info')) + '<div class="record-main"><span class="record-title">' + e(title) + '</span>' + (sub ? '<span class="record-sub">' + e(sub) + '</span>' : '') + '</div>' +
      '<div class="record-meta">' + (action || '<span class="status-label ' + (ok ? 'ok">Done' : 'neutral">Not yet') + '</span>') + '</div></div>';
  }

  /* ── SUCCESSION ──────────────────────────────────────────────────────── */
  function sucWill() {
    var S = A.S, w = S.will, law = A.adviser(w.lawyer), dc = A.doc(w.doc);
    var yrs = w.reviewed ? Math.floor(A.days(w.reviewed, DEMO_TODAY) / 365.25) : null;
    var html = '<div class="panel"><div class="intro"><span class="eyebrow">The will, and where it is</span><h2 class="title">' + (w.exists === 'Yes' ? 'Recorded' : 'Not recorded yet') + '</h2></div><dl class="pairs">' +
      '<div><dt>Is there a will</dt><dd>' + e(w.exists) + ' · ' + e(w.kind) + '</dd></div>' +
      '<div><dt>Signed</dt><dd>' + A.date(w.signed) + '</dd></div>' +
      '<div><dt>Last read</dt><dd>' + A.date(w.reviewed) + (yrs != null ? '<span class="pair-note">' + yrs + ' years ago</span>' : '') + '</dd></div>' +
      '<div><dt>' + gl('original', 'Where the original is') + '</dt><dd>' + e(w.original) + '</dd></div>' +
      '<div><dt>' + gl('executor', 'Executors') + '</dt><dd>' + e(w.executors) + '</dd></div>' +
      '<div><dt>Attorney</dt><dd>' + (law ? e(law.name) + ', ' + e(law.firm) : '—') + '</dd></div>' +
      '<div><dt>Read again by</dt><dd>' + A.date(w.reviewBy) + '<span class="pair-note">Your date. It is in the Timeline.</span></dd></div>' +
      '<div><dt>Copy on file</dt><dd>' + (dc ? '<a class="link" href="#/succession/will" data-act="doc" data-id="' + dc.id + '">' + e(dc.name) + '</a>' : '—') + '</dd></div></dl></div>';
    return html;
  }
  function sucBenef() {
    var S = A.S;
    return '<div class="block">' + '<p class="help">A ' + gl('beneficiary', 'beneficiary') + ' named on a retirement account or a policy can receive money outside the will. The designations sit here beside it.</p><div>' +
      S.cover.filter(function (c) { return c.beneficiaries; }).map(function (c) {
        var old = A.days(c.nominated, DEMO_TODAY) > 365 * 5;
        return '<div class="record">' + A.ic('users') + '<div class="record-main"><span class="record-title">' + e(c.type) + ' cover on ' + e(c.covers) + ' → ' + e(c.beneficiaries) + '</span><span class="record-sub">' + e(c.insurer) + ' · named ' + A.date(c.nominated) + '</span></div>' +
          '<div class="record-meta"><span class="status-label neutral">' + (old ? 'Over five years old' : 'Recorded') + '</span></div></div>';
      }).join('') + '</div></div>';
  }
  function succession(r) {
    var sub = r.sub;
    if (!sub) return sucSuggested();
    var T = { will: 'The will', family: 'Family', beneficiaries: 'Beneficiaries' };
    var actions = sub === 'will' ? uploadKey('Upload a copy', false, 'will').replace('class="key"', 'class="key key-secondary"') + '<button class="key" type="button" data-act="edit-will">Update the will record</button>' :
      sub === 'family' ? '<a class="key key-secondary" href="#/records/family">Edit in Records</a>' : '';
    var lead = { will: 'Whether there is a will, when it was signed and last read, who the executors are, and where the original is.',
      family: 'The family from Records, read-only, with the roles the record already holds.',
      beneficiaries: 'The people named on policies and accounts, who can receive money outside the will.' }[sub];
    var html = '<main class="screen">' + deskPage('succession', T[sub], actions, lead);
    if (sub === 'family') html += familyPage('succession', r);
    else if (sub === 'beneficiaries') html += sucBenef();
    else html += sceneWill() + sucWill() +
      nextItems([['Who it goes to', 'The people it goes to, including the complicated parts, and who has been told.'], ['Roles', 'Executors, guardians, trustees and powers of attorney, and whether each one knows.'], ['The ‘if something happens’ letter', 'Where things are and who to call first, written while it is easy.'], ['The succession record', 'Everything owned, owed and insured, with the rules and the reasoning, as of a date.']]) + opensNext('succession');
    return html + '</main>';
  }

  /* ── LEARN · THE MAP GROWS (29 Sep 2026) ──────────────────────────────────────────────────
     Christian: "implement the new learn concept visuals based on the attached learn sandbox …
     create the full map, and paths with quests around all the aspects of the platform for the
     launch stage … lets try to make this platform engaging and fun to learn." The sandbox of
     28 Sep (Finna_Learn_Map_Grows_Sandbox_Sep2026.html), built into the app:
       the Map    one tab for each desk, read top to bottom, each headed by The First Picture (the
                  trunk). Names only on the tree; the counts, the state and the one primary key sit
                  in the card beside it (L-1, L-1a). A longer path is a longer stretch.
       a leaf     one quest answered, on the stretch below its path. Texture only (L-2).
       a bud      the next path, dashed: one step ahead on each branch, and nothing deeper. No padlock.
       the rings  rank as growth rings: a ring closes, the next starts outside it. Rings only add.
       the seal   a certificate: the mark's own core inside a ring, in Bullion once earned (L-3).
       the week   a leaf for each day with a quest; a day without is only an outline, never a
                  broken streak (L-5).
     Ceremony is quiet: a badge draws itself, a ring closes, a certificate fills with Bullion. No
     confetti, no sound, nothing to post, no leaderboard. The catalogue is learn.js; the state is
     read through A.learnPath (see the core). */
  var LM = A.LM, STAGES = LM.STAGES, LDESKS = LM.DESKS;
  /* the Map's last tab is the Financial Identity (29 Sep 2026), in place of the dashed "Side branches ·
     later"; philanthropy, owning a business, property and moving country come later as tabs of their own (L-1b) */
  function lp(id) { return A.learnPath(id); }
  function lpaths() { return A.learnPaths(); }
  function fmt(n) { return Number(n).toLocaleString('en-US'); }
  function minsLeft(p) { return Math.max(1, Math.round(p.minutes * (p.quests - p.done) / p.quests)); }
  function deskName(k) { return k === 'trunk' ? 'The trunk' : A.DESKS[k] ? A.DESKS[k].noun : ''; }
  function deskPlate(k) { return A.DESKS[k] ? A.sectionIcon(A.DESKS[k].icon) : ''; }
  function questHref(p) { return A.learnHref(p); }
  function ordinal(n) { return ['', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth'][n] || n + 'th'; }

  /* ── the marks: done (filled, a tick), under way (an arc), open (a ring), next (dashed); a
     certificate path carries the mark's core, filled in Bullion when earned ─────────────────── */
  var LM_CORE = 'M12 6.6A11.22 11.22 0 0 1 17.4 12A11.22 11.22 0 0 1 12 17.4A11.22 11.22 0 0 1 6.6 12A11.22 11.22 0 0 1 12 6.6Z';
  var LM_LEAF = 'M11 20.5Q3.2 11.5 11 1.5Q18.8 11.5 11 20.5Z';
  function mk(state, cert, frac, cls) {
    var R = 10.5, C = 2 * Math.PI * R;
    var s = '<svg class="lmk is-' + state + (cert ? ' is-cert' : '') + (cls ? ' ' + cls : '') + '" viewBox="0 0 24 24" aria-hidden="true"><circle class="b" cx="12" cy="12" r="' + R + '"/>';
    if (state === 'progress') s += '<circle class="arc" cx="12" cy="12" r="' + R + '" transform="rotate(-90 12 12)" stroke-dasharray="' + (C * Math.max(0.04, Math.min(1, frac || 0))).toFixed(2) + ' ' + C.toFixed(2) + '"/>';
    if (cert) s += '<path class="core" d="' + LM_CORE + '"/>';
    else if (state === 'done') s += '<path class="tick" d="M7.4 12.4l3.1 3.1 6.1-6.5"/>';
    return s + '</svg>';
  }
  function mst(p) { return p.state === 'done' ? 'done' : p.state === 'progress' ? 'progress' : p.state === 'next' ? 'next' : 'open'; }
  function lmark(p, big) { return mk(mst(p), p.cert || p.cls === 'certificate', p.quests ? p.done / p.quests : 0, big ? 'is-big' : ''); }

  /* ── the rings: every ring reached, closed; the current one an arc on its track ────────────── */
  function rings(xp, px, opt) {
    opt = opt || {};
    var R = A.ring(xp), closed = R.r - 1, step = 7, r0 = 8;
    function rad(k) { return r0 + k * step; }
    var cur = rad(closed + 1), ext = Math.max(cur + 5, rad(2) + 6);
    var s = '<svg class="lm-rings" width="' + px + '" height="' + px + '" viewBox="' + (-ext) + ' ' + (-ext) + ' ' + (2 * ext) + ' ' + (2 * ext) + '" role="img" aria-label="Rank ' + R.r + ' of 12. ' +
      closed + (closed === 1 ? ' ring' : ' rings') + ' closed' + (R.hi ? ', the next ' + Math.round(R.frac * 100) + '% of the way round' : '') + '.">';
    for (var k = 1; k <= closed; k++) {
      var isNew = opt.newRing === k, L = (2 * Math.PI * rad(k)).toFixed(1);
      s += '<circle class="closed' + (isNew ? ' is-new' : '') + '" r="' + rad(k) + '"' + (isNew ? ' style="--len:' + L + '" transform="rotate(-90)"' : '') + '/>';
    }
    if (R.hi) {
      var C = 2 * Math.PI * cur, from = opt.fromFrac != null ? opt.fromFrac : R.frac;
      s += '<circle class="track" r="' + cur + '"/><circle class="arc" r="' + cur + '" transform="rotate(-90)" stroke-dasharray="' + C.toFixed(1) + '" stroke-dashoffset="' + (C * (1 - from)).toFixed(1) + '" data-to="' + (C * (1 - R.frac)).toFixed(1) + '"/>';
    }
    return s + '<circle class="pith" r="3"/></svg>';
  }

  /* one desk's branch in small: the last path done, the paths live, and the bud */
  function lmTip(desk) {
    var ps = lpaths().filter(function (p) { return p.desk === desk; });
    var done = ps.filter(function (p) { return p.state === 'done'; }).slice(-1), live = ps.filter(function (p) { return p.state === 'open' || p.state === 'progress'; }),
      nx = ps.filter(function (p) { return p.state === 'next'; }).slice(0, 1), pick = done.concat(live, nx);
    if (pick.length > 3) pick = done.concat(live);
    if (pick.length > 3) pick = live.slice(0, 3);
    return '<div class="lm-tip-stem">' + pick.map(function (p) { return '<div class="lm-tip-row is-' + p.state + '">' + lmark(p) + '<b>' + e(p.title) + '</b></div>'; }).join('') + '</div>';
  }

  /* THE CONCEPT (11 Oct 2026, prompts 12–14): Learn is one page; the Map's routes open it at their domain, so the
     tutorial's addresses keep working. The old overview, the Map and the old path, quest, test and ceremony pages
     were removed on 14 Oct 2026 (Rose: code that is not used is deleted). */
  function learn(r) {
    if (r.sub === 'map') return lxHome(r.rest[0]);
    if (r.sub === 'identity' && LI) return learnIdentity(r);
    if (r.sub === 'path' && r.rest[1] === 'quest') return lxQuest(r.rest[0], parseInt(r.rest[2], 10));
    if (r.sub === 'path' && r.rest[1] === 'test') return lxTest(r.rest[0]);
    if (r.sub === 'path' && r.rest[1] === 'done') return lxCere(r.rest[0]);
    if (r.sub === 'path') return lxPath(r.rest[0]);
    if (r.sub === 'progress') return lxPage('In progress', learnProgress());
    if (r.sub === 'earned') return lxPage('Certificates and badges', learnEarned());
    return lxHome();
  }



  /* IN PROGRESS — the paths started, then the paths open to start */
  function lpItem(p) {
    var key = p.state === 'progress' ? '<a class="key key-s" href="' + questHref(p) + '">' + (p.testReady ? 'Take the test' : 'Continue') + '</a>' : '<a class="key key-s key-secondary" href="' + questHref(p) + '">Start</a>';
    return '<div class="lp-item">' + lmark(p) + '<div class="lp-item-main"><a class="lp-item-t" href="#/learn/path/' + p.id + '">' + e(p.title) + '</a>' +
      '<span class="lp-item-sub">' + e(deskName(p.desk)) + ' · ' + e(p.testReady ? 'every quest answered, the test is next' : p.state === 'progress' ? p.done + ' of ' + p.quests + ' · about ' + minsLeft(p) + ' min left' : p.quests + ' quests · about ' + p.minutes + ' min') + (p.cert ? ' · ends in a certificate' : ' · ends in a badge') + '</span>' +
      (p.state === 'progress' ? '<span class="meter" aria-hidden="true"><i style="width:' + (p.done / p.quests * 100).toFixed(1) + '%"></i></span>' : '') + '</div>' + key + '</div>';
  }
  function learnProgress() {
    var ps = lpaths().filter(function (p) { return p.desk !== 'trunk'; }), started = ps.filter(function (p) { return p.state === 'progress'; }), open = ps.filter(function (p) { return p.state === 'open'; });
    var idp = LI ? idProgressItem(true) : '', n = started.length + (idp ? 1 : 0);
    return '<main class="screen lm-screen">' + placeHead('In progress', 'Every path you have started, where you left it. Nothing expires.') +
      '<section class="block">' + sectionH('Started · ' + n) + (n ? '<div class="lp-items">' + idp + started.map(lpItem).join('') + '</div>' : '<p class="help">Nothing started yet. Any path below starts with its first quest.</p>') + '</section>' +
      (open.length ? '<section class="block">' + sectionH('Open to start · ' + open.length) + '<div class="lp-items">' + open.map(lpItem).join('') + '</div></section>' : '') + '</main>';
  }

  /* CERTIFICATES AND BADGES — on file, then the certificates on the way */
  function learnEarned() {
    var ps = lpaths(), done = ps.filter(function (p) { return p.state === 'done'; }).sort(function (a, b) { return (b.earned || '').localeCompare(a.earned || ''); });
    var coming = ps.filter(function (p) { return p.cert && p.state !== 'done' && p.state !== 'hidden'; });
    var html = '<main class="screen lm-screen">' + placeHead('Certificates and badges', 'A badge records a path completed. A certificate records understanding shown in a test, and is the only thing that opens access.');
    var ide = LI ? idEarned() : '';
    html += '<section class="block">' + sectionH('On file · ' + (done.length + (ide ? 1 : 0))) + (done.length || ide ? '<div class="medals">' + ide + done.map(function (p) {
      return '<a class="panel medal' + (p.cert ? ' is-cert' : '') + '" href="#/learn/path/' + p.id + '">' + lmark(p, true) + '<span class="medal-t"><span class="eyebrow">' + (p.cert ? 'Certificate of Understanding' : 'Badge') + '</span>' +
        '<b>' + e(p.title) + '</b><span>' + (p.cert ? 'Demonstrated understanding' : 'Completed') + (p.earned ? ' · ' + A.date(p.earned) : '') + '</span></span></a>';
    }).join('') + '</div>' : '<p class="help">Nothing earned yet. The first badge comes with the first path you finish.</p>') + '</section>';
    if (coming.length) html += '<section class="block">' + sectionH('Certificates on the way') + '<div class="lp-items">' + coming.map(lpItem).join('') + '</div></section>';
    return html + '</main>';
  }


  /* ── LEARN · THE VIDEOS (3 Oct 2026) ──────────────────────────────────────────────────────
     Christian: "we should have room for some videos … short videos with captions and the description
     underneath, which you can unfold and read instead". LEARN.VIDEOS places each: a path's page shows it in
     full; a quest shows it folded above its answers ("Before you answer"), opened with a tap. Three layers:
     the video with captions (a <track>), one line under it, and the whole of it as text under "Read it
     instead". While a video is in production its frame says so, and the text carries it. */
  var LV = LM.VIDEOS || {};
  /* place: a path id, 'path.n', 'tool:<id>', 'learn', 'test', 'identity', 'identity.n' or 'side.n' (learn.js, VIDEOS);
     lead: the folded row's first words, "Before you answer" unless the place says otherwise */
  function lvFor(place, mode, lead) {
    var ids = Object.keys(LV).filter(function (k) { return (LV[k].at || []).indexOf(place) > -1; });
    return ids.length ? lvBox(ids[0], mode, lead) : '';
  }
  /* a finished video is found by its name, the production paper's render names (design repo, Claude outputs/learn-films/
     render.py): videos/learn-<id>-<fmt>-<mode>.mp4 and its poster, 9:16 on a phone and 16:9 elsewhere, light or dark to
     match the page, and one caption file for every format. `ready: true` in learn.js turns it on; `src` overrides. */
  function lvFiles(id) {
    var v = LV[id];
    if (v.src) return { src: v.src, poster: v.poster || '', vtt: v.vtt || '', fmt: '16x9' };
    if (!v.ready) return null;
    var fmt = window.innerWidth <= 768 ? '9x16' : '16x9', md = document.documentElement.getAttribute('data-mode') === 'dark' ? 'dark' : 'light', b = 'videos/learn-' + id;
    return { src: b + '-' + fmt + '-' + md + '.mp4', poster: b + '-poster-' + fmt + '-' + md + '.jpg', vtt: b + '.en.vtt', fmt: fmt };
  }
  function lvLen(sec) { var m = Math.floor(sec / 60), r = sec % 60; return m ? m + ' min' + (r ? ' ' + r + ' s' : '') : r + ' s'; }
  function lvFrame(id) {
    var v = LV[id], f = lvFiles(id);
    if (f) return '<video class="lv-video" controls playsinline preload="metadata"' + (f.poster ? ' poster="' + e(f.poster) + '"' : '') + ' aria-label="' + e(v.t) + '">' +
      '<source src="' + e(f.src) + '" type="video/mp4">' + (f.vtt ? '<track kind="captions" src="' + e(f.vtt) + '" srclang="en" label="English" default>' : '') + '</video>';
    return '<div class="lv-ph" role="img" aria-label="' + e('Video in production: ' + v.t + ', ' + lvLen(v.sec)) + '">' +
      '<span class="lv-play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M9 7.2v9.6a.6.6 0 0 0 .92.5l7.4-4.8a.6.6 0 0 0 0-1L9.92 6.7a.6.6 0 0 0-.92.5Z"/></svg></span>' +
      '<span class="lv-ph-t"><b>' + e(v.t) + '</b><small>' + lvLen(v.sec) + ' · with captions · in production</small></span>' +
      '<span class="lv-cc" aria-hidden="true">CC</span></div>';
  }
  function lvBox(id, mode, lead) {
    var v = LV[id], f = lvFiles(id), body = '<div class="lv-frame"' + (f ? ' data-fmt="' + f.fmt + '"' : '') + '>' + lvFrame(id) + '</div><p class="lv-desc">' + e(v.short) + '</p>' +
      '<details class="lv-read"><summary>Read it instead</summary><div class="lv-text">' + (v.text || []).map(function (t) { return '<p>' + e(t) + '</p>'; }).join('') + '</div></details>';
    if (mode === 'full') return '<section class="panel lv lv-full" data-lv="' + id + '" aria-label="' + e('Video: ' + v.t) + '"><div class="sg-h"><span class="eyebrow">Watch first · ' + lvLen(v.sec) + '</span></div>' +
      '<h2 class="lv-title">' + e(v.t) + '</h2>' + body + '</section>';
    return '<div class="lv lv-mini" data-lv="' + id + '"><button class="lv-open" type="button" data-act="lv-toggle" aria-expanded="false" aria-controls="lv-b-' + id + '">' +
      '<span class="lv-thumb" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M9 7.2v9.6a.6.6 0 0 0 .92.5l7.4-4.8a.6.6 0 0 0 0-1L9.92 6.7a.6.6 0 0 0-.92.5Z"/></svg></span>' +
      '<span class="lv-t"><small>' + e(lead || 'Before you answer') + ' · a ' + lvLen(v.sec) + ' video</small><b>' + e(v.t) + '</b></span>' + A.ic('chevron', 'lv-chev') + '</button>' +
      '<div class="lv-body" id="lv-b-' + id + '" hidden>' + body + '</div></div>';
  }

  /* after a quest: the explanation, the XP, the next step, and the place it is about */
  var LT_AT = {
    'rec-net': ['#/records/statement', 'Records · Statement'], 'rec-own': ['#/records/own', 'Records · What you own'], 'rec-owe': ['#/records/owe', 'Records · What you owe'],
    'rec-rate': ['#/records/owe', 'Records · What you owe'], 'rec-commit': ['#/records/owe', 'Records · What you owe'], 'rec-stale': ['#/records', 'Records'],
    'rec-source': ['#/records/statement', 'Records · Statement'], 'rec-history': ['#/records/statement', 'Records · Statement'], 'rec-time': ['#/records/timeline', 'Records · Timeline'],
    'rec-advisers': ['#/records/advisers', 'Records · Advisers'], 'rec-family': ['#/records/family', 'Records · Family'], 'vault': ['#/vault', 'The Family Vault'],
    'vault-file': ['#/vault/needs-filing', 'Family Vault · Needs filing'], 'freya': ['#/freya', 'Freya'], 'freya-brief': ['#/freya/briefings', 'Freya · Weekly briefings'],
    'members': ['#/profile/members', 'Profile · Household members'], 'export': ['#/profile/export', 'Profile · Export'],
    'pol-purpose': ['#/policy/rules', 'Governance · Your rules'], 'pol-ranges': ['#/policy/rules', 'Governance · Your rules'], 'pol-liquid': ['#/policy/drift', 'Governance · Drift'],
    'pol-single': ['#/policy/drift', 'Governance · Drift'], 'pol-versions': ['#/policy/rules', 'Governance · Your rules'], 'pol-drift': ['#/policy/drift', 'Governance · Drift'],
    'pol-goals': ['#/policy/planning', 'Governance · Wealth planning'], 'pol-setaside': ['#/policy/planning', 'Governance · Wealth planning'], 'pol-runway': ['#/policy/runway', 'Governance · Retirement runway'],
    'pol-identity': ['#/policy/identity', 'Governance · Financial Identity'], 'pol-boundary': ['#/profile/boundary', 'Profile · The boundary'], 'pol-method': ['#/profile/method', 'Profile · How the numbers work'],
    'inv-hold': ['#/investment/holdings', 'Investment · What you hold'], 'inv-mix': ['#/investment/mix', 'Investment · Mix lab'], 'inv-fees': ['#/investment/fees', 'Investment · Fees'],
    'inv-route': ['#/investment/access', 'Investment · The route to investing'], 'inv-private': ['#/investment/holdings', 'Investment · What you hold'],
    'pro-cover': ['#/protection/cover', 'Protection · Cover'], 'pro-renew': ['#/protection/cover', 'Protection · Cover'], 'pro-life': ['#/protection/cover', 'Protection · Cover'],
    'pro-home': ['#/protection/cover', 'Protection · Cover'], 'pro-safety': ['#/protection/safety', 'Protection · Safety check'],
    'suc-will': ['#/succession/will', 'Succession · The will'], 'suc-review': ['#/succession/will', 'Succession · The will'], 'suc-roles': ['#/succession/will', 'Succession · The will'],
    'suc-benef': ['#/succession/beneficiaries', 'Succession · Beneficiaries'], 'suc-family': ['#/succession/family', 'Succession · Family']
  };
  /* the quiet moment when a ring closes */
  function lmRingVeil(xp) {
    var R = A.ring(xp);
    return '<div class="lm-veil" role="dialog" aria-modal="true" aria-labelledby="lm-veil-t"><section class="panel">' + rings(xp, 120, { newRing: R.r - 1, fromFrac: 0 }) +
      '<span class="eyebrow">Rank ' + R.r + ' of 12</span><h2 id="lm-veil-t">The ' + ordinal(R.r - 1) + ' ring closes</h2><p>' + fmt(xp) + ' XP. Every quest adds to the rings; nothing ever takes one away.</p>' +
      '<button class="key key-l" type="button" data-act="lm-veil-close">Carry on</button></section></div>';
  }


  /* THE TEST — 8 served from the pool of 14, two from each stage; no hints, nothing marked
     until the end, and Freya's bar leaves the screen. 6 to pass; retakes are free. */
  function testNew(id) {
    var pool = LM.POOLS[id] || [], by = [[], [], [], []], draw = [];
    pool.forEach(function (q, i) { (by[q.s] || by[0]).push(i); });
    by.forEach(function (list) { var l = list.slice(); for (var k = 0; k < 2 && l.length; k++) draw.push(l.splice(Math.floor(Math.random() * l.length), 1)[0]); });
    VIEWS.TEST = { id: id, draw: draw, i: 0, picks: [], pick: null, orders: draw.map(function () { var o = [0, 1, 2, 3]; for (var i = 3; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = o[i]; o[i] = o[j]; o[j] = t; } return o; }), done: false };
    return VIEWS.TEST;
  }

  /* ── THE LEARN TAGS (29 Sep 2026) ────────────────────────────────────────────────────────
     Christian: "small tags around the platform showing where the user have not yet completed the
     path or quests related to that topic, module, box, simulation etc." A quest names the places
     it is about (its `tags`); wherever the platform draws one of those places, a small tag sits
     beside its title: an outline leaf and "+40 XP", the leaf the quest will grow on the Map. It
     points at a quest that can be played now (its path open or under way, never a bud: nothing is
     teased) and goes once that quest is answered. The tip names the path and the quest; a tap
     opens the quest, and the quest offers the way back. One tag for each quest on a page, at most
     three to a page, and none in Learn itself. The household can turn them off on Learn's
     overview. */
  var LT_SEEN = {}, LT_N = 0, LT_MAX = 3;
  function ltReset() { LT_SEEN = {}; LT_N = 0; }
  function ltFind(anchors) {
    if (A.S.learn.tags === false) return null;
    var ps = lpaths().filter(function (p) { return p.desk !== 'trunk' && (p.state === 'open' || p.state === 'progress'); });
    ps.sort(function (a, b) { return (b.state === 'progress') - (a.state === 'progress'); });
    for (var a = 0; a < anchors.length; a++) {
      for (var i = 0; i < ps.length; i++) {
        var Q = LM.PATHS[ps[i].id].quests;
        for (var n = 1; n <= Q.length; n++) {
          if (ps[i].answered.indexOf(n) > -1 || (Q[n - 1].tags || []).indexOf(anchors[a]) < 0 || LT_SEEN[ps[i].id + '.' + n]) continue;
          return { p: ps[i], n: n, q: Q[n - 1] };
        }
      }
    }
    return null;
  }
  /* XP AND BADGES STAY IN LEARN (the concept, 11 Oct 2026, prompt 3): the leaf and "+40 XP" no longer sit by titles,
     sections or summary boxes outside Learn. Each desk ends on its Learn more card instead. Kept in the code, off. */
  var LT_ON = false;
  function lt(anchors) {
    if (!LT_ON || LT_N >= LT_MAX) return '';
    var f = ltFind([].concat(anchors)); if (!f) return '';
    LT_SEEN[f.p.id + '.' + f.n] = true; LT_N++;
    return '<a class="lt" href="#/learn/path/' + f.p.id + '/quest/' + f.n + '" data-lt="' + f.p.id + '.' + f.n + '" data-lt-e="Learn · ' + e(f.p.title) + '" data-lt-t="' + e(f.q.t) + '" data-lt-l="Quest ' + f.n + ' of ' + f.p.quests + ' · one question, about a minute"' +
      ' aria-label="' + e('Learn: ' + f.q.t + ', quest ' + f.n + ' of ' + f.p.title + '. 40 XP') + '"><svg viewBox="0 0 22 22" aria-hidden="true"><path d="' + LM_LEAF + '"/></svg><span>+40 XP</span></a>';
  }
  /* a page's own tag, beside its title: the topics each page is about, first match wins */
  var LT_PAGE = {
    'records': ['rec-net', 'rec-stale'], 'records/statement': ['rec-net', 'rec-source', 'rec-history'], 'records/own': ['rec-own', 'rec-stale'], 'records/owe': ['rec-owe', 'rec-rate', 'rec-commit'],
    'records/timeline': ['rec-time'], 'records/family': ['rec-family'],
    'policy': ['pol-drift', 'pol-ranges'], 'policy/rules': ['pol-purpose', 'pol-ranges', 'pol-versions'], 'policy/drift': ['pol-drift', 'pol-liquid', 'pol-single'], 'policy/planning': ['pol-goals', 'pol-setaside'],
    'policy/runway': ['pol-runway'], 'policy/identity': ['pol-identity'], 'profile/boundary': ['pol-boundary'],
    'investment': ['inv-hold', 'inv-mix'], 'investment/holdings': ['inv-hold', 'inv-private', 'pol-single'], 'investment/mix': ['inv-mix'], 'investment/access': ['inv-route'],
    'protection': ['pro-cover', 'pro-renew'], 'protection/cover': ['pro-cover', 'pro-renew', 'pro-home', 'pro-life'], 'protection/safety': ['pro-safety'],
    'succession': ['suc-will', 'suc-review'], 'succession/will': ['suc-will', 'suc-review', 'suc-roles'], 'succession/family': ['suc-family'], 'succession/beneficiaries': ['suc-benef'],
    'vault': ['vault'], 'vault/needs-filing': ['vault-file', 'vault'], 'freya/briefings': ['freya-brief'], 'profile/members': ['members'], 'profile/export': ['export'], 'profile/method': ['pol-method']
  };
  function ltPage(r) {
    if (!LT_ON || r.base === 'learn' || r.base === 'home') return '';
    var k = r.base + (r.path ? '/' + r.path : '');
    return (LT_PAGE[k] ? lt(LT_PAGE[k]) : '') + (LI ? idLt('#/' + k) : '');
  }


  /* ── LEARN · THE FINANCIAL IDENTITY BRANCH (29 Sep 2026) ──────────────────────────────────
     Christian: "replace the grey side branch with the new financial identity branch under learn,
     and also update the Financial Identity under policy with character type and status of the
     financial identity." From the sandbox of 28 Sep (Finna_Financial_Identity_Sandbox): a branch
     that is learning, not a form. The Map's last tab, in place of the dashed "Side branches ·
     later", grows the path Your Financial Identity from The First Picture, a stage at a time;
     check-ups run off Foundation, and after Structure the side tree, Family Office Identity, ends
     in the Family Charter. The answers draw a character: the crest (the archetype's glyph in a
     ring, dashed while a first reading, a second ring once the record has checked it, never gold),
     a title of its own, a line under it, six traits with two good ends (a band while indicated, a
     point once firm, no numbers, a fixed order) and the pieces built. Rulings ID-1 to ID-14 are
     built as the sandbox recommends and are still for Christian, the CCO and counsel. */
  var LI = A.LI;
  function idI() { return A.idS(); }
  /* the side tree is for two: it opens after Structure once a second member has joined */
  function idSideOpen(I) { return A.idStageDone(I || idI()) >= 2 && A.S.members.length > 1; }
  function idCap(t) { return t ? t.charAt(0).toUpperCase() + t.slice(1) : ''; }
  function idOpt(list, k) { var o = (list || []).filter(function (x) { return x[0] === k; })[0]; return o ? o[1] : ''; }
  function idGlyph(arch) { return (LI && LI.GLYPH[arch]) || ''; }
  function idCrest(arch, state, size, cls) {
    var s = size || 64;
    return '<svg class="id-crest is-' + (state || 'found') + (cls ? ' ' + cls : '') + '" viewBox="0 0 64 64" width="' + s + '" height="' + s + '" aria-hidden="true">' +
      '<circle class="o" cx="32" cy="32" r="30"/>' + (state === 'firm' ? '<circle class="i" cx="32" cy="32" r="26"/>' : '') +
      '<g transform="translate(14 14) scale(1.5)"><path class="g" d="' + idGlyph(arch) + '"/></g></svg>';
  }

  /* ── the character, read from the answers ────────────────────────────────────────────────── */
  function idVals(a, who) {
    var I = idI(), sd = A.idStageDone(I), P = LI.POS, v = {}, lauren = who === 'lauren';
    var aimP = P.aim[a.purpose] + (a.bad === 'cash' ? .1 : a.bad === 'rebalance' ? -.04 : 0), firm = !lauren && sd >= 2;
    v.aim = { pos: aimP, st: firm ? 'firm' : 'ind' };
    v.horizon = { pos: P.horizon[a.horizon], st: firm ? 'firm' : 'ind' };
    if (a.reach) v.reach = { pos: P.reach[a.reach], st: firm ? 'firm' : 'ind' };
    if (a.decide) v.deciding = { pos: P.deciding[a.decide], st: I.side >= 4 ? 'firm' : 'ind' };
    if (a.breadth && a.breadth !== 'none') v.breadth = { pos: P.breadth[a.breadth], st: firm ? 'firm' : 'ind' };
    var rl = I.more.rules || (I.more.alone ? (I.more.alone === 'both' ? 'always' : 'above') : '');
    if (rl && I.side >= 1) v.rules = { pos: P.rules[rl] + (a.bad === 'rebalance' ? .06 : 0), st: I.side >= 4 ? 'firm' : 'ind' };
    return v;
  }
  function idStageLine(I) {
    var sd = A.idStageDone(I); if (sd >= 4) return 'Complete';
    var stg = LI.STAGES[sd], before = sd ? LI.SQ.slice(0, sd).reduce(function (a, b) { return a + b; }, 0) : 0;
    return 'Stage ' + stg.n + ' · ' + stg.name + ' · ' + Math.max(0, I.main - before) + ' of ' + LI.SQ[sd];
  }
  function idMember(who) {
    var I = idI(), sd = A.idStageDone(I);
    if (who === 'lauren') {
      var rl = A.idResolve(LI.LAUREN), m = A.S.members.filter(function (x) { return x.id !== A.S.viewer; })[0];
      return { key: 'lauren', name: m ? m.name : 'Lauren Johnsen', initials: 'LJ', role: 'Member · shares her identity with the household', res: rl, crest: 'found', traits: idVals(LI.LAUREN, 'lauren'),
        built: 6, stageLine: 'Foundation complete', done: false, status: 'From her Foundation answers · 6 quests', updated: I.dates.f1 || DEMO_TODAY };
    }
    var r = A.idResolve(I.ans), last = I.checkups[I.checkups.length - 1];
    var res = { arch: I.title.arch, mod: I.title.mod, title: 'The ' + I.title.mod + ' ' + I.title.arch, sig: r.sig, sigLine: r.sigLine, chips: r.chips };
    var status = last ? 'Read again at your check-up · ' + A.date(last.date) : sd >= 2 ? 'Checked against your record · Structure, ' + A.date(I.stages.s2) : sd >= 1 ? 'From your Foundation · 6 quests, ' + A.date(I.stages.s1) : 'A first reading · from four answers in the tutorial';
    var me = A.S.members.filter(function (x) { return x.id === A.S.viewer; })[0];
    return { key: 'me', name: me ? me.name : 'Michael Johnsen', initials: (me ? me.name : 'M J').split(' ').map(function (x) { return x.charAt(0); }).join('').slice(0, 2), role: 'Member · you', res: res,
      crest: sd >= 2 ? 'firm' : sd >= 1 ? 'found' : 'first', traits: idVals(I.ans), built: I.main, stageLine: idStageLine(I), done: sd >= 4, status: status, updated: I.dates['q' + I.main] || DEMO_TODAY };
  }
  function idHhTitle() { var a = idI().title.arch, b = A.idResolve(LI.LAUREN).arch; return a === b ? 'A ' + a + ' household' : 'A ' + a + '-and-' + b + ' household'; }
  var ID_RULES = { always: 'Both agree, every time', above: 'Both agree above an amount we set', lead: 'One leads, the other is told', open: 'Not yet agreed' };
  function idHousehold() {
    var I = idI(), m = idMember('me'), l = idMember('lauren'), best = 'reach', gap = -1;
    LI.TRAITS.forEach(function (t) { if (m.traits[t.k] && l.traits[t.k]) { var g = Math.abs(m.traits[t.k].pos - l.traits[t.k].pos); if (g > gap) { gap = g; best = t.k; } } });
    var mf = m.name.split(' ')[0], lf = l.name.split(' ')[0];
    var lines = { reach: mf + ' is comfortable committing more of it for years; ' + lf + ' prefers most of it reachable. Both positions are kept as given.',
      aim: mf + ' leans towards growing it; ' + lf + ' towards keeping it. Both are kept as given.', horizon: 'You picture different lengths of time. Both are kept as given.',
      deciding: 'One of you decides more alone than the other. Both are kept as given.' };
    return { members: [m, l], title: idHhTitle(), diff: best, diffLine: lines[best] || 'Both are kept as given.',
      line: 'Both of you have said what the money is for. Where you differ is named and kept, never averaged.',
      facts: [['Decision rule', I.more.rules ? ID_RULES[I.more.rules] : 'Not yet agreed'], ['Family Charter', I.charter === 'agreed' ? 'Version 1 · ' + A.date(I.dates.charter) : I.charter === 'draft' ? 'A draft' : I.side ? 'Being written · ' + I.side + ' of 6' : 'Not started']] };
  }

  /* a trait: a line with two good ends. A soft band while indicated, a point once firm, the line
     dashed while not yet asked. No number anywhere, and never sorted. */
  function idTrait(tr, v, opt) {
    opt = opt || {};
    var st = v ? v.st : 'none', pos = v ? Math.max(4, Math.min(96, v.pos * 100)) : 50, w = st === 'firm' ? 9 : 30, mark = '';
    if (opt.pair) {
      opt.pair.forEach(function (p, i) {
        if (!p.v) return;
        var pp = Math.max(4, Math.min(96, p.v.pos * 100));
        mark += '<span class="id-tr-band is-' + p.v.st + ' c' + i + '" style="left:' + (pp - (p.v.st === 'firm' ? 4.5 : 15)).toFixed(1) + '%;width:' + (p.v.st === 'firm' ? 9 : 30) + '%"></span>' +
          '<span class="id-tr-who c' + i + '" style="left:' + pp.toFixed(1) + '%">' + e(p.i) + '</span>';
      });
    } else if (st !== 'none') {
      mark = '<span class="id-tr-band is-' + st + (opt.moved ? ' is-moved' : '') + '" style="left:' + (pos - w / 2).toFixed(1) + '%;width:' + w + '%"></span>' +
        (st === 'firm' ? '<span class="id-tr-dot' + (opt.moved ? ' is-moved' : '') + '" style="left:' + pos.toFixed(1) + '%"></span>' : '');
    }
    var state = opt.pair ? (opt.note || '') : st === 'firm' ? 'Firm' : st === 'ind' ? 'Indicated' : 'Opens at ' + tr.opens;
    return '<div class="id-tr is-' + (opt.pair ? 'pair' : st) + '" role="group" aria-label="' + e(tr.name + ': between ' + tr.l + ' and ' + tr.r + '. ' + (st === 'none' && !opt.pair ? 'Not yet asked.' : state)) + '">' +
      '<span class="id-tr-n">' + e(tr.name) + '</span><span class="id-tr-t" aria-hidden="true"><span class="id-tr-line"></span>' + mark + '</span>' +
      '<span class="id-tr-s">' + e(state) + '</span><span class="id-tr-ends" aria-hidden="true"><span>' + e(tr.l) + '</span><span>' + e(tr.r) + '</span></span></div>';
  }
  function idTraits(vals, opt) {
    opt = opt || {};
    return '<div class="id-traits' + (opt.compact ? ' is-compact' : '') + '">' + LI.TRAITS.map(function (tr) { return idTrait(tr, vals[tr.k], { moved: opt.moved && opt.moved.indexOf(tr.k) > -1 }); }).join('') + '</div>';
  }
  /* what the household has built: seventeen pieces, by stage, each on the desk that owns it */
  function idBuilt(n, fresh) {
    return '<div class="id-built">' + LI.STAGES.map(function (stg, si) {
      return '<div class="id-built-st"><span class="id-built-h">' + e(stg.name) + '</span><div class="id-built-row">' + LI.QUESTS.filter(function (q) { return q.s === si; }).map(function (q) {
        var on = q.n <= n, cls = 'id-piece' + (on ? ' is-on' : '') + (fresh === q.n ? ' is-new' : ''), inner = A.sectionIcon(q.plate) + '<span>' + e(q.builds) + '</span>';
        return on ? '<a class="' + cls + '" href="' + q.lives[0] + '" data-hint="Lives on ' + e(q.lives[1]) + '">' + inner + '</a>' : '<span class="' + cls + '" data-hint="Built by quest ' + q.n + '">' + inner + '</span>';
      }).join('') + '</div></div>';
    }).join('') + '</div>';
  }
  /* the member card */
  function idCard(M, opt) {
    opt = opt || {};
    var R = M.res;
    var head = '<div class="id-card-top"><span class="id-av' + (M.key === 'lauren' ? ' c1' : '') + '">' + e(M.initials) + '</span><span class="id-who"><b>' + e(M.name) + '</b><span>' + e(M.role) + '</span></span>' +
      '<span class="status-label ' + (M.done ? 'ok' : 'neutral') + ' id-stage">' + e(M.stageLine) + '</span></div>';
    var id = '<div class="id-card-id">' + idCrest(R.arch, M.crest, opt.compact ? 52 : 76, opt.fresh ? 'is-new' : '') +
      '<div class="id-card-name"><span class="eyebrow">Financial Identity · ' + (M.crest === 'first' ? 'a first reading' : M.crest === 'found' ? 'from Foundation' : 'checked against the record') + '</span><h2 class="id-title' + (opt.fresh ? ' is-new' : '') + '">' + e(R.title) + '</h2>' +
      '<p class="id-sig">' + e(idCap(R.sigLine)) + '</p>' + (opt.compact ? '' : '<div class="id-chips">' + R.chips.map(function (c) { return '<span class="status-label neutral">' + e(c) + '</span>'; }).join('') + '</div>') +
      '<p class="id-status">' + e(M.status) + '</p></div></div>';
    var foot = opt.compact ? '<p class="id-count"><b>Built · ' + M.built + ' of 17</b> · <a class="link" href="#/policy/identity">Open your identity</a></p>' :
      (M.key === 'lauren' ? '' : '<div class="id-card-built"><div class="id-card-bh"><span class="eyebrow">What you have built</span><b>' + M.built + ' of 17</b></div>' + idBuilt(M.built, opt.freshPiece) + '</div>');
    return '<article class="panel id-card' + (opt.compact ? ' is-compact' : '') + '" aria-label="Financial Identity · ' + e(M.name) + '">' + head + id + idTraits(M.traits, { compact: opt.compact, moved: opt.moved }) + foot +
      (opt.compact ? '' : '<p class="id-card-f">Shapes what Learn suggests and how Freya explains. It is not a score, no title is above another, and it never decides what you can access.</p>') + '</article>';
  }
  function idHhCard(opt) {
    opt = opt || {};
    var H = idHousehold(), tr = LI.TRAITS.filter(function (t) { return t.k === H.diff; })[0];
    return '<article class="panel id-card id-hh" aria-label="Family Office Identity">' +
      '<div class="id-card-top"><span class="id-av is-hh">' + e((A.S.household.name.match(/The (\w)/) || [0, 'J'])[1]) + '</span><span class="id-who"><b>' + e(A.S.household.name.replace(/ household$/, ' family office')) + '</b><span>Two members</span></span><span class="status-label neutral id-stage">Household</span></div>' +
      '<div class="id-card-name"><span class="eyebrow">Family Office Identity</span><h2 class="id-title">' + e(H.title) + '</h2><p class="id-status">' + e(H.line) + '</p></div>' +
      '<div class="id-hh-ms">' + H.members.map(function (m, i) { return '<div class="id-hh-m"><span class="id-av' + (i ? ' c1' : '') + '">' + e(m.initials) + '</span><span class="id-who"><b>' + e(m.name.split(' ')[0] + ' · ' + m.res.title) + '</b><span>' + e(m.stageLine) + '</span></span>' + idCrest(m.res.arch, m.crest, 40) + '</div>'; }).join('') + '</div>' +
      '<div class="id-diff"><p><b>Where you differ most: ' + e(tr.name.toLowerCase()) + '.</b> ' + e(H.diffLine) + '</p>' +
        idTrait(tr, null, { pair: H.members.map(function (m) { return { i: m.initials, v: m.traits[tr.k] }; }), note: 'Both kept' }) + '</div>' +
      '<dl class="id-facts">' + H.facts.map(function (f) { return '<div><dt>' + e(f[0]) + '</dt><dd>' + e(f[1]) + '</dd></div>'; }).join('') + '</dl>' +
      '<p class="id-card-f">The household title joins your two archetypes. Nothing about the two of you is averaged.</p></article>';
  }

  /* ── where the branch stands ─────────────────────────────────────────────────────────────── */
  function idStages() {
    var I = idI(), sd = A.idStageDone(I), before = 0;
    return LI.STAGES.map(function (stg, i) {
      var q = LI.SQ[i], done = Math.max(0, Math.min(q, I.main - before)); before += q;
      return { i: i, stg: stg, q: q, done: done, s: i < sd ? 'done' : i === sd ? (done ? 'progress' : 'open') : i === sd + 1 ? 'next' : 'hidden' };
    });
  }
  function idNext() { var I = idI(); return I.main < LI.QUESTS.length ? I.main + 1 : 0; }
  function idHref() {
    var I = idI(), sd = A.idStageDone(I), cu = A.idCheckup();
    if (cu && cu.ready) return '#/learn/identity/checkup';
    if (idSideOpen(I) && I.side < LI.SIDE.length) return '#/learn/identity/side/' + (I.side + 1);
    var n = idNext(); return n ? '#/learn/identity/quest/' + n : '#/policy/identity';
  }
  function idLabel() {
    var I = idI(), sd = A.idStageDone(I), cu = A.idCheckup();
    if (cu && cu.ready) return 'Start the check-up';
    if (idSideOpen(I) && I.side < LI.SIDE.length) return (I.side ? 'Continue' : 'Start') + ' the side tree';
    var n = idNext(); return n ? 'Continue quest ' + n : 'Open your identity';
  }


  /* ── the path, whole: four stages, what each quest builds and where it lives ────────────── */
  function learnIdentity(r) {
    var sub = r.rest[0];
    if (sub === 'quest') return idQuest('q', +r.rest[1]);
    if (sub === 'side') return idQuest('f', +r.rest[1]);
    if (sub === 'stage') return idStagePage(+r.rest[1]);
    if (sub === 'checkup') return idCheckPage();
    var I = idI(), nq = idNext(), sd = A.idStageDone(I), track = '';
    LI.STAGES.forEach(function (stg, si) {
      track += '<li class="qt-stage"><span class="eyebrow">Stage ' + stg.n + ' · ' + e(stg.name) + ' · ' + e(stg.q) + '</span></li>';
      LI.QUESTS.filter(function (q) { return q.s === si; }).forEach(function (q) {
        var s = q.n <= I.main ? 'done' : q.n === nq ? 'progress' : 'open', link = q.n <= I.main || q.n === nq;
        var inner = '<span class="qt-t-in">' + (s === 'progress' ? '<span class="qt-n">Next</span>' : '') + '<span class="qt-q">' + e(q.t) + '</span><span class="id-qt-b">' + A.sectionIcon(q.plate) + e(q.builds) + ' · lives on ' + e(q.lives[1]) + (q.tutorial ? ' · answered in the tutorial' : '') + '</span></span>';
        track += '<li class="qt is-' + s + '">' + mk(s === 'progress' ? 'open' : s) + (link ? '<a class="qt-t" href="#/learn/identity/quest/' + q.n + '">' + inner + '</a>' : '<span class="qt-t">' + inner + '</span>') + '</li>';
      });
      if (si === 1 && A.S.members.length > 1) track += '<li class="qt id-qt-side is-' + (I.side >= 6 ? 'done' : idSideOpen(I) ? 'open' : 'next') + '">' + mk(I.side >= 6 ? 'done' : idSideOpen(I) ? 'open' : 'next') +
        (idSideOpen(I) ? '<a class="qt-t" href="#/learn/identity/side/' + Math.min(6, I.side + 1) + '">' : '<span class="qt-t">') + '<span class="qt-t-in"><span class="qt-n">Beside it, after Structure</span><span class="qt-q">The side tree: Family Office Identity, six quests with ' + e(idMember('lauren').name.split(' ')[0]) + ', to the Family Charter</span></span>' + (idSideOpen(I) ? '</a>' : '</span>') + '</li>';
    });
    track += '<li class="qt qt-end is-' + (sd >= 4 ? 'done' : 'open') + '">' + mk(sd >= 4 ? 'done' : 'open') + '<span class="qt-t"><span class="qt-t-in"><span class="qt-n">The end of the path</span><span class="qt-q">A Completion Certificate: completed, not a test</span></span></span></li>';
    return '<main class="screen lm-screen"><div class="page-head"><div class="intro"><div class="eyebrow-row"><a class="link" href="#/learn/map/identity">The Map</a><span class="eyebrow">Financial Identity · path</span><span class="status-label neutral">' + e(idStageLine(I)) + '</span></div>' +
      '<h1 class="title">Your Financial Identity</h1><p class="lead">Seventeen quests in four stages. Each explains an idea, asks about you, and builds a piece of your family office. There are no wrong answers about you.</p></div>' +
      '<div class="page-head-actions"><a class="key key-l" href="' + idHref() + '">' + e(idLabel()) + '</a></div></div>' +
      '<dl class="lp-facts"><div><dt>Quests</dt><dd class="num">17</dd></div><div><dt>Answered</dt><dd class="num">' + I.main + '</dd></div><div><dt>Built</dt><dd class="num">' + I.main + ' of 17</dd></div><div><dt>Ends in</dt><dd>A Completion Certificate</dd></div></dl>' +
      lvFor('identity', 'full') +
      '<p class="id-band">No test. Each quest has one question about the idea, which works like every other quest; the rest is about you, and every answer can be changed on your identity.</p>' +
      '<section class="panel lm-track-p"><ol class="qtrack lm-track">' + track + '</ol></section></main>';
  }

  /* ── an identity quest: why it matters · the idea · about you · what Finna understood ─────── */
  var ID_STEPS = ['Why it matters', 'The idea', 'About you', 'What Finna understood'];
  function idQSt(kind, n) {
    var k = kind + n, Q = VIEWS.IDQ;
    if (!Q || Q.k !== k) { var I0 = idI(), was = kind === 'f' ? n <= I0.side : n <= I0.main; Q = VIEWS.IDQ = { k: k, kind: kind, n: n, step: was ? 2 : 0, wrong: [], solved: false, picks: [], pick: null, sentence: '', res: null }; }
    return Q;
  }
  function idQuest(kind, n) {
    var I = idI(), isF = kind === 'f', list = isF ? LI.SIDE : LI.QUESTS, q = list[n - 1], sd = A.idStageDone(I);
    if (!q || (isF ? !idSideOpen(I) || n > I.side + 1 : n > I.main + 1)) return learnIdentity({ rest: [] });
    if (!isF && q.tutorial) return idReveal();
    var Q = idQSt(kind, n), done = isF ? n <= I.side : n <= I.main, xp = A.learnXP();
    var where = isF ? 'Family Office Identity · the side tree · quest ' + n + ' of 6' : 'Stage ' + (q.s + 1) + ' · ' + LI.STAGES[q.s].name + ' · quest ' + n + ' of 17';
    var body = '';
    if (Q.step === 0) body = '<section class="panel id-film"><span class="eyebrow">Why it matters</span><h1 class="quest-q">' + e(q.film.t) + '</h1>' + q.film.lines.map(function (l) { return '<p>' + e(l) + '</p>'; }).join('') + lvFor((isF ? 'side.' : 'identity.') + n, 'mini', 'Watch first') + '</section>' +
      '<div class="quest-foot id-foot"><button class="key key-l" type="button" data-act="id-step">Continue' + A.ic('arrow') + '</button>' + (done ? '<span class="help">Answered ' + A.date(I.dates[kind + n]) + '. You can change what you said.</span>' : '') + '</div>';
    else if (Q.step === 1) {
      var order = VIEWS._order('id' + kind, n, 4);
      body = '<span class="status-label neutral quest-chip">The idea · one question</span><h1 class="quest-q" id="quest-q">' + plainQ(q.idea.q, (isF ? 'side.' : 'identity.') + n) + '</h1><p class="help">One answer. This is the only part of the quest with a right answer.</p>' +
        '<div class="answers" role="group" aria-labelledby="quest-q">' + order.map(function (oi, i) {
          var cls = Q.solved && oi === 0 ? ' correct' : Q.wrong.indexOf(oi) > -1 ? ' wrong' : '', dis = Q.solved || Q.wrong.indexOf(oi) > -1 ? ' disabled' : '';
          return '<button class="answer' + cls + '" type="button" data-act="id-pick" data-i="' + oi + '" aria-pressed="' + (Q.pick === oi && !Q.solved) + '"' + dis + '><span class="letter">' + 'ABCD'[i] + '</span><span>' + e(q.idea.o[oi]) + '</span></button>';
        }).join('') + '</div>' +
        (Q.solved ? '<div class="feedback ok"><b>' + (Q.wrong.length ? 'That is it.' : 'Yes.') + '</b> ' + e(q.idea.why) + '</div><div class="quest-foot"><button class="key key-l" type="button" data-act="id-step">Continue' + A.ic('arrow') + '</button></div>' :
          (Q.wrong.length ? '<div class="feedback try"><b>Not quite.</b> ' + e(q.idea.hint) + ' Choose again: it costs nothing, and a second try earns the same.</div>' : '') +
          '<div class="quest-foot"><button class="key key-l" type="button" data-act="id-check"' + (Q.pick == null ? ' disabled' : '') + '>Check my answer' + A.ic('arrow') + '</button></div>');
    } else if (Q.step === 2) body = idAbout(kind, q, Q);
    else body = idUnderstood(kind, q, Q);
    var from = VIEWS.LT_FROM, leave = from ? '<a class="link" href="' + from.href + '">Back to ' + e(from.label) + '</a>' : '<a class="link" href="#/learn/map/identity">Leave for now</a>';
    return '<main class="screen lm-screen"><div class="id-qwrap"><div class="quest" data-idq="' + kind + n + '">' +
      '<div class="quest-top"><span class="lm-qwhere"><b>' + e(q.t) + '</b> · ' + e(where) + '</span><span class="lm-qright"><span class="lm-xp" data-lm-xp>' + fmt(xp) + ' XP</span>' + leave + '</span></div>' +
      '<ol class="id-steps" aria-label="The quest, in four parts">' + ID_STEPS.map(function (t, i) { return '<li class="' + (i < Q.step ? 'done' : i === Q.step ? 'now' : '') + '"><i></i><span>' + t + '</span></li>'; }).join('') + '</ol>' +
      body + '</div><aside class="id-side" aria-label="' + (isF ? 'The two of you' : 'Your identity, as it moves') + '"><span class="eyebrow">' + (isF ? 'The two of you' : 'Your identity, as it moves') + '</span>' +
      (isF ? idPair() : idCard(idMember('me'), { compact: true, moved: Q.moved })) + '</aside></div></main>';
  }
  function idPair() {
    return '<div class="id-pair">' + [idMember('me'), idMember('lauren')].map(function (M, i) {
      return '<div class="panel id-pair-i">' + idCrest(M.res.arch, M.crest, 48) + '<div><span class="id-av' + (i ? ' c1' : '') + '">' + e(M.initials) + '</span><b>' + e(M.name.split(' ')[0]) + '</b><span class="id-t">' + e(M.res.title) + '</span><span class="id-s">' + e(idCap(M.res.sigLine)) + '</span></div></div>';
    }).join('') + '</div>';
  }
  /* what the record already holds, read back so nothing is asked twice */
  function idRecord(k) {
    var S = A.S, T = A.totals(), inv = A.investable(), p = A.policy(), rows = [];
    if (k === 'goals') rows = S.goals.map(function (g) { return [g.name, A.money(g.amount) + ' by ' + A.date(g.date) + ' · a ' + g.priority]; });
    if (k === 'people') rows = S.people.map(function (x) { return [x.name, x.relationship + (x.member ? ' · a member' : ' · no login')]; }).concat([['Advisers', S.advisers.length + ' on the register']]);
    if (k === 'capital') rows = [['Owned', A.money(T.owned)], ['Owed', A.money(T.owed)], ['Net worth', A.money(T.net)], ['Investable', A.money(inv.total)], ['How complete', A.staleLines().length ? A.staleLines().length + ' figures past their check date; everything else is current' : 'Every figure is current']];
    if (k === 'cash') rows = [['Cash you can reach', A.money(A.reachableCash())], ['Your policy keeps reachable', p ? A.money(p.liquidityMin) : 'Not written yet'], ['Large costs in the next three years', S.goals.filter(function (g) { return A.days(DEMO_TODAY, g.date) < 1096; }).map(function (g) { return g.name + ', ' + A.short(g.amount); }).join(' · ') || 'None recorded']];
    if (k === 'balance') { var by = {}, src = {}; S.assets.concat(S.liabilities).forEach(function (l) { var h = (l.holder || 'Joint').split(' ')[0]; by[h] = (by[h] || 0) + 1; var v = A.cur(l.id); if (v) src[A.srcLabel(v).match(/statement/i) ? 'a statement' : v.source === 'document' ? 'a document' : 'your own entry'] = (src[A.srcLabel(v).match(/statement/i) ? 'a statement' : v.source === 'document' ? 'a document' : 'your own entry'] || 0) + 1; });
      rows = [['Lines in the record', String(S.assets.length + S.liabilities.length)], ['By owner', Object.keys(by).map(function (k2) { return k2 + ' ' + by[k2]; }).join(' · ')], ['Where the figures come from', Object.keys(src).map(function (k2) { return src[k2] + ' from ' + k2; }).join(' · ')]]; }
    if (k === 'cover') rows = S.cover.map(function (c) { return [c.type + ' · ' + c.covers, c.sum ? A.money(c.sum) : c.monthly ? A.money(c.monthly) + ' a month' : 'Recorded']; }).concat([['Not recorded', idCap(idNotCovered())]]);
    if (k === 'rules') rows = p ? [['Exclusions', p.exclusions], ['Single company', 'No more than ' + p.concentrationMax + '%'], ['Ranges', 'One for each of listed shares, bonds, cash and private markets']] : [['Your rules', 'Not written yet']];
    if (k === 'dependants') rows = S.people.filter(function (x) { return x.dependant || !x.member; }).map(function (x) { return [x.name, x.relationship]; });
    if (k === 'estate') { var w = S.will; rows = [['The will', w.exists === 'Yes' ? (w.kind || 'On file') + (w.signed ? ', signed ' + A.date(w.signed) : '') : 'Not recorded'], ['The original', w.original || 'Not recorded'], ['Executors', w.executors || 'Not recorded'], ['Powers of attorney', 'Not recorded'], ['For a professional', (A.adviser('v1') || {}).open || 'Nothing open']]; }
    if (k === 'tax') { var cpa = A.adviser('v2'), biz = S.assets.filter(function (a) { return /LLC|business/i.test(a.name + ' ' + (a.type || '')); })[0];
      rows = [['Resident in', S.household.city + ', United States'], ['A business', biz ? biz.name : 'None recorded'], ['Your CPA', cpa ? cpa.name + ', ' + cpa.firm : 'Not on the register yet'], ['For a professional', (cpa && cpa.open) || 'Nothing open']]; }
    if (k === 'purpose') rows = p ? [['What this money is for', p.purpose], ['What is enough', p.enough]] : [['Your policy', 'Not written yet']];
    if (k === 'exclusions') rows = p ? [['Already in your policy', p.exclusions]] : [];
    return rows.length ? '<dl class="id-sum">' + rows.map(function (x) { return '<div><dt>' + e(x[0]) + '</dt><dd>' + e(x[1]) + '</dd></div>'; }).join('') + '</dl>' : '';
  }
  var ID_REC_AT = { goals: ['#/policy/planning', 'Wealth planning'], people: ['#/records/family', 'Records · Family'], capital: ['#/records/statement', 'the Statement'], cash: ['#/protection/safety', 'the Safety check'],
    balance: ['#/records/statement', 'the Statement'], cover: ['#/protection/cover', 'Protection · Cover'], rules: ['#/policy/rules', 'Your rules'], dependants: ['#/records/family', 'Records · Family'],
    estate: ['#/succession/will', 'The will'], tax: ['#/records/advisers', 'Advisers'], purpose: ['#/policy/rules', 'Your rules'], exclusions: ['#/policy/rules', 'Your rules'] };
  function idAbout(kind, q, Q) {
    var I = idI(), y = q.you, head = '<span class="status-label neutral quest-chip">' + (kind === 'f' ? 'About the two of you · no right answers' : 'About you · no right answers') + '</span>', at = y.record && ID_REC_AT[y.record];
    var rec = y.record ? '<section class="panel id-rec"><div class="sg-h"><span class="eyebrow">From your record</span>' + (at ? '<a class="link" href="' + at[0] + '">Change it on ' + e(at[1]) + A.ic('arrow') + '</a>' : '') + '</div>' + idRecord(y.record) + '</section>' : '';
    var save = '<div class="quest-foot id-foot"><button class="key key-l" type="button" data-act="id-save"' + ((y.kind === 'choice' || y.kind === 'diff') && Q.pick == null && !(y.kind === 'diff' && false) ? ' disabled' : '') + '>' + (kind === 'f' ? 'Save for both of us' : 'Save my answer') + A.ic('arrow') + '</button><a class="link" href="#/learn/map/identity">Skip for now</a></div>';
    if (y.kind === 'picks') {
      var n = Q.picks.length, O = LI.Q2.opts;
      return head + '<h1 class="quest-q">' + e(y.q) + '</h1><p class="help">Choose up to three, in the order they matter. Tap again to take one away.</p>' +
        '<div class="answers id-picks">' + O.map(function (o) { var i = Q.picks.indexOf(o[0]), on = i > -1; return '<button type="button" class="answer id-pick" data-act="id-multi" data-k="' + o[0] + '" aria-pressed="' + on + '"' + (n >= 3 && !on ? ' disabled' : '') + '><span class="letter">' + (on ? i + 1 : '') + '</span><span>' + e(o[1]) + '</span></button>'; }).join('') + '</div>' +
        '<p class="help id-count-l">' + n + ' of 3 chosen' + (n ? ' · first: ' + e(O.filter(function (o) { return o[0] === Q.picks[0]; })[0][1]) : '') + '</p>' +
        '<label class="id-field"><span>In one sentence, what does financial success mean to you? <em>Optional</em></span><input class="input" data-id-sentence type="text" maxlength="160" value="' + e(Q.sentence) + '" placeholder="In your own words"></label>' +
        '<div class="quest-foot id-foot"><button class="key key-l" type="button" data-act="id-save"' + (n ? '' : ' disabled') + '>Save my answers' + A.ic('arrow') + '</button><a class="link" href="#/learn/map/identity">Skip for now</a></div>';
    }
    if (y.kind === 'record') return head + '<h1 class="quest-q">Is this still true?</h1><p class="help">Nothing is asked twice: this is what your record already holds. Change anything on its own desk; the identity never keeps a copy.</p>' + rec +
      '<div class="quest-foot id-foot"><button class="key key-l" type="button" data-act="id-save">Still true · save it' + A.ic('arrow') + '</button><a class="link" href="#/learn/map/identity">Skip for now</a></div>';
    var diff = '';
    if (y.kind === 'diff') { var H = idHousehold(), tr = LI.TRAITS.filter(function (t) { return t.k === H.diff; })[0];
      diff = '<h1 class="quest-q">Where you differ most: ' + e(tr.name.toLowerCase()) + '</h1><div class="panel id-diffq">' + idTrait(tr, null, { pair: H.members.map(function (m) { return { i: m.initials, v: m.traits[tr.k] }; }), note: 'Both kept' }) + '<p class="help">' + e(H.diffLine) + '</p></div>' +
        '<h2 class="section-h id-q2"><span>' + e(y.q) + '</span></h2><p class="help">One answer. ' + e(idMember('lauren').name.split(' ')[0]) + ' is asked to confirm it before it goes in the charter.</p>'; }
    var cur = I.ans[y.k] || I.more[y.k], pick = Q.pick != null ? Q.pick : null;
    return head + (diff || rec + '<h1 class="quest-q">' + e(y.q) + '</h1><p class="help">One answer' + (cur ? '. Before: “' + e(idOpt(y.opts, cur)) + '”.' : '.') + '</p>') +
      '<div class="answers" role="radiogroup">' + y.opts.map(function (o, i) { return '<button class="answer" type="button" data-act="id-choose" data-i="' + i + '" role="radio" aria-checked="' + (pick === i) + '" aria-pressed="' + (pick === i) + '"><span class="letter">' + 'ABCDE'[i] + '</span><span>' + e(o[1]) + '</span></button>'; }).join('') + '</div>' +
      (y.sentence ? '<label class="id-field"><span>In one sentence, if you want <em>Optional</em></span><input class="input" data-id-sentence type="text" maxlength="160" value="' + e(Q.sentence) + '" placeholder="In your own words"></label>' : '') + save;
  }
  /* what Finna understood: one sentence from the answers, and what moved on the identity */
  function idUnderstood(kind, q, Q) {
    var I = idI(), y = q.you, n = q.n, R = A.idResolve(I.ans), moves = [], line = '', lives = kind === 'f' ? ['#/policy/charter', 'Governance · Family Charter'] : q.lives;
    var ans = y.k ? (I.ans[y.k] || I.more[y.k]) : '', lab = y.opts ? idOpt(y.opts, ans) : '';
    if (kind === 'q' && n === 2) {
      var O = LI.Q2.opts, ph = I.picks.map(function (k) { return O.filter(function (o) { return o[0] === k; })[0][3]; });
      var lst = ph.length === 1 ? ph[0] : ph.length === 2 ? ph[0] + ' first, then ' + ph[1] : ph[0] + ' first, then ' + ph[1] + ', then ' + ph[2];
      line = 'Your choices put ' + lst + '. Wealth reads as ' + LI.Q2.means[I.ans.purpose] + '.' + (I.sentence ? ' In your words: “' + I.sentence + '”' : '');
      moves.push(['Line under the title', idCap(R.sigLine), I.picks[1] ? 'From your second choice' : 'From who the money is for']);
    } else if (kind === 'q') {
      var T = A.totals(), inv = A.investable();
      line = ({ 3: 'Your goals run to ' + A.S.goals.map(function (g) { return g.date.slice(0, 4); }).sort().slice(-1)[0] + '. Most of the money can wait: ' + idLow(lab) + '.',
        4: (A.S.people.length === 1 ? 'A household of one. ' : 'A household of ' + A.S.people.length + ' people, ' + A.S.members.length + (A.S.members.length === 1 ? ' of them a member. ' : ' of them members. ')) + 'How you decide: ' + idLow(lab) + '.',
        5: 'You own ' + A.short(T.owned) + ' and owe ' + A.short(T.owed) + '; ' + A.short(inv.total) + ' of it can be invested. Your record is mostly complete.',
        6: 'At least ' + A.money((A.policy() || {}).liquidityMin || 0) + ' stays reachable, and you hold ' + A.money(A.reachableCash()) + ' in cash. On committing money for years: ' + idLow(lab) + '.',
        7: 'Every line in your record has an owner and a source, so the identity can be checked against it.',
        8: (A.S.cover.length ? 'Covered: ' + idList(A.S.cover.map(function (c) { return c.type.toLowerCase(); }).filter(function (x, i, l) { return l.indexOf(x) === i; })) + '. ' : 'No cover recorded yet. ') + 'Not recorded: ' + idNotCovered() + '. A map, never a recommendation.',
        9: 'You invest: ' + idLow(lab) + '. It opens no investment.',
        10: (idDeps().length ? idList(idDeps()) + (idDeps().length === 1 ? ' depends' : ' depend') + ' on you. ' : 'No dependants recorded. ') + 'In decisions: ' + idLow(lab) + '.',
        11: 'Your intent, in your words: ' + idLow(lab) + '. It informs your principles and is not a recommendation.',
        12: (A.S.will.exists === 'Yes' ? 'Known: the will' + (A.S.will.signed ? ' of ' + A.S.will.signed.slice(0, 4) : '') + (A.S.will.original ? ' and where the original is' : '') + '. ' : 'Not recorded: a will. ') + 'Missing: powers of attorney. For a professional: whether a trust fits.',
        13: 'Known: where you live' + (A.adviser('v2') ? ', your business and your CPA. For a professional: ' + ((A.adviser('v2').open || 'nothing open').charAt(0).toLowerCase() + (A.adviser('v2').open || 'nothing open').slice(1)) + '.' : '. For a professional: how tax meets the plan, once a CPA is on the register.'),
        14: (idDeps().length ? idList(idDeps()) : 'The next generation') + ': ' + idLow(lab) + '.',
        15: 'You: ' + idLow(lab) + '. Learn suggests your next path from it; it ranks no one.',
        16: 'Who steps in first: ' + idLow(lab) + '. Readiness, not a legal document.',
        17: 'Your legacy line: ' + idLow(lab) + '.' + (Q.sentence ? ' In your words: “' + Q.sentence + '”' : '') + ' It becomes the last article of the Family Charter.' })[n] || '';
      if (n === 3) moves.push(['Horizon', 'The band sits at “' + lab + '”', 'Indicated until Structure checks it']);
      if (n === 4) moves.push(['Deciding', 'Appears, indicated', 'Firm once the side tree agrees who decides']);
      if (n === 6) moves.push(['Reach', 'Appears, indicated', 'Firm once Structure checks it against your record']);
      if (n === 9) moves.push(['Breadth', 'Appears', 'It opens no investment']);
    } else {
      line = ({ 1: 'You are ' + idHhTitle().charAt(0).toLowerCase() + idHhTitle().slice(1) + '. Where you differ is named and kept as you gave it. For money that could be locked away: ' + idLow(lab) + '.',
        2: 'Article 1 starts from your policy: ' + ((A.policy() || {}).purpose || ''),
        3: 'Article 2: ' + ((A.policy() || {}).exclusions || '') + (ans && ans !== 'none' ? ' ' + lab + '.' : ''),
        4: 'Article 3: ' + (ans === 'both' ? 'both of you agree on every decision about the money.' : 'either of you can act alone up to ' + lab + '; above that, and for anything that locks money away for more than a year, both of you agree.'),
        5: 'Article 4: ' + idLow(lab) + ', you read your policy, your goals and this charter again.',
        6: 'Article 5: ' + idLow(lab) + '. The charter is drafted, for the two of you to agree on the Governance desk.' })[n] || '';
      if (n === 1) moves.push(['Family Office Identity', idHhTitle(), 'Formed from both titles, never an average']);
      if (n === 4) moves.push(['Rules', 'Appears on both identities', 'By written rule']);
    }
    moves.push(['Built', q.builds + (kind === 'f' ? ' · ' + n + ' of 6' : ' · ' + I.main + ' of 17'), 'Lives on ' + lives[1]]);
    var sd = A.idStageDone(I), stageNow = kind === 'q' && IDCUM_V.indexOf(n) > -1;
    if (kind === 'q' && !stageNow) moves.push(['Title', 'Still ' + 'The ' + I.title.mod + ' ' + I.title.arch, 'A title firms at a stage end, never from one answer']);
    var next = kind === 'q' ? (stageNow ? '#/learn/identity/stage/' + sd : n < 17 ? '#/learn/identity/quest/' + (n + 1) : '#/learn/identity/stage/4') : (n < 6 ? '#/learn/identity/side/' + (n + 1) : '#/policy/charter');
    var nextL = kind === 'q' ? (stageNow ? 'See ' + LI.STAGES[sd - 1].name + ' complete' : n < 17 ? 'Next quest' : 'See the path complete') : (n < 6 ? 'Next quest' : 'Open the charter');
    return '<span class="status-label neutral quest-chip">What Finna understood</span>' +
      '<div class="feedback ok id-und">' + e(line) + '<small>From your answers · ' + A.date(DEMO_TODAY) + ' · you can change them on your identity</small></div>' +
      '<h2 class="section-h"><span>' + (kind === 'f' ? 'The family office moves' : 'Your identity moves') + '</span></h2><ul class="id-moves">' + moves.map(function (c) { return '<li><b>' + e(c[0]) + '</b><span>' + e(c[1]) + '</span><em>' + e(c[2]) + '</em></li>'; }).join('') + '</ul>' +
      '<div class="quest-foot id-foot"><a class="key key-l" href="' + next + '">' + e(nextL) + A.ic('arrow') + '</a><a class="link" href="' + lives[0] + '">See it on ' + e(lives[1]) + '</a></div>';
  }
  /* an answer inside a sentence: its first letter small, except the word I */
  function idLow(t) { t = String(t || ''); return /^I\b/.test(t) ? t : t.charAt(0).toLowerCase() + t.slice(1); }
  function idList(l) { return l.length < 2 ? (l[0] || '') : l.slice(0, -1).join(', ') + ' and ' + l[l.length - 1]; }
  function idDeps() { return A.S.people.filter(function (x) { return x.dependant; }).map(function (x) { return x.name.split(' ')[0]; }); }
  function idNotCovered() { var t = A.S.cover.map(function (c) { return c.type + ' ' + c.insurer; }).join(' '), out = []; if (!/umbrella/i.test(t)) out.push('an umbrella liability policy'); if (!/disab/i.test(t)) out.push('disability cover'); return out.length ? idList(out) : 'nothing we look for'; }
  var IDCUM_V = (function () { var c = [], t = 0; (LI ? LI.SQ : []).forEach(function (x) { t += x; c.push(t); }); return c; })();
  /* quest 1: the tutorial's four answers, the first reading */
  function idReveal() {
    var I = idI(), M = idMember('me'), R = M.res, w = A.S.identity || {}, g = A.S.goals[0];
    var rows = [['Who is the money for?', w.whoFor || '—'], ['How long could your savings wait?', w.horizon ? w.horizon + ' years' : '—'], ['In a bad year, what would you do?', w.badYear || '—'], ['Your first goal', g ? g.name + ' · ' + A.short(g.amount) + ' by ' + A.date(g.date) + ' · a ' + g.priority : '—']];
    return '<main class="screen lm-screen"><section class="panel id-reveal" aria-label="Your first Financial Identity"><div class="id-reveal-l">' + idCrest(R.arch, 'first', 112, 'is-new') +
      '<span class="eyebrow">Quest 1 of 17 · answered in the tutorial</span><p class="id-reveal-k">Your first Financial Identity</p>' +
      '<h1 class="id-title is-new">' + e(A.idResolve(Object.assign({}, I.ans, { purpose: 'security', second: '' })).title) + '</h1><p class="id-sig">' + e(idCap(A.idResolve({ purpose: 'security', horizon: I.ans.horizon, bad: I.ans.bad, who: I.ans.who }).sigLine)) + '</p>' +
      '<p>A first reading, from four answers you gave in the tutorial. It grows as you answer more, and every answer stays yours to change.</p><p class="meta">+40 XP for quest 1 · nothing was asked twice</p></div>' +
      '<div class="id-reveal-r"><h2 class="section-h"><span>Drawn from four answers in the tutorial</span></h2><dl class="id-sum">' + rows.map(function (x) { return '<div><dt>' + e(x[0]) + '</dt><dd>' + e(x[1]) + '</dd></div>'; }).join('') + '</dl>' +
      '<div class="note"><b>What it is for.</b> It shapes what Learn suggests and how Freya explains. It is not a score, and it never decides what you can access.</div>' +
      '<div class="row"><a class="key key-l" href="#/learn/map/identity">See it on the Map</a><a class="link" href="#/policy/identity">Open your identity</a></div></div></section></main>';
  }
  /* a stage complete: the title firms, and what opens */
  function idStagePage(i) {
    var I = idI(), sd = A.idStageDone(I); if (!i || i > sd) return learnIdentity({ rest: [] });
    var M = idMember('me'), R = M.res, h = I.hist.filter(function (x) { return x.t === LI.STAGES[i - 1].name; }).slice(-1)[0], cu = A.idCheckup();
    var opens = i < 4 ? '<div class="lm-opens-i">' + A.ic('learn') + '<div><b>On the Map: ' + e(LI.STAGES[i].name) + ' opens</b><span>' + (i === 1 ? 'And a first check-up is dated, for ' + A.date(cu.next) + '. Nothing further is shown.' : i === 2 ? (A.S.members.length > 1 ? 'And beside it the side tree, Family Office Identity, with ' + e(idMember('lauren').name.split(' ')[0]) + '.' : 'The side tree, Family Office Identity, opens beside it once a second member joins.') : 'The last stage of the path.') + '</span></div></div>' :
      '<div class="lm-opens-i">' + A.ic('check') + '<div><b>A Completion Certificate</b><span>It records that you completed the path. It is not a test, and it evidences nothing.</span></div></div>';
    return '<main class="screen lm-screen"><section class="panel id-stagec" aria-label="' + e(LI.STAGES[i - 1].name) + ' complete"><div class="id-stagec-l">' + idCrest(R.arch, M.crest, 112, 'is-new') +
      '<span class="eyebrow">Stage ' + i + ' of 4 · ' + e(LI.STAGES[i - 1].name) + ' complete · ' + A.date(I.stages['s' + i]) + '</span>' +
      (h && h.title ? '<p class="id-was"><s>' + e(h.title[0]) + '</s></p>' : '') + '<h1 class="id-title is-new">' + e(R.title) + '</h1><p class="id-sig">' + e(idCap(R.sigLine)) + '</p>' +
      '<p>' + e(h ? h.d : '') + '</p><p class="meta">A title firms at a stage end or a check-up, never from one answer. No title is above another.</p></div>' +
      '<div class="id-stagec-r"><h2 class="section-h"><span>Your identity now</span></h2>' + idTraits(M.traits) + '<div class="lm-opens">' + opens + '</div>' +
      '<div class="row"><a class="key key-l" href="#/learn/map/identity" data-act="id-grow" data-i="' + i + '">See the branch grow</a><a class="link" href="#/policy/identity">Open your identity</a></div></div></section></main>';
  }
  /* a check-up: the answers that are due, and "Still true" is a full answer */
  function idCheckPage() {
    var I = idI(), cu = A.idCheckup(), C = VIEWS.IDCU || (VIEWS.IDCU = { picks: {}, done: null });
    if (C.done) {
      var R = C.done, line = (R.moved.length ? (R.moved.length === 1 ? 'One answer changed. ' : R.moved.length + ' answers changed. ') : 'Every answer is still true. ') + (R.was === R.now ? 'Your title stays ' + R.now + '. The archetype moves only when both of its answers do.' : 'Your title is now ' + R.now + '.');
      return '<main class="screen lm-screen"><div class="id-qwrap"><div class="quest"><div class="quest-top"><span class="lm-qwhere"><b>Check-up · ' + A.date(DEMO_TODAY) + '</b> · reviewed, never fixed</span><span class="lm-qright"><span class="lm-xp" data-lm-xp>' + fmt(A.learnXP()) + ' XP</span></span></div>' +
        '<span class="status-label neutral quest-chip">What Finna understood</span><div class="feedback ok id-und">' + e(line) + '<small>From your check-up · ' + A.date(DEMO_TODAY) + ' · the earlier answers are kept in the history</small></div>' +
        '<ul class="id-moves"><li><b>Next check-up</b><span>' + A.date(cu.next) + '</span><em>Six months on. Nothing is ever overdue.</em></li></ul>' +
        '<div class="quest-foot id-foot"><a class="key key-l" href="#/policy/identity">Open your identity' + A.ic('arrow') + '</a><a class="link" href="#/learn/map/identity">Back to the Map</a></div></div>' +
        '<aside class="id-side"><span class="eyebrow">Your identity, after the check-up</span>' + idCard(idMember('me'), { compact: true, moved: R.moved.map(function (m) { return m.k === 'bad' ? 'aim' : m.k; }) }) + '</aside></div></main>';
    }
    if (!cu || !cu.ready) return learnIdentity({ rest: [] });
    var items = cu.due.map(function (d) {
      var p = C.picks[d.k] || {}, opts = d.k === 'bad' ? LI.BAD : [];
      return '<section class="panel id-cu"><div class="id-cu-h"><span class="status-label neutral">' + e(d.kind) + '</span><h2 class="section-h"><span>In a bad year, what would you do?</span></h2></div>' +
        '<dl class="id-then"><div><dt>Then</dt><dd>' + e(idOpt(LI.BAD, I.ans.bad)) + '<span>' + A.date(I.dates.bad) + '</span></dd></div><div><dt>Why now</dt><dd>' + e(d.why) + '</dd></div></dl>' +
        '<div class="id-cu-k"><button type="button" class="key key-s key-secondary" data-act="id-cu" data-k="' + d.k + '" data-v="same" aria-pressed="' + (p.same === true) + '">Still true</button>' +
        '<button type="button" class="key key-s key-secondary" data-act="id-cu" data-k="' + d.k + '" data-v="changed" aria-pressed="' + (p.same === false) + '">It has changed</button></div>' +
        (p.same === false ? '<div class="answers">' + opts.map(function (o) { return '<button type="button" class="answer" data-act="id-cu-pick" data-k="' + d.k + '" data-v="' + o[0] + '" aria-pressed="' + (p.pick === o[0]) + '"' + (o[0] === I.ans[d.k] ? ' disabled' : '') + '><span class="letter"></span><span>' + e(o[1]) + '</span></button>'; }).join('') + '</div>' : '') + '</section>';
    }).join('');
    var ready = cu.due.every(function (d) { var p = C.picks[d.k]; return p && (p.same === true || (p.same === false && p.pick)); });
    return '<main class="screen lm-screen"><div class="id-qwrap"><div class="quest"><div class="quest-top"><span class="lm-qwhere"><b>Check-up · ' + A.date(DEMO_TODAY) + '</b> · reviewed, never fixed</span><span class="lm-qright"><span class="lm-xp" data-lm-xp>' + fmt(A.learnXP()) + ' XP</span><a class="link" href="#/learn/map/identity">Leave for now</a></span></div>' +
      '<span class="status-label neutral quest-chip">Reviewed, never fixed</span><h1 class="quest-q">An answer to look at again</h1><p class="help">“Still true” is a full answer and earns the same 40 XP. Nothing here is overdue, and skipping costs nothing.</p>' + items +
      '<div class="quest-foot id-foot"><button class="key key-l" type="button" data-act="id-cu-save"' + (ready ? '' : ' disabled') + '>Save the check-up' + A.ic('arrow') + '</button><a class="link" href="#/learn/map/identity">Skip for now</a></div></div>' +
      '<aside class="id-side"><span class="eyebrow">Your identity, before</span>' + idCard(idMember('me'), { compact: true }) + '</aside></div></main>';
  }

  /* ── POLICY · FINANCIAL IDENTITY: the whole character, and its status ─────────────────────── */
  function policyIdentity(r) {
    if (!LI) return '';
    var I = idI(), sd = A.idStageDone(I), hasL = idSideOpen(I), who = hasL && (r.rest[0] === 'lauren' || r.rest[0] === 'household') ? r.rest[0] : 'me', cu = A.idCheckup();
    var seg = hasL ? '<nav class="id-who-keys" aria-label="Whose identity">' + [['me', idMember('me').name.split(' ')[0], '#/policy/identity'], ['lauren', idMember('lauren').name.split(' ')[0], '#/policy/identity/lauren'], ['household', 'The household', '#/policy/identity/household']]
      .map(function (x) { return '<a class="key key-s key-secondary" href="' + x[2] + '"' + (who === x[0] ? ' aria-current="page"' : '') + '>' + e(x[1]) + '</a>'; }).join('') + '</nav>' : '';
    var key = who === 'me' && idHref() !== '#/policy/identity' ? '<a class="key key-l" href="' + idHref() + '">' + e(idLabel()) + '</a>' : '';
    var head = '<div class="page-head"><div class="intro"><h1 class="title">Financial Identity</h1></div>' + (key ? '<div class="page-head-actions">' + key + '</div>' : '') + '</div>' + seg +
      lvFor('policy:identity', 'mini', 'Why it matters');   /* more than a risk profile: the core of the office, the start of the Charter */
    if (who === 'household') {
      return head + '<div class="id-grid">' + idHhCard() + '<div class="id-col">' +
        '<section class="panel"><h2 class="section-h"><span>What the household holds together</span></h2><ul class="id-list">' + LI.QUESTS.filter(function (q) { return q.n <= I.main && /Household|Goal|Capital|Protection|Responsibility/.test(q.builds); }).map(function (q) { return '<li><b>' + e(q.builds) + '</b><span>Quest ' + q.n + ' · lives on ' + e(q.lives[1]) + '</span></li>'; }).join('') +
          (I.side >= 4 ? '<li><b>Decision and permissions map</b><span>The side tree · both of you</span></li>' : '') + (I.charter === 'agreed' ? '<li><b>Family Charter</b><span>Version 1 · both of you</span></li>' : '') + '</ul></section>' +
        '<section class="panel"><h2 class="section-h"><span>The Family Charter</span></h2><p class="help">' + (I.charter === 'agreed' ? 'Version 1, agreed ' + A.date(I.dates.charter) + '.' : I.charter === 'draft' ? 'A draft, waiting for both of you.' : 'Written from the side tree, Family Office Identity: ' + I.side + ' of 6 quests answered.') + '</p>' +
          '<div class="row">' + (I.charter ? '<a class="key key-s key-secondary" href="#/policy/charter">Open the charter</a>' : '<a class="key key-s key-secondary" href="#/learn/identity/side/' + Math.min(6, I.side + 1) + '">' + (I.side ? 'Continue' : 'Start') + ' the side tree</a>') + '</div></section></div></div>';
    }
    var M = idMember(who), me = who === 'me';
    var why = me ? [['What the money is for', I.picks.length ? LI.Q2.opts.filter(function (o) { return o[0] === I.picks[0]; })[0][1] + (I.picks[1] ? ', then ' + LI.Q2.opts.filter(function (o) { return o[0] === I.picks[1]; })[0][1].toLowerCase() : '') : (A.S.goals[0] ? 'Your first goal: ' + A.S.goals[0].name : 'Not answered yet'), I.picks.length ? 'Quest 2' : A.S.goals[0] ? 'The tutorial' : 'Quest 2', '#/learn/identity/quest/2'],
      ['How long it can wait', idOpt(LI.HORIZON, I.ans.horizon), I.main >= 3 ? 'Quest 3' : 'The tutorial', '#/learn/identity/quest/3'],
      ['In a bad year', idOpt(LI.BAD, I.ans.bad), I.checkups.length ? 'Check-up, ' + A.date(I.checkups[I.checkups.length - 1].date) : 'The tutorial', ''],
      ['How you decide', I.ans.decide ? idOpt(LI.DECIDE, I.ans.decide) : 'Not asked yet', I.ans.decide ? 'Quest 4' : 'Quest 4, ahead', '#/learn/identity/quest/4'],
      ['What stays reachable', I.ans.reach ? idOpt(LI.REACH, I.ans.reach) : 'Not asked yet', I.ans.reach ? 'Quest 6' : 'Quest 6, ahead', '#/learn/identity/quest/6']] : [];
    var src = me ? why.map(function (x) { var qn = x[3] ? +x[3].split('/').pop() : 0, lab = qn && qn <= I.main ? 'Change' : qn === I.main + 1 ? 'Answer it' : ''; return '<li><b>' + e(x[0]) + '</b><span>' + e(x[1]) + ' · ' + e(x[2]) + '</span>' + (lab && x[1] !== 'Not asked yet' ? '<a class="link" href="' + x[3] + '">' + lab + '</a>' : '') + '</li>'; }).join('') :
      '<li><b>Her Foundation answers</b><span>Six quests. ' + e(M.name.split(' ')[0]) + ' can change any of them; you see them because she shares her identity with the household.</span></li>';
    var hist = me ? I.hist.slice().reverse().map(function (x) { return '<li><span class="d">' + A.date(x.date) + '</span><span><b>' + e(x.t) + '</b>' + (x.title ? '<span class="id-h-t"><s>' + e(x.title[0]) + '</s> → ' + e(x.title[1]) + '</span>' : '') + '<span>' + e(x.d) + '</span></span></li>'; }).join('') :
      '<li><span class="d">Foundation</span><span><b>Her Foundation</b><span>' + e(M.res.title) + ', from her six Foundation quests.</span></span></li>';
    var cert = lp('ia-found');
    return head + '<div class="id-grid">' + idCard(M) + '<div class="id-col">' +
      '<section class="panel"><h2 class="section-h"><span>Why this title</span></h2><ul class="id-list">' + src + '</ul>' +
        '<p class="help">The archetype comes from what the money is for and how long it can wait; the modifier from how you move in a bad year and how you decide; the line under it from your second choice. The rules are written down and the same for every household.</p></section>' +
      (me ? '<section class="panel"><h2 class="section-h"><span>Next check-up</span></h2>' + (cu ? '<p class="id-next"><b>' + (cu.ready ? 'Ready now' : A.date(cu.next)) + '</b><span>' + (cu.ready ? e(cu.due[0].why) + ' “Still true” is a full answer.' : 'Six months after Foundation. The answers that are due, and any a new certificate bears on, are asked again.') + '</span></p>' + (cu.ready ? '<div class="row"><a class="key key-s key-secondary" href="#/learn/identity/checkup">Start the check-up</a></div>' : '') :
        '<p class="id-next"><b>After Foundation</b><span>Once Foundation is answered, a check-up is dated six months on. Nothing is ever overdue.</span></p>') + '</section>' : '') +
      '<section class="panel"><h2 class="section-h"><span>History</span></h2><ol class="id-hist">' + hist + '</ol><p class="help">It only adds: what it was, what it is now, and why, in your own answers.</p></section>' +
      (me && cert && cert.state === 'done' ? '<section class="panel"><h2 class="section-h"><span>From Learn</span></h2><ul class="id-list"><li><b>Investment Foundation</b><span>Certificate of Understanding · ' + A.date(cert.earned) + '</span></li></ul><p class="help">Not identity data. A certificate can open a check-up of an answer it bears on.</p></section>' : '') +
      '</div></div>';
  }
  /* ── POLICY · FAMILY CHARTER: the side tree's end ────────────────────────────────────────── */
  function policyCharter() {
    var I = idI(), p = A.policy() || {}, m = I.more, agreed = I.charter === 'agreed', names = A.S.members.map(function (x) { return x.name.split(' ')[0]; });
    var alone = m.alone === 'both' ? 'Both of us agree on every decision about the money.' : 'Either of us can act alone up to ' + (idOpt(LI.SIDE[3].you.opts, m.alone) || '$25,000') + '. Above that, and for anything that locks money away for more than a year, both of us agree.';
    var arts = [
      [1, 'What this money is for', (p.purpose || '') + ' Enough is ' + String(p.enough || '').charAt(0).toLowerCase() + String(p.enough || '').slice(1), 'Side tree quest 2 · started from your policy, version ' + (p.version || 1), I.side >= 2],
      [2, 'What we will not do', (p.exclusions || '') + (m.principle && m.principle !== 'none' ? ' ' + idOpt(LI.SIDE[2].you.opts, m.principle) + '.' : ''), 'Side tree quest 3 · and your policy', I.side >= 3],
      [3, 'Who decides what', alone + ' Both of us see every report, and both of us may speak with our advisers.', 'Side tree quests 1 and 4', I.side >= 4],
      [4, 'How we meet', idOpt(LI.SIDE[4].you.opts, m.meet) + ', we read our policy, our goals and this charter again. Emma and Oscar join as each of them is ready: ' + (idOpt(LI.QUESTS[13].you.opts, m.ready) || 'we will decide when').toLowerCase() + '.', 'Side tree quest 5', I.side >= 5],
      [5, 'When we disagree', idOpt(LI.SIDE[5].you.opts, m.cool) + '. If we still disagree, nothing changes until we do. In an emergency either of us can act to protect the family, and tells the other the same day.', 'Side tree quest 6', I.side >= 6],
      [6, 'What we want to hand on', m.legacy ? idOpt(LI.QUESTS[16].you.opts, m.legacy) + '.' + (I.more.legacySentence ? ' ' + I.more.legacySentence : '') : '', 'Written from quest 17, in the Legacy stage', !!m.legacy]
    ];
    var html = '<div class="page-head"><div class="intro"><div class="title-row"><h1 class="title">Family Charter</h1><span class="status-label ' + (agreed ? 'ok' : 'neutral') + '">' + (agreed ? 'Version 1 · agreed ' + A.date(I.dates.charter) : I.charter === 'draft' ? 'A draft' : !idSideOpen(I) && !I.side ? (A.S.members.length > 1 ? 'Opens after Structure' : 'Opens with a second member') : 'Being written · ' + I.side + ' of 6') + '</span></div></div>' +
      (I.charter === 'draft' ? '<div class="page-head-actions"><button class="key key-l" type="button" data-act="id-agree">Agree it, for both of us</button></div>' : '') + '</div>';
    html += '<p class="help id-ver">' + (agreed ? 'Agreed by ' + e(names.join(' and ')) + '. A change is a new version; this one is kept, and it is read again at every yearly review.' : I.charter === 'draft' ? 'Drafted from the six quests of the side tree, in your own words. Both of you agree it; change anything first.' : !idSideOpen(I) && !I.side ? 'Written by the side tree, Family Office Identity, which opens beside the path when Structure is complete: one article for each quest, in your own words.' : 'Written as the side tree is answered, one article for each quest.') + '</p>';
    html += '<div class="id-grid"><section class="panel id-charter" aria-label="The Family Charter">' + arts.map(function (a) {
      return '<article class="id-art' + (a[4] ? '' : ' is-later') + '"><span class="eyebrow">Article ' + a[0] + '</span><h2>' + e(a[1]) + '</h2>' +
        (a[4] ? '<p>' + e(a[2]) + '</p><p class="id-art-src">' + e(a[3]) + '</p>' : '<p class="help">' + (a[0] === 6 ? 'Written after the Legacy stage, from quest 17. Nothing is written for you before then.' : 'Written by side tree quest ' + (a[0] + 1) + '.') + '</p>') + '</article>';
    }).join('') + '<div class="id-card-f"><p>A charter records how your family intends to decide. It is not a legal document, and it changes nothing in a will, a trust or an account.</p><span class="draft-tag">Draft · counsel to approve the wording</span></div></section>' +
      '<div class="id-col">' + (idSideOpen(I) ? idHhCard() : '') + '</div></div>';
    return html;
  }

  /* ── the branch in Learn's lists, and its tag around the platform ────────────────────────── */
  function idProgressItem(withKey) {
    var I = idI(), sd = A.idStageDone(I); if (sd >= 4 && (I.side >= 6 || A.S.members.length < 2)) return '';
    var st = idStages()[Math.min(3, sd)], left = sd >= 4 ? 0 : st.q - st.done;
    var sub = sd >= 4 ? 'The path is complete · the side tree is ' + I.side + ' of 6' : idStageLine(I) + ' · about ' + Math.max(3, Math.round(st.stg.min * left / st.q)) + ' min left in the stage';
    return '<div class="lp-item">' + idCrest(I.title.arch, sd >= 2 ? 'firm' : sd >= 1 ? 'found' : 'first', 24) + '<div class="lp-item-main"><a class="lp-item-t" href="' + idHref() + '">Your Financial Identity</a>' +
      '<span class="lp-item-sub">The Map · Financial Identity · ' + e(sub) + ' · ends in a Completion Certificate</span><span class="meter" aria-hidden="true"><i style="width:' + (I.main / 17 * 100).toFixed(1) + '%"></i></span></div>' +
      (withKey ? '<a class="key key-s" href="' + idHref() + '">' + (/^Continue|^Start/.test(idLabel()) ? 'Continue' : 'Open') + '</a>' : '') + '</div>';
  }
  function idEarned() {
    var I = idI(); if (A.idStageDone(I) < 4) return '';
    return '<a class="panel medal" href="#/policy/identity">' + idCrest(I.title.arch, 'firm', 40) + '<span class="medal-t"><span class="eyebrow">Completion Certificate</span><b>Your Financial Identity</b><span>Completed · ' + A.date(I.stages.s4) + '</span></span></a>';
  }
  /* where the household is on the branch, as a tag: on the page where the next quest's piece lives */
  function idLtTarget() {
    var I = idI(), sd = A.idStageDone(I), cu = A.idCheckup();
    if (cu && cu.ready) return { href: '#/learn/identity/checkup', key: 'cu', t: 'A check-up of an answer', l: 'A check-up · about 2 minutes', lives: '#/policy/identity' };
    if (idSideOpen(I) && I.side < 6) { var f = LI.SIDE[I.side]; return { href: '#/learn/identity/side/' + f.n, key: 'f' + f.n, t: f.t, l: 'Family Office Identity · quest ' + f.n + ' of 6 · with ' + idMember('lauren').name.split(' ')[0], lives: '#/policy/charter' }; }
    var n = idNext(); if (!n) return null;
    var q = LI.QUESTS[n - 1]; return { href: '#/learn/identity/quest/' + n, key: 'q' + n, t: q.t, l: 'Your Financial Identity · quest ' + n + ' of 17 · about you', lives: q.lives[0] };
  }
  function idLt(route) {
    if (!LT_ON || !LI || A.S.learn.tags === false || LT_N >= LT_MAX) return '';
    var T = idLtTarget(); if (!T || T.lives !== route || T.lives === '#/policy/identity') return '';
    LT_N++;
    return '<a class="lt" href="' + T.href + '" data-lt="identity.' + T.key + '" data-lt-e="Learn · Financial Identity" data-lt-t="' + e(T.t) + '" data-lt-l="' + e(T.l) + '"' +
      ' aria-label="' + e('Learn: ' + T.t + ', ' + T.l + '. 40 XP') + '"><svg viewBox="0 0 22 22" aria-hidden="true"><path d="' + LM_LEAF + '"/></svg><span>+40 XP</span></a>';
  }

  /* ── FREYA ───────────────────────────────────────────────────────────── */
  function freya(r) {
    var S = A.S;
    if (r.sub === 'briefings') {
      var all = [S.briefing].concat(S.briefingArchive || []);
      return '<main class="screen">' + placeHead('Weekly briefings', 'Once a week: what changed, what needs you, what falls due in the next 30 days. Every sentence traces to a fact in the record.') +
        all.map(function (b, k) {
          return '<section class="panel"><div class="intro"><span class="eyebrow">Prepared ' + e(b.week) + '</span><h2 class="title">' + (k ? 'The week before' : 'This week') + '</h2></div>' +
            '<ol class="fy-card">' + b.items.map(function (it, i) { return '<li><span class="n">' + (i + 1) + '</span><span>' + e(it.text) + ' ' + e(it.why) + '<small>' + e(it.src) + '</small></span></li>'; }).join('') + '</ol></section>';
        }).join('') +
        '<p class="help">Newest first. The first briefing arrived a week after the office opened; each one is kept with the household and included in the export.</p></main>';
    }
    if (r.sub === 'map') return freyaMap();
    if (r.sub === 'recent') return '<main class="screen">' + placeHead('Recent conversations', 'Newest first. A conversation is kept with the household and included in the export.') + '<div data-fy-recent></div></main>';
    var fg = A.freyaGrowth();
    return '<main class="fy-page" data-fy-page><a class="fy-page-rings" href="#/freya/map" aria-label="Freya’s map: what she knows about you">' + fgRings(fg, 112) + '</a>' +
      '<h1 class="fy-page-q">What would you like to know?</h1><p class="fy-page-know">' + e(fgSummary(fg)) + ' <a class="link" href="#/freya/map">My map' + A.ic('arrow') + '</a></p>' +
      '<div class="fy-thread" data-fy-thread aria-live="polite"></div>' +
      '<form class="fy-prompt fy-surface" data-form="ask-page" autocomplete="off"><label class="sr" for="fy-page-input">Ask Freya</label>' +
      '<input class="input" id="fy-page-input" name="q" placeholder="Ask about your household, a document or a desk"><button class="key" type="submit">Ask</button></form>' +
      '<p class="fy-page-note">A question here has no page behind it, so Freya asks which line or desk it is about when she needs to.</p></main>';
  }

  /* ── HOUSEHOLD ───────────────────────────────────────────────────────── */
  function profile(r) {
    var sub = r.sub, S = A.S;
    if (!sub) return profileOverview();
    var T = { members: 'Household members', plan: 'Plan and usage', security: 'Security', notifications: 'Notifications', export: 'Export', boundary: 'The boundary', method: 'How the numbers work' };
    var html = '<main class="screen">' + placeHead(T[sub], sub === 'members' ? 'The two adults who share this office. Everyone else in the family is recorded in Records, without a login.' : '');
    if (sub === 'plan') html += hhPlan();
    else if (sub === 'security') html += hhSecurity();
    else if (sub === 'notifications') html += hhNotifications();
    else if (sub === 'export') html += hhExport();
    else if (sub === 'method') html += A.sim ? simMethodPage() : '';
    else if (sub === 'boundary') html += polBoundary();
    else html += hhMembers();
    return html + '</main>';
  }
  /* PROFILE · OVERVIEW (build spec Figure 10) — fixed, not suggested: settings stay where
     they were last time */
  /* THE TUTORIAL FROM THE DEMO (3 Oct 2026, Christian: "I can't find the restart tutorial in the
     current version"). The tutorial keeps a household of its own (finna-platform-tutorial), so this
     card only reads it: where it stands, and keys that open index.html?tutorial, at a desk with
     &from=n or straight back in with &resume (freya-tutorial.js takes either once and drops it).
     The desks are freya-tutorial.js's own (window.FT_STAGES). */
  function tutDemoCard() {
    var D = window.FT_STAGES; if (!D) return null;
    var N = D.length - 1, t = null, named = false, all = 0;
    try {
      var o = JSON.parse(localStorage.getItem('finna-platform-tutorial') || 'null');
      if (o && o.version === A.S.version && o.tutor && (o.tutor.v || 0) >= A.TUT_V) { t = o.tutor; named = !!(o.members && o.members[0] && o.members[0].name); }
    } catch (x) {}
    D.slice(1).forEach(function (g) { all += g.min; });
    var line = '<p class="sg-line">Freya walks a new household through the office, one desk at a time, about ' + all + ' minutes in all. It opens in an office of its own, so this demo stays as it is.</p>';
    if (!t || !named) return { meta: '', body: line + '<div class="sg-foot"><a class="key key-s" href="?tutorial#/home">Start the tutorial</a></div>' };
    var done = !!t.done, now = done ? 0 : Math.min(Math.max((t.open || []).length, 1), N);
    var meta = done ? '<span class="status-label ok">Done</span>' : '<span class="status-label">' + (t.paused ? 'Paused at desk ' : 'Desk ') + now + ' of ' + N + '</span>';
    var rows = D.slice(1).map(function (g, i) {
      var n = i + 1, st = done || n < now ? 'done' : n === now ? 'now' : '';
      return '<a class="record sg-rec tq-from' + (st ? ' is-' + st : '') + '" href="?tutorial&amp;from=' + n + '#/home">' +
        '<span class="n" aria-hidden="true">' + (st === 'done' ? A.ic('check') : n) + '</span>' +
        '<span class="record-main"><span class="record-title"><span class="sr">Start at desk ' + n + ': </span>' + e(g.t) + '</span>' +
        '<span class="record-sub">' + (st === 'now' ? 'You’re here · ' : '') + e(g.d) + '</span></span>' +
        '<span class="record-meta">' + g.min + ' min' + A.ic('arrow') + '</span></a>';
    }).join('');
    /* from the beginning first: a new office, the name, then Records (asks twice, it clears the old run) */
    return { meta: meta, body: line +
      '<div class="sg-foot tq-demo-keys"><button type="button" class="key key-s" data-act="tq-fresh">Start from the beginning</button>' +
      (done ? '' : '<a class="key key-s key-secondary" href="?tutorial&amp;resume#/home">Pick up where you left off</a>') + '</div>' +
      '<p class="help tq-demo-or">Or start again at a desk. What you entered stays, and the desks after it lock again.</p>' +
      '<div class="tq-from-list">' + rows + '</div>' };
  }
  function profileOverview() {
    var S = A.S, F = S.freya, sec = S.security, n = S.notifications;
    var html = '<main class="screen">' + placeHead('Profile', 'Always laid out the same way.') + '<div class="sg">';
    html += card('Household members', more('#/profile/members', 'Members'), '<div>' + S.members.map(function (m) {
      return '<div class="record">' + A.ic('user') + '<div class="record-main"><span class="record-title">' + e(m.name) + (m.id === S.viewer ? '\u00a0· you' : '') + '</span></div>' +
        '<div class="record-meta"><span class="status-label ok">' + (m.role === 'owner' ? 'Owner' : 'Partner') + '</span></div></div>';
    }).join('') + '</div><div class="sg-foot"><a class="key key-s key-secondary" href="#/profile/members">Invite</a></div>');
    html += card('Your plan', '<span class="status-label ok">Free</span>',
      '<div class="stack"><div><div class="progress-line sg-goal"><span>Freya messages</span><span>' + F.messages + ' of ' + F.allowanceMessages + '</span></div><div class="meter"><i style="width:' + (F.messages / F.allowanceMessages * 100).toFixed(0) + '%"></i></div></div>' +
      '<div><div class="progress-line sg-goal"><span>Documents read</span><span>' + F.documents + ' of ' + F.allowanceDocuments + '</span></div><div class="meter"><i style="width:' + (F.documents / F.allowanceDocuments * 100).toFixed(0) + '%"></i></div></div></div>' +
      '<div class="sg-foot">' + more('#/profile/plan', 'Plan and usage') + '</div>');
    html += card('Security', more('#/profile/security', 'Security'), '<div>' + chk(sec.twoFactor, 'Two-factor sign-in', '') + chk(!!sec.recoveryContact, 'Recovery contact', '') +
      chk(true, sec.sessions.length + ' signed-in devices', '') + '</div>');
    html += card('Export', '', '<p>Everything you entered, in one file, on every plan.</p><div class="sg-foot"><button class="key key-s" type="button" data-act="export">' + A.ic('download') + 'Export everything</button></div>');
    html += card('Notifications', more('#/profile/notifications', 'All of them'), hhNotifications(true), 'wide');
    /* THE TUTORIAL (2 Oct 2026): start it again at any of its five desks. In the tutorial's own
       household (?tutorial) freya-tutorial.js draws the card and answers its keys; in the demo and
       ?day-one the card is tutDemoCard(), which opens the tutorial's household (3 Oct 2026) */
    var tp = window.FT && window.FT.profile ? window.FT.profile() : A.TUT ? null : tutDemoCard();
    if (tp) html += card('The tutorial', tp.meta, tp.body, 'wide tq-tut');
    /* THE FINE PRINT, at the foot like a website's (29 Sep 2026): the method behind the what-if tools */
    return html + '</div><p class="help pf-fine"><b>Fine print.</b> <a class="link" href="#/profile/boundary">The boundary</a>: what Finna does not do, and where those questions go. <a class="link" href="#/profile/method">How the numbers work</a>: what the what-if tools assume, where they stop, and their sources.</p></main>';
  }
  function hhMembers() {
    var S = A.S;
    return '<div>' + S.members.map(function (m) {
      return '<div class="record">' + A.ic('user') + '<div class="record-main"><span class="record-title">' + e(m.name) + (m.id === S.viewer ? '\u00a0· you' : '') + '</span><span class="record-sub">' + eMail(m.email) + ' · joined ' + A.date(m.joined) + '</span></div>' +
        '<div class="record-meta"><span class="status-label ok">' + (m.role === 'owner' ? 'Owner' : 'Partner') + '</span></div></div>';
    }).join('') + '</div>' +
      '<form class="panel" data-form="invite" novalidate><div class="intro"><span class="eyebrow">Two adults share the free office</span><h2 class="title">Invite someone</h2></div>' +
      '<div class="form-row"><label class="label" for="inv-email">Their email</label><input class="input" id="inv-email" name="email" type="email" placeholder="name@example.com" required><span class="help">They see and edit everything you do.</span><span class="error">Enter an email address.</span></div>' +
      '<div class="actions"><button class="key" type="submit">Send the invitation</button></div></form>' +
      '<p class="help">Children, parents and others are recorded as <a class="link" href="#/records/family" style="font-size:var(--text-label)">people</a>, without a login.</p>';
  }
  function hhPlan() {
    var F = A.S.freya;
    var mods = [['Family', 'Members beyond two adults, more generations, and the Family Charter: who decides what.'], ['Advisers', 'Invite your attorney, CPA or banker, with access limited to what they cover.'],
      ['Structures', 'Companies, trusts and foundations inside the record, with a combined view.'], ['Your own family-office entity', 'Setting up and running an entity of your own.'],
      ['Reporting', 'A quarterly family report, and a pack for trustees or a bank.'], ['Tax pack', 'A year-end file handed to your CPA. It organizes; it does not advise.'],
      ['More Freya', 'Freya beyond the monthly allowance.'], ['Concierge setup', 'A person builds the balance sheet with you.']];
    return '<div class="panel"><div class="intro"><span class="eyebrow">Your plan</span><h2 class="title">The free office</h2><p class="lead">All five desks for your household, Learn in full, and Freya within a monthly allowance. Export at any time.</p></div>' +
      '<div class="stack"><div><div class="meter"><i style="width:' + (F.messages / F.allowanceMessages * 100).toFixed(0) + '%"></i></div><div class="progress-line"><span>Freya · ' + F.messages + ' of ' + F.allowanceMessages + ' messages this month</span><span>Resets October 1</span></div></div>' +
      '<div><div class="meter"><i style="width:' + (F.documents / F.allowanceDocuments * 100).toFixed(0) + '%"></i></div><div class="progress-line"><span>Documents read · ' + F.documents + ' of ' + F.allowanceDocuments + '</span><span>The weekly briefing is always included</span></div></div></div></div>' +
      '<div class="block">' + sectionH('Modules, when the office reaches further') + '<p class="help">Modules add scope: more people, structures, outside parties, specialist work. None of them opens Learn or an investment; those open only through understanding. Prices are being finalized.</p><div class="next-list">' +
      mods.map(function (m) { return '<div class="next-item"><b>' + e(m[0]) + '</b>' + e(m[1]) + '</div>'; }).join('') + '</div></div>';
  }
  function hhSecurity() {
    var S = A.S;
    return '<div class="panel"><div class="intro"><span class="eyebrow">Sign-in</span></div><dl class="pairs"><div><dt>Two-factor sign-in</dt><dd>' + (S.security.twoFactor ? 'On' : 'Off') + '</dd></div>' +
      S.security.sessions.map(function (s) { return '<div><dt>' + e(s.device) + '</dt><dd>' + e(s.place) + ' · ' + e(s.last) + '</dd></div>'; }).join('') + '</dl></div>' +
      '<div class="block">' + sectionH('Access log') + '<p class="help">Who looked at or changed what. Entries are added, never edited.</p><div class="data-table" tabindex="0" role="region" aria-label="Access log" data-sort-key="log"><table><thead><tr>' + sth('When', 'date', 'desc', 'nw', 'desc') + sth('Who', 'text', 'asc') + '<th scope="col">What</th></tr></thead><tbody>' +
      S.log.slice().reverse().map(function (l, i) { return '<tr data-row="log' + i + '"><td class="nw" data-v="' + l.at + '">' + A.date(l.at) + '</td><td>' + e(l.who) + '</td><td>' + e(l.what) + '</td></tr>'; }).join('') + '</tbody></table></div></div>';
  }
  function hhNotifications(bare) {
    var n = A.S.notifications;
    function sw(k, label, note) { return '<div class="record"><div class="record-main"><span class="record-title">' + e(label) + '</span><span class="record-sub">' + e(note) + '</span></div><div class="record-meta"><label class="switch"><span class="sr">' + e(label) + '</span><input type="checkbox" data-notify="' + k + '"' + (n[k] ? ' checked' : '') + '></label></div></div>'; }
    return (bare ? '<div>' : '<div class="panel"><div class="intro"><span class="eyebrow">Each switch acts the moment you flip it</span></div><div>') +
      sw('briefing', 'The weekly briefing by email', 'Monday mornings. What changed, what needs you, what falls due.') +
      sw('renewals', 'Reminders when something falls due', 'From the Timeline, 30 days ahead.') +
      sw('needsYou', 'When something needs you', 'At most one email a week unless you ask for more.') +
      sw('learn', 'A nudge when a path opens', 'Never more than once a week.') + (bare ? '</div>' : '</div></div>');
  }
  function hhExport() {
    return '<div class="cta"><div class="cta-text"><b>Everything you have entered, in one file</b><span>People, lines, every valuation with its history, documents’ details, your policy versions, cover, the will record and the access log. On every plan, including after a downgrade.</span></div>' +
      '<button class="key" type="button" data-act="export">' + A.ic('download') + 'Export everything</button></div>';
  }

  /* ══ THE WHAT-IF TOOLS (28 Sep 2026) ══════════════════════════════════════════════════════
     Christian agreed where the simulations go, and how: pages and places of their own, never a
     modal, with Freya beside them to answer questions. Five tools at launch, each opening on the
     household's own record:
       · Set-aside planner    Governance › Wealth planning, under the goal map
       · Retirement runway    Governance › Retirement runway (#/policy/runway)
       · Mix lab              Investment › Mix lab (#/investment/mix)
       · Cash runway          Protection › Safety check
       · The cost of waiting  Learn · Investment Foundation, quest 1
     The engine is sim.js (A.sim); these functions only draw what it returns. A tool is a scene in
     its desk's ground: the answer in words, the tiles, the controls beside the picture, the legend
     every forecast carries, "How the numbers work" in the sheet, and questions for Freya. Nothing a
     tool does changes the record; the answers it asks for that the record does not hold yet
     (monthly spending, spending in retirement, Social Security) are kept in S.simAnswers.
     Freya reads a tool's state (simContext), answers from it and can move its controls (simAsk). */
  var MON3 = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var SIMC = [
    { k: 'shares', name: 'Shares', color: 'var(--c-eq)', g: 'listed-shares' }, { k: 'bonds', name: 'Bonds', color: 'var(--c-bonds)', g: 'bonds' },
    { k: 'private', name: 'Private markets', color: 'var(--c-pe)', g: 'private' }, { k: 're', name: 'Real estate', color: 'var(--c-re)', g: 'real-estate' },
    { k: 'infra', name: 'Infrastructure', color: 'var(--c-pc)', g: 'infrastructure' }, { k: 'cash', name: 'Cash', color: 'var(--c-cash)', g: 'cash' }];
  /* the class colours (CHART COLOURS, 3 Oct 2026); infrastructure takes the illiquid family's cerulean
     until the tools carry private credit and hedge funds as classes of their own */
  var SIMST = {};   /* each tool's state for this visit: what the household is trying, never saved to the record */
  var SIM_LEGAL = 'The projections or other information generated by Finna’s {t} regarding the likelihood of various investment outcomes are hypothetical in nature, do not reflect actual investment results and are not guarantees of future results. Results may vary with each use and over time.';
  function sF() { return A.sim; }
  function sPc(x, dp) { return (x * 100).toFixed(dp == null ? 1 : dp).replace('-', '−') + '%'; }
  function sPcs(x) { return (x * 100).toFixed(x < 0.01 ? 2 : 1) + '%'; }
  function sMoney(n) { return (n < 0 ? '−' : '') + A.money(Math.abs(Math.round(n))); }
  /* short, with one decimal under $10K so a monthly figure keeps its meaning ($4.5K, not $5K) */
  function sShort(n) {
    var a = Math.abs(n), s = n < 0 ? '−' : '';
    if (a >= 1e6) return s + A.sym() + (a / 1e6).toFixed(a >= 1e7 ? 1 : 2).replace(/\.?0+$/, '') + 'M';
    if (a >= 1e4) return s + A.sym() + Math.round(a / 1e3) + 'K';
    if (a >= 1e3) return s + A.sym() + (a / 1e3).toFixed(1).replace(/\.0$/, '') + 'K';
    return s + A.sym() + Math.round(a);
  }
  function sMonths(m) {
    if (!isFinite(m)) return 'as long as it lasts'; if (m < 1) return 'less than a month';
    var f = Math.floor(m); if (f < 24) return f + (f === 1 ? ' month' : ' months');
    var y = Math.floor(f / 12), r = f % 12; return y + ' years' + (r ? ' and ' + r + (r === 1 ? ' month' : ' months') : '');
  }
  function sMon(i) { var m = sF().monthOf(i); return MON3[m[1] - 1] + ' ' + m[0]; }
  function sYM(ym) { return MON3[ym[1] - 1] + ' ' + ym[0]; }
  function simAnswers() { var S = A.S; return S.simAnswers || (S.simAnswers = { spendMonth: 12000, incomeMonth: 0, retireSpend: 120000, ss: 55000 }); }

  /* the record, as the engine reads it: every figure computed from the household's own lines */
  function simHH() {
    var S = A.S, p = A.policy(), inv = A.investable(), T = DEMO_TODAY;
    var adults = S.people.filter(function (x) { return x.member; }).sort(function (a, b) { return a.born - b.born; });
    var owner = S.people.filter(function (x) { return x.member === S.members[0].id; })[0] || adults[0] || { name: 'You', born: 1975 };
    var young = adults[adults.length - 1] || owner;
    /* the retirement goal: by its kind (the tutorial writes kind: 'retire', 29 Sep 2026), else by its name,
       so “Retiring”, “Retirement” and “Retire at 62” are all found */
    var ret = S.goals.filter(function (g) { return g.kind === 'retire' || /retir/i.test(g.name); })[0];
    var goals = S.goals.slice().sort(function (a, b) { return a.date < b.date ? -1 : 1; }).map(function (g) {
      return { id: g.id, name: g.name, amount: g.amount, due: [+g.date.slice(0, 4), +g.date.slice(5, 7)], priority: g.priority, linkedNow: A.goalProgress(g).have,
        linked: (g.linked || []).map(function (id) { var a = A.asset(id); return a ? a.name : ''; }).filter(Boolean).join(', ') || 'nothing linked yet', kind: g === ret ? 'retirement' : '' };
    });
    var cashIds = S.assets.filter(function (a) { return a.cls === 'cash'; }).map(function (a) { return a.id; });
    var drawsCash = S.goals.filter(function (g) { return g.date >= T && (g.linked || []).some(function (id) { return cashIds.indexOf(id) > -1; }); }).sort(function (a, b) { return a.date < b.date ? -1 : 1; })[0];
    var drawn = drawsCash ? (drawsCash.linked || []).filter(function (id) { return cashIds.indexOf(id) > -1; }).reduce(function (s, id) { return s + A.amount(id); }, 0) : 0;
    var taxable = S.assets.filter(function (a) { return a.program === 'Taxable brokerage'; });
    var mixTot = inv.total || 1;
    return {
      today: [+T.slice(0, 4), +T.slice(5, 7)], owner: owner, first: owner.name.split(' ')[0], young: young, youngFirst: young.name.split(' ')[0],
      save: (S.identity && S.identity.savingsMonthly) || 0, investable: inv.total, ret: ret, retStart: ret ? A.goalProgress(ret).have : 0, retAmount: ret ? ret.amount : 0,
      retireAge: ret ? Math.max(50, Math.min(75, +ret.date.slice(0, 4) - owner.born)) : 62, goals: goals,
      cash: A.reachableCash(), floor: p ? p.liquidityMin : 0, taxable: taxable.reduce(function (s, a) { return s + A.amount(a.id); }, 0), taxableNames: taxable.map(function (a) { return a.name; }),
      soonGoal: drawsCash || null, soonDraw: drawn,
      policyMix: p ? { shares: p.bands.equities[0], bonds: p.bands.fixed[0], cash: p.bands.cash[0], private: p.bands.private[0], re: 0, infra: 0 } : null,
      todayMix: inv.total ? { shares: inv.by.equities / mixTot * 100, bonds: inv.by.fixed / mixTot * 100, cash: inv.by.cash / mixTot * 100, private: inv.by.private / mixTot * 100, re: 0, infra: 0 } : null,
      horizon: (S.identity && S.identity.horizon) || 14
    };
  }
  /* the mixes a tool can start from: the policy's targets, what is held today, 60/40, the family office average */
  function simPresets(H) {
    var P = [];
    if (H.policyMix) P.push({ k: 'policy', name: 'Your policy', s: 'Governance', mix: H.policyMix });
    if (H.todayMix) P.push({ k: 'today', name: 'What you hold', s: 'Held', mix: H.todayMix });
    P.push({ k: 'sixty', name: '60/40', s: '60/40', mix: { shares: 60, bonds: 40, cash: 0, private: 0, re: 0, infra: 0 } });
    P.push({ k: 'fo', name: 'Family office average', s: 'Family office', mix: { shares: 24, bonds: 14, cash: 7, private: 30, re: 25, infra: 0 }, pe: 85 });
    return P;
  }
  function simPreset(H, k) { return simPresets(H).filter(function (p) { return p.k === k; })[0]; }

  /* ── the parts every tool is made of ───────────────────────────────────────────────── */
  function sSlide(k, label, min, max, step, val, hint, g) {
    return '<div class="sim-c"><div class="sim-c-h"><label for="sim-' + k + '">' + (g ? gl(g, e(label)) : e(label)) + '</label><output data-out="' + k + '" for="sim-' + k + '"></output></div>' +
      '<input class="slider" id="sim-' + k + '" type="range" data-k="' + k + '" min="' + min + '" max="' + max + '" step="' + step + '" value="' + val + '">' + (hint ? '<p class="sim-hint">' + hint + '</p>' : '') + '</div>';
  }
  /* a gliding switch; opts: [value, name, short name for a phone] */
  function sSeg(k, label, opts, cur, hint) {
    return '<div class="sim-c"><span class="sim-c-h"><span class="sim-lbl" id="sim-' + k + '-l">' + e(label) + '</span></span><div class="seg-wrap"><div class="seg" role="group" aria-labelledby="sim-' + k + '-l" data-seg="' + k + '"><span class="seg-thumb" aria-hidden="true"></span>' +
      opts.map(function (o) { return '<button type="button" data-v="' + o[0] + '" aria-pressed="' + (o[0] === cur) + '"><span class="seg-l">' + e(o[1]) + '</span><span class="seg-s">' + e(o[2] || o[1]) + '</span></button>'; }).join('') +
      '</div></div>' + (hint ? '<p class="sim-hint">' + hint + '</p>' : '') + '</div>';
  }
  /* a tool: its scene, its words, its controls beside its picture, then the legend and the way out */
  function sTool(o) {
    return '<section class="scene on-tint scene-' + o.desk + ' sim sim-' + o.id + '" data-sim="' + o.id + '" aria-label="' + e(o.name) + '">' +
      '<div class="sim-words"><span class="eyebrow">' + e(o.eyebrow) + '</span><p class="sc-answer" data-sim-say aria-live="polite"></p><p class="sc-sub" data-sim-sub></p>' +
      '<ul class="sc-facts hl sim-facts" data-sim-tiles></ul></div>' + lvFor('tool:' + o.id, 'mini', 'Before you try it') + (o.top || '') +
      '<div class="sim-grid"><div class="sim-ctl">' + o.controls + '</div><div class="sim-out">' + o.out + '</div></div>' + (o.after || '') +
      '<div class="sim-foot"><p class="sim-legal"><b>' + gl('hypothetical', 'Hypothetical.') + '</b> ' + e(SIM_LEGAL.replace('{t}', o.name)) + '</p>' +
      '<div class="sim-keys"><button class="key key-s key-secondary" type="button" data-act="sim-method" data-id="' + o.id + '">How the numbers work</button>' +
      '<details class="sim-num"><summary class="key key-s key-secondary">Show the numbers</summary><div class="sim-num-in" data-sim-table></div></details></div>' +
      (o.ask && o.ask.length ? '<div class="sim-ask"><span class="sim-ask-h">' + A.fyMark('ready') + '<span>Ask Freya</span></span>' + o.ask.map(function (q) { return '<button class="key key-s key-secondary" type="button" data-act="ask" data-q="' + e(q) + '">' + e(q) + '</button>'; }).join('') + '</div>' : '') +
      '</div></section>';
  }
  function sFirst(desk, name, l, key) {
    return '<section class="scene on-tint scene-' + desk + ' sim sim-empty" aria-label="' + e(name) + '"><div class="sim-words"><span class="eyebrow">' + e(name) + '</span><p class="sc-answer">' + e(l[0]) + '</p><p class="sc-sub">' + e(l[1]) + '</p>' +
      (key ? '<div class="actions">' + key + '</div>' : '') + '</div></section>';
  }
  /* tiles, as the scenes draw them: the name on top, the value large, what it is small. A lead tile
     (lead) holds the one big figure across the full width; l may be a list, one line each */
  function sTiles(box, list) {
    var ul = box.querySelector('[data-sim-tiles]'); if (!ul) return;
    ul.innerHTML = list.filter(Boolean).map(function (t) {
      var head = '<span class="hl-k"><span class="hl-kn"><span class="hl-kt">' + e(t.k) + '</span>' + (t.g ? glI(t.g) : '') + '</span></span><b class="hl-v">' + e(t.v) + '</b>',
        cls = (t.loss ? 'loss' : '') + (t.loss && t.lead ? ' ' : '') + (t.lead ? 'lead' : '');
      return '<li' + (cls ? ' class="' + cls + '"' : '') + '>' + (t.lead ? '<span class="hl-kv">' + head + '</span>' : head) +
        '<span class="hl-l">' + [].concat(t.l || '').map(e).join('<br>') + '</span></li>';
    }).join('');
  }
  function sSay(box, main, sub) {
    var s = box.querySelector('[data-sim-say]'), b = box.querySelector('[data-sim-sub]');
    if (s) s.innerHTML = main; if (b) { b.innerHTML = sub || ''; b.hidden = !sub; }
  }
  /* a plain table of the numbers, labelled cell by cell so a phone can list it */
  function sTable(el, head, rows) {
    if (!el) return;
    el.innerHTML = '<div class="data-table sim-dt"><table><thead><tr>' + head.map(function (h, i) { return '<th scope="col"' + (i ? ' class="num"' : '') + '>' + e(h) + '</th>'; }).join('') + '</tr></thead><tbody>' +
      rows.map(function (r) { return '<tr>' + r.map(function (v, i) { return '<td' + (i ? ' class="num"' : '') + ' data-label="' + e(head[i]) + '">' + e(v) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>';
  }
  function sLegend(el, items) {
    if (!el) return;
    el.innerHTML = items.map(function (it) {
      var k = it[2], st = k === 'sw' || k === 'band' ? 'background:' + it[1] : k === 'area' ? 'background:' + it[1][0] + ';border-color:' + it[1][1] : 'border-color:' + it[1];
      return '<span><i class="' + (k || 'ln') + '" style="' + st + '"></i>' + e(it[0]) + '</span>';
    }).join('');
  }
  /* the gliding switch's thumb sits under the chosen label (labels differ in width) */
  function sThumbs(box) {
    Array.prototype.forEach.call(box.querySelectorAll('[data-seg]'), function (seg) {
      var on = seg.querySelector('[aria-pressed="true"]');
      seg.style.setProperty('--x', (on ? on.offsetLeft : 0) + 'px'); seg.style.setProperty('--w', (on ? on.offsetWidth : 0) + 'px');
    });
  }
  function sFill(sl) { var min = +sl.min, max = +sl.max; sl.style.setProperty('--fill', ((+sl.value - min) / (max - min || 1) * 100) + '%'); }
  /* put the state into the controls: sliders, their words, and the switches */
  function sSync(box, st, fmt) {
    Array.prototype.forEach.call(box.querySelectorAll('input.slider[data-k]'), function (sl) {
      var k = sl.getAttribute('data-k'); if (st[k] == null) return;
      sl.value = st[k]; sFill(sl); var o = box.querySelector('[data-out="' + k + '"]'); if (o && fmt[k]) o.textContent = fmt[k](+sl.value);
    });
    Array.prototype.forEach.call(box.querySelectorAll('[data-seg]'), function (seg) {
      var k = seg.getAttribute('data-seg'); if (!(k in st)) return;
      Array.prototype.forEach.call(seg.querySelectorAll('button'), function (b) { b.setAttribute('aria-pressed', String(st[k] != null && b.getAttribute('data-v') === String(st[k]))); });
    });
    sThumbs(box);
  }
  /* wire the controls once: a slider or a switch writes the state, then the tool redraws */
  function sWire(box, st, fmt, update, before) {
    if (box.getAttribute('data-wired')) return; box.setAttribute('data-wired', '1');
    box.addEventListener('input', function (ev) {
      var t = ev.target; if (!t.matches('input.slider[data-k]')) return;
      var k = t.getAttribute('data-k'); if (before && before(k, +t.value) === false) return;
      st[k] = +t.value; sFill(t); var o = box.querySelector('[data-out="' + k + '"]'); if (o && fmt[k]) o.textContent = fmt[k](st[k]); update(box);
    });
    box.addEventListener('click', function (ev) {
      var b = ev.target.closest('[data-seg] button'); if (!b || !box.contains(b)) return;
      var seg = b.closest('[data-seg]'), k = seg.getAttribute('data-seg'), v = b.getAttribute('data-v');
      if (before && before(k, v) === false) return;
      st[k] = v; sSync(box, st, fmt); update(box);
    });
  }

  /* ── one chart: lines, bands or bars, with a crosshair and a tip (the scenes' marks) ──── */
  var SVGNS = 'http://www.w3.org/2000/svg';
  function sEl(tag, at) { var n = document.createElementNS(SVGNS, tag); for (var k in at) if (at[k] != null) n.setAttribute(k, at[k]); return n; }
  function sTx(at, s) { var t = sEl('text', at); t.textContent = s; return t; }
  function sTicks(max, n) {
    if (max <= 0) return [0];
    var raw = max / n, mag = Math.pow(10, Math.floor(Math.log(raw) / Math.LN10)), f = raw / mag, step = (f <= 1 ? 1 : f <= 2 ? 2 : f <= 2.5 ? 2.5 : f <= 5 ? 5 : 10) * mag, t = [];
    for (var v = 0; v <= max * 1.0001 + step * 0.001; v += step) t.push(v);
    if (t[t.length - 1] < max) t.push(t[t.length - 1] + step);
    return t;
  }
  function sTip(tt, title, rows) {
    tt.innerHTML = '<b class="sim-tt-h">' + e(title) + '</b>' + rows.map(function (r) {
      return '<span class="sim-tt-r"><i class="' + (r[3] === 'band' ? 'band' : 'ln') + '" style="' + (r[3] === 'band' ? 'background:' : 'border-color:') + r[2] + '"></i><b>' + e(r[1]) + '</b> ' + e(r[0]) + '</span>';
    }).join('');
  }
  function sPlace(tt, box, x, W, top) {
    var bx = box.getBoundingClientRect().width, tw = tt.offsetWidth, left = x / W * bx + 14;
    if (left + tw > bx) left = x / W * bx - tw - 14;
    tt.style.left = Math.max(0, left) + 'px'; tt.style.top = top + 'px'; tt.classList.add('on');
  }
  function sChart(box, cfg) {
    if (!box) return;
    var W = Math.max(260, box.clientWidth), narrow = W < 520, H = cfg.height || (narrow ? 240 : 300), m = { t: 18, r: narrow ? 10 : 22, b: 28, l: narrow ? 50 : 60 };
    var iw = W - m.l - m.r, ih = H - m.t - m.b, n = cfg.x.length, all = [];
    cfg.series.forEach(function (s) { (s.values || []).concat(s.hi || [], s.lo || []).forEach(function (v) { all.push(v); }); });
    (cfg.hlines || []).forEach(function (h) { all.push(h.y); });
    var ymax = Math.max.apply(null, all.concat([0])), ymin = Math.min.apply(null, all.concat([0])), capped = cfg.yMax && ymax > cfg.yMax; if (capped) ymax = cfg.yMax;
    var nt = sTicks(Math.max(ymax, -ymin) || 1, 4), step = nt.length > 1 ? nt[1] - nt[0] : 1, pos = [0], neg = [];
    while (pos[pos.length - 1] < ymax - 1e-9) pos.push(pos[pos.length - 1] + step);
    for (var v = -step; ymin < 0 && v > ymin - step * 0.999; v -= step) neg.unshift(v);
    var ticks = neg.concat(pos), y0 = ticks[0], y1 = ticks[ticks.length - 1], bw = cfg.bars ? iw / n : 0;
    function X(i) { return cfg.bars ? m.l + bw * (i + 0.5) : m.l + (n === 1 ? 0 : i * iw / (n - 1)); }
    function Y(v) { return m.t + ih - (v - y0) / (y1 - y0) * ih; }
    var svg = sEl('svg', { class: 'sc-svg sim-svg', viewBox: '0 0 ' + W + ' ' + H, width: W, height: H, role: 'img', 'aria-label': cfg.label });
    var cid = 'sc' + Math.random().toString(36).slice(2, 8), defs = sEl('defs', {}), cp = sEl('clipPath', { id: cid });
    cp.appendChild(sEl('rect', { x: m.l - 6, y: m.t - 6, width: iw + 12, height: ih + 6 })); defs.appendChild(cp); svg.appendChild(defs);
    var g = sEl('g', { class: 'sim-grid-l' });
    ticks.forEach(function (t) { g.appendChild(sEl('line', { x1: m.l, x2: W - m.r, y1: Y(t), y2: Y(t) })); g.appendChild(sTx({ x: m.l - 8, y: Y(t) + 4, 'text-anchor': 'end' }, cfg.yFmt(t))); });
    svg.appendChild(g);
    if (y0 < 0) svg.appendChild(sEl('line', { class: 'sim-zero', x1: m.l, x2: W - m.r, y1: Y(0), y2: Y(0) }));
    var every = cfg.xEvery || Math.ceil(n / (narrow ? 5 : 9));
    /* the last label is dropped when it would crowd the one before it: too few steps after it, or too
       few pixels for both (phone pass, 29 Sep 2026: "Mo 12Mo 14" at 390) — about 7px a character */
    var rest = (n - 1) % every, prev = n - 1 - rest;
    cfg.x.forEach(function (x, i) { if (i % every && i !== n - 1) return; if (i === n - 1 && rest && (rest < every * 0.6 || X(i) - X(prev) < (String(cfg.xFmt(cfg.x[prev])).length + String(cfg.xFmt(x)).length) * 3.6 + 12)) return; svg.appendChild(sTx({ x: X(i), y: H - 8, 'text-anchor': 'middle' }, cfg.xFmt(x))); });
    (cfg.hlines || []).forEach(function (h) {
      svg.appendChild(sEl('line', { class: 'sim-ref' + (h.dash ? ' dash' : ''), x1: m.l, x2: W - m.r, y1: Y(h.y), y2: Y(h.y) }));
      svg.appendChild(sTx(h.at != null ? { x: X(h.at) + 8, y: Y(h.y) - 6, class: 'v sim-halo' } : { x: W - m.r, y: Y(h.y) - 6, 'text-anchor': 'end', class: 'v sim-halo' }, h.label));
    });
    (cfg.marks || []).forEach(function (mk) {
      var i = cfg.x.indexOf(mk.x); if (i < 0) return;
      svg.appendChild(sEl('line', { class: 'sim-mark', x1: X(i), x2: X(i), y1: m.t, y2: m.t + ih }));
      svg.appendChild(sTx({ x: X(i) + 6, y: mk.low ? m.t + ih - 8 : m.t + 12, class: 'sim-halo' }, mk.label));
    });
    var plot = sEl('g', { 'clip-path': 'url(#' + cid + ')' });
    cfg.series.forEach(function (s) {
      var d = '', i;
      if (s.kind === 'band') {
        for (i = 0; i < n; i++) d += (i ? 'L' : 'M') + X(i) + ',' + Y(s.hi[i]);
        for (i = n - 1; i >= 0; i--) d += 'L' + X(i) + ',' + Y(s.lo[i]);
        plot.appendChild(sEl('path', { d: d + 'Z', style: 'fill:' + s.fill + ';stroke:none' }));
      } else if (s.kind === 'bar') {
        var w = Math.min(24, bw * 0.62);
        s.values.forEach(function (val, j) {
          if (Math.abs(val) < 1e-9) return;
          var yv = Y(val), yb = Y(0), h = Math.abs(yb - yv), r = Math.min(4, h / 2), x = X(j) - w / 2;
          var p = val > 0 ? 'M' + x + ',' + yb + 'V' + (yv + r) + 'Q' + x + ',' + yv + ' ' + (x + r) + ',' + yv + 'H' + (x + w - r) + 'Q' + (x + w) + ',' + yv + ' ' + (x + w) + ',' + (yv + r) + 'V' + yb + 'Z'
            : 'M' + x + ',' + yb + 'V' + (yv - r) + 'Q' + x + ',' + yv + ' ' + (x + r) + ',' + yv + 'H' + (x + w - r) + 'Q' + (x + w) + ',' + yv + ' ' + (x + w) + ',' + (yv - r) + 'V' + yb + 'Z';
          plot.appendChild(sEl('path', { d: p, style: 'fill:' + (s.colorAt ? s.colorAt(j) : s.color) }));
        });
      } else {
        s.values.forEach(function (val, j) { d += (j ? 'L' : 'M') + X(j) + ',' + Y(val); });
        plot.appendChild(sEl('path', { d: d, style: 'fill:none;stroke:' + s.color + ';stroke-width:' + (s.width || 2) + 'px;stroke-linejoin:round;stroke-linecap:round' + (s.dash ? ';stroke-dasharray:4 4' : '') }));
      }
    });
    svg.appendChild(plot);
    /* a word inside a filled area, drawn only where the whole word fits between its edges */
    (cfg.areaLabels || []).forEach(function (l) {
      if (l.i < 0 || l.i >= n || (l.wide && narrow)) return;
      var j = Math.min(n - 1, l.i + Math.ceil((l.text.length * 7.6 + 12) / (iw / (n - 1 || 1)))), low = Infinity, high = -Infinity;
      function at(a, k) { return a && a.length != null ? a[k] : a; }
      for (var k = l.i; k <= j; k++) { low = Math.min(low, Y(at(l.lo, k))); high = Math.max(high, Y(at(l.hi, k))); }
      if (low - high < (l.min || 22)) return;
      svg.appendChild(sTx({ x: X(l.i) + 8, y: l.bottom ? low - 7 : (low + high) / 2 + 4, class: 'v sim-halo', style: 'fill:' + l.color }, l.text));
    });
    (cfg.labels || []).forEach(function (l) { var i = cfg.x.indexOf(l.x); if (i < 0) return; svg.appendChild(sTx({ x: X(i), y: l.v < 0 ? Y(l.v) + 16 : Y(l.v) - 8, 'text-anchor': 'middle', class: 'v sim-halo' + (l.cls ? ' ' + l.cls : '') }, l.text)); });
    if (capped && cfg.capNote && !narrow) svg.appendChild(sTx({ x: W - m.r, y: m.t - 4, 'text-anchor': 'end', class: 'sim-halo' }, cfg.capNote));
    var cross = sEl('line', { class: 'sim-cross', y1: m.t, y2: m.t + ih, opacity: 0 }); svg.appendChild(cross);
    var dots = cfg.series.filter(function (s) { return !s.kind || s.kind === 'line'; }).map(function (s) { var c = sEl('circle', { r: 4.5, class: 'sim-dot', style: 'fill:' + s.color, opacity: 0 }); svg.appendChild(c); return { s: s, c: c }; });
    var hit = sEl('rect', { x: m.l - 6, y: m.t, width: iw + 12, height: ih, class: 'sim-hit', tabindex: 0, 'aria-label': cfg.label + '. Use the arrow keys to read each point.' }); svg.appendChild(hit);
    box.innerHTML = ''; box.appendChild(svg); var tt = document.createElement('div'); tt.className = 'sim-tt'; box.appendChild(tt);
    var cur = -1;
    function show(i) {
      cur = Math.max(0, Math.min(n - 1, i)); var x = X(cur);
      cross.setAttribute('x1', x); cross.setAttribute('x2', x); cross.setAttribute('opacity', 1);
      dots.forEach(function (d) { var yv = d.s.values[cur]; d.c.setAttribute('cx', x); d.c.setAttribute('cy', Y(Math.min(yv, y1))); d.c.setAttribute('opacity', yv > y1 ? 0 : 1); });
      sTip(tt, cfg.tipTitle ? cfg.tipTitle(cfg.x[cur], cur) : cfg.xFmt(cfg.x[cur]), cfg.tip(cur)); sPlace(tt, box, x, W, m.t);
    }
    function hide() { cross.setAttribute('opacity', 0); dots.forEach(function (d) { d.c.setAttribute('opacity', 0); }); tt.classList.remove('on'); }
    hit.addEventListener('pointermove', function (ev) { var r = svg.getBoundingClientRect(), px = (ev.clientX - r.left) / r.width * W; show(cfg.bars ? Math.floor((px - m.l) / bw) : Math.round((px - m.l) / (iw / (n - 1 || 1)))); });
    hit.addEventListener('pointerdown', function (ev) { var r = svg.getBoundingClientRect(), px = (ev.clientX - r.left) / r.width * W; show(cfg.bars ? Math.floor((px - m.l) / bw) : Math.round((px - m.l) / (iw / (n - 1 || 1)))); });
    hit.addEventListener('pointerleave', hide); hit.addEventListener('blur', hide); hit.addEventListener('focus', function () { show(cur < 0 ? 0 : cur); });
    hit.addEventListener('keydown', function (ev) { if (ev.key === 'ArrowRight') { show(cur + 1); ev.preventDefault(); } if (ev.key === 'ArrowLeft') { show(cur - 1); ev.preventDefault(); } if (ev.key === 'Escape') hide(); });
  }
  var SIM_SRC = [
    ['J.P. Morgan Asset Management, 2026 Long-Term Capital Market Assumptions, US matrix (USD), data as of 30 Sep 2025', 'https://am.jpmorgan.com/content/dam/jpm-am-aem/global/en/insights/ltcma-2026-us-matrix_usd.pdf'],
    ['J.P. Morgan Asset Management, press release: 2026 Long-Term Capital Market Assumptions, 20 Oct 2025', 'https://am.jpmorgan.com/us/en/asset-management/institutional/about-us/media/press-releases/jp-morgan-releases-2026-long-term-capital-market-assumptions/'],
    ['Verus, 2026 Capital Market Assumptions, Nov 2025 (hosted by IPOPIF)', 'https://www.ipopif.org/Resources/a96343a6-b25e-47d2-b857-99d4e7bea0fe/Verus%202026-Capital-Market-Assumptions.pdf'],
    ['Yahoo Finance, S&P 500 (TR) ^SP500TR, monthly history (S&P Dow Jones Indices data)', 'https://finance.yahoo.com/quote/%5ESP500TR/history/?frequency=1mo'],
    ['Portfolio Visualizer, Backtest Portfolio: VBMFX monthly returns', 'https://www.portfoliovisualizer.com/backtest-portfolio?s=y&timePeriod=4&startYear=1996&firstMonth=1&endYear=1997&lastMonth=12&symbol1=VBMFX&allocation1_1=100'],
    ['FRED, 3-Month Treasury Bill Secondary Market Rate (TB3MS), updated 1 Sep 2026', 'https://fred.stlouisfed.org/data/TB3MS'],
    ['FRED, FDIC National Rate: Savings (SNDR), September 2026: 0.37%', 'https://fred.stlouisfed.org/series/SNDR'],
    ['Cambridge Associates, Private Equity Index and Selected Benchmark Statistics, 30 Jun 2020 (quarterly US PE 1996–2020)', 'https://www.cambridgeassociates.com/wp-content/uploads/2020/11/WEB-2020-Q2-Global-Private-Equity.pdf'],
    ['Cambridge Associates, US Private Equity Benchmark Book, Q4 2025 (and each quarter’s book since 2020 Q3)', 'https://www.cambridgeassociates.com/wp-content/uploads/2026/06/2025-Q4-USPE-Benchmark-Book.pdf'],
    ['Cliffwater, 2023 Q4 Report on US Direct Lending (CDLI 2005–2023, leveraged loans 2005–2023)', 'https://cliffwater.com/files/cdli/docs/Cliffwater_Report_on_US_DirectLending.pdf'],
    ['Cliffwater, 2023 Q2 Report on US Direct Lending, Appendix A: CDLI quarterly returns (bdcs.com copy)', 'https://www.bdcs.com/docs/Cliffwater2023Q2ReportonUSDirectLending.pdf'],
    ['Union Square Capital Partners, NFI-ODCE Net Returns 1978–2024 (with NCREIF’s permission)', 'https://assets.usq.com/downloads/2024-Q4-USQ-NFI-ODCE.pdf'],
    ['Accordant ODCE Index Fund fact sheet, Q1 2026 (NFI-ODCE 2025 quarters)', 'https://investodcex.com/hubfs/Final%20Fact%20Sheet%20-%20Class%20I%20-%202026%20Q1.pdf?hsLang=en'],
    ['Scientific Infra & Private Assets, infraMetrics equity market indices factsheet: infra100 Core calendar-year returns, 2014–2025', 'https://publishing.sipametrics.com/factsheets/indices/LATEST_infraMetrics_equity_market_indices_factsheet.pdf'],
    ['Select Sector SPDR Trust, prospectus amendment, 2002: Utilities Select Sector SPDR (XLU) returns 1999–2001 (SEC EDGAR)', 'https://www.sec.gov/Archives/edgar/data/0001064641/000095013502002051/b42752ape485apos.txt'],
    ['Brookfield, Building portfolios with both public and private infrastructure: Cambridge Associates infrastructure index, 2003–2022, 8.81% standard deviation', 'https://publicsecurities.brookfield.com/sites/brookfield-psg-v3/files/brookfield-psg/insights/infrastructure/building-portfolios-with-both-public-and-private-infrastructure-v2.pdf'],
    ['UBS, Global Family Office Report 2025', 'https://www.ubs.com/content/dam/assets/wma/static/documents/ubs-gfo-report.pdf'],
    ['eCFR, 17 CFR 275.206(4)-1, Investment adviser marketing (current as of 24 Sep 2026)', 'https://www.ecfr.gov/current/title-17/chapter-II/part-275/section-275.206(4)-1'],
    ['FINRA Rule 2214, Requirements for the Use of Investment Analysis Tools', 'https://www.finra.org/rules-guidance/rulebooks/finra-rules/2214']
  ];

  /* ── RETIREMENT RUNWAY · Governance › Retirement runway ─────────────────────────────────────
     Will the money last as long as we do? 3,000 paths of yearly returns, in today's dollars,
     from what is linked to the retirement goal, to the younger partner's 95. */
  function rwMix(H, k) {
    if (k === 'lab') return mxState(H).pick;
    var p = simPreset(H, k); return p ? p.mix : simPresets(H)[0].mix;
  }
  function rwState(H) {
    if (SIMST.runway) return SIMST.runway;
    var ans = simAnswers();
    return (SIMST.runway = { age: H.retireAge, save: H.save, spend: ans.retireSpend, ss: ans.ss, mix: H.policyMix ? 'policy' : 'sixty', base: null });
  }
  function rwFmt(H) {
    return { age: function (v) { return v + ' (' + (H.owner.born + v) + ')'; }, save: sMoney, spend: sMoney, ss: sMoney };
  }
  function rwRun(H, st) {
    return sF().runway({ start: H.retStart, save: st.save, retireYear: H.owner.born + st.age, spend: st.spend, ss: st.ss, ssFrom: H.owner.born + 67,
      startYear: H.today[0] + 1, endYear: H.young.born + 95, mix: rwMix(H, st.mix), peShare: st.mix === 'lab' ? mxState(H).pe / 100 : null });
  }
  function simRunwayPage() {
    var H = simHH();
    /* ITS FIRST STEP DOES THE STEP (Chris, 29 Sep 2026: "It says nothing is linked to retirement goal yet
       but I don't see how you would link that"): with no retirement goal the key adds one; with a goal and
       nothing linked it opens the goal on the accounts it draws on. Saving brings the runway back here. */
    if (!H.ret) return sFirst('policy', 'Retirement runway', ['There is no retirement goal yet.', 'The runway starts from a goal to retire and the accounts set aside for it. Add the goal and choose what it draws on, and it opens here.'],
      '<button class="key" type="button" data-act="add-goal" data-name="Retire">Add a retirement goal</button>');
    if (!H.retStart) return sFirst('policy', 'Retirement runway', ['Nothing is linked to \u201c' + H.ret.name + '\u201d yet.', 'The runway starts from the accounts set aside for it. Choose them, and it opens here.'],
      '<button class="key" type="button" data-act="edit-goal" data-id="' + H.ret.id + '">Choose the accounts</button><a class="key key-secondary" href="#/policy/planning">Wealth planning</a>');
    var st = rwState(H), mixes = simPresets(H).filter(function (p) { return p.k !== 'fo'; }).map(function (p) { return [p.k, p.name, p.s]; }).concat([['lab', 'The Mix lab pick', 'Mix lab']]);
    var controls = sSlide('age', H.first + ' retires at', 56, 67, 1, st.age, 'The goal “' + e(H.ret.name) + '” is in the record.') +
      sSlide('save', 'Set aside each month', 0, 10000, 250, st.save, 'From the tutorial: ' + A.money(H.save) + '. It stops the year ' + e(H.first) + ' retires.') +
      sSlide('spend', 'Spending in retirement, a year', 60000, 200000, 5000, st.spend, 'In today’s ' + A.curWords() + '. Not in the record yet: the one new question.') +
      sSlide('ss', 'Social Security, both, a year', 0, 90000, 2500, st.ss, 'From ' + (H.owner.born + 67) + ', in today’s ' + A.curWords() + '. Not in the record yet.');
    var out = sSeg('mix', 'The mix', mixes) + '<div class="sim-legend" data-sim-legend></div><div class="sim-chart" data-sim-chart></div>';
    return sTool({ id: 'runway', desk: 'policy', name: 'Retirement runway', eyebrow: 'Will the money last? · from your record', controls: controls, out: out,
      ask: ['Why is it not 100 of 100?', 'What if ' + H.first + ' retires at 60?', 'Try spending $140,000 a year'] });
  }
  function rwUpdate(box) {
    var H = simHH(), st = rwState(H), r = rwRun(H, st), ry = H.owner.born + st.age, ri = r.years.indexOf(ry), nOf = Math.round(r.success * 100), end = H.young.born + 95;
    var key = JSON.stringify([st.age, st.save, st.spend, st.ss, st.mix]);
    if (!st.base) st.base = { r: r, key: key };
    var changed = key !== st.base.key, b0 = Math.round(st.base.r.success * 100), dn = nOf - b0;
    var worst = r.depl10 < 9999 ? 'In the worst 1 in 10 it runs out in ' + Math.round(r.depl10) + ', when ' + e(H.youngFirst) + ' is ' + (Math.round(r.depl10) - H.young.born) + '.' : 'Even in the worst 1 in 10, money is left in ' + end + '.';
    sSay(box, 'In ' + nOf + ' of 100 ' + gl('paths', 'paths') + ' the money lasts until ' + e(H.youngFirst) + ' is 95.',
      worst + (changed ? ' <b>' + (dn === 0 ? 'The same as where you started' : (dn > 0 ? '+' : '−') + Math.abs(dn) + (Math.abs(dn) === 1 ? ' path' : ' paths') + ' against where you started') + '</b> (' + b0 + ' of 100).' : ''));
    sTiles(box, [{ k: 'Money lasts to ' + end, v: nOf + ' of 100', l: 'paths, until ' + H.youngFirst + ' is 95', g: 'paths' },
      { k: 'At retirement, the middle', v: ri >= 0 ? sShort(r.p50[ri]) : '—', l: 'in ' + ry + ', today’s ' + A.curWords() + '' },
      { k: 'At retirement, 1 in 10 low', v: ri >= 0 ? sShort(r.p10[ri]) : '—', l: 'the goal is ' + sShort(H.retAmount), g: 'one-in-ten' }]);
    var series = [{ kind: 'band', hi: r.p90, lo: r.p10, fill: 'var(--sim-band)' }];
    if (changed) series.push({ kind: 'line', values: st.base.r.p50, color: 'var(--sim-ref)', width: 1.5, dash: true });
    series.push({ kind: 'line', values: r.p50, color: 'var(--sim-line)', width: 2 });
    sLegend(box.querySelector('[data-sim-legend]'), [['The middle path', 'var(--sim-line)'], ['1 in 10 low to 1 in 10 high', 'var(--sim-band)', 'band']].concat(changed ? [['The middle, where you started', 'var(--sim-ref)', 'dash']] : []));
    var ceil = Math.max.apply(null, r.p50.concat(changed ? st.base.r.p50 : [])) * 1.8;
    sChart(box.querySelector('[data-sim-chart]'), { x: r.years, series: series, yMax: ceil, capNote: 'The 1 in 10 high runs above the chart; the numbers show it', label: 'Invested wealth by year, in today’s ' + A.curWords() + ', to ' + end,
      yFmt: sShort, xFmt: String, marks: [{ x: ry, label: 'Retires', low: true }], tipTitle: function (y) { return y + ' · ' + H.first + ' ' + (y - H.owner.born) + ', ' + H.youngFirst + ' ' + (y - H.young.born); },
      tip: function (i) { return [['the middle', sShort(r.p50[i]), 'var(--sim-line)'], ['1 in 10 high', sShort(r.p90[i]), 'var(--sim-band)', 'band'], ['1 in 10 low', sShort(r.p10[i]), 'var(--sim-band)', 'band']].concat(changed ? [['the middle, where you started', sShort(st.base.r.p50[i]), 'var(--sim-ref)']] : []); } });
    sTable(box.querySelector('[data-sim-table]'), ['Year', '1 in 10 low', 'The middle', '1 in 10 high'],
      r.years.map(function (y, i) { return [y, i]; }).filter(function (x) { return x[0] % 5 === 0 || x[0] === ry || x[0] === end; }).map(function (x) { return [String(x[0]), sMoney(r.p10[x[1]]), sMoney(r.p50[x[1]]), sMoney(r.p90[x[1]])]; }));
    SIMST.runway.last = { n: nOf, depl10: r.depl10, p50: ri >= 0 ? r.p50[ri] : null, p10: ri >= 0 ? r.p10[ri] : null, ry: ry, end: end, stats: r.stats };
  }
  function rwMount(box) {
    var H = simHH(), st = rwState(H), fmt = rwFmt(H);
    sWire(box, st, fmt, rwUpdate);
    box.addEventListener('change', function () { var ans = simAnswers(); ans.retireSpend = st.spend; ans.ss = st.ss; A.save(); });
    sSync(box, st, fmt); rwUpdate(box);
  }

  /* ── MIX LAB · Investment › Mix lab ────────────────────────────────────────────────────
     What does a different mix change: the middle after the years chosen, the worst year, month
     and fall of the last thirty years, how long it stayed under water, what could be sold in a
     week. The range is the assumptions; the track record is history, month by month from 1996. */
  function mxState(H) {
    if (SIMST.mix) return SIMST.mix;
    var P = simPresets(H), f = P[0], pick = {}; SIMC.forEach(function (c) { pick[c.k] = f.mix[c.k] || 0; });
    return (SIMST.mix = { pre: f.k, pick: pick, pe: f.pe || 70, h: H.horizon });
  }
  function mxFmt() { return { pe: function (v) { return v + '%'; }, h: function (v) { return v + ' years'; } }; }
  function mxOutcome(H, m, pe, h) {
    var R = sF().mixRange(m, h, H.investable, pe / 100), tr = sF().trackRecord(m, pe / 100), t = sF().total(m) || 1;
    return { lo: R.lo, mid: R.mid, hi: R.hi, s: R.stats, tr: tr, liquid: ((m.shares || 0) + (m.bonds || 0) + (m.cash || 0)) / t };
  }
  function simMixPage() {
    var H = simHH();
    if (!H.investable) return sFirst('investment', 'Mix lab', ['Nothing to try a mix on yet.', 'The Mix lab starts from what you invest. Add an investment or retirement account in Records, and it opens here on your own amount.'],
      '<a class="key" href="#/records/own">Add what you hold</a>');
    var st = mxState(H), P = simPresets(H);
    var rows = SIMC.map(function (c) {
      return '<div class="sim-mixr"><i style="background:' + c.color + '"></i><label for="sim-mx-' + c.k + '">' + gl(c.g, e(c.name)) + '</label><output data-mxo="' + c.k + '"></output>' +
        '<input class="slider" id="sim-mx-' + c.k + '" type="range" min="0" max="100" step="1" data-mx="' + c.k + '" aria-label="' + e(c.name) + ', percent of the mix"></div>';
    }).join('');
    var controls = '<div class="sim-c"><span class="sim-c-h"><span class="sim-lbl">Your pick</span><output data-mxsum></output></span><div class="sim-mix">' + rows + '</div><p class="sim-hint">Move one and the others make room in proportion.</p></div>' +
      sSlide('pe', 'Of private markets, in private equity', 0, 100, 5, st.pe, 'The rest is private credit. Finna assumes 15.5% a year for private equity and 7.7% for private credit.', 'private-equity') +
      sSlide('h', 'Years ahead', 3, 30, 1, st.h, 'Financial Identity: “How long your savings could wait: ' + H.horizon + ' years.”');
    var out = sSeg('pre', 'Start from', P.map(function (p) { return [p.k, p.name, p.s]; })) + '<div class="sim-legend" data-sim-legend></div><div class="sim-chart sim-strip" data-mx-strip></div>';
    var after = '<div class="sim-track"><h3 class="sim-h3">Track record, January 1996 to December 2025</h3><p class="sim-note" data-mx-say></p>' +
      '<ul class="sc-facts hl sim-facts sim-facts-4" data-mx-tiles></ul><div class="sim-deck-wrap" data-mx-deck></div>' +
      '<h4 class="sim-h4">Your pick, below its previous high, month by month</h4><div class="sim-legend" data-mx-ulegend></div><div class="sim-chart" data-mx-under></div>' +
      '<h4 class="sim-h4">Your pick, each calendar year since 1996</h4><div class="sim-chart" data-mx-hist></div></div>';
    return sTool({ id: 'mix', desk: 'investment', name: 'Mix lab', eyebrow: 'What a different mix changes', controls: controls, out: out, after: after,
      ask: ['Why is 2008 marked?', 'Why is private equity’s volatility lower?', 'Try the family office average'] });
  }
  function mxRebalance(pick, k, v) {
    var others = SIMC.map(function (c) { return c.k; }).filter(function (x) { return x !== k; }), rest = others.reduce(function (a, x) { return a + pick[x]; }, 0), room = 100 - v;
    if (rest <= 0) { others.forEach(function (x) { pick[x] = 0; }); if (k === 'cash') pick.shares = room; else pick.cash = room; }
    else others.forEach(function (x) { pick[x] = pick[x] / rest * room; });
    pick[k] = v;
  }
  function mxSync(box, st) {
    SIMC.forEach(function (c) {
      var sl = box.querySelector('[data-mx="' + c.k + '"]'), o = box.querySelector('[data-mxo="' + c.k + '"]');
      if (sl) { sl.value = Math.round(st.pick[c.k]); sFill(sl); } if (o) o.textContent = Math.round(st.pick[c.k]) + '%';
    });
    var sum = box.querySelector('[data-mxsum]'); if (sum) sum.textContent = Math.round(SIMC.reduce(function (a, c) { return a + st.pick[c.k]; }, 0)) + '%';
  }
  function mxRows(H, st) {
    var P = simPresets(H), same = P.filter(function (p) { return SIMC.every(function (c) { return Math.abs((p.mix[c.k] || 0) - st.pick[c.k]) < 0.05; }); })[0];
    var list = [];
    if (H.policyMix) list.push({ n: 'Your policy', s: 'Governance', m: H.policyMix });
    if (H.todayMix) list.push({ n: 'What you hold today', s: 'Held today', m: H.todayMix });
    list.push({ n: same ? 'Your pick: ' + same.name.replace(/^Your /, 'your ').replace(/^What you hold$/, 'what you hold') : 'Your pick', s: 'Your pick', m: st.pick, pick: true });
    list.forEach(function (d) { d.o = mxOutcome(H, d.m, st.pe, st.h); });
    return list;
  }
  function mxUpdate(box) {
    var H = simHH(), st = mxState(H), rows = mxRows(H, st), Y = rows[rows.length - 1], T = rows.filter(function (d) { return d.n === 'What you hold today'; })[0], tr = Y.o.tr, w = tr.worstYear;
    SIMST.mix.rows = rows;
    /* the answer is the tiles (Rose, 14 Oct 2026, "go G"): no sentence on screen, so it stays for a
       screen reader only, and each figure is said once — the middle case leads, across the full width */
    var ans = box.querySelector('[data-sim-say]'), tw = T && !/what you hold/i.test(Y.n) ? T.o.tr.worstYear : null;
    if (ans) ans.classList.add('sr');
    sSay(box, 'After ' + st.h + ' years your pick’s middle case is ' + sShort(Y.o.mid) + ', between ' + sShort(Y.o.lo) + ' and ' + sShort(Y.o.hi) + '. Its worst year since 1996 was ' + w.year + ': ' + sPc(w.ret) + '.', '');
    sTiles(box, [{ k: 'Middle case after ' + st.h + ' years', v: sShort(Y.o.mid), l: ['From ' + sShort(H.investable) + ' today', '1 in 10: ' + sShort(Y.o.lo) + ' to ' + sShort(Y.o.hi)], lead: true },
      { k: 'Expected a year, your pick', v: sPc(Y.o.s.geo), l: 'compound; volatility ' + sPc(Y.o.s.vol), g: 'expected-return' },
      { k: 'Worst year since 1996', v: sPc(w.ret), l: [w.year + ' · ' + (w.ret < 0 ? 'a fall of ' + sShort(-w.ret * H.investable) : sShort(w.ret * H.investable))].concat(tw ? ['What you hold today: ' + (tw.year === w.year ? '' : tw.year + ', ') + sPc(tw.ret)] : []), loss: w.ret < 0 },
      { k: 'Could be sold within a week', v: Math.round(Y.o.liquid * 100) + '%', l: sShort(Y.o.liquid * H.investable) + ' of it' }]);
    sLegend(box.querySelector('[data-sim-legend]'), SIMC.map(function (c) { return [c.name, c.color, 'sw']; }).concat([['After ' + st.h + ' years: 1 in 10 low to 1 in 10 high', 'var(--sim-band)', 'band']]));
    mxStrip(box.querySelector('[data-mx-strip]'), rows, st.h);
    /* the track record, the way a portfolio deck shows it */
    var dp = tr.maxDD, t0 = T ? T.o.tr : null;
    var say = box.querySelector('[data-mx-say]');
    if (say) say.textContent = dp ? 'Your pick’s deepest fall was ' + sPc(dp.depth) + ', from ' + sMon(dp.peak) + ' to ' + sMon(dp.trough) + ': ' + dp.falling + ' months down, ' + (dp.recovering == null ? 'and not back by the end of 2025' : dp.recovering + ' months back up, ' + dp.under + ' months under water in all') + '. Its worst month was ' + sMon(tr.worstMonth.i) + ', ' + sPc(tr.worstMonth.ret) + '.' : 'Your pick never fell below a previous month-end high.';
    var ul = box.querySelector('[data-mx-tiles]');
    if (ul) ul.innerHTML = [
      { k: 'Worst month', v: sPc(tr.worstMonth.ret), l: sMon(tr.worstMonth.i) + ' · ' + sShort(tr.worstMonth.ret * H.investable), loss: tr.worstMonth.ret < 0 },
      { k: 'Deepest fall', v: dp ? sPc(dp.depth) : 'None', l: dp ? sMon(dp.peak) + ' → ' + sMon(dp.trough) : 'never below a high', loss: !!dp, g: 'deepest-fall' },
      { k: 'Months under water', v: dp ? (dp.under == null ? 'Not back' : String(dp.under)) : '0', l: dp ? dp.falling + ' down, ' + (dp.recovering == null ? 'not yet back' : dp.recovering + ' back up') : 'none', g: 'under-water' },
      { k: 'Back at its old high', v: dp ? (dp.rec == null ? 'Not yet' : sMon(dp.rec)) : '—', l: tr.longest.months ? 'longest spell under water: ' + tr.longest.months + ' months' : '' }
    ].map(function (t) { return '<li' + (t.loss ? ' class="loss"' : '') + '><span class="hl-k"><span class="hl-kn"><span class="hl-kt">' + e(t.k) + '</span>' + (t.g ? glI(t.g) : '') + '</span></span><b class="hl-v">' + e(t.v) + '</b><span class="hl-l">' + e(t.l) + '</span></li>'; }).join('');
    mxDeck(box.querySelector('[data-mx-deck]'), rows);
    sLegend(box.querySelector('[data-mx-ulegend]'), [['Your pick, below its previous high', 'var(--sim-loss)']].concat(t0 ? [['What you hold today', 'var(--sim-ref)']] : []));
    var under = [{ kind: 'band', hi: tr.dd.map(function () { return 0; }), lo: tr.dd.map(function (v) { return v * 100; }), fill: 'var(--sim-loss-wash)' }];
    if (t0) under.push({ kind: 'line', values: t0.dd.map(function (v) { return v * 100; }), color: 'var(--sim-ref)', width: 1 });
    under.push({ kind: 'line', values: tr.dd.map(function (v) { return v * 100; }), color: 'var(--sim-loss)', width: 1.5 });
    var uBox = box.querySelector('[data-mx-under]'), pctF = function (v) { return String(Math.round(v)).replace('-', '−') + '%'; };
    sChart(uBox, { x: tr.dd.map(function (_, i) { return i; }), height: 220, series: under, marks: dp ? [{ x: dp.trough, label: 'Deepest: ' + sMon(dp.trough), low: true }] : [],
      label: 'How far below its previous high your pick was, each month since 1996', yFmt: pctF, xFmt: function (i) { return String(sF().monthOf(i)[0]); }, xEvery: uBox && uBox.clientWidth < 520 ? 120 : 60,
      tipTitle: function (i) { return sMon(i); }, tip: function (i) { return [['your pick, below its high', sPc(tr.dd[i]), 'var(--sim-loss)']].concat(t0 ? [['what you hold today', sPc(t0.dd[i]), 'var(--sim-ref)']] : []); } });
    var wi = tr.years.indexOf(w.year), hBox = box.querySelector('[data-mx-hist]');
    sChart(hBox, { x: tr.years, bars: true, height: 240, series: [{ kind: 'bar', values: tr.yret.map(function (v) { return v * 100; }), colorAt: function (i) { return i === wi ? 'var(--sim-loss)' : 'var(--sim-soft)'; } }],
      labels: [{ x: w.year, v: w.ret * 100, text: w.year + ' · ' + sPc(w.ret), cls: 'sim-loss-t' }], label: 'Your pick, each calendar year from 1996 to 2025', yFmt: pctF, xFmt: String, xEvery: hBox && hBox.clientWidth < 520 ? 6 : 3,
      tipTitle: String, tip: function (i) { return [['your pick', sPc(tr.yret[i]), i === wi ? 'var(--sim-loss)' : 'var(--sim-soft)', 'band']].concat(t0 ? [['what you hold today', sPc(t0.yret[i]), 'var(--sim-ref)']] : [], [['on ' + sShort(H.investable), sShort(tr.yret[i] * H.investable), 'var(--sim-ref)']]); } });
    sTable(box.querySelector('[data-sim-table]'), ['Mix', 'Shares', 'Bonds', 'Private', 'Real estate', 'Infrastructure', 'Cash', 'Expected a year', '1 in 10 low', 'Middle', '1 in 10 high', 'Worst year'],
      rows.map(function (d) { var t = sF().total(d.m) || 1; return [d.n].concat(['shares', 'bonds', 'private', 're', 'infra', 'cash'].map(function (k) { return Math.round((d.m[k] || 0) / t * 100) + '%'; }), [sPc(d.o.s.geo), sMoney(d.o.lo), sMoney(d.o.mid), sMoney(d.o.hi), d.o.tr.worstYear.year + ': ' + sPc(d.o.tr.worstYear.ret)]); }));
  }
  /* the range strip: one row per mix — its name, its make-up, then its range after the years chosen */
  function mxStrip(box, rows, h) {
    if (!box) return;
    var W = Math.max(260, box.clientWidth), rowH = 100, top = 4, H2 = top + rowH * rows.length + 24, m = { l: 4, r: 4 };
    var xmax = Math.max.apply(null, rows.map(function (d) { return d.o.hi; })) * 1.03, xmin = Math.min.apply(null, rows.map(function (d) { return d.o.lo; })) * 0.95;
    var tks = sTicks(xmax, W < 520 ? 3 : 5).filter(function (v) { return v >= xmin && v <= xmax; });
    function X(v) { return m.l + (v - xmin) / (xmax - xmin) * (W - m.l - m.r); }
    var svg = sEl('svg', { class: 'sc-svg sim-svg', viewBox: '0 0 ' + W + ' ' + H2, width: W, height: H2, role: 'img', 'aria-label': 'The range after ' + h + ' years, for ' + rows.length + ' mixes' });
    var g = sEl('g', { class: 'sim-grid-l' });
    tks.forEach(function (v) { g.appendChild(sEl('line', { x1: X(v), x2: X(v), y1: top + 30, y2: H2 - 22 })); g.appendChild(sTx({ x: X(v), y: H2 - 6, 'text-anchor': 'middle' }, sShort(v))); });
    svg.appendChild(g);
    var tt = document.createElement('div'); tt.className = 'sim-tt';
    rows.forEach(function (d, i) {
      var y = top + i * rowH, cy = y + 60, t = sF().total(d.m) || 1, bw = Math.min(240, W * 0.4), x = W - m.r - bw;
      svg.appendChild(sTx({ x: m.l, y: y + 13, class: 'v' }, W < 420 ? d.s : d.n));
      SIMC.forEach(function (c) { var wd = (d.m[c.k] || 0) / t * bw; if (wd <= 0.5) return; svg.appendChild(sEl('rect', { x: x, y: y + 4, width: Math.max(0, wd - 2), height: 10, rx: 2, style: 'fill:' + c.color })); x += wd; });
      svg.appendChild(sEl('line', { x1: X(d.o.lo), x2: X(d.o.hi), y1: cy, y2: cy, class: 'sim-rng' }));
      svg.appendChild(sEl('circle', { cx: X(d.o.mid), cy: cy, r: 6, class: 'sim-mid' }));
      svg.appendChild(sTx({ x: X(d.o.mid), y: cy - 12, 'text-anchor': 'middle', class: 'v' }, sShort(d.o.mid)));
      if (X(d.o.mid) - X(d.o.lo) > 70) svg.appendChild(sTx({ x: X(d.o.lo), y: cy + 22 }, sShort(d.o.lo)));
      if (X(d.o.hi) - X(d.o.mid) > 70) svg.appendChild(sTx({ x: X(d.o.hi), y: cy + 22, 'text-anchor': 'end' }, sShort(d.o.hi)));
      var hit = sEl('rect', { x: 0, y: y, width: W, height: rowH, class: 'sim-hit', tabindex: 0, 'aria-label': d.n + ': middle ' + sShort(d.o.mid) + ', 1 in 10 low ' + sShort(d.o.lo) + ', 1 in 10 high ' + sShort(d.o.hi) + ', worst year ' + d.o.tr.worstYear.year + ' ' + sPc(d.o.tr.worstYear.ret) });
      function on() {
        sTip(tt, d.n + ' · after ' + h + ' years', [['the middle', sShort(d.o.mid), 'var(--sim-line)'], ['1 in 10 high', sShort(d.o.hi), 'var(--sim-band)', 'band'], ['1 in 10 low', sShort(d.o.lo), 'var(--sim-band)', 'band'], ['worst year, ' + d.o.tr.worstYear.year, sPc(d.o.tr.worstYear.ret), 'var(--sim-loss)'], ['sellable in a week', Math.round(d.o.liquid * 100) + '%', 'var(--sim-ref)']]);
        sPlace(tt, box, X(d.o.mid), W, (cy + 14) * box.clientWidth / W);
      }
      hit.addEventListener('pointermove', on); hit.addEventListener('pointerdown', on); hit.addEventListener('focus', on);
      hit.addEventListener('pointerleave', function () { tt.classList.remove('on'); }); hit.addEventListener('blur', function () { tt.classList.remove('on'); });
      svg.appendChild(hit);
    });
    box.innerHTML = ''; box.appendChild(svg); box.appendChild(tt);
  }
  /* the deck: every figure a portfolio deck shows, one column per mix; a loss in the error words */
  function mxDeck(el, rows) {
    if (!el) return;
    var D = [['Annual return, 1996–2025', function (t) { return sPc(t.cagr); }], ['Volatility, a year', function (t) { return sPc(t.vol); }, 0, 'volatility'], ['Sharpe ratio, over Treasury bills', function (t) { return t.sharpe.toFixed(2); }, 0, 'sharpe'],
      ['Best year', function (t) { return t.bestYear.year + ' · ' + sPc(t.bestYear.ret); }], ['Worst year', function (t) { return t.worstYear.year + ' · ' + sPc(t.worstYear.ret); }, 1],
      ['Best month', function (t) { return sMon(t.bestMonth.i) + ' · ' + sPc(t.bestMonth.ret); }], ['Worst month', function (t) { return sMon(t.worstMonth.i) + ' · ' + sPc(t.worstMonth.ret); }, 1],
      ['Deepest fall', function (t) { return t.maxDD ? sPc(t.maxDD.depth) : 'None'; }, 1, 'deepest-fall'], ['Peak to bottom', function (t) { return t.maxDD ? sMon(t.maxDD.peak) + ' → ' + sMon(t.maxDD.trough) : '—'; }],
      ['Months falling', function (t) { return t.maxDD ? String(t.maxDD.falling) : '—'; }], ['Months back to the high', function (t) { return t.maxDD ? (t.maxDD.recovering == null ? 'Not yet' : String(t.maxDD.recovering)) : '—'; }],
      ['Months under water', function (t) { return t.maxDD ? (t.maxDD.under == null ? 'Not yet back' : String(t.maxDD.under)) : '0'; }, 0, 'under-water'], ['Back at the old high', function (t) { return t.maxDD && t.maxDD.rec != null ? sMon(t.maxDD.rec) : '—'; }],
      ['Longest spell under water', function (t) { return t.longest.months ? t.longest.months + ' months · ' + sMon(t.longest.peak) + (t.longest.rec != null ? '–' + sMon(t.longest.rec) : ', not yet back') : 'None'; }]];
    el.innerHTML = '<table class="sim-deck" style="--cols:' + rows.length + '"><thead><tr><th scope="col">Since January 1996</th>' + rows.map(function (d) { return '<th scope="col" class="num">' + e(d.n) + '</th>'; }).join('') + '</tr></thead><tbody>' +
      D.map(function (r) { return '<tr><th scope="row">' + (r[3] ? gl(r[3], e(r[0])) : e(r[0])) + '</th>' + rows.map(function (d) { return '<td class="num' + (r[2] ? ' neg' : '') + '" data-m="' + e(d.s) + '">' + e(r[1](d.o.tr)) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table>';
  }
  function mxMount(box) {
    var H = simHH(), st = mxState(H), fmt = mxFmt();
    sWire(box, st, fmt, mxUpdate, function (k, v) {
      if (k !== 'pre') return;
      var p = simPreset(H, v); if (!p) return false;
      SIMC.forEach(function (c) { st.pick[c.k] = p.mix[c.k] || 0; }); st.pe = p.pe || 70; st.pre = v; mxSync(box, st); sSync(box, st, fmt); mxUpdate(box); return false;
    });
    box.addEventListener('input', function (ev) {
      var t = ev.target; if (!t.matches('[data-mx]')) return;
      mxRebalance(st.pick, t.getAttribute('data-mx'), +t.value); st.pre = null; sSync(box, st, fmt); mxSync(box, st); mxUpdate(box);
    });
    mxSync(box, st); sSync(box, st, fmt); mxUpdate(box);
  }

  /* ── SET-ASIDE PLANNER · Governance › Wealth planning ──────────────────────────────────────
     What each goal needs a month, and how that changes with the way the money is held: a
     staircase of eight ways to hold it, each expected to earn more than the step before and to
     fall further in a bad year. A goal due within three years stays in the money market on every
     step above it. Moving a goal's date here tries it; it changes nothing in the record. */
  var PL_TONE = ['var(--primary-48)', 'var(--primary-72)', 'var(--primary-pressed)'], PL_INK = ['var(--black)', 'var(--white)', 'var(--white)'];
  function plState(H) {
    if (SIMST.plan) return SIMST.plan;
    var shift = {}; H.goals.forEach(function (g) { shift[g.id] = 0; });
    return (SIMST.plan = { stage: 0, save: H.save, shift: shift, base: null });
  }
  function plCalc(H, st) {
    var L = sF().ladder(), cashRate = L[1].expected;
    return sF().goalsNeed(H.goals.map(function (g) { var o = {}; for (var k in g) o[k] = g[k]; o.due = [g.due[0] + (st.shift[g.id] || 0), g.due[1]]; return o; }), H.today, L[st.stage].expected, cashRate);
  }
  function simPlanBlock() {
    var H = simHH();
    if (!H.goals.length) return '';
    var st = plState(H), L = sF().ladder(), maxE = Math.max.apply(null, L.map(function (x) { return x.expected; }));
    function step(s, i) {
      return '<button type="button" class="pl-step" role="radio" data-step="' + i + '" aria-checked="' + (i === st.stage) + '" tabindex="' + (i === st.stage ? 0 : -1) + '" aria-label="' + e((s.fo ? 'Family office ' + s.name.toLowerCase() : s.name) + ', about ' + sPcs(s.expected) + ' a year') + '">' +
        '<span class="pl-bar" style="--h:' + Math.round(12 + s.expected / maxE * 96) + 'px;--w:' + Math.round(6 + s.expected / maxE * 94) + '%"></span><span class="pl-nm">' + e(s.name) + '</span><span class="pl-pc">' + sPcs(s.expected) + '</span></button>';
    }
    var stairs = '<div class="pl-stairs"><div class="pl-head"><span class="eyebrow">How the money is held</span><div class="pl-keys"><button type="button" class="key key-s key-secondary" data-pl="down">Step down</button><button type="button" class="key key-s" data-pl="up">Step up</button></div></div>' +
      '<div class="pl-steps" role="radiogroup" aria-label="How the money is held"><div class="pl-grp"><p class="pl-gh">Everyday money and listed portfolios</p><div class="pl-row">' + L.map(function (s, i) { return s.fo ? '' : step(s, i); }).join('') + '</div></div>' +
      '<div class="pl-grp fo"><p class="pl-gh">Family office investments<span>with private markets and real estate</span></p><div class="pl-row">' + L.map(function (s, i) { return s.fo ? step(s, i) : ''; }).join('') + '</div></div></div>' +
      '<div class="pl-stage" data-pl-stage aria-live="polite"></div></div>';
    var controls = sSlide('save', 'Set aside each month', 0, 15000, 250, st.save, 'From the tutorial: ' + A.money(H.save) + '.') +
      '<div class="sim-c"><span class="sim-c-h"><span class="sim-lbl">Money needed soon stays safe</span></span><p class="sim-hint">A goal due within three years stays in the ' + gl('money-market', 'money market') + ' on every step above it: a roof due next year does not go into private equity.</p></div>';
    var out = '<div class="sim-legend" data-sim-legend></div><div class="sim-chart pl-chart" data-pl-chart></div>' +
      '<div class="pl-goals" aria-label="The goals: try one a year earlier or later">' + H.goals.map(function (g, i) {
        return '<div class="pl-goal" data-goal="' + g.id + '"><div class="pl-gtop"><b class="pl-gname">' + e(g.name) + '</b><span class="status-label ' + (g.priority === 'Need' ? 'ok' : 'neutral') + '">' + e(g.priority) + '</span></div>' +
          '<span class="pl-gbar" aria-hidden="true"><i style="background:' + PL_TONE[Math.min(2, i)] + '"></i></span><p class="pl-gmeta"></p>' +
          '<div class="pl-gmove"><span>By</span><button type="button" class="key key-s key-secondary pl-mv" data-mv="-1" aria-label="A year earlier: ' + e(g.name) + '">−</button><b class="pl-gdate"></b><button type="button" class="key key-s key-secondary pl-mv" data-mv="1" aria-label="A year later: ' + e(g.name) + '">+</button></div>' +
          '<p class="pl-gneed"></p></div>';
      }).join('') + '</div>';
    return '<div class="block">' + sectionH('What each goal needs a month', '', 'pol-setaside') +
      sTool({ id: 'plan', desk: 'policy', name: 'Set-aside planner', eyebrow: 'Try it here · nothing is saved to your goals', controls: controls, out: out, top: stairs,
        ask: ['Why does a savings account need so much more?', 'What if the cabin roof moves a year later?', 'Try setting aside $6,000 a month'] }) + '</div>';
  }
  function plStage(box, st) {
    var L = sF().ladder(), s = L[st.stage], t = sF().total(s.mix) || 1, rec = s.record, el = box.querySelector('[data-pl-stage]');
    Array.prototype.forEach.call(box.querySelectorAll('[data-step]'), function (b) { var on = +b.getAttribute('data-step') === st.stage; b.setAttribute('aria-checked', String(on)); b.tabIndex = on ? 0 : -1; });
    var dn = box.querySelector('[data-pl="down"]'), up = box.querySelector('[data-pl="up"]'); if (dn) dn.disabled = st.stage === 0; if (up) up.disabled = st.stage === L.length - 1;
    if (!el) return;
    var bar = '', key = '';
    SIMC.forEach(function (c) { var v = (s.mix[c.k] || 0) / t; if (!v) return; bar += '<i style="background:' + c.color + ';flex:' + v + '"></i>'; key += '<span><i style="background:' + c.color + '"></i>' + e(c.name) + ' ' + Math.round(v * 100) + '%</span>'; });
    var fell = rec && rec.worstYear.ret < 0, dd = rec && rec.maxDD;
    function item(k, v, sub, red, g) { return '<div><dt>' + (g ? gl(g, e(k)) : e(k)) + '</dt><dd' + (red ? ' class="neg"' : '') + '>' + e(v) + (sub ? '<small>' + e(sub) + '</small>' : '') + '</dd></div>'; }
    el.innerHTML = '<div class="pl-st-a"><h3>' + e((s.fo ? 'Family office · ' : '') + s.name + (s.fo || st.stage > 1 ? ' portfolio' : '')) + '</h3><p>' + e(s.desc) + '</p>' +
      '<div class="pl-mixbar" aria-hidden="true">' + bar + '</div><div class="pl-mixkey">' + key + '</div></div>' +
      '<dl class="pl-st-b">' + item('Expected a year', sPcs(s.expected), s.rate != null ? 'the national average rate' : 'volatility ' + sPc(s.vol), false, 'expected-return') +
      item('Worst year since 1996', fell ? sPc(rec.worstYear.ret) : 'Never fell', fell ? String(rec.worstYear.year) : 'not in a calendar year', fell) +
      item('Deepest fall', dd ? sPc(dd.depth) : 'None', dd ? sMon(dd.peak) + ' → ' + sMon(dd.trough) + (dd.under != null ? ', ' + dd.under + ' months under water' : '') : 'never below a previous high', !!dd, 'deepest-fall') +
      item('Could be sold within a week', Math.round(s.liquid * 100) + '%', s.liquid < 1 ? 'private markets and real estate take longer' : '') + '</dl>';
  }
  function plUpdate(box) {
    var H = simHH(), st = plState(H), L = sF().ladder(), s = L[st.stage], cashRate = L[1].expected, r = plCalc(H, st), total = r.reduce(function (a, x) { return a + x.need; }, 0), sv = st.save, gap = total - sv;
    if (!st.base) st.base = { total: total };
    plStage(box, st);
    var lead = 'Held in ' + e(s.the) + ', at about ' + sPcs(s.expected) + ' a year,', n = r.length, ret = r.filter(function (x) { return x.kind === 'retirement'; })[0], dT = st.base.total - total;
    var goalsW = n === 1 ? 'the goal' : n === 2 ? 'both goals' : 'the ' + ['', '', '', 'three', 'four', 'five', 'six'][n] + ' goals';
    sSay(box, total <= sv ? lead + ' the ' + sMoney(sv) + ' you set aside covers ' + (n === 1 ? 'the goal' : 'every goal') + ', with ' + sMoney(sv - total) + ' a month to spare.' : lead + ' ' + goalsW + (n === 1 ? ' needs ' : ' need ') + sMoney(total) + ' a month. You set aside ' + sMoney(sv) + '.',
      (ret && ret.need === 0 ? 'The retirement accounts would reach about <b>' + sShort(ret.reaches) + '</b> by ' + sYM(ret.due) + ' with nothing added. ' : '') +
      (Math.abs(dT) >= 1 ? '<b>' + (dT > 0 ? sMoney(dT) + ' a month less' : sMoney(-dT) + ' a month more') + '</b> than where you started: ' + sMoney(st.base.total) + ' in ' + e(L[0].the) + '.' : ''));
    sTiles(box, [{ k: n === 1 ? 'The goal needs' : 'The goals need', v: sMoney(total), l: 'a month, to close every gap by its date' }, { k: 'You set aside', v: sMoney(sv), l: 'a month' },
      gap > 0 ? { k: 'Still to find', v: sMoney(gap), l: 'a month, or move a date' } : { k: 'To spare', v: sMoney(-gap), l: 'a month, after every goal' }]);
    var tone = {}; H.goals.forEach(function (g, i) { tone[g.id] = i; });
    function col(id) { return PL_TONE[Math.min(2, tone[id])]; }
    function ink(id) { return PL_INK[Math.min(2, tone[id])]; }
    sLegend(box.querySelector('[data-sim-legend]'), r.map(function (x) { return [x.name, col(x.id), 'sw']; }).concat([['What you set aside', 'var(--heading)']]));
    r.forEach(function (x) {
      var d = box.querySelector('[data-goal="' + x.id + '"]'); if (!d) return;
      d.querySelector('.pl-gbar i').style.width = Math.min(100, x.linkedNow / x.amount * 100) + '%';
      d.querySelector('.pl-gmeta').textContent = sShort(x.linkedNow) + ' of ' + sShort(x.amount) + ' linked today · ' + x.linked + (x.near && s.expected > cashRate ? ' · due within three years, so held in the money market' : '');
      d.querySelector('.pl-gdate').textContent = sYM(x.due);
      d.querySelector('.pl-gneed').textContent = x.need > 0 ? sMoney(x.need) + ' a month' : 'Reaches it · ' + sShort(x.reaches);
      d.querySelector('[data-mv="-1"]').disabled = sF().monthsBetween(H.today, [x.due[0] - 1, x.due[1]]) < 1;
      d.querySelector('[data-mv="1"]').disabled = (st.shift[x.id] || 0) >= 6;
    });
    /* one bar: what the goals need a month, goal by goal, against the line of what is set aside */
    var cb = box.querySelector('[data-pl-chart]');
    if (cb) {
      var W = Math.max(260, cb.clientWidth), Hh = 96, m = { l: 4, r: 4 }, max = Math.max(total, sv) * 1.08 || 1;
      function X(v) { return m.l + v / max * (W - m.l - m.r); }
      var svg = sEl('svg', { class: 'sc-svg sim-svg', viewBox: '0 0 ' + W + ' ' + Hh, width: W, height: Hh, role: 'img', 'aria-label': 'What the goals need each month, against what is set aside' });
      var g = sEl('g', { class: 'sim-grid-l' });
      sTicks(max, W < 520 ? 3 : 5).filter(function (v) { return v <= max; }).forEach(function (v) { g.appendChild(sEl('line', { x1: X(v), x2: X(v), y1: 24, y2: 66 })); g.appendChild(sTx({ x: X(v), y: Hh - 8, 'text-anchor': v === 0 ? 'start' : 'middle' }, sShort(v))); });
      svg.appendChild(g);
      var tt = document.createElement('div'), x = X(0); tt.className = 'sim-tt';
      r.forEach(function (it) {
        if (it.need <= 0) return;
        var w = X(it.need) - X(0), x0 = x;
        svg.appendChild(sEl('rect', { x: x, y: 30, width: Math.max(0, w - 2), height: 30, rx: 4, style: 'fill:' + col(it.id) }));
        if (w > 70) svg.appendChild(sTx({ x: x + 10, y: 50, class: 'v', style: 'fill:' + ink(it.id) }, sShort(it.need)));
        var hit = sEl('rect', { x: x, y: 24, width: Math.max(8, w), height: 42, class: 'sim-hit', tabindex: 0, 'aria-label': it.name + ': ' + sMoney(it.need) + ' a month for ' + it.n + ' months' });
        function on() { sTip(tt, it.name, [['a month for ' + it.n + ' months, at ' + sPcs(it.rate), sMoney(it.need), col(it.id), 'band']]); sPlace(tt, cb, x0, W, 66); }
        hit.addEventListener('pointermove', on); hit.addEventListener('pointerdown', on); hit.addEventListener('focus', on);
        hit.addEventListener('pointerleave', function () { tt.classList.remove('on'); }); hit.addEventListener('blur', function () { tt.classList.remove('on'); });
        svg.appendChild(hit); x += w;
      });
      var xs = X(sv); svg.appendChild(sEl('line', { x1: xs, x2: xs, y1: 20, y2: 70, class: 'pl-save' }));
      svg.appendChild(sTx({ x: xs, y: 14, 'text-anchor': xs > W * 0.7 ? 'end' : 'start', class: 'v' }, 'You set aside ' + sShort(sv)));
      cb.innerHTML = ''; cb.appendChild(svg); cb.appendChild(tt);
    }
    sTable(box.querySelector('[data-sim-table]'), ['Goal', 'Amount', 'Linked today', 'By', 'Months', 'Held at', 'Needs a month'],
      r.map(function (x) { return [x.name, sMoney(x.amount), sMoney(x.linkedNow), sYM(x.due), String(x.n), sPcs(x.rate), sMoney(x.need)]; }));
    SIMST.plan.last = { total: total, r: r, step: s };
  }
  function plSet(box, i, focus) {
    var H = simHH(), st = plState(H), L = sF().ladder(); st.stage = Math.max(0, Math.min(L.length - 1, i)); plUpdate(box);
    if (focus) { var b = box.querySelector('[data-step="' + st.stage + '"]'); if (b) b.focus(); }
  }
  function plMount(box) {
    var H = simHH(), st = plState(H), fmt = { save: sMoney };
    sWire(box, st, fmt, plUpdate);
    box.addEventListener('click', function (ev) {
      var s = ev.target.closest('[data-step]'), k = ev.target.closest('[data-pl]'), mv = ev.target.closest('[data-mv]');
      if (s) plSet(box, +s.getAttribute('data-step'));
      if (k) plSet(box, st.stage + (k.getAttribute('data-pl') === 'up' ? 1 : -1));
      if (mv) {
        var id = mv.closest('[data-goal]').getAttribute('data-goal'), g = H.goals.filter(function (x) { return x.id === id; })[0], nx = (st.shift[id] || 0) + +mv.getAttribute('data-mv');
        if (!g || nx > 6 || sF().monthsBetween(H.today, [g.due[0] + nx, g.due[1]]) < 1) return;
        st.shift[id] = nx; plUpdate(box);
      }
    });
    var steps = box.querySelector('.pl-steps');
    if (steps) steps.addEventListener('keydown', function (ev) {
      if (ev.key === 'ArrowRight' || ev.key === 'ArrowUp') { plSet(box, st.stage + 1, true); ev.preventDefault(); }
      if (ev.key === 'ArrowLeft' || ev.key === 'ArrowDown') { plSet(box, st.stage - 1, true); ev.preventDefault(); }
    });
    sSync(box, st, fmt); plUpdate(box);
  }

  /* ── CASH RUNWAY · Protection › Safety check ───────────────────────────────────────────
     If income stopped tomorrow, how long would the household hold, and when would it reach the
     cash the policy keeps untouched? Plain arithmetic on the record: nothing grows here. */
  function crState(H) {
    if (SIMST.cash) return SIMST.cash;
    var ans = simAnswers();
    return (SIMST.cash = { cash: H.cash, spend: ans.spendMonth, income: ans.incomeMonth, when: 'today', sell: 'no' });
  }
  function simCashBlock() {
    var H = simHH();
    if (!H.cash && !H.taxable) return '';
    var st = crState(H), sg = H.soonGoal;
    var controls = '<div class="sim-c"><div class="sim-c-h"><label for="sim-cr-cash">Cash today</label></div><div class="fx-affix"><span class="fx-pre" aria-hidden="true">$</span><input class="input sim-money" id="sim-cr-cash" type="text" inputmode="numeric" autocomplete="off" data-money data-cr-cash value="' + A.money(st.cash).replace('$', '') + '"></div>' +
        '<p class="sim-hint">From Records: ' + A.money(H.cash) + '. Type another amount to try it; nothing is saved. <button type="button" class="link sim-reset" data-cr-reset hidden>Back to ' + A.money(H.cash) + '</button></p></div>' +
      sSlide('spend', 'The household spends a month', 3000, 30000, 500, st.spend, 'The one new question: not in the record yet.') +
      sSlide('income', 'Income that would still come in', 0, 20000, 500, st.income, 'A month.') +
      (sg ? sSeg('when', 'When', [['today', 'Today'], ['after', 'After that goal', 'After']], st.when, e(sg.name) + ' draws on ' + A.money(H.soonDraw) + ' of the cash, by ' + A.date(sg.date) + '.') : '') +
      (H.taxable ? sSeg('sell', 'What to count', [['no', 'Cash only'], ['yes', 'Also sell taxable investments', 'Also taxable']], st.sell, A.money(H.taxable) + ' in taxable accounts: ' + e(H.taxableNames.join(' and ')) + '. Selling has tax consequences: a question for your CPA.') : '');
    var out = '<div class="sim-legend" data-sim-legend></div><div class="sim-chart" data-sim-chart></div>';
    return sTool({ id: 'cash', desk: 'protection', name: 'Cash runway', eyebrow: 'If income stopped tomorrow · from your record', controls: controls, out: out,
      ask: ['Try spending $15,000 a month', 'What if we also sell the taxable investments?', 'What is the floor for?'] });
  }
  function crUpdate(box) {
    var H = simHH(), st = crState(H), cash = Math.max(0, st.cash - (st.when === 'after' ? H.soonDraw : 0)), withTax = st.sell === 'yes';
    var r = sF().cashRunway({ cash: cash, floor: H.floor, taxable: H.taxable, spend: st.spend, income: st.income, sell: withTax }), s;
    var rs = box.querySelector('[data-cr-reset]'); if (rs) rs.hidden = st.cash === H.cash;
    var taxW = 'the taxable investments';
    if (!r.burn) s = 'What still comes in covers the spending, so the cash is not touched.';
    else if (!cash) s = 'With no cash to draw on, the ' + sMoney(st.spend) + ' a month' + (st.income ? ', less ' + sMoney(st.income) + ' still coming in,' : '') + ' comes from selling investments from the first month' + (withTax ? ': ' + e(taxW) + ' last ' + sMonths(r.monthsAll) + '.' : '.');
    else s = 'At ' + sMoney(st.spend) + ' a month' + (st.income ? ', less ' + sMoney(st.income) + ' still coming in,' : ',') + ' the ' + sMoney(cash) + ' in cash lasts ' + sMonths(r.monthsCash) + '.';
    var sub = !r.burn || !cash ? '' : (r.below ? 'That is already below the ' + sMoney(H.floor) + ' your policy keeps ' + gl('reachable-cash', 'reachable') + '.' : 'Your policy keeps ' + sMoney(H.floor) + ' ' + gl('reachable-cash', 'reachable') + ', and that floor is reached after <b>' + sMonths(r.monthsFloor) + '</b>.') +
      (withTax ? ' Selling ' + e(taxW) + ' adds ' + sMonths(r.monthsAll - r.monthsCash) + '.' : '');
    sSay(box, s, sub);
    sTiles(box, [{ k: 'Cash lasts', v: !r.burn ? 'Untouched' : cash ? sMonths(r.monthsCash) : 'No cash', l: sMoney(cash) + ' in cash' },
      { k: 'Your policy’s floor', v: r.below ? 'Already below' : r.burn ? 'After ' + sMonths(r.monthsFloor) : 'Untouched', l: sMoney(H.floor) + ' kept reachable', g: 'reachable-cash' },
      H.taxable ? { k: 'With taxable investments', v: withTax ? (r.burn ? sMonths(r.monthsAll) : 'Untouched') : 'Not counted', l: withTax ? sMoney(H.taxable) + ' sold, before tax' : 'switch it on to see' } : null]);
    /* stacked: the cash at the bottom, spent first; the taxable investments on top, sold once the cash is gone */
    var N = r.burn ? Math.min(96, Math.ceil((withTax ? cash + H.taxable : cash) / r.burn) + 2) : 24, mo = [], i;
    for (i = 0; i <= N; i++) mo.push(i);
    var cashP = mo.map(function (k) { return Math.max(0, cash - r.burn * k); }), allP = mo.map(function (k) { return Math.max(0, cash + H.taxable - r.burn * k); }), taxP = allP.map(function (v, k) { return v - cashP[k]; }), zero = mo.map(function () { return 0; });
    var series = [{ kind: 'band', hi: cashP, lo: zero, fill: 'var(--sim-band)' }];
    if (withTax) series.push({ kind: 'band', hi: allP, lo: cashP, fill: 'var(--sim-alt-wash)' }, { kind: 'line', values: allP, color: 'var(--sim-alt)' });
    series.push({ kind: 'line', values: cashP, color: 'var(--sim-line)' });
    var at = Math.max(1, Math.round(N * 0.04)), after = Math.min(N - 1, Math.ceil(r.monthsCash) + Math.max(1, Math.round(N * 0.03)));
    sLegend(box.querySelector('[data-sim-legend]'), [['Cash', ['var(--sim-band)', 'var(--sim-line)'], 'area']].concat(withTax ? [['Taxable investments, sold after the cash', ['var(--sim-alt-wash)', 'var(--sim-alt)'], 'area']] : [], [['Your policy’s floor', 'var(--text-secondary)', 'dash']]));
    sChart(box.querySelector('[data-sim-chart]'), { x: mo, series: series, hlines: H.floor ? [{ y: H.floor, label: 'Floor ' + sShort(H.floor), dash: true, at: withTax && r.burn ? after : null }] : [], label: 'Money left month by month if income stops',
      yFmt: sShort, xFmt: function (k) { return k ? 'Mo ' + k : 'Now'; }, xEvery: N > 48 ? 12 : N > 24 ? 6 : 3,
      areaLabels: withTax && r.burn ? [{ i: 0, lo: 0, hi: cashP, text: 'Cash', color: 'var(--text-selected)', bottom: true, min: 20, wide: true }, { i: after, lo: mo.map(function () { return H.floor * 1.6; }), hi: allP, text: 'Taxable investments', color: 'var(--sim-alt)', min: 30 }] : [],
      marks: !r.below && r.burn && H.floor ? [{ x: Math.round(r.monthsFloor), label: 'Floor reached' }] : [],
      tipTitle: function (k) { return k ? 'After ' + sMonths(k) : 'Today'; }, tip: function (k) { return [['cash', sShort(cashP[k]), 'var(--sim-line)']].concat(withTax ? [['taxable investments', sShort(taxP[k]), 'var(--sim-alt)'], ['together', sShort(allP[k]), 'var(--text-secondary)']] : []); } });
    sTable(box.querySelector('[data-sim-table]'), ['Month', 'Cash left'].concat(withTax ? ['Taxable left', 'Together'] : []),
      mo.filter(function (k) { return k % (N > 48 ? 12 : 3) === 0; }).map(function (k) { return [String(k), sMoney(cashP[k])].concat(withTax ? [sMoney(taxP[k]), sMoney(allP[k])] : []); }));
    SIMST.cash.last = { r: r, cash: cash };
  }
  function crMount(box) {
    var H = simHH(), st = crState(H), fmt = { spend: sMoney, income: sMoney }, field = box.querySelector('[data-cr-cash]');
    sWire(box, st, fmt, crUpdate);
    box.addEventListener('change', function () { var ans = simAnswers(); ans.spendMonth = st.spend; ans.incomeMonth = st.income; A.save(); });
    if (field) {
      field.addEventListener('input', function () { var d = field.value.replace(/[^0-9]/g, '').slice(0, 9); st.cash = d ? +d : 0; crUpdate(box); });
      field.addEventListener('keydown', function (ev) { if (ev.key === 'Enter') { ev.preventDefault(); field.blur(); } });
    }
    box.addEventListener('click', function (ev) { if (!ev.target.closest('[data-cr-reset]')) return; st.cash = H.cash; if (field) { field.value = A.money(H.cash).replace('$', ''); field.focus(); } crUpdate(box); });
    sSync(box, st, fmt); crUpdate(box);
  }

  /* ── THE COST OF WAITING · Learn · Investment Foundation, quest 1 ──────────────────────
     A lesson, not a forecast: the rate is one the learner chooses. Opens at "start later by 0",
     so the quest's answer is found by trying, not read off the screen. */
  function cwState() { return SIMST.wait || (SIMST.wait = { t: 1000000, y: 30, g: 6, d: 0 }); }
  function simWaitBlock() {
    var st = cwState();
    var controls = sSlide('t', 'The goal', 100000, 3000000, 50000, st.t) + sSlide('y', 'Years until it is needed', 5, 40, 1, st.y) +
      sSlide('g', 'Growth, a rate you choose', 0, 10, 0.5, st.g, 'For the lesson; not a forecast.') + sSlide('d', 'Start later by', 0, 15, 1, st.d);
    return '<section class="scene on-tint scene-investment sim sim-wait" data-sim="wait" aria-label="Try the numbers"><div class="sim-words"><span class="eyebrow">Try the numbers</span><p class="sc-answer" data-sim-say aria-live="polite"></p><p class="sc-sub" data-sim-sub></p><ul class="sc-facts hl sim-facts" data-sim-tiles></ul></div>' +
      '<div class="sim-grid"><div class="sim-ctl">' + controls + '</div><div class="sim-out"><div class="sim-chart" data-sim-chart></div></div></div>' +
      '<div class="sim-foot"><p class="sim-legal">The amount set aside at the end of each month that grows to the goal by its date, at the rate you choose. Illustrative: no market data, and not a forecast.</p><div class="sim-keys"><details class="sim-num"><summary class="key key-s key-secondary">Show the numbers</summary><div class="sim-num-in" data-sim-table></div></details></div></div></section>';
  }
  function cwUpdate(box) {
    var st = cwState(), t = st.t, y = st.y, g = st.g / 100, d = Math.min(st.d, y - 1), F2 = sF(), now = F2.monthlyToReach(t, y, g), later = F2.monthlyToReach(t, y - d, g), more = later / now - 1;
    sSay(box, d === 0 ? 'Starting now takes ' + sMoney(now) + ' a month to reach ' + sShort(t) + ' in ' + y + ' years.' : 'Starting ' + d + (d === 1 ? ' year' : ' years') + ' later takes ' + sMoney(later) + ' a month: ' + Math.round(more * 100) + '% more, for the same ' + sShort(t) + '.',
      d === 0 ? 'Move “Start later by” to see what waiting costs.' : 'Starting now takes ' + sMoney(now) + '.');
    sTiles(box, d === 0 ? [{ k: 'Starting now', v: sMoney(now), l: 'a month, for ' + y + ' years' }, { k: 'Your own money in', v: sShort(now * y * 12), l: 'over ' + y + ' years; the rest is growth' }] :
      [{ k: 'Starting now', v: sMoney(now), l: 'a month, for ' + y + ' years' }, { k: 'Starting ' + d + (d === 1 ? ' year' : ' years') + ' later', v: sMoney(later), l: 'a month, for ' + (y - d) + ' years' },
      { k: 'Your own money in', v: sShort(later * (y - d) * 12), l: 'later, against ' + sShort(now * y * 12) + ' now' }]);
    var maxD = Math.min(15, y - 1), xs = [], i; for (i = 0; i <= maxD; i++) xs.push(i);
    var vals = xs.map(function (k) { return F2.monthlyToReach(t, y - k, g); });
    sChart(box.querySelector('[data-sim-chart]'), { x: xs, height: 240, series: [{ kind: 'line', values: vals, color: 'var(--sim-line)' }], marks: d > 0 ? [{ x: d, label: 'You' }] : [], label: 'What each month needs, by how many years you wait',
      yFmt: sShort, xFmt: function (k) { return k ? '+' + k + ' yrs' : 'Now'; }, xEvery: maxD > 10 ? 3 : 2,
      tipTitle: function (k) { return k ? 'Start ' + k + (k === 1 ? ' year' : ' years') + ' later' : 'Start now'; }, tip: function (k) { return [['a month' + (k ? ' (+' + Math.round((vals[k] / vals[0] - 1) * 100) + '%)' : ''), sMoney(vals[k]), 'var(--sim-line)']]; } });
    sTable(box.querySelector('[data-sim-table]'), ['Start', 'A month', 'Your own money in'], xs.map(function (k) { return [k ? k + (k === 1 ? ' year later' : ' years later') : 'Now', sMoney(vals[k]), sMoney(vals[k] * (y - k) * 12)]; }));
  }
  function cwMount(box) {
    var st = cwState(), fmt = { t: sShort, y: function (v) { return v + ' years'; }, g: function (v) { return v.toFixed(1) + '%'; }, d: function (v) { return v + (v === 1 ? ' year' : ' years'); } };
    sWire(box, st, fmt, cwUpdate); sSync(box, st, fmt); cwUpdate(box);
  }

  /* ── THE WAY IN: a what-if under a desk's summary, its answer computed from the record ── */
  function simTry(desk) {
    if (!A.sim) return '';
    var H = simHH(), cards = [], ans = simAnswers();
    function card(href, name, line, key) { return '<a class="sim-try-card" href="' + href + '"><span class="eyebrow">' + e(name) + '</span><b>' + line + '</b><span class="sim-try-go">' + e(key) + A.ic('arrow') + '</span></a>'; }
    var home = desk === 'home';
    if ((desk === 'policy' || home) && H.ret && H.retStart) {
      var r = rwRun(H, { age: H.retireAge, save: H.save, spend: ans.retireSpend, ss: ans.ss, mix: H.policyMix ? 'policy' : 'sixty' });
      cards.push(card('#/policy/runway', 'Retirement runway', 'In ' + Math.round(r.success * 100) + ' of 100 paths the money lasts until ' + e(H.youngFirst) + ' is 95.', 'Open the runway'));
    }
    if (desk === 'policy' && H.goals.length) {
      var L = sF().ladder(), need = sF().goalsNeed(H.goals, H.today, L[0].expected, L[1].expected).reduce(function (a, x) { return a + x.need; }, 0);
      cards.push(card('#/policy/planning', 'Set-aside planner', 'Held in a savings account, your goals need ' + sMoney(need) + ' a month. Try the staircase.', 'Wealth planning'));
    }
    if ((desk === 'investment' || home) && H.investable) {
      var P = simPresets(H)[0], o = mxOutcome(H, P.mix, P.pe || 70, H.horizon);
      cards.push(card('#/investment/mix', 'Mix lab', e(P.k === 'policy' ? 'Your policy’s mix' : P.name) + ' expects about ' + sPc(o.s.geo) + ' a year. Its worst year since 1996: ' + o.tr.worstYear.year + ', ' + sPc(o.tr.worstYear.ret) + '.', 'Open the Mix lab'));
    }
    if ((desk === 'protection' || home) && (H.cash || H.taxable)) {
      var c = sF().cashRunway({ cash: H.cash, floor: H.floor, taxable: H.taxable, spend: ans.spendMonth, income: ans.incomeMonth, sell: false });
      cards.push(card('#/protection/safety', 'Cash runway', 'If income stopped, the ' + sMoney(H.cash) + ' in cash lasts ' + sMonths(c.monthsCash) + ' at ' + sMoney(ans.spendMonth) + ' a month.', 'Safety check'));
    }
    if (!cards.length) return '';
    return '<section class="sim-try" aria-label="Try a what-if">' + sectionH('Try a what-if') + '<div class="sim-try-list">' + cards.join('') + '</div></section>';
  }

  /* ── HOW THE NUMBERS WORK · Profile › How the numbers work (the fine print), and each tool's sheet ─────────
     The SEC's interactive-tool conditions: the method and its limits, the key assumptions with
     their date, that results vary with each use and over time, the universe of investments, and
     that the outcomes are hypothetical. One place, linked from every tool. */
  var SIM_NAMES = { runway: 'Retirement runway', mix: 'Mix lab', plan: 'Set-aside planner', cash: 'Cash runway', wait: 'The cost of waiting' };
  var SIM_HREF = { runway: '#/policy/runway', mix: '#/investment/mix', plan: '#/policy/planning', cash: '#/protection/safety', wait: '#/learn/path/ia-found/quest/1' };
  function simMethodText(k) {
    var H = simHH();
    return {
      runway: ['Starts from the accounts linked to “' + (H.ret ? H.ret.name : 'the retirement goal') + '” (' + A.money(H.retStart) + '). Each year draws one portfolio return from the mix’s expected return and volatility, rebalanced every year, less 2.5% inflation, so every figure is in today’s ' + A.curWords() + '. 3,000 paths are drawn, seeded, so the same inputs give the same answer.',
        'Set-asides stop the year ' + H.first + ' retires; spending less Social Security is taken out after. A path lasts if money is left when ' + H.youngFirst + ' is 95. A normal-shaped model understates crashes: the Mix lab shows the real worst years.'],
      mix: ['The range is the 1 in 10 low to the 1 in 10 high after the years chosen, from the mix’s expected return and volatility, with nothing added or taken out.',
        'The track record is history, not a model: the mix held from January 1996, put back to its weights every January, month by month to December 2025. Private equity, private credit and real estate report quarterly from appraisals, so each quarter is spread over its months and their falls show later and smaller than listed markets. Infrastructure has calendar years only.'],
      plan: ['Each goal needs what closes the gap between its amount and what is linked to it today, by its date, with the linked money and the set-asides growing monthly at the step’s expected return.',
        'The savings account earns the national average rate (0.37%, September 2026); every other step is its mix at the assumptions below. A goal due within three years stays in the money market. The mixes are illustrations by asset class, not products.'],
      cash: ['Spending less any income still coming in is taken from cash each month, and from the taxable investments once the cash is gone. The cash your policy keeps reachable is the floor.',
        'Retirement accounts are left out, because taking money early costs tax and penalties. Nothing grows or earns interest here: it is arithmetic on the record, not a forecast.'],
      wait: ['The amount set aside at the end of each month that grows to the goal by its date, at the rate you choose. Illustrative: no market data, and not a forecast.']
    }[k] || [];
  }
  function simCmaTable() {
    var C = sF().CMA, U = sF().USED, p2 = function (x) { return x.toFixed(2) + '%'; };
    var rows = [['shares', 'Shares', 'AC World equity'], ['bonds', 'Bonds', 'US Aggregate bonds'], ['cash', 'Cash', 'US cash'], ['pe', 'Private equity', 'Private equity'], ['pc', 'Private credit', 'Direct lending'], ['re', 'Real estate', 'US core real estate'], ['infra', 'Infrastructure', 'Global core infrastructure']];
    return '<div class="data-table sim-cma"><table><thead><tr><th scope="col">Asset class</th><th scope="col" class="num">J.P. Morgan, compound</th><th scope="col" class="num">J.P. Morgan, volatility</th><th scope="col" class="num">Used here, compound</th><th scope="col" class="num" data-gl="volatility">' + gl('volatility', 'Used here, volatility') + '</th></tr></thead><tbody>' +
      rows.map(function (r) { var k = r[0], dc = U[k][0] !== C[k][0], dv = Math.abs(U[k][2] - C[k][2]) > 1e-9;
        return '<tr><td>' + e(r[1]) + '<span class="cell-sub">' + e(r[2]) + '</span></td><td class="num">' + p2(C[k][0]) + '</td><td class="num">' + p2(C[k][2]) + '</td><td class="num">' + (dc ? '<b>' + p2(U[k][0]) + '</b>' : p2(U[k][0])) + '</td><td class="num">' + (dv ? '<b>' + p2(U[k][2]) + '</b>' : p2(U[k][2])) + '</td></tr>'; }).join('') +
      '</tbody></table></div>';
  }
  function simMethodSheet(k) {
    var ps = simMethodText(k);
    return ['How the numbers work', e(SIM_NAMES[k] || 'The what-if tools'),
      ps.map(function (p) { return '<p class="sim-sheet-p">' + e(p) + '</p>'; }).join('') +
      (k !== 'wait' && k !== 'cash' ? '<h3 class="sim-sheet-h">What it assumes</h3>' + simCmaTable() + '<p class="help">J.P. Morgan’s 2026 Long-Term Capital Market Assumptions (USD, 10 to 15 years, data to September 30, 2025), except private equity, which is Finna’s 15.5% a year, and the private markets’ volatility, which is as reported. Bold marks where the tools depart from J.P. Morgan.</p>' : '') +
      '<p class="sim-legal">' + e(SIM_LEGAL.replace('{t}', SIM_NAMES[k] || 'what-if tools')) + '</p>' +
      '<div class="actions"><button class="key key-secondary" type="button" data-act="sim-method-all">The whole method</button></div>'];
  }
  function simMethodPage() {
    var H = simHH(), Hi = sF().HISTORY, keys = ['shares', 'bonds', 'cash', 'pe', 'pc', 're', 'infra'], names = { shares: 'Shares', bonds: 'Bonds', cash: 'Cash', pe: 'Private equity', pc: 'Private credit', re: 'Real estate', infra: 'Infrastructure' };
    var ONE = { plan: 'Governance › Wealth planning. What each goal needs a month, on eight ways to hold the money.', runway: 'Governance › Retirement runway. 3,000 paths of yearly returns, in today’s ' + A.curWords() + ', to the younger partner’s 95.',
      mix: 'Investment › Mix lab. A range from the assumptions, and thirty years of history month by month.', cash: 'Protection › Safety check. How long the cash lasts if income stops: arithmetic, not a forecast.',
      wait: 'Learn · Investment Foundation. What starting later costs, at a rate the learner chooses.' };
    var tools = ['plan', 'runway', 'mix', 'cash', 'wait'].map(function (k) {
      return '<div class="record"><div class="record-main"><span class="record-title"><a class="link" href="' + SIM_HREF[k] + '">' + e(SIM_NAMES[k]) + '</a></span><span class="record-sub sim-wrap">' + e(ONE[k]) + '</span></div></div>';
    }).join('');
    var hist = '<div class="data-table sim-hist"><table><thead><tr><th scope="col">Class</th><th scope="col">Series</th><th scope="col" class="num">2008</th></tr></thead><tbody>' +
      keys.map(function (k) { var si = Hi.standIns[k]; return '<tr><td>' + e(names[k]) + '</td><td>' + e(Hi.series[k]) + (si ? '<span class="cell-sub">Stand-ins: ' + e(Object.keys(si).map(function (y) { return y + ', ' + si[y]; }).join('; ')) + '</span>' : '') + '</td><td class="num">' + sPc(Hi[k][12] / 100, 1) + '</td></tr>'; }).join('') +
      '</tbody></table></div>';
    return '<div class="panel"><div class="intro"><span class="eyebrow">The method · assumptions dated September 30, 2025</span><h2 class="title">What the what-if tools do, and what they rest on</h2>' +
        '<p class="lead">Five tools try a change before you make it. They work on asset classes, never on named funds, and every figure is worked out from your own record and the assumptions below. The results are ' + gl('hypothetical', 'hypothetical') + ', they may vary with each use and over time, and they are not guarantees.</p></div><div>' + tools + '</div></div>' +
      '<div class="block">' + sectionH('What the tools assume', '', 'pol-method') + simCmaTable() +
        '<p class="help"><b>Private equity is Finna’s assumption, 15.5% a year.</b> The funds Finna’s members reach, 40 funds with 25 managers and an average life of 4.2 years, have returned 16.4% a year after fees; 15.5% is the conservative figure. <b>The private markets’ volatility is as reported:</b> private equity, private credit, real estate and infrastructure are valued a few times a year from appraisals, which smooths them, so their volatility is the standard deviation of the thirty calendar years below. J.P. Morgan’s figures add back what the smoothing hides. Each arithmetic mean follows from its compound return and volatility, as J.P. Morgan relates them. Correlations are Finna’s placeholders, with infrastructure’s row from J.P. Morgan’s matrix, until a licensed matrix is loaded. Inflation is 2.5% a year.</p></div>' +
      '<div class="block">' + sectionH('Thirty years of history, 1996 to 2025') + hist +
        '<p class="help">The Mix lab replays these month by month. Shares, bonds and cash are monthly; private equity, private credit and real estate are quarterly, each quarter spread evenly over its months; infrastructure is by calendar year. The S&amp;P 500 stands in for global shares, the Vanguard Total Bond Market fund for the Bloomberg US Aggregate, and, before 2014, US listed utilities scaled to unlisted volatility for infrastructure.</p></div>' +
      '<div class="block">' + sectionH('What the tools cannot tell you') + '<ul class="sim-limits">' +
        '<li>What will happen. Every forecast here is a range drawn from assumptions; the real years will differ.</li>' +
        '<li>How bad a crash can be. The runway’s normal-shaped model understates crashes; the Mix lab’s thirty years show real ones, and the next one will not be the same.</li>' +
        '<li>What a private fund would fetch in a hurry. Reported volatility is lower than what a forced sale could show.</li>' +
        '<li>Fees and taxes on your own accounts. The returns are before them, except where a series is net of fees.</li>' +
        '<li>Which fund to choose. The tools work on asset classes only; other investments not considered may have characteristics similar or superior to those analyzed.</li></ul></div>' +
      '<div class="boundary sim-legend-box"><h3>The legend</h3><p>' + e(SIM_LEGAL.replace('{t}', 'what-if tools')) + '</p><p>Finna does not give tax, legal or regulated personal advice. The tools prepare; the household decides.</p></div>' +
      '<div class="block">' + sectionH('Sources') + '<ul class="sim-src">' + SIM_SRC.map(function (x) { return '<li><a class="link" href="' + x[1] + '" target="_blank" rel="noopener">' + e(x[0]) + '</a></li>'; }).join('') + '</ul>' +
        '<p class="help">Every page was opened on September 28, 2026. The J.P. Morgan matrix was read through a text extractor: check the figures against the PDF before they go into the product. Showing index history inside a product can need the index provider’s permission.</p></div>';
  }

  /* ── FREYA ON A TOOL: what she sees (simContext), and what she can do (simAsk) ─────────
     She reads the tool on the page, answers from it with its figures, and moves its controls
     when asked ("try $140,000 a year"), so the household watches the answer change. She explains
     and never recommends: no mix, no fund, no product, no tax or legal advice. */
  function simTool(route) {
    route = route || '';
    return route === 'policy.runway' ? 'runway' : route === 'investment.mix' ? 'mix' : route === 'protection.safety' ? 'cash' : route === 'policy.planning' ? 'plan' : questSim(route);
  }
  /* a quest played with a what-if under it: learn.js names it (sim: wait, plan or cash) */
  function questSim(route) { var m = /^learn\.path\/([\w-]+)\/quest\/(\d+)$/.exec(route || ''), P = m && LM.PATHS[m[1]], q = P && P.quests[+m[2] - 1]; return q && q.sim ? q.sim : null; }
  function simBox(k) { return document.querySelector('[data-sim="' + k + '"]'); }
  function sNum(q) {
    var m = q.replace(/,/g, '').match(/\$?\s*(\d+(?:\.\d+)?)\s*(k|thousand|m|million)?\b/i); if (!m) return null;
    var v = parseFloat(m[1]), u = (m[2] || '').toLowerCase(); if (u === 'k' || u === 'thousand') v *= 1e3; if (u === 'm' || u === 'million') v *= 1e6; return v;
  }
  function clampTo(v, min, max, step) { return Math.max(min, Math.min(max, Math.round(v / step) * step)); }
  var SRC_T = ' [the tool on this page]';
  function rwLine(H, st, dn) { var L = st.last; return 'In ' + L.n + ' of 100 paths the money lasts until ' + H.youngFirst + ' is 95' + (dn == null ? '' : dn === 0 ? ', the same as before' : ', ' + Math.abs(dn) + (dn > 0 ? ' more' : ' fewer') + ' than before') + (L.depl10 < 9999 ? '; in the worst 1 in 10 it runs out in ' + Math.round(L.depl10) : '; even the worst 1 in 10 has money left in ' + L.end); }
  function simContext(route) {
    var k = simTool(route), box = k && simBox(k); if (!box) return '';
    var H = simHH();
    if (k === 'runway') { var st = rwState(H), P = st.last; if (!P) return ''; return 'Retirement runway. ' + H.first + ' retires at ' + st.age + ' (' + P.ry + '); set aside ' + A.money(st.save) + ' a month until then; spending in retirement ' + A.money(st.spend) + ' a year and Social Security ' + A.money(st.ss) + ' a year from ' + (H.owner.born + 67) + ', in today’s ' + A.curWords() + '; the mix: ' + st.mix + ', expected ' + sPc(P.stats.geo) + ' a year with volatility ' + sPc(P.stats.vol) + '. Result: ' + rwLine(H, st) + '. At retirement, the middle path ' + A.money(P.p50) + ' and the 1 in 10 low ' + A.money(P.p10) + ', in today’s ' + A.curWords() + '.'; }
    if (k === 'mix') { var m = mxState(H), rows = m.rows || []; return 'Mix lab, ' + m.h + ' years ahead, on ' + A.money(H.investable) + '. ' + rows.map(function (d) { var t = d.o.tr; return d.n + ': ' + SIMC.map(function (c) { return c.name.toLowerCase() + ' ' + Math.round(d.m[c.k] || 0) + '%'; }).join(', ') + '; expected ' + sPc(d.o.s.geo) + ' a year, volatility ' + sPc(d.o.s.vol) + '; range after ' + m.h + ' years ' + A.money(d.o.lo) + ' to ' + A.money(d.o.hi) + ', middle ' + A.money(d.o.mid) + '; since 1996 worst year ' + t.worstYear.year + ' ' + sPc(t.worstYear.ret) + ', worst month ' + sMon(t.worstMonth.i) + ' ' + sPc(t.worstMonth.ret) + (t.maxDD ? ', deepest fall ' + sPc(t.maxDD.depth) + ' with ' + t.maxDD.under + ' months under water' : ''); }).join('. ') + '. Private equity share of private markets ' + m.pe + '%.'; }
    if (k === 'cash') { var c = crState(H), L2 = c.last; if (!L2) return ''; return 'Cash runway. Cash ' + A.money(L2.cash) + ', spending ' + A.money(c.spend) + ' a month, income still coming in ' + A.money(c.income) + ' a month; ' + (c.sell === 'yes' ? 'taxable investments counted (' + A.money(H.taxable) + ')' : 'cash only') + '. Result: cash lasts ' + sMonths(L2.r.monthsCash) + '; the policy floor of ' + A.money(H.floor) + (L2.r.below ? ' is already passed' : ' is reached after ' + sMonths(L2.r.monthsFloor)) + (c.sell === 'yes' ? '; with taxable investments ' + sMonths(L2.r.monthsAll) : '') + '.'; }
    if (k === 'plan') { var p = plState(H), L3 = p.last; if (!L3) return ''; return 'Set-aside planner. Held in ' + L3.step.the + ' at about ' + sPcs(L3.step.expected) + ' a year; set aside ' + A.money(p.save) + ' a month. ' + L3.r.map(function (x) { return x.name + ': ' + A.money(x.amount) + ' by ' + sYM(x.due) + ', ' + A.money(x.linkedNow) + ' linked, needs ' + A.money(x.need) + ' a month' + (x.near ? ' (due within three years, held in the money market)' : ''); }).join('; ') + '. Total ' + A.money(L3.total) + ' a month.'; }
    if (k === 'wait') { var w = cwState(); return 'The cost of waiting lesson: goal ' + A.money(w.t) + ' in ' + w.y + ' years at ' + w.g + '% a year, starting ' + w.d + ' years later.'; }
    return '';
  }
  function simAsk(q, route) {
    var k = simTool(route), box = k && simBox(k); if (!box || !A.sim) return null;
    var ql = q.toLowerCase(), H = simHH(), v = sNum(q), moved = '';
    if (k === 'runway') {
      var st = rwState(H), f = rwFmt(H), was = st.last ? st.last.n : null;
      var ag = ql.match(/retire[sd]?\s*(?:at|when\s+\w+\s+is)?\s*(\d{2})\b/);
      if (ag) { st.age = clampTo(+ag[1], 56, 67, 1); moved = H.first + ' retires at ' + st.age; }
      else if (/spend/.test(ql) && v) { var yr = /month/.test(ql) ? v * 12 : v; st.spend = clampTo(yr, 60000, 200000, 5000); moved = 'spending ' + A.money(st.spend) + ' a year'; }
      else if (/(set aside|save|saving)/.test(ql) && v != null) { st.save = clampTo(v, 0, 10000, 250); moved = 'setting aside ' + A.money(st.save) + ' a month'; }
      else if (/social security/.test(ql) && v != null) { st.ss = clampTo(v, 0, 90000, 2500); moved = 'Social Security of ' + A.money(st.ss) + ' a year'; }
      else if (/60\s*\/\s*40/.test(ql)) { st.mix = 'sixty'; moved = 'the 60/40 mix'; }
      else if (/mix lab/.test(ql)) { st.mix = 'lab'; moved = 'the Mix lab pick'; }
      else if (/(what (we|you) hold|today)/.test(ql) && H.todayMix) { st.mix = 'today'; moved = 'what you hold today'; }
      else if (/policy/.test(ql) && H.policyMix && /(try|use|switch|with|back)/.test(ql)) { st.mix = 'policy'; moved = 'your policy’s mix'; }
      if (moved) {
        sSync(box, st, f); rwUpdate(box); var ans = simAnswers(); ans.retireSpend = st.spend; ans.ss = st.ss; A.save();
        return 'Moved it on the page: ' + moved + '. ' + rwLine(H, st, was == null ? null : st.last.n - was) + '.' + SRC_T + '\n\nIt is a range from assumptions, not a promise. Move it back any time.';
      }
      if (/(why|not 100|100 of 100|paths|chance|mean)/.test(ql)) {
        var P = st.last;
        return 'Each of the 3,000 paths draws its own run of good and bad years from the mix’s expected return (' + sPc(P.stats.geo) + ' a year) and volatility (' + sPc(P.stats.vol) + ').' + SRC_T + ' In ' + P.n + ' of 100 the money is still there when ' + H.youngFirst + ' is 95. In the rest, a run of bad years early in retirement, while money is being taken out, empties it first; the Sequence replay lesson shows why the order matters.\n\nThe tool draws these years; it cannot know them. How the numbers work, under the chart, has the method.';
      }
      if (/(retire|last|enough|runs? out|money)/.test(ql)) return rwLine(H, st) + '.' + SRC_T + ' That is with ' + A.money(st.save) + ' a month set aside until ' + (H.owner.born + st.age) + ', ' + A.money(st.spend) + ' a year spent after, and Social Security of ' + A.money(st.ss) + ' from ' + (H.owner.born + 67) + '. Ask me to try a different age or spending and I will move it on the page.';
      return null;
    }
    if (k === 'mix') {
      var m = mxState(H), mf = mxFmt(), pre = null, cls = null;
      if (/family office/.test(ql)) pre = 'fo'; else if (/60\s*\/\s*40/.test(ql)) pre = 'sixty'; else if (/(what (we|you) hold|today)/.test(ql) && H.todayMix && /(try|show|use|switch|start)/.test(ql)) pre = 'today'; else if (/policy/.test(ql) && H.policyMix && /(try|show|use|switch|start|back)/.test(ql)) pre = 'policy';
      var cm = ql.match(/(\d{1,3})\s*%?\s*(?:in\s+)?(shares|stocks|equit\w*|bonds|private\s*\w*|real estate|property|infrastructure|cash)/) || ql.match(/(shares|stocks|bonds|private markets|real estate|infrastructure|cash)\s*(?:at|to)\s*(\d{1,3})\s*%?/);
      if (cm) { var num = +(cm[1].match(/\d/) ? cm[1] : cm[2]), word = cm[1].match(/\d/) ? cm[2] : cm[1]; cls = /share|stock|equit/.test(word) ? 'shares' : /bond/.test(word) ? 'bonds' : /private/.test(word) ? 'private' : /real|property/.test(word) ? 're' : /infra/.test(word) ? 'infra' : 'cash'; mxRebalance(m.pick, cls, clampTo(num, 0, 100, 1)); m.pre = null; moved = Math.round(m.pick[cls]) + '% in ' + (SIMC.filter(function (c) { return c.k === cls; })[0].name.toLowerCase()); }
      else if (pre) { var p = simPreset(H, pre); SIMC.forEach(function (c) { m.pick[c.k] = p.mix[c.k] || 0; }); m.pe = p.pe || 70; m.pre = pre; moved = p.name === 'Your policy' ? 'your policy’s mix' : p.name === 'What you hold' ? 'what you hold today' : 'the ' + p.name.toLowerCase(); }
      else if (/(\d{1,2})\s*years/.test(ql)) { m.h = clampTo(+ql.match(/(\d{1,2})\s*years/)[1], 3, 30, 1); moved = m.h + ' years ahead'; }
      if (moved) {
        mxSync(box, m); sSync(box, m, mf); mxUpdate(box);
        var Y = m.rows[m.rows.length - 1], t = Y.o.tr;
        return 'Moved it on the page: ' + moved + '. That mix expects about ' + sPc(Y.o.s.geo) + ' a year; after ' + m.h + ' years its middle case is ' + sShort(Y.o.mid) + ', between ' + sShort(Y.o.lo) + ' and ' + sShort(Y.o.hi) + '.' + SRC_T + '\n\nSince 1996 its worst year was ' + t.worstYear.year + ', ' + sPc(t.worstYear.ret) + (t.maxDD ? ', and its deepest fall ' + sPc(t.maxDD.depth) + ' with ' + t.maxDD.under + ' months under water' : '') + '. ' + Math.round(Y.o.liquid * 100) + '% of it could be sold within a week. Which mix to hold is your decision.';
      }
      var Yp = (m.rows || [])[m.rows.length - 1];
      if (/(2008|red|worst year|marked)/.test(ql) && Yp) return '2008 is the worst calendar year of the thirty the Mix lab replays: your pick fell ' + sPc(Yp.o.tr.worstYear.ret) + ' that year, ' + sShort(Math.abs(Yp.o.tr.worstYear.ret * H.investable)) + ' on what you invest today.' + SRC_T + ' The S&P 500 fell 37% that year and US private equity 23% [How the numbers work · the history].\n\nIt is marked because a bad year is what a mix has to live through. The next one will not look the same.';
      if (/(volatil|smooth|quarterly|reported|lower)/.test(ql)) return 'Private equity, private credit, real estate and infrastructure are valued a few times a year from appraisals, so their prices move smoothly on paper. The tools measure their volatility on those reported values: ' + sPc(sF().USED.pe[2] / 100) + ' a year for private equity, against ' + sPc(sF().CMA.pe[2] / 100) + ' in J.P. Morgan’s figures, which add back what the smoothing hides [How the numbers work].\n\nSo a fund you had to sell in a hurry could fall further than the reported figures show.';
      if (/(15\.5|private equity)/.test(ql)) return 'The tools assume 15.5% a year for private equity. It is Finna’s figure, from the funds its members reach: 40 funds with 25 managers, an average life of 4.2 years, and 16.4% a year after fees; 15.5% is the conservative figure. J.P. Morgan’s 2026 assumption for private equity is 10.2% [How the numbers work].\n\nIt is an assumption, not a promise, and counsel reviews how it is shown before launch.';
      if (/(under water|sharpe|deepest|fall)/.test(ql) && Yp) { var tr = Yp.o.tr; return tr.maxDD ? 'Your pick’s deepest fall since 1996 was ' + sPc(tr.maxDD.depth) + ', from ' + sMon(tr.maxDD.peak) + ' to ' + sMon(tr.maxDD.trough) + '. From that high it took ' + tr.maxDD.under + ' months to be back at it: that is the months under water. Its Sharpe ratio, the return above Treasury bills for each unit of ups and downs, is ' + tr.sharpe.toFixed(2) + '.' + SRC_T : 'Your pick never fell below a previous month-end high since 1996.' + SRC_T; }
      return null;
    }
    if (k === 'cash') {
      var c = crState(H), cf = { spend: sMoney, income: sMoney };
      if (/(income|still come|salary|earn)/.test(ql) && v != null) { c.income = clampTo(v, 0, 20000, 500); moved = 'income of ' + A.money(c.income) + ' a month still coming in'; }
      else if (/spend/.test(ql) && v) { c.spend = clampTo(/year/.test(ql) ? v / 12 : v, 3000, 30000, 500); moved = 'spending ' + A.money(c.spend) + ' a month'; }
      else if (/cash/.test(ql) && v && v > 1000) { c.cash = Math.round(v); var fld = box.querySelector('[data-cr-cash]'); if (fld) fld.value = A.money(c.cash).replace('$', ''); moved = A.money(c.cash) + ' in cash'; }
      else if (/(sell|taxable)/.test(ql) && H.taxable) { c.sell = /(don.t|without|not sell|cash only)/.test(ql) ? 'no' : 'yes'; moved = c.sell === 'yes' ? 'counting the taxable investments too' : 'cash only'; }
      else if (/(after|roof|cabin|goal)/.test(ql) && H.soonGoal) { c.when = 'after'; moved = 'after ' + H.soonGoal.name.charAt(0).toLowerCase() + H.soonGoal.name.slice(1); }
      if (moved) {
        sSync(box, c, cf); crUpdate(box); var an = simAnswers(); an.spendMonth = c.spend; an.incomeMonth = c.income; A.save();
        var R2 = c.last.r;
        return 'Moved it on the page: ' + moved + '. ' + (!R2.burn ? 'What still comes in covers the spending, so the cash is not touched.' : 'The ' + A.money(c.last.cash) + ' in cash lasts ' + sMonths(R2.monthsCash) + (R2.below ? ', already below your policy’s floor.' : ', and your policy’s floor of ' + A.money(H.floor) + ' is reached after ' + sMonths(R2.monthsFloor) + '.') + (c.sell === 'yes' ? ' With the taxable investments, ' + sMonths(R2.monthsAll) + ' in all, before tax.' : '')) + SRC_T;
      }
      if (/floor/.test(ql)) return 'Your policy keeps ' + A.money(H.floor) + ' reachable at all times [policy version ' + (A.policy() ? A.policy().version : '') + ']. On the page it is the dashed line: once the cash falls to it, the household has agreed to act, before money has to come from investments.' + (c.last && c.last.r.burn && !c.last.r.below ? ' At ' + A.money(c.spend) + ' a month it is reached after ' + sMonths(c.last.r.monthsFloor) + '.' + SRC_T : '');
      return null;
    }
    if (k === 'plan') {
      var pl = plState(H), L = sF().ladder(), si = null;
      if (/family office/.test(ql)) si = /conservative/.test(ql) ? 5 : /growth/.test(ql) ? 7 : 6;
      else if (/savings account/.test(ql) && /(try|show|back|use|hold)/.test(ql)) si = 0; else if (/money market/.test(ql)) si = 1; else if (/conservative/.test(ql)) si = 2; else if (/balanced/.test(ql)) si = 3; else if (/growth/.test(ql)) si = 4;
      var gm = ql.match(/(earlier|later|sooner)/), gName = null;
      if (gm) H.goals.forEach(function (g) { var w = g.name.toLowerCase().split(/\W+/).filter(function (x) { return x.length > 3; }); if (!gName && w.some(function (x) { return ql.indexOf(x) > -1; })) gName = g; });
      if (si != null) { pl.stage = si; moved = L[si].the; }
      else if (/(set aside|save|saving)/.test(ql) && v != null) { pl.save = clampTo(v, 0, 15000, 250); moved = 'setting aside ' + A.money(pl.save) + ' a month'; }
      else if (gName) { var dir = gm[1] === 'later' ? 1 : -1, nx = (pl.shift[gName.id] || 0) + dir; if (nx <= 6 && sF().monthsBetween(H.today, [gName.due[0] + nx, gName.due[1]]) >= 1) { pl.shift[gName.id] = nx; moved = gName.name + ' a year ' + (dir > 0 ? 'later' : 'earlier'); } }
      if (moved) {
        sSync(box, pl, { save: sMoney }); plUpdate(box); var R3 = pl.last;
        return 'Moved it on the page: ' + moved + '. Held in ' + R3.step.the + ', at about ' + sPcs(R3.step.expected) + ' a year, the goals need ' + A.money(R3.total) + ' a month; you set aside ' + A.money(pl.save) + '.' + SRC_T + '\n\nNothing is saved to your goals: this is a try.';
      }
      if (/(why|so much|savings account|more)/.test(ql) && pl.last) return 'In a savings account at ' + sPcs(L[0].expected) + ' a year almost nothing grows, so the months have to close each gap on their own: ' + A.money(sF().goalsNeed(H.goals, H.today, L[0].expected, L[1].expected).reduce(function (a, x) { return a + x.need; }, 0)) + ' a month across your goals.' + SRC_T + ' On a higher step the linked money and the set-asides grow at that step’s expected return, so the months do less of the work. Goals due within three years stay in the money market on every step.';
      return null;
    }
    if (k === 'wait') {
      var wst = cwState();
      if (/(later|wait|delay)/.test(ql) && v != null && v <= 15) { wst.d = clampTo(v, 0, 15, 1); sSync(box, wst, { t: sShort, y: function (x) { return x + ' years'; }, g: function (x) { return x.toFixed(1) + '%'; }, d: function (x) { return x + (x === 1 ? ' year' : ' years'); } }); cwUpdate(box); return 'Moved “Start later by” to ' + wst.d + (wst.d === 1 ? ' year' : ' years') + '. The answer is on the page; see if it matches the one you pick.'; }
      return null;
    }
    return null;
  }

  /* ══ FREYA'S RINGS AND HER MAP (3 Oct 2026) ════════════════════════════════════════════
     What Freya knows of the household, drawn round her mark (A.freyaGrowth()): five arcs outside,
     one for each desk, in the order the desks open; one ring inside, How you decide, the slow one;
     her mark in the middle, black or white as every mark is. The arcs are Freya's voice, so green.
     `from` (an earlier reading) draws the old state and plays it up to the new one (fgPlay). */
  var FG_ORDER = ['records', 'investment', 'policy', 'protection', 'succession'];
  function fgArc(r, start, len, cls, to) {
    var d = function (x) { return Math.max(0, x).toFixed(2) + ' ' + (360 - Math.max(0, x)).toFixed(2); };
    return '<circle class="' + cls + '" cx="60" cy="60" r="' + r + '" pathLength="360" transform="rotate(' + start.toFixed(2) + ' 60 60)" stroke-dasharray="' + d(len) + '"' +
      (to != null && Math.abs(to - len) > 0.01 ? ' data-to="' + d(to) + '"' : '') + '/>';
  }
  function fgRings(g, size, opts) {
    opts = opts || {};
    var f = opts.from, SEG = 72, GAP = 7, ARC = SEG - GAP, by = {}, fb = {};
    g.strands.forEach(function (x) { by[x.k] = x; });
    if (f) f.strands.forEach(function (x) { fb[x.k] = x; });
    var len = function (p) { return p > 0 ? Math.max(2.5, ARC * p / 100) : 0; };
    var s = '<svg class="fg-rings' + (opts.cls ? ' ' + opts.cls : '') + '" width="' + size + '" height="' + size + '" viewBox="0 0 120 120" role="img" aria-label="' +
      e('What Freya knows: ' + FG_ORDER.map(function (k) { return by[k].t.toLowerCase() + ' ' + by[k].pct; }).join(', ') + '; how you decide ' + g.you.pct + ', of 100') + '">';
    FG_ORDER.forEach(function (k, i) {
      var st = -90 + i * SEG + GAP / 2, now = len(by[k].pct), was = f ? len(fb[k].pct) : now;
      s += fgArc(52, st, ARC, 'tr', null) + fgArc(52, st, was, 'k k-' + k + (opts.hot === k ? ' is-hot' : ''), now);
    });
    var yNow = 360 * g.you.pct / 100, yWas = f ? 360 * f.you.pct / 100 : yNow;
    s += fgArc(40, -90, 360, 'tr y-tr', null) + fgArc(40, -90, yWas, 'y', yNow);
    return s + A.fyMark('ready', ' x="38" y="38" width="44" height="44"') + '</svg>';
  }
  /* the arcs move from the old reading to the new one, once, on arriving */
  function fgPlay(root) {
    var els = (root || document).querySelectorAll('.fg-rings [data-to]'); if (!els.length) return;
    var still = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    els.forEach(function (c) {
      var to = c.getAttribute('data-to'); c.removeAttribute('data-to');
      if (still) { c.setAttribute('stroke-dasharray', to); return; }
      requestAnimationFrame(function () { requestAnimationFrame(function () { c.classList.add('is-grow'); c.setAttribute('stroke-dasharray', to); c.style.strokeDasharray = to; }); });
    });
  }
  function fgSummary(g) {
    var top = g.strands.slice().sort(function (a, b) { return b.pct - a.pct; })[0];
    if (!top || top.pct < 10) return 'We’ve just met. I learn you as we go, and over the months.';
    return top.name + ' of ' + top.t.charAt(0).toLowerCase() + top.t.slice(1) + '. How you decide: ' + g.you.name.toLowerCase() + '.';
  }
  /* in Freya's panel, under her name: her rings, one line, and the way to her map */
  function fgStrip(from) {
    var g = A.freyaGrowth();
    return '<a class="fy-know" href="#/freya/map" data-fy-know>' + fgRings(g, 44, { from: from }) +
      '<span class="fy-know-t"><b>What I know about you</b><small>' + e(fgSummary(g)) + '</small></span><span class="fy-know-go">My map' + A.ic('arrow') + '</span></a>';
  }
  /* FREYA'S MAP (#/freya/map; on Learn until 3 Oct 2026, now in Freya's own menu): the six strands,
     each a stem of five steps */
  function fgStem(x, desk) {
    var lv = x.level, rows = '';
    for (var i = 1; i <= 5; i++) {
      var lo = A.FG_AT[i - 1], st = lv >= i ? 'done' : lv === i - 1 ? 'progress' : 'next';
      var frac = st === 'progress' ? Math.max(0, Math.min(1, (x.pct - (A.FG_AT[i - 2] || 0)) / (lo - (A.FG_AT[i - 2] || 0)))) : 0;
      var can = desk ? (i === 1 ? x.all[0] : i === 3 ? x.all[1] : i === 5 ? x.all[2] : '') : x.all[i - 1];
      rows += '<div class="lm-tip-row fg-row is-' + st + '">' + mk(st === 'done' ? 'done' : st === 'progress' ? 'progress' : 'next', false, frac) +
        '<span class="fg-row-t"><b>' + e(desk ? A.FG_LEVEL[i] : A.FG_YOU_LEVEL[i]) + '</b><small>from ' + lo + (can ? ' · ' + e(can) : '') + '</small></span></div>';
    }
    return '<div class="lm-tip-stem fg-stem">' + rows + '</div>';
  }
  function fgCard(x, desk) {
    var head = '<div class="fg-card-h">' + (desk ? deskPlate(x.k) : '<span class="fg-mk">' + A.fyMark('ready') + '</span>') + '<b>' + e(x.t) + '</b><span class="fg-pct"><b>' + x.pct + '</b><small>of 100</small></span></div>' +
      '<span class="meter fg-meter" aria-hidden="true"><i style="width:' + x.pct + '%"></i></span><p class="fg-lv">' + e(x.name) + (x.can ? '. ' + e(x.can) : '') + '</p>';
    var facts = desk ? '<details class="fg-facts"><summary>What I know · ' + x.known + ' of ' + x.facts.length + '</summary><ul>' + x.facts.map(function (f) {
      return '<li class="' + (f[1] ? 'is-known' : '') + '">' + (f[1] ? A.ic('check') : '<i aria-hidden="true"></i>') + '<span><b>' + e(f[0]) + '</b>' + (f[1] && f[2] ? '<small>' + e(f[2]) + '</small>' : '<small>Not in the record yet</small>') + '</span></li>';
    }).join('') + '</ul></details>' : '';
    var foot = desk ? '<a class="link" href="#/learn/map/' + x.k + '">Quests on ' + e(A.DESKS[x.k].noun) + ': ' + x.quests + ' of ' + x.of + A.ic('arrow') + '</a>' :
      '<p class="help">Learned only from time together. However fast the rest goes, this ring grows a little each month.</p>';
    return '<section class="panel fg-card fg-' + x.k + '">' + head + fgStem(x, desk) + facts + foot + '</section>';
  }
  function freyaMap() {
    var g = A.freyaGrowth(), S = A.S, o = A.FG_LEVEL[Math.max(g.pct > 0 ? 1 : 0, Math.min(5, [10, 30, 50, 70, 90].filter(function (a) { return g.pct >= a; }).length))];   /* anything known is a start, as on each strand */
    var met = S.household.opened ? A.date(S.household.opened) : '';
    var html = '<main class="screen lm-screen fg-screen">' + placeHead('Freya’s map', '', '<button class="key key-s key-secondary" type="button" data-act="ask" data-q="What do you know about us so far, and what would help you know us better?">Ask Freya</button>') +
      '<section class="panel fg-stand" aria-label="What Freya knows">' + fgRings(g, 168, { cls: 'is-big' }) +
      '<div class="fg-stand-t"><span class="eyebrow">What Freya knows about you</span><p class="fg-big"><b>' + g.pct + '</b><small>of 100 · ' + e(o) + '</small></p>' +
      '<p class="sg-line">Five strands are your desks: your record and your quests teach me those, and you can fill them in weeks. The inner ring is how you decide. I learn it only from time together, the questions you ask and the choices you write down, so it grows over months.</p>' +
      '<ul class="fg-sig"><li><b>' + g.asked + '</b>' + (g.asked === 1 ? ' question' : ' questions') + ' asked</li><li><b>' + g.days + '</b>' + (g.days === 1 ? ' day' : ' days') + ' together</li>' +
      (met ? '<li>Met on <b>' + e(met) + '</b></li>' : '') + '<li><b>' + g.decisions + '</b>' + (g.decisions === 1 ? ' decision' : ' decisions') + ' written down</li></ul></div></section>' +
      '<div class="fg-grid">' + g.strands.map(function (x) { return fgCard(x, true); }).join('') + fgCard(g.you, false) + '</div>' +
      '<p class="help fg-how">How it is counted: for each desk, what the record holds (up to 30), the quests answered on it (up to 50) and the months the record has been kept (up to 20). How you decide is held to about 8 a month. Nothing here is a score of you; it is how much I can help.</p>';
    return html + '</main>';
  }

  /* ══ A DESK NOT OPEN YET (3 Oct 2026) ══════════════════════════════════════════════════
     In the tutorial the desks open one at a time. A locked desk is still there: its page is a peek,
     what it does, its pages, and when it opens, with "Open it now" for anyone who wants it early. */
  var PEEK = {
    records: [['Statement', 'Everything you own and owe, to one net worth'], ['What you own', 'Each line with its source and date'], ['What you owe', 'Each debt, its rate and what it is against'], ['Timeline', 'Every date that matters'], ['Advisers', 'Who works for you · coming later'], ['Family', 'Who the money is for']],
    investment: [['What you hold', 'Your money by class, and inside each account'], ['Mix lab', 'Try another mix on thirty years of history'], ['Fees', 'What it costs you a year · coming later'], ['The route to investing', 'How a family office invests']],
    policy: [['Your rules', 'The cash to keep and the range for each class'], ['Drift', 'Where you stand against your rules'], ['Wealth planning', 'Your goals: an amount, a date, a priority'], ['Retirement runway', 'Will the money last?'], ['Financial Identity', 'How you think about money, in a title']],
    protection: [['Cover', 'Your insurance, policy by policy'], ['Safety check', 'How long the cash lasts if income stops']],
    succession: [['The will', 'Whether there is one, and where the original is'], ['Family', 'Who inherits, and who looks after whom'], ['Beneficiaries', 'Who each account and policy names']]
  };
  function deskPeek(k) {
    var D = A.DESKS[k], b = A.deskBefore(k), bOpen = b && A.deskOpen(b), t = A.S.tutor || {};
    /* the concept (prompt 19): its question, what it will answer, "Opens next" or "Waiting", and Open now, which runs its stage */
    var nxt = A.DESK_ORDER.filter(function (d) { return !A.deskOpen(d); })[0] === k;
    var when = nxt ? 'It opens next, with a few questions about it.' : 'It is waiting: the desks open one at a time, and the order of the rest stays.';
    var back = t.step && !t.done ? '<button class="link" type="button" data-act="tq-resume">Back to the tutorial</button>' : '';
    return '<main class="screen desk-peek">' + placeHead(D.noun, '', '<span class="status-label neutral peek-lock">' + A.ic('lock') + (nxt ? 'Opens next' : 'Waiting') + '</span>') +
      '<section class="scene on-tint scene-' + k + ' peek-scene" aria-label="' + e(D.noun) + ', not open yet"><div class="sc-in"><div class="sc-words">' +
      '<span class="eyebrow">' + e(D.noun) + ' · ' + e(D.verb) + '</span><p class="sc-answer">' + e(D.q) + '</p><p class="sc-sub">' + e(D.lede) + ' ' + e(when) + '</p>' +
      '<div class="peek-keys"><button class="key key-l" type="button" data-act="desk-open" data-desk="' + k + '">Open now</button>' + back + '</div></div>' +
      '<div class="sc-vis peek-vis" aria-hidden="true"><span class="peek-plate">' + deskPlate(k) + '<span class="peek-badge">' + A.ic('lock') + '</span></span></div></div></section>' +
      '<section class="panel peek-pages"><span class="eyebrow">What you will find here</span><ul>' + (PEEK[k] || []).map(function (p) { return '<li><b>' + e(p[0]) + '</b><span>' + e(p[1]) + '</span></li>'; }).join('') + '</ul>' +
      '<p class="help">The desks open one at a time, so each one starts with your own figures in it. Open it now and it stays open; the tutorial carries on from where you are.</p></section></main>';
  }
  /* its card on Home: there, with a lock, and when it opens */
  function hmLocked(k) {
    var b = A.deskBefore(k), next = b && A.deskOpen(b);
    return '<a class="hm-desk hm-' + k + ' scene-' + k + ' is-locked" href="#/' + k + '" aria-label="' + e(A.DESKS[k].noun + ', not open yet') + '">' +
      '<span class="hm-dh">' + deskPlate(k) + '<b>' + e(A.DESKS[k].noun) + '</b></span><span class="status-label neutral hm-st">' + A.ic('lock') + (next ? 'Opens next' : 'Locked') + '</span>' +
      '<b class="hm-v">' + A.ic('lock', 'hm-lock') + '</b><span class="hm-l">' + e(next ? 'Opens with the quest at the end of ' + A.DESKS[b].noun + '.' : 'Opens after ' + A.DESKS[b].noun + '. Peek in.') + '</span></a>';
  }

  /* ══ THE CONCEPT · OFFICE, THE OVERALL (14 Oct 2026) ════════════════════════════════════════════
     From "Your office, opened desk by desk" (11 Oct 2026), the Concept Prompts (5) and the fix round's
     lessons (12–13 Oct): Office is the overall, a page that scrolls on a phone. From the top: the date and the
     greeting with the owner's initial; Freya's line; Your total wealth in ONE picture; This week, the
     decision first; Coming up on every desk; For your information. Pick up where you left off and the
     what-if tools follow at the foot. On a desktop (Christian, 13 Oct 2026: "the treemap should have more
     space and the this week should be underneath the treemap"): the total-wealth card across the whole
     column, This week and Coming up side by side under it.
     THE PICTURE (fix 1, second round, approved 12 Oct: "Yes, to scale"): what you own as one block per class
     (the six blues, the largest darkest), what you owe as a row of debts in the brand's owed greys under it,
     one height shared to scale — own ÷ owe = owned ÷ owed, the owe row at least 28px — that grows with its
     width: clamp(280px, 40% of the width, 392px). Words fit or go: a block drops its sub-line, then its name,
     then its value, never an ellipsis. No tooltip, no switch; the whole picture opens Records › Everything on
     this desk, where the full treemap stays. */
  var OF_DAY = new Intl.DateTimeFormat('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  var OF_MD = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' });
  function ofInitial() { var w = A.who() || ''; return (w.charAt(0) || '·').toUpperCase(); }
  function ofDecisions() {
    return A.renewalsWithin(30).slice().sort(function (a, b) { return a.renews < b.renews ? -1 : 1; });
  }
  /* a cover's name as people say it: "Home insurance", "Life cover" */
  function coverWord(c) {
    var t = (c.type || '').toLowerCase();
    return t === 'homeowners' ? 'Home insurance' : t === 'auto' ? 'Car insurance' : t === 'umbrella' ? 'Umbrella cover' : t ? scCap(t) + ' cover' : 'Cover';
  }
  /* the change since the last statement: what was owned less what was owed on the record's previous date,
     against today; nothing when the record has fewer than two dates (fix 11) */
  function ofChange() {
    var S = A.S, dates = {};
    S.valuations.forEach(function (v) { if (v.asOf && v.asOf <= DEMO_TODAY) dates[v.asOf] = 1; });
    var ds = Object.keys(dates).sort(); if (ds.length < 2) return null;
    var prev = ds[ds.length - 2], then = 0, now = 0;
    S.assets.concat(S.liabilities).forEach(function (l) {
      if (l.kind === 'commitment') return;
      var h = A.history(l.id); if (!h.length) return;
      var last = h[h.length - 1], before = null; h.forEach(function (v) { if (v.asOf <= prev) before = v; });
      var sign = A.asset(l.id) ? 1 : -1; now += sign * last.amount; then += sign * (before ? before.amount : last.amount);
    });
    var d = now - then; if (Math.abs(d) < 1) return null;
    return { delta: d, since: prev };
  }
  /* ── the picture of what you own and owe ── */
  function wpPicture(opts) {
    opts = opts || {}; var t = A.totals();
    if (!(t.owned > 0)) return '';
    var tag = opts.link === false ? 'span role="img"' : 'a href="#/records/statement"', end = opts.link === false ? 'span' : 'a';
    return '<' + tag + ' class="wp" data-wp aria-label="What you own and what you owe, as one picture to scale' + (opts.link === false ? '' : '. Open Everything on the Records desk') + '">' +
      '<span class="wp-own" data-wp-own></span><span class="wp-owe" data-wp-owe></span></' + end + '>' +
      (opts.key === false ? '' : '<p class="wp-key"><span><i class="wp-sq own" aria-hidden="true"></i>What you own <b class="num">' + A.money(t.owned) + '</b></span>' +
      (t.owed > 0 ? '<span><i class="wp-sq owe" aria-hidden="true"></i>What you owe <b class="num">' + A.money(t.owed) + '</b></span>' : '') + '</p>');
  }
  function wpClasses() {
    var g = tvTree('own', 'cat').filter(function (n) { return n.v > 0; }).sort(function (a, b) { return b.v - a.v; });
    if (g.length > 6) { var rest = g.slice(5); g = g.slice(0, 5).concat([{ k: 'more', label: '+' + rest.length, sub: rest.map(function (n) { return n.label; }).join(', '), v: rest.reduce(function (s, n) { return s + n.v; }, 0) }]); }
    return g;
  }
  function wpDebts() {
    return A.S.liabilities.filter(function (l) { return l.kind !== 'commitment' && A.amount(l.id) > 0; })
      .map(function (l) { return { label: l.name, v: A.amount(l.id) }; }).sort(function (a, b) { return b.v - a.v; });
  }
  function wpFit(b) {
    var room = b.clientWidth - 2 * WP_PAD, roomH = b.clientHeight - 2 * WP_PADY;
    function ok() {
      var h = 0, fits = true;
      b.querySelectorAll('span').forEach(function (s) { if (s.scrollWidth > room + 0.5) fits = false; h += s.offsetHeight; });
      return fits && h <= roomH + 0.5;
    }
    ['.wp-s', '.wp-n', '.wp-v'].forEach(function (sel) { if (ok()) return; var el = b.querySelector(sel); if (el) el.remove(); });
    if (!ok()) b.querySelectorAll('span').forEach(function (s) { s.remove(); });
  }
  var WP_GAP = 6, WP_PAD = 10, WP_PADY = 8, WP_MIN_OWE = 28;
  function wpLayout(box) {
    var W = box.clientWidth; if (!W) return;
    var t = A.totals(), O = t.owned, D = t.owed > 0 ? t.owed : 0;
    var H = Math.round(Math.min(392, Math.max(280, W * 0.40))), g = WP_GAP;
    var ownH = D ? (H - g) * O / (O + D) : H, oweH = D ? H - g - ownH : 0;
    if (D && oweH < WP_MIN_OWE) { oweH = WP_MIN_OWE; ownH = H - g - oweH; }
    var own = box.querySelector('[data-wp-own]'), owe = box.querySelector('[data-wp-owe]');
    own.style.height = Math.round(ownH) + 'px'; owe.style.height = D ? Math.round(oweH) + 'px' : '0px'; owe.hidden = !D;
    var cls = wpClasses(), rects = squarify(cls.map(function (n) { return { v: n.v, n: n }; }), -g / 2, -g / 2, W + g, Math.round(ownH) + g);
    own.innerHTML = rects.map(function (r, i) {
      var n = r.n.n, k = Math.min(i, 5) + 1;
      return '<span class="wp-b" style="left:' + (r.x + g / 2).toFixed(1) + 'px;top:' + (r.y + g / 2).toFixed(1) + 'px;width:' + Math.max(0, r.w - g).toFixed(1) + 'px;height:' + Math.max(0, r.h - g).toFixed(1) +
        'px;background:var(' + TV_RAMP[k - 1] + ');color:var(' + TV_INK[k - 1] + ')' + (r.w - g < 2 * WP_PAD + 12 || r.h - g < 2 * WP_PADY + 12 ? ';padding:0' : '') + '"><span class="wp-n">' + e(n.label) + '</span>' + (n.sub ? '<span class="wp-s">' + e(n.sub) + '</span>' : '') +
        '<span class="wp-v num">' + A.short(n.v) + '</span></span>';
    }).join('');
    if (D) {
      var ds = wpDebts(), big = ds.filter(function (d) { return d.v / D * W >= 24; }), small = ds.filter(function (d) { return d.v / D * W < 24; });
      if (small.length) big.push({ label: '', v: small.reduce(function (s, d) { return s + d.v; }, 0), sliver: true });
      var ws = big.map(function (d) { return Math.max(d.v / D * (W + g), 14); }), k = (W + g) / ws.reduce(function (s, w) { return s + w; }, 0), x = -g / 2;
      owe.innerHTML = big.map(function (d, i) {
        var w = ws[i] * k, left = x + g / 2; x += w;
        return '<span class="wp-b wp-d' + (i ? ' wp-d2' : '') + '" style="left:' + left.toFixed(1) + 'px;top:0;width:' + Math.max(0, w - g).toFixed(1) + 'px;height:100%' + (w - g < 2 * WP_PAD + 12 ? ';padding:0' : '') + '">' +
          (d.sliver ? '' : '<span class="wp-n" data-v="' + e(A.short(d.v)) + '">' + e(d.label) + ' · ' + e(A.short(d.v)) + '</span>') + '</span>';
      }).join('');
    } else owe.innerHTML = '';
    own.querySelectorAll('.wp-b').forEach(wpFit);
    /* a debt keeps its value when its name does not fit beside it */
    owe.querySelectorAll('.wp-b').forEach(function (b) {
      var n = b.querySelector('.wp-n'); if (!n) return;
      if (n.scrollWidth > b.clientWidth - 2 * WP_PAD + 0.5) { n.textContent = n.getAttribute('data-v'); if (n.scrollWidth > b.clientWidth - 2 * WP_PAD + 0.5) n.remove(); }
    });
  }
  /* ── the parts of the page ── */
  function ofHead() {
    return '<header class="of-head"><div class="of-hi"><p class="of-date">' + e(OF_DAY.format(new Date(DEMO_TODAY + 'T00:00:00'))) + '</p>' +
      '<h1 class="title">Mr. White</h1></div>' +
      '<a class="own-ini of-ini" href="#/profile" aria-label="Profile">' + e(ofInitial()) + '</a></header>';
  }
  /* WHILE DESKS ARE STILL TO OPEN (the concept, prompt 19): "Records is open. Investment is next.", about how long, and one
     key, Open Investment, which starts that desk's stage in the tutorial; the five plates under it, "1 of 5 desks open".
     After the fifth, Office shows its everyday sections */
  function ofNext() {
    var k = A.DESK_ORDER.filter(function (d) { return !A.deskOpen(d); })[0]; if (!k) return null;
    var open = A.DESK_ORDER.filter(A.deskOpen), st = (window.FT_STAGES || []).filter(function (g) { return g && g.k === k; })[0];
    return { k: k, n: open.length, min: st ? st.min : 3,
      line: (open.length === 1 ? A.DESKS[open[0]].noun + ' is open.' : scCap(scW(open.length)) + ' desks are open.') + ' ' + A.DESKS[k].noun + ' is next.' };
  }
  function ofPlates() {
    var nx = ofNext(), next = nx ? nx.k : '';
    return '<div class="of-desks"><div class="of-plates" role="img" aria-label="' + e(A.desksOpenCount() + ' of 5 desks open') + '">' + A.DESK_ORDER.map(function (k) {
      return '<a class="of-plate' + (A.deskOpen(k) ? ' is-on' : k === next ? ' is-next' : '') + '" href="#/' + k + '" aria-label="' + e(A.DESKS[k].noun + (A.deskOpen(k) ? '' : k === next ? ', opens next' : ', waiting')) + '">' + deskPlate(k) + '</a>';
    }).join('') + '</div><p>' + A.desksOpenCount() + ' of 5 desks open.' + (nx && nx.n < 4 ? ' The others can open now, from Desks.' : '') + '</p></div>';
  }
  function ofLine() {
    var nx0 = ofNext(); if (nx0) return nx0.line;
    var dec = ofDecisions().length, n = ofWeekItems().length;
    if (!A.S.assets.length) return 'Nothing is recorded yet. Your office starts with the first thing you add.';
    if (dec) return (dec === 1 ? 'One decision' : scCap(scW(dec)) + ' decisions') + ' this week. The rest is in hand.';
    if (n) return (n === 1 ? 'One thing' : scCap(scW(n)) + ' things') + ' to do this week. The rest is in hand.';
    return 'Nothing needs a decision this week. The rest is in hand.';
  }
  function ofBrief() {
    return '<section class="of-brief fy-say" aria-label="Freya">' + A.fyMark('ready') + '<p>' + e(ofLine()) + '</p></section>';
  }
  function ofWealth() {
    var t = A.totals(); if (!A.S.assets.length) return '';
    var ch = ofChange();
    return '<section class="of-wealth" aria-labelledby="of-tw"><div class="of-tw-h"><div><h2 id="of-tw">' + gl('total-wealth', 'Your total wealth') + '</h2>' +
      '<p class="of-fig num">' + A.money(t.net) + '</p></div>' +
      (ch ? '<p class="of-ch"><b class="num">' + (ch.delta > 0 ? '+' : '−') + A.money(Math.abs(ch.delta)) + '</b> since ' + e(OF_MD.format(new Date(ch.since + 'T00:00:00'))) + '</p>' : '') + '</div>' +
      wpPicture() + '</section>';
  }
  /* this week: three things at most, the decision first */
  function ofWeekItems() {
    var out = [], S = A.S;
    ofDecisions().forEach(function (c) { var d = A.days(DEMO_TODAY, c.renews); out.push({ dec: true, title: coverWord(c) + ' renews', line: 'In ' + d + (d === 1 ? ' day' : ' days') + ' · for your decision', href: '#/protection/cover', key: 'Review' }); });
    var st = A.staleLines(); if (st.length) out.push({ desk: 'records', title: (st.length === 1 ? 'A figure' : scCap(scW(st.length)) + ' figures') + ' to check', line: 'Records · past the date you set', href: '#/records/own' });
    var unf = S.documents.filter(function (d) { return !A.filed(d); }); if (unf.length) out.push({ icon: 'vault', title: (unf.length === 1 ? 'A paper' : scCap(scW(unf.length)) + ' papers') + ' to file', line: 'Vault · needs filing', href: '#/vault/needs-filing' });
    if (S.will.exists !== 'Yes' && S.will.exists !== 'No' && S.assets.length) out.push({ desk: 'succession', title: 'Where is the will?', line: 'Succession · not recorded yet', href: '#/succession/will' });
    var fw = A.firstWeek(); if (fw && !out.length) out.push({ desk: ({ Records: 'records', Governance: 'policy', Protection: 'protection', Succession: 'succession' })[fw.desk] || 'records', title: fw.key, line: fw.desk + ' · a first step', href: fw.href || '', act: fw.act });
    var lp = A.nextPath(); if (lp && out.length < 3) out.push({ learn: true, title: lp.title, line: 'Learn · next for you · about ' + lp.minutes + ' min', href: A.learnHref(lp) });
    return out.slice(0, 3);
  }
  function ofWeek() {
    var nx = ofNext();
    if (nx) return '<section class="of-week is-next" aria-labelledby="of-wk"><div class="section-h of-sh"><h2 id="of-wk"><span class="of-wk-mk">' + A.fyMark('ready') + '</span>This week</h2></div>' +
      '<p class="of-wk-line">' + e(nx.line) + '<small> · About ' + nx.min + ' minutes</small></p>' +
      '<button class="key key-l of-next-k" type="button" data-act="tq-desk" data-desk="' + nx.k + '">Open ' + e(A.DESKS[nx.k].noun) + '</button>' + ofPlates() + '</section>';
    var items = ofWeekItems();
    var rows = items.map(function (x) {
      if (x.dec) return '<div class="of-dec"><span class="of-dot" aria-hidden="true"><i></i></span><span class="of-rt"><b>' + e(x.title) + '</b><small>' + e(x.line) + '</small></span>' +
        '<a class="key key-bullion" href="' + x.href + '">' + e(x.key) + '</a></div>';
      var ic = x.learn ? '<span class="of-ic of-learn">' + A.ic('learn') + '</span>' : x.icon ? '<span class="of-ic">' + A.ic(x.icon) + '</span>' : '<span class="of-ic">' + deskPlate(x.desk) + '</span>';
      var tag = x.act ? 'button type="button" data-act="' + x.act + '"' : 'a href="' + x.href + '"', end = x.act ? 'button' : 'a';
      return '<' + tag + ' class="of-row">' + ic + '<span class="of-rt"><b>' + e(x.title) + '</b><small>' + e(x.line) + '</small></span>' + A.ic('chevron', 'of-chev') + '</' + end + '>';
    }).join('');
    return '<section class="of-week" aria-labelledby="of-wk"><div class="section-h of-sh"><h2 id="of-wk">' + '<span class="of-wk-mk">' + A.fyMark('ready') + '</span>This week</h2><span class="of-count">' + (items.length ? items.length + (items.length === 1 ? ' thing' : ' things') : '') + '</span></div>' +
      '<p class="of-wk-line">' + e(ofLine()) + '</p>' + (rows ? '<div class="of-list">' + rows + '</div>' : '') + '</section>';
  }
  function ofComing() {
    var items = A.timeline().filter(function (x) { return !x.overdue && x.date > DEMO_TODAY; }).slice(0, 4);
    var rows = '<li class="of-now"><b>Today</b><small>' + e(OF_DAY.format(new Date(DEMO_TODAY + 'T00:00:00'))) + '</small></li>' + items.map(function (x) {
      var dt = new Date(x.date + 'T00:00:00'), title = x.title.replace(/ cover renews · /, ' cover renews on ');
      return '<li><a href="' + x.href + '"><b class="num">' + e(OF_MD.format(dt)) + '</b><small>' + e(title) + ' · ' + e(x.desk) + '</small></a></li>';
    }).join('');
    return '<section class="of-coming" aria-labelledby="of-cu"><div class="section-h of-sh"><h2 id="of-cu">Coming up</h2><span class="of-count">every desk</span></div>' +
      '<div class="of-cu-card"><ol class="of-line">' + rows + '</ol><a class="link of-tl" href="#/records/timeline">The Timeline' + A.ic('arrow') + '</a></div></section>';
  }
  /* for your information: Freya's notes, with no key and no badge — what she is watching, and what changed */
  function ofFyi() {
    var notes = [];
    A.drift().filter(function (x) { return x.out; }).slice(0, 2).forEach(function (x) {
      notes.push(scCap(x.label) + (/^cash$/i.test(x.label) ? ' is ' : ' are ') + (x.out === 'above' ? 'above' : 'below') + ' your limit: ' + Math.round(x.actual * 100) + '%. You set ' + (x.out === 'above' ? x.max : x.min) + '%. I’m watching it.');
    });
    var st = A.staleLines(); if (st.length) notes.push((st.length === 1 ? 'One figure' : scCap(scW(st.length)) + ' figures') + ' in Records ' + (st.length === 1 ? 'is' : 'are') + ' past the date you set for checking.');
    /* what changed since the last visit: the week's briefing, unless it repeats a limit already named above */
    var said = A.drift().filter(function (x) { return x.out; }).map(function (x) { return x.label.toLowerCase(); });
    (A.S.briefing && A.S.briefing.items || []).filter(function (b) { return !said.some(function (l) { return b.text.toLowerCase().indexOf(l) > -1; }); }).slice(0, 1).forEach(function (b) { if (notes.length < 3) notes.push(b.text); });
    if (!notes.length) return '';
    return '<section class="of-fyi" aria-labelledby="of-fy"><div class="section-h"><h2 id="of-fy">For your information</h2></div><div class="of-notes">' +
      notes.slice(0, 3).map(function (n) { return '<p class="of-note">' + A.fyMark('ready') + '<span>' + e(n) + '</span></p>'; }).join('') + '</div></section>';
  }
  function office() {
    var S = A.S, html = '<main class="screen office">' + ofHead() + ofBrief() + ofWealth();
    html += '<div class="of-pair">' + ofWeek() + ofComing() + '</div>' + ofFyi();
    var recent = (S.recent || []).filter(function (x) { return x.path.indexOf('/home') !== 0; }).slice(0, 3), tries = A.sim ? simTry('home') : '';
    if (recent.length) html += '<section class="hm-sec home-recent" aria-label="Pick up where you left off">' + sectionH('Pick up where you left off') + '<div class="recent">' +
      recent.map(function (x) { return '<a class="recent-item" href="#' + x.path + '">' + e(x.label) + A.ic('arrow') + '</a>'; }).join('') + '</div></section>';
    if (tries) html += tries;
    return html + '</main>';
  }
  /* ══ THE CONCEPT · A DESK OPENS ON FREYA'S BRIEF (14 Oct 2026) ═══════════════════════════════════
     Prompts 10 and 11: each desk's first page is the desk's page, a page that scrolls on a phone. The title
     with the desk's plate and its question; Freya's brief, the first line of the desk's summary; one section
     per picture, each heading opening its page, so every page the desk has stays one tap away; Learn more;
     "Everything on this desk" and the pages without a section of their own. On a desktop the desk's one main
     key (its decision, in Bullion) sits top right and the desk's sub menu folds away. */
  var DP_PAGES = {
    records: [['statement', 'Everything on this desk'], ['own', 'What you own'], ['owe', 'What you owe'], ['timeline', 'Timeline'], ['advisers', 'Advisers'], ['family', 'Family']],
    investment: [['holdings', 'What you hold'], ['mix', 'Mix lab'], ['fees', 'Fees'], ['access', 'The route to investing']],
    policy: [['rules', 'Your rules'], ['drift', 'Drift'], ['planning', 'Wealth planning'], ['runway', 'Retirement runway'], ['identity', 'Financial Identity']],
    protection: [['cover', 'Cover'], ['safety', 'Safety check']],
    succession: [['will', 'The will'], ['family', 'Family'], ['beneficiaries', 'Beneficiaries']]
  };
  function dpHeadHTML(k, key) {
    var D = A.DESKS[k];
    return '<header class="dp-head"><span class="dp-plate" aria-hidden="true">' + deskPlate(k) + '</span><div class="dp-t"><h1 class="title">' + e(D.noun) + '</h1><p class="dp-q">' + e(D.q) + '</p></div>' +
      (key ? '<div class="dp-key">' + key + '</div>' : '') + '</header>';
  }
  function dpBrief(text) { return '<section class="of-brief dp-brief" aria-label="Freya’s brief">' + A.fyMark('ready') + '<p>' + text + '</p></section>'; }
  function dpSec(title, href, count, body, cls) {
    return '<section class="dp-sec' + (cls ? ' ' + cls : '') + '"><div class="section-h of-sh"><h2>' + (href ? '<a class="dp-h-link" href="' + href + '">' + e(title) + A.ic('chevron', 'of-chev') + '</a>' : e(title)) + '</h2>' +
      (count ? '<span class="of-count">' + e(count) + '</span>' : '') + '</div>' + body + '</section>';
  }
  function dpRows(rows) {
    return '<ul class="dp-list">' + rows.map(function (r) {
      return '<li><i class="wp-sq" style="background:' + r.c + '" aria-hidden="true"></i><span class="dp-lt"><b>' + e(r.n) + '</b>' + (r.s ? '<small>' + e(r.s) + '</small>' : '') + '</span><span class="dp-lv num">' + r.v + '</span></li>';
    }).join('') + '</ul>';
  }
  /* Learn more: the desk's film, or while it is not on, the desk's next quest as a short lesson. In Learn's green */
  function dpLearn(k) {
    var p = A.nextPath(k), vid = null;
    if (p) Object.keys(LV).some(function (id) { var v = LV[id]; if ((v.at || []).indexOf(p.id) > -1 && v.ready) { vid = { id: id, v: v }; return true; } return false; });
    var body;
    if (vid) body = '<a class="dp-film" href="#/learn/path/' + p.id + '"><span class="dp-film-pic" aria-hidden="true">' + deskPlate(k) + '<i class="dp-play"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 7.5v9l7.5-4.5z" fill="currentColor"/></svg></i></span>' +
      '<span class="dp-film-t"><b>' + e(vid.v.t) + '</b><small>Film · ' + Math.floor(vid.v.sec / 60) + ':' + ('0' + vid.v.sec % 60).slice(-2) + '</small></span></a>';
    else if (p) body = '<a class="dp-film" href="' + A.learnHref(p) + '"><span class="dp-film-pic learn" aria-hidden="true">' + A.ic('learn') + '</span>' +
      '<span class="dp-film-t"><b>' + e(p.title) + '</b><small>A short lesson, about 2 minutes</small></span></a>';
    else return '';
    return '<section class="dp-sec dp-learn" data-zone="learn"><div class="section-h of-sh"><h2>Learn more</h2></div>' + body + '</section>';
  }
  function dpLinks(k) {
    var pg = DP_PAGES[k] || [], first = k === 'records' ? pg[0] : null, rest = k === 'records' ? pg.slice(1) : pg;
    return '<nav class="dp-links" aria-label="' + e(A.DESKS[k].noun) + ' pages">' + (first ? '<a class="link dp-all" href="#/records/statement">' + e(first[1]) + A.ic('arrow') + '</a>' : '') +
      '<p class="dp-more">' + rest.map(function (x) { return '<a class="link" href="#/' + k + '/' + x[0] + '">' + e(x[1]) + '</a>'; }).join('<span aria-hidden="true"> · </span>') + '</p></nav>';
  }
  function dpPage(k, key, brief, sections) {
    return '<main class="screen desk-page dp-' + k + '">' + dpHeadHTML(k, key) + (brief ? dpBrief(brief) : '') + sections + dpLearn(k) + dpLinks(k) + '</main>';
  }
  /* ── Records · What do we have? ── */
  function recHome() {
    var S = A.S, t = A.totals(), st = A.staleLines();
    if (!S.assets.length) return dpPage('records', '', 'Nothing is recorded yet. Your record starts with the first thing you add.', dpSec('What you own', '', '', '<div><button class="key" type="button" data-act="add-asset">Add what you have</button></div>'));
    var ch = ofChange(), key = st.length ? '<a class="key key-bullion" href="#/records/own">Check the ' + (st.length === 1 ? 'figure' : st.length + ' figures') + '</a>' : '';
    var brief = 'Your total wealth is ' + A.short(t.net) + '.' + (st.length ? ' ' + scCap(scW(st.length)) + (st.length === 1 ? ' figure needs' : ' figures need') + ' checking.' : '');
    var wealth = '<section class="dp-sec dp-wealth"><div class="of-tw-h"><div><h2>' + gl('total-wealth', 'Your total wealth') + '</h2><p class="of-fig num">' + A.money(t.net) + '</p></div>' +
      '<p class="of-ch">owned ' + A.money(t.owned) + ' − owed ' + A.money(t.owed) + '</p></div>' + wpPicture() + '</section>';
    var cards = [];
    if (st.length) cards.push('<a class="dp-card att" href="#/records/own"><small>To check</small><b class="num">' + st.length + '</b><span>' + (st.length === 1 ? 'figure' : 'figures') + ' past the date you set</span></a>');
    if (ch) cards.push('<a class="dp-card" href="#/records/statement"><small>Moved</small><b class="num">' + (ch.delta > 0 ? '+' : '−') + A.money(Math.abs(ch.delta)) + '</b><span>since ' + e(OF_MD.format(new Date(ch.since + 'T00:00:00'))) + '</span></a>');
    var debts = wpDebts();
    cards.push('<a class="dp-card" href="#/records/owe"><small>Owed</small><b>' + debts.length + (debts.length === 1 ? ' debt' : ' debts') + '</b><span>' + A.short(t.owed) + ' together</span></a>');
    var cls = tvTree('own', 'cat').filter(function (n) { return n.v > 0; }).sort(function (a, b) { return b.v - a.v; });
    var own = dpSec('What you own', '#/records/own', cls.length + (cls.length === 1 ? ' line' : ' lines'), dpRows(cls.map(function (n, i) { return { c: 'var(' + TV_RAMP[Math.min(i, 5)] + ')', n: n.label, s: n.sub, v: A.money(n.v) }; })));
    var owe = debts.length ? dpSec('What you owe', '#/records/owe', debts.length + (debts.length === 1 ? ' debt' : ' debts'), dpRows(debts.map(function (d, i) { return { c: 'var(' + (i ? '--l-owed-2' : '--l-owed') + ')', n: d.label, v: A.money(d.v) }; }))) : '';
    return dpPage('records', key, brief, '<div class="dp-top">' + wealth + '<div class="dp-cards"><h2 class="dp-cards-h">Needs you</h2>' + cards.slice(0, 3).join('') + '</div></div>' + '<div class="dp-two">' + own + owe + '</div>');
  }
  /* ── Investment · How does it grow? ── */
  function invHome() {
    var S = A.S, H = dpHead('investment'), inv = A.investable(), out = A.policy() ? A.drift().filter(function (x) { return x.out; }) : [];
    if (!inv.total) return dpPage('investment', '', 'Nothing to measure yet. What you hold appears here from Records.', dpSec('What you hold', '#/investment/holdings', '', '<div><a class="key" href="#/records/own">Add what you hold</a></div>'));
    var brief = A.short(inv.total) + ' invested.' + (A.policy() ? out.length ? ' ' + (out.length === 1 ? 'One class is' : scCap(scW(out.length)) + ' classes are') + ' outside your range.' : ' Every class is inside your range.' : '');
    var hold = dpSec('What you hold', '#/investment/holdings', H.l.replace(/^Invested · /, ''), treeMap('inv', { bare: true, foot: invKey() }), 'dp-hold');
    /* how long until it is money: within days, or years */
    var days = 0, years = 0;
    S.assets.forEach(function (a) { if (!A.isInvestable(a)) return; var v = A.amount(a.id); if (['cash', 'listed', 'bonds'].indexOf(a.cls) > -1) days += v; else years += v; });
    var tot = days + years || 1;
    var ladder = '<div class="dp-ladder"><span class="dp-bar" aria-hidden="true"><i style="flex:' + (days / tot).toFixed(4) + ';background:var(--c-bonds)"></i><i style="flex:' + (years / tot).toFixed(4) + ';background:var(--c-pe)"></i></span>' +
      '<p class="wp-key"><span><i class="wp-sq" style="background:var(--c-bonds)" aria-hidden="true"></i>Within days <b class="num">' + A.short(days) + '</b></span><span><i class="wp-sq" style="background:var(--c-pe)" aria-hidden="true"></i>Years: retirement, education, private <b class="num">' + A.short(years) + '</b></span></p></div>';
    var classes = A.POLICY_CLASSES.map(function (k) { return { k: k, v: inv.by[k] }; }).filter(function (x) { return x.v > 0; }).sort(function (a, b) { return b.v - a.v; });
    var each = dpSec('Each class', '#/investment/mix', '', dpRows(classes.map(function (x) { return { c: A.MIXC[x.k], n: A.MIXL[x.k], s: Math.round(x.v / inv.total * 100) + '% of what you invest', v: A.money(x.v) }; })));
    return dpPage('investment', '', brief, hold + dpSec('How long until it is money', '#/investment/holdings', '', ladder) + each);
  }
  /* ── Governance · What is it for? ── */
  function polHome() {
    var S = A.S, p = A.policy();
    if (!p) return dpPage('policy', '', 'There are no rules yet. Your household writes them once; Finna watches them.', dpSec('Your rules', '#/policy/rules', '', '<div><button class="key" type="button" data-act="edit-policy">Write the rule</button></div>'));
    var out = A.drift().filter(function (x) { return x.out; }), x = out.length ? scDriftLead(out) : null;
    var brief = x ? e(scCap(x.label)) + (/^cash$/i.test(x.label) ? ' is ' : ' are ') + (x.out === 'above' ? 'above' : 'below') + ' your limit: ' + Math.round(x.actual * 100) + '%. You set ' + (x.out === 'above' ? x.max : x.min) + '%.' : 'Every class is inside your range.';
    var ranges = dpSec('Each class against its range', '#/policy/drift', out.length ? (out.length === 1 ? 'One outside' : scCap(scW(out.length)) + ' outside') : 'All inside', pGov() +
      '<p class="dp-key-line"><span><i class="pg-band-k" aria-hidden="true"></i>Your range</span><span><i class="pg-tgt-k" aria-hidden="true"></i>Your target</span><span><i class="pg-dot-k" aria-hidden="true"></i>Today</span></p>');
    var goals = S.goals.length ? dpSec('Your goals', '#/policy/planning', S.goals.length + (S.goals.length === 1 ? ' goal' : ' goals'), '<ul class="dp-goals">' + S.goals.map(function (g) {
      var pr = A.goalProgress(g), sh = g.amount ? Math.min(1, pr.have / g.amount) : 0;
      return '<li><span class="dp-lt"><b>' + e(g.name) + '</b><small>' + A.short(pr.have) + ' of ' + A.short(g.amount) + ' linked · by ' + e(A.date(g.date)) + '</small></span><span class="dp-bar" aria-hidden="true"><i style="flex:' + sh.toFixed(3) + ';background:var(--desk)"></i><i style="flex:' + (1 - sh).toFixed(3) + '"></i></span></li>';
    }).join('') + '</ul>') : '';
    var idb = '';
    if (A.LI) { var I = idI(), ttl = I.title && I.title.arch ? 'The ' + I.title.mod + ' ' + I.title.arch : '', r = I.ans ? A.idResolve(I.ans) : null;
      if (ttl) idb = dpSec('Your Financial Identity', '#/policy/identity', '', '<a class="dp-id" href="#/policy/identity">' + idCrest(I.title.arch, A.idStageDone(I) >= 1 ? 'firm' : 'found', 56) + '<span class="dp-lt"><b>' + e(ttl) + '</b>' + (r && r.sigLine ? '<small>' + e(r.sigLine) + '</small>' : '') + '</span></a>'); }
    return dpPage('policy', '', brief, ranges + goals + idb);
  }
  /* ── Protection · Are we covered? ── */
  function proHome() {
    var S = A.S; if (!S.cover.length) return dpPage('protection', '', 'No cover is recorded yet.', dpSec('What is insured', '#/protection/cover', '', '<div><button class="key" type="button" data-act="add-cover">Add cover</button></div>'));
    var soon = ofDecisions()[0], sum = S.cover.reduce(function (s, c) { return s + (c.sum || 0); }, 0), dd = soon ? A.days(DEMO_TODAY, soon.renews) : 0;
    var key = '';   /* the decision card below carries the one key */
    var brief = A.short(sum) + ' insured.' + (soon ? ' ' + coverWord(soon) + ' renews in ' + dd + ' days.' : '');
    var dec = soon ? '<section class="dp-sec"><div class="of-dec"><span class="of-dot" aria-hidden="true"><i></i></span><span class="of-rt"><b>' + e(coverWord(soon)) + ' renews</b><small>' + e(soon.covers) + ' · in ' + dd + ' days · for your decision</small></span><a class="key key-bullion" href="#/protection/cover">Review</a></div></section>' : '';
    var cash = A.reachableCash(), spend = simAnswers().spendMonth, mo = spend ? Math.floor(cash / spend) : 0;
    var income = dpSec('If income stopped', '#/protection/safety', '', '<p class="dp-say">The <b class="num">' + A.money(cash) + '</b> in cash lasts <b>' + mo + (mo === 1 ? ' month' : ' months') + '</b> at <b class="num">' + A.money(spend) + '</b> a month.</p>' +
      '<span class="dp-bar" aria-hidden="true"><i style="flex:' + Math.min(1, mo / 24).toFixed(3) + ';background:var(--c-cash)"></i><i style="flex:' + (1 - Math.min(1, mo / 24)).toFixed(3) + '"></i></span><p class="py-ax"><span>Today</span><span>24 months</span></p>');
    return dpPage('protection', key, brief, dec + dpSec('What is insured', '#/protection/cover', S.cover.length + ' policies', pCover(220)) + dpSec('The next twelve months', '#/protection/cover', '', pYear()) + income);
  }
  /* ── Succession · What do we pass on? ── */
  function sucHome() {
    var S = A.S, w = S.will;
    if (w.exists !== 'Yes') return dpPage('succession', '', w.exists === 'No' ? 'You recorded that there is no will.' : 'No will is recorded yet.', dpSec('The will', '#/succession/will', '', '<div><button class="key" type="button" data-act="edit-will">Record where the will is</button></div>'));
    var H = dpHead('succession'), yrs = w.reviewed ? Math.floor(A.days(w.reviewed, DEMO_TODAY) / 365.25) : null, mirror = /mirror/i.test(w.kind || '');
    var brief = (mirror ? 'The wills are' : 'The will is') + ' on file' + (yrs != null ? ', last read ' + scW(yrs) + (yrs === 1 ? ' year ago.' : ' years ago.') : '.');
    var will = dpSec('The will', '#/succession/will', '', '<p class="dp-fig">' + e(H.v) + '</p><p class="dp-sub">' + e(H.l) + '</p>' + pWill());
    var named = S.cover.filter(function (c) { return c.beneficiaries; });
    var names = named.length ? dpSec('What the names decide', '#/succession/beneficiaries', named.length + (named.length === 1 ? ' policy' : ' policies'),
      '<p class="dp-say">These pay the person named on them, outside the will.</p>' + dpRows(named.map(function (c) { return { c: 'var(--desk)', n: c.type + ' cover · ' + c.covers, s: 'Pays ' + c.beneficiaries + (c.nominated ? ' · named ' + c.nominated.slice(0, 4) : ''), v: c.sum ? A.short(c.sum) : '' }; }))) : '';
    var law = A.adviser(w.lawyer);
    var people = dpSec('The people and the papers', '#/succession/family', '', '<dl class="dp-dl">' + (w.executors ? '<div><dt>Executors</dt><dd>' + e(w.executors) + '</dd></div>' : '') +
      (w.original ? '<div><dt>Where the original is</dt><dd>' + e(w.original) + '</dd></div>' : '') + (law ? '<div><dt>Attorney</dt><dd>' + e(law.name + ', ' + law.firm) + '</dd></div>' : '') + '</dl>');
    return dpPage('succession', '', brief, will + names + people);
  }
  function deskRoot(k, fn, home) { return function (r) { return r && r.sub ? fn(r) : home(); }; }
  /* ══ THE CONCEPT · THE DESKS' PICTURES AND THE DESKS PAGE (14 Oct 2026) ═════════════════════════
     Prompts 6, 10 and 11: each desk answers its question in one picture, the same picture on the Desks page
     and in the desk's own sections. Records: what you own and owe (the picture above). Investment: what you
     hold as the treemap (THE TREEMAPS; still on the Desks page and in the tutorial), the greens liquid, the blues not. Governance: each class
     against its range — the tint the range, the line the target, the dot today in the class's colour, Bullion
     outside the range. Protection: what is insured, sized by cover, and the next twelve months on one line.
     Succession: the will on its line, from signing to the date to read it again. Small treemaps are laid out
     to their box by mtLayout(), the same squarify and the same "words fit or go" as the total-wealth picture. */
  function miniTree(blocks, h, label) {
    if (!blocks.length) return '';
    return '<span class="mt" data-mt="' + e(JSON.stringify(blocks)) + '" data-h="' + h + '" role="img" aria-label="' + e(label) + '"></span>';
  }
  function mtLayout(box) {
    var W = box.clientWidth; if (!W) return;
    var blocks = JSON.parse(box.getAttribute('data-mt') || '[]'), H = +box.getAttribute('data-h') || 200, g = WP_GAP;
    box.style.height = H + 'px';
    var rects = squarify(blocks.filter(function (b) { return b.v > 0; }).sort(function (a, b) { return b.v - a.v; }).map(function (b) { return { v: b.v, n: b }; }), -g / 2, -g / 2, W + g, H + g);
    box.innerHTML = rects.map(function (r) {
      var b = r.n.n, w = r.w - g, hh = r.h - g;
      return '<span class="wp-b" style="left:' + (r.x + g / 2).toFixed(1) + 'px;top:' + (r.y + g / 2).toFixed(1) + 'px;width:' + Math.max(0, w).toFixed(1) + 'px;height:' + Math.max(0, hh).toFixed(1) + 'px;background:' + b.bg + ';color:' + b.ink +
        (w < 2 * WP_PAD + 12 || hh < 2 * WP_PADY + 12 ? ';padding:0' : '') + '"><span class="wp-n">' + e(b.l) + '</span>' + (b.s ? '<span class="wp-s">' + e(b.s) + '</span>' : '') + '<span class="wp-v num">' + e(b.t || A.short(b.v)) + '</span></span>';
    }).join('');
    box.querySelectorAll('.wp-b').forEach(wpFit);
  }
  var LIQUID = ['equities', 'fixed', 'cash'];
  function invParts() {
    var S = A.S, liq = [], ill = [];
    S.assets.forEach(function (a) {
      if (!A.isInvestable(a)) return;
      tvParts(a).forEach(function (p) { if (!(p.v > 0)) return; (LIQUID.indexOf(p.c) > -1 ? liq : ill).push({ a: a, c: p.c, v: p.v }); });
    });
    return { liq: liq, ill: ill };
  }
  /* a desk's headline: the figure and one line */
  function dpHead(k) {
    var S = A.S, t = A.totals();
    if (k === 'records') return S.assets.length ? { v: A.money(t.net), l: 'Your total wealth' } : { v: '—', l: 'Add what you have, and what you owe.' };
    if (k === 'investment') {
      var P = invParts(), lv = P.liq.reduce(function (s, x) { return s + x.v; }, 0), iv = P.ill.reduce(function (s, x) { return s + x.v; }, 0), tot = lv + iv;
      return tot ? { v: A.money(tot), l: 'Invested · ' + Math.round(lv / tot * 100) + '% can be cash within days' } : { v: '—', l: 'What you hold appears here from Records.' };
    }
    if (k === 'policy') {
      var d = A.drift(), out = d.filter(function (x) { return x.out; }); if (!d.length) return { v: '—', l: 'Write your first rule.' };
      if (out.length) { var x = scDriftLead(out); return { v: e(x.label) + ' ' + Math.round(x.actual * 100) + '%', l: (x.out === 'above' ? 'Above your ' + x.max : 'Below your ' + x.min) + '% limit · nothing is traded', att: true }; }
      return { v: 'Inside every range', l: 'Each class sits where your rules say' };
    }
    if (k === 'protection') {
      if (!S.cover.length) return { v: '—', l: 'List the cover you have.' };
      var sum = S.cover.reduce(function (s, c) { return s + (c.sum || 0); }, 0), soon = ofDecisions()[0];
      return { v: A.money(sum), l: 'Covered' + (soon ? ' · ' + coverWord(soon).toLowerCase() + ' renews in ' + A.days(DEMO_TODAY, soon.renews) + ' days' : '') };
    }
    if (k === 'succession') {
      var w = S.will; if (w.exists !== 'Yes') return { v: '—', l: 'Record where the will is.' };
      var mirror = /mirror/i.test(w.kind || ''), dl = w.reviewBy ? A.days(DEMO_TODAY, w.reviewBy) : null;
      return { v: (mirror ? 'Wills' : 'A will') + (w.signed ? ' from ' + w.signed.slice(0, 4) : ' on file'), l: w.reviewBy ? 'Read ' + (mirror ? 'them' : 'it') + ' again by ' + OF_MD.format(new Date(w.reviewBy + 'T00:00:00')) + (dl > 0 ? ' · in ' + dl + ' days' : '') : 'Where the original is: ' + (w.original || 'not yet') };
    }
    return { v: '', l: '' };
  }
  /* Investment: what you hold is the treemap (THE TREEMAPS above), by category in the class colours. Under it, the key:
     the greens can be money within days, the blues take longer, each with what it holds. Shown by category only. */
  var LIQ_ORDER = ['cash', 'fixed', 'equities'];
  function invKey() {
    var P = invParts(), lv = 0, iv = 0, lc = {}, ic = {};
    P.liq.forEach(function (x) { lv += x.v; lc[x.c] = 1; }); P.ill.forEach(function (x) { iv += x.v; ic[x.c] = 1; });
    function sq(c) { var t = A.CLS_TOK[c]; return '<i style="background:var(' + (t ? '--c-' + t : '--other') + ')"></i>'; }
    function part(cs, word, v) { return '<span class="tv-key-i"><span class="tv-key-sq" aria-hidden="true">' + cs.map(sq).join('') + '</span>' + word + ' <b class="num">' + A.short(v) + '</b></span>'; }
    var lk = LIQ_ORDER.filter(function (c) { return lc[c]; }), ik = Object.keys(ic);
    if (!lv && !iv) return '';
    return '<p class="tv-key">' + (lv ? part(lk, 'Liquid, money within days', lv) : '') + (iv ? part(ik, 'Illiquid, takes longer', iv) : '') + '</p>';
  }
  /* Governance: each class against its range */
  function pGov() {
    var d = A.drift(); if (!d.length) return '';
    var top = Math.max.apply(null, d.map(function (x) { return Math.max(x.max, x.actual * 100); })), S = Math.ceil((top + 5) / 10) * 10;
    function at(v) { return (v / S * 100).toFixed(2) + '%'; }
    var rows = d.map(function (x) {
      var t = A.CLS_TOK[x.k], now = x.actual * 100;
      return '<li class="pg-row' + (x.out ? ' out' : '') + '"><span class="pg-n">' + e(x.label) + '</span><span class="pg-track" aria-hidden="true"><i class="pg-band" style="left:' + at(x.min) + ';width:' + at(x.max - x.min) + '"></i>' +
        '<i class="pg-tgt" style="left:' + at(x.target) + '"></i><i class="pg-dot" style="left:' + at(Math.min(S, now)) + ';--dot:var(--c-' + t + ')"></i></span>' +
        '<span class="pg-v num">' + Math.round(now) + '%</span><span class="sr">' + e(x.label) + ' at ' + Math.round(now) + '%, your range ' + x.min + ' to ' + x.max + '%, your target ' + x.target + '%' + (x.out ? ', outside your range' : '') + '</span></li>';
    }).join('');
    var step = S > 50 ? 20 : 10, ticks = ''; for (var v = 0; v <= S; v += step) ticks += '<span style="left:' + at(v) + '">' + v + '%</span>';
    return '<ul class="pg">' + rows + '<li class="pg-axis" aria-hidden="true"><span class="pg-n"></span><span class="pg-ticks">' + ticks + '</span><span class="pg-v"></span></li></ul>';
  }
  /* Protection: what is insured, sized by cover; the next twelve months on one line */
  function pCover(h) {
    var cs = A.S.cover.filter(function (c) { return c.sum > 0; }).sort(function (a, b) { return b.sum - a.sum; });
    return miniTree(cs.map(function (c, i) { var k = Math.min(i, 5); return { l: c.type === 'Homeowners' ? c.covers : c.type + ' · ' + c.covers.split(',')[0], s: c.insurer, v: c.sum, bg: 'var(' + TV_RAMP[k] + ')', ink: 'var(' + TV_INK[k] + ')' }; }), h || 200, 'What is insured, as blocks sized by cover');
  }
  function pYear() {
    var yr = A.S.cover.filter(function (c) { return c.renews && c.renews >= DEMO_TODAY && A.days(DEMO_TODAY, c.renews) <= 365; }).sort(function (a, b) { return a.renews < b.renews ? -1 : 1; });
    if (!yr.length) return '';
    var soon = yr[0] && A.days(DEMO_TODAY, yr[0].renews) <= 30 ? yr[0] : null, end = A.addDays(DEMO_TODAY, 365);
    function at(d) { return (A.days(DEMO_TODAY, d) / 365 * 100).toFixed(2) + '%'; }
    var dots = yr.map(function (c) { return '<i class="py-d' + (c === soon ? ' soon' : '') + '" style="left:' + at(c.renews) + '"></i>'; }).join('');
    return '<div class="py" role="img" aria-label="' + e(yr.length + (yr.length === 1 ? ' renewal' : ' renewals') + ' in the next twelve months' + (soon ? ', the first ' + OF_MD.format(new Date(soon.renews + 'T00:00:00')) : '')) + '">' +
      (soon ? '<p class="py-soon" style="left:' + at(soon.renews) + '">' + e(OF_MD.format(new Date(soon.renews + 'T00:00:00')) + ' · ' + soon.covers) + '</p>' : '') +
      '<span class="py-line"><i class="py-now"></i>' + dots + '</span><p class="py-ax"><span>Today</span><span>' + e(new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(new Date(end + 'T00:00:00'))) + '</span></p></div>';
  }
  /* Succession: the will on its line */
  function pWill() {
    var w = A.S.will; if (w.exists !== 'Yes' || !w.signed) return '';
    var ev = [{ d: w.signed, b: A.date(w.signed), s: 'Signed', k: 'past' }].concat(scWillEvents(w.signed, DEMO_TODAY).map(function (x) { return { d: x.d, b: x.y, s: x.t, k: 'past' }; }))
      .concat([{ d: DEMO_TODAY, b: 'Today', s: Math.floor(A.days(w.signed, DEMO_TODAY) / 365.25) + ' years on', k: 'now' }]);
    if (w.reviewBy && w.reviewBy > DEMO_TODAY) ev.push({ d: w.reviewBy, b: A.date(w.reviewBy), s: 'Read again, by your date', k: 'ahead' });
    return '<ol class="pw">' + ev.map(function (x) { return '<li class="' + x.k + '"><b>' + e(x.b) + '</b><small>' + e(x.s) + '</small></li>'; }).join('') + '</ol>';
  }
  function deskPicture(k) {
    if (k === 'records') return wpPicture({ key: false, link: false });
    if (k === 'investment') return plainMap('inv', 'What you hold, as blocks sized by value', { still: true });
    if (k === 'policy') return pGov();
    if (k === 'protection') return pCover(180) + pYear();
    if (k === 'succession') return pWill();
    return '';
  }
  /* THE DESKS PAGE (prompt 6): one card per desk in the order they open */
  function deskCard(k) {
    var D = A.DESKS[k];
    if (!A.deskOpen(k)) {
      var next = A.DESK_ORDER.filter(function (x) { return !A.deskOpen(x); })[0] === k;
      return '<section class="dkc locked"><div class="dkc-h">' + deskPlate(k) + '<h2>' + e(D.noun) + '</h2><span class="status-label neutral">' + (next ? 'Opens next' : 'Waiting') + '</span></div>' +
        '<p class="dkc-q">' + e(D.q) + '</p><div><button class="key key-s" type="button" data-act="desk-open" data-desk="' + k + '">Open now</button></div></section>';
    }
    var H = dpHead(k);
    return '<a class="dkc" href="#/' + k + '"><div class="dkc-h">' + deskPlate(k) + '<h2>' + e(D.noun) + '</h2>' + (A.deskDecision(k) ? '<i class="mb-dot" aria-label="Needs a decision"></i>' : '') + A.ic('chevron', 'of-chev') + '</div>' +
      '<p class="dkc-v' + (H.att ? ' att' : '') + '">' + H.v + '</p><p class="dkc-l">' + e(H.l) + '</p><div class="dkc-pic">' + deskPicture(k) + '</div></a>';
  }
  function desksPage() {
    var note = (function () { var o = A.drift().filter(function (x) { return x.out; })[0]; return o ? scCap(o.label) + (/^cash$/i.test(o.label) ? ' is' : ' are') + ' at ' + Math.round(o.actual * 100) + '%. Your limit is ' + (o.out === 'above' ? o.max : o.min) + '%. I’m watching it.' : 'Every desk is current. I’ll tell you when one needs you.'; })();
    return '<main class="screen desks-page"><div class="page-head"><div class="intro"><h1 class="title">Desks</h1><p class="lead dk-lead">Five desks, one office. Freya keeps each one current.</p></div></div>' +
      '<div class="dkc-grid">' + A.DESK_ORDER.map(deskCard).join('') + '</div>' +
      '<p class="of-note dk-note">' + A.fyMark('ready') + '<span>' + e(note) + '</span></p></main>';
  }
  /* ══ THE CONCEPT · LEARN OPENS ON WHERE YOU STAND (11 Oct 2026, prompts 12–15) ═══════════════════════
     Learn is one page: a short character sheet (the rank's ring around its number, the XP, three counters that
     open In progress and Certificates and badges), Your domains (a row for every domain, a mark for every path),
     then every domain's paths as tiles. The domains are content (LEARN.DOMAINS). A path plays as the Path: its
     film on top, its quests as round nodes on a line that winds down the page, the test with the certificate's
     seal at the end, then what it opens. A quest is one question, one picture and its answers; on a phone it
     fills the screen, on a desktop it rises over the path. A pass opens the ceremony once, on the dark ground.
     Learn's green for its rings, marks, nodes and keys; a desk's paths keep the desk's blue for their tiles and
     their page's top; Your Financial Identity is green. Bullion is for an earned certificate only. */
  var LX_OFF = [0, 46, 70, 46, 0, -46, -70, -46], LX_STEP = 94, LX_DIV = 76;
  function lxGlyph(name, cls) {
    var g = (LM.GLYPHS || {})[name] || (LM.GLYPHS || {}).leaf || '';
    return '<svg class="lx-g' + (cls ? ' ' + cls : '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + g + '</svg>';
  }
  function lxDoms() { return (LM.DOMAINS || []).slice().sort(function (a, b) { return a.order - b.order; }); }
  function lxDom(id) { return lxDoms().filter(function (d) { return d.id === id; })[0] || null; }
  function lxSeen() { var L = A.S.learn; if (!L.seen) L.seen = lxDoms().map(function (d) { return d.id; }); return L.seen; }
  function lxSee(id) { var s = lxSeen(); if (id && s.indexOf(id) < 0 && lxDom(id)) { s.push(id); A.save(); } }
  function lxMst(st) { return st === 'done' ? 'done' : st === 'progress' ? 'progress' : st === 'open' ? 'open' : 'next'; }
  function lxWord(st) { return { done: 'done', progress: 'under way', open: 'open', next: 'later' }[lxMst(st)]; }
  function lxPathPlate(id) { return (LM.PLATES || {})[id] || 'branch'; }
  function lxQPlate(id, n) { var q = (LM.QPLATES || {})[id] || []; return q[n - 1] || lxPathPlate(id); }
  /* a domain's items: its paths in the order they open, or the Financial Identity's stages and its side tree */
  function lxIdItems() {
    if (!LI) return [];
    var I = A.idS(), cum = 0, out = [], P = LM.IDPLATES || { plates: [] };
    LI.STAGES.forEach(function (stg, si) {
      var n = LI.SQ[si], a = Math.max(0, Math.min(n, I.main - cum)), open = I.main >= cum; cum += n;
      out.push({ id: 'id-' + stg.n, title: stg.name, plate: P.plates[si] || 'crest', st: a >= n ? 'done' : a ? 'progress' : open ? 'open' : 'next', frac: a / n, cert: false, href: '#/learn/identity' });
    });
    if (A.S.members.length > 1) {
      var s = I.side, so = idSideOpen(I);
      out.push({ id: 'id-side', title: 'Two of you', plate: P.side || 'two-of-you', st: s >= 6 ? 'done' : s ? 'progress' : so ? 'open' : 'next', frac: s / 6, cert: false, href: so ? '#/learn/identity/side/' + Math.min(6, s + 1) : '#/learn/identity' });
    }
    return out;
  }
  function lxItems(d) {
    if (d.id === 'identity') return lxIdItems();
    return lpaths().filter(function (p) { return p.desk === d.id; }).map(function (p) {
      return { id: p.id, title: p.title, plate: lxPathPlate(p.id), st: p.state, frac: p.quests ? p.done / p.quests : 0, cert: p.cert, href: '#/learn/path/' + p.id };
    });
  }
  function lxWaiting(d) { return d.shows === 'desk' && A.DESKS[d.id] && !A.deskOpen(d.id); }
  function lxTag(d) { return lxWaiting(d) ? '<span class="status-label neutral lx-wait">Waiting</span>' : lxSeen().indexOf(d.id) < 0 ? '<span class="status-label ok lx-new">New</span>' : ''; }
  function lxDisc(d, cls) { return '<span class="lx-disc' + (cls ? ' ' + cls : '') + '" data-dc="' + d.colour + '" aria-hidden="true">' + A.sectionIcon(d.plate) + '</span>'; }
  function lxCount(items) { return items.filter(function (x) { return x.st === 'done'; }).length + ' of ' + items.length; }
  /* the rank's ring around its number, filling towards the next rank */
  function lxRing(xp, num, cls) {
    var R = A.ring(xp), r = 10.5, C = 2 * Math.PI * r, f = R.hi ? Math.max(0.02, R.frac) : 1;
    return '<span class="lx-ring' + (cls ? ' ' + cls : '') + '" role="img" aria-label="' + e('Rank ' + R.r + ' of 12' + (R.hi ? ', ' + Math.round(R.frac * 100) + '% of the way to rank ' + (R.r + 1) : '')) + '">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true"><circle class="t" cx="12" cy="12" r="' + r + '"/><circle class="a" cx="12" cy="12" r="' + r + '" transform="rotate(-90 12 12)" stroke-dasharray="' + (C * f).toFixed(2) + ' ' + C.toFixed(2) + '" data-c="' + C.toFixed(2) + '"/>' +
      (num ? '' : '<circle class="p" cx="12" cy="12" r="2.2"/>') + '</svg>' + (num ? '<b aria-hidden="true">' + R.r + '</b>' : '') + '</span>';
  }
  /* 1 · THE CHARACTER SHEET */
  function lxSheet() {
    var xp = A.learnXP(), R = A.ring(xp), ps = lpaths().filter(function (p) { return p.desk !== 'trunk'; });
    var badges = lpaths().filter(function (p) { return p.state === 'done' && !p.cert; }).length, certs = ps.filter(function (p) { return p.cert && p.state === 'done'; }).length;
    var certAll = ps.filter(function (p) { return p.cert; }).length, I = LI ? A.idS() : null;
    var under = ps.filter(function (p) { return p.state === 'progress'; }).length + (I && I.main > 0 && I.main < LI.QUESTS.length ? 1 : 0);
    var to = R.hi ? fmt(R.toNext) + ' to Rank ' + (R.r + 1) : 'Every rank reached';
    function ct(href, mark, n, label) { return '<a class="lx-ct" href="' + href + '">' + mark + '<b class="num">' + n + '</b><span>' + label + '</span></a>'; }
    return '<section class="lx-sheet" aria-label="Where you stand"><div class="lx-sh-top">' + lxRing(xp, true, 'is-l') +
      '<div class="lx-rank">' + (R.name ? '<span class="eyebrow">' + e(R.name) + '</span>' : '') + '<span class="lx-rank-n">Rank ' + R.r + ' of 12</span></div>' +
      '<div class="lx-xp"><b class="num">' + fmt(xp) + ' XP</b><span>' + to + '</span></div></div>' +
      '<div class="lx-bar" aria-hidden="true"><i style="width:' + Math.round((R.hi ? R.frac : 1) * 100) + '%"></i></div>' +
      '<div class="lx-cts">' + ct('#/learn/earned', mk('done'), badges, 'Badges') + ct('#/learn/earned', mk(certs ? 'done' : 'open', true), certs + ' <small>of ' + certAll + '</small>', 'Certificates') +
      ct('#/learn/progress', mk('progress', false, 0.45), under, 'Under way') + '</div></section>';
  }
  /* 2 · YOUR DOMAINS: a row for each, a mark for every path */
  function lxKey() {
    return '<ul class="lx-key" aria-label="What the marks mean"><li>' + mk('done') + 'Done</li><li>' + mk('progress', false, 0.45) + 'Under way</li><li>' + mk('open') + 'Open</li><li>' + mk('next') + 'Later</li><li>' + mk('open', true) + 'Certificate</li></ul>';
  }
  function lxRows() {
    return '<div class="lx-rows">' + lxDoms().map(function (d) {
      var it = lxItems(d);
      return '<a class="lx-row" href="#/learn/map/' + d.id + '">' + lxDisc(d) + '<span class="lx-row-n">' + e(d.name) + '</span>' + lxTag(d) + '<span class="lx-row-c num">' + lxCount(it) + '</span>' +
        '<span class="lx-row-m" aria-label="' + e(it.map(function (x) { return x.title + ', ' + lxWord(x.st); }).join('; ')) + '">' + it.map(function (x) { return mk(lxMst(x.st), x.cert, x.frac); }).join('') + '</span></a>';
    }).join('') + '</div>';
  }
  /* a path's tile: its plate, its title and its state mark in the corner. Done is filled in the domain's colour;
     under way and open have an edge; later is faint. `poster` fills an opened path, at the end of a path */
  function lxTile(x, d, poster) {
    var m = lxMst(x.st), cls = poster ? 'is-poster' : 'is-' + m;
    return '<a class="lx-tile ' + cls + '" data-dc="' + (d ? d.colour : 'desk') + '" href="' + x.href + '"' + (m === 'progress' ? ' style="--f:' + Math.round(Math.max(0.08, x.frac) * 100) + '%"' : '') +
      ' aria-label="' + e(x.title + ', ' + lxWord(x.st) + (x.cert ? ', ends in a certificate' : '')) + '"><span class="lx-tile-d">' + lxGlyph(x.plate) + '</span>' +
      '<span class="lx-tile-m">' + mk(poster ? (x.cert ? 'open' : m) : m, x.cert, x.frac) + '</span><span class="lx-tile-t">' + e(x.title) + '</span></a>';
  }
  /* 3 · each domain in turn */
  function lxSection(d) {
    var it = lxItems(d);
    return '<section class="lx-dom" data-dom="' + d.id + '" aria-labelledby="lx-h-' + d.id + '"><div class="lx-dom-h"><h2 id="lx-h-' + d.id + '">' + lxDisc(d, 'is-s') + e(d.name) + '</h2>' +
      lxTag(d) + '<span class="lx-dom-c num">' + lxCount(it) + '</span></div><div class="lx-tiles">' + it.map(function (x) { return lxTile(x, d); }).join('') + '</div></section>';
  }
  function lxHome(at) {
    var html = '<main class="screen lm-screen lx-screen">' + placeHead('Learn');
    html += '<div class="lx-top">' + lxSheet() + '<section class="lx-doms" aria-labelledby="lx-doms-h"><div class="lx-doms-h"><h2 id="lx-doms-h">Your domains</h2><span class="num">' + lxDoms().length + '</span></div>' +
      '<div class="lx-rows-c">' + lxRows() + '</div>' + lxKey() + '</section></div>';
    html += lxDoms().map(lxSection).join('');
    html += '<div class="lx-how">' + lvFor('learn', 'mini', 'New to Learn?') + '</div>';
    if (at) lxSee(at);
    return html + '</main>';
  }

  /* ── A PATH PLAYS AS THE PATH (prompt 13) ───────────────────────────────────────────────────── */
  function lxDomOf(p) { return lxDom(p.desk) || { id: p.desk, name: deskName(p.desk), colour: 'desk', plate: 'pr-together' }; }
  function lxVideo(id) { var ids = Object.keys(LV).filter(function (k) { return (LV[k].at || []).indexOf(id) > -1; }); return ids[0] || ''; }
  /* the nodes, in their parts, then the test (or the badge) at the end */
  function lxNodes(p) {
    var Q = LM.PATHS[p.id].quests, live = p.state === 'open' || p.state === 'progress' || p.state === 'done', list = [], prevS = -1;
    Q.forEach(function (q, i) {
      var n = i + 1, s = q.s || 0;
      if (s !== prevS && i > 0) list.push({ div: (LM.PARTS || STAGES)[s] || STAGES[s], first: lxQPlate(p.id, n) });
      prevS = s;
      var dn = p.answered.indexOf(n) > -1, st = !live ? 'later' : dn ? 'done' : n === p.nextQ && p.state !== 'done' && !p.testReady ? 'next' : 'open';
      list.push({ n: n, st: st, glyph: lxQPlate(p.id, n), title: q.t });
    });
    var endSt = p.state === 'done' ? 'earned' : p.testReady ? 'next' : live ? 'open' : 'later';
    list.push({ end: true, st: endSt, cert: p.cert, title: p.cert ? 'The test' : 'A badge' });
    return list;
  }
  function lxPathHTML(p) {
    var items = lxNodes(p), y = 0, k = 0, pts = [], html = '', walked = -1;
    items.forEach(function (it) {
      if (it.div) {
        y += LX_DIV * 0.5;
        var side = LX_OFF[k % 8] > 0 ? 'l' : 'r';
        html += '<li class="lx-part" style="top:' + y + 'px" aria-hidden="false"><span>' + e(it.div) + '</span></li>' +
          '<li class="lx-deco is-' + side + '" style="top:' + (y + LX_DIV * 0.5 + 6) + 'px" aria-hidden="true">' + lxGlyph(it.first) + '</li>';
        y += LX_DIV * 0.5; return;
      }
      var off = LX_OFF[k % 8], big = !!it.end; k++;
      pts.push({ x: off, y: y + 32 + (big ? 6 : 0), st: it.st });
      if (it.st === 'done' || (it.end && it.st === 'earned')) walked = pts.length - 1;
      var key = it.end ? 'end' : String(it.n), cls = 'lx-node is-' + it.st + (it.end ? ' is-end' + (it.cert ? ' is-cert' : ' is-badge') : '');
      var lab = it.end ? (it.cert ? 'The test, ' + (it.st === 'earned' ? 'passed' : it.st === 'next' ? 'ready to take' : it.st === 'later' ? 'later' : 'after the last quest') : 'The badge at the end') : 'Quest ' + it.n + ': ' + it.title + ', ' + { done: 'answered', next: 'next', open: 'open', later: 'later' }[it.st];
      var face = it.end ? (it.cert ? mk(it.st === 'earned' ? 'done' : it.st === 'later' ? 'next' : 'open', true, 0, 'lx-seal') : lxGlyph('badge')) : lxGlyph(it.glyph);
      html += '<li class="lx-step" style="top:' + y + 'px;--x:' + off + 'px"><button type="button" class="' + cls + '" data-act="lx-node" data-pid="' + p.id + '" data-k="' + key + '" aria-expanded="false" aria-label="' + e(lab) + '">' + face + '</button>' +
        (it.st === 'next' ? '<span class="lx-here is-' + (off > 0 ? 'l' : 'r') + '">' + A.fyMark('ready') + 'Start here</span>' : '') + '</li>';
      y += LX_STEP + (big ? 12 : 0);
    });
    var H = y - LX_STEP + 64 + 24, d = '', d2 = '';
    for (var i = 1; i < pts.length; i++) {
      var a = pts[i - 1], b = pts[i], my = (a.y + b.y) / 2, seg = 'M' + (100 + a.x) + ' ' + a.y + 'C' + (100 + a.x) + ' ' + my + ' ' + (100 + b.x) + ' ' + my + ' ' + (100 + b.x) + ' ' + b.y;
      if (i <= walked) d2 += seg; else d += seg;
    }
    return '<div class="lx-way" style="height:' + H + 'px"><svg class="lx-line" viewBox="0 0 200 ' + H + '" width="200" height="' + H + '" aria-hidden="true">' + (d ? '<path class="ahead" d="' + d + '"/>' : '') + (d2 ? '<path class="walked" d="' + d2 + '"/>' : '') + '</svg>' +
      '<ol class="lx-steps" aria-label="The quests">' + html + '</ol></div>';
  }
  /* what the path opens: the paths it opens, as tiles; a path that opens nothing shows what is next in its domain */
  function lxOpens(p, d) {
    var kids = lpaths().filter(function (x) { return x.parent === p.id; });
    var title = 'Opens next', list = kids;
    if (!kids.length) { list = lpaths().filter(function (x) { return x.desk === p.desk && x.id !== p.id && x.state !== 'done'; }).slice(0, 4); title = 'Next in ' + d.name; }
    if (!list.length) return '';
    var poster = p.state === 'done' && !!kids.length;
    return '<section class="lx-next" aria-labelledby="lx-next-h"><div class="lx-next-h"><h2 id="lx-next-h">' + e(title) + '</h2>' + (kids.length ? '' : '<a class="link" href="#/learn/map/' + d.id + '">See all</a>') + '</div>' +
      '<div class="lx-rail">' + list.map(function (x) { return lxTile({ id: x.id, title: x.title, plate: lxPathPlate(x.id), st: x.state, frac: x.quests ? x.done / x.quests : 0, cert: x.cert, href: '#/learn/path/' + x.id }, d, poster); }).join('') + '</div></section>';
  }
  function lxPath(id) {
    var p = lp(id); if (!p || p.desk === 'trunk' && p.state === 'hidden') return lxHome();
    var d = lxDomOf(p), v = lxVideo(id), cert = p.cert, done = p.state === 'done';
    lxSee(d.id);
    var later = p.state === 'next' || p.state === 'hidden', par = p.parent ? lp(p.parent) : null;
    var note = later ? (p.lock || !A.deskOpen(p.desk) ? 'Opens with the ' + deskName(p.desk) + ' desk.' : par ? 'Opens after ' + par.title + '.' : '') : '';
    var eb = d.name + (cert ? ' · Certificate' : '');
    var play = v ? '<button type="button" class="key key-l key-white lx-play is-ph" data-act="lx-film" data-v="' + v + '">' + lxPlayIc() + 'Play the film</button>' : '';
    var playD = v ? '<button type="button" class="key key-l lx-play is-dt" data-act="lx-film" data-v="' + v + '">' + lxPlayIc() + 'Play the film</button>' : '';
    var seal = cert ? '<span class="lx-hero-seal" aria-label="' + (done ? 'Certificate earned' : 'Ends in a certificate') + '">' + mk(done ? 'done' : 'open', true) + '</span>' : '';
    var won = done ? '<p class="lx-won"><span class="status-label ok">' + A.ic('check') + (cert ? 'Certificate · +200 XP' : 'Badge · ' + p.quests + ' quests') + '</span></p>' : '';
    var html = '<main class="screen lm-screen lx-screen lx-pathpage" data-dc="' + d.colour + '">' +
      '<nav class="lx-crumb" aria-label="Where you are"><a href="#/learn">Learn</a><span aria-hidden="true">›</span><a href="#/learn/map/' + d.id + '">' + e(d.name) + '</a></nav>' +
      '<div class="lx-pgrid"><div class="lx-hcol"><section class="lx-hero" data-dc="' + d.colour + '"><a class="lx-back" href="#/learn/map/' + d.id + '" aria-label="Back to Learn">' + A.ic('chevron') + '</a>' + seal +
      '<span class="lx-hero-d" aria-hidden="true">' + lxGlyph(lxPathPlate(id)) + '</span><div class="lx-hero-t"><span class="eyebrow">' + e(eb) + '</span><h1 class="title">' + e(p.title) + '</h1>' + play + '</div></section>' + playD +
      (note ? '<p class="lx-note">' + e(note) + '</p>' : '') + '</div>' +
      '<section class="lx-pcol" aria-label="The path">' + lxPathHTML(p) + won + '</section>' +
      '<aside class="lx-ncol">' + lxOpens(p, d) + '</aside></div></main>';
    return html;
  }
  function lxPlayIc() { return '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M8 5.6v12.8a.8.8 0 0 0 1.22.68l10.1-6.4a.8.8 0 0 0 0-1.36L9.22 4.92A.8.8 0 0 0 8 5.6Z"/></svg>'; }
  /* a node's card: the quest's title and one key */
  function lxNodeCard(pid, k) {
    var p = lp(pid); if (!p) return '';
    var live = p.state === 'open' || p.state === 'progress' || p.state === 'done';
    if (k === 'end') {
      if (!p.cert) return '<span class="lx-pop-t">' + (p.state === 'done' ? 'Badge earned ' + A.date(p.earned) : 'A badge, once every quest is answered') + '</span>';
      if (p.state === 'done') return '<span class="lx-pop-t">Certificate earned ' + A.date(p.earned) + '</span><a class="key key-l key-white" href="#/learn/path/' + pid + '/test">Take the test again</a>';
      if (p.testReady) return '<span class="lx-pop-t">The test · 8 questions, 6 to pass</span><a class="key key-l key-white" href="#/learn/path/' + pid + '/test">Take the test · +200 XP</a>';
      return '<span class="lx-pop-t">The test opens once every quest is answered</span><span class="lx-pop-l">8 questions from a pool of 14. 6 to pass, and retakes are free.</span>';
    }
    var n = +k, q = LM.PATHS[pid].quests[n - 1]; if (!q) return '';
    if (!live) return '<span class="lx-pop-t">' + e(q.t) + '</span><span class="lx-pop-l">Later: the path opens ' + (p.lock ? 'with its desk' : 'after the one before it') + '.</span>';
    var dn = p.answered.indexOf(n) > -1;
    return '<span class="lx-pop-t">' + e(q.t) + '</span><a class="key key-l key-white" href="#/learn/path/' + pid + '/quest/' + n + '">' + (dn ? 'Play it again' : 'Start · +40 XP') + '</a>';
  }
  /* the film, over the page (full screen on a phone); never forced, and watching earns no XP */
  function lxFilm(v) {
    var x = LV[v]; if (!x) return '';
    return '<div class="lx-film" role="dialog" aria-modal="true" aria-label="' + e('Film: ' + x.t) + '"><section class="lx-film-c"><div class="lx-film-top"><span class="eyebrow">The film · ' + lvLen(x.sec) + '</span>' +
      '<button type="button" class="icon-key" data-act="lx-film-close" aria-label="Close the film">' + A.ic('close') + '</button></div><h2 class="lx-film-t">' + e(x.t) + '</h2>' +
      '<div class="lv lv-full" data-lv="' + v + '"><div class="lv-frame"' + (lvFiles(v) ? ' data-fmt="' + lvFiles(v).fmt + '"' : '') + '>' + lvFrame(v) + '</div><p class="lv-desc">' + e(x.short) + '</p>' +
      '<details class="lv-read"><summary>Read it instead</summary><div class="lv-text">' + (x.text || []).map(function (t) { return '<p>' + e(t) + '</p>'; }).join('') + '</div></details></div></section></div>';
  }

  /* ── A QUEST, THE TEST AND THE CEREMONY (prompt 14) ─────────────────────────────────────────── */
  function lxQTop(p, frac, xp, close, label) {
    return '<div class="qz-top"><a class="icon-key qz-x" href="' + close + '" aria-label="' + e(label) + '">' + A.ic('close') + '</a>' +
      '<span class="qz-bar" role="progressbar" aria-label="Along the path" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(frac * 100) + '"><i style="width:' + Math.max(4, Math.round(frac * 100)) + '%"></i></span>' +
      '<span class="qz-xp num" data-lm-xp>' + fmt(xp) + ' XP</span><span class="qz-rk" data-qz-rk>' + lxRing(xp, false, 'is-s') + '</span></div>';
  }
  function lxPic(glyph, cap) { return '<figure class="qz-pic">' + lxGlyph(glyph) + '<figcaption>' + e(cap) + '</figcaption></figure>'; }
  function lxQuest(pid, n) {
    var p = lp(pid), q = p && A.learnQ(pid, n);
    if (!p || !q || p.state === 'next' || p.state === 'hidden') return lxPath(pid);
    var order = VIEWS._order(pid, n, q.o.length), from = VIEWS.LT_FROM, xp = A.learnXP(), dn = p.answered.indexOf(n) > -1;
    var sim = q.sim && A.sim ? (q.sim === 'wait' ? simWaitBlock() : q.sim === 'plan' ? simPlanBlock() : q.sim === 'cash' ? simCashBlock() : '') : '';
    var close = from ? from.href : '#/learn/path/' + pid;
    return lxPath(pid) + '<div class="qz-veil" data-qz><section class="qz quest" role="dialog" aria-modal="true" tabindex="-1" aria-labelledby="quest-q" data-quest="' + pid + '.' + n + '" data-dc="' + lxDomOf(p).colour + '">' +
      '<div class="qz-in">' + lxQTop(p, p.done / p.quests, xp, close, from ? 'Back to ' + from.label : 'Leave the quest') +
      '<span class="eyebrow qz-eb">' + (dn ? 'Quest ' + n + ' of ' + p.quests + ' · answered before' : 'New quest') + '</span>' +
      '<h1 class="quest-q" id="quest-q">' + plainQ(q.q, pid + '.' + n) + '</h1>' + lxPic(lxQPlate(pid, n), q.t) + lvFor(pid + '.' + n, 'mini') +
      '<div class="answers qz-ans" role="group" aria-labelledby="quest-q">' +
      order.map(function (oi) { return '<button class="answer" type="button" data-act="qz-pick" data-i="' + oi + '"><span>' + e(q.o[oi]) + '</span></button>'; }).join('') + '</div>' + sim + '</div>' +
      '<div class="qz-foot" data-feedback aria-live="polite" hidden></div></section></div>';
  }
  /* the panel at the foot, after an answer: right or not in one line, the XP, and one key */
  function lxSent(s) { var m = /^(.+?[.!?])(\s|$)/.exec(s || ''); return m ? [m[1], s.slice(m[1].length).trim()] : [s || '', '']; }
  function lxAfter(pid, n, res) {
    var p = lp(pid), q = A.learnQ(pid, n), from = VIEWS.LT_FROM, at = (q.tags || []).map(function (t) { return LT_AT[t]; }).filter(function (x) { return x && !COMING[x[0].slice(2)]; })[0];
    var next = p.nextQ && p.state !== 'done' ? '#/learn/path/' + pid + '/quest/' + p.nextQ : '', href, label = 'Continue';
    if (res.finished || (p.state === 'done' && !next)) { href = '#/learn/path/' + pid + '/done'; label = p.cert ? 'See the certificate' : 'See the badge'; }
    else if (p.testReady) { href = '#/learn/path/' + pid; label = 'The test is next'; }
    else if (next) href = next;
    else href = '#/learn/path/' + pid;
    var key = '<a class="key key-l qz-go" href="' + href + '">' + e(label) + '</a>';
    var tq = A.TUT && window.FT && window.FT.afterKey ? window.FT.afterKey(pid, n) : null;
    if (tq) key = '<button class="key key-l qz-go" type="button" data-act="tq-next">' + e(tq.label) + '</button>';
    var w = lxSent(q.why), back = from ? '<a class="link" href="' + from.href + '">Back to ' + e(from.label) + '</a>' : at ? '<a class="link lm-at" href="' + at[0] + '">See it in your office · ' + e(at[1]) + '</a>' : '';
    return '<div class="qz-fb is-ok"><span class="qz-fb-i" aria-hidden="true">' + A.ic('check') + '</span><div class="qz-fb-t"><b>' + (res.second ? 'That is it.' : 'Right.') + ' ' + e(w[0]) + '</b>' + (w[1] ? '<span>' + e(w[1]) + '</span>' : '') + '</div>' +
      '<span class="qz-fb-xp num">' + (res.first ? '+40 XP' : 'Answered before') + '</span></div>' + key + (back ? '<p class="qz-fb-l">' + back + '</p>' : '');
  }
  function lxTry(q) {
    return '<div class="qz-fb is-try"><span class="qz-fb-i" aria-hidden="true">' + A.ic('info') + '</span><div class="qz-fb-t"><b>Not quite. ' + e(q.hint) + '</b><span>Choose again: it costs nothing, and a second try earns the same.</span></div></div>' +
      '<button class="key key-l key-secondary qz-go" type="button" data-act="qz-again">Try again</button>';
  }
  /* the test, in the same frame: 8 drawn from the pool, no hints, nothing marked until the end */
  function lxTest(id) {
    var p = lp(id); if (!p || !p.cert || !LM.POOLS[id]) return lxPath(id);
    if (!p.testReady && p.state !== 'done') return lxPath(id);
    var T = VIEWS.TEST && VIEWS.TEST.id === id ? VIEWS.TEST : testNew(id), xp = A.learnXP();
    var shell = function (inner, foot) {
      return lxPath(id) + '<div class="qz-veil" data-qz><section class="qz quest lm-test" role="dialog" aria-modal="true" tabindex="-1" aria-labelledby="test-q" data-test="' + id + '" data-dc="' + lxDomOf(p).colour + '"><div class="qz-in">' + inner + '</div>' + (foot || '') + '</section></div>';
    };
    if (T.done) {
      return shell('<div class="qz-top"><a class="icon-key qz-x" href="#/learn/path/' + id + '" aria-label="Back to the path">' + A.ic('close') + '</a></div><span class="eyebrow qz-eb">The test · ' + e(p.title) + '</span><h1 class="quest-q" id="test-q">Not this time</h1>' +
        '<p class="qz-lead">' + testWhy(p, T) + '</p><p class="qz-lead">Nothing is lost. Every quest and its XP stay yours. Take it again whenever you like: it is free, and it draws eight new questions from the pool.</p>',
        '<div class="qz-foot"><button class="key key-l qz-go" type="button" data-act="test-again" data-id="' + id + '">Take the test again</button><p class="qz-fb-l"><a class="link" href="#/learn/path/' + id + '">Look at the path again</a></p></div>');
    }
    var q = LM.POOLS[id][T.draw[T.i]], last = T.i === T.draw.length - 1;
    return shell('<div class="qz-top"><a class="icon-key qz-x" href="#/learn/path/' + id + '" data-act="test-leave" aria-label="Leave the test">' + A.ic('close') + '</a>' +
      '<span class="qz-bar is-test" aria-hidden="true">' + T.draw.map(function (_, k) { return '<i class="' + (k < T.i ? 'done' : k === T.i ? 'now' : '') + '"></i>'; }).join('') + '</span><span class="qz-xp num">' + (T.i + 1) + ' of 8</span></div>' +
      '<span class="eyebrow qz-eb">The test · ' + e(p.title) + '</span><h1 class="quest-q" id="test-q">' + e(q.q) + '</h1>' + (T.i === 0 ? '<p class="qz-lead">8 questions from a pool of 14. 6 to pass, no hints, and retakes are free.</p>' + lvFor('test', 'mini', 'Before the test') : '') +
      '<div class="answers qz-ans" role="group" aria-labelledby="test-q">' + T.orders[T.i].map(function (oi) {
        return '<button class="answer" type="button" data-act="test-pick" data-i="' + oi + '" aria-pressed="' + (T.pick === oi) + '"><span>' + e(q.o[oi]) + '</span></button>';
      }).join('') + '</div>',
      '<div class="qz-foot is-plain"><button class="key key-l qz-go" type="button" data-act="test-next"' + (T.pick == null ? ' disabled' : '') + '>' + (last ? 'See the result' : 'Next question') + '</button></div>');
  }
  function testWhy(p, T) {
    var missed = [];
    T.picks.forEach(function (x, k) { if (x !== 0) { var s = LM.POOLS[p.id][T.draw[k]].s; if (missed.indexOf(s) < 0) missed.push(s); } });
    missed.sort();
    var names = missed.map(function (s) { return (LM.PARTS || STAGES)[s]; });
    return '<b>' + T.right + ' of 8.</b> 6 are needed. The questions to look at again were in ' + e(names.length > 1 ? names.slice(0, -1).join(', ') + ' and ' + names[names.length - 1] : names[0] || '') + '.';
  }
  /* the ceremony, once: the dark ground, the seal (Bullion for a certificate), a square for every quest and the test */
  function lxCere(id) {
    var p = lp(id); if (!p) return lxHome();
    if (p.state !== 'done') return p.testReady ? lxTest(id) : lxPath(id);
    var L = A.S.learn; L.cere = L.cere || {};
    if (L.cere[id] && VIEWS.CERE_NOW !== id) return lxPath(id);
    if (!L.cere[id]) { L.cere[id] = DEMO_TODAY; A.save(); }
    VIEWS.CERE_NOW = id;   /* shown once: it stays while the household is on it, and is the path's page after */
    var xp = A.learnXP(), R = A.ring(xp), rb = A.ring(xp - (p.cert ? 200 : 40)), up = R.r > rb.r;
    var sq = ''; for (var i = 0; i < p.quests; i++) sq += '<i></i>'; sq += p.cert ? '<i class="is-test"></i>' : '';
    return lxPath(id) + '<div class="qz-veil is-cere" data-qz><section class="lx-cere' + (p.cert ? ' is-cert' : '') + '" role="dialog" aria-modal="true" tabindex="-1" aria-labelledby="lx-cere-t">' +
      '<div class="lx-cere-in"><span class="lx-cere-seal">' + mk('done', p.cert, 1, 'is-huge' + (p.cert ? ' is-seal' : ' is-draw')) + '</span>' +
      '<span class="eyebrow">' + (p.cert ? 'Certificate' : 'Badge') + '</span><h2 id="lx-cere-t">' + e(p.title) + '</h2>' +
      '<div class="lx-cere-sq" aria-hidden="true">' + sq + '</div>' +
      '<p>' + p.quests + ' quests' + (p.cert ? ' and the test. +200 XP' : '. A badge') + '</p>' + (up ? '<p class="lx-cere-up">' + (R.name ? e(R.name) + ' · ' : '') + 'Rank ' + R.r + ' of 12</p>' : '') + '</div>' +
      '<a class="key key-l key-white lx-cere-k" href="#/learn/path/' + id + '">See the course</a></section></div>';
  }
  function lxPage(title, inner) { return inner.replace('<main class="screen lm-screen">', '<main class="screen lm-screen"><nav class="lx-crumb" aria-label="Where you are"><a href="#/learn">Learn</a><span aria-hidden="true">›</span><span aria-current="page">' + e(title) + '</span></nav>'); }
  var SIM_MOUNT = { runway: rwMount, mix: mxMount, plan: plMount, cash: crMount, wait: cwMount }, SIM_UPD = { runway: rwUpdate, mix: mxUpdate, plan: plUpdate, cash: crUpdate, wait: cwUpdate };
  function simMount(box) { var k = box.getAttribute('data-sim'); if (SIM_MOUNT[k] && A.sim) SIM_MOUNT[k](box); }
  function simDraw(box) { var k = box.getAttribute('data-sim'); if (SIM_UPD[k] && A.sim) { SIM_UPD[k](box); sThumbs(box); } }

  return { simMount: simMount, simDraw: simDraw, simAsk: simAsk, simContext: simContext, simMethodSheet: simMethodSheet,
    drawScene: drawScene, playScenes: playScenes, layoutTree: layoutTree, uploadKey: uploadKey, viewPrefs: viewPrefs, catalogue: function (s) { return CATALOGUE[s] || []; }, home: office, wpLayout: wpLayout, mtLayout: mtLayout, wpPicture: wpPicture, deskPicture: deskPicture, records: deskRoot('records', records, recHome), policy: deskRoot('policy', policy, polHome), investment: deskRoot('investment', investment, invHome), protection: deskRoot('protection', protection, proHome), succession: deskRoot('succession', succession, sucHome),
    learn: learn, freya: freya, vault: vault, profile: profile, KINDS: KINDS, _shuffle: null,
    fgRings: fgRings, fgPlay: fgPlay, fgStrip: fgStrip, deskPeek: deskPeek, desks: desksPage,
    lt: lt, ltReset: ltReset, ltPage: ltPage, lvFor: lvFor, IDQ: null, IDCU: null, lmRingVeil: lmRingVeil, lxNodeCard: lxNodeCard, lxFilm: lxFilm, lxAfter: lxAfter, lxTry: lxTry, lxRing: lxRing, CERE_NOW: null, LT_FROM: null, TEST: null, holderOptions: holderOptions, GLOSS: GLOSS, glI: glI, COMING: COMING, tvLayout: tvLayout, tvGo: tvGo, tvState: tvState, tvPlain: tvPlain,
    TV_RAMP: TV_RAMP, TV_INK: TV_INK, TV_OWE: TV_OWE, GX: GX, goalDetail: goalDetail };
})(APP);
VIEWS._shuffle = function (seed, n) {
  /* the canon stores the correct answer first and shuffles at render; seeded so a
     re-render does not move the options under the pointer. (4 Oct 2026: the old generator took
     its low bits, which repeat, and put every right answer at D; this one hashes the seed, FNV-1a,
     and draws from mulberry32.) */
  var h = 2166136261; for (var i = 0; i < seed.length; i++) { h ^= seed.charCodeAt(i); h = Math.imul(h, 16777619); }
  function rnd() { h = (h + 0x6D2B79F5) | 0; var t = Math.imul(h ^ (h >>> 15), 1 | h); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }
  var a = []; for (var j = 0; j < n; j++) a.push(j);
  for (var k = n - 1; k > 0; k--) { var r = Math.floor(rnd() * (k + 1)); var t2 = a[k]; a[k] = a[r]; a[r] = t2; }
  return a;
};
/* WHERE THE RIGHT ANSWER SITS (Christian, 4 Oct 2026: "make sure that there is no pattern in which
   of the right answers a located"). In every run of four quests of a path, the right answer takes
   each place, A to D, once, in a seeded order. Of the 24 orders, the first in a seeded list that keeps
   three things is taken: never the same place twice in a row, never four in a line (A B C D or
   D C B A, also across two runs), and never the run before repeated. The wrong answers fill the
   other places, seeded too. key names the path (or the Identity tree), n the quest. */
VIEWS._PERMS = (function () { var out = []; (function walk(p, left) { if (!left.length) { out.push(p); return; } left.forEach(function (x, i) { walk(p.concat(x), left.slice(0, i).concat(left.slice(i + 1))); }); })([], [0, 1, 2, 3]); return out; })();
VIEWS._order = function (key, n, len) {
  var seq = [];
  function fits(p) {
    var prev = seq.slice(-4), all = seq.slice(-3).concat(p);
    if (seq.length && p[0] === seq[seq.length - 1]) return false;
    if (prev.length === 4 && prev.join('') === p.join('')) return false;
    for (var i = 0; i + 3 < all.length; i++) { var d = all[i + 1] - all[i]; if ((d === 1 || d === -1) && all[i + 2] - all[i + 1] === d && all[i + 3] - all[i + 2] === d) return false; }
    return true;
  }
  for (var b = 0; b <= Math.floor((n - 1) / 4); b++) {
    var list = VIEWS._shuffle(key + '#' + b, 24).map(function (i) { return VIEWS._PERMS[i]; });
    seq = seq.concat(list.filter(fits)[0] || list[0]);
  }
  var at = seq[n - 1] % len, rest = VIEWS._shuffle(key + ':' + n, len - 1).map(function (i) { return i + 1; });
  rest.splice(at, 0, 0);
  return rest;
};

/* ══ THE PLATFORM · shell, router, actions and Freya ══════════════════════════════════ */
(function (A, V) {
  'use strict';
  var e = A.esc, S = function () { return A.S; };
  var root = document.getElementById('root'), BODY = document.body;

  /* ── the places and their pages (build spec §2, "The main bar and the sub menus") ──────
     One route per page, #/place/page; a desk's root route is its Suggested view. Pages for
     features in the Next or Later waves are not listed until they ship. */
  var DESK_KEYS = A.DESK_ORDER;   /* the order they open in: Records, Investment, Governance, Protection, Succession (the concept, prompt 1) */
  var NAV = {
    records: { name: 'Records', pages: [['', 'Overview'], ['statement', 'Everything on this desk'], ['own', 'What you own'], ['owe', 'What you owe'], ['timeline', 'Timeline'], ['advisers', 'Advisers'], ['family', 'Family']] },
    policy: { name: 'Governance', pages: [['', 'Overview'], ['rules', 'Your rules'], ['drift', 'Drift'], ['planning', 'Wealth planning'], ['runway', 'Retirement runway'], ['identity', 'Financial Identity']] },
    investment: { name: 'Investment', pages: [['', 'Overview'], ['holdings', 'What you hold'], ['mix', 'Mix lab'], ['fees', 'Fees'], ['access', 'The route to investing']] },
    protection: { name: 'Protection', pages: [['', 'Overview'], ['cover', 'Cover'], ['safety', 'Safety check']] },
    succession: { name: 'Succession', pages: [['', 'Overview'], ['will', 'The will'], ['family', 'Family'], ['beneficiaries', 'Beneficiaries']] },
    learn: { name: 'Learn', pages: [['', 'Overview'], ['progress', 'In progress'], ['earned', 'Certificates and badges'], ['identity', 'Your Financial Identity']] },
    freya: { name: 'Freya', pages: [['', 'New conversation', 'Ask'], ['map', 'Freya’s map'], ['briefings', 'Weekly briefings']] },
    vault: { name: 'Vault', pages: [['', 'All documents', 'All'], ['needs-filing', 'Needs filing'], { h: 'By kind' }].concat(V.KINDS.map(function (k) { return ['kind/' + k.toLowerCase(), k]; })) },
    profile: { name: 'Profile', pages: [['', 'Overview'], ['members', 'Household members'], ['plan', 'Plan and usage'], ['security', 'Security'], ['notifications', 'Notifications'], ['export', 'Export'], { h: 'Fine print' }, ['boundary', 'The boundary'], ['method', 'How the numbers work']] }
  };
  var BASES = ['home', 'desks'].concat(Object.keys(NAV));
  var SUBS = {
    records: /^(statement|own|owe|timeline|advisers|family(\/[\w-]+)?)$/, policy: /^(rules|drift|planning|runway|identity(\/(lauren|household))?|charter)$/,
    investment: /^(holdings|mix|fees|access)$/, protection: /^(cover|safety)$/, succession: /^(will|family(\/[\w-]+)?|beneficiaries)$/,
    learn: /^(map(\/(records|policy|investment|protection|succession|identity))?|identity(\/(quest\/\d+|side\/\d+|stage\/\d|checkup))?|progress|earned|path\/[\w-]+(\/(quest\/\d+|test|done))?)$/, freya: /^(map|briefings|recent|c\/[\w-]+)$/,
    vault: /^(needs-filing|kind\/(ownership|agreements|statements|insurance|estate|identity|tax|other)|doc\/[\w-]+)$/,
    profile: /^(members|plan|security|notifications|export|boundary|method)$/
  };
  function placeName(base) { return base === 'home' ? 'Office' : base === 'desks' ? 'Desks' : NAV[base] ? NAV[base].name : ''; }
  function pref(k, d) { try { return localStorage.getItem(k) || d; } catch (x) { return d; } }
  function setPref(k, v) { try { localStorage.setItem(k, v); } catch (x) {} }

  /* a count on a page's name says what the page will say (Drift · 1, Needs filing · 2) */
  function count(base, key) {
    var n = 0;
    if (base === 'policy' && key === 'drift') n = A.drift().filter(function (x) { return x.out; }).length;
    if (base === 'protection' && key === 'cover') n = A.renewalsWithin(30).length;
    if (base === 'vault' && key === 'needs-filing') n = S().documents.filter(function (d) { return !A.filed(d); }).length;
    if (base === 'learn' && key === 'progress') n = A.learnPaths().filter(function (p) { return p.state === 'progress' && p.desk !== 'trunk'; }).length + (A.LI && (A.idS().main < 17 || (A.idS().side < 6 && S().members.length > 1 && A.idStageDone(A.idS()) >= 2)) ? 1 : 0);
    return n || '';
  }

  /* ── the shell ───────────────────────────────────────────────────────── */
  function fyMark(state, extra) { return A.fyMark(state, extra); }
  function plate(k, cls) { return (SECTION_ICONS[k] || '').replace(/<svg width="48" height="48"/, '<svg class="' + (cls || 'ic-section') + '" aria-hidden="true"'); }
  function mbItem(key, label, icon, extra) {
    return '<a class="mb-item" data-nav="' + key + '" href="#/' + key + '">' + icon + '<span class="mb-label">' + e(label) + '</span>' + (extra || '') + '</a>';
  }
  function dkRows() {
    return DESK_KEYS.map(function (k) {
      var D = A.DESKS[k];
      return '<a class="dk-item" href="#/' + k + '" data-desk="' + k + '">' + plate(D.icon) +
        '<span class="dk-t"><b>' + e(D.noun) + '</b><small>' + e(D.verb + ' · ' + D.pick) + '</small></span></a>';
    }).join('');
  }
  function shell() {
    var fy = S().freya.briefingRead ? 'ready' : 'has';
    var desks = DESK_KEYS.map(function (k) { return mbItem(k, A.DESKS[k].noun, plate(A.DESKS[k].icon), '<span class="mb-mark" data-mark="' + k + '"></span>'); }).join('');
    return '' +
      '<div class="app" id="app">' +
      /* THE MAIN BAR — six places; open on Home, folded to icons everywhere else (REV 44) */
      '<nav class="mainbar" id="mainbar" aria-label="Main">' +
        '<div class="mb-head"><a class="mb-brand" href="#/home" aria-label="Finna — Office">' + MARK + '<b>Finna</b></a>' +
        '<button class="icon-key mb-toggle" type="button" data-act="mainbar" aria-controls="mainbar" aria-keyshortcuts="[">' + A.ic('sidebar') + '</button></div>' +
        /* THE MENU OF FIVE (the concept, 11 Oct 2026, prompt 8): Office, Desks with the five desks under it in the order
           they open, Freya, Learn, the Vault; Desks itself opens the Desks page. At the foot, the owner, opening Profile */
        '<div class="mb-list">' + mbItem('home', 'Office', A.ic('home')) +
          '<a class="mb-item mb-group" data-nav="desks" href="#/desks">' + A.ic('desks') + '<span class="mb-label">Desks</span></a>' +
          '<div class="mb-desks" id="mb-desks">' + desks + '</div>' +
          mbItem('freya', 'Freya', fyMark(fy)) + mbItem('learn', 'Learn', A.ic('learn')) + mbItem('vault', 'Vault', A.ic('vault')) + '</div>' +
        '<div class="mb-foot"><a class="mb-item mb-owner" data-nav="profile" href="#/profile"><span class="own-ini" id="mb-ini" aria-hidden="true"></span>' +
          '<span class="mb-label mb-who"><b id="mb-who"></b><small>Owner</small></span></a></div>' +
      '</nav>' +
      /* THE TOP PILL — you and the view: the mode and Profile (Rose, 28 Sep 2026). From a
         tablet up these leave the bar's foot, which keeps only the places; a phone keeps them in
         its menu sheet. */
      '<div class="top-pill" role="group" aria-label="You and the view">' +
        '<button class="icon-key mode-key" type="button" data-act="mode" aria-label="Light or dark mode">' + A.ic('moon', 'to-dark') + A.ic('sun', 'to-light') + '</button></div>' +
      /* THE SUB MENU — the chosen place's pages, names only */
      '<nav class="submenu" id="submenu" aria-label="Pages"><div class="sm-inner" id="sm-inner"></div></nav>' +
      '<div class="work" id="work" tabindex="-1">' +
        /* on a phone: the header, and the section's pages as keys */
          /* the compact bar (prompt 9): it fades in once the page's own title has scrolled away */
          '<div class="phone-top"><header class="phone-head"><span class="ph-ic" id="ph-ic" aria-hidden="true"></span>' +
          '<span class="ph-title" id="ph-title">Office</span><span class="ph-end" id="ph-end"></span></header>' +
          '<nav class="section-keys" id="section-keys" aria-label="Pages"></nav></div>' +
        '<div class="page-bar" id="page-bar"></div>' +
        '<div id="view"></div>' +
      '</div></div>' +
      '<div class="dock" id="dock">' +
      /* THE DESKS, ON A PHONE (9 Oct 2026, Christian: the wireframe "Finna Family Office — Mobile Wireframe"):
         a pill above Freya's bar, right-aligned, and the five desks in a card above it. Picking one opens
         the desk; the pill and her bar then name it. Shown only on a phone (frame.css) */
      '<div class="dk-pick" id="dk-pick"><nav class="dk-card" id="dk-card" aria-label="The five desks" hidden>' +
        '<p class="dk-h">The five desks</p><div class="dk-list" id="dk-list">' + dkRows() + '</div></nav>' +
        '<button class="key dk-key" id="dk-key" type="button" data-act="desks-pick" aria-expanded="false" aria-controls="dk-card"><span class="dk-ic" id="dk-ic" aria-hidden="true">' + A.ic('desks') + '</span><span id="dk-label">Desks</span></button></div>' +
      '<section class="fy-panel fy-surface" id="fy-panel" hidden aria-label="Freya">' +
      '<div class="fy-panel-head">' + fyMark('ready') + '<span class="fy-who"><b>Freya</b><small class="fy-about" id="fy-about"></small></span>' +
      '<span class="fy-tag" data-fy-state>' + (fy === 'has' ? 'Has something' : 'Ready') + '</span>' +
      '<button class="icon-key" type="button" data-act="fy-close" aria-label="Close Freya">' + A.ic('close') + '</button></div>' +
      '<div class="fy-know-slot" id="fy-know"></div>' +
      '<div class="fy-thread" id="fy-thread" data-fy-thread aria-live="polite"></div><div class="fy-chips" id="fy-chips"></div></section>' +
      '<div class="fy-row"><form class="fy-bar fy-surface" id="fy-bar" data-form="ask" autocomplete="off"><button class="icon-key" type="button" data-act="fy-toggle" aria-label="Open Freya">' + fyMark(fy) + '</button>' +
      '<label class="sr" for="fy-input">Ask Freya</label><span class="fy-field"><input class="input" id="fy-input" name="q" placeholder="Ask Freya about this page" aria-keyshortcuts="Control+K Meta+K"></span>' +
      '<button class="key fy-send" type="submit" aria-label="Ask Freya" disabled>' + A.ic('top') + '</button></form></div></div>' +
      /* THE TAB BAR, ON A PHONE (the concept, prompt 7): Office, Desks, Freya raised in the middle, Learn, the Vault.
         It replaces the menu sheet, Freya's bar and the Desks pill; Freya's tab opens her conversation full screen */
      '<nav class="tabbar" id="tabbar" aria-label="Main">' +
        '<a class="tb-item" data-tab="home" href="#/home">' + A.ic('home') + '<span class="tb-label">Office</span></a>' +
        '<a class="tb-item" data-tab="desks" href="#/desks">' + A.ic('desks') + '<span class="tb-label">Desks</span></a>' +
        '<button class="tb-item tb-freya" type="button" data-tab="freya" data-act="fy-tab" aria-label="Freya"><span class="tb-disc">' + fyMark(fy) + '</span><span class="tb-label">Freya</span></button>' +
        '<a class="tb-item" data-tab="learn" href="#/learn">' + A.ic('learn') + '<span class="tb-label">Learn</span></a>' +
        '<a class="tb-item" data-tab="vault" href="#/vault">' + A.ic('vault') + '<span class="tb-label">Vault</span></a></nav>' +
      '<div class="frame-scrim" id="frame-scrim" data-act="frame-close"></div>' +
      '<div class="scrim" id="scrim" hidden data-act="scrim"></div><aside class="sheet" id="sheet" role="dialog" aria-modal="true" aria-labelledby="sheet-title" hidden></aside>' +
      '<div class="tip-float" id="tip" aria-hidden="true"></div><input class="sr" id="upload-any" type="file" data-upload multiple accept="application/pdf,image/*" tabindex="-1" aria-hidden="true">' +
      '<div class="toast" id="toast" role="status" aria-live="polite"></div>';
  }
  root.innerHTML = shell();
  var WORK = document.getElementById('work'), VIEW = document.getElementById('view'), APPEL = document.getElementById('app');
  var sheet = document.getElementById('sheet'), scrim = document.getElementById('scrim'), TIP = document.getElementById('tip');

  /* ── the frame's state (build spec §2) ───────────────────────────────────
     desktop: the main bar docks open or folds, one choice for every page, remembered per
       browser (28 Sep 2026: members asked to keep it open everywhere). The sub
       menu does not fold on a desktop (27 Sep 2026): folded it left the path but none of the
       place's other pages, and the work is capped at 1060px, so it bought no width.
     tablet: both start folded and open over the work.
     phone: no bar — the menu key opens it as a sheet; the section's pages are keys. */
  var OVER = { mb: false, sm: false, menu: false, pf: false, desks: false };
  /* desktop: docked open or folded, one choice for every page, remembered. Until the member
     makes it, Home opens and the places start folded.
     PROFILE FOLDS THE MAIN BAR (Rose, 29 Sep 2026). Profile is settings, opened from the top pill,
     so nothing in the bar is current there and the bar only takes width: it folds for the visit,
     and the green pane and the page get the room. The member's choice is not touched — leaving
     Profile brings the bar back as it was. The fold key still opens it, for that visit only
     (OVER.pf). */
  function docked(base) { var p = pref('finna-mainbar', ''); return p ? p === 'open' : true; }
  function layout() { var w = window.innerWidth; return w <= 768 ? 'phone' : w <= 1100 ? 'tablet' : 'desktop'; }
  function frame() {
    var r = CURR || { base: 'home' }, L = layout(), sub = !!NAV[r.base] && !NAV[r.base].bare, mb, sm;
    if (r.base !== 'profile') OVER.pf = false;
    if (L === 'phone') { mb = 'open'; sm = sub ? 'folded' : 'none'; }
    else if (L === 'tablet') { mb = OVER.mb ? 'over' : 'folded'; sm = !sub ? 'none' : OVER.sm ? 'over' : 'folded'; }
    else {
      mb = r.base === 'profile' ? (OVER.pf ? 'open' : 'folded') : docked(r.base) ? 'open' : 'folded';
      sm = !sub ? 'none' : 'open';   /* a desktop's sub menu does not fold: every desk, Freya, Learn, the Vault and Profile keep theirs (Christian, 15 Oct 2026) */
    }
    BODY.setAttribute('data-mainbar', mb); BODY.setAttribute('data-submenu', sm);
    if (L === 'phone' && OVER.menu) BODY.setAttribute('data-menu', 'on'); else BODY.removeAttribute('data-menu');
    /* the Desks card, over a dimmed page (the frame's scrim); a phone's alone */
    var dkOn = L === 'phone' && OVER.desks, dkc = document.getElementById('dk-card');
    if (dkOn) BODY.setAttribute('data-desks', 'on'); else BODY.removeAttribute('data-desks');
    dkc.hidden = !dkOn; document.getElementById('dk-key').setAttribute('aria-expanded', String(dkOn));
    /* the page holds still behind the menu sheet (frame.css locks the native scroll; Lenis, which
       smooths a wheel or trackpad, is paused too) — 29 Sep 2026 */
    if (LENIS) { if (BODY.hasAttribute('data-menu')) LENIS.stop(); else if (sheet.hidden && !walkOn()) LENIS.start(); }
    var t = document.querySelector('.mb-toggle'), shown = mb === 'open' || mb === 'over';
    t.setAttribute('aria-label', shown ? (L === 'phone' ? 'Close the menu' : 'Fold the main bar') : 'Open the main bar');
    t.setAttribute('aria-expanded', String(shown));
    /* folded, the lockup is covered by the open key: keep it out of the tab order */
    document.querySelector('.mb-brand').tabIndex = mb === 'folded' ? -1 : 0;
    var st = document.querySelector('.sm-toggle'); if (st) st.setAttribute('aria-expanded', String(sm === 'open' || sm === 'over'));
    hideTip();
  }
  function closeOver() { var was = OVER.mb || OVER.sm || OVER.menu || OVER.desks; OVER.mb = OVER.sm = OVER.menu = OVER.desks = false; if (was) frame(); }

  /* the name of a folded icon: it follows the pointer while it is on the icon, and sits beside
     the icon on keyboard focus; it fades in and out (the fade is the CSS's) */
  function tipAt(x, y) { TIP.style.left = x + 'px'; TIP.style.top = y + 'px'; }
  /* The open bar's panel key has no tip (Rose, 29 Sep 2026: "remove this hover tip, it's
     unnecessary") — its icon says what it does, and [ still folds the bar. */
  function showTip(el, ev) {
    var mb = BODY.getAttribute('data-mainbar');
    if (mb !== 'folded' || layout() === 'phone') return;
    var lbl = (el.querySelector('.mb-label') || {}).textContent || el.getAttribute('aria-label');
    if (!lbl) return;
    var r = el.getBoundingClientRect();
    if (el.classList.contains('mb-mode')) lbl = document.documentElement.getAttribute('data-mode-now') === 'dark' ? 'Light mode' : 'Dark mode';
    TIP.textContent = lbl;
    TIP.classList.remove('to-left');
    if (ev && ev.clientX != null) tipAt(ev.clientX + 16, ev.clientY); else tipAt(r.right + 12, r.top + r.height / 2);
    TIP.classList.add('on');
  }
  /* the top pill's tips sit to the LEFT of the pointer — the pill is at the window's right edge */
  function pillTip(el, ev) {
    var dark = document.documentElement.getAttribute('data-mode-now') === 'dark';
    TIP.textContent = el.classList.contains('mode-key') ? (dark ? 'Light mode' : 'Dark mode') : 'Profile';
    var r = el.getBoundingClientRect();
    TIP.classList.add('to-left');
    if (ev && ev.clientX != null) tipAt(ev.clientX - 16, ev.clientY); else tipAt(r.left - 12, r.top + r.height / 2);
    TIP.classList.add('on');
  }
  function hideTip() { TIP.classList.remove('on'); }
  var MB = document.getElementById('mainbar');
  MB.addEventListener('pointerover', function (ev) { var t = ev.target.closest('.mb-item'); if (t && ev.pointerType !== 'touch') showTip(t, ev); });
  MB.addEventListener('pointermove', function (ev) { if (TIP.classList.contains('on') && ev.pointerType !== 'touch') tipAt(ev.clientX + 16, ev.clientY); });
  MB.addEventListener('pointerout', function (ev) { if (!ev.relatedTarget || !MB.contains(ev.relatedTarget) || !ev.relatedTarget.closest('.mb-item')) hideTip(); });
  MB.addEventListener('focusin', function (ev) { var t = ev.target.closest('.mb-item'); if (t && t.matches(':focus-visible')) showTip(t); });
  MB.addEventListener('focusout', hideTip);
  MB.addEventListener('scroll', hideTip, { passive: true });
  var TPILL = document.querySelector('.top-pill');
  TPILL.addEventListener('pointerover', function (ev) { var t = ev.target.closest('.icon-key'); if (t && ev.pointerType !== 'touch') pillTip(t, ev); });
  TPILL.addEventListener('pointermove', function (ev) { if (TIP.classList.contains('on') && ev.pointerType !== 'touch') tipAt(ev.clientX - 16, ev.clientY); });
  TPILL.addEventListener('pointerout', function (ev) { if (!ev.relatedTarget || !ev.relatedTarget.closest || !ev.relatedTarget.closest('.top-pill .icon-key')) hideTip(); });
  TPILL.addEventListener('focusin', function (ev) { var t = ev.target.closest('.icon-key'); if (t && t.matches(':focus-visible')) pillTip(t); });
  TPILL.addEventListener('focusout', hideTip);
  TPILL.addEventListener('click', function () { setTimeout(hideTip, 0); });

  /* ── where the household is: the main bar, the sub menu, the section keys, the page bar ── */
  function items(base) {
    var nav = NAV[base]; if (!nav) return [];
    var list = nav.pages.map(function (pg) {
      if (pg.h) return { h: pg.h };
      return { key: pg[0], label: pg[1], short: pg[2] || pg[1], href: '#/' + base + (pg[0] ? '/' + pg[0] : ''), count: count(base, pg[0]), soon: !!V.COMING[base + '/' + pg[0]] };
    });
    /* the Family Charter is a page of Policy once the side tree has begun to write it */
    if (base === 'policy' && A.LI) { var I = A.idS(); if (I.side || I.charter) list.splice(list.map(function (x) { return x.key; }).indexOf('identity') + 1, 0, { key: 'charter', label: 'Family Charter', short: 'Family Charter', href: '#/policy/charter', count: '' }); }
    if (base === 'freya') {
      list.push({ h: 'Recent' });
      var cs = convos().slice().reverse();
      if (cs.length) cs.forEach(function (c) { list.push({ key: 'c/' + c.id, label: c.title, href: '#/freya/c/' + c.id, convo: true }); });
      else list.push({ empty: 'Your conversations will be kept here, newest first.' });
    }
    return list;
  }
  function currentKey(r) {
    if (r.base === 'learn' && (r.sub === 'path' || r.sub === 'map')) return '';
    if (r.base === 'learn' && r.sub === 'identity') return 'identity';
    if (r.base === 'policy' && r.sub === 'identity') return 'identity';
    if (r.base === 'vault' && r.sub === 'doc') return '';
    if (r.sub === 'family') return 'family';
    return r.path;
  }
  function drawNav(r) {
    document.querySelectorAll('.mb-item[data-nav]').forEach(function (a) {
      if (a.getAttribute('data-nav') === r.base) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    /* the tab bar: a desk's pages are under Desks */
    var tab = DESK_KEYS.indexOf(r.base) > -1 ? 'desks' : r.base;
    document.querySelectorAll('#tabbar .tb-item').forEach(function (a) { if (a.getAttribute('data-tab') === tab) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
    /* the desks' marks in the menu: Next on the desk that opens next, a lock on a waiting one, a Bullion dot on a desk with a decision */
    var nextK = DESK_KEYS.filter(function (k) { return !A.deskOpen(k); })[0];
    document.querySelectorAll('#mb-desks .mb-mark').forEach(function (m) {
      var k = m.getAttribute('data-mark'), html = !A.deskOpen(k) ? (k === nextK ? '<span class="mb-next">Next</span>' : A.ic('lock', 'mb-lock')) : A.deskDecision(k) ? '<i class="mb-dot" aria-label="Needs a decision"></i>' : '';
      if (m.innerHTML !== html) m.innerHTML = html;
    });
    var who = A.who() || '', ini = document.getElementById('mb-ini'); if (ini) { ini.textContent = (who.charAt(0) || '·').toUpperCase(); document.getElementById('mb-who').textContent = who || 'You'; }
    var phi = document.getElementById('ph-ic'), phk = DESK_KEYS.indexOf(r.base) > -1 ? 'd:' + r.base : r.base;
    if (phi && phi.getAttribute('data-k') !== phk) { phi.setAttribute('data-k', phk); phi.innerHTML = DESK_KEYS.indexOf(r.base) > -1 ? plate(A.DESKS[r.base].icon) : r.base === 'freya' ? fyMark('ready') : A.ic({ home: 'home', desks: 'desks', learn: 'learn', vault: 'vault', profile: 'user' }[r.base] || 'home'); }
    var nav = NAV[r.base], cur = currentKey(r), list = items(r.base), smi = document.getElementById('sm-inner'), keys = document.getElementById('section-keys');
    var curItem = list.filter(function (x) { return x.key === cur; })[0];
    smi.parentNode.setAttribute('data-place', nav ? r.base : '');   /* Profile's pane is green (frame.css) */
    smi.innerHTML = nav ? '<div class="sm-head"><h2 class="sm-title">' + e(nav.name) + '</h2>' +
      '<button class="icon-key sm-toggle" type="button" data-act="submenu" aria-label="Close the pages" aria-keyshortcuts="]">' + A.ic('sidebar') + '</button></div>' +
      list.map(function (x) {
        if (x.h) return '<div class="sm-h eyebrow">' + e(x.h) + '</div>';
        if (x.empty) return '<p class="sm-empty">' + e(x.empty) + '</p>';
        return '<a class="sm-item" href="' + x.href + '"' + (x.key === cur ? ' aria-current="page"' : '') + '><span>' + e(x.label) + '</span>' +
          (x.soon ? '<span class="sm-soon">Coming</span>' : x.count ? '<span class="sm-count" aria-label="' + x.count + ' to see">' + x.count + '</span>' : '') + '</a>';
      }).join('') : '';
    /* Freya's phone keys: Ask, Recent, Weekly briefings (build spec Figure 17) */
    var klist = r.base === 'freya' ? [{ key: '', short: 'Ask', href: '#/freya' }, { key: 'map', short: 'Freya’s map', href: '#/freya/map' }, { key: 'recent', short: 'Recent', href: '#/freya/recent' }, { key: 'briefings', short: 'Weekly briefings', href: '#/freya/briefings' }] :
      list.filter(function (x) { return x.href && !x.convo; });
    keys.innerHTML = nav && !nav.bare ? klist.map(function (x) {
      return '<a class="key key-s key-secondary" href="' + x.href + '"' + (x.key === cur ? ' aria-current="page"' : '') + '>' + e(x.short) + (x.soon ? ' · Coming' : x.count ? ' · ' + x.count : '') + '</a>';
    }).join('') : '';
    keys.setAttribute('aria-label', nav ? nav.name + ' pages' : 'Pages');
    var sel = keys.querySelector('[aria-current="page"]'); if (sel && sel.scrollIntoView) sel.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    /* the page bar: where you are, and the key that reopens the sub menu */
    var crumbs = [];
    if (DESK_KEYS.indexOf(r.base) > -1) crumbs.push('<a href="#/desks">Desks</a>');
    if (nav) crumbs.push('<a href="#/' + r.base + '">' + e(nav.name) + '</a>');
    var lxp = r.base === 'learn' && r.sub === 'path' ? A.learnPath(r.rest[0]) : null;
    var here = lxp ? lxp.title : curItem ? curItem.label : r.base === 'vault' && r.sub === 'doc' ? 'A document' : r.base === 'freya' && r.sub === 'recent' ? 'Recent conversations' : '';
    if (here) crumbs.push('<span aria-current="page">' + e(here) + '</span>');
    var deskRoot = DESK_KEYS.indexOf(r.base) > -1 && !r.sub;
    document.getElementById('page-bar').innerHTML = nav && !deskRoot && !nav.bare ? '<button class="icon-key" type="button" data-act="submenu" aria-label="Open the pages" aria-keyshortcuts="]">' + A.ic('sidebar') + '</button>' +
      '<nav class="crumbs" aria-label="Where you are">' + crumbs.join('<span aria-hidden="true">›</span>') + '</nav>' : '';
    document.getElementById('ph-title').textContent = placeName(r.base);
    /* the header's end key: a new conversation on Freya's page; Edit view on Home (Figures 14 and 15) */
    var sgKey = '';   /* no Edit view: the desks' summaries and Home (redone 28 Sep 2026) keep a fixed order */
    document.getElementById('ph-end').innerHTML = r.base === 'freya' ? '<button class="icon-key" type="button" data-act="fy-new" aria-label="New conversation">' + A.ic('plus') + '</button>' :
      sgKey ? '<button class="icon-key" type="button" data-act="edit-view" data-section="' + sgKey + '" aria-label="Edit view">' + A.ic('more') + '</button>' : '';
    /* Freya's bar is at the foot of every screen but her own */
    document.getElementById('dock').hidden = (r.base === 'freya' && r.sub !== 'map') || (r.base === 'learn' && r.rest[1] === 'test');   /* her map keeps her bar: ask her about it */   /* the test has no help: Freya's bar leaves the screen */
    /* the Desks pill: on a desk's pages the desk's own icon and its name, "Investment" (Christian, 9 Oct 2026: "should
       not include the word desk", "use the specific desk icon"); anywhere else the 2×2 icon and "Desks". Its card marks the desk
       you are on, black with white words as in every menu, and a desk the tutorial has not opened carries
       its lock (the peek opens, as from the main bar). The round add key beside Freya's bar went on
       9 Oct 2026: a page's own Add keys carry its action, and one key on screen is the rule */
    var dk = DESK_KEYS.indexOf(r.base) > -1 ? r.base : '';
    document.getElementById('dk-label').textContent = dk ? A.DESKS[dk].noun : 'Desks';
    var dic = document.getElementById('dk-ic');
    if (dic.getAttribute('data-k') !== dk) { dic.setAttribute('data-k', dk); dic.innerHTML = dk ? plate(A.DESKS[dk].icon) : A.ic('desks'); }
    document.getElementById('dk-key').setAttribute('aria-label', dk ? 'Desks, on ' + A.DESKS[dk].noun : 'Desks');
    document.querySelectorAll('#dk-list .dk-item').forEach(function (a) {
      var k = a.getAttribute('data-desk'), open = A.deskOpen(k), lk = a.querySelector('.dk-lock');
      if (k === dk) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
      a.toggleAttribute('data-locked', !open);
      if (!open && !lk) a.insertAdjacentHTML('beforeend', '<span class="dk-lock" aria-hidden="true">' + A.ic('lock') + '</span>');
      if (open && lk) lk.remove();
      if (open) a.removeAttribute('aria-label'); else a.setAttribute('aria-label', A.DESKS[k].noun + ', not open yet');
    });
  }

  /* ── router ──────────────────────────────────────────────────────────── */
  /* The canonical form of any address: the spec's routes, with the old ones redirected —
     #records.own → #/records/own, #timeline → #/records/timeline, #records.documents →
     #/vault, #records.people and /family → #/records/family, #policy.goals →
     #/policy/planning, #household.* → #/profile/*, and #/desks → the desk last open. */
  function canonical(h) {
    if (!h || h === '/') return '/home';
    var legacy = h.charAt(0) !== '/';
    var p = (legacy ? '/' + h.replace(/\./g, '/') : h).replace(/\/+$/, '');
    if (legacy) p = p.replace(/^\/learn\/quest\/([\w-]+)\/(\d+)$/, '/learn/path/$1/quest/$2');
    p = p.replace(/^\/timeline(\/.*)?$/, '/records/timeline').replace(/^\/records\/documents(\/.*)?$/, '/vault')
      .replace(/^\/records\/people$/, '/records/family').replace(/^\/family$/, '/records/family')
      .replace(/^\/policy\/goals$/, '/policy/planning').replace(/^\/household$/, '/profile').replace(/^\/household\/(.+)$/, '/profile/$1')
      .replace(/^\/policy\/method$/, '/profile/method').replace(/^\/policy\/boundary$/, '/profile/boundary').replace(/^\/learn\/freya$/, '/freya/map');
    var parts = p.split('/').filter(Boolean);
    if (BASES.indexOf(parts[0]) < 0) return '/home';
    if (parts[0] === 'desks') return '/desks';
    if (parts[0] === 'home') return '/home';
    var rest = parts.slice(1).join('/');
    if (rest && !SUBS[parts[0]].test(rest)) return '/' + parts[0];
    if (parts[0] === 'freya' && parts[1] === 'c' && !convos().some(function (c) { return c.id === parts[2]; })) return '/freya';
    return '/' + parts.join('/');
  }
  function parse(c) {
    var parts = c.split('/').filter(Boolean);
    return { base: parts[0], sub: parts[1] || '', rest: parts.slice(2), path: parts.slice(1).join('/') };
  }
  var CUR = '', CURR = null;
  /* THE "i" TAGS' TIP: one for the page, placed above the icon it explains (below it when there is
     no room), kept inside the screen. A mouse shows it on hover; the keyboard on focus; a tap or a
     click pins it until the next tap anywhere, Escape, a scroll or a new page. */
  var GL = { tip: null, btn: null, pinned: false };
  function glTip() {
    if (!GL.tip) { GL.tip = document.createElement('div'); GL.tip.className = 'gl-tip'; GL.tip.id = 'gl-tip'; GL.tip.setAttribute('role', 'tooltip'); document.body.appendChild(GL.tip); }
    return GL.tip;
  }
  /* EVERY TIP FOLLOWS THE POINTER (the brand's Tip rule, 29 Sep 2026): on hover the tip sits just
     right of the pointer and moves with it, opening to the left near the window's right edge and
     kept inside the window top to bottom. Focus and a tap place it at the icon, as before. */
  function glPlace(x, y) {
    var t = GL.tip, vw = document.documentElement.clientWidth, vh = document.documentElement.clientHeight, tw = t.offsetWidth, th = t.offsetHeight,
        off = ARROW.big ? 30 : 16;   /* clear of the grown arrow over an "i" */
    var left = x + off + tw > vw - 12 ? x - off - tw : x + off;
    t.style.left = Math.round(Math.max(12, left)) + 'px'; t.style.top = Math.round(Math.max(12, Math.min(vh - th - 12, y - th / 2))) + 'px';
  }
  function glShow(b, pin, ev) {
    var g = V.GLOSS[b.getAttribute('data-gl')], P = b.hasAttribute('data-glq') && (window.LEARN && window.LEARN.PLAIN || {})[b.getAttribute('data-glq')]; if (!g && !P) return;
    if (GL.btn && GL.btn !== b) glHide();
    var t = glTip(); t.innerHTML = P ? '<small>In plain words</small><span>' + A.esc(P[0]) + '</span>' + P[1].map(function (w) { return '<span class="gl-w"><b>' + A.esc(w[0]) + '</b>' + A.esc(w[1]) + '</span>'; }).join('') :
      '<b>' + A.esc(g[0]) + '</b><span>' + A.esc(g[1]) + '</span>';
    GL.btn = b; GL.pinned = !!pin; b.setAttribute('aria-expanded', 'true'); b.setAttribute('aria-describedby', 'gl-tip');
    tipPlace(b, pin ? null : ev);
    t.classList.add('on');
  }
  /* beside the pointer when there is one; above the control (below it near the top) for focus or a tap */
  function tipPlace(b, ev) {
    if (ev && ev.clientX != null) { glPlace(ev.clientX, ev.clientY); return; }
    var t = GL.tip, r = b.getBoundingClientRect(), vw = document.documentElement.clientWidth, tw = t.offsetWidth, th = t.offsetHeight;
    var x = Math.max(12, Math.min(vw - tw - 12, r.left + r.width / 2 - tw / 2)), y = r.top - th - 10;
    if (y < 12) y = r.bottom + 10;
    t.style.left = Math.round(x) + 'px'; t.style.top = Math.round(y) + 'px';
  }
  function glHide() {
    if (GL.btn) { GL.btn.setAttribute('aria-expanded', 'false'); GL.btn.removeAttribute('aria-describedby'); }
    GL.btn = null; GL.pinned = false; if (GL.tip) GL.tip.classList.remove('on');
  }
  function glAt(ev) { return ev.target && ev.target.closest ? ev.target.closest('.gl-i') : null; }
  /* THE "i" FOLLOWS THE PUNCTUATION (Rose, 29 Sep 2026: "can we not place the i just before a full
     stop"): like a footnote mark, it goes after a full stop, comma, colon or question mark that
     touches its term — "your ceiling.ⓘ", not "your ceiling ⓘ." The pages write the term and then
     the punctuation; whatever puts them on the page, the punctuation is moved in front of the mark
     (inside the term's no-wrap span, so the three never part at a line end). */
  function glPunct(root) {
    if (!root || !root.querySelectorAll) return;
    root.querySelectorAll('.gl-i').forEach(function (b) {
      var host = b.parentNode && b.parentNode.classList && b.parentNode.classList.contains('gl') && !b.nextSibling ? b.parentNode : b,
          n = host.nextSibling, m = n && n.nodeType === 3 && n.data.match(/^[.,;:!?]+/);
      if (!m) return;
      n.data = n.data.slice(m[0].length);
      b.parentNode.insertBefore(document.createTextNode(m[0]), b);
    });
  }
  new MutationObserver(function (recs) {
    var roots = [];
    recs.forEach(function (r) { if (r.addedNodes.length && roots.indexOf(r.target) < 0) roots.push(r.target); });
    roots.forEach(glPunct);
  }).observe(document.body, { childList: true, subtree: true });
  glPunct(document.body);
  document.addEventListener('pointerover', function (ev) { var b = glAt(ev); if (b && ev.pointerType === 'mouse' && !GL.pinned) glShow(b, false, ev); });
  /* HER KEY TURNS (Rose, 4 Oct 2026 — Freya Turn Lab: gold, "ease out in", a 0.3s fade). Over her key, and on its
     keyboard focus, her rings turn round and round, ease out-in: she never stops, only slows halfway. Moving off,
     she slows down into the next quarter turn and stops there ("slows down a little before reaching the starting
     point"); her four rings sit in a square, so every quarter turn looks like the start. Only the rings turn
     (.fy-spin): the has-something dot and the cut around it stay where they are. The fill is frame.css's. A mouse
     or pen only; with reduced motion she stays still. Held (HOLDING FREYA'S MARK), she stops turning as the hold
     shows, and only turns again if you let go early while still over her. */
  var FY_KEY = '.dock .fy-bar > .icon-key', FY_STILL = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)');
  function fyKeyOf(ev) { var k = ev.target && ev.target.closest && ev.target.closest(FY_KEY); return k && !(ev.relatedTarget && k.contains(ev.relatedTarget)) ? k : null; }
  function fyAngle(g) { var r = getComputedStyle(g).rotate; return r && r !== 'none' ? parseFloat(r) % 360 : 0; }
  function fyTurn(k) {
    var g = k.querySelector('.fy-spin'); if (!g || !g.animate || (FY_STILL && FY_STILL.matches) || (HOLD && HOLD.shown)) return;
    var a = fyAngle(g); if (g._turn) g._turn.cancel();
    g._turn = g.animate([{ rotate: a + 'deg' }, { rotate: (a + 360) + 'deg' }], { duration: 2400, easing: 'cubic-bezier(.2,.75,.8,.25)', iterations: Infinity });
  }
  function fyRest(k, quick) {   /* quick: a hold has begun, so she stops in a shorter run (HOLDING FREYA'S MARK) */
    var g = k.querySelector('.fy-spin'); if (!g || !g._turn) return;
    var a = fyAngle(g), to = Math.ceil((a + (quick ? 10 : 30)) / 90) * 90;   /* room to slow down in */
    g._turn.cancel();
    var t = g._turn = g.animate([{ rotate: a + 'deg' }, { rotate: to + 'deg' }], { duration: quick ? 180 + (to - a) * 2 : 350 + (to - a) * 5, easing: 'cubic-bezier(.2,.6,.35,1)' });
    t.onfinish = function () { if (g._turn === t) { t.cancel(); g._turn = null; } };
  }
  document.addEventListener('pointerover', function (ev) { var k = ev.pointerType !== 'touch' && fyKeyOf(ev); if (k) fyTurn(k); });
  document.addEventListener('pointerout', function (ev) { var k = ev.pointerType !== 'touch' && fyKeyOf(ev); if (k && !k.matches(':focus-visible')) fyRest(k); });
  document.addEventListener('focusin', function (ev) { var k = ev.target.closest && ev.target.closest(FY_KEY); if (k && k.matches(':focus-visible')) fyTurn(k); });
  document.addEventListener('focusout', function (ev) { var k = ev.target.closest && ev.target.closest(FY_KEY); if (k && !k.matches(':hover')) fyRest(k); });

  /* THE ARROW GROWS OVER AN "i" (Rose, 29 Sep 2026: "no hand cursor — animate the normal cursor up in
     size when hovering an i; a little playful but still serious"). A page cannot resize the system's
     own cursor, so over an "i" the real arrow is hidden and a drawn one stands in, exactly where it
     was, and grows half as large again from its tip. Leaving, it shrinks back first, and only then
     does the real arrow return. A mouse only; with reduced motion, or on touch, nothing changes. The
     drawn arrow is the classic one — black, a white edge — so it reads on any ground. */
  var ARROW = { el: null, big: false, t: 0 };
  var CUR_OK = window.matchMedia && matchMedia('(hover:hover) and (pointer:fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (CUR_OK) {
    ARROW.el = document.createElement('div'); ARROW.el.className = 'gl-cursor'; ARROW.el.setAttribute('aria-hidden', 'true');
    ARROW.el.innerHTML = '<svg viewBox="0 0 24 24"><path d="M5 3v16.2l4.3-3.9 2.7 6 2.8-1.2-2.7-5.9H18z"/></svg>';
    document.body.appendChild(ARROW.el); document.documentElement.classList.add('gl-cur');
    document.addEventListener('pointerover', function (ev) {
      if (ev.pointerType !== 'mouse' || !glAt(ev)) return;
      clearTimeout(ARROW.t); ARROW.el.style.transform = 'translate(' + ev.clientX + 'px,' + ev.clientY + 'px)';
      document.documentElement.classList.add('gl-cur-hide'); ARROW.el.classList.add('on');
      requestAnimationFrame(function () { ARROW.el.classList.add('big'); ARROW.big = true; });
    });
    document.addEventListener('pointerout', function (ev) {
      var b = glAt(ev); if (ev.pointerType !== 'mouse' || !b || b.contains(ev.relatedTarget)) return;
      ARROW.el.classList.remove('big'); ARROW.big = false; clearTimeout(ARROW.t);
      ARROW.t = setTimeout(function () { ARROW.el.classList.remove('on'); document.documentElement.classList.remove('gl-cur-hide'); }, 240);
    });
    document.addEventListener('pointermove', function (ev) { if (ARROW.el.classList.contains('on')) ARROW.el.style.transform = 'translate(' + ev.clientX + 'px,' + ev.clientY + 'px)'; }, { passive: true });
    window.addEventListener('blur', function () { ARROW.el.classList.remove('on', 'big'); ARROW.big = false; document.documentElement.classList.remove('gl-cur-hide'); });
  }
  /* every tip here follows the pointer — the "i", the Learn tags and the hints (29 Sep 2026: the Learn tag's stood still) */
  document.addEventListener('pointermove', function (ev) { if (GL.btn && !GL.pinned && ev.pointerType === 'mouse' && (glAt(ev) || ltAt(ev) || hintAt(ev)) === GL.btn) glPlace(ev.clientX, ev.clientY); });
  document.addEventListener('pointerout', function (ev) { var b = glAt(ev); if (b && ev.pointerType === 'mouse' && !GL.pinned && !b.contains(ev.relatedTarget)) glHide(); });
  document.addEventListener('focusin', function (ev) { var b = glAt(ev); if (b && b.matches(':focus-visible') && GL.btn !== b) glShow(b); });
  document.addEventListener('focusout', function (ev) { if (glAt(ev) && !GL.pinned) glHide(); });
  /* capture: the tap is the tip's alone, never a row's or a sort key's */
  document.addEventListener('click', function (ev) {
    var b = glAt(ev);
    if (b) { ev.preventDefault(); ev.stopPropagation(); if (GL.btn === b && GL.pinned) glHide(); else glShow(b, true); return; }
    if (GL.pinned) glHide();
  }, true);
  document.addEventListener('keydown', function (ev) { if (ev.key === 'Escape' && GL.btn) glHide(); });
  /* THE LEARN TAGS' TIP: the same tip, naming the path and the quest; a tap goes to the quest, and
     the page it came from is kept so the quest can offer the way back */
  function ltShow(b, ev) {
    if (GL.btn && GL.btn !== b) glHide();
    var t = glTip(); t.innerHTML = '<small>' + A.esc(b.getAttribute('data-lt-e')) + '</small><b>' + A.esc(b.getAttribute('data-lt-t')) + '</b><span>' + A.esc(b.getAttribute('data-lt-l')) + ' · +40 XP</span>';
    GL.btn = b; GL.pinned = false; b.setAttribute('aria-describedby', 'gl-tip');
    tipPlace(b, ev); t.classList.add('on');
  }
  function ltAt(ev) { return ev.target && ev.target.closest ? ev.target.closest('.lt') : null; }
  document.addEventListener('pointerover', function (ev) { var b = ltAt(ev); if (b && ev.pointerType === 'mouse') ltShow(b, ev); });
  document.addEventListener('pointerout', function (ev) { var b = ltAt(ev); if (b && ev.pointerType === 'mouse' && !b.contains(ev.relatedTarget)) glHide(); });
  document.addEventListener('focusin', function (ev) { var b = ltAt(ev); if (b && b.matches(':focus-visible')) ltShow(b); });
  document.addEventListener('focusout', function (ev) { if (ltAt(ev)) glHide(); });
  /* A HINT — one line on a thing that is not a term, in the same tip (29 Sep 2026: these were the
     browser's own title tooltips, which wait, stand still and look like the system, not Finna) */
  function hintShow(b, ev) {
    if (GL.btn && GL.btn !== b) glHide();
    var t = glTip(); t.innerHTML = '<span>' + A.esc(b.getAttribute('data-hint')) + '</span>';
    GL.btn = b; GL.pinned = false; b.setAttribute('aria-describedby', 'gl-tip');
    tipPlace(b, ev); t.classList.add('on');
  }
  function hintAt(ev) { return ev.target && ev.target.closest ? ev.target.closest('[data-hint]') : null; }
  document.addEventListener('pointerover', function (ev) { var b = hintAt(ev); if (b && ev.pointerType === 'mouse') hintShow(b, ev); });
  document.addEventListener('pointerout', function (ev) { var b = hintAt(ev); if (b && ev.pointerType === 'mouse' && !b.contains(ev.relatedTarget)) glHide(); });
  document.addEventListener('focusin', function (ev) { var b = hintAt(ev); if (b && b.matches(':focus-visible')) hintShow(b); });
  document.addEventListener('focusout', function (ev) { if (hintAt(ev)) glHide(); });
  document.addEventListener('click', function (ev) {
    var b = ltAt(ev); if (!b || !CURR) return;
    var pg = (items(CURR.base).filter(function (x) { return x.key === currentKey(CURR); })[0] || {}).label;
    V.LT_FROM = { href: location.hash, label: pg && pg !== 'Suggested' && pg !== 'Overview' && pg !== 'All documents' ? pg : placeName(CURR.base) };
  });
  window.addEventListener('scroll', function () { if (GL.btn) glHide(); }, { passive: true });
  window.addEventListener('resize', function () { if (GL.btn) glHide(); });
  function render() {
    glHide();
    var h = location.hash.replace(/^#/, ''), c = canonical(h);
    if (c !== h) { location.replace('#' + c); return; }
    var r = parse(c); CURR = r;
    if (walkOn() && r.base !== 'home') walkEnd(true);   /* the walk is Home's alone */
    OVER.mb = OVER.sm = OVER.menu = OVER.desks = false;
    if (DESK_KEYS.indexOf(r.base) > -1) setPref('finna-last-desk', r.base);
    /* Freya's page is only the prompt: arriving there starts a new conversation; the last one
       is kept in Recent. A conversation of her own opens at /freya/c/:id. */
    if (r.base === 'freya' && !r.sub && FY.convoId) { FY.thread = []; FY.convoId = null; }
    if (r.base === 'freya' && r.sub === 'c') openConvo(r.rest[0]);
    if (r.base === 'freya' && r.sub !== 'map' && FY.open) ACT['fy-close']();
    if (r.base !== 'learn') V.LT_FROM = null;
    if (!(r.base === 'learn' && r.sub === 'identity' && /^(quest|side)$/.test(r.rest[0] || ''))) V.IDQ = null;
    if (!(r.base === 'learn' && r.sub === 'identity' && r.rest[0] === 'checkup')) V.IDCU = null;
    if (!(r.base === 'learn' && r.rest[1] === 'test')) V.TEST = null;
    if (!(r.base === 'learn' && r.rest[1] === 'done')) V.CERE_NOW = null;
    lmVeilClose();
    /* the Learn tags: the page's own, beside its title, is found first so it gets the topic the
       page is most about; the sections place theirs as they are drawn */
    V.ltReset();
    var ltp = V.ltPage(r);
    /* which voice the page is in, for the colour roles (app.css): a desk's work is blue, Freya black, Learn
       green. The phone's section keys sit outside the page, so they carry it too */
    var zone = DESK_KEYS.indexOf(r.base) > -1 ? 'desk' : r.base, skz = document.getElementById('section-keys');
    VIEW.setAttribute('data-zone', zone);
    if (skz) skz.setAttribute('data-zone', zone);
    /* a desk not open yet (the tutorial opens them one at a time) shows its peek */
    var peek = DESK_KEYS.indexOf(r.base) > -1 && !A.deskOpen(r.base);
    VIEW.innerHTML = peek ? V.deskPeek(r.base) : V[r.base](r);
    if (ltp && !peek) {
      var h1 = VIEW.querySelector('.page-head .title');
      if (h1) {
        var row = h1.parentNode.classList.contains('title-row') ? h1.parentNode : null;
        if (!row) { row = document.createElement('div'); row.className = 'title-row'; h1.parentNode.insertBefore(row, h1); row.appendChild(h1); }
        row.insertAdjacentHTML('beforeend', ltp);
      }
    }
    drawNav(r); frame(); paintLocks(); drawKnow(); V.fgPlay(VIEW);
    layoutTv(); layoutWp(); layoutTrees(); layoutScenes(c !== CUR); layoutSims(); layoutLearn();
    prepTables(VIEW);
    if (window.Finna) window.Finna.init(VIEW);
    /* every table cell carries its column's name, so on a phone a row can stand as a
       list row — the name beside the value — instead of a table swiped sideways */
    VIEW.querySelectorAll('.data-table table').forEach(function (t) {
      var hs = Array.prototype.map.call(t.querySelectorAll('thead th'), thName), gs = Array.prototype.map.call(t.querySelectorAll('thead th'), function (th) { return th.getAttribute('data-gl'); });
      t.querySelectorAll('tbody tr, tfoot tr').forEach(function (tr) {
        Array.prototype.forEach.call(tr.children, function (td, i) { if (hs[i]) td.setAttribute('data-label', hs[i]); });
      });
      /* on a phone the headers are gone, so a column's "i" tag moves onto its name in the row: the
         first row shown carries it, once, not every row (glFirst) */
      t.querySelectorAll('tbody tr').forEach(function (tr) {
        Array.prototype.forEach.call(tr.children, function (td, i) {
          if (!gs[i] || !hs[i] || td.querySelector(':scope > .td-lab')) return;
          td.insertAdjacentHTML('afterbegin', '<span class="td-lab">' + A.esc(hs[i]) + V.glI(gs[i]) + '</span>'); td.classList.add('has-lab');
        });
      });
      glFirst(t);
    });
    finishTables(VIEW); layoutLines(); wireNotify(); drawFreyaPage();
    if (c !== CUR) { toY(0); if (CUR) WORK.focus({ preventScroll: true }); CUR = c; }
    if (r.base === 'vault' && r.sub === 'doc' && A.doc(r.rest[0])) docSheet(r.rest[0]);
    fyContext(r);
    var pg = (items(r.base).filter(function (x) { return x.key === currentKey(r); })[0] || {}).label;
    /* the pages opened last, for Home's "Pick up where you left off" */
    if (r.base !== 'home' && r.base !== 'freya' && !(r.base === 'vault' && r.sub === 'doc')) {
      var lp = r.base === 'learn' && r.sub === 'path' ? A.learnPath(r.rest[0]) : null;
      var lbl = placeName(r.base) + (lp ? (r.rest[1] === 'quest' ? ' · Quest ' + r.rest[2] : ' · ' + lp.title) : pg && pg !== 'Suggested' && pg !== 'Overview' && pg !== 'All documents' ? ' · ' + pg : '');
      var rec = (S().recent || []).filter(function (x) { return x.path !== c; }); rec.unshift({ path: c, label: lbl }); S().recent = rec.slice(0, 6); A.save();
    }
    document.title = (pg && pg !== 'Suggested' && pg !== 'Overview' ? pg + ' · ' : '') + (placeName(r.base) || 'Finna') + ' · ' + (S().household.name ? S().household.name.replace(/^The /, '') : 'Finna');
    watchTitle(r);
    lxAfterRender(r, c);
    walkAfterRender(r);
    if (window.FT && window.FT.onRender) window.FT.onRender(r);   /* THE TUTORIAL (freya-tutorial.js) follows every page */
  }
  window.addEventListener('hashchange', render);
  /* LEARN (the concept, prompts 12–14): a quest, the test or the ceremony is a veil over the path's page, which
     holds still behind it (the tab bar steps aside on a phone); the Map's address lands on its domain */
  function lxHold() {
    var on = !!VIEW.querySelector('[data-qz], .lx-film');
    if (on) document.documentElement.setAttribute('data-qz', ''); else document.documentElement.removeAttribute('data-qz');
    if (LENIS) { if (on) LENIS.stop(); else if (sheet.hidden && !walkOn() && !BODY.hasAttribute('data-menu')) LENIS.start(); }
    return on;
  }
  function lxAfterRender(r, c) {
    var on = lxHold();
    if (on) { var dlg = VIEW.querySelector('[data-qz] [role="dialog"]'); if (dlg) dlg.focus({ preventScroll: true }); }
    if (r.base === 'learn' && r.sub === 'map' && r.rest[0]) {
      var d = VIEW.querySelector('[data-dom="' + r.rest[0] + '"]');
      if (d) requestAnimationFrame(function () { var top = d.getBoundingClientRect().top + (LENIS ? LENIS.scroll : window.scrollY) - (layout() === 'phone' ? 72 : 32); toY(Math.max(0, top)); });
    }
  }
  /* THE COMPACT BAR (prompt 9): the place's icon and name at the top of a phone, once its large title has gone.
     The section keys of a place with pages (the Vault, Freya, Profile) sit under the title, on the page */
  var TITLE_IO = null;
  function watchTitle(r) {
    if (TITLE_IO) TITLE_IO.disconnect();
    var t = VIEW.querySelector('.page-head .title, .of-head .title, .dp-head .title, h1');
    var keys = document.getElementById('section-keys');
    VIEW.querySelectorAll('.section-keys.in-page').forEach(function (n) { n.remove(); });
    if (r && DESK_KEYS.indexOf(r.base) > -1 && r.sub && A.deskOpen(r.base)) { var sc = VIEW.querySelector('.screen'); if (sc) sc.insertAdjacentHTML('afterbegin', '<a class="pg-back" href="#/' + r.base + '">' + A.ic('chevron', 'pg-back-ic') + e(A.DESKS[r.base].noun) + '</a>'); }
    if (keys && keys.innerHTML && r && ['vault', 'freya', 'profile', 'learn'].indexOf(r.base) > -1 && !(r.base === 'learn')) {
      var ph = VIEW.querySelector('.page-head') || (t && t.parentNode);
      if (ph) ph.insertAdjacentHTML('afterend', '<nav class="section-keys in-page" aria-label="' + e(keys.getAttribute('aria-label') || 'Pages') + '">' + keys.innerHTML + '</nav>');
    }
    if (!t || !('IntersectionObserver' in window)) { BODY.setAttribute('data-compact', 'on'); return; }
    BODY.removeAttribute('data-compact');
    TITLE_IO = new IntersectionObserver(function (es) { var en = es[es.length - 1]; if (en.isIntersecting) BODY.removeAttribute('data-compact'); else BODY.setAttribute('data-compact', 'on'); }, { rootMargin: '-56px 0px 0px 0px' });
    TITLE_IO.observe(t);
  }
  var LAST_L = layout();
  window.addEventListener('resize', function () { var L = layout(); if (L !== LAST_L) { LAST_L = L; OVER.mb = OVER.sm = OVER.menu = OVER.desks = false; frame(); if (CURR) fyContext(CURR); } hideTip(); });

  /* the treemaps are laid out once their box has a size, and again (without motion) whenever the
     box changes — a window resize, the menu going to icons only, a phone turning */
  var TV_RO = [];
  var WP_RO = [];
  function layoutWp() {
    WP_RO.forEach(function (o) { o.disconnect(); }); WP_RO = [];
    [['[data-wp]', V.wpLayout], ['[data-mt]', V.mtLayout]].forEach(function (p) {
      Array.prototype.forEach.call(WORK.querySelectorAll(p[0]), function (box) {
        p[1](box); if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { p[1](box); });
        if (window.ResizeObserver) { var last = box.clientWidth, ro = new ResizeObserver(function () { if (box.clientWidth !== last) { last = box.clientWidth; p[1](box); } }); ro.observe(box); WP_RO.push(ro); }
      });
    });
  }
  function layoutTv() {
    TV_RO.forEach(function (o) { o.disconnect(); }); TV_RO = [];
    Array.prototype.forEach.call(WORK.querySelectorAll('[data-tv]'), function (box) {
      V.tvLayout(box, false);
      if (window.ResizeObserver) { var last = box.clientWidth, ro = new ResizeObserver(function () { if (box.clientWidth !== last) { last = box.clientWidth; V.tvLayout(box, false); } }); ro.observe(box); TV_RO.push(ro); }
    });
    Array.prototype.forEach.call(WORK.querySelectorAll('[data-tvp]'), function (box) {
      V.tvPlain(box, false);
      if (window.ResizeObserver) { var last = box.clientWidth, ro = new ResizeObserver(function () { if (box.clientWidth !== last) { last = box.clientWidth; V.tvPlain(box, false); } }); ro.observe(box); TV_RO.push(ro); }
    });
  }

  /* ── TABLES (28 Sep 2026): sorting, the phone's sort list, the sums in the foot, the map in
     one line. The collection (search, filters, tags, count, pager) is the brand's, in
     brand/components.js, which pages rows in the order it finds them: so rows are put in their
     sorted order BEFORE it is wired (prepTables), and a new order re-wires a fresh copy of the
     collection with its search and filters kept (resort). Sorting belongs in the brand's
     collection itself; until the design repo has it, it lives here. */
  var TSORT = {};
  var SORT_WORDS = { num: ['smallest first', 'largest first'], date: ['oldest first', 'newest first'], text: ['A to Z', 'Z to A'], status: ['up to date first', 'needs you first'] };
  function thName(th) { return (th.getAttribute('data-name') || th.textContent).trim(); }
  function sortWords(th, dir) { var w = (th.getAttribute('data-words') || '').split('|'); if (w.length < 2) w = SORT_WORDS[th.getAttribute('data-sort')] || SORT_WORDS.text; return dir === 'asc' ? w[0] : w[1]; }
  function sortState(dt) {
    var key = dt.getAttribute('data-sort-key'), ths = Array.prototype.slice.call(dt.querySelectorAll('thead th'));
    if (TSORT[key] && ths[TSORT[key].i] && ths[TSORT[key].i].hasAttribute('data-sort')) return TSORT[key];
    for (var i = 0; i < ths.length; i++) if (ths[i].hasAttribute('data-on')) return { i: i, dir: ths[i].getAttribute('data-on'), drawn: true };
    return null;
  }
  function sortRows(dt, st) {
    var tb = dt.querySelector('tbody'), th = dt.querySelectorAll('thead th')[st.i], type = th.getAttribute('data-sort');
    var rows = Array.prototype.slice.call(tb.children).map(function (tr, n) {
      var td = tr.children[st.i], v = td ? td.getAttribute('data-v') : null;
      if (v == null && td) v = td.textContent.trim();
      if (v === '' || v == null) v = null; else if (type === 'num' || type === 'status') v = +v; else v = String(v).toLowerCase();
      var name = tr.children[0] ? (tr.children[0].getAttribute('data-v') || tr.children[0].textContent).toLowerCase() : '';
      return { tr: tr, v: v, name: name, n: n };
    });
    rows.sort(function (a, b) {
      if (a.v == null && b.v == null) return a.name < b.name ? -1 : 1;
      if (a.v == null) return 1; if (b.v == null) return -1;           /* not recorded: last, either way round */
      var c = a.v < b.v ? -1 : a.v > b.v ? 1 : 0; if (st.dir === 'desc') c = -c;
      return c || (a.name < b.name ? -1 : a.name > b.name ? 1 : a.n - b.n); /* ties keep their order, by name */
    });
    rows.forEach(function (r) { tb.appendChild(r.tr); });
  }
  /* the headers: the name is the key; the mark is always there, so nothing waits for a hover */
  function drawHeads(dt, st) {
    Array.prototype.forEach.call(dt.querySelectorAll('thead th[data-sort]'), function (th, i2) {
      var idx = Array.prototype.indexOf.call(th.parentNode.children, th), on = st && st.i === idx, dir = on ? st.dir : null;
      var next = on ? (dir === 'asc' ? 'desc' : 'asc') : th.getAttribute('data-first'), name = thName(th);
      th.setAttribute('data-name', name);
      if (on) th.setAttribute('aria-sort', dir === 'asc' ? 'ascending' : 'descending'); else th.removeAttribute('aria-sort');
      var icon = A.ic(on ? (dir === 'asc' ? 'top' : 'down') : 'sort', 'th-ic');
      th.innerHTML = '<button class="th-sort' + (on ? ' on' : '') + '" type="button" data-act="th-sort" data-col="' + idx + '">' + (th.classList.contains('num') ? icon + e(name) : e(name) + icon) +
        '<span class="sr">' + (on ? ', sorted ' + sortWords(th, dir) : '') + '. Select to sort ' + sortWords(th, next) + '</span></button>' +
        (th.hasAttribute('data-gl') ? V.glI(th.getAttribute('data-gl')) : '');
    });
  }
  function prepTables(root) {
    Array.prototype.forEach.call(root.querySelectorAll('.data-table[data-sort-key]'), function (dt) {
      var st = sortState(dt); if (st && !st.drawn) sortRows(dt, st);
      drawHeads(dt, st);
      /* the phone has no headers (a row stands as a record row), so the sort is one list in words */
      var coll = dt.closest('[data-collection]'), bar = coll && coll.querySelector('.toolbar'), sel = document.createElement('select');
      sel.className = 'input tb-sortsel'; sel.setAttribute('data-sort-select', dt.getAttribute('data-sort-key')); sel.setAttribute('aria-label', 'Sort');
      Array.prototype.forEach.call(dt.querySelectorAll('thead th[data-sort]'), function (th) {
        var idx = Array.prototype.indexOf.call(th.parentNode.children, th), first = th.getAttribute('data-first');
        [first, first === 'asc' ? 'desc' : 'asc'].forEach(function (d) { var o = document.createElement('option'); o.value = idx + ':' + d; o.textContent = thName(th) + ', ' + sortWords(th, d); sel.appendChild(o); });
      });
      if (st) sel.value = st.i + ':' + st.dir;
      if (bar) bar.insertBefore(sel, bar.querySelector('.result-count'));
      else { var sb = document.createElement('div'); sb.className = 'sort-bar'; sb.appendChild(sel); dt.parentNode.insertBefore(sb, dt); }
    });
  }
  /* which rows a collection shows: the brand's own test (search, then every filter), without the pager */
  function collHits(coll, skip) {
    var q = coll.querySelector('[data-search-input]'), fs = Array.prototype.slice.call(coll.querySelectorAll('[data-filter]'));
    return Array.prototype.filter.call(coll.querySelectorAll('tbody > tr'), function (tr) {
      if (q && q.value && (tr.getAttribute('data-text') || tr.textContent).toLowerCase().indexOf(q.value.toLowerCase()) === -1) return false;
      return fs.every(function (f) { var k = f.getAttribute('data-filter'); return k === skip || !f.value || tr.getAttribute('data-' + k) === f.value; });
    });
  }
  /* after the collection draws: the order in words beside the count, the sum in the foot, the strip */
  function collDrawn(coll) {
    var dt = coll.querySelector('.data-table[data-sort-key]'), st = dt && sortState(dt), cnt = coll.querySelector('[data-count]');
    Array.prototype.forEach.call(coll.querySelectorAll('.data-table table'), glFirst);
    if (st && cnt && cnt.textContent.indexOf(' · ') < 0) { var th = dt.querySelectorAll('thead th')[st.i]; cnt.textContent += ' · ' + thName(th).toLowerCase() + ', ' + sortWords(th, st.dir); }
    var foot = coll.querySelector('[data-foot]');
    if (foot) {
      var hits = collHits(coll), all = coll.querySelectorAll('tbody > tr').length, whole = +(dt && dt.getAttribute('data-whole')) || 0;
      var sum = hits.reduce(function (s2, tr) { return s2 + (+tr.getAttribute('data-amt') || 0); }, 0), noun = coll.getAttribute('data-noun') || 'lines';
      foot.hidden = !hits.length;
      var lab = foot.querySelector('[data-foot-label]'), sm = foot.querySelector('[data-foot-sum]'), sh = foot.querySelector('[data-foot-share]');
      if (lab) lab.innerHTML = (hits.length === all ? (noun === 'debts' ? 'Everything you owe' : 'Everything you own') : 'These ' + hits.length) + '<span class="cell-sub">' + (hits.length === all ? all + ' ' + noun : 'of ' + all + ' ' + noun) + '</span>';
      if (sm) sm.textContent = A.money(sum);
      if (sh) { var f = whole ? sum / whole : 0; sh.innerHTML = '<span class="tb-bar" aria-hidden="true"><i style="--w:' + Math.min(100, f * 100).toFixed(2) + '%"></i></span><span class="tb-pct">' + A.pct(f, 1) + '</span>'; }
      Array.prototype.forEach.call(foot.querySelectorAll('td'), function (td, i) { var h = dt.querySelectorAll('thead th')[i]; if (h) td.setAttribute('data-label', thName(h)); });
    }
    Array.prototype.forEach.call(coll.querySelectorAll('[data-strip]'), drawStrip);
  }
  /* the first row a table shows carries its columns' "i" tags on a phone */
  function glFirst(t) {
    var rows = t.querySelectorAll('tbody > tr'), done = false;
    Array.prototype.forEach.call(rows, function (tr) { var on = !done && !tr.hidden && tr.style.display !== 'none'; tr.classList.toggle('gl-first', on); if (on) done = true; });
  }
  function finishTables(root) {
    Array.prototype.forEach.call(root.querySelectorAll('[data-collection]'), function (coll) {
      coll.addEventListener('finna:collection', function () { collDrawn(coll); });
      collDrawn(coll);
    });
    STRIP_RO.forEach(function (o) { o.disconnect(); }); STRIP_RO = [];
    Array.prototype.forEach.call(root.querySelectorAll('[data-strip] .tb-strip'), function (box) {
      if (!window.ResizeObserver) return;
      var last = box.clientWidth, ro = new ResizeObserver(function () { if (box.clientWidth !== last) { last = box.clientWidth; drawStrip(box.closest('[data-strip]')); } });
      ro.observe(box); STRIP_RO.push(ro);
    });
  }
  /* a new order: the rows travel to their places; in a collection, a fresh copy is wired with its
     search and filters kept, on its first page */
  function resort(dt, st) {
    var key = dt.getAttribute('data-sort-key'); TSORT[key] = { i: st.i, dir: st.dir };
    var motion = !matchMedia('(prefers-reduced-motion: reduce)').matches && !!document.body.animate, before = {};
    if (motion) Array.prototype.forEach.call(dt.querySelectorAll('tbody > tr'), function (tr) { if (!tr.hidden) before[tr.getAttribute('data-row')] = tr.getBoundingClientRect().top; });
    var coll = dt.closest('[data-collection]');
    sortRows(dt, st); drawHeads(dt, TSORT[key]);
    if (coll) {
      Array.prototype.forEach.call(coll.querySelectorAll('tbody > tr'), function (tr) { tr.hidden = false; });
      var fresh = coll.cloneNode(true);
      fresh.removeAttribute('data-wired'); Array.prototype.forEach.call(fresh.querySelectorAll('[data-wired]'), function (x) { x.removeAttribute('data-wired'); });
      coll.parentNode.replaceChild(fresh, coll);
      if (window.Finna) window.Finna.init(fresh.parentNode);
      fresh.addEventListener('finna:collection', function () { collDrawn(fresh); });
      collDrawn(fresh); finishStripRO(fresh);
      dt = fresh.querySelector('.data-table[data-sort-key]');
    }
    var sel = document.querySelector('[data-sort-select="' + key + '"]'); if (sel) sel.value = st.i + ':' + st.dir;
    glFirst(dt.querySelector('table'));
    if (motion) Array.prototype.forEach.call(dt.querySelectorAll('tbody > tr'), function (tr, i) {
      if (tr.hidden) return;
      var was = before[tr.getAttribute('data-row')], now = tr.getBoundingClientRect().top;
      if (was != null) { if (Math.abs(was - now) > 1) tr.animate([{ transform: 'translateY(' + (was - now) + 'px)' }, { transform: 'none' }], { duration: 460, easing: 'cubic-bezier(.3,.8,.25,1)' }); }
      else tr.animate([{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'none' }], { duration: 360, delay: 60 + i * 30, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'backwards' });
    });
    return dt;
  }
  var STRIP_RO = [];
  function finishStripRO(coll) {
    Array.prototype.forEach.call(coll.querySelectorAll('[data-strip] .tb-strip'), function (box) {
      if (!window.ResizeObserver) return;
      var last = box.clientWidth, ro = new ResizeObserver(function () { if (box.clientWidth !== last) { last = box.clientWidth; drawStrip(box.closest('[data-strip]')); } });
      ro.observe(box); STRIP_RO.push(ro);
    });
  }
  /* THE MAP IN ONE LINE: the parts of the rows the other filters leave, sized by value, in the map's
     own steps (the owed tones over debts); a part too narrow for its name drops it, measured, and is
     named in the "Also here" line. Selecting a part sets the collection's filter; again clears it. */
  function drawStrip(wrap) {
    if (!wrap) return;
    var coll = wrap.closest('[data-collection]'), field = wrap.getAttribute('data-strip'), f = coll.querySelector('[data-filter="' + field + '"]'), box = wrap.querySelector('.tb-strip'), also = wrap.querySelector('.tv-more');
    if (!f || !box.clientWidth) return;
    var by = {}, names = {}; Array.prototype.forEach.call(f.options, function (o) { names[o.value || o.textContent] = o.textContent; });
    collHits(coll, field).forEach(function (tr) { var k = tr.getAttribute('data-' + field), v = +tr.getAttribute('data-amt') || 0; if (v > 0) by[k] = (by[k] || 0) + v; });
    var parts = Object.keys(by).map(function (k) { return { k: k, v: by[k] }; }).sort(function (a, b) { return b.v - a.v; }), tot = parts.reduce(function (s2, x) { return s2 + x.v; }, 0);
    var owe = wrap.getAttribute('data-tone') === 'owe', ramp = owe ? V.TV_OWE : V.TV_RAMP, ink = owe ? null : V.TV_INK;
    wrap.hidden = parts.length < 2 && !f.value;
    box.innerHTML = parts.map(function (x, i) {
      var step = Math.min(i, ramp.length - 1), lbl = names[x.k] || x.k; x.step = step;
      return '<button type="button" class="tb-part' + (f.value === x.k ? ' on' : '') + (f.value && f.value !== x.k ? ' off' : '') + '" data-act="strip-part" data-k="' + e(x.k) + '" aria-pressed="' + (f.value === x.k) + '" aria-label="' + e(lbl + ', ' + A.money(x.v) + ', ' + A.pct(x.v / tot, 1)) + '"' +
        ' style="flex:' + x.v.toFixed(0) + ' 1 0;--tv-c:var(' + ramp[step] + ');--tv-ink:var(' + (ink ? ink[step] : '--white') + ')"><span class="tb-pn">' + e(lbl) + '</span><span class="tb-pv">' + A.short(x.v) + '</span></button>';
    }).join('');
    var small = [];
    Array.prototype.forEach.call(box.children, function (b, i) {
      var room = b.clientWidth - 24, pn = b.querySelector('.tb-pn'), pv = b.querySelector('.tb-pv');
      if (pn.scrollWidth > room) { pn.remove(); small.push(parts[i]); }
      if (pv.scrollWidth > room) pv.remove();
    });
    also.innerHTML = small.length ? '<span class="tv-more-h">Also here</span>' + small.map(function (x) {
      return '<button class="tv-more-i" type="button" data-act="strip-part" data-k="' + e(x.k) + '" aria-pressed="' + (f.value === x.k) + '"><i style="background:var(' + ramp[x.step] + ')"></i>' + e(names[x.k] || x.k) + ' <b class="num">' + A.short(x.v) + ' · ' + A.pct(x.v / tot, 1) + '</b></button>';
    }).join('') : '';
    also.hidden = !small.length;
  }

  /* ── THE LINE: the lived part of the rail runs from the top to today ── */
  var LN_RO = [];
  function sizeLived(ol) {
    var now = ol.querySelector('[data-now]'), lv = ol.querySelector('[data-lived]'); if (!now || !lv) return;
    lv.style.height = Math.max(0, now.offsetTop + now.offsetHeight / 2 - 8) + 'px';
  }
  function segThumbs() {
    Array.prototype.forEach.call(VIEW.querySelectorAll('[data-tl-seg]'), function (seg) {
      var on = seg.querySelector('[aria-pressed="true"]'); if (on) { seg.style.setProperty('--x', on.offsetLeft + 'px'); seg.style.setProperty('--w', on.offsetWidth + 'px'); }
    });
  }
  function layoutLines() {
    segThumbs(); if (document.fonts && document.fonts.ready) document.fonts.ready.then(segThumbs);
    LN_RO.forEach(function (o) { o.disconnect(); }); LN_RO = [];
    Array.prototype.forEach.call(VIEW.querySelectorAll('[data-line]'), function (ol) {
      sizeLived(ol);
      if (window.ResizeObserver) { var ro = new ResizeObserver(function () { sizeLived(ol); }); ro.observe(ol); LN_RO.push(ro); }
    });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { Array.prototype.forEach.call(VIEW.querySelectorAll('[data-line]'), sizeLived); });
  }

  /* the family tree's lines, drawn once its nodes have a size and again when the box changes */
  var FT_RO = null;
  function layoutTrees() {
    if (FT_RO) { FT_RO.disconnect(); FT_RO = null; }
    var boxes = Array.prototype.slice.call(VIEW.querySelectorAll('[data-ftree]')); if (!boxes.length) return;
    function all() { boxes.forEach(function (b) { V.layoutTree(b); }); }
    all(); if (document.fonts && document.fonts.ready) document.fonts.ready.then(all);
    if (window.ResizeObserver) { FT_RO = new ResizeObserver(all); boxes.forEach(function (b) { FT_RO.observe(b); }); }
  }

  /* the scenes at the top of a desk page: drawn once their box has a size, and again, still, when
     it changes. Their motion plays only on arriving at the page, never on a redraw (28 Sep 2026). */
  var SC_RO = [];
  function layoutScenes(fresh) {
    SC_RO.forEach(function (o) { o.disconnect(); }); SC_RO = [];
    var boxes = Array.prototype.slice.call(VIEW.querySelectorAll('[data-scene]'));
    function go() {
      boxes.forEach(function (box) {
        V.drawScene(box);
        if (window.ResizeObserver) { var last = box.clientWidth, ro = new ResizeObserver(function () { if (box.clientWidth !== last) { last = box.clientWidth; V.drawScene(box); } }); ro.observe(box); SC_RO.push(ro); }
      });
      if (fresh) V.playScenes(VIEW);
    }
    if (document.fonts && document.fonts.status !== 'loaded') document.fonts.ready.then(go); else go();
  }

  /* the what-if tools (28 Sep 2026): each is wired once it is on the page, and redrawn, still, when
     its box changes width — a window resize, the menu folding, a phone turning */
  var SIM_RO = [];
  function layoutSims() {
    SIM_RO.forEach(function (o) { o.disconnect(); }); SIM_RO = [];
    var boxes = Array.prototype.slice.call(VIEW.querySelectorAll('[data-sim]')); if (!boxes.length) return;
    function go() {
      boxes.forEach(function (box) {
        V.simMount(box);
        if (window.ResizeObserver) { var last = box.clientWidth, ro = new ResizeObserver(function () { if (box.clientWidth !== last) { last = box.clientWidth; V.simDraw(box); } }); ro.observe(box); SIM_RO.push(ro); }
      });
    }
    if (document.fonts && document.fonts.status !== 'loaded') document.fonts.ready.then(go); else go();
  }

  /* ── small things ────────────────────────────────────────────────────── */
  var toastT;
  function toast(msg) { var t = document.getElementById('toast'); t.textContent = msg; t.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(function () { t.classList.remove('on'); }, 2400); }
  function commit(msg, logLine) { if (logLine) A.log(logLine); A.save(); render(); if (msg) toast(msg); }
  var lastFocus = null;
  function gxRedraw() {
    var box = VIEW.querySelector('.gx-plot'); if (box) V.drawScene(box);
    var det = VIEW.querySelector('[data-gx-detail]'); if (det) det.innerHTML = V.goalDetail();
  }
  function openSheet(eyebrow, title, body) {
    sheet.innerHTML = '<div class="sheet-head"><div class="intro"><span class="eyebrow">' + eyebrow + '</span><h2 class="title" id="sheet-title">' + title + '</h2></div>' +
      '<button class="icon-key" type="button" data-act="sheet-close" aria-label="Close">' + A.ic('close') + '</button></div><div class="sheet-body">' + body + '</div>';
    var rf = sheet.querySelector('[data-rx-foot]'); if (rf) rxFoot(rf.closest('form'));
    lastFocus = document.activeElement; scrim.hidden = false; sheet.hidden = false; if (LENIS) LENIS.stop();
    requestAnimationFrame(function () { scrim.classList.add('on'); sheet.classList.add('on'); });
    setTimeout(function () { var f = sheet.querySelector('.sheet-body input, .sheet-body select, .sheet-body textarea, .sheet-body button') || sheet.querySelector('.icon-key'); if (f) f.focus(); }, 80);
  }
  function closeSheet() {
    sheet.classList.remove('on'); scrim.classList.remove('on'); if (LENIS) LENIS.start();
    setTimeout(function () { sheet.hidden = true; scrim.hidden = true; sheet.innerHTML = ''; }, 250);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  function row(label, control, help, err) {
    return '<div class="form-row' + (control.indexOf('class="span"') > -1 ? ' span' : '') + '"><label class="label" for="' + (control.match(/id="([^"]+)"/) || [])[1] + '">' + label + '</label>' + control +
      (help ? '<span class="help">' + help + '</span>' : '') + (err ? '<span class="error">' + err + '</span>' : '') + '</div>';
  }
  function field(id, name, type, val, extra) { return '<input class="input" id="' + id + '" name="' + name + '" type="' + type + '" value="' + e(val == null ? '' : val) + '"' + (extra || '') + '>'; }
  /* THE INPUT (28 Sep 2026): the unit sits in the field; an amount's digits group as they are typed
     and its short form is said under it, so a missing zero shows; the phone's keyboard follows the
     kind (numbers for amounts, a decimal point for rates). */
  var GROUP = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });
  function grouped(v) { var n = num(v); return n == null ? '' : GROUP.format(Math.round(n)); }
  function moneyField(id, name, val, extra) {
    return '<div class="fx-affix"><span class="fx-pre" aria-hidden="true">$</span><input class="input" id="' + id + '" name="' + name + '" type="text" inputmode="numeric" autocomplete="off" data-money value="' + e(grouped(val)) + '"' + (extra || '') + '></div>';
  }
  function pctField(id, name, val, extra) {
    return '<div class="fx-affix"><input class="input" id="' + id + '" name="' + name + '" type="text" inputmode="decimal" autocomplete="off" value="' + e(val == null ? '' : val) + '"' + (extra || '') + '><span class="fx-suf" aria-hidden="true">%</span></div>';
  }
  function moneyRow(label, id, name, val, extra, err, span, was) {
    return '<div class="form-row' + (span ? ' span' : '') + '"><label class="label" for="' + id + '">' + label + '</label>' + moneyField(id, name, val, (extra || '') + (was != null ? ' data-was="' + was + '"' : '') + ' aria-describedby="' + id + '-h"') +
      '<span class="help" id="' + id + '-h" data-money-help>' + moneyHelp(num(val), was) + '</span>' + (err ? '<span class="error">' + err + '</span>' : '') + '</div>';
  }
  function words(v) {
    if (v >= 1e9) return (v / 1e9).toFixed(2).replace(/\.?0+$/, '') + ' billion';
    if (v >= 1e6) return (v / 1e6).toFixed(2).replace(/\.?0+$/, '') + ' million';
    return (v / 1e3).toFixed(v % 1e3 ? 1 : 0).replace(/\.0$/, '') + ' thousand';
  }
  function moneyHelp(v, was) {
    if (v == null) return 'In ' + A.curWords() + '. The short form shows here as you type.';
    var t = A.short(v) + (v >= 1000 ? ' · ' + words(v) : '');
    if (was != null && was !== '' && v !== +was && +was) t += ' · ' + (v > +was ? 'up ' : 'down ') + A.money(Math.abs(v - was)) + ' (' + (v > +was ? '+' : '−') + A.pct(Math.abs(v - was) / was, 1) + ')';
    return t;
  }
  /* the digits group as they are typed; the caret keeps its place among the digits */
  function groupMoney(input) {
    var pos = input.selectionStart == null ? input.value.length : input.selectionStart;
    var before = input.value.slice(0, pos).replace(/[^\d]/g, '').length, d = input.value.replace(/[^\d]/g, '').replace(/^0+(?=\d)/, '');
    var out = d ? GROUP.format(+d) : ''; if (out === input.value) return;
    input.value = out;
    var n = 0, q = 0; while (q < out.length && n < before) { if (/\d/.test(out[q])) n++; q++; }
    if (document.activeElement === input) input.setSelectionRange(q, q);
  }
  /* WHAT IT CHANGES: a new value is never typed into the dark. Net worth before and after, and the
     class it sits in against the household's own range. Nothing is traded; the old row stays. */
  function uxPreview(id, v) {
    var l = A.line(id), isA = !!A.asset(id), was = A.amount(id), d = v == null ? 0 : v - was, nd = isA ? d : -d, t = A.totals(), c = A.cur(id);
    var h = '<span class="eyebrow">What it changes</span><div class="ux-nw"><span>Net worth</span><b>' + A.money(t.net) + (nd ? ' <span class="ux-to">→</span> ' + A.money(t.net + nd) : '') + '</b><small>' + (nd ? (nd > 0 ? '+' : '−') + A.money(Math.abs(nd)) : 'No change yet') + '</small></div>';
    var mix = isA ? (l.mix || A.DEFAULT_MIX[l.cls] || {}) : {}, inv = A.investable(), keys = Object.keys(mix).filter(function (k) { return inv.by[k] != null && mix[k] > 0; });
    var dr = null, k = null;
    if (isA && A.isInvestable(l) && A.policy() && keys.length) { k = keys.sort(function (x, y) { return mix[y] - mix[x]; })[0]; dr = A.drift().filter(function (x) { return x.k === k; })[0]; }
    if (dr) {
      var incl = keys.reduce(function (s2, m) { return s2 + mix[m]; }, 0), now = inv.total ? inv.by[k] / inv.total : 0, nx = (inv.by[k] + d * mix[k]) / (inv.total + d * incl), ap = nx * 100;
      var out = ap > dr.max ? 'above' : ap < dr.min ? 'below' : '', at = Math.max(0, Math.min(100, ap)).toFixed(2);
      h += '<div class="ux-band bands"><div class="band-row"><div class="band-name">' + e(dr.label) + '<small>' + (d ? (now * 100).toFixed(1) + '% → ' + ap.toFixed(1) + '%' : ap.toFixed(1) + '% of what you invest') + '</small></div>' +
        '<div class="band-track" aria-hidden="true"><div class="band-range" style="left:' + dr.min + '%;width:' + (dr.max - dr.min) + '%"></div><div class="band-target" style="left:' + dr.target + '%"></div>' +
        (d ? '<div class="band-was" style="left:' + (now * 100).toFixed(2) + '%"></div>' : '') + '<div class="band-actual' + (out ? ' out' : '') + '" data-ux-mark style="left:' + at + '%"></div></div>' +
        '<div class="band-val' + (out ? ' out' : '') + '"><b>' + ap.toFixed(1) + '%</b><small>range ' + dr.min + '–' + dr.max + '%</small><span class="status-label ' + (out ? 'attention">' + (out === 'above' ? 'Over' : 'Under') : 'ok">Inside') + '</span></div></div></div>';
    } else if (isA) {
      h += '<div class="ux-nw"><span>' + e(A.CLS[l.cls]) + ', of what you own</span><b>' + A.pct(t.owned ? was / t.owned : 0, 1) + (d ? ' <span class="ux-to">→</span> ' + A.pct((was + d) / (t.owned + d), 1) : '') + '</b><small>' + (A.isInvestable(l) ? 'Write a policy to see it against your ranges' : 'Outside the policy: not counted in the ranges') + '</small></div>';
    } else {
      h += '<div class="ux-nw"><span>What you owe</span><b>' + A.money(t.owed) + (d ? ' <span class="ux-to">→</span> ' + A.money(t.owed + (l.kind === 'commitment' ? 0 : d)) : '') + '</b><small>' + (l.kind === 'commitment' ? 'A commitment is not counted until it is called' : A.pct(t.owned ? (t.owed + d) / t.owned : 0, 0) + ' of what you own') + '</small></div>';
    }
    return h + '<p class="ux-note">Nothing is traded. ' + A.money(was) + ' as of ' + A.date(c && c.asOf) + ' stays in the history.</p>';
  }
  /* NUMBERS IN A TABLE: Governance › Your rules, typed where they sit. Each row draws its range as it is
     typed; the foot checks the targets make 100%. */
  function rxNum(v) { var n = parseFloat(String(v).replace(',', '.')); return isNaN(n) ? null : n; }
  function rxWhy(b) {
    if (b.some(function (x) { return x == null; })) return 'Enter all three, as a percent.';
    if (b.some(function (x) { return x < 0 || x > 100; })) return 'Keep each between 0 and 100.';
    if (b[1] > b[0]) return 'The floor is above the target.';
    if (b[0] > b[2]) return 'The target is above the ceiling.';
    return '';
  }
  function rxBand(k, b) {
    var dr = A.drift().filter(function (x) { return x.k === k; })[0], inv = A.investable(), ap = dr ? dr.actual * 100 : (inv.total ? inv.by[k] / inv.total * 100 : 0), why = rxWhy(b);
    var f = b[1] || 0, t = b[0] || 0, c = b[2] || 0, out = !why && (ap > c ? 'Over' : ap < f ? 'Under' : '');
    return '<div class="rx-band"><div class="band-track"><div class="band-range" style="left:' + Math.max(0, Math.min(f, c)) + '%;width:' + Math.max(0, c - f) + '%"></div><div class="band-target" style="left:' + Math.max(0, Math.min(100, t)) + '%"></div>' +
      '<div class="band-actual' + (out ? ' out' : '') + '" style="left:' + Math.min(100, ap).toFixed(2) + '%"></div></div>' +
      '<span class="rx-state">' + (why ? '<span class="rx-err">' + why + '</span>' : out ? '<span class="status-label attention">' + out + ' at ' + ap.toFixed(1) + '%</span>' : '<span class="status-label ok">Inside at ' + ap.toFixed(1) + '%</span>') + '</span></div>';
  }
  function rxBands(form, k) {
    return [0, 1, 2].map(function (i) { var el = form.querySelector('[name="' + k + '-' + i + '"]'); return el ? rxNum(el.value) : null; });
  }
  function rxFoot(form) {
    var sum = A.POLICY_CLASSES.reduce(function (s2, k) { return s2 + (rxBands(form, k)[0] || 0); }, 0), ok = Math.abs(sum - 100) < 0.05, f = form.querySelector('[data-rx-foot]');
    if (f) f.innerHTML = '<tr><td>Targets together</td><td></td><td class="num"><b>' + (Math.round(sum * 10) / 10) + '%</b></td><td></td><td>' +
      (ok ? '<span class="status-label ok">They add up to 100%</span>' : '<span class="status-label attention">' + (sum < 100 ? (Math.round((100 - sum) * 10) / 10) + ' points not placed' : (Math.round((sum - 100) * 10) / 10) + ' points too many') + '</span>') + '</td></tr>';
    return sum;
  }
  function rxInput(inp) {
    var form = inp.form, k = inp.getAttribute('data-rxi'), cell = form.querySelector('[data-rx-b="' + k + '"]'), row = cell && cell.closest('tr'); if (!cell) return;
    var rg = cell.querySelector('.band-range'), from = rg ? { l: rg.style.left, w: rg.style.width } : null, b = rxBands(form, k);
    cell.innerHTML = rxBand(k, b);
    var nr = cell.querySelector('.band-range'); if (from && nr && nr.animate && !matchMedia('(prefers-reduced-motion: reduce)').matches) nr.animate([{ left: from.l, width: from.w }, { left: nr.style.left, width: nr.style.width }], { duration: 300, easing: 'cubic-bezier(.2,.7,.2,1)' });
    var bad = !!rxWhy(b); row.classList.toggle('is-bad', bad); row.querySelectorAll('input').forEach(function (x) { x.setAttribute('aria-invalid', String(bad)); });
    rxFoot(form); var er = form.querySelector('[data-band-err]'); if (er) er.setAttribute('data-invalid', 'false');
  }
  function select(id, name, opts, sel) {
    return '<select class="input" id="' + id + '" name="' + name + '" style="width:100%">' + opts.map(function (o) {
      var v = Array.isArray(o) ? o[0] : o, l = Array.isArray(o) ? o[1] : o;
      return '<option value="' + e(v) + '"' + (v === sel ? ' selected' : '') + '>' + e(l) + '</option>'; }).join('') + '</select>';
  }
  /* WHAT IT HOLDS (3 Oct 2026, Shelley: an account held elsewhere, at Interactive Brokers say, often holds
     shares, bonds and cash at once). An investment account's split, as its latest statement gives it, is
     what the policy, Drift and What you hold count. It starts at the kind's usual split and must make 100%. */
  var MIX_SPLIT = ['listed', 'pension', 'education', 'bonds'];
  function mixWords(a) {
    var m = a.mix || A.DEFAULT_MIX[a.cls] || {};
    return Object.keys(m).filter(function (k) { return m[k] > 0; }).map(function (k) { return Math.round(m[k] * 100) + '% ' + A.MIXL[k].toLowerCase(); }).join(', ');
  }
  function mixSumLine(sum) { return Math.abs(sum - 100) < 0.5 ? 'Adds up to 100%.' : 'Adds up to ' + (Math.round(sum * 10) / 10) + '%. Move them until they make 100%.'; }
  function mixFields(pre, mix, hide) {
    return '<fieldset class="form-row span" data-mix-fields' + (hide ? ' hidden disabled' : '') + '><legend class="label">What it holds</legend>' +
      '<p class="help">An account can hold more than one kind. Split it as its latest statement does, and each part is counted where it belongs.</p><div class="form-grid">' +
      A.POLICY_CLASSES.map(function (k) { return row(A.MIXL[k], pctField(pre + '-' + k, 'mix-' + k, Math.round((mix[k] || 0) * 100), ' data-mixf')); }).join('') +
      '</div><p class="help" data-mix-sum aria-live="polite">' + mixSumLine(100) + '</p><span class="error" data-mix-err>' + mixSumLine(0) + '</span></fieldset>';
  }
  function readMix(f, fd) {
    var out = {}, sum = 0, box = f.querySelector('[data-mix-fields]');
    A.POLICY_CLASSES.forEach(function (k) { var v = num(fd.get('mix-' + k)) || 0; if (v < 0) v = 0; sum += v; if (v > 0) out[k] = v / 100; });
    if (Math.abs(sum - 100) >= 0.5) {
      if (box) { box.setAttribute('data-invalid', 'true'); box.querySelector('[data-mix-err]').textContent = mixSumLine(sum); var i = box.querySelector('[data-mixf]'); if (i) i.focus(); }
      return null;
    }
    return out;
  }
  function mixSync(t) {
    var box = t.closest('[data-mix-fields]'); if (!box) return;
    var sum = 0; box.querySelectorAll('[data-mixf]').forEach(function (i) { sum += num(i.value) || 0; });
    box.querySelector('[data-mix-sum]').textContent = mixSumLine(sum); box.querySelector('[data-mix-err]').textContent = mixSumLine(sum);
    if (Math.abs(sum - 100) < 0.5) box.setAttribute('data-invalid', 'false');
  }
  function actionsRow(save) { return '<div class="actions"><button class="key key-secondary" type="button" data-act="sheet-close">Cancel</button><button class="key" type="submit">' + save + '</button></div>'; }
  function validate(form) {
    var bad = null;
    form.querySelectorAll('[required]').forEach(function (el) {
      var r = el.closest('.form-row'), ok = String(el.value).trim() !== '' && (!el.validity || el.validity.valid);
      if (r) r.setAttribute('data-invalid', ok ? 'false' : 'true'); el.setAttribute('aria-invalid', ok ? 'false' : 'true');
      if (!ok && !bad) bad = el;
    });
    if (bad) bad.focus();
    return !bad;
  }
  function num(v) { var n = parseFloat(String(v).replace(/[^\d.\-]/g, '')); return isNaN(n) ? null : n; }

  /* ── sheets: a line, a document, and every form ──────────────────────── */
  function lineSheet(id, mode) {
    var l = A.line(id), isA = !!A.asset(id), c = A.cur(id), st = A.stale(l), h = A.history(id).slice().reverse();
    var pairs = '<dl class="pairs"><div><dt>' + (isA ? 'Value' : 'Balance') + '</dt><dd class="num">' + A.money(c.amount) + '</dd></div>' +
      '<div><dt>As of</dt><dd>' + A.date(c.asOf) + '<span class="pair-note">' + (st ? st + ' days old · your limit for this kind is ' + A.staleLimit(l) + ' days' : 'Inside the ' + A.staleLimit(l) + '-day limit for this kind') + '</span></dd></div>' +
      '<div><dt>Source</dt><dd>' + e(A.srcLabel(c)) + '<span class="pair-note">' + e(c.reason || '') + ' · entered by ' + e(c.by) + '</span></dd></div>';
    if (isA) pairs += '<div><dt>Holder</dt><dd>' + e(l.holder) + '</dd></div><div><dt>Kept as</dt><dd>' + e(A.CLS[l.cls]) + (l.institution ? ' · ' + e(l.institution) : '') + '</dd></div>' +
      (A.isInvestable(l) && MIX_SPLIT.indexOf(l.cls) > -1 ? '<div><dt>What it holds</dt><dd>' + e(mixWords(l)) + '<span class="pair-note">' + (l.positions && l.positions.length ? 'From the positions in its latest statement' : 'Counted this way in your policy, Drift and What you hold') + '</span></dd></div>' : '') +
      '<div><dt>How soon it can be cash</dt><dd>' + e(l.liquidity) + '</dd></div>' + (l.fee != null ? '<div><dt>Yearly fee</dt><dd>' + l.fee.toFixed(2) + '%</dd></div>' : '') +
      '<div><dt>Counted in your policy</dt><dd>' + (A.isInvestable(l) ? 'Yes' : 'No — outside the investable scope') + '</dd></div>' + (l.note ? '<div><dt>Note</dt><dd>' + e(l.note) + '</dd></div>' : '');
    else pairs += '<div><dt>Lender</dt><dd>' + e(l.lender) + '</dd></div><div><dt>Rate</dt><dd>' + (l.rate ? l.rate + '% · ' : '') + e(l.rateType) + '</dd></div>' +
      (l.reset ? '<div><dt>Rate resets</dt><dd>' + A.date(l.reset) + '</dd></div>' : '') + '<div><dt>Ends</dt><dd>' + A.date(l.maturity) + '</dd></div>' +
      '<div><dt>Set against</dt><dd>' + (A.asset(l.securedOn) ? e(A.asset(l.securedOn).name) : '—') + '</dd></div>' + (l.committed ? '<div><dt>Committed in total</dt><dd>' + A.money(l.committed) + '</dd></div>' : '');
    var docs = (l.docs || []).map(A.doc).filter(Boolean);
    if (docs.length) pairs += '<div><dt>Documents</dt><dd>' + docs.map(function (d) { return '<a class="link" href="#/vault" data-act="doc" data-id="' + d.id + '" style="font-size:var(--text-label)">' + e(d.name) + '</a>'; }).join('<br>') + '</dd></div>';
    pairs += '</dl>';
    var canMix = isA && A.isInvestable(l) && MIX_SPLIT.indexOf(l.cls) > -1 && !(l.positions && l.positions.length);
    var form = mode === 'mix' && canMix ? '<form class="panel" data-form="line-mix" data-id="' + id + '" novalidate><div class="intro"><span class="eyebrow">What it holds</span></div><div class="form-grid">' +
      mixFields('lm-mix', l.mix || A.DEFAULT_MIX[l.cls], false) + '</div>' + actionsRow('Save what it holds') + '</form>' :
      mode === 'update' ? '<form class="panel" data-form="valuation" data-id="' + id + '" novalidate><div class="intro"><span class="eyebrow">A new row, not an overwrite</span></div><div class="form-grid">' +
      moneyRow('New ' + (isA ? 'value' : 'balance') + ' (' + A.base() + ')', 'v-amt', 'amount', c.amount, ' required', 'Enter the new ' + (isA ? 'value' : 'balance') + ', in ' + A.curWords() + '.', true, c.amount) +
      '<div class="ux-prev span" data-ux-prev data-id="' + id + '" aria-live="polite">' + uxPreview(id, c.amount) + '</div>' +
      row('As of', field('v-date', 'asOf', 'date', c.asOf > DEMO_TODAY ? c.asOf : DEMO_TODAY, ' required max="' + (c.asOf > DEMO_TODAY ? c.asOf : DEMO_TODAY) + '"'), 'The day the figure is true on. Every desk shows the figure with the latest date.', 'Enter a date, today or before.') +
      '<fieldset class="form-row"><legend class="label">Where the figure comes from</legend><div class="options">' +
        [['statement', 'A statement', 'Uploaded, or through a connection'], ['document', 'A document', 'An appraisal, a contract'], ['entered', 'Entered by you', '']].map(function (o, i) {
          return '<label class="choice"><input type="radio" name="source" value="' + o[0] + '"' + (i === 0 ? ' checked' : '') + '><span class="choice-body">' + o[1] + (o[2] ? '<span class="choice-note">' + o[2] + '</span>' : '') + '</span></label>'; }).join('') + '</div></fieldset>' +
      '<div class="form-row span"><label class="label" for="v-why">Why it changed</label>' + field('v-why', 'reason', 'text', '', ' required placeholder="For example: September statement"') + '<span class="help">Kept with the row, for whoever reads it later.</span><span class="error">Say why it changed, in a few words.</span></div>' +
      '</div>' + actionsRow('Save the new ' + (isA ? 'value' : 'balance')) + '</form>' :
      '<div class="actions" style="border-top:0;padding-top:0;justify-content:flex-start">' + V.uploadKey(isA ? 'Upload a statement' : 'Upload the papers', false, id).replace('class="key"', 'class="key key-secondary"') + '<button class="key key-secondary" type="button" data-act="check-line" data-id="' + id + '">Check it</button>' + (canMix ? '<button class="key key-secondary" type="button" data-act="mix-line" data-id="' + id + '">Change what it holds</button>' : '') + '<button class="key" type="button" data-act="update-line" data-id="' + id + '">Update the ' + (isA ? 'value' : 'balance') + '</button></div>';
    var hist = '<div class="stack"><div class="intro"><span class="eyebrow">History · values are never overwritten</span></div><table class="hist"><thead><tr><th>As of</th><th>Source · why</th><th>By</th><th class="num" style="text-align:right">Amount</th></tr></thead><tbody>' +
      h.map(function (v, i) { return '<tr class="' + (i === 0 ? 'current' : 'old') + '"><td>' + A.date(v.asOf) + '</td><td>' + e(A.srcLabel(v)) + (v.reason ? ' · ' + e(v.reason) : '') + '</td><td>' + e(v.by) + '</td><td class="num">' + A.money(v.amount) + '</td></tr>'; }).join('') + '</tbody></table></div>';
    openSheet(isA ? e(A.CLS[l.cls]) + ' · ' + e(l.holder) : e(l.type), e(l.name), pairs + form + hist);
  }
  function groupedSelect(id, name, groups, sel) {
    return '<select class="input" id="' + id + '" name="' + name + '" style="width:100%"><option value="">Not filed yet</option>' + groups.map(function (g) {
      return '<optgroup label="' + e(g[0]) + '">' + g[1].map(function (o) { return '<option value="' + e(o[0]) + '"' + (o[0] === sel ? ' selected' : '') + '>' + e(o[1]) + '</option>'; }).join('') + '</optgroup>';
    }).join('') + '</select>';
  }
  function docSheet(id) {
    var d = A.doc(id); if (!d) return;
    var bt = A.belongsTo(d);
    var body = '<dl class="pairs"><div><dt>Kind</dt><dd>' + e(d.cat) + '</dd></div><div><dt>Dated</dt><dd>' + A.date(d.date) + '</dd></div><div><dt>Size</dt><dd>' + e(d.size) + '</dd></div>' +
      '<div><dt>Where the original is</dt><dd>' + e(d.original) + '</dd></div><div><dt>Belongs to</dt><dd>' + (bt.length ? bt.map(function (x) {
        return '<a class="link" href="' + x.href + '" style="font-size:var(--text-label)">' + e(x.desk) + ' · ' + e(x.label) + '</a>'; }).join('<br>') : '<span class="unknown">Not filed yet</span>') + '</dd></div></dl>';
    if (d.summary) body += '<div class="note"><b>Freya’s summary.</b> ' + e(d.summary) + '<span class="pair-note">Each claim cites the page it came from.</span></div>';
    if (d.proposal && !bt.length) body += '<div class="note"><b>Proposed: ' + e(d.proposal.label) + '.</b> Filed as ' + e(d.proposal.cat.toLowerCase()) + '. ' +
      '<span class="pair-note">In this preview the proposal comes from the file’s name. In the platform Freya reads the document, says what it is and what it covers with page references, and it counts as one read of the monthly allowance.</span>' +
      '<div class="actions" style="border-top:0;padding-top:var(--space-3);justify-content:flex-start"><button class="key key-s" type="button" data-act="accept-proposal" data-id="' + d.id + '">File it there</button></div></div>';
    else if (d.uploaded && !d.proposal && !bt.length) body += '<div class="note">' + (d.read ? 'Nothing in the record matched the file’s name, so there is no proposal. File it below.' : 'Freya’s reading allowance for this month is used, so she has not read it. File it below; it is kept either way.') + '</div>';
    body += '<form class="panel" data-form="doc-meta" data-id="' + d.id + '" novalidate><div class="intro"><span class="eyebrow">' + (bt.length ? 'Filed' : 'File it') + '</span></div><div class="form-grid">' +
      row('Kind', select('dm-cat', 'cat', V.KINDS, d.cat)) +
      row('Belongs to', groupedSelect('dm-to', 'target', A.fileTargets(), bt[0] ? bt[0].id : d.proposal ? d.proposal.target : '')) +
      '<div class="form-row span"><label class="label" for="dm-orig">Where the original is</label>' + field('dm-orig', 'original', 'text', d.original) + '<span class="help">For a will or a deed the paper is what counts.</span></div>' +
      '</div>' + actionsRow('Save') + '</form>';
    openSheet('Family Vault · ' + e(d.cat), e(d.name), body);
  }
  /* what a goal draws on: the investable accounts, the linked ones ticked; with none yet, where to add one */
  function goalDraws(opts, linked) {
    if (!opts.length) return '<div class="form-row span"><span class="label">Draws on</span><p class="help">Nothing to link yet. Add an account in Records, then choose it here. <a class="link" href="#/records/own">What you own</a></p></div>';
    return '<fieldset class="form-row span"><legend class="label">Draws on</legend><p class="help">The accounts set aside for it. What they hold counts as linked today.</p><div class="options">' +
      opts.map(function (a) { return '<label class="choice"><input type="checkbox" name="linked" value="' + a.id + '"' + (linked.indexOf(a.id) > -1 ? ' checked' : '') + '><span>' + e(a.name) + (a.holder ? ' · ' + e(a.holder) : '') + ' <span class="choice-note">' + A.money(A.amount(a.id)) + '</span></span></label>'; }).join('') + '</div></fieldset>';
  }
  var FORMS_HTML = {
    'add-asset': function () {
      return ['Records', 'Add an asset', '<form class="stack" data-form="add-asset" novalidate><div class="form-grid">' +
        '<div class="form-row span"><label class="label" for="aa-name">What it is</label>' + field('aa-name', 'name', 'text', '', ' required placeholder="For example: Savings account"') + '<span class="error">Name it.</span></div>' +
        row('Kept as', select('aa-cls', 'cls', Object.keys(A.CLS).map(function (k) { return [k, A.CLS[k]]; }), 'cash')) +
        mixFields('aa-mix', A.DEFAULT_MIX.listed, true) +
        row('Holder', '<select class="input" id="aa-holder" name="holder" style="width:100%">' + V.holderOptions('Joint') + '</select>') +
        row('Where it is held', field('aa-inst', 'institution', 'text', '', ' placeholder="Bank or provider (optional)"')) +
        moneyRow('Value (' + A.base() + ')', 'aa-amt', 'amount', '', ' required', 'Enter what it is worth, in ' + A.curWords() + '.') +
        row('As of', field('aa-date', 'asOf', 'date', DEMO_TODAY, ' required max="' + DEMO_TODAY + '"'), 'The day the figure is true on.', 'Enter a date, today or before.') +
        row('Source', select('aa-src', 'source', [['entered', 'Entered by you'], ['statement', 'Statement'], ['document', 'Document']], 'entered')) +
        '</div>' + actionsRow('Add the asset') + '</form>'];
    },
    'add-debt': function () {
      return ['Records', 'Add a debt', '<form class="stack" data-form="add-debt" novalidate><div class="form-grid">' +
        '<div class="form-row span"><label class="label" for="ad-name">What it is</label>' + field('ad-name', 'name', 'text', '', ' required placeholder="For example: Student loan"') + '<span class="error">Name it.</span></div>' +
        row('Kind', select('ad-type', 'type', ['Mortgage', 'Home equity line', 'Loan', 'Student loan', 'Credit card', 'Capital commitment'], 'Loan')) +
        row('Lender', field('ad-lender', 'lender', 'text', '', ' required'), '', 'Say who lent it.') +
        row('Set against', select('ad-sec', 'securedOn', [['', 'Nothing']].concat(S().assets.map(function (a) { return [a.id, a.name]; })), '')) +
        moneyRow('Balance (' + A.base() + ')', 'ad-amt', 'amount', '', ' required', 'Enter the balance, in ' + A.curWords() + '.') +
        row('Rate', pctField('ad-rate', 'rate', ''), 'A year, as the lender states it.') +
        row('Rate resets', field('ad-reset', 'reset', 'date', '')) +
        row('Ends', field('ad-end', 'maturity', 'date', '')) +
        '</div>' + actionsRow('Add the debt') + '</form>'];
    },
    'add-adviser': function () {
      return ['Records · the register', 'Add an adviser', '<form class="stack" data-form="add-adviser" novalidate><div class="form-grid">' +
        row('Name', field('av-name', 'name', 'text', '', ' required'), '', 'Enter a name.') + row('Firm', field('av-firm', 'firm', 'text', '')) +
        row('Role', field('av-role', 'role', 'text', '', ' placeholder="CPA, attorney…" required'), '', 'Say what they do.') + row('Contact', field('av-contact', 'contact', 'text', '')) +
        '<fieldset class="form-row span"><legend class="label">Covers</legend><div class="options" style="flex-direction:row;flex-wrap:wrap;gap:var(--space-4)">' +
        ['Records', 'Investment', 'Governance', 'Protection', 'Succession'].map(function (k) { return '<label class="choice"><input type="checkbox" name="covers" value="' + k + '"><span>' + k + '</span></label>'; }).join('') + '</div></fieldset>' +
        '<div class="form-row span"><label class="label" for="av-open">What is outstanding</label>' + field('av-open', 'open', 'text', '') + '</div>' +
        '</div><p class="help">This keeps them on your register. Nothing is sent to them, and they get no access.</p>' + actionsRow('Add to the register') + '</form>'];
    },
    'add-person': function () {
      var ppl = S().people, opts = [];
      ppl.forEach(function (x) {
        A.partnersOf(x.id).forEach(function (y) { if (x.id < y) opts.push([x.id + '+' + y, x.name.split(' ')[0] + ' and ' + A.person(y).name.split(' ')[0]]); });
      });
      ppl.forEach(function (x) { opts.push([x.id, x.name]); });
      return ['Records · family', 'Add a person', '<form class="stack" data-form="add-person" novalidate><div class="form-grid">' +
        row('Name', field('pp-name', 'name', 'text', '', ' required'), '', 'Enter a name.') + row('Born', field('pp-born', 'born', 'number', '', ' min="1900" max="2026" required'), '', 'Enter a year.') +
        row('Related to', select('pp-to', 'to', opts, opts[0] && opts[0][0])) +
        row('As their', select('pp-as', 'as', [['child', 'Child'], ['parent', 'Parent'], ['partner', 'Partner'], ['sibling', 'Sibling'], ['other', 'Other family']], 'child')) +
        '<div class="form-row span" data-if-partner hidden><label class="label" for="pp-union">Married or not</label>' + select('pp-union', 'union', [['', 'Choose one']].concat(A.UNION), '') +
          '<span class="help">A civil partnership includes a civil union or a registered partnership.</span></div>' +
        '<div class="form-row span"><label class="label" for="pp-rel">Relationship, in your words</label>' + field('pp-rel', 'relationship', 'text', '', ' placeholder="For example: Daughter · at college"') + '</div>' +
        '<label class="choice span"><input type="checkbox" name="dependant"><span class="choice-body">Dependent<span class="choice-note">Someone the household supports.</span></span></label>' +
        '</div><p class="help">This adds them to the family tree. Nothing is sent to them and they get no login; the tree is free for any number of people. To give your partner a login of their own, invite them from <a class="link" href="#/profile/members" style="font-size:var(--text-label)">Profile › Household members</a>.</p>' + actionsRow('Add the person') + '</form>'];
    },
    'edit-person': function (t) {
      var x = A.person(t.getAttribute('data-id'));
      return ['Records · family', 'Edit ' + e(x.name.split(' ')[0]), '<form class="stack" data-form="edit-person" data-id="' + x.id + '" novalidate><div class="form-grid">' +
        row('Name', field('ep-name', 'name', 'text', x.name, ' required'), '', 'Enter a name.') + row('Born', field('ep-born', 'born', 'number', x.born, ' min="1900" max="2026" required'), '', 'Enter a year.') +
        '<div class="form-row span"><label class="label" for="ep-rel">Relationship, in your words</label>' + field('ep-rel', 'relationship', 'text', x.relationship) + '</div>' +
        A.partnersOf(x.id).map(function (y) {   /* married or not, for each partner */
          var f = A.person(y).name.split(' ')[0];
          return '<div class="form-row span"><label class="label" for="ep-union-' + y + '">' + e(x.name.split(' ')[0]) + ' and ' + e(f) + '</label>' +
            select('ep-union-' + y, 'union:' + y, [['', 'Not recorded']].concat(A.UNION), A.unionStatus(x.id, y)) +
            '<span class="help">A civil partnership includes a civil union or a registered partnership.</span></div>';
        }).join('') +
        '<label class="choice span"><input type="checkbox" name="dependant"' + (x.dependant ? ' checked' : '') + '><span class="choice-body">Dependent<span class="choice-note">Someone the household supports.</span></span></label>' +
        '</div>' + actionsRow('Save') + '</form>'];
    },
    'add-goal': function (t) {
      var opts = S().assets.filter(function (a) { return A.isInvestable(a); }), nm = (t && t.getAttribute && t.getAttribute('data-name')) || '';
      return ['Governance', 'Add a goal', '<form class="stack" data-form="add-goal" novalidate><div class="form-grid">' +
        '<div class="form-row span"><label class="label" for="gg-name">What the money is for</label>' + field('gg-name', 'name', 'text', nm, ' required') + '<span class="error">Name the goal.</span></div>' +
        moneyRow('Amount (' + A.base() + ')', 'gg-amt', 'amount', '', ' required', 'Enter what it needs, in ' + A.curWords() + '.') + row('By', field('gg-date', 'date', 'date', '', ' required min="' + DEMO_TODAY + '"'), '', 'Enter a date after today.') +
        moneyRow('Set aside a month (USD) <span class="opt">optional</span>', 'gg-mo', 'monthly', '', '', '', true) +
        '<fieldset class="form-row span"><legend class="label">Priority</legend><div class="options" style="flex-direction:row;gap:var(--space-5)">' +
        ['Need', 'Want', 'Wish'].map(function (p, i) { return '<label class="choice"><input type="radio" name="priority" value="' + p + '"' + (i === 0 ? ' checked' : '') + '><span>' + p + '</span></label>'; }).join('') + '</div></fieldset>' +
        goalDraws(opts, []) +
        '</div>' + actionsRow('Add the goal') + '</form>'];
    },
    /* EDIT A GOAL (29 Sep 2026): the goal as it is, every field open, and what it draws on — the only place
       the accounts set aside for a goal are chosen after it was added. What it draws on counts as linked
       today: the goal map fills with it, the gap shrinks, and the retirement runway starts from it. */
    'edit-goal': function (t) {
      var g = S().goals.filter(function (x) { return x.id === t.getAttribute('data-id'); })[0]; if (!g) return ['Governance', 'Goal', ''];
      var opts = S().assets.filter(function (a) { return A.isInvestable(a); });
      return ['Wealth planning · edit the goal', e(g.name), '<form class="stack" data-form="edit-goal" data-id="' + g.id + '" novalidate><div class="form-grid">' +
        '<div class="form-row span"><label class="label" for="eg-name">What the money is for</label>' + field('eg-name', 'name', 'text', g.name, ' required') + '<span class="error">Name the goal.</span></div>' +
        moneyRow('Amount (' + A.base() + ')', 'eg-amt', 'amount', g.amount, ' required', 'Enter what it needs, in ' + A.curWords() + '.') + row('By', field('eg-date', 'date', 'date', g.date, ' required'), '', 'Enter a date.') +
        moneyRow('Set aside a month (USD) <span class="opt">optional</span>', 'eg-mo', 'monthly', g.monthly || '', '', '', true) +
        '<fieldset class="form-row span"><legend class="label">Priority</legend><div class="options" style="flex-direction:row;gap:var(--space-5)">' +
        ['Need', 'Want', 'Wish'].map(function (p) { return '<label class="choice"><input type="radio" name="priority" value="' + p + '"' + (g.priority === p ? ' checked' : '') + '><span>' + p + '</span></label>'; }).join('') + '</div></fieldset>' +
        goalDraws(opts, g.linked || []) +
        '</div>' + actionsRow('Save the goal') + '</form>'];
    },
    'edit-policy': function () {
      var p = A.policy() || { version: 0, purpose: '', enough: '', exclusions: '', liquidityMin: '', concentrationMax: '', bands: { equities: ['', '', ''], fixed: ['', '', ''], cash: ['', '', ''], private: ['', '', ''] } };
      return ['Your rules · version ' + (p.version + 1), p.version ? 'Change the policy' : 'Write your policy', '<form class="stack" data-form="edit-policy" novalidate>' +
        '<p class="help">' + (p.version ? 'Saving writes version ' + (p.version + 1) + '. Version ' + p.version + ' stays in the history.' : 'A blank template: every number is yours to write.') + ' Finna never suggests a number.</p>' +
        '<div class="form-row"><label class="label" for="ep-purpose">Purpose</label><textarea class="input" id="ep-purpose" name="purpose">' + e(p.purpose) + '</textarea></div>' +
        '<div class="form-grid">' + row('What enough means', field('ep-enough', 'enough', 'text', p.enough)) + row('What we will not do', field('ep-excl', 'exclusions', 'text', p.exclusions)) + '</div>' +
        '<div class="rx data-table"><table><thead><tr><th scope="col">Asset class</th><th scope="col" class="num">Floor</th><th scope="col" class="num">Target</th><th scope="col" class="num">Ceiling</th><th scope="col" class="rx-band-h">Your range, and where you are today</th></tr></thead><tbody>' +
        A.POLICY_CLASSES.map(function (k) { var b = p.bands[k], inv = A.investable(); return '<tr><td><b class="rx-name">' + A.MIXL[k] + '</b><span class="cell-sub">' + A.short(inv.by[k] || 0) + ' today</span></td>' + [1, 0, 2].map(function (i) {
          return '<td class="num" data-label="' + ['Target', 'Floor', 'Ceiling'][i] + '">' + '<div class="fx-affix rx-in"><input class="input" name="' + k + '-' + i + '" value="' + b[i] + '" inputmode="decimal" autocomplete="off" data-rxi="' + k + '" aria-label="' + A.MIXL[k] + ', ' + ['target', 'floor', 'ceiling'][i] + '"><span class="fx-suf" aria-hidden="true">%</span></div></td>'; }).join('') +
          '<td class="rx-b" data-rx-b="' + k + '" data-label="Your range, and where you are today">' + rxBand(k, b.map(function (x) { return rxNum(x); })) + '</td></tr>'; }).join('') +
        '</tbody><tfoot data-rx-foot></tfoot></table></div><div class="form-row" data-band-err><span class="error">Each floor must sit at or under its target, and each target at or under its ceiling.</span></div>' +
        '<div class="form-grid">' + moneyRow('Cash that must stay reachable (USD)', 'ep-liq', 'liquidityMin', p.liquidityMin, '') + row('Largest single company', pctField('ep-conc', 'concentrationMax', p.concentrationMax), 'Of investable assets.') + '</div>' +
        '<div class="form-row"><label class="label" for="ep-note">What changed</label>' + field('ep-note', 'note', 'text', '', ' required placeholder="For example: raised the bonds floor to 20"') + '<span class="error">Say what changed.</span></div>' +
        '<fieldset class="form-row"><legend class="label">Agreed by</legend><div class="options" style="flex-direction:row;gap:var(--space-5)">' + S().members.map(function (m) { return '<label class="choice"><input type="checkbox" name="agreed" value="' + m.name.split(' ')[0] + '" checked><span>' + e(m.name) + '</span></label>'; }).join('') + '</div></fieldset>' +
        actionsRow('Save version ' + (p.version + 1)) + '</form>'];
    },
    'edit-identity': function () {
      var id = S().identity;
      return ['Governance · Financial Identity', 'Change an answer', '<form class="stack" data-form="edit-identity" novalidate>' +
        '<div class="form-row"><label class="label" for="ei-who">Who the money is for</label>' + field('ei-who', 'whoFor', 'text', id.whoFor) + '</div>' +
        '<div class="slider-row"><label class="label" for="ei-h">How long your savings could wait</label><input class="slider" id="ei-h" name="horizon" type="range" min="1" max="40" value="' + id.horizon + '" data-unit=" yrs"><output>' + id.horizon + ' yrs</output></div>' +
        '<fieldset class="form-row"><legend class="label">In a bad year, you would…</legend><div class="options">' +
        ['Sell some to stop the fall', 'Hold and wait it out', 'Add while it is cheaper'].map(function (o) { return '<label class="choice"><input type="radio" name="badYear" value="' + o + '"' + (o === id.badYear ? ' checked' : '') + '><span>' + o + '</span></label>'; }).join('') + '</div></fieldset>' +
        actionsRow('Save') + '</form>'];
    },
    'add-cover': function () {
      return ['Protection', 'Add cover', '<form class="stack" data-form="add-cover" novalidate><div class="form-grid">' +
        row('Kind', select('ac-type', 'type', ['Life', 'Disability', 'Critical illness', 'Health', 'Long-term care', 'Homeowners', 'Renters', 'Landlord', 'Valuables', 'Umbrella liability', 'Auto', 'Business'], 'Life')) +
        row('Covers', field('ac-covers', 'covers', 'text', '', ' required placeholder="Who or what"'), '', 'Say who or what it covers.') +
        row('Insurer', field('ac-ins', 'insurer', 'text', '')) + moneyRow('Sum insured (USD)', 'ac-sum', 'sum', '', '') +
        moneyRow('Premium a year (USD)', 'ac-prem', 'premium', '', '') + row('Renews', field('ac-ren', 'renews', 'date', '')) +
        row('Beneficiaries', field('ac-ben', 'beneficiaries', 'text', '')) + row('Beneficiary named on', field('ac-nom', 'nominated', 'date', '')) +
        '</div>' + actionsRow('Add the cover') + '</form>'];
    },
    'edit-will': function () {
      var w = S().will;
      return ['Succession', 'The will, and where it is', '<form class="stack" data-form="edit-will" novalidate><div class="form-grid">' +
        row('Is there a will', select('ew-ex', 'exists', ['Yes', 'No', 'Not sure'], w.exists)) + row('What kind', field('ew-kind', 'kind', 'text', w.kind)) +
        row('Signed', field('ew-signed', 'signed', 'date', w.signed)) + row('Last read', field('ew-rev', 'reviewed', 'date', w.reviewed)) +
        '<div class="form-row span"><label class="label" for="ew-orig">Where the original is</label>' + field('ew-orig', 'original', 'text', w.original) + '</div>' +
        '<div class="form-row span"><label class="label" for="ew-exec">Executors</label>' + field('ew-exec', 'executors', 'text', w.executors) + '</div>' +
        row('Read it again by', field('ew-by', 'reviewBy', 'date', w.reviewBy), 'It goes in the Timeline.') +
        '</div>' + actionsRow('Save') + '</form>'];
    },
    'set-recovery': function () {
      return ['Protection · safety', 'Set a recovery contact', '<form class="stack" data-form="recovery" novalidate>' +
        row('Who can help you back in', select('rc-p', 'person', S().people.filter(function (p) { return !p.member; }).map(function (p) { return p.name; }), '')) +
        '<p class="help">They are asked to confirm who you are. They never see the household.</p>' + actionsRow('Save') + '</form>'];
    }
  };
  function moduleSheet(name, lines) {
    openSheet('A module', e(name), '<div class="prose"><p>' + lines.map(e).join('</p><p>') + '</p></div><div class="note">Modules are being priced. Nothing in this mockup takes a payment.</div>' +
      '<div class="actions"><button class="key" type="button" data-act="sheet-close">Keep the free office</button></div>');
  }

  /* THE MODE KEY SOUND (Rose, 29 Sep 2026: "a little switch sound when activating dark/light
     mode"; 5 Oct 2026: the click was "too analog" — "more smooth and subtle and modern"; picked
     F · Soft tick in the sound lab). A muted modern tick: 12ms of softened noise (the faintest
     touch of air) with a short soft tone under it that dips a little as it fades — 1100Hz going
     dark, 1320Hz going light. The noise is the same every time (a fixed seed), so the switch
     always sounds like itself. Made in the browser (Web Audio), so there is no sound file. Only
     ever on the key, and silent for anyone whose system asks for reduced motion; if the browser
     has no audio, nothing happens. */
  var CLICK = null;
  function switchClick(toDark) {
    if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
    try {
      var ac = CLICK = CLICK || new AC(); if (ac.state === 'suspended') ac.resume();
      var t = ac.currentTime + 0.01, out = ac.createGain(); out.gain.value = 0.125; out.connect(ac.destination);
      function env(g, peak, attack, decay) {   /* soft start, smooth fade */
        g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(peak, t + attack); g.gain.exponentialRampToValueAtTime(0.0001, t + attack + decay);
      }
      /* the air */
      var n = Math.floor(ac.sampleRate * 0.012), buf = ac.createBuffer(1, n, ac.sampleRate), d = buf.getChannelData(0), seed = 3;
      for (var i = 0; i < n; i++) { seed = (seed * 16807) % 2147483647; d[i] = seed / 1073741823.5 - 1; }
      var air = ac.createBufferSource(), lp = ac.createBiquadFilter(), ag = ac.createGain();
      air.buffer = buf; lp.type = 'lowpass'; lp.frequency.value = 2600; env(ag, 0.25, 0.001, 0.01);
      air.connect(lp); lp.connect(ag); ag.connect(out); air.start(t);
      /* the tone */
      var o = ac.createOscillator(), g = ac.createGain(), f = toDark ? 1100 : 1320;
      o.type = 'sine'; o.frequency.setValueAtTime(f, t); o.frequency.exponentialRampToValueAtTime(f * 0.85, t + 0.05);
      env(g, 0.28, 0.002, 0.05); o.connect(g); g.connect(out); o.start(t); o.stop(t + 0.08);
    } catch (x) {}
  }

  /* ── actions ─────────────────────────────────────────────────────────── */
  var ACT = {
    /* [ — the main bar: on a desktop it docks open or folds, on every page, and the choice is
       remembered; on a tablet it opens over the work; on a phone it is the menu sheet */
    mainbar: function () {
      var L = layout();
      if (L === 'phone') { OVER.menu = !OVER.menu; frame(); return; }
      if (L === 'desktop' && CURR && CURR.base === 'profile') { OVER.pf = !OVER.pf; frame(); return; }   /* this visit only */
      if (L === 'desktop') { setPref('finna-mainbar', docked(CURR ? CURR.base : 'home') ? 'folded' : 'open'); frame(); return; }
      OVER.mb = !OVER.mb; OVER.sm = false; frame();
    },
    /* ] — a tablet's sub menu, opened over the work and closed again. On a desktop it is
       always there, so there is nothing to toggle. */
    submenu: function () {
      if (!CURR || !NAV[CURR.base] || layout() !== 'tablet') return;
      OVER.sm = !OVER.sm; OVER.mb = false; frame();
    },
    menu: function () {
      OVER.menu = true; frame();
      setTimeout(function () { var a = MB.querySelector('.mb-item[aria-current="page"]') || MB.querySelector('.mb-item'); if (a) a.focus(); }, 80);
    },
    'frame-close': closeOver,
    'fy-new': function () {
      if (location.hash === '#/freya') { FY.thread = []; FY.convoId = null; render(); } else location.hash = '#/freya';
      setTimeout(function () { var i = document.getElementById('fy-page-input'); if (i) i.focus(); }, 60);
    },
    /* the Desks pill on a phone: the card opens over a dimmed page, the desk you are on (or the first)
       takes the focus; a tap outside, Escape or the pill again closes it, and the focus goes back */
    'desks-pick': function () {
      OVER.desks = !OVER.desks; OVER.menu = false; frame();
      if (OVER.desks) setTimeout(function () { var a = document.querySelector('#dk-list [aria-current="page"]') || document.querySelector('#dk-list .dk-item'); if (a) a.focus(); }, 40);
    },
    'accept-proposal': function (t) {
      var d = A.doc(t.getAttribute('data-id')); if (!d || !d.proposal) return;
      A.fileDoc(d, d.proposal.target); d.cat = d.proposal.cat; var lbl = d.proposal.label; delete d.proposal;
      closeSheet(); commit('Filed with ' + lbl + '.', 'Filed ' + d.name);
    },
    'edit-view': function (t) { editView(t.getAttribute('data-section')); },
    'view-reset': function (t) {
      var s = t.getAttribute('data-section'), pr = V.viewPrefs(s); pr.pinned = []; pr.hidden = [];
      A.log('Reset the ' + placeName(s) + ' view'); A.save(); render(); editView(s); toast('Back to the day’s order.');
    },
    'first-week-later': function (t) {
      var X = S(); (X.firstWeekSet = X.firstWeekSet || {})[t.getAttribute('data-id')] = true;
      commit('Set aside. It can wait; the next card takes its place.');
    },
    line: function (t) { lineSheet(t.getAttribute('data-id')); },
    /* the treemaps (Home · What you own, Investment · What you hold): open a block, go back up, regroup */
    'tv-open': function (t) {
      var id = t.getAttribute('data-map'), k = t.getAttribute('data-open'), from = t.getAttribute('data-k');
      V.tvGo(id, function (st) { st.path = st.path.concat([k]); }, { from: from });
      var back = document.querySelector('[data-tv-card="' + id + '"] .tv-back'); if (back) back.focus();
    },
    'tv-up': function (t) {
      var id = t.getAttribute('data-map'), d = +t.getAttribute('data-depth'), was = V.tvState(id).path.slice();
      /* the block the household came out of: keyed by rank at the top, by its path deeper */
      var box = document.querySelector('[data-tv="' + id + '"]'), up = null;
      V.tvGo(id, function (st) { st.path = st.path.slice(0, d); }, {});
      var outKey = was[d];
      if (outKey != null) {
        var els = box.querySelectorAll('.tv-t:not([data-gone])');
        for (var i = 0; i < els.length; i++) if (els[i].getAttribute('data-open') === outKey) { up = els[i]; break; }
      }
      (up || box.querySelector('.tv-t:not([data-gone])') || t).focus();
    },
    'tv-lens': function (t) {
      var id = t.getAttribute('data-map'), l = t.getAttribute('data-lens');
      if (V.tvState(id).lens === l && !V.tvState(id).path.length) return;
      V.tvGo(id, function (st) { st.lens = l; st.path = []; }, {});
    },
    doc: function (t) { docSheet(t.getAttribute('data-id')); },
    'update-line': function (t) { lineSheet(t.getAttribute('data-id'), 'update'); },
    'mix-line': function (t) { lineSheet(t.getAttribute('data-id'), 'mix'); },
    'check-line': function (t) {
      var id = t.getAttribute('data-id'), c = A.cur(id);
      S().valuations.push({ line: id, amount: c.amount, asOf: DEMO_TODAY, source: 'checked', ref: '', by: A.who(), reason: 'Checked and confirmed, unchanged', at: DEMO_TODAY });
      commit('Checked. The value stands, dated today.', 'Checked ' + A.line(id).name); lineSheet(id);
    },
    'sheet-close': closeSheet, scrim: closeSheet,
    /* How the numbers work: a tool's method in the sheet beside it, and the whole method on its page */
    'sim-method': function (t) { var m = V.simMethodSheet(t.getAttribute('data-id')); openSheet(m[0], m[1], m[2]); },
    'sim-method-all': function () { closeSheet(); location.hash = '#/profile/method'; },
    /* a table's header: the first select sorts it the way that answers the page, the next turns it round */
    'th-sort': function (t) {
      var dt = t.closest('.data-table'), i = +t.getAttribute('data-col'), th = dt.querySelectorAll('thead th')[i], cur = (function () { var k = dt.getAttribute('data-sort-key'); return TSORT[k] || null; })();
      var st0 = cur || (function () { var ths = dt.querySelectorAll('thead th'); for (var j = 0; j < ths.length; j++) if (ths[j].hasAttribute('data-on')) return { i: j, dir: ths[j].getAttribute('data-on') }; return null; })();
      var dir = st0 && st0.i === i ? (st0.dir === 'asc' ? 'desc' : 'asc') : th.getAttribute('data-first');
      var ndt = resort(dt, { i: i, dir: dir }), b = ndt.querySelector('[data-act="th-sort"][data-col="' + i + '"]'); if (b) b.focus();
    },
    'strip-part': function (t) {
      var wrap = t.closest('[data-strip]'), coll = wrap.closest('[data-collection]'), f = coll.querySelector('[data-filter="' + wrap.getAttribute('data-strip') + '"]'), k = t.getAttribute('data-k');
      f.value = f.value === k ? '' : k; f.dispatchEvent(new Event('change', { bubbles: true }));
      var again = wrap.querySelector('[data-k="' + CSS.escape(k) + '"]'); if (again) again.focus();
    },
    /* a block on a plain map: its row in the table, brought into view and lit for a moment */
    'row-jump': function (t) {
      var tr = VIEW.querySelector('tr[data-row="' + CSS.escape(t.getAttribute('data-id')) + '"]'); if (!tr) return;
      if (LENIS) LENIS.scrollTo(tr, { offset: -window.innerHeight / 3 }); else tr.scrollIntoView({ behavior: 'smooth', block: 'center' });
      tr.classList.add('is-lit'); setTimeout(function () { tr.classList.remove('is-lit'); }, 1600);
    },
    /* the Timeline's desk switch: the line closes up round the desk chosen */
    'tl-desk': function (t) {
      var card = t.closest('[data-tl-card]'), seg = t.closest('.seg'), desk = t.getAttribute('data-desk'), ol = card.querySelector('[data-line]'), n = 0;
      seg.querySelectorAll('button').forEach(function (b) { b.setAttribute('aria-pressed', String(b === t)); });
      seg.style.setProperty('--x', t.offsetLeft + 'px'); seg.style.setProperty('--w', t.offsetWidth + 'px');
      ol.querySelectorAll('[data-it]').forEach(function (li) { var show = !desk || li.getAttribute('data-desk') === desk; li.hidden = !show; if (show) n++; });
      ol.querySelectorAll('.ln-month').forEach(function (li) { li.hidden = !ol.querySelector('[data-it][data-ym="' + li.getAttribute('data-m') + '"]:not([hidden])'); });
      ol.querySelectorAll('.ln-year').forEach(function (li) { var y = li.getAttribute('data-y'); li.hidden = !Array.prototype.some.call(ol.querySelectorAll('[data-it]:not([hidden])'), function (x) { return x.getAttribute('data-ym').slice(0, 4) === y; }); });
      card.querySelector('[data-tl-count]').textContent = n + ' moment' + (n === 1 ? '' : 's') + (desk ? ' on ' + desk : ' across every desk');
      sizeLived(ol);
      if (!matchMedia('(prefers-reduced-motion: reduce)').matches) ol.querySelectorAll('[data-it]:not([hidden]) .ln-it').forEach(function (a, i) { a.animate([{ opacity: 0, transform: 'translateX(-8px)' }, { opacity: 1, transform: 'none' }], { duration: 360, delay: i * 40, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'backwards' }); });
    },
    /* the goal map: select a goal to open it; the pace switch redraws the circles at once */
    'gx-goal': function (t) {
      V.GX.sel = t.getAttribute('data-id'); gxRedraw();
      var det = VIEW.querySelector('[data-gx-detail]');
      if (t.hasAttribute('data-scroll') && det) { if (LENIS) LENIS.scrollTo(det, { offset: -96 }); else det.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
      else { var again = VIEW.querySelector('.gx-plot [data-id="' + t.getAttribute('data-id') + '"]'); if (again) again.focus(); }
    },
    'gx-pace': function (t) {
      V.GX.pace = !!t.checked; gxRedraw();
      if (!matchMedia('(prefers-reduced-motion: reduce)').matches) VIEW.querySelectorAll('.gx-plot [data-pace]').forEach(function (p) { p.animate([{ strokeDasharray: '1 1', strokeDashoffset: 1 }, { strokeDasharray: '1 1', strokeDashoffset: 0 }], { duration: 520, easing: 'cubic-bezier(.2,.7,.2,1)' }); });
    },
    'invite-adviser': function (t) {
      var v = A.adviser(t.getAttribute('data-id'));
      moduleSheet('Advisers', ['Nothing has been sent to ' + v.name + '. Inviting them in, with access to what ' + (/attorney/i.test(v.role) ? 'an attorney' : 'they') + ' covers, is part of the Advisers module.', 'On the free office the register is yours: who covers what, when you last spoke and what is outstanding.']);
    },
    export: doExport,
    /* a desk opened early from its peek, or every desk at once from Profile (3 Oct 2026) */
    'lv-toggle': function (t) {   /* a quest's video, folded until asked for; a playing video stops when folded */
      var b = t.closest('.lv') && t.closest('.lv').querySelector('.lv-body'); if (!b) return;
      var open = b.hidden; b.hidden = !open; t.setAttribute('aria-expanded', String(open));
      if (!open) { var vd = b.querySelector('video'); if (vd) vd.pause(); }
    },
    'desk-open': function (t) { var k = t.getAttribute('data-desk'); if (A.openDesk(k)) { toast(A.DESKS[k].noun + ' is open.'); try { window.dispatchEvent(new CustomEvent('finna:desk-open', { detail: { desk: k, early: true } })); } catch (x) {} } render(); },
    'desks-open-all': function () { A.openAllDesks(); toast('Every desk is open.'); try { window.dispatchEvent(new CustomEvent('finna:desk-open', { detail: { desk: 'all', early: true } })); } catch (x) {} render(); },
    'tq-resume': function () { if (window.FT && window.FT.resume) window.FT.resume(); },
    'tq-desk': function (t) {
      var k = t.getAttribute('data-desk');
      if (window.FT && window.FT.startDesk && window.FT.startDesk(k)) return;
      if (A.openDesk(k)) toast(A.DESKS[k].noun + ' is open.');
      location.hash = '#/' + k;
    },
    'tq-next': function () { if (window.FT && window.FT.next) window.FT.next(); },
    /* the demo's Profile: clear the tutorial's household (its own storage) and open it new; asks twice */
    'tq-fresh': function (t) {
      if (!t.hasAttribute('data-armed')) {
        var was = t.textContent;
        t.setAttribute('data-armed', ''); t.textContent = 'Tap again: this clears the tutorial’s office';
        setTimeout(function () { if (t.isConnected) { t.removeAttribute('data-armed'); t.textContent = was; } }, 4000);
        return;
      }
      try { localStorage.removeItem('finna-platform-tutorial'); } catch (x) {}
      location.href = '?tutorial#/home';
    },
    'lm-veil-close': function () { lmVeilClose(); },
    /* the path: a node's card, the film; a quest: an answer, try again */
    'lx-node': function (t) {
      var way = t.closest('.lx-way'); if (!way) return;
      var was = t.getAttribute('aria-expanded') === 'true'; lxPopClose(way);
      if (was) return;
      var html = V.lxNodeCard(t.getAttribute('data-pid'), t.getAttribute('data-k')); if (!html) return;
      var li = t.closest('.lx-step'), x = parseFloat(li.style.getPropertyValue('--x')) || 0, top = li.offsetTop + li.offsetHeight + 18;
      way.insertAdjacentHTML('beforeend', '<div class="lx-pop" role="group" aria-label="' + e(t.getAttribute('aria-label') || '') + '" style="top:' + top + 'px;--cx:' + x + 'px">' + html + '</div>');
      t.setAttribute('aria-expanded', 'true');
      var pop = way.querySelector('.lx-pop'), k = pop.querySelector('.key');
      if (k) k.focus({ preventScroll: true });
      var b = pop.getBoundingClientRect(), lim = window.innerHeight - (layout() === 'phone' ? 88 : 24);
      if (b.bottom > lim) { var y = (LENIS ? LENIS.scroll : window.scrollY) + b.bottom - lim; if (LENIS) LENIS.scrollTo(y, { force: true }); else window.scrollTo({ top: y, behavior: 'smooth' }); }
    },
    'lx-film': function (t) {
      lxFilmClose();
      var html = V.lxFilm(t.getAttribute('data-v')); if (!html) return;
      LX_FILM_BACK = t; VIEW.insertAdjacentHTML('beforeend', html); lxHold();
      var c = VIEW.querySelector('.lx-film [data-act="lx-film-close"]'); if (c) c.focus();
    },
    'lx-film-close': function () { lxFilmClose(); },
    'qz-pick': qzPick,
    'qz-again': function (t) {
      var box = t.closest('[data-quest]'); if (!box) return;
      var fb = box.querySelector('[data-feedback]'); fb.hidden = true; fb.innerHTML = '';
      box.querySelectorAll('.answer').forEach(function (b) { if (!b.classList.contains('wrong')) b.disabled = false; b.setAttribute('aria-pressed', 'false'); });
      var f = box.querySelector('.answer:not([disabled])'); if (f) f.focus();
    },
    /* Investing through Finna · Coming: the household asks to be told when it opens. The date is kept on the
       household and the key becomes a quiet line; nothing is sent (6 Oct 2026) */
    'ivd-notify': function () {
      var h = S().household; if (!h.ivNotify) { h.ivNotify = DEMO_TODAY; A.log('Asked to be told when investing through Finna opens'); A.save(); }
      render(); toast('We’ll tell you here when investing through Finna opens.');
    },
    /* THE FINANCIAL IDENTITY (29 Sep 2026): a quest's four parts, a check-up, the charter */
    'id-step': function () { var Q = V.IDQ; if (!Q) return; idKeep(); Q.step = Math.min(3, Q.step + 1); Q.pick = null; render(); toY(0); idFocus(); },
    'id-pick': function (t) {
      var Q = V.IDQ; if (!Q || t.disabled) return; Q.pick = +t.getAttribute('data-i');
      t.closest('.answers').querySelectorAll('.answer').forEach(function (b) { b.setAttribute('aria-pressed', String(b === t)); });
      var k = VIEW.querySelector('[data-act="id-check"]'); if (k) k.disabled = false;
    },
    'id-check': function () {
      var Q = V.IDQ; if (!Q || Q.pick == null) return;
      if (Q.pick === 0) Q.solved = true; else Q.wrong.push(Q.pick);
      Q.pick = null; render();
      clearOfFreya(VIEW.querySelector('.quest .feedback + .quest-foot') || VIEW.querySelector('.quest .feedback'), 60);
      idFocus();
    },
    'id-multi': function (t) {
      var Q = V.IDQ; if (!Q) return; idKeep();
      var k = t.getAttribute('data-k'), i = Q.picks.indexOf(k);
      if (i > -1) Q.picks.splice(i, 1); else if (Q.picks.length < 3) Q.picks.push(k);
      render(); var again = VIEW.querySelector('[data-act="id-multi"][data-k="' + k + '"]'); if (again) again.focus({ preventScroll: true });
    },
    'id-choose': function (t) {
      var Q = V.IDQ; if (!Q) return; Q.pick = +t.getAttribute('data-i');
      t.closest('.answers').querySelectorAll('.answer').forEach(function (b) { b.setAttribute('aria-pressed', String(b === t)); b.setAttribute('aria-checked', String(b === t)); });
      var k = VIEW.querySelector('[data-act="id-save"]'); if (k) k.disabled = false;
    },
    'id-save': function () {
      var Q = V.IDQ; if (!Q) return; idKeep();
      var LI = A.LI, isF = Q.kind === 'f', q = (isF ? LI.SIDE : LI.QUESTS)[Q.n - 1], y = q.you, dt = {};
      if (y.kind === 'picks') {
        if (!Q.picks.length) return;
        var O = LI.Q2.opts, of = function (k) { return O.filter(function (o) { return o[0] === k; })[0]; };
        dt.picks = Q.picks.slice(); dt.purpose = of(Q.picks[0])[2]; dt.second = Q.picks[1] ? of(Q.picks[1])[2] : ''; dt.sentence = String(Q.sentence || '').trim();
      } else if (y.kind === 'choice' || y.kind === 'diff') {
        if (Q.pick == null) return;
        dt[y.k] = y.opts[Q.pick][0]; if (y.sentence) dt[y.k + 'Sentence'] = String(Q.sentence || '').trim();
      }
      var before = A.learnXP(), res = isF ? A.idSideSave(Q.n, dt) : A.idSave(Q.n, dt);
      Q.moved = isF ? (Q.n === 1 || Q.n === 4 ? ['rules'] : []) : ({ 2: ['aim'], 3: ['horizon'], 4: ['deciding'], 6: ['reach'], 9: ['breadth'] }[Q.n] || []);
      Q.step = 3; Q.res = res;
      render(); toY(0);
      if (res.first) {
        var xpEl = VIEW.querySelector('[data-lm-xp]'); if (xpEl) xpEl.textContent = Number(before).toLocaleString('en-US') + ' XP';
        var from = VIEW.querySelector('.id-und'); if (from) lmFly(from, res.xp);
      }
      if (res.ringUp) setTimeout(function () { lmVeil(res.xp); }, 1000);
      drawNav(CURR); idFocus();
    },
    /* a stage complete: Learn opens on the Identity domain */
    'id-grow': function (t) { location.hash = t.getAttribute('href'); },
    'id-cu': function (t) {
      var C = V.IDCU; if (!C) return; var k = t.getAttribute('data-k'), same = t.getAttribute('data-v') === 'same', p = C.picks[k] || {};
      C.picks[k] = { same: same, pick: same ? null : p.pick || null }; render();
      var again = VIEW.querySelector('[data-act="id-cu"][data-k="' + k + '"][data-v="' + (same ? 'same' : 'changed') + '"]'); if (again) again.focus({ preventScroll: true });
    },
    'id-cu-pick': function (t) {
      var C = V.IDCU; if (!C || t.disabled) return; var k = t.getAttribute('data-k'); C.picks[k] = { same: false, pick: t.getAttribute('data-v') }; render();
      var k2 = VIEW.querySelector('[data-act="id-cu-save"]'); if (k2) k2.focus({ preventScroll: true });
    },
    'id-cu-save': function () {
      var C = V.IDCU; if (!C) return; var ch = {};
      Object.keys(C.picks).forEach(function (k) { var p = C.picks[k]; if (p && p.same === false && p.pick) ch[k] = p.pick; });
      var before = A.learnXP(), res = A.idCheckSave(ch); C.done = res;
      render(); toY(0);
      var xpEl = VIEW.querySelector('[data-lm-xp]'); if (xpEl) xpEl.textContent = Number(before).toLocaleString('en-US') + ' XP';
      var from = VIEW.querySelector('.id-und'); if (from) lmFly(from, res.xp);
      if (res.ringUp) setTimeout(function () { lmVeil(res.xp); }, 1000);
      drawNav(CURR); idFocus();
    },
    'id-agree': function () { A.idAgree(); render(); drawNav(CURR); toast('The Family Charter is agreed. Version 1 is kept on Governance.'); },
    'test-pick': testPick, 'test-next': testNext,
    'test-again': function () { V.TEST = null; render(); toY(0); },
    'test-leave': function (t) { V.TEST = null; location.hash = t.getAttribute('href'); },
    ask: function (t) { ask(t.getAttribute('data-q')); },
    'fy-close': function () { FY.open = false; document.getElementById('fy-panel').hidden = true; document.documentElement.removeAttribute('data-fy-open'); setFy('ready'); },
    /* light ⇄ dark: flip whatever is showing now, and keep the choice */
    mode: function () {
      var toDark = document.documentElement.getAttribute('data-mode-now') !== 'dark';
      switchClick(toDark); window.FinnaMode.set(toDark ? 'dark' : 'light');
    },
    'fy-toggle': function () { if (FY.open) ACT['fy-close'](); else openPanel(); },
    'fy-tab': function () { if (FY.open) ACT['fy-close'](); else { if (CURR && CURR.base === 'freya') location.hash = '#/home'; openPanel(); setTimeout(function () { var i = inputEl(); if (i && layout() !== 'phone') i.focus(); }, 60); } },
    'fy-chip': function (t) { ask(t.getAttribute('data-q')); },
    copy: function (t) {
      var ta = t.closest('.msg-a').querySelector('textarea');
      try { navigator.clipboard.writeText(ta.value).then(function () { toast('Copied.'); }, function () { ta.select(); toast('Selected. Copy it with your keyboard.'); }); }
      catch (x) { ta.select(); toast('Selected. Copy it with your keyboard.'); }
    }
  };
  Object.keys(FORMS_HTML).forEach(function (k) { ACT[k] = function (t) { var f = FORMS_HTML[k](t); openSheet(f[0], f[1], f[2]); if (window.Finna) window.Finna.init(sheet); }; });

  /* EDIT VIEW (build spec §2): pin a module, hide one, or reset. Pins and hides beat Freya's
     order; a hidden card leaves this view only; what needs the household can't be hidden. */
  function evRows(s) {
    var pr = V.viewPrefs(s);
    return V.catalogue(s).map(function (m) {
      var pinned = pr.pinned.indexOf(m.id) > -1, hidden = pr.hidden.indexOf(m.id) > -1;
      var state = m.needs ? 'Leads while it needs you' + (m.why ? ': ' + m.why : '') : hidden ? (s === 'home' ? 'Hidden from Office' : 'Hidden from this view · its page stays in the sub menu') : pinned ? 'Pinned to the top' : m.why ? 'Shown because ' + m.why : 'In the day’s order';
      return '<div class="record ev-row"><div class="record-main"><span class="record-title">' + e(m.name) + '</span><span class="record-sub">' + e(state) + '</span></div>' +
        '<div class="record-meta ev-ctl">' + (m.needs ? '<span class="status-label attention">Needs you</span>' :
          '<span class="ev-sw"><span aria-hidden="true">Pin</span><label class="switch"><span class="sr">Pin ' + e(m.name) + '</span><input type="checkbox" data-view-pin="' + m.id + '" data-section="' + s + '"' + (pinned ? ' checked' : '') + '></label></span>' +
          '<span class="ev-sw"><span aria-hidden="true">Show</span><label class="switch"><span class="sr">Show ' + e(m.name) + '</span><input type="checkbox" data-view-show="' + m.id + '" data-section="' + s + '"' + (hidden ? '' : ' checked') + '></label></span>') + '</div></div>';
    }).join('');
  }
  function editView(s) {
    openSheet('Edit view', e(placeName(s)) + ' · Suggested', '<p class="help">What needs you comes first; the rest follows your record, in an order fixed for the day. Pinning keeps a card at the top; hiding takes it off this view' + (s === 'home' ? '' : ', never out of the sub menu') + '. What needs you always shows.</p>' +
      '<div data-ev-rows="' + s + '">' + evRows(s) + '</div><div class="actions"><button class="key key-secondary" type="button" data-act="view-reset" data-section="' + s + '">Reset the view</button><button class="key" type="button" data-act="sheet-close">Done</button></div>');
  }
  document.addEventListener('change', function (ev) {
    if (ev.target.id === 'pp-as') { var u = document.querySelector('[data-if-partner]'); if (u) u.hidden = ev.target.value !== 'partner'; }
  });
  document.addEventListener('change', function (ev) {
    var t = ev.target, pin = t.getAttribute && t.getAttribute('data-view-pin'), show = t.getAttribute && t.getAttribute('data-view-show');
    if (!pin && !show) return;
    var s = t.getAttribute('data-section'), pr = V.viewPrefs(s), id = pin || show;
    function drop(list) { var i = list.indexOf(id); if (i > -1) list.splice(i, 1); }
    if (pin) { drop(pr.pinned); if (t.checked) { pr.pinned.push(id); drop(pr.hidden); } }
    else { drop(pr.hidden); if (!t.checked) { pr.hidden.push(id); drop(pr.pinned); } }
    A.save(); render();
    /* redraw the rows in place and put focus back on the switch that was used */
    var box = sheet.querySelector('[data-ev-rows]'); if (box) { box.innerHTML = evRows(s); var again = box.querySelector('[data-view-' + (pin ? 'pin' : 'show') + '="' + id + '"]'); if (again) again.focus(); }
    toast(pin ? (t.checked ? 'Pinned to the top.' : 'Back in the day’s order.') : (t.checked ? 'Shown.' : s === 'home' ? 'Hidden from Office.' : 'Hidden from this view. Its page is still in the sub menu.'));
  });
  var FORMS = {
    valuation: function (f, fd) {
      var id = f.getAttribute('data-id'), amt = num(fd.get('amount'));
      if (amt == null) { f.querySelector('[name=amount]').closest('.form-row').setAttribute('data-invalid', 'true'); return; }
      S().valuations.push({ line: id, amount: amt, asOf: fd.get('asOf'), source: fd.get('source'), ref: '', by: A.who(), reason: fd.get('reason'), at: DEMO_TODAY });
      var newer = A.cur(id), late = newer && newer.amount !== amt && newer.asOf > fd.get('asOf');
      commit(late ? 'Kept in the history. A figure dated ' + A.date(newer.asOf) + ' is newer, so ' + A.money(newer.amount) + ' stays the current value.' : 'Saved as a new row. The old value stays in the history.', 'Updated ' + A.line(id).name); lineSheet(id);
    },
    'add-asset': function (f, fd) {
      var amt = num(fd.get('amount')); if (amt == null) return;
      var cls = fd.get('cls'), id = A.uid('a'), mix = A.DEFAULT_MIX[cls];
      if (MIX_SPLIT.indexOf(cls) > -1) { mix = readMix(f, fd); if (!mix) return; }
      S().assets.push({ id: id, name: fd.get('name'), cls: cls, holder: fd.get('holder'), country: A.base() === 'USD' ? 'United States' : '', currency: A.base(), mix: mix, liquidity: A.LIQ[cls], institution: fd.get('institution'), docs: [] });
      S().valuations.push({ line: id, amount: amt, asOf: fd.get('asOf'), source: fd.get('source'), ref: '', by: A.who(), reason: 'Added by hand', at: DEMO_TODAY });
      closeSheet(); commit('Added. It is in net worth now.', 'Added ' + fd.get('name'));
    },
    'line-mix': function (f, fd) {
      var a = A.asset(f.getAttribute('data-id')), mix = readMix(f, fd); if (!a || !mix) return;
      a.mix = mix; commit('Saved. Drift and What you hold count the new split.', 'Changed what ' + a.name + ' holds'); lineSheet(a.id);
    },
    'add-debt': function (f, fd) {
      var amt = num(fd.get('amount')); if (amt == null) return;
      var id = A.uid('l'), type = fd.get('type');
      S().liabilities.push({ id: id, name: fd.get('name'), type: type, lender: fd.get('lender'), securedOn: fd.get('securedOn'), rate: num(fd.get('rate')) || 0, rateType: '—', reset: fd.get('reset'), maturity: fd.get('maturity'), kind: type === 'Capital commitment' ? 'commitment' : 'drawn', committed: type === 'Capital commitment' ? amt : undefined, docs: [] });
      S().valuations.push({ line: id, amount: amt, asOf: DEMO_TODAY, source: 'entered', ref: '', by: A.who(), reason: 'Added by hand', at: DEMO_TODAY });
      closeSheet(); commit('Added. Its dates are in the Timeline.', 'Added ' + fd.get('name'));
    },
    'add-adviser': function (f, fd) {
      S().advisers.push({ id: A.uid('v'), name: fd.get('name'), firm: fd.get('firm'), role: fd.get('role'), covers: fd.getAll('covers'), contact: fd.get('contact'), lastContact: '', open: fd.get('open') });
      closeSheet(); commit('Added to the register. Nothing was sent to them.', 'Added adviser ' + fd.get('name'));
    },
    'add-person': function (f, fd) {
      var id = A.uid('p'), to = String(fd.get('to') || '').split('+').filter(Boolean), as = fd.get('as'), R = S().relations || (S().relations = []);
      S().people.push({ id: id, name: fd.get('name'), born: +fd.get('born'), relationship: fd.get('relationship') || 'Family', dependant: !!fd.get('dependant') });
      if (as === 'child') to.forEach(function (p) { R.push({ a: p, b: id, kind: 'parent' }); });
      else if (as === 'parent') to.forEach(function (p) { R.push({ a: id, b: p, kind: 'parent' }); });
      else if (to[0]) {
        /* a sibling shares the parents already recorded; a partner or other family sits beside */
        var ps = as === 'sibling' ? A.parentsOf(to[0]) : [];
        if (ps.length) ps.forEach(function (p) { R.push({ a: p, b: id, kind: 'parent' }); });
        else R.push({ a: to[0], b: id, kind: as === 'partner' ? 'partner' : as === 'sibling' ? 'sibling' : 'other' });
        if (as === 'partner' && fd.get('union')) { var nx = A.person(id); if (!fd.get('relationship')) nx.relationship = ''; A.setUnion(to[0], id, fd.get('union')); }
      }
      closeSheet(); A.log('Added ' + fd.get('name') + ' to the family'); A.save();
      location.hash = '#/records/family/' + id; toast('Added to the tree. Nothing was sent to them.');
    },
    'edit-person': function (f, fd) {
      var x = A.person(f.getAttribute('data-id'));
      x.name = fd.get('name'); x.born = +fd.get('born'); x.relationship = fd.get('relationship') || x.relationship; x.dependant = !!fd.get('dependant');
      A.partnersOf(x.id).forEach(function (y) { var u = fd.get('union:' + y); if (u != null && u !== A.unionStatus(x.id, y)) A.setUnion(x.id, y, u); });
      closeSheet(); commit('Saved. Every desk reads the change.', 'Edited ' + x.name);
    },
    'edit-goal': function (f, fd) {
      var g = S().goals.filter(function (x) { return x.id === f.getAttribute('data-id'); })[0]; if (!g) return;
      var amt = num(fd.get('amount')); if (amt == null) return;
      var was = (g.linked || []).length;
      g.name = fd.get('name') || g.name; g.amount = amt; g.date = fd.get('date') || g.date; g.priority = fd.get('priority') || g.priority;
      g.linked = fd.getAll('linked'); g.monthly = num(fd.get('monthly')) || 0;
      closeSheet(); commit(g.linked.length && !was ? 'Linked. The goal map and the runway read it.' : 'Saved. The goal map and the runway read the change.', 'Edited goal ' + g.name);
    },
    'add-goal': function (f, fd) {
      var amt = num(fd.get('amount')); if (amt == null) return;
      S().goals.push({ id: A.uid('g'), name: fd.get('name'), amount: amt, date: fd.get('date'), priority: fd.get('priority'), linked: fd.getAll('linked'), monthly: num(fd.get('monthly')) || 0, source: 'Added by ' + A.who() });
      closeSheet(); commit('Goal added. Its date is in the Timeline.', 'Added goal ' + fd.get('name'));
    },
    'edit-policy': function (f, fd) {
      var p = A.policy() || { version: 0, liquidityMin: 0, concentrationMax: 0 }, bands = {}, ok = true;
      A.POLICY_CLASSES.forEach(function (k) {
        var b = [0, 1, 2].map(function (i) { return num(fd.get(k + '-' + i)); });
        if (b.some(function (x) { return x == null || x < 0 || x > 100; }) || !(b[1] <= b[0] && b[0] <= b[2])) ok = false;
        bands[k] = b;
      });
      var er = f.querySelector('[data-band-err]'), sum = A.POLICY_CLASSES.reduce(function (s2, k) { return s2 + (bands[k][0] || 0); }, 0);
      if (ok && Math.abs(sum - 100) >= 0.05) { ok = false; er.querySelector('.error').textContent = 'The targets add up to ' + (Math.round(sum * 10) / 10) + '%. Move them until they make 100%.'; }
      else er.querySelector('.error').textContent = 'Each floor must sit at or under its target, and each target at or under its ceiling.';
      er.setAttribute('data-invalid', ok ? 'false' : 'true');
      if (!ok) { var bad = f.querySelector('tr.is-bad input') || f.querySelector('[data-rxi]'); if (bad) bad.focus(); return; }
      if (!fd.getAll('agreed').length) { toast('At least one person has to agree it.'); return; }
      S().policy.push({ version: p.version + 1, effective: DEMO_TODAY, by: A.who(), agreed: fd.getAll('agreed'), note: fd.get('note'),
        purpose: fd.get('purpose'), enough: fd.get('enough'), exclusions: fd.get('exclusions'),
        liquidityMin: num(fd.get('liquidityMin')) || p.liquidityMin, concentrationMax: num(fd.get('concentrationMax')) || p.concentrationMax, bands: bands });
      closeSheet(); commit('Version ' + (p.version + 1) + ' saved. Drift is measured against it from now.', 'Wrote policy version ' + (p.version + 1));
    },
    'edit-identity': function (f, fd) {
      var id = S().identity; id.whoFor = fd.get('whoFor'); id.horizon = +fd.get('horizon'); id.badYear = fd.get('badYear') || id.badYear; id.updated = DEMO_TODAY;
      closeSheet(); commit('Saved. Nothing already recorded was rewritten.', 'Changed Financial Identity');
    },
    'add-cover': function (f, fd) {
      S().cover.push({ id: A.uid('c'), type: fd.get('type'), covers: fd.get('covers'), insurer: fd.get('insurer') || '—', sum: num(fd.get('sum')) || 0, premium: num(fd.get('premium')) || 0, renews: fd.get('renews'), beneficiaries: fd.get('beneficiaries'), nominated: fd.get('nominated'), doc: '' });
      closeSheet(); commit('Cover added. The renewal is in the Timeline.', 'Added ' + fd.get('type') + ' cover');
    },
    'edit-will': function (f, fd) {
      var w = S().will; ['exists', 'kind', 'signed', 'reviewed', 'original', 'executors', 'reviewBy'].forEach(function (k) { w[k] = fd.get(k); });
      closeSheet(); commit('Saved.', 'Updated the will record');
    },
    recovery: function (f, fd) { S().security.recoveryContact = fd.get('person'); closeSheet(); commit('Recovery contact set.', 'Set a recovery contact'); },
    'doc-meta': function (f, fd) {
      var d = A.doc(f.getAttribute('data-id')), t = fd.get('target') || '', cur = A.belongsTo(d).map(function (x) { return x.id; });
      d.cat = fd.get('cat'); d.original = fd.get('original') || d.original;
      if (t ? cur.indexOf(t) < 0 : cur.length) A.fileDoc(d, t);
      if (t) delete d.proposal;
      closeSheet(); commit(t ? 'Filed. The desk it belongs to lists it now.' : 'Saved.', (t ? 'Filed ' : 'Updated ') + d.name);
    },
    invite: function (f, fd) {
      if (S().members.length >= 2) { moduleSheet('Family', ['A third adult in the household is part of the Family module: more members, more generations, and the Family Charter.', 'Your office stays free for two adults. Children and other relatives can be recorded as people, without a login.']); return; }
      S().members.push({ id: A.uid('m'), name: fd.get('email'), role: 'partner', email: fd.get('email'), joined: DEMO_TODAY });
      commit('Invitation sent.', 'Invited ' + fd.get('email'));
    },
    ask: function (f, fd) { var q = String(fd.get('q') || '').trim(); if (!q) return; f.reset(); sendState(); ask(q); },
    'ask-page': function (f, fd) { var q = String(fd.get('q') || '').trim(); if (!q) return; f.reset(); ask(q); }
  };

  /* A QUEST AS THE CONCEPT PLAYS IT (prompt 14): an answer opens the panel at the foot at once. A wrong one is set aside
     and costs nothing (a second try earns the same); a right one earns 40 XP the first time, which rises into the XP;
     when it closes the rank's ring, the ring fills and the new rank shows */
  function qzPick(t) {
    var box = t.closest('[data-quest]'); if (!box || t.disabled) return;
    var parts = box.getAttribute('data-quest').split('.'), pid = parts[0], n = +parts[1], q = A.learnQ(pid, n), i = +t.getAttribute('data-i'), fb = box.querySelector('[data-feedback]');
    box.querySelectorAll('.answer').forEach(function (b) { b.setAttribute('aria-pressed', String(b === t)); b.disabled = true; });
    if (i !== 0) {
      t.classList.add('wrong'); box.setAttribute('data-tried', '');
      fb.className = 'qz-foot is-try'; fb.innerHTML = V.lxTry(q); fb.hidden = false;
      var k0 = fb.querySelector('.key'); if (k0) k0.focus({ preventScroll: true });
      return;
    }
    t.classList.add('correct');
    var res = A.learnAnswer(pid, n); res.second = box.hasAttribute('data-tried');
    fb.className = 'qz-foot is-ok'; fb.innerHTML = V.lxAfter(pid, n, res); fb.hidden = false;
    var p = A.learnPath(pid), bar = box.querySelector('.qz-bar i'); if (bar) bar.style.width = Math.max(4, Math.round(p.done / p.quests * 100)) + '%';
    if (res.first) lmFly(t, res.xp);
    if (res.ringUp) setTimeout(function () { qzRankUp(box, res.xp); }, matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 950);
    drawNav(CURR);
    var nk = fb.querySelector('.key'); if (nk) nk.focus({ preventScroll: true });
  }
  function qzRankUp(box, xp) {
    var rk = box.querySelector('[data-qz-rk]'); if (!rk) return;
    var R = A.ring(xp), a = rk.querySelector('.a'); if (a) a.setAttribute('stroke-dasharray', a.getAttribute('data-c') + ' ' + a.getAttribute('data-c'));
    rk.insertAdjacentHTML('beforeend', '<span class="qz-rank" role="status">Rank ' + R.r + '</span>');
    setTimeout(function () { if (document.contains(rk)) rk.innerHTML = V.lxRing(xp, false, 'is-s') + '<span class="qz-rank" role="status">Rank ' + R.r + '</span>'; }, 1400);
  }
  function lxPopClose(way) {
    (way ? [way] : Array.prototype.slice.call(VIEW.querySelectorAll('.lx-way'))).forEach(function (w) {
      var p = w.querySelector('.lx-pop'); if (p) p.remove();
      w.querySelectorAll('.lx-node[aria-expanded="true"]').forEach(function (b) { b.setAttribute('aria-expanded', 'false'); });
    });
  }
  var LX_FILM_BACK = null;
  function lxFilmClose() {
    var f = VIEW.querySelector('.lx-film'); if (!f) return;
    var v = f.querySelector('video'); if (v) v.pause();
    f.remove(); lxHold();
    if (LX_FILM_BACK && document.contains(LX_FILM_BACK)) LX_FILM_BACK.focus({ preventScroll: true }); LX_FILM_BACK = null;
  }
  document.addEventListener('click', function (ev) {
    if (!ev.target.closest || ev.target.closest('.lx-pop, .lx-node')) return;
    if (VIEW.querySelector('.lx-pop')) lxPopClose();
  });
  document.addEventListener('keydown', function (ev) {
    if (ev.key !== 'Escape') return;
    if (VIEW.querySelector('.lx-film')) { ev.preventDefault(); lxFilmClose(); return; }
    if (VIEW.querySelector('.lx-pop')) { ev.preventDefault(); lxPopClose(); return; }
    var x = VIEW.querySelector('[data-qz] .qz-x, [data-qz] .lx-cere-k');
    if (x && !document.querySelector('.lm-veil') && sheet.hidden) { ev.preventDefault(); x.click(); }
  });

  /* AFTER AN ANSWER (Christian, 4 Oct 2026): the page moves so the why and its keys sit just above Freya's bar,
     never under it, and only once the +40 XP has landed in the XP above the question (900ms and its bump): a
     scroll during the rise would carry the XP off the screen. Nothing moves when it all fits already. */
  function clearOfFreya(el, wait) {
    if (!el) return;
    var tries = 0;
    setTimeout(function go() {
      if (!document.contains(el)) return;
      if (document.querySelector('.lm-veil')) { if (++tries < 480) setTimeout(go, 250); return; }   /* a ring closing: once Carry on is pressed */
      var r = el.getBoundingClientRect(), vh = window.innerHeight, lim = vh;
      document.querySelectorAll('.dock .fy-bar, .dock, #tq .tq-card').forEach(function (o) {
        if (o.hidden || o.closest('[hidden]')) return;
        var b = o.getBoundingClientRect(); if (b.height && b.top > vh * 0.5 && b.top < lim) lim = b.top;
      });
      var d = r.bottom + 16 - lim;
      if (d <= 1) return;
      var y = (LENIS ? LENIS.scroll : window.scrollY) + d;
      if (LENIS) LENIS.scrollTo(y, { force: true }); else window.scrollTo({ top: y, behavior: 'smooth' });
    }, wait || 0);
  }
  /* the identity quest: an answer typed is kept across a redraw, and focus goes to the part's key */
  function idKeep() { var inp = VIEW.querySelector('[data-id-sentence]'); if (inp && V.IDQ) V.IDQ.sentence = inp.value; }
  function idFocus() { var k = VIEW.querySelector('.quest .feedback + .quest-foot .key, .quest .quest-foot .key:not([disabled])'); if (k) k.focus({ preventScroll: true }); }
  /* +40 XP rises from the answer into the XP beside the question */
  function lmFly(from, xp) {
    var to = VIEW.querySelector('[data-lm-xp]'); if (!to) return;
    var fin = function () { to.textContent = Number(xp).toLocaleString('en-US') + ' XP'; to.classList.remove('is-bump'); void to.offsetWidth; to.classList.add('is-bump'); };
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { fin(); return; }
    var a = from.getBoundingClientRect(), b = to.getBoundingClientRect(), el = document.createElement('div');
    el.className = 'lm-fly'; el.setAttribute('aria-hidden', 'true'); el.textContent = '+40 XP';
    el.style.left = (a.left + a.width * 0.6) + 'px'; el.style.top = (a.top + 8) + 'px'; document.body.appendChild(el);
    requestAnimationFrame(function () { requestAnimationFrame(function () { el.style.transform = 'translate(' + (b.left - a.left - a.width * 0.6) + 'px,' + (b.top - a.top - 8) + 'px) scale(.8)'; el.style.opacity = '0.2'; }); });
    setTimeout(function () { el.remove(); fin(); }, 900);
  }
  /* a ring closes: a quiet dialog, focus held inside it until Carry on */
  var LM_VEIL_BACK = null;
  function lmVeil(xp) {
    lmVeilClose();
    LM_VEIL_BACK = document.activeElement;
    var d = document.createElement('div'); d.innerHTML = V.lmRingVeil(xp); var v = d.firstChild; document.body.appendChild(v);
    setTimeout(function () { lmArcs(v); }, 60);
    var k = v.querySelector('.key'); if (k) k.focus();
  }
  function lmVeilClose() {
    var v = document.querySelector('.lm-veil'); if (!v) return;
    v.remove(); if (LM_VEIL_BACK && LM_VEIL_BACK.focus && document.contains(LM_VEIL_BACK)) LM_VEIL_BACK.focus({ preventScroll: true }); LM_VEIL_BACK = null;
  }
  document.addEventListener('keydown', function (ev) {
    var v = document.querySelector('.lm-veil'); if (!v) return;
    if (ev.key === 'Escape') { ev.preventDefault(); lmVeilClose(); }
    if (ev.key === 'Tab') { ev.preventDefault(); var k = v.querySelector('.key'); if (k) k.focus(); }
  });
  /* the rings' arcs run to where the household stands */
  function lmArcs(root) { (root || VIEW).querySelectorAll('.lm-rings .arc[data-to]').forEach(function (a) { a.setAttribute('stroke-dashoffset', a.getAttribute('data-to')); }); }

  /* Learn's rings: their arcs run to where the household stands, once the page is drawn */
  function layoutLearn() { setTimeout(function () { lmArcs(VIEW); }, 60); }
  /* the test: a pick, the next question, the result */
  function testPick(t) {
    var T = V.TEST; if (!T) return; T.pick = +t.getAttribute('data-i');
    t.closest('.answers').querySelectorAll('.answer').forEach(function (b) { b.setAttribute('aria-pressed', String(b === t)); });
    var k = VIEW.querySelector('[data-act="test-next"]'); if (k) k.disabled = false;
  }
  function testNext() {
    var T = V.TEST; if (!T || T.pick == null) return;
    T.picks[T.i] = T.pick; T.pick = null;
    if (T.i < T.draw.length - 1) { T.i++; var ys = VIEW.querySelector('[data-qz]'); render(); var yn = VIEW.querySelector('[data-qz]'); if (!yn && ys) toY(0); return; }
    T.right = T.picks.filter(function (x) { return x === 0; }).length;
    var res = A.learnTest(T.id, T.right);
    if (res.pass) {
      V.TEST = null;
      var go = '#/learn/path/' + T.id + '/done';
      if (location.hash === go) render(); else location.hash = go;
      /* the ceremony says the new rank: no ring's veil over it */
    } else { T.done = true; render(); }
    drawNav(CURR);
  }

  /* upload, timeline filter, notification switches — wired after each render */
  /* UPLOAD (V1–V3). From a line, a policy, the will or the household policy the document files
     itself, already linked. From the vault, the add key or a card with no line it lands in Needs
     filing, and — while the month's reading allowance lasts — gets a proposal (see propose()). */
  function upload(inp) {
    var files = Array.prototype.slice.call(inp.files || []); if (!files.length) return;
    var t = inp.getAttribute('data-upload-for') || '', F = S().freya, last = null, where = null;
    files.forEach(function (fl) {
      var d = { id: A.uid('d'), name: fl.name.replace(/\.[^.]+$/, ''), cat: 'Other', date: DEMO_TODAY, size: Math.max(0.1, fl.size / 1048576).toFixed(1) + ' MB',
        original: 'Digital only', lines: [], summary: '', uploaded: true, from: CURR ? CURR.base : '' };
      S().documents.push(d);
      if (t) { A.fileDoc(d, t); d.cat = A.catFor(t); where = A.belongsTo(d)[0]; }
      else if (F.documents < F.allowanceDocuments) { F.documents++; d.read = true; var pr = A.propose(d); if (pr) { d.proposal = pr; d.cat = pr.cat; } }
      last = d;
    });
    inp.value = '';
    var logLine = 'Uploaded ' + files.length + ' document' + (files.length > 1 ? 's' : '');
    if (where) {
      commit('Filed in the Family Vault with ' + where.label + '.', logLine);
      if (!sheet.hidden && A.line(t)) lineSheet(t);
      return;
    }
    commit(files.length > 1 ? files.length + ' documents are in Needs filing.' : 'In the Family Vault, in Needs filing.', logLine);
    docSheet(last.id);
  }
  function wireNotify() {
    VIEW.querySelectorAll('[data-notify]').forEach(function (inp) {
      inp.addEventListener('change', function () { S().notifications[inp.getAttribute('data-notify')] = inp.checked; A.log('Changed notifications'); A.save(); toast(inp.checked ? 'On.' : 'Off.'); });
    });
  }

  /* export: through the viewer's download capability where there is one; a plain file
     link where the page runs on its own; the text itself as the last resort */
  function doExport() {
    var data = JSON.stringify({ exported: DEMO_TODAY, household: S() }, null, 2), name = 'johnsen-household-export.json';
    function shown() { openSheet('Export', 'Everything, as text', '<p class="help">Your browser would not save the file here, so the export is below. Copy it.</p><div class="msg-a"><textarea class="input" style="min-height:320px">' + e(data) + '</textarea><div><button class="key key-s key-secondary" type="button" data-act="copy">Copy</button></div></div>'); }
    function blob() { try { var a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([data], { type: 'application/json' })); a.download = name; document.body.appendChild(a); a.click(); a.remove(); toast('Exported.'); } catch (x) { shown(); } }
    if (window.claude && window.claude.use) {
      window.claude.use('downloads').then(function (dl) {
        if (!dl) { blob(); return; }
        dl.save({ filename: name, data: data }).then(function () { A.log('Exported everything'); A.save(); toast('Exported.'); }, function (err) { if (err && err.code === 'declined') return; shown(); });
      }, blob);
    } else blob();
  }

  /* ── Freya ───────────────────────────────────────────────────────────── */
  var FY = { open: false, thread: [], convos: [], convoId: null, busy: false, sample: undefined, ctx: { route: 'home', title: 'Office' } };
  /* Ready is her resting state: she never sleeps, and pointing at her changes nothing (27 Sep 2026) */
  var STATE_LABEL = { ready: 'Ready', listening: 'Listening', thinking: 'Thinking', answering: 'Answering', has: 'Has something', needs: 'Needs you', cannot: 'Cannot' };
  function inputEl() { return document.getElementById('fy-input'); }
  /* the send key waits, grey, until there is a question in the field; then it is the green key (28 Sep 2026) */
  function sendState() { var k = document.querySelector('.dock .fy-send'), i = inputEl(); if (k && i) k.disabled = !i.value.trim(); }
  function setFy(st) {
    if (st === 'ready' && !S().freya.briefingRead) st = 'has';
    FY.state = st; document.querySelectorAll('[data-fy-mark]').forEach(function (m) { m.setAttribute('data-state', st); });
    document.querySelectorAll('[data-fy-state]').forEach(function (l) { l.textContent = STATE_LABEL[st]; });
  }
  function getSample() {
    if (FY.sample !== undefined) return Promise.resolve(FY.sample);
    if (!window.claude || !window.claude.use) { FY.sample = null; return Promise.resolve(null); }
    return window.claude.use('sample').then(function (s) { FY.sample = s || null; return FY.sample; }, function () { FY.sample = null; return null; });
  }
  getSample();
  var CHIPS = {
    home: ['What needs us this week?', 'Why is our net worth different from September 2?', 'Draft a note to Maria Lund about the mortgage adjusting in January'],
    records: ['Which figures need checking, and why?', 'What moved since September 2?', 'Draft a note to Maria Lund about the mortgage adjusting in January'],
    policy: ['Why are listed shares above our ceiling?', 'What does our policy say about cash?', 'What have we not written down yet?'],
    investment: ['How is our money spread?', 'How do Finna funds open?', 'Should we buy more bonds?'],
    protection: ['What should we check before the home insurance renews?', 'Which beneficiary designations are oldest?'],
    succession: ['What haven’t we decided about succession?', 'Draft a note to Andrew Holm about reading the wills again'],
    learn: ['What should I learn next, and why?'], vault: ['Which documents still need filing?', 'Where is the original of our wills?'],
    freya: ['What needs us this week?', 'What falls due in the next three months?'], profile: ['Who can see our household?'],
    /* on a what-if tool the chips are its questions (28 Sep 2026); drawChips looks for the page first */
    'policy.runway': ['Why is it not 100 of 100?', 'What if Michael retires at 60?', 'Try spending $140,000 a year'],
    'policy.planning': ['Why does a savings account need so much more?', 'What if the cabin roof moves a year later?', 'Try setting aside $6,000 a month'],
    'investment.mix': ['Why is 2008 marked?', 'Why is private equity’s volatility lower?', 'Try the family office average'],
    'protection.safety': ['Try spending $15,000 a month', 'What if we also sell the taxable investments?', 'What is the floor for?'],
    'profile.method': ['Why is private equity 15.5%?', 'Why is private equity’s volatility lower?']
  };
  function fyContext(r) {
    var place = placeName(r.base), pg = (items(r.base).filter(function (x) { return x.key === currentKey(r); })[0] || {}).label;
    FY.ctx = { route: r.base + (r.path ? '.' + r.path : ''), title: place + (pg && pg !== 'Suggested' && pg !== 'Overview' ? ' · ' + pg : '') };
    var lxp = r.base === 'learn' && r.sub === 'path' ? A.learnPath(r.rest[0]) : null;   /* a path's page: ask about the path */
    var about = lxp ? lxp.title : r.base === 'vault' ? 'the vault' : r.base === 'records' && r.sub === 'statement' ? 'the statement' : r.base === 'records' && r.sub === 'family' ? 'the family' : place;
    var inp = inputEl(), dk = DESK_KEYS.indexOf(r.base) > -1;
    /* on a phone her bar names the desk you are on (9 Oct 2026, the mobile wireframe). "Ask Freya about
       Investment…" is wider than her field at 390px (230px of 190), so a phone drops her name, which her
       mark beside it already says: "Ask about Investment…"; anywhere else, "Ask Freya anything…" */
    if (inp) inp.placeholder = layout() === 'phone' ? (dk ? 'Ask about ' + A.DESKS[r.base].noun + '…' : 'Ask Freya anything…') : 'Ask Freya about ' + about;
    var fa = document.getElementById('fy-about'); if (fa) fa.textContent = r.base === 'freya' ? '' : 'About ' + (dk ? A.DESKS[r.base].noun : place);
    drawChips();
  }
  /* a conversation is kept from its first question; Recent lists them, newest first */
  function convos() { return S().conversations || (S().conversations = []); }
  function openConvo(id) {
    var c = convos().filter(function (x) { return x.id === id; })[0]; if (!c) return;
    FY.thread = c.thread; FY.convoId = c.id;
  }
  function drawFreyaPage() {
    var pg = VIEW.querySelector('[data-fy-page]');
    if (pg) { pg.classList.toggle('talking', FY.thread.some(function (m) { return m.role === 'user'; })); drawThread(); setFy(FY.busy ? 'thinking' : 'ready'); }
    var rec = VIEW.querySelector('[data-fy-recent]');
    if (rec) rec.innerHTML = convos().length ? '<div>' + convos().slice().reverse().map(function (c) {
      return '<a class="record" href="#/freya/c/' + c.id + '"><span class="record-main"><span class="record-title">' + e(c.title) + '</span><span class="record-sub">' + A.date(c.at) + (c.by ? ' · ' + e(c.by) : '') + ' · ' + (function (n) { return n + (n === 1 ? ' question' : ' questions'); })(c.thread.filter(function (m) { return m.role === 'user'; }).length) + '</span></span></a>';
    }).join('') + '</div>' : '<div class="collection-state"><b>No conversations yet</b><p>Ask Freya anything about your household; the conversation is kept here.</p></div>';
  }
  function drawChips() {
    var c = document.getElementById('fy-chips'); if (!c) return;
    var base = FY.ctx.route.split('.')[0], ftc = window.FT && window.FT.chips ? window.FT.chips(FY.ctx.route) : null;
    c.innerHTML = (ftc || CHIPS[FY.ctx.route] || CHIPS[base] || CHIPS.home).map(function (q) { return '<button class="key key-s key-secondary fy-chip" type="button" data-act="fy-chip" data-q="' + e(q) + '">' + e(q) + '</button>'; }).join('');
  }
  function openPanel() {
    FY.open = true; document.getElementById('fy-panel').hidden = false; document.documentElement.setAttribute('data-fy-open', '');
    if (!FY.thread.length && S().briefing && S().briefing.items.length) {
      var b = S().briefing;
      FY.thread.push({ role: 'assistant', content: 'This week’s briefing, prepared ' + b.week + ':\n\n' + b.items.map(function (it) { return '· ' + it.text + ' ' + it.why + ' [' + it.src + ']'; }).join('\n\n'), meta: 'The weekly briefing · always included, never counted against the allowance' });
    }
    if (!S().freya.briefingRead) { S().freya.briefingRead = true; A.save(); }
    drawThread(); drawKnow(); setFy('ready');
  }
  /* WHAT FREYA KNOWS, in her panel (3 Oct 2026): her rings under her name; when they have grown
     since the panel last showed them, they grow again in front of you */
  function drawKnow() {
    var el = document.getElementById('fy-know'); if (!el || !FY.open) return;
    var g = A.freyaGrowth(), was = FY.fg, same = was && was.pct === g.pct && was.you.pct === g.you.pct && was.strands.every(function (x, i) { return x.pct === g.strands[i].pct; });
    if (same && el.firstChild) return;
    el.innerHTML = V.fgStrip(was); V.fgPlay(el); FY.fg = g;
  }
  /* THE DESKS' LOCKS in the main bar (the tutorial opens them one at a time; A.deskOpen) */
  function paintLocks() {
    DESK_KEYS.forEach(function (k) {
      var open = A.deskOpen(k);
      document.querySelectorAll('#mainbar [data-nav="' + k + '"]').forEach(function (a) {
        a.toggleAttribute('data-locked', !open);
        var lk = a.querySelector(':scope > .mb-lock'); if (lk) lk.remove();   /* the mark in .mb-mark says it now (the concept, prompt 8) */
        if (open) a.removeAttribute('aria-label'); else a.setAttribute('aria-label', A.DESKS[k].noun + ', not open yet');
      });
    });
  }
  /* HOW AN ANSWER IS DRAWN — after the site's Freya clip (lab/chat-clip.html, REV 40):
     her words in the sunken bubble, a run of "· " lines as the clip's numbered card, and a
     trailing [source] set as the small line under its item instead of inline brackets.
     Presentation only: the words are hers, unchanged. */
  function fyBody(text) {
    var out = [], list = [];
    function flush() {
      if (!list.length) return;
      out.push('<ol class="fy-card">' + list.map(function (t, i) {
        var m = t.match(/^(.*?)\s*\[([^\]]+)\]\s*$/), main = m ? m[1] : t, src = m ? m[2] : '';
        return '<li><span class="n">' + (i + 1) + '</span><span>' + e(main) + (src ? '<small>' + e(src) + '</small>' : '') + '</span></li>';
      }).join('') + '</ol>');
      list = [];
    }
    String(text).split(/\n+/).forEach(function (line) {
      var l = line.trim(); if (!l) return;
      if (/^[·•-]\s+/.test(l)) { list.push(l.replace(/^[·•-]\s+/, '')); return; }
      flush();
      var m = l.match(/^(.*?)\s*\[([^\]]+)\]\s*$/);
      out.push('<div class="fy-bubble">' + e(m ? m[1] : l) + (m ? '<small>' + e(m[2]) + '</small>' : '') + '</div>');
    });
    flush();
    return out.join('');
  }
  function drawThread() {
    var html = FY.thread.map(function (m) {
      if (m.role === 'user') return '<div class="msg-q">' + e(m.content) + '</div>';
      var body = m.draft ? '<textarea class="input" aria-label="Draft">' + e(m.content) + '</textarea><div><button class="key key-s key-secondary" type="button" data-act="copy">Copy the draft</button></div>' :
        (m.content ? fyBody(m.content) : '<div class="fy-typing" aria-label="Thinking"><i></i><i></i><i></i></div>');
      return '<div class="msg-a">' + fyMark('ready', ' data-fy-avatar') + '<div class="msg-a-col">' + body + (m.meta ? '<span class="meta">' + e(m.meta) + '</span>' : '') + '</div></div>';
    }).join('');
    document.querySelectorAll('[data-fy-thread]').forEach(function (th) { th.innerHTML = html; th.scrollTop = th.scrollHeight; });
    var pg = VIEW.querySelector('[data-fy-page].talking'); if (pg && FY.thread.length) toY(document.body.scrollHeight);
  }
  function ask(q) {
    if (FY.busy) return;
    var F = S().freya, onPage = CURR && CURR.base === 'freya' && (!CURR.sub || CURR.sub === 'c');
    if (!onPage) openPanel();
    FY.thread.push({ role: 'user', content: q });
    if (!FY.convoId) {
      FY.convoId = A.uid('c'); convos().push({ id: FY.convoId, by: A.who(), title: q.length > 52 ? q.slice(0, 50).replace(/\s+\S*$/, '') + '…' : q, at: DEMO_TODAY, thread: FY.thread });
      if (onPage) { history.replaceState(null, '', '#/freya/c/' + FY.convoId); CURR = parse('/freya/c/' + FY.convoId); CUR = '/freya/c/' + FY.convoId; }
      drawNav(CURR);
    }
    if (onPage) { var pg = VIEW.querySelector('[data-fy-page]'); if (pg) pg.classList.add('talking'); }
    if (F.messages >= F.allowanceMessages) {
      FY.thread.push({ role: 'assistant', content: 'You have used this month’s ' + F.allowanceMessages + ' messages. The briefing and the Today cards carry on. More Freya is a module.', meta: 'Allowance · resets October 1' });
      drawThread(); return;
    }
    F.messages++; A.save();
    /* on a what-if tool, a question about it is answered from the tool on the page, and "try …" moves
       its controls there and then, so the household watches the answer change (28 Sep 2026) */
    var simA = V.simAsk ? V.simAsk(q, FY.ctx.route) : null;
    if (simA) {
      var sm = { role: 'assistant', content: '', meta: '' }; FY.thread.push(sm); drawThread(); FY.busy = true; setFy('thinking');
      setTimeout(function () { setFy('answering'); sm.content = simA; sm.meta = 'From the tool on this page · hypothetical figures, not a forecast of mine · ' + F.messages + ' of ' + F.allowanceMessages + ' messages this month'; FY.busy = false; drawThread(); setFy('ready'); A.save(); }, 450);
      return;
    }
    var draft = /^\s*(draft|write)\b/i.test(q), m = { role: 'assistant', content: '', draft: draft, meta: '' };
    FY.thread.push(m); drawThread(); FY.busy = true; setFy('thinking');
    getSample().then(function (sample) {
      if (!sample) return fallback(m, q);
      return sample(prompt(q), { cache: false, modelTier: 'default', onText: function (x) { setFy('answering'); m.content = x.text; drawThread(); } })
        .then(function (res) { m.content = res.text; m.meta = 'From your record · ' + F.messages + ' of ' + F.allowanceMessages + ' messages this month'; },
          function (err) { if (err && err.text) { m.content = err.text; m.meta = 'Cut short'; } else return fallback(m, q, err && err.code); });
    }).then(function () { FY.busy = false; drawThread(); setFy('ready'); A.save(); if (location.hash.indexOf('/profile/plan') > -1) render(); });
  }
  function fallback(m, q, code) {
    return new Promise(function (res) {
      setTimeout(function () {
        setFy('answering'); m.content = scripted(q);
        m.meta = code === 'not_granted' ? 'Answered by this page from the record, because asking Claude was declined' : 'Preview answer · written by this page from the record, not by Claude';
        res();
      }, 650);
    });
  }
  var FY_PLACES = [
    '· Records › What you own: every asset, investment account, home, company and valuable. The key "Add an asset" adds one. Opening a line gives "Update the value" (a new row, never an overwrite) and, for an investment account, "Change what it holds" (its split between listed shares, bonds, cash and private markets; an account whose statement already lists its positions takes them from the statement).',
    '· Records › What you owe: "Add a debt". Records › Statement and Timeline read from the lines.',
    '· Records › Advisers: "Add an adviser" keeps them on the household\'s register. Nothing is sent to them and they get no access; inviting one in is the Advisers module.',
    '· Records › Family: "Add a person" adds them to the family tree, without a login. Profile › Household members: "Send the invitation" gives a second adult a login of their own.',
    '· Governance › Your rules: "Change the policy" (the ranges, the cash that must stay reachable, the single-company limit). Governance › Drift: where each class stands against its range. Governance › Wealth planning: goals, "Add a goal". Governance › Retirement runway.',
    '· Investment › What you hold, Fees and Mix lab read from Records › What you own and change the moment a line is saved. Investment has no key to add or change a holding: that is always Records › What you own.',
    '· Investment › The route to investing: the way to investing through Finna, which is coming and not available yet. Nothing can be bought, sold or invested through Finna today. The route opens one step at a time through Learn, and the key "Tell me when it opens" asks to be told when it does.',
    '· Protection › Cover: "Add cover". Protection › Safety check. Succession › The will, Family, Beneficiaries.',
    '· Family Vault: upload a document or a statement. Learn: paths and quests. Profile: plan and usage, security, export.'
  ].join('\n');
  function prompt(q) {
    var convo = FY.thread.filter(function (x) { return x.content; }).slice(-9, -1).map(function (x) { return (x.role === 'user' ? 'Household: ' : 'Freya: ') + x.content; }).join('\n\n');
    return 'You are Freya, the AI chief of staff in ' + (S().household.name || 'the household').replace(/^The /, 'the ') + '’s family office on Finna. You work every desk: Records, Investment, Governance, Protection, Succession.\n\n' +
      'RULES\n· Use only the facts in THE RECORD below. If it is not there, say you do not have it, and say where it would go.\n' +
      '· Every figure you state carries its source in square brackets, taken from the record, for example [Statement · Sep 15, 2026]. You may add or subtract figures from the record; say it is computed from the record. Never project, forecast or estimate.\n' +
      '· You prepare; the household decides; you never move money. Never tell them to buy, sell, switch, or choose a fund, product or provider. If asked, say that is their decision, and offer to lay out what the record shows and which of their own rules applies.\n' +
      '· No tax structuring and no legal advice: say it is outside what Finna does and name the adviser on their register who covers it.\n' +
      '· Plain, calm, short: at most 120 words unless asked for a draft. No headings, no markdown, no bold. Up to four lines starting with "· " when a list helps.\n' +
      '· If asked to draft or write a message: return only the draft, ready to copy, from ' + S().members.map(function (m) { return m.name.split(' ')[0]; }).join(' and ') + ', to the named adviser, with any figures carrying their source in brackets.\n\n' +
      'WHERE THINGS ARE IN FINNA (when you say where to do something, name only these pages and keys, as written here; never name a page, key or button that is not on this list)\n' + FY_PLACES + '\n\n' +
      'THE SCREEN THEY ARE ON: ' + FY.ctx.title + '\n\n' + (function () { var t = V.simContext ? V.simContext(FY.ctx.route) : ''; return t ? 'THE TOOL ON THIS PAGE (hypothetical figures the household produced with a what-if tool; you may explain them and how they are worked out, citing [the tool on this page]; add no forecast of your own, and never recommend a mix, a fund or a product)\n' + t + '\n\n' : ''; })() + 'Write in US English. Money is in ' + (A.base() === 'USD' ? 'US dollars' : A.curWords() + ' (' + A.base() + ')') + '.\n\nTHE RECORD (' + (A.base() === 'USD' ? 'US dollars' : A.curWords()) + ', as of ' + DEMO_TODAY + ')\n' + JSON.stringify(record()) + '\n\n' +
      (convo ? 'CONVERSATION SO FAR\n' + convo + '\n\n' : '') + 'THE HOUSEHOLD ASKS: ' + q + '\n\nReply as Freya.';
  }
  function record() {
    var t = A.totals(), p = A.policy() || { version: 0, effective: '', agreed: [], purpose: '', enough: '', exclusions: '', liquidityMin: 0, concentrationMax: 0, bands: {} }, X = S();
    return {
      household: X.household.name, people: X.people.map(function (x) { return { name: x.name, born: x.born, relationship: x.relationship, dependant: x.dependant }; }),
      partners: (X.relations || []).filter(function (r) { return r.kind === 'partner'; }).map(function (r) { return { between: [A.person(r.a), A.person(r.b)].filter(Boolean).map(function (x) { return x.name; }), status: A.unionStatus(r.a, r.b) || 'not recorded' }; }),
      netWorth: t.net, owned: t.owned, owed: t.owed, committedNotCalled: t.commit, recordStarted: X.household.opened,
      assets: X.assets.map(function (a) { var c = A.cur(a.id); return { name: a.name, holder: a.holder, kind: A.CLS[a.cls], holds: mixWords(a), held: a.institution || '', value: c.amount, source: A.srcLabel(c) + ' · ' + A.date(c.asOf), pastCheckDate: !!A.stale(a), feePct: a.fee, countedInPolicy: A.isInvestable(a), history: A.history(a.id).map(function (v) { return { value: v.amount, asAt: v.asOf, why: v.reason }; }) }; }),
      debts: X.liabilities.map(function (l) { var c = A.cur(l.id); return { name: l.name, kind: l.type, lender: l.lender, balance: c.amount, source: A.srcLabel(c) + ' · ' + A.date(c.asOf), ratePct: l.rate, rateType: l.rateType, resets: l.reset, ends: l.maturity, countedInNetWorth: l.kind !== 'commitment' }; }),
      policy: { version: p.version, inForceSince: p.effective, agreedBy: p.agreed, purpose: p.purpose, enough: p.enough, willNotDo: p.exclusions, reachableCashMin: p.liquidityMin, singleCompanyMaxPct: p.concentrationMax,
        rangesPct: A.POLICY_CLASSES.reduce(function (o, k) { o[A.MIXL[k]] = p.bands[k] ? { target: p.bands[k][0], floor: p.bands[k][1], ceiling: p.bands[k][2] } : null; return o; }, {}), history: X.policy.map(function (v) { return { version: v.version, date: v.effective, change: v.note }; }) },
      drift: A.drift().map(function (d) { return { class: d.label, actualPct: +(d.actual * 100).toFixed(1), floor: d.min, ceiling: d.max, status: d.out || 'inside', movedSincePolicy: A.movers(d.k, p.effective).map(function (m) { return { line: m.a.name + ' (' + m.a.holder + ')', change: Math.round(m.delta), source: A.srcLabel(m.v) + ' · ' + A.date(m.v.asOf) }; }) }; }),
      reachableCash: A.reachableCash(), investableTotal: Math.round(A.investable().total),
      goals: X.goals.map(function (g) { var pr = A.goalProgress(g); return { name: g.name, amount: g.amount, by: g.date, priority: g.priority, linkedToday: pr.have }; }),
      identity: X.identity, cover: X.cover, will: X.will,
      advisers: X.advisers.map(function (v) { return { name: v.name, role: v.role, firm: v.firm, covers: v.covers, lastContact: v.lastContact, openItem: v.open }; }),
      timelineNext: A.timeline().slice(0, 12), weeklyBriefing: X.briefing, learn: { xp: A.learnXP(), rank: A.ring(A.learnXP()).r, paths: A.learnPaths().filter(function (x) { return x.state !== 'hidden'; }).map(function (x) { return { title: x.title, desk: x.desk, done: x.done, of: x.quests, state: x.state, ends: x.cls }; }) },
      notInTheRecordYet: ['decision record', 'who it goes to and who has been told', 'roles such as guardians and powers of attorney', 'the if-something-happens letter', 'monthly spending', 'disability insurance', 'umbrella liability cover']
    };
  }
  function scripted(q) {
    var fta = window.FT && window.FT.answer ? window.FT.answer(q) : null; if (fta) return fta;
    if (!S().assets.length) return 'Nothing is recorded yet, so there is nothing for me to answer from. Add what you have in Records and I will answer from it, with the source of every figure.';
    var ql = q.toLowerCase(), t = A.totals(), p = A.policy() || { version: 0, effective: '', liquidityMin: 0, bands: {} }, dr = A.drift().filter(function (x) { return x.out; })[0];
    var mort = A.liability('l1'), w = S().will, names = S().members.map(function (m) { return m.name.split(' ')[0]; }), sign = names.join(' and ') + ' Johnsen';
    var cpa = S().advisers.filter(function (v) { return /CPA/.test(v.role); })[0], bank = S().advisers.filter(function (v) { return /mortgage|bank/i.test(v.role); })[0];
    if (/^\s*(draft|write)/.test(ql) && /holm|will/.test(ql)) return 'Dear Andrew,\n\nOur wills were signed on ' + A.date(w.signed) + ' and we have not read them since [Will record · Succession]. Oscar is now 15 and Emma 20. Could we find a time this fall to read them through together, and talk about whether a trust fits and who we would name as guardian?\n\nBest wishes,\n' + sign;
    if (/^\s*(draft|write)/.test(ql)) return 'Dear Maria,\n\nThe adjustable-rate mortgage on our home adjusts on ' + A.date(mort.reset) + '. The balance was ' + A.money(A.amount('l1')) + ' on ' + A.date(A.cur('l1').asOf) + ' [Mortgage note — home · monthly statement]. Could we meet in October to go through the options before it adjusts, including paying some of it down, which the note allows without a penalty [Mortgage note — home, page 6]?\n\nBest wishes,\n' + sign;
    if (/\b(how|where|can (i|we)|want to|need to|help me|let me|do (i|we))\b/.test(ql) && /\b(add|record|enter|change|update|edit|correct|split|classify|put)\b/.test(ql) && /(invest|holding|position|account|asset|share|stock|fund|bond|broker|portfolio|saving|property|home|cash)/.test(ql))
      return 'Everything you own is added and kept in Records › What you own. “Add an asset” adds a line; opening a line gives “Update the value” and, for an investment account, “Change what it holds”, its split between listed shares, bonds, cash and private markets. Investment has no key of its own for this: What you hold, Drift and Fees read those lines and change as soon as you save.';
    if (/(beneficiar|designation)/.test(ql)) {
      var nm = S().cover.filter(function (c) { return c.beneficiaries; });
      return nm.length ? (nm.length === 1 ? 'One designation is' : nm.length + ' designations are') + ' in the record:\n\n' + nm.map(function (c) { return '· ' + c.type + ' cover on ' + c.covers + ': ' + c.beneficiaries + ', named ' + A.date(c.nominated) + ' [Protection · cover]'; }).join('\n') +
        '\n\nEach sits on the insurer’s form, apart from the will. Whether they are still the people you would choose is your decision; Andrew Holm covers the legal side [Adviser register].' : 'No beneficiary is recorded on any policy yet. They go on each policy in Protection.';
    }
    if (/goal/.test(ql)) {
      var gl = S().goals.map(function (g) { var h = A.goalProgress(g).have; return { g: g, h: h, gap: Math.max(0, g.amount - h) }; }).sort(function (a, b) { return b.gap - a.gap; });
      return gl.length ? 'Measured on what is linked today, before any growth [computed from the record]:\n\n' + gl.map(function (x) { return '· ' + x.g.name + ': ' + A.money(x.h) + ' of ' + A.money(x.g.amount) + ' by ' + A.date(x.g.date) + ', ' + (x.gap ? A.money(x.gap) + ' to go' : 'fully linked'); }).join('\n') +
        '\n\n' + gl[0].g.name + ' is furthest from its amount. I do not forecast; the pace switch on Wealth planning shows the plain arithmetic of what you set aside each month.' : 'No goal is recorded yet. Add one on Wealth planning, with an amount, a date and a priority.';
    }
    if (/(insurance|renew|cover|homeowners)/.test(ql)) {
      var hc = S().cover.filter(function (c) { return c.id === 'c3'; })[0] || {};
      var umb = S().cover.some(function (c) { return /umbrella|liability/i.test(c.type); });
      return 'Your homeowners policy on the Edina home renews on ' + A.date(hc.renews) + '. Dwelling coverage is ' + A.money(hc.sum) + ', a limit last set in 2023 [Homeowners policy 2025–26, page 2]. Before it renews, three things from the record are worth taking to your agent:\n\n· whether the dwelling limit still covers the cost to rebuild; the home was appraised at ' + A.money(A.amount('a1')) + ' [Appraisal — Home, Edina]\n· Lauren’s group life beneficiary was named in August 2014 [Group life through Lauren’s employer]\n· ' + (umb ? 'the umbrella liability policy is recorded' : 'there is no umbrella liability policy in the record') + ' [Protection · cover]';
    }
    if (/\b(buy|sell|switch|invest in|which fund|recommend)\b|should (we|i) (buy|sell|invest|move|switch|put)/.test(ql)) return 'That is your decision, and I will not make it for you. What I can do is lay out what the record shows: bonds are ' + A.pct(A.drift()[1].actual) + ' of your investable assets, inside your 15–35% range [computed from the record · policy version ' + p.version + ']. If you want to change where you sit in that range, the place to write it down is the policy.';
    if (/tax/.test(ql)) return 'Tax is outside what Finna does, so I will not structure or advise on it. ' + (cpa ? cpa.name + ' at ' + cpa.firm + ' covers your taxes and the LLC’s books, and already has “' + cpa.open + '” open [Adviser register].' : 'Your CPA is the person for it.');
    if (dr && /(drift|ceiling|range|shares|policy|allocation|above)/.test(ql)) {
      var mv = A.movers(dr.k, p.effective);
      return dr.label + ' are ' + A.pct(dr.actual) + ' of your investable assets, above the ' + dr.max + '% ceiling in policy version ' + p.version + ' [computed from the record today]. Since that version took effect on ' + A.date(p.effective) + ':\n\n' +
        mv.slice(0, 3).map(function (m) { return '· ' + m.a.name + ' (' + m.a.holder + ') ' + (m.delta > 0 ? '+' : '−') + A.money(Math.abs(m.delta)) + ' [' + A.srcLabel(m.v) + ' · ' + A.date(m.v.asOf) + ']'; }).join('\n') +
        '\n\nWhat to do about it is yours to decide. You could leave it, change the ceiling, or move money; whichever you choose, write the decision down so the reasoning travels with it.';
    }
    if (/(net worth|changed|different|moved)/.test(ql)) {
      var moved = []; S().assets.concat(S().liabilities).forEach(function (l) { var h = A.history(l.id); if (h.length > 1) moved.push({ l: l, d: h[h.length - 1].amount - h[0].amount, v: h[h.length - 1] }); });
      moved.sort(function (a, b) { return Math.abs(b.d) - Math.abs(a.d); });
      return 'Net worth is ' + A.money(t.net) + ' today [computed from the record]. Since the record started on ' + A.date(S().household.opened) + ', these lines changed:\n\n' + moved.slice(0, 3).map(function (m) { return '· ' + m.l.name + ' ' + (m.d > 0 ? '+' : '−') + A.money(Math.abs(m.d)) + ' [' + A.srcLabel(m.v) + ' · ' + A.date(m.v.asOf) + ']'; }).join('\n') + '\n\nNothing else has a newer figure yet.';
    }
    if (/(will|succession|inherit|executor|decided|trust|guardian)/.test(ql)) return 'The wills are recorded: ' + w.kind.charAt(0).toLowerCase() + w.kind.slice(1) + ', signed ' + A.date(w.signed) + ', not read since, with the originals at ' + w.original.replace(/ — .*/, '') + ' [Will record]. Not yet in the record:\n\n· who it goes to, and who has been told\n· a guardian for Oscar, and powers of attorney\n· the “if something happens” letter\n\nYou set ' + A.date(w.reviewBy) + ' as the date to read the wills again [Timeline].';
    if (/(mortgage|refinanc|loan|rate|arm\b|adjust)/.test(ql)) return 'The mortgage on the home is ' + A.money(A.amount('l1')) + ' at ' + mort.rate + '%, fixed until ' + A.date(mort.reset) + ', when it starts adjusting once a year [Mortgage note — home · monthly statement].' + (bank ? ' ' + bank.name + ' at ' + bank.firm + ' has it open on your register.' : '');
    if (/(fee|leak)/.test(ql)) { var f = 0; S().assets.forEach(function (a) { if (A.isInvestable(a) && a.fee != null) f += A.amount(a.id) * a.fee / 100; }); return 'About ' + A.money(f) + ' a year in the fees you have recorded [computed from the record]. The SEP IRA and the 401(k) carry most of it. Fees you have not entered are not counted.'; }
    if (/(fund|open|finna fund)/.test(ql)) return 'Finna funds are not open yet. When they are, the way in is Learn: Investment Foundation first, then a category, then the fund, each opened by a test you can retake. Paying for anything never opens a fund.';
    if (/(needs|this week|what should|today|falls due|three months)/.test(ql)) { var tl = A.timeline().filter(function (x) { return x.date >= DEMO_TODAY; }).slice(0, 4); return 'One thing needs you: listed shares are above the ceiling in your policy [policy version ' + p.version + ']. Coming up:\n\n' + tl.map(function (x) { return '· ' + A.date(x.date) + ' — ' + x.title; }).join('\n') + '\n\nTwo figures are past the date you set for checking them: the lake cabin and the company [Records].'; }
    if (/(learn|next)/.test(ql)) { var lnp = A.nextPath(), lq = lnp && lnp.nextQ ? A.LM.PATHS[lnp.id].quests[lnp.nextQ - 1] : null, out1 = A.drift().filter(function (x) { return x.out; })[0];
      return lnp ? (lnp.state === 'progress' ? 'You are ' + lnp.done + ' of ' + lnp.quests + ' quests into ' + lnp.title + '.' : lnp.title + ' is open to start.') + (lq ? ' The next quest is “' + lq.t + '”.' : '') +
        (out1 && A.learnPath('fo-rules').state !== 'done' ? ' After that, Writing your first rule explains the ranges you already set, and one of them, ' + out1.label.toLowerCase() + ', is outside its range today [Governance · Drift].' : '') + ' I suggest one path at a time, from your record, and say why.' : 'Every path open to you is done. The next steps appear on the Map as you go.'; }
    if (/(who can see|see our)/.test(ql)) return 'Two people: ' + names.join(' and ') + '. Advisers are on the register, not invited, and every access is in the log [Household · security].';
    return 'I can answer from the record about your net worth, what moved, your policy and drift, the mortgage, cover, the wills and what falls due. In this preview my answers are written by the page itself; in the platform I answer anything the record holds.';
  }

  /* ── events ──────────────────────────────────────────────────────────── */
  document.addEventListener('click', function (ev) {
    var t = ev.target.closest('[data-act]'); if (!t) return;
    var a = t.getAttribute('data-act'); if (!ACT[a]) return;
    if (t.tagName === 'A') ev.preventDefault();
    ACT[a](t, ev);
  });
  /* a table's whole row opens it, as its first cell's link does (28 Sep 2026); controls in the row keep their own */
  document.addEventListener('click', function (ev) {
    var tr = ev.target.closest('.data-table tbody tr'); if (!tr || ev.target.closest('a,button,input,select,label,textarea,[data-act]')) return;
    var go = tr.querySelector('td:first-child [data-act], td:first-child a[href]'); if (go) go.click();
  });
  document.addEventListener('change', function (ev) {
    var t = ev.target; if (!t || !t.matches || !t.matches('#aa-cls')) return;
    var box = t.form && t.form.querySelector('[data-mix-fields]'); if (!box) return;
    var on = MIX_SPLIT.indexOf(t.value) > -1; box.hidden = !on; box.disabled = !on;
    if (on && !box.hasAttribute('data-typed')) {
      var m = A.DEFAULT_MIX[t.value] || {};
      A.POLICY_CLASSES.forEach(function (k) { var i = box.querySelector('[name="mix-' + k + '"]'); if (i) i.value = Math.round((m[k] || 0) * 100); });
      mixSync(box.querySelector('[data-mixf]'));
    }
  });
  document.addEventListener('change', function (ev) {
    var t = ev.target; if (!t || !t.matches || !t.matches('[data-sort-select]')) return;
    var dt = VIEW.querySelector('.data-table[data-sort-key="' + t.getAttribute('data-sort-select') + '"]'), p = t.value.split(':');
    if (dt) resort(dt, { i: +p[0], dir: p[1] });
    var again = VIEW.querySelector('[data-sort-select="' + t.getAttribute('data-sort-select') + '"]'); if (again) again.focus();
  });
  document.addEventListener('input', function (ev) {
    var t = ev.target; if (!t || !t.matches) return;
    if (t.matches('[data-money]')) {
      groupMoney(t);
      var row2 = t.closest('.form-row'), hp = row2 && row2.querySelector('[data-money-help]'); if (hp) hp.textContent = moneyHelp(num(t.value), t.getAttribute('data-was'));
      var pv = t.form && t.name === 'amount' && t.form.querySelector('[data-ux-prev]');
      if (pv) {
        var mk = pv.querySelector('[data-ux-mark]'), was = mk && mk.style.left;
        pv.innerHTML = uxPreview(pv.getAttribute('data-id'), num(t.value));
        var nk = pv.querySelector('[data-ux-mark]');
        if (nk && was && was !== nk.style.left && nk.animate && !matchMedia('(prefers-reduced-motion: reduce)').matches) nk.animate([{ left: was }, { left: nk.style.left }], { duration: 380, easing: 'cubic-bezier(.3,.8,.25,1)' });
      }
    }
    if (t.matches('[data-rxi]')) rxInput(t);
    if (t.matches('[data-mixf]')) { t.closest('[data-mix-fields]').setAttribute('data-typed', ''); mixSync(t); }
    /* a field marked for a fix clears as soon as it holds something */
    var fr = t.closest && t.closest('.form-row[data-invalid="true"]');
    if (fr && String(t.value).trim() !== '' && (!t.validity || t.validity.valid)) { fr.setAttribute('data-invalid', 'false'); t.setAttribute('aria-invalid', 'false'); }
  });
  document.addEventListener('keydown', function (ev) {
    var t = ev.target; if ((ev.key !== 'Enter' && ev.key !== ' ') || !t.matches || !t.matches('[data-act][role="button"]:not(button)')) return;
    ev.preventDefault(); var a = t.getAttribute('data-act'); if (ACT[a]) ACT[a](t, ev);
  });
  /* choosing a place folds a bar opened by hand, even when it is the place already open */
  MB.addEventListener('click', function (ev) { if (ev.target.closest('a.mb-item')) setTimeout(closeOver, 0); });
  document.getElementById('dk-card').addEventListener('click', function (ev) { if (ev.target.closest('a.dk-item')) setTimeout(closeOver, 0); });
  /* the focus leaving the pill and its card closes the card, as a menu does */
  document.getElementById('dk-pick').addEventListener('focusout', function (ev) {
    if (OVER.desks && ev.relatedTarget && !document.getElementById('dk-pick').contains(ev.relatedTarget)) closeOver();
  });
  document.addEventListener('submit', function (ev) {
    var f = ev.target.closest('form[data-form]'); if (!f) return; ev.preventDefault();
    if (!validate(f)) return;
    FORMS[f.getAttribute('data-form')](f, new FormData(f));
  });
  document.addEventListener('keydown', function (ev) {
    if ((ev.metaKey || ev.ctrlKey) && ev.key.toLowerCase() === 'k') { ev.preventDefault(); (document.getElementById('fy-page-input') || inputEl()).focus(); }
    var typing = /^(INPUT|TEXTAREA|SELECT)$/.test(ev.target.tagName || '') || ev.target.isContentEditable;
    if (!ev.metaKey && !ev.ctrlKey && !ev.altKey && !typing && sheet.hidden) {
      if (ev.key === '[') { ev.preventDefault(); ACT.mainbar(); }
      if (ev.key === ']') { ev.preventDefault(); ACT.submenu(); }
    }
    if (ev.key === 'Escape') {
      if (!sheet.hidden) closeSheet();
      else if (OVER.desks) { closeOver(); document.getElementById('dk-key').focus(); }
      else if (OVER.mb || OVER.sm || OVER.menu) { closeOver(); var t = document.querySelector('.mb-toggle'); if (layout() === 'phone') t = document.querySelector('[data-act="menu"]'); if (t) t.focus(); }
      else if (FY.open) ACT['fy-close']();
    }
  });
  function rebind() {
    WORK = document.getElementById('work'); VIEW = document.getElementById('view'); APPEL = document.getElementById('app');
    sheet = document.getElementById('sheet'); scrim = document.getElementById('scrim');
    /* every file input marked data-upload, on a page or in a sheet, uploads the same way */
    document.addEventListener('change', function (ev) { var t = ev.target; if (t && t.matches && t.matches('input[type=file][data-upload]')) upload(t); });
    var inp = inputEl();
    inp.addEventListener('focus', function () { if (!FY.busy) setFy(inp.value ? 'listening' : 'ready'); });
    inp.addEventListener('blur', function () { if (!FY.busy) setFy('ready'); });
    inp.addEventListener('input', function () { sendState(); if (!FY.busy) setFy(inp.value ? 'listening' : 'ready'); });
  }
  /* ── THE HOME WALK · the onboarding test (2 Oct 2026) ─────────────────────────────────────
     The plan is the Claude Doc "Onboarding test on Home — plan". A welcome card, then five steps,
     each lighting one real part of Home and explaining it in two lines. Every word is a draft for
     Christian. It is a TEST behind a hidden switch: it never starts on its own. Two ways in: hold
     Freya's mark in the dock for 1.5 seconds (below, HOLDING FREYA'S MARK), or ?tour
     (index.html?tour#/home), once per page load, as soon as Home is on screen. Nothing is
     remembered.
       · A step whose part is not on Home, or not on screen (the main bar on a phone, where the
         menu key stands in for it), is left out and the count follows: day one has no What you
         own, so it reads 1 of 4.
       · A part too tall to sit on screen above the guide is lit by a smaller piece (Rose, 2 Oct
         2026): Your family office by its title and first row of cards, What you own by its title
         and the map, not the owed map under it.
       · Back and Next on every step (Back on step 1 returns to the welcome), Done on the last;
         Not now, the close key and Escape end it anywhere.
       · The page is locked while it runs, the lit part included: the walk is a modal <dialog>, so
         the browser makes everything else inert and keeps Tab inside it. The page's scroll is
         held, as under a sheet, and the walk scrolls each part into view itself. The app's own
         keys ([, ], Ctrl K) wait until it ends.
       · However it ends, Home is as it was: the scroll it started at, the focus it had.
     The look is app.css, THE HOME WALK: the page under a veil with a hole where the part is and a
     ring round the hole. Each step is told by the guide, Freya's bar opening (direction B, Rose,
     2 Oct 2026): one raised card on her row at the foot of the screen, in the same place on every
     step, so Back and Next never move. The part sits in the room above it; a part that still runs
     under it is lit only to the guide's edge. */
  var WALK = { on: false, pending: /[?&]tour\b/.test(location.search), el: null, steps: [], i: -1, y0: 0, focus: null, lit: null, cut: false, fit: '' };
  /* each step: the part's name (eb), a headline and one line. What you own's line says what the
     map does once the walk is over, since the page is locked while it runs (a proposal). */
  var WALK_STEPS = [
    { id: 'summary', find: ['#view .hm-brief'], eb: 'Freya’s summary', title: 'The one thing that matters most today.', line: 'Freya puts it here, with the key that takes you to it.' },
    { id: 'desks', find: ['#view .home-desks'], eb: 'Your family office', title: 'Five desks and Learn, one card each.', line: 'Each card shows where things stand. The whole card opens the desk.',
      piece: function (el) {
        var c = [].slice.call(el.querySelectorAll('.hm-grid > *')), t = c.length ? c[0].getBoundingClientRect().top : 0;
        return [el.querySelector('.section-h')].concat(c.filter(function (x) { return Math.abs(x.getBoundingClientRect().top - t) < 1; }));
      } },
    { id: 'own', find: ['#view .home-map'], eb: 'What you own', title: 'Everything you own and owe, sized by value.', line: 'After the tour, select any block to see what’s inside.',
      piece: function (el) { return [el.querySelector('.section-h'), el.querySelector('.tv')]; } },
    { id: 'menu', find: ['#mainbar', '.phone-head [data-act="menu"]'], eb: 'The menu', title: 'Every desk, Learn and the Family Vault.', line: 'Each one opens from here.' },
    { id: 'freya', find: ['#fy-bar'], eb: 'Ask Freya', title: 'Ask about the page you’re on.', line: 'Her bar is on every page.' }
  ];
  function walkOn() { return !!(WALK && WALK.on); }
  function walkPx(name) { return parseFloat(getComputedStyle(document.documentElement).getPropertyValue(name)) || 0; }
  /* on screen: has a size, is not hidden, and is not slid off to the side (the phone's menu sheet) */
  function walkShown(el) {
    if (!el) return false;
    var r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0 && getComputedStyle(el).visibility !== 'hidden' && r.right > 0 && r.left < document.documentElement.clientWidth;
  }
  function walkFind(s) { for (var i = 0; i < s.find.length; i++) { var el = document.querySelector(s.find[i]); if (walkShown(el)) return el; } return null; }
  /* held in place on screen (the main bar, the phone's header, Freya's dock): scrolling won't move it */
  function walkHeld(el) { for (var n = el; n && n !== document.body; n = n.parentElement) if (/^(fixed|sticky)$/.test(getComputedStyle(n).position)) return true; return false; }
  /* the guide's place: as wide as Freya's row, its foot a little above her bar (on a phone, above the
     Desks pill over it); with her bar off screen, the foot of the screen */
  function walkDock() {
    var fb = document.getElementById('fy-bar'), fr = fb && fb.closest('.fy-row'), g = walkPx('--space-4');
    var dk = document.getElementById('dk-key'), top = fb ? fb.getBoundingClientRect().top : 0;
    if (walkShown(dk)) top = Math.min(top, dk.getBoundingClientRect().top);   /* on a phone the Desks pill rides above her bar */
    if (walkShown(fb) && walkShown(fr)) { var a = fr.getBoundingClientRect(); return { x: a.left, w: a.width, foot: top - walkPx('--space-3') }; }
    return { x: g, w: document.documentElement.clientWidth - 2 * g, foot: window.innerHeight - g };
  }
  /* the room on screen for a lit part: under the phone's header (t) and above the guide (b) */
  function walkRoom() {
    var t = 0, ph = document.querySelector('.phone-top'), P = WALK.el && WALK.el.querySelector('[data-walk-card="step"]');
    if (walkShown(ph) && walkHeld(ph)) t = ph.getBoundingClientRect().bottom;
    return { t: t, b: walkDock().foot - (P && !P.hidden ? P.offsetHeight : 0) };
  }
  /* the guide keeps one height through the walk, its tallest step's at its width, so its edge, its
     head and its keys stay put from step to step. Measured on a hidden copy, so nothing is read out. */
  function walkFit(P) {
    var key = P.style.width + ' ' + window.innerWidth;
    if (WALK.fit === key) return;
    var c = P.cloneNode(true), h = 0;
    WALK.fit = key;
    c.removeAttribute('data-walk-card'); c.setAttribute('aria-hidden', 'true'); c.style.visibility = 'hidden'; c.style.minHeight = '';
    c.querySelectorAll('[id]').forEach(function (n) { n.removeAttribute('id'); });
    c.querySelector('.walk-say').removeAttribute('aria-live');
    P.parentNode.appendChild(c);
    WALK.steps.forEach(function (s) {
      c.querySelector('[data-walk-eb]').textContent = s.eb; c.querySelector('[data-walk-title]').textContent = s.title; c.querySelector('[data-walk-line]').textContent = s.line;
      h = Math.max(h, c.offsetHeight);
    });
    c.remove();
    P.style.minHeight = h.toFixed(1) + 'px';
  }
  /* the lit box: the whole part, or its smaller piece (with a little air round it, since a piece
     has no edge of its own) */
  function walkRect(s, el) {
    var r = el.getBoundingClientRect();
    if (!WALK.cut) return { x: r.left, y: r.top, w: r.width, h: r.height };
    var p = s.piece(el).filter(Boolean), top = Infinity, bot = -Infinity, a = walkPx('--space-2');
    p.forEach(function (n) { var q = n.getBoundingClientRect(); top = Math.min(top, q.top); bot = Math.max(bot, q.bottom); });
    return { x: r.left - a, y: top - a, w: r.width + 2 * a, h: bot - top + 2 * a };
  }
  function walkEl() {
    if (WALK.el) return WALK.el;
    var d = document.createElement('dialog');
    d.className = 'walk'; d.id = 'walk';
    d.innerHTML = '<div class="walk-spot" aria-hidden="true"></div>' +
      '<div class="walk-card walk-welcome" data-walk-card="welcome">' + fyMark('ready') +
        '<h2 class="walk-title" id="walk-hello">Welcome to your family office</h2>' +
        '<p class="walk-line">Home is the whole household on one screen. Here’s a quick look around.</p>' +
        '<div class="walk-keys"><button class="key key-s" type="button" data-walk="go">Show me around</button>' +
        '<button class="link" type="button" data-walk="end">Not now</button></div></div>' +
      '<div class="walk-card walk-step walk-guide" data-walk-card="step" hidden>' +
        '<div class="wg-head">' + fyMark('ready') + '<span class="wg-bars" data-walk-bars aria-hidden="true"></span><span class="wg-n" data-walk-count></span>' +
          '<button class="icon-key" type="button" data-walk="end" aria-label="Close the walk">' + A.ic('close') + '</button></div>' +
        '<div class="walk-say" aria-live="polite"><p class="eyebrow wg-eb" data-walk-eb></p>' +
          '<h2 class="walk-title" id="walk-title" data-walk-title></h2><p class="walk-line" data-walk-line></p></div>' +
        '<div class="walk-keys"><button class="key key-secondary" type="button" data-walk="back">Back</button>' +
        '<button class="key" type="button" data-walk="next">Next</button></div></div>';
    d.addEventListener('click', function (ev) {
      var b = ev.target.closest('[data-walk]'); if (!b) return;
      var a = b.getAttribute('data-walk');
      if (a === 'end') walkEnd();
      else if (a === 'go') walkGo();
      else if (a === 'next') { if (WALK.i >= WALK.steps.length - 1) walkEnd(); else walkShow(WALK.i + 1); }
      else if (a === 'back') { if (WALK.i > 0) walkShow(WALK.i - 1); else { walkShow(-1); d.querySelector('[data-walk="go"]').focus(); } }
    });
    /* Escape is handled in walkKey; these catch a close the browser makes on its own */
    d.addEventListener('cancel', function (ev) { ev.preventDefault(); walkEnd(); });
    d.addEventListener('close', function () { walkEnd(); });
    ['wheel', 'touchmove'].forEach(function (t) { d.addEventListener(t, function (ev) { ev.preventDefault(); }, { passive: false }); });
    document.body.appendChild(d);
    return (WALK.el = d);
  }
  /* from: the hold's last frame (her key's box and the card's), so the light leaves her key and
     the card glides from where it was into the welcome, under a dim that is already there */
  function walkStart(from) {
    if (walkOn() || !CURR || CURR.base !== 'home') return;
    var d = walkEl(), W = d.querySelector('[data-walk-card="welcome"]');
    WALK.on = true; WALK.y0 = window.scrollY; WALK.focus = document.activeElement; WALK.steps = [];
    glHide();
    d.classList.toggle('is-held', !!from);
    d.showModal();
    if (LENIS) LENIS.stop();
    window.addEventListener('keydown', walkKey, true);
    if (from) {
      d.style.setProperty('--walk-x', from.key.left + 'px'); d.style.setProperty('--walk-y', from.key.top + 'px');
      d.style.setProperty('--walk-w', from.key.width + 'px'); d.style.setProperty('--walk-h', from.key.height + 'px');
      d.style.setProperty('--walk-r', from.r); d.setAttribute('data-walk-at', 'hold');
      d.querySelector('.walk-spot').getBoundingClientRect();   /* the hole starts on her key */
    }
    walkShow(-1);
    if (from) {
      var w = W.getBoundingClientRect();
      W.animate([{ translate: (from.card.left + from.card.width / 2 - w.left - w.width / 2).toFixed(1) + 'px ' + (from.card.top + from.card.height / 2 - w.top - w.height / 2).toFixed(1) + 'px', opacity: 0 },
        { opacity: 1, offset: 0.4 }, { translate: '0 0', opacity: 1 }], { duration: walkPx('--t-move'), easing: getComputedStyle(document.documentElement).getPropertyValue('--ease').trim() || 'ease' });
    }
    requestAnimationFrame(walkTick);
    d.querySelector('[data-walk="go"]').focus();
  }
  /* the steps are fixed when the walk begins, from what Home shows at that moment */
  function walkGo() {
    WALK.steps = WALK_STEPS.filter(function (s) { return !!walkFind(s); });
    if (!WALK.steps.length) { walkEnd(); return; }
    walkShow(0);
    WALK.el.querySelector('[data-walk="next"]').focus();
  }
  /* -1 is the welcome; 0 and up are the steps */
  function walkShow(i) {
    var d = WALK.el, W = d.querySelector('[data-walk-card="welcome"]'), P = d.querySelector('[data-walk-card="step"]'), was = !P.hidden;
    WALK.i = i;
    W.hidden = i >= 0; P.hidden = i < 0;
    d.setAttribute('aria-labelledby', i < 0 ? 'walk-hello' : 'walk-title');
    if (i < 0) { WALK.lit = null; walkBox(); return; }
    var s = WALK.steps[i], n = WALK.steps.length;
    P.querySelector('[data-walk-count]').textContent = (i + 1) + ' of ' + n;
    P.querySelector('[data-walk-bars]').innerHTML = WALK.steps.map(function (x, k) { return '<i' + (k < i ? ' class="on"' : k === i ? ' class="now"' : '') + '></i>'; }).join('');
    P.querySelector('[data-walk-eb]').textContent = s.eb;
    P.querySelector('[data-walk-title]').textContent = s.title;
    P.querySelector('[data-walk-line]').textContent = s.line;
    P.querySelector('[data-walk="next"]').innerHTML = i === n - 1 ? 'Done' : 'Next' + A.ic('arrow');
    P.style.width = walkDock().w.toFixed(1) + 'px';   /* measured at its own width, her row's, before the room is */
    walkFit(P);
    var el = walkFind(s), g = walkPx('--space-4'), room = walkRoom();
    WALK.lit = el;
    if (!el) { walkBox(); return; }
    WALK.cut = !!(s.piece && !walkHeld(el) && walkRect(s, el).h > room.b - room.t - 2 * g);
    if (!walkHeld(el)) walkInto(walkRect(s, el), room);
    walkBox();
    /* the guide rises from her bar as it opens; after that it stays put and only its words change */
    if (!was) P.animate([{ opacity: 0, translate: '0 ' + walkPx('--space-3') + 'px' }, { opacity: 1, translate: '0 0' }],
      { duration: walkPx('--t-move'), easing: getComputedStyle(document.documentElement).getPropertyValue('--ease').trim() || 'ease' });
    else P.querySelector('.walk-say').animate([{ opacity: 0 }, { opacity: 1 }], { duration: walkPx('--t-move'), easing: 'ease-out' });
  }
  /* a part already on screen above the guide stays where it is (the menu and Freya's bar always
     are); any other glides into view with the app's smooth scroll, centred in the room above the
     guide when it fits there, else from its top */
  function walkInto(R, room) {
    var g = walkPx('--space-4'), t = room.t + g, b = room.b - g;
    if (R.y >= t && R.y + R.h <= b) return;
    var off = R.h <= b - t ? R.y - t - (b - t - R.h) / 2 : R.y - t,
      max = document.documentElement.scrollHeight - window.innerHeight, y = Math.max(0, Math.min(max, window.scrollY + off));
    if (Math.abs(y - window.scrollY) < 1) return;
    if (LENIS) LENIS.scrollTo(y, { force: true }); else window.scrollTo({ top: y, behavior: 'smooth' });
  }
  /* every frame while it runs, the hole and the guide follow the part and her row — through the
     page's glide, a resize and the frame's own transitions (the main bar folding at a narrower
     window) */
  function walkTick() {
    if (!walkOn()) return;
    walkBox();
    requestAnimationFrame(walkTick);
  }
  function walkBox() {
    var d = WALK.el; if (!d) return;
    var P = d.querySelector('[data-walk-card="step"]'), s = WALK.steps[WALK.i], el = WALK.lit;
    if (WALK.i < 0 || !el || !s) {
      ['x', 'y', 'w', 'h', 'r', 'sy'].forEach(function (k) { d.style.removeProperty('--walk-' + k); });
      d.removeAttribute('data-walk-at'); P.style.left = P.style.top = P.style.width = P.style.minHeight = ''; WALK.fit = '';
      return;
    }
    /* the guide takes her row's width first, so the room above it is measured at that width */
    var D = walkDock();
    if (!(Math.abs(parseFloat(P.style.width) - D.w) <= 0.5)) P.style.width = D.w.toFixed(1) + 'px';
    walkFit(P);
    var R = walkRect(s, el), room = walkRoom(), g = walkPx('--space-4');
    /* what is lit stays whole on screen above the guide: a part that runs under it is lit only to its edge */
    if (!walkHeld(el) && R.y + R.h > room.b - g / 2) R.h = Math.max(g, room.b - g / 2 - R.y);
    /* the hole's place is kept on the page (y + the scroll) and the page's scroll is taken off
       again as a shift, so a step change glides while a scroll follows exactly */
    d.style.setProperty('--walk-x', R.x.toFixed(1) + 'px'); d.style.setProperty('--walk-y', (R.y + window.scrollY).toFixed(1) + 'px');
    d.style.setProperty('--walk-sy', window.scrollY.toFixed(1) + 'px');
    d.style.setProperty('--walk-w', R.w.toFixed(1) + 'px'); d.style.setProperty('--walk-h', R.h.toFixed(1) + 'px');
    if (WALK.cut) d.style.removeProperty('--walk-r'); else d.style.setProperty('--walk-r', getComputedStyle(el).borderTopLeftRadius);
    P.style.left = D.x.toFixed(1) + 'px'; P.style.top = room.b.toFixed(1) + 'px';
    d.setAttribute('data-walk-at', s.id);
  }
  function walkKey(ev) {
    if (!walkOn()) return;
    if (ev.key === 'Escape') { ev.preventDefault(); walkEnd(); }
    ev.stopPropagation();
  }
  /* quiet: the walk ends because the page changed, so the new page keeps its own scroll and focus */
  function walkEnd(quiet) {
    if (!walkOn()) return;
    WALK.on = false; WALK.lit = null; WALK.i = -1;
    walkBox();
    window.removeEventListener('keydown', walkKey, true);
    if (WALK.el.open) WALK.el.close();
    if (LENIS && sheet.hidden && !BODY.hasAttribute('data-menu')) LENIS.start();
    if (!quiet) {
      if (Math.abs(window.scrollY - WALK.y0) > 1) { if (LENIS) LENIS.scrollTo(WALK.y0); else window.scrollTo({ top: WALK.y0, behavior: 'smooth' }); }
      var f = WALK.focus;
      if (f && f !== document.body && f.isConnected && f.focus) f.focus({ preventScroll: true });
    }
    WALK.steps = [];
  }
  /* from render(): a Home drawn again keeps its lit part; ?tour starts the walk once Home is laid out */
  function walkAfterRender(r) {
    if (walkOn()) { if (WALK.i >= 0) { WALK.lit = walkFind(WALK.steps[WALK.i]); walkBox(); } return; }
    if (HOLD_DEMO && r.base === 'home') { HOLD_DEMO = false; setTimeout(function () { holdBegin(document.querySelector(HOLD_KEY), 'demo'); }, 600); }
    if (WALK && WALK.pending && r.base === 'home') { WALK.pending = false; requestAnimationFrame(function () { requestAnimationFrame(function () { walkStart(); }); }); }
  }
  /* ── HOLDING FREYA'S MARK STARTS THE WALK · the beta's secret way in (Rose, 2 Oct 2026) ────
     Press and hold her mark in the dock for 1.5 seconds, on any screen. A tap stays a tap (her
     panel opens). After a short pause the page dims round her mark, she starts thinking, and a
     card above her fills a bar while you hold; let go or slide away early and it melts away and
     nothing opens. At 100% her mark answers, the light leaves her for the middle of the screen and
     the card glides there and becomes the welcome. Away from Home it goes to Home first. Her key's
     own long-press menu is switched off. Every word is a draft.
       · A keyboard holds it too: with her key focused, hold Space (a tap of Space or Enter still
         opens her panel). ?tour still opens the walk directly, without the hold.
       · ?hold plays the hold by itself once Home is on screen, for a review or a recording
         (index.html?hold#/home): the same dim, card and bar, then the welcome. */
  var WALK_HOLD = 1500, WALK_PAUSE = 250;   /* ms: Rose's 1.5 seconds; the pause keeps a tap a tap */
  var HOLD = null, HOLD_EAT = false, HOLD_KEY = '#fy-bar [data-act="fy-toggle"]', HOLD_DEMO = /[?&]hold\b/.test(location.search);
  function holdBegin(k, id, x, y) {
    if (!k || HOLD || walkOn()) return;
    HOLD = { key: k, id: id, x: x, y: y, t0: performance.now(), shown: false };
    HOLD.raf = requestAnimationFrame(holdTick);
  }
  function holdEl() {
    var h = document.getElementById('walk-hold');
    if (h) return h;
    h = document.createElement('div');
    h.className = 'walk-hold'; h.id = 'walk-hold'; h.setAttribute('popover', 'manual'); h.setAttribute('role', 'status');
    h.innerHTML = '<div class="walk-spot" aria-hidden="true"></div>' +
      '<div class="walk-card walk-hold-card"><p class="walk-hold-t"><span class="walk-title">Starting onboarding</span><span class="draft-tag">Beta</span></p>' +
      '<div class="walk-bar" aria-hidden="true"><i></i></div><p class="walk-hold-hint">Keep holding</p></div>';
    document.body.appendChild(h);
    return h;
  }
  function holdShow(h) {
    var el = holdEl();
    el.classList.add('is-on'); if (el.showPopover && !el.matches(':popover-open')) el.showPopover();
    h.shown = true; HOLD_EAT = true;
    fyRest(h.key, true);   /* no turn while she is held (Rose, 4 Oct 2026): her thinking ring is the only motion */
    h.mk = h.key.querySelector('.fy-mk');
    if (h.mk) { h.state0 = h.mk.getAttribute('data-state'); h.mk.setAttribute('data-state', 'thinking'); }
  }
  /* let go early: it all melts away. Handed to the walk: its dim takes over at once (two would
     stack), and the card fades where it was while the welcome glides out of it */
  function holdHide(handoff) {
    var el = document.getElementById('walk-hold'); if (!el) return;
    var spot = el.querySelector('.walk-spot');
    function off() { el.classList.remove('is-on'); if (el.hidePopover && el.matches(':popover-open')) el.hidePopover(); el.style.removeProperty('--hold-p'); el.style.removeProperty('--hold-dim'); spot.style.visibility = ''; }
    if (handoff) spot.style.visibility = 'hidden';
    (handoff ? el.querySelector('.walk-card') : el).animate([{ opacity: 1 }, { opacity: 0 }], { duration: walkPx('--t-move') }).onfinish = off;
  }
  /* her key's box for the hole, and the card above it */
  function holdPlace(h) {
    var el = holdEl(), C = el.querySelector('.walk-card'), r = h.key.getBoundingClientRect(), g = walkPx('--space-4'), vw = document.documentElement.clientWidth;
    el.style.setProperty('--walk-x', r.left.toFixed(1) + 'px'); el.style.setProperty('--walk-y', r.top.toFixed(1) + 'px');
    el.style.setProperty('--walk-w', r.width.toFixed(1) + 'px'); el.style.setProperty('--walk-h', r.height.toFixed(1) + 'px');
    el.style.setProperty('--walk-r', getComputedStyle(h.key).borderTopLeftRadius);
    C.style.left = Math.max(g, Math.min(vw - g - C.offsetWidth, r.left)).toFixed(1) + 'px';
    C.style.top = Math.max(g, r.top - g - C.offsetHeight).toFixed(1) + 'px';
  }
  function holdTick(now) {
    var h = HOLD; if (!h) return;
    var t = now - h.t0, el;
    if (t >= WALK_PAUSE && !h.shown) holdShow(h);
    if (h.shown) {
      var p = Math.min(1, (t - WALK_PAUSE) / (WALK_HOLD - WALK_PAUSE));
      el = holdEl(); el.style.setProperty('--hold-p', p.toFixed(3)); el.style.setProperty('--hold-dim', Math.min(1, p * 3).toFixed(3));
      holdPlace(h);
    }
    if (t >= WALK_HOLD) { holdDone(h); return; }
    h.raf = requestAnimationFrame(holdTick);
  }
  /* let go, slid away, or the browser took the touch for a scroll: nothing opens */
  function holdStop() {
    var h = HOLD; if (!h) return;
    HOLD = null; cancelAnimationFrame(h.raf);
    if (!h.shown) return;   /* a tap: nothing showed, so her panel opens as always */
    if (h.mk) h.mk.setAttribute('data-state', h.state0);
    holdHide(false);
    if ((h.key.matches(':hover') && matchMedia('(hover:hover)').matches) || h.key.matches(':focus-visible')) fyTurn(h.key);
  }
  function holdDone(h) {
    HOLD = null;
    if (h.mk) h.mk.setAttribute('data-state', 'answering');
    if (navigator.vibrate) navigator.vibrate(12);
    setTimeout(function () {
      if (h.mk) h.mk.setAttribute('data-state', h.state0);
      if (FY.open) ACT['fy-close']();
      if (!CURR || CURR.base !== 'home') { holdHide(false); WALK.pending = true; location.hash = '#/home'; return; }
      var el = holdEl();
      walkStart({ key: h.key.getBoundingClientRect(), card: el.querySelector('.walk-card').getBoundingClientRect(), r: getComputedStyle(h.key).borderTopLeftRadius });
      holdHide(true);
    }, walkPx('--t-move'));
  }
  document.addEventListener('pointerdown', function (ev) {
    var k = ev.target.closest && ev.target.closest(HOLD_KEY);
    HOLD_EAT = false;
    if (!k || (ev.pointerType === 'mouse' && ev.button !== 0)) return;
    holdBegin(k, ev.pointerId, ev.clientX, ev.clientY);
  });
  /* Space held on her focused key is the same hold; letting go of Space ends it */
  document.addEventListener('keydown', function (ev) {
    if ((ev.key === ' ' || ev.code === 'Space') && !ev.repeat && ev.target.closest && ev.target.closest(HOLD_KEY)) { HOLD_EAT = false; holdBegin(ev.target.closest(HOLD_KEY), 'key'); }
  });
  document.addEventListener('keyup', function (ev) { if ((ev.key === ' ' || ev.code === 'Space') && HOLD && HOLD.id === 'key') holdStop(); });
  window.addEventListener('pointermove', function (ev) {
    if (HOLD && ev.pointerId === HOLD.id && Math.hypot(ev.clientX - HOLD.x, ev.clientY - HOLD.y) > walkPx('--space-2')) holdStop();
  });
  ['pointerup', 'pointercancel'].forEach(function (t) { window.addEventListener(t, function (ev) { if (HOLD && ev.pointerId === HOLD.id) holdStop(); }); });
  document.addEventListener('contextmenu', function (ev) { if (HOLD || (ev.target.closest && ev.target.closest(HOLD_KEY))) ev.preventDefault(); });
  /* after a hold that showed, the click that ends it is not a tap on her key (until the next press) */
  document.addEventListener('click', function (ev) {
    if (HOLD_EAT && ev.target.closest && ev.target.closest(HOLD_KEY)) { ev.preventDefault(); ev.stopImmediatePropagation(); HOLD_EAT = false; }
  }, true);

  /* ── SMOOTH SCROLL (Rose, 27 Sep 2026) ─────────────────────────────────────────────
     The website's Lenis (vendor/, from the design repo), tuned for an app: the same easing as
     the site, about half its length, because lists and tables are scanned, not read. What it
     deliberately does NOT do, and why:
       · no anchors — every link here is a #/route, and Lenis taking # links would take the
         navigation;
       · the main bar, the sub menu, Freya's panel and the sheet keep their own scrolling;
       · a change of page lands at the top instantly — toY() — never glides;
       · a phone scrolls natively (Lenis smooths the wheel and trackpad only).
     With the sheet open the page is held still, as a dialog should hold it. */
  var LENIS = null;
  if (typeof Lenis !== 'undefined') {
    LENIS = new Lenis({
      duration: 0.55,
      easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); },
      smoothWheel: true,
      prevent: function (n) { return !!(n && n.closest && n.closest('.mainbar, .submenu, .fy-panel, .sheet, .qz-veil, .lx-film')); }
    });
    (function raf(t) { LENIS.raf(t); requestAnimationFrame(raf); })(0);
  }
  function toY(y) { if (LENIS) LENIS.scrollTo(y, { immediate: true, force: true }); else window.scrollTo(0, y); }

  /* THE TUTORIAL's way in (freya-tutorial.js, 2 Oct 2026): what it reads and calls in the shell,
     and nothing else. It is set before the first render, so the tutorial can wake on it. */
  window.FINNA_API = {
    A: A, V: V, ACT: ACT, render: render, toY: toY, layout: layout, toast: toast, closeSheet: closeSheet,
    glide: function (y) { if (LENIS) LENIS.scrollTo(y, { force: true }); else window.scrollTo({ top: y, behavior: 'smooth' }); },
    lenis: function (on) { if (!LENIS) return; if (on) LENIS.start(); else LENIS.stop(); },
    curr: function () { return CURR; }, ask: ask, openPanel: openPanel, setFy: setFy, sendState: sendState, inputEl: inputEl,
    fy: function () { return FY; }, dock: walkDock, shown: walkShown, held: walkHeld, px: walkPx, walkOn: walkOn
  };

  rebind();
  render();
})(APP, VIEWS);

