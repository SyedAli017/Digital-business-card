const Footer = () => {
  // prettier-ignore
  const socials = [
    { icon: "fa-square-twitter", link: "https://twitter.com/Sydali017?t=tAXGer7188M3Mlu0RPRv7A&s=08", },
    { icon: "fa-square-facebook", link: "#", },
    { icon: "fa-square-instagram", link: "https://instagram.com/sydali017?igshid=ZDdkNTZiNTM=", },
    { icon: "fa-linkedin", link: "https://www.linkedin.com/in/syed-ali-67a161226", },
    { icon: "fa-square-github", link: "https://github.com/SyedAli017", },
  ];

  return (
    <footer className="footer">
      {socials.map(({ icon, link }) => (
        <a href={link}>
          <i class={`fa-brands ${icon}`}></i>
        </a>
      ))}
    </footer>
  );
};

export default Footer;
