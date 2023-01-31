export type KeyValue = {
  [key: string]: any;
};

export interface NavigationParams {
  callback?: Array<{url: string; content: string}>;
}

export type Navigation = {
  pop: () => void;
  popToTop: () => void;
  isFocused: () => boolean;
  push: (screenName: string, params?: KeyValue) => void;
  replace: (screenName: string, params?: KeyValue) => void;
  reset: (screenName: string, params?: KeyValue) => void;
  navigate: (screenName: string, params?: KeyValue) => void;
  isFirstRouteInParent: () => boolean;
  state: {
    params: NavigationParams;
    routeName: string;
  };
  goBack: () => void;
  addListener: (event: string, fn: () => void) => {remove: () => {}};
  getParam: any;
};
