import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.6,
  googleFonts: [
    {
      name: 'Roboto',
      styles: ['700'],
    },
    {
      name: 'Roboto',
      styles: ['400'],
    },
  ],
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
  headerFontFamily: ['Roboto', 'sans-serif'],
  bodyFontFamily: ['Roboto', 'sans-serif'],
  overrideStyles: ({ rhythm }, options, styles) => ({
    
  }),
})

export default typography