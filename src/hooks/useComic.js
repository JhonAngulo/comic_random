import { useState, useEffect } from "react";

const getRequestByProxy = (url) =>{
  const proxyUrl = 'https://cors-anywhere.herokuapp.com'

  return new Promise((resolve, reject) => {
    fetch(`${proxyUrl}/${url}`, {
      headers: {
        'X-Requested-With': 'wololo',
      },
    })
    .then(resp => resp.json())
    .then(res => resolve(res))
    .catch(error => reject(`Request fail`, error.message))
  })
}

const useGetComic = () => {
  const urlBase = 'https://xkcd.com/'
  const urlComplement = 'info.0.json'
  const [comit, setComit] = useState({});

  useEffect(async () => {

    const {num} = await getRequestByProxy(`${urlBase}${urlComplement}`)
    console.log(num)
    setComit({
      title: 'one'
    })
  }, []);

  return comit;
};

export default useGetComic;