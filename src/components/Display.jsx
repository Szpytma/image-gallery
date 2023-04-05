import Button from "./Button";
import Img1 from "../assets/1.avif";
import Image from "./Image";
import { useState } from "react";

const dataImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1680630679439-4832b7a40374?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
    src: { Img1 },
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1486591038957-19e7c73bdc41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    src: `${__dirname}/public/2.avif`,
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1576097449798-7c7f90e1248a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    src: `${__dirname}/public/1.avif`,
  },
];

function Display() {
  const [index, setIndex] = useState(dataImages.length - 1);
  const [url, setUrl] = useState(dataImages[dataImages.length - 1].url);
  return (
    <div>
      <button
        type="button"
        className="btn btn-warning"
        onClick={(event) => {
          if (index === 0) {
            console.log(index);
            setIndex(dataImages.length - 1);
            setUrl(dataImages[dataImages.length - 1].url);
          } else {
            console.log(index);
            setIndex((currentIndex) => currentIndex - 1);
            console.log(index);
            setUrl(dataImages[index - 1].url);
          }
        }}
      >
        Previous
      </button>
      <button
        type="button"
        className="btn btn-warning"
        onClick={(event) => {
          const random = Math.floor(Math.random() * dataImages.length) + 1;
          setUrl((url) => (url = dataImages[random - 1].url));
        }}
      >
        Random
      </button>
      <button
        type="button"
        className="btn btn-warning"
        onClick={(event) => {
          if (index === dataImages.length - 1) {
            console.log(index);
            setIndex(0);
            setUrl(dataImages[0].url);
          } else {
            console.log(index);
            setIndex((currentIndex) => currentIndex + 1);
            console.log(index);
            setUrl(dataImages[index + 1].url);
          }
        }}
      >
        Next
      </button>
      <Image imageUrl={url} />
    </div>
  );
}

export default Display;
