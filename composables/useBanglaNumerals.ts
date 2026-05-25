/** Converts ASCII digits in a string to Bengali numerals (০-৯). */
export const useBanglaNumerals = () => {
  const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯']

  const translateNumerals = (numStr: string | number) =>
    numStr.toString().replace(/[0-9]/g, (w) => bengaliDigits[Number(w)])

  return { translateNumerals }
}
