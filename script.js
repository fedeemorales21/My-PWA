if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(reg => console.log('Register sw successful', reg))
    .catch(err => console.warn('ERROR', err))
}