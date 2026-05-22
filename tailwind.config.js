export default {
  content: ['./src/**/*.{js,css}', './AGENTS.md'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5',
          hover: '#4338CA',
          light: '#EEF2FF'
        },
        dark: {
          DEFAULT: '#0A0C29',
          subtle: '#13163D'
        }
      },
      fontFamily: {
        sans: ['Sora', '-apple-system', 'BlinkMacSystemFont', 'sans-serif']
      }
    }
  }
};
