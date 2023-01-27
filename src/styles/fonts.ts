type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

export const Fonts = {
  family: {
    DM_SANS_REGULAR: 'DMSans-Regular',
    OPEN_SANS_REGULAR: 'OpenSans-Regular',
    OPEN_SANS_BOLD: 'OpenSans-Bold',
  },
  size: {
    xSmall: 8,
    small: 10,
    base: 12,
    medium: 14,
    caption: 14,
    subTitle: 14,
    title: 16,
    header: 20,
    highlight: 20,
    extraLarge: 30,
  },
  lineHeight: {
    xSmall: 14,
    small: 16,
    base: 18,
    mid: 19,
    large: 22,
    xLarge: 27,
  },
  letterSpacing: {
    small: -0.3,
  },
  weight: {
    base: '700' as FontWeight,
    bold: '700' as FontWeight,
    w5: '500' as FontWeight,
    w4: '400' as FontWeight,
    normal: 'normal' as FontWeight,
  },
};
