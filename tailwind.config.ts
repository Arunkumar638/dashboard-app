import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx,html}',
  ],
  theme: {
    extend: {
      colors:{
        'dark-purple':'#081A51',
        'light-white':'rgba(255,255,255,0.18)',
        'light-yellow':'#FFC371',
        'light-blue':'#f2f7ff',
        'dark-blue':'#0B409c',
        'light-grey':'#bdc3c7',
        'coral':'#ff5e62',
        'orange':'#ff9966',
        'antique':'#faebd7',
        'lavender':'#E9E4F0',
        'rose':'rgb(230, 30, 77)',
        'blue':'#10316B',
        'red':'#E03131',
        'yellow':'#FFBE55'
      },
      width:{
        'expanded':'70%',
        'collapsed':'50%',
        'card':'75%',
        'courseCard-collapse':'37%',
        'courseCard-expand':'43%',
        'card-expand':'61.25rem',
        'card-collapse':'47.5rem',
        'button':'5rem',
        'search':'25%',
        'title':'85%',

      },
      height:{
        'card-content':'50.3rem',
        'card-output':'17.5rem',
        'button':'2.1875rem',
        'profile':'1.875rem',
        'card':'30%'
      },
      padding:{
        'title':'15%'
      },
      margin:{
        'left':'5rem',
        'top':'1.875rem',
        'profile':'80%',
        'content':'0.9375rem',
        'points':'1.875rem',
        'search':'20%',
        'icon':'52%',
        'avatar':'32%',
        'title':'30%',
        'arrow':'90%'
      },
      fontSize:{
        head:'1.25rem',
        subhead:'1rem',
        content:'0.875rem',
      },
      fontFamily:{
        'roboto':'Roboto Slab Variable, sans-serif',
      }, 
      fontWeight:{
        head:'bold',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
