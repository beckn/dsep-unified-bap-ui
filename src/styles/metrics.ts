export const Metrics = {
  small: 10,
  base: 20,
  large: 40,
  xLarge: 60,
  xxLarge: 80,
  padding: {
    tiny: 2,
    xSmall: 5,
    small: 10,
    medium: 16,
    base: 20,
    sLarge: 24,
    mLarge: 30,
    large: 40,
    xLarge: 60,
    xxLarge: 80,
    mid: 12,
    val: function (val: string) {
      return this[val];
    },
  },
  margin: {
    tiny: 2,
    xSmall: 5,
    small: 10,
    medium: 16,
    base: 20,
    sLarge: 30,
    large: 40,
    xLarge: 60,
    xxLarge: 80,
    mid: 12,
    val: function (val: string) {
      return this[val];
    },
  },
  radius: {
    tiny: 2.5,
    xSmall: 5,
    xxSmall: 8,
    small: 10,
    base: 13,
    medium: 15,
    large: 20,
    xxxLarge: 40,
  },
  letterSpacing: {
    tiny: -0.3,
  },
};
