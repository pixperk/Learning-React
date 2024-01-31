export const exerciseOptions = {
    method: 'GET',
    params: {limit: '10'},
    headers: {
      'X-RapidAPI-Key': 'a218ab7afcmsh31bf0fb0fa5b711p1236e1jsnb62717a2ac9b',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async(url, options )=> {
    const response = await fetch(url, options)
    const data = await response.json()
    return data

}