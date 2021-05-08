function sortObject(obj) {
  if (obj === null) {
    return null
  }
  if (typeof obj !== "object") {
    return obj
  }
  // arrays have typeof "object" in js!
  if (Array.isArray(obj)) {
    return obj.map(sortObject)
  }
  const sortedKeys = Object.keys(obj).sort()
  const result = {}
  sortedKeys.forEach(key => {
    result[key] = sortObject(obj[key])
  })
  return result
}

export function marshalJSON(json) {
  return Buffer.from(sortAndStringifyJSON(json))
}

export function sortAndStringifyJSON(json) {
  return JSON.stringify(sortObject(json))
}
