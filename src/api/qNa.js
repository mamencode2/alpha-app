let signsData = [
  { nm: "cabbege", imgurl: "https://i.imgur.com/5TrcbL4.gif" },
  { nm: "doro", imgurl: "https://i.imgur.com/ivrizwj.gif" },
  { nm: "dabo", imgurl: "https://i.imgur.com/ReVz5I1.gif" },
  { nm: "konjo", imgurl: "https://i.imgur.com/G9unthR.gif" },
  { nm: "fiyel", imgurl: "https://i.imgur.com/UYukQgR.gif" }
];

let defindData = [
  {
    engC: "",
    amharicWord: "",
    signRep: ""
  }
];
let sentensSignData = [
  {
    nm: "konjo bet",
    imgurl: "https://i.imgur.com/eJJKjg8.gif"
  }
];

let qtnImagesColl = [
  { nm: "dimet", img: "https://i.imgur.com/gFDMXGD.png" },
  { nm: "wusha", img: "https://i.imgur.com/uroiI3x.jpeg" },
  { nm: "avocado", img: "https://i.imgur.com/uroiI3x.jpeg" },
  { nm: "bet", img: "https://i.imgur.com/UBC69T7.jpeg" },
  { nm: "muz", img: "https://i.imgur.com/jBDLJRo.jpeg" },
  { nm: "fiyel", img: "https://i.imgur.com/Z4XqSEh.jpg" },
  { nm: "beg", img: "https://i.imgur.com/YiPyriY.jpeg" },
  { nm: "wef", img: "https://i.imgur.com/HQJbm0X.png" },
  { nm: "dabo", img: "https://i.imgur.com/wVMQFfX.gif" },
  { nm: "wenber", img: "https://i.imgur.com/viSeqWS.jpeg" },
  { nm: "sofa", img: "https://i.imgur.com/MFer5UT.jpeg" },
  { nm: "satin", img: "https://i.imgur.com/JswMEuL.jpeg" },
  { nm: "birtukan", img: "https://i.imgur.com/Thmi1jn.png" },
  { nm: "good", img: "https://i.imgur.com/X7OBJDg.jpeg" },
  { nm: "bad", img: "https://i.imgur.com/fbDCsNS.png" },
  { nm: "cabbage", img: "https://imgur.com/riuiiVv.jpg" },
  { nm: "mitmita", img: "https://imgur.com/QGV27Et.jpg" },
  { nm: "doro", img: "https://i.imgur.com/F6HZ6gd.jpeg" }
];

function getQtnImg(indx) {
  return qtnImagesColl.find((el) => el.nm === indx).img;
}

function getSignD(indx) {
  return signsData.find((el) => el.nm === indx).imgurl;
}
export const questions = [
  {
    qId: "1",
    qtnType: "twoChoice",
    questionText: "which one is Cabbege",
    questionsAnswerChoices: [
      {
        qtnImg: getQtnImg("mitmita"),
        qtnSign: "https://i.imgur.com/QhIAEso.gif"
      },
      //
      {
        qtnImg: getQtnImg("cabbage"),
        qtnSign: "https://i.imgur.com/5TrcbL4.gif"
      }
    ],
    correctAnswer: 1
  },
  {
    qId: "2",
    qtnType: "oneThreeChoice",
    questionText: "ይህ ምልክት የ ምንድን ነው?",
    questionSign: "https://i.imgur.com/5TrcbL4.gif",
    questionsAnswerChoices: [
      {
        qtnText: "ሚጥሚጣ",
        qtnImg: getQtnImg("mitmita")
      },
      //
      {
        qtnText: "ጥቅል ጎመን",
        qtnImg: getQtnImg("cabbage")
      },
      {
        qtnText: "ሙዝ",
        qtnImg: getQtnImg("muz")
      }
    ],
    correctAnswer: 1
  },
  {
    qId: "3",
    qtnType: "oneThreeChoice",
    questionText: "ይህ ምልክት የ ምንድን ነው?",

    questionSign: "https://i.imgur.com/ReVz5I1.gif",
    questionsAnswerChoices: [
      {
        qtnText: "ዳቦ",
        qtnImg: getQtnImg("dabo")
      },
      //
      {
        qtnText: "አቡካዶ",
        qtnImg: getQtnImg("avocado")
      },
      {
        qtnText: "ብርቱካን",
        qtnImg: getQtnImg("birtukan")
      }
    ],
    correctAnswer: 0
  },
  {
    qId: "4",
    qtnType: "twoChoice",
    questionText: "which one is doro",
    questionsAnswerChoices: [
      {
        qtnImg: getQtnImg("doro"),
        qtnSign: getSignD("doro")
      },
      //
      {
        qtnImg: getQtnImg("fiyel"),
        qtnSign: getSignD("fiyel")
      }
    ],
    correctAnswer: 0
  },
  {
    qId: "5",
    qtnType: "sortOrderT",
    questionText: "ይህ ምልክት የ ምንድን ነው?",
    questionSign: "https://i.imgur.com/eJJKjg8.gif",
    questionsAnswerChoices: ["መኪና", "ቤት", "ቆንጆ", "መጥፎ", "አቮካዶ"],
    correctAnswer: "ቆንጆ ቤት"
  }
];
