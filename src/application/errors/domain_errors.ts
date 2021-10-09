export const domainErros = (error: any) => {
  return {
    message: error.details[0].message,
    path: error.details[0].path
  }
}