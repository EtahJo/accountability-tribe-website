import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        purple: '#9352E6',
        pink: '#F2ADEF',
        lightPink: 'rgba(242, 173, 239, 0.3)',
      },
      boxShadow: {
        '3xl': '0px 4px 4px 0px #00000040',
        buttonInner: '0px 4px 4px 0px #00000040 inset',
      },
      zIndex: {
        '100': '100',
      },
      screens: {
        phone: '376px',
        medPhone: '439px',
        largePhone: '524px',
        '350': '350px',
      },
    },
  },
  plugins: [],
};
export default config;
