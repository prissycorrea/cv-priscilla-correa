export const sizes = {
    mobile: '300px',
    tablet: '768px',
    desktop: '1024px',
  }
  
  export const devices = {
    mobile: `(min-width: ${sizes.mobile}) and (max-width: ${sizes.tablet})`,
    tablet: `(min-width: ${sizes.tablet}) and (max-width: ${sizes.desktop})`,
    desktop: `(min-width: ${sizes.desktop})`,
  }