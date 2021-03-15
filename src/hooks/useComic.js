import { useState, useEffect } from 'react'

const getRequestByProxy = (url) => {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com'
  // const proxyUrl = 'https://thingproxy.freeboard.io/fetch'

  return new Promise((resolve, reject) => {
    fetch(`${proxyUrl}/${url}`, {
      headers: {
        'X-Requested-With': 'wololo',
        Host: 'xkcd.com',
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then(resp => {
        if (resp.status === 200) {
          return resp.json()
        } else {
          return resp.text()
        }
      })
      .then(res => resolve(res))
      .catch(error => reject(error))
  })
}

const useGetComic = () => {
  const urlBase = 'https://xkcd.com'
  const urlComplement = 'info.0.json'
  const [comic, setComic] = useState({})
  const [error, setError] = useState(false)

  useEffect(async () => {
    const request = await getRequestByProxy(`${urlBase}/${urlComplement}`)
    if (typeof request === 'object') {
      const random = (Math.random() * (request.num - 1) + 1).toFixed(0)
      const data = await getRequestByProxy(`${urlBase}/${random}/${urlComplement}`)
      setComic(data)
    } else {
      setError(request)
    }
  }, [])

  return { comic, error }
}

export default useGetComic
