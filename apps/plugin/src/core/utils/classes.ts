export const classes = (...args): string=>{
  return args.filter(c=>c).join(" ")
}