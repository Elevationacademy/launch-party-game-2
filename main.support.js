const RossGif = $(`<img class="gif" src="https://media2.giphy.com/media/TBXlEhCiia69G/200w.webp?cid=790b76116cb672a20550892906c6fed30bf71f6510fb97fa&rid=200w.webp" alt="Ross-Gif">`)
const JoeyGif = $(`<img class="gif" src="https://media1.giphy.com/media/GgR1CyPtjdh3q/200.webp?cid=790b7611d3372b56876af481e83bda366bc9e542d085072b&rid=200.webp" alt="Joey-Gif">`)
const ChandlerGif = $(`<img class="gif" src="https://media0.giphy.com/media/vNITrslTkxf8Y/giphy.webp?cid=790b7611a4543104fb460f2f18ac7605a6d46d4b2d09a431&rid=giphy.webp" alt="Chandler-Gif">`)
const MonicaGif = $(`<img class="gif" src="https://media2.giphy.com/media/VJqNoJWP3A7tZZBMk7/200w.webp?cid=790b7611d3f5a799e2c40b2e1f2a8b7506aa11ac3f59cfee&rid=200w.webp" alt="Monica-Gif">`)
const PhoebeGif = $(`<img class="gif" src="https://media2.giphy.com/media/h1msXowtrhVPW/200.webp?cid=790b7611f1cb5ae1c1afe76626e1f0ae0adcdb7438fec4bc&rid=200.webp" alt="Phoebe-Gif">`)
const RachelGif = $(`<img class="gif" src="https://media0.giphy.com/media/jz0oM9Els8bHa/giphy.webp?cid=790b7611b0f7c0ace3b304257a6a5b7765688c7556db67f4&rid=giphy.webp" alt="Rachel-Gif"></img> `)



const showName = function (name) {
  let title = $(`<div class="title">${name}</div>`)
  if (!name || typeof name !== "string") return
  if (name == "Ross" || name == "Joey" || name == "Chandler") {
    $('#boys').append(title)
  } else {
    $('#girls').append(title)
  }
}

const showGif = function (gif) {
  if (gif == RossGif || gif == JoeyGif || gif == ChandlerGif) {
    $('#boys').append(gif)
  } else {
    $('#girls').append(gif)
  }
}

