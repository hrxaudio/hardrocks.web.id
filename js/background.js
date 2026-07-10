const videos=[
"epJU25FJqSQ",
"MbtBbdLSs6I",
"emUQ9CQAtwE",
"dxSghamkPho",
"4XJePuR1C9I",
"4aI0jdtU0w4",
"NIPV_5ItCYw"
];

const random=videos[Math.floor(Math.random()*videos.length)];

document.getElementById("bgvideo").src=
`https://www.youtube.com/embed/${random}?autoplay=1&mute=1&loop=1&playlist=${random}&controls=0&rel=0&modestbranding=1&playsinline=1`;
