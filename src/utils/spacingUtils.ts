/**
 * Generates an object of spacer values with keys representing the multiplier and values representing the pixel value
 * @param {number} max - The maximum value to generate spacers for
 * @param {number} step - Used to calculate the pixel values
 * @returns {Object.<number, string>}
 */
const generateSpacers = (max: number, step: number) => {
    // Initialize an object with predefined spacer values
    const spacers: { [key: number]: string } = {
      0: '0px',
      0.5: `${0.5 * step}px`,
    }
  
    // Loop through multipliers from 1 to the provided max value
    for (let i = 1; i <= max; i += 1) {
      spacers[i] = `${i * step}px`
    }
  
    return spacers
  }
  
  export default generateSpacers
  