
const friends = [
  { name: "Chandler", gif: ChandlerGif },
  { name: "Joey", gif: JoeyGif },
  { name: "Ross", gif: RossGif },
  { name: "Monica", gif: MonicaGif },
  { name: "Phoebe", gif: PhoebeGif }
]

const rachel = { name: "Rachel" }


for (let friend of friends) {
  showName(friend.name)
  showGif(friend.gif)
}