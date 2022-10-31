let testMode: boolean = true;

export const setTestMode = (isTestMode: boolean = false) => {
  testMode = isTestMode;
};

export const isTestMode = (): boolean => {
  return testMode;
};
