export function setURLSearchParam(
  currentUrl: string,
  name: string,
  value: string
) {
  const [url, search] = currentUrl.split("?");

  if (!search) {
    return `${url}?${name}=${value}`;
  }

  let newSearch = `?${name}=${value}`;

  for (const query of search.split("&")) {
    if (query.startsWith(name)) {
      continue;
    }
    
    newSearch += `&${query}`;
  }

  return url + newSearch;
}
