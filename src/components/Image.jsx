function Image(props) {
  const imgUrl = props.imageUrl;
  return <img src={imgUrl} alt="Image" />;
}

export default Image;
