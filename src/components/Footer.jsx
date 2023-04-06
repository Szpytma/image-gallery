function Footer() {
  const paw = "https://github.com/Szpytma/";
  const ben = "https://github.com/BGS89";
  const copyright = `Create by <a href=${paw}>Paw</a> and <a href=${ben}>Ben</a> ® `;
  // TODO change it use new Date
  let year = new Date().getFullYear();

  return (
    <footer>
      Created by{" "}
      <a href={paw} target="_blank" rel="noreferrer">
        Paw
      </a>{" "}
      and{" "}
      <a href={ben} target="_blank" rel="noreferrer">
        Ben
      </a>{" "}
      ® {year}
      <br />
      Images by Tomomi Imura (
      <a href="https://twitter.com/girlie_mac" target="_blank" rel="noreferrer">
        @girlie_mac
      </a>{" "}
      )
    </footer>
  );
}

export default Footer;
