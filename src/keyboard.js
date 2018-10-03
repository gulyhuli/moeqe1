const kb = require ('./keyboard-buttons')

module.exports = {
  home: [
    [kb.home.advertising],
    [kb.home.packaging, kb.home.content],
    [kb.home.cart],
    [kb.home.bro]
  ],
  cart: [
    [kb.cart.clear],
    [kb.cart.order]
  ]
}
