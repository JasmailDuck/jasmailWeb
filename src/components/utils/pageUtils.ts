class pageUtils {
  enableScrolling() {
    document.body.classList.remove("disable-scroll");
  }
  disableScrolling() {
    document.body.classList.add("disable-scroll");
  }
}

export const PageUtils = new pageUtils();
