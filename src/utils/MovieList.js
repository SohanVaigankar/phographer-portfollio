// import images
import athelete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import athelete2 from "../img/athlete2.png";
import theracer2 from "../img/the-racer2.jpg";
import goodtimes2 from "../img/good-times2.jpg";

const MovieList = () => {
  return [
    {
      title: "The Athelete",
      mainImg: athelete,
      secondaryImg: athelete2,
      url: "/work/the-athelete",
      awards: [
        {
          title: "Masterpiece",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, iure.",
        },
        {
          title: "Blockbuster",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, iure.",
        },
        {
          title: "Rise and shine",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, iure.",
        },
      ],
    },
    {
      title: "The Racer",
      mainImg: theracer,
      secondaryImg: theracer2,
      url: "/work/the-racer",
      awards: [
        {
          title: "Masterpiece",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, iure.",
        },
        {
          title: "Blockbuster",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, iure.",
        },
        {
          title: "Rise and shine",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, iure.",
        },
      ],
    },
    {
      title: "Goodtimes",
      mainImg: goodtimes,
      secondaryImg: goodtimes2,
      url: "/work/goodtimes",
      awards: [
        {
          title: "Masterpiece",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, iure.",
        },
        {
          title: "Blockbuster",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, iure.",
        },
        {
          title: "Rise and shine",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, iure.",
        },
      ],
    },
  ];
};

export default MovieList;
