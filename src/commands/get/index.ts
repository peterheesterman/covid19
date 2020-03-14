import fetch from 'node-fetch'

function get() {
  return fetch('https://www.worldometers.info/coronavirus/')
    .then(res => res.text())
    .then(body => body)
    .catch(err => {
      // 'There was a problem. Please check your network connection.'
    })
}

const networkErrorMessage = 'There was a problem. Please check your network connection.'

export {
  get,
  networkErrorMessage
}
