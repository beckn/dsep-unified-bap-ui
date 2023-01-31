export const theme = (colorScheme?: string) =>
  colorScheme === 'dark'
    ? {
        white: '#FFFFFF',
        black: 'green',
        black10: 'rgba(0, 0, 0, 0.1)',
        background: '#F9F9F9',
        grey: 'grey',
        silverSand: '#C4C4C4',
        cardTitle: '#171716',
        cardDesc: 'rgba(23, 23, 22, 0.75)',
        dimGray: 'rgba(104, 104, 104, 0.2)',
        oliveBlack: '#3D3D3D',
        detailHeaderBg: '#E0E0E0',
        cardDescription: 'rgba(23, 23, 22, 0.75)',
      }
    : {
        white: '#FFFFFF',
        black: '#000',
        black10: 'rgba(0, 0, 0, 0.1)',
        background: '#F9F9F9',
        grey: 'grey',
        silverSand: '#C4C4C4',
        cardTitle: '#171716',
        cardDesc: 'rgba(23, 23, 22, 0.75)',
        dimGray: 'rgba(104, 104, 104, 0.2)',
        oliveBlack: '#3D3D3D',
        detailHeaderBg: '#E0E0E0',
        cardDescription: 'rgba(23, 23, 22, 0.75)',
      };
