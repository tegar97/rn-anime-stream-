export const newSeason = [
  {
    id: 1,
    name: "Barbarians",
    thumbnail: require("../assets/images/series/barbarians/barbarians_cover.jpg"),
    stillWatching: [
      {
        id: 1,
        profile: require("../assets/images/dummy_profile/1.jpg"),
      },
      {
        id: 2,
        profile: require("../assets/images/dummy_profile/2.jpg"),
      },
      {
        id: 3,
        profile: require("../assets/images/dummy_profile/3.jpg"),
      },
      {
        id: 4,
        profile: require("../assets/images/dummy_profile/4.jpg"),
      },
      {
        id: 5,
        profile: require("../assets/images/dummy_profile/5.jpg"),
      },
      {
        id: 6,
        profile: require("../assets/images/dummy_profile/6.jpg"),
      },
    ],
    details: {
      image: require("../assets/images/series/barbarians/barbarians.jpg"),
      age: "16+",
      genre: "Historical Drama",
      ratings: 7.2,
      season: "SEASON 1",
      currentEpisode: 'S1 : E1 "Episode 1 : Vikings"',
      runningTime: "45m",
      progress: "0%",
    },
  },
  {
    id: 2,
    name: "Bridgerton",
    thumbnail: require("../assets/images/series/bridgerton/bridgerton_cover.jpg"),
    stillWatching: [
      {
        id: 1,
        profile: require("../assets/images/dummy_profile/6.jpg"),
      },
      {
        id: 2,
        profile: require("../assets/images/dummy_profile/7.jpg"),
      },
      {
        id: 3,
        profile: require("../assets/images/dummy_profile/3.jpg"),
      },
      {
        id: 4,
        profile: require("../assets/images/dummy_profile/4.jpg"),
      },
    ],
    details: {
      image: require("../assets/images/series/bridgerton/bridgerton.jpg"),
      age: "18+",
      genre: "Romance",
      ratings: 7.3,
      season: "SEASON 1",
      currentEpisode: 'S1 : E6 "Episode 6 : Swish"',
      runningTime: "45m",
      progress: "50%",
    },
  },
  {
    id: 3,
    name: "Money Heist",
    thumbnail: require("../assets/images/series/money_heist/money_heist_cover.jpg"),
    stillWatching: [],
    details: {
      image: require("../assets/images/series/money_heist/money_heist.jpg"),
      age: "16+",
      genre: "Crime",
      ratings: 8.3,
      season: "SEASON 1",
      currentEpisode: 'S1 : E15 "Episode 15 : Bella ciao"',
      runningTime: "45m",
      progress: "50%",
    },
  },
  {
    id: 4,
    name: "Salvation",
    thumbnail: require("../assets/images/series/salvation/salvation_cover.jpg"),
    stillWatching: [
      {
        id: 1,
        profile: require("../assets/images/dummy_profile/1.jpg"),
      },
      {
        id: 2,
        profile: require("../assets/images/dummy_profile/2.jpg"),
      },
      {
        id: 3,
        profile: require("../assets/images/dummy_profile/3.jpg"),
      },
    ],
    details: {
      image: require("../assets/images/series/salvation/salvation.jpg"),
      age: "13+",
      genre: "Sci-Fi",
      ratings: 7.0,
      season: "SEASON 1",
      currentEpisode: 'S1 : E1 "Episode 1 : Pilot"',
      runningTime: "45m",
      progress: "0%",
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
    currentEpisode: 'S1 : E8 "Episode 8 : The Old Head"',
    runningTime: "45m",
    progress: "50%",
  },
];

export const continueWatching = [
  {
    id: 1,
    name: "Jujutsu Kaisen",
    thumbnail: require("../assets/continue_watching/jujutsu_kaisen.jpeg"),
    overallProgress: "30%",
    episode: 3,
  },
  {
    id: 2,
    name: "Kaguya Sama  Love Is War",
    thumbnail: require("../assets/continue_watching/kaguya_sama.jpg"),
    overallProgress: "40%",
    episode: 2,
  },
  {
    id: 3,
    name: "Gekijouban Fate/Stay Night: Heaven's Feel - II. Lost Butterfly",
    thumbnail: require("../assets/continue_watching/fate.jpg"),
    overallProgress: "10%",
    episode: 0,
  },
  {
    id: 4,
    name: "Gintama: The Final",
    thumbnail: require("../assets/continue_watching/gintama.jpg"),
    overallProgress: "10%",
    episode: 0,
  },
];

const dummyData = { newSeason, continueWatching };

export default dummyData;
