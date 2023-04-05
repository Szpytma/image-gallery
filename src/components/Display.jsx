import Image from "./Image";

const dataImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1680630679439-4832b7a40374?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
    src: `${__dirname}/public/3.avif`,
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
  return (
    <div>
      <Image />
    </div>
  );
}

export default Display;
