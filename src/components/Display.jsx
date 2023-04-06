import Img1 from "../assets/1.avif";
import Image from "./Image";
import { useState } from "react";
import "./Display.css";

const cats = [
  { status_code: 100, title: "", url: "https://http.cat/100" },
  { status_code: 101, title: "", url: "https://http.cat/101" },
  { status_code: 102, title: "", url: "https://http.cat/102" },
  { status_code: 103, title: "", url: "https://http.cat/103" },

  { status_code: 200, title: "", url: "https://http.cat/200" },
  { status_code: 201, title: "", url: "https://http.cat/201" },
  { status_code: 202, title: "", url: "https://http.cat/202" },
  { status_code: 203, title: "", url: "https://http.cat/203" },
  { status_code: 204, title: "", url: "https://http.cat/204" },
  { status_code: 206, title: "", url: "https://http.cat/206" },
  { status_code: 207, title: "", url: "https://http.cat/207" },

  { status_code: 300, title: "", url: "https://http.cat/300" },
  { status_code: 301, title: "", url: "https://http.cat/301" },
  { status_code: 302, title: "", url: "https://http.cat/302" },
  { status_code: 303, title: "", url: "https://http.cat/303" },
  { status_code: 304, title: "", url: "https://http.cat/304" },
  { status_code: 305, title: "", url: "https://http.cat/305" },
  { status_code: 307, title: "", url: "https://http.cat/307" },
  { status_code: 308, title: "", url: "https://http.cat/308" },

  { status_code: 400, title: "", url: "https://http.cat/400" },
  { status_code: 401, title: "", url: "https://http.cat/401" },
  { status_code: 402, title: "", url: "https://http.cat/402" },
  { status_code: 403, title: "", url: "https://http.cat/403" },
  { status_code: 404, title: "", url: "https://http.cat/404" },
  { status_code: 405, title: "", url: "https://http.cat/405" },
  { status_code: 406, title: "", url: "https://http.cat/406" },
  { status_code: 407, title: "", url: "https://http.cat/407" },
  { status_code: 408, title: "", url: "https://http.cat/408" },
  { status_code: 409, title: "", url: "https://http.cat/409" },
  { status_code: 410, title: "", url: "https://http.cat/410" },
  { status_code: 411, title: "", url: "https://http.cat/411" },
  { status_code: 412, title: "", url: "https://http.cat/412" },
  { status_code: 413, title: "", url: "https://http.cat/413" },
  { status_code: 414, title: "", url: "https://http.cat/414" },
  { status_code: 415, title: "", url: "https://http.cat/415" },
  { status_code: 416, title: "", url: "https://http.cat/416" },
  { status_code: 417, title: "", url: "https://http.cat/417" },
  { status_code: 418, title: "", url: "https://http.cat/418" },
  { status_code: 420, title: "", url: "https://http.cat/420" },
  { status_code: 421, title: "", url: "https://http.cat/421" },
  { status_code: 422, title: "", url: "https://http.cat/422" },
  { status_code: 423, title: "", url: "https://http.cat/423" },
  { status_code: 424, title: "", url: "https://http.cat/424" },
  { status_code: 425, title: "", url: "https://http.cat/425" },
  { status_code: 426, title: "", url: "https://http.cat/426" },
  { status_code: 429, title: "", url: "https://http.cat/429" },
  { status_code: 431, title: "", url: "https://http.cat/431" },
  { status_code: 444, title: "", url: "https://http.cat/444" },
  { status_code: 450, title: "", url: "https://http.cat/450" },
  { status_code: 451, title: "", url: "https://http.cat/451" },
  { status_code: 497, title: "", url: "https://http.cat/497" },
  { status_code: 498, title: "", url: "https://http.cat/498" },
  { status_code: 499, title: "", url: "https://http.cat/499" },

  { status_code: 501, title: "", url: "https://http.cat/501" },
  { status_code: 502, title: "", url: "https://http.cat/502" },
  { status_code: 503, title: "", url: "https://http.cat/503" },
  { status_code: 504, title: "", url: "https://http.cat/504" },
  { status_code: 506, title: "", url: "https://http.cat/506" },
  { status_code: 507, title: "", url: "https://http.cat/507" },
  { status_code: 508, title: "", url: "https://http.cat/508" },
  { status_code: 509, title: "", url: "https://http.cat/509" },
  { status_code: 510, title: "", url: "https://http.cat/510" },
  { status_code: 511, title: "", url: "https://http.cat/511" },
  { status_code: 521, title: "", url: "https://http.cat/521" },
  { status_code: 522, title: "", url: "https://http.cat/522" },
  { status_code: 523, title: "", url: "https://http.cat/523" },
  { status_code: 525, title: "", url: "https://http.cat/525" },
  { status_code: 599, title: "", url: "https://http.cat/599" },
];
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
const dataUsed = cats;

const lastElement = dataUsed.length - 1;

function Display() {
  const [index, setIndex] = useState(0);
  const [url, setUrl] = useState(dataUsed[0].url);
  return (
    <div>
      <button
        type="button"
        className="btn btn-warning"
        onClick={(event) => {
          if (index === 0) {
            setIndex(lastElement);
            setUrl(dataUsed[lastElement].url);
          } else {
            setIndex((currentIndex) => currentIndex - 1);
            setUrl(dataUsed[index - 1].url);
          }
        }}
      >
        Previous
      </button>
      <button
        type="button"
        className="btn btn-danger"
        onClick={(event) => {
          const random = Math.floor(Math.random() * dataUsed.length) + 1;
          setUrl(() => dataUsed[random - 1].url);
          setIndex(() => random - 1);
        }}
      >
        Random
      </button>
      <button
        type="button"
        className="btn btn-warning"
        onClick={(event) => {
          if (index === lastElement) {
            setIndex(0);
            setUrl(dataUsed[0].url);
          } else {
            setIndex((currentIndex) => currentIndex + 1);
            setUrl(dataUsed[index + 1].url);
          }
        }}
      >
        Next
      </button>
      <br></br>
      <Image imageUrl={url} />
    </div>
  );
}

export default Display;
