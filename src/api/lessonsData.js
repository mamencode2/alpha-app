const lessonData = [
  "Free Daily lesson",
  "Food2",
  "fivews",
  "Actions",
  "Play",
  "Responses",
  "Positioning",
  "Sizes",
  "Emotions",
  "Objects",
  "Time",
  "Clothes",
  "Vehicles",
  "Family",
  "Family2",
  "Places",
  "Colors",
  "Greetings",
  "Animals",
  "Animals2",
  "CommonPhrases",
  "Households",
  "Rooms",
  "Rooms2",
  "Positioning2",
  "Time2",
  "Responses2",
  "Work",
  "Clothing2",
  "Clothing3",
  "Time4",
  "SocialDrama",
  "Filerting",
  "Responses3",
  "Food7",
  "Hobbies3",
  "Senses",
  "Vehicles2",
  "Tasks",
  "Seasons",
  "Animals4",
  "Electronics",
  "School",
  "Beauty",
  "Kitchen2",
  "Dishes",
  "Food6",

  "Emotions4"
];

const leftThumbsImgs = [
  {
    refName: "Free Daily lesson",
    imgLink: "https://i.imgur.com/2NVwldC.jpeg"
  },
  {
    refName: "Objects",
    imgLink: "https://i.imgur.com/ALRXvYI.jpeg"
  },
  {
    refName: "Actions",
    imgLink: "https://i.imgur.com/PfPRgzm.jpeg"
  },
  {
    refName: "Play",
    imgLink: "https://i.imgur.com/mlHtNpH.jpeg"
  },
  {
    refName: "Sizes",
    imgLink: "https://i.imgur.com/OaH5Zkl.jpeg"
  },
  {
    refName: "Positioning",
    imgLink: "https://i.imgur.com/iaO1DhG.jpeg"
  },
  {
    refName: "Emotions",
    imgLink: "https://i.imgur.com/5ZUdp7k.jpeg"
  },
  {
    refName: "Time",
    imgLink: "https://i.imgur.com/1sLfdr8.jpeg"
  },
  {
    refName: "Clothes",
    imgLink: "https://i.imgur.com/R8H4hy7.jpeg"
  },
  {
    refName: "Vehicles",
    imgLink: "https://i.imgur.com/cOLPjI9.jpeg"
  },
  {
    refName: "Family",
    imgLink: "https://i.imgur.com/gzZH5zF.jpeg"
  },
  {
    refName: "Food2",
    imgLink: "https://i.imgur.com/uzQUr2h.jpeg"
  },
  {
    refName: "fivews",
    imgLink: "https://i.imgur.com/fSfAzTc.jpeg"
  }
];

let combinedLessons = lessonData.map((lesson) => {
  let refIndex = leftThumbsImgs.find((el) => el.refName === lesson);

  return {
    lesson,
    refIndex,
    isLessonActive: lesson === "Free Daily lesson" ? true : false
  };
});

export { combinedLessons };
