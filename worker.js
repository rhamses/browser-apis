self.addEventListener('notificationclick', (e) => {
  console.log("nto", e)
})

self.addEventListener('push', (event) => {
  const notification = new Promise((resolve, reject) => {
    const title = "Titulo"
    const body = event.data.text()
    self.registration.showNotification(title, {body})
    resolve(true)
  })
  const promiseChain = Promise.all([notification])
  event.waitUntil(promiseChain)
})