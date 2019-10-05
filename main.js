
const friends = [
  { name: "Chandler", gif: RossGif },
  { name: "Joey", gif: JoeyGif },
  { name: "Ross", gif: ChandlerGif },
  { name: "Monica", gif: MonicaGif },
  { name: "Phoebe", gif: PhoebeGif },
  { name: "Rachel" }
]

for (let friend of friends) {
  showName(friend)
  showGif(friend.gif)
}
