
module.exports = {
  routes: [
    { // Path defined with a URL parameter
      method: 'GET',
      path: '/header/getAllRoutes',
      handler: 'header.getAllRoutes',
      config: {
        auth: false,
      }
    }
  ]
}
