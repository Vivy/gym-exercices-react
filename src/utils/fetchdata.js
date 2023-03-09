export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '730b382e05msh4c2fdd900412523p17eab9jsn3aa142015e96'
    ,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
}

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '730b382e05msh4c2fdd900412523p17eab9jsn3aa142015e96',
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options)
  const data = await response.json()

  return data
}
