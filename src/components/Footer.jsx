function Footer() {
  const copyright = "Create by Paw and Ben ® ";
  // TODO change it use new Date
  let year = new Date().getFullYear();

  return (
    <footer>
      {copyright} {year}
    </footer>
  );
}

export default Footer;
