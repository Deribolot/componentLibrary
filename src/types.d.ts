declare module '*.jpg'
declare module '*.png'

declare module '*.css' {
    const classes: { [key: string]: string };
    export default classes;
  }

  declare module '*.less' {
    const classes: { [key: string]: string };
    export default classes;
  }