module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/sage-coders/" : "/",
  transpileDependencies: [
    'vuetify'
  ]
}
