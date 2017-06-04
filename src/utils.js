export const mapFilters = filters => {
  const entries = Object.entries(filters)
  const f = entries.map(f => `${f[0]}(${f[1]})`)
  return f.toString().replace(/,/g, ' ')
}
