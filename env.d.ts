declare module 'silk-sdk' {
  export default {
    decode: (input: any, output: any, options?: any, ...args: any[]) => any,
    encode: (input: any, output: any, options?: any, ...args: any[]) => any,
    compare: (ref: any, test: any, options?: {}) => any
  }
}