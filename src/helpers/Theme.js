const setTheme = (currentTheme) => {
  // console.log(document.documentElement.style.setProperty());
  // console.log(document.styleSheets);
  // console.log(document.styleSheets[1].cssRules[0].selectorText);

  /* 
  const selectedCssProps = Array.from(document.styleSheets).reduce(
    (prevStyleSheet, currStyleSheet) => {
      prevStyleSheet = [
        ...prevStyleSheet,
        ...Array.from(currStyleSheet.cssRules).reduce(
          (prevCssRule, currCssRule) => {
            prevCssRule =
              currCssRule.selectorText === ":root"
                ? [
                    ...prevCssRule,
                    ...Array.from(currCssRule.stye).filter((item) =>
                      item.startsWith("--selected")
                    ),
                  ]
                : prevCssRule;
            return prevCssRule;
          },
          []
        ),
      ];
      return prevStyleSheet;
    },
    []
  );
 */

  const selectedCssProps = Array.from(document.styleSheets).reduce(
    (prev, curr) =>
      (prev = [
        ...prev,
        Array.from(curr.cssRules).reduce((prev, curr) => {
          prev =
            curr.selectorText === ":root"
              ? [
                  ...prev,
                  Array.from(curr.style).filter((item) =>
                    item.startsWith("--selected")
                  ),
                ]
              : prev;
          return prev;
        }, []),
      ]),
    []
  );

  // console.log(selectedCssProps);
  selectedCssProps.forEach((value) => {
    // document.documentElement.style.setProperty(
    //   value,
    //   `var(--${currentTheme}${value.substring(10)})`
    // );
  });

  // console.log(document.documentElement.style);
  // document.documentElement.style.setProperty(
  //   "--selected-theme-main-color",
  //   `var(--${currentTheme}-theme-main-color)`
  // );
};

export default setTheme;
