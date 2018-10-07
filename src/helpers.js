import md5 from 'md5'

export const fetchFromMarvel = endpoint => {
  const ts = Date.now()
  const publicKey = '5b4ca4fb9704024334914e17aabbb5a3'
  const privateKey = '09c304de1518099e24867f72bfba5a0bc0accfa7'
  const hash = md5(`${ts}${privateKey}${publicKey}`)

  return fetch(`https://gateway.marvel.com:443/v1/public/${endpoint}?ts=${ts}&apikey=${publicKey}&hash=${hash}`)
    .then(response => response.json())
}
