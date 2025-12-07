/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'neon-cyan': '#00f0ff',
                'neon-magenta': '#ff006e',
                'neon-green': '#39ff14',
                'neon-purple': '#b026ff',
                'bg-dark': '#0a0a0a',
                'bg-darker': '#1a1a1a',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Orbitron', 'sans-serif'],
            },
            boxShadow: {
                'glow-cyan': '0 0 10px #00f0ff, 0 0 20px #00f0ff, 0 0 30px #00f0ff',
                'glow-magenta': '0 0 10px #ff006e, 0 0 20px #ff006e, 0 0 30px #ff006e',
                'glow-green': '0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14',
                'glow-purple': '0 0 10px #b026ff, 0 0 20px #b026ff, 0 0 30px #b026ff',
            },
            backgroundImage: {
                'cyber-grid': "linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)",
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'glitch': 'glitch 1s linear infinite',
            },
            keyframes: {
                glitch: {
                    '0%': { transform: 'translate(0)' },
                    '20%': { transform: 'translate(-2px, 2px)' },
                    '40%': { transform: 'translate(-2px, -2px)' },
                    '60%': { transform: 'translate(2px, 2px)' },
                    '80%': { transform: 'translate(2px, -2px)' },
                    '100%': { transform: 'translate(0)' },
                }
            }
        },
    },
    plugins: [],
}
