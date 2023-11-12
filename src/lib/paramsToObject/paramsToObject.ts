type Hash = Record<string, string>

export function paramsToObject (searchParms: URLSearchParams) {
  // const entries = searchParms.entries()
  const result: Hash = {}
  for (const [key, value] of searchParms) {
    if (value != null && value !== '') {
      result[key] = value
    }
  }
  return result
}
