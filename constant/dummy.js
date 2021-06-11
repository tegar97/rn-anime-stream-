export const newSeason = [
  {
    id: 1,
    slug: "demon-slayer",
    EnglishName: "Demon Slayer",
    JapanName: "Kimetsu No Yaiba",
    thumbnail: require("../assets/images/series/demon_slayer/demon_cover.jpg"),

    details: {
      image: require("../assets/images/series/demon_slayer/detail.jpeg"),
      age: "16+",
      genre: "Adventure",
      ratings: 8.6,
      season: "SEASON 1",
      progress: "20%",
      author: "Koyoharu Gotōge",
      Studio: "ufotable",
      plot: "The story takes place in Taishō-era Japan. It follows Tanjiro Kamado and his sister Nezuko Kamado as they seek a cure to Nezuko's demon curse. Tanjiro and Nezuko become entangled in the affairs of a secret society, known as the Demon Slayer Corps, that have been waging a secret war against demons for centuries.",
    },
  },
  {
    id: 2,
    EnglishName: "Sorcery fight",
    JapanName: "Jujutsu Kaisen ",
    slug: "jujutsu-kaisen",

    thumbnail: require("../assets/images/series/jujutsu_kaisen/jujutsu_cover.png"),

    details: {
      image: require("../assets/images/series/jujutsu_kaisen/detail.jpg"),
      age: "16+",
      genre: "Adventure",
      ratings: 8.8,
      season: "SEASON 1",
      progress: "40%",
      author: "Gege Akutami",
      Studio: "Mappa",
      plot: "Yuji Itadori is an unnaturally fit high school student living in Sendai with his grandfather. He regularly avoids the track team due to the time commitment required for it, despite his innate talent for the sport. Instead, he chooses to join the Occult Research Club; due to the freedom it allows him in attending, he goes to visit his dying grandfather in the hospital every day. On his deathbed, his grandfather instills two powerful messages within Yuji:",
    },
  },
];

export const animeSeries = [
  {
    id: 1,
    image: require("../assets/images/series/prison_break/prison_break.webp"),
    age: "16+",

    genre: "Action",
    ratings: 8.3,
    season: "SEASON 1",
    currentEpisode: 'S1:EP3"',
    runningTime: "45m",
    progress: "50%",
  },
];

export const continueWatching = [
  {
    id: 1,
    name: "Jujutsu Kaisen",
    slug: "jujutsu-kaisen",
    thumbnail: require("../assets/continue_watching/jujutsu_kaisen.jpeg"),
    progress: "30%",
    currentEpisode: "S1:EP3",
  },
  {
    id: 2,
    name: "Kaguya Sama  Love Is War",
    slug: "kaguya-sama-love-is-war",

    thumbnail: require("../assets/continue_watching/kaguya_sama.jpg"),
    progress: "40%",
    currentEpisode: "S1:EP2",
  },
  {
    id: 3,
    name: "Gekijouban Fate/Stay Night: Heaven's Feel - II. Lost Butterfly",
    slug: "fate",

    thumbnail: require("../assets/continue_watching/fate.jpg"),
    progress: "10%",
    currentEpisode: "Movie",
  },
  {
    id: 4,
    name: "Gintama: The Final",
    slug: "gintama-the-final",
    thumbnail: require("../assets/continue_watching/gintama.jpg"),
    progress: "10%",
    currentEpisode: 'Movie"',
  },
];

const dummyData = { newSeason, continueWatching };

export default dummyData;
