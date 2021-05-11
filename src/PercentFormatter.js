const PercentFormatter = (pct) => {
  let pctVal = null;
  if (pct) {
    pct = pct.toString()
    if (pct.length > 4) {
      pctVal = pct.slice(2, (pct.length - 1)) + "." + pct.slice(pct.length - 1)

    } else {
      pctVal = pct.slice(2) + ".0";
    }

    return pctVal;
  }
}
export default PercentFormatter
