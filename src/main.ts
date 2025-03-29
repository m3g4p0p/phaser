import kaplay from "kaplay"
// import "kaplay/global"; // uncomment if you want to use without the k. prefix

const k = kaplay({ width: 400, height: 800, background: "#000000" })

k.loadRoot("./") // A good idea for Itch.io publishing later
k.loadSprite("player", "sprites/playerShip1_blue.png")

k.scene("game", () => {
  k.add([
    k.pos(k.width() / 2, k.height() / 2),
    k.sprite("player"),
    k.anchor("center"),
  ])
})

k.go("game")
