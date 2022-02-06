module.exports = {
  "routes": [
    {
      "method": "GET",
      "path": "/page/:id",
      "handler": "page.findOne",
      "config": {
        "policies": []
      }
    },
    {
      "method": "GET",
      "path": "/page/slug/:slug",
      "handler": "page.findSlug",
      "config": {
        "policies": []
      }
    }
  ]
}
