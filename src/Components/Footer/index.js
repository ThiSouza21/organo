import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <section className="footerContent">
        <img src="/assets/images/fundo.png" alt="" />
        <div>
          <img src="/assets/images/fb.png" alt="Logo Facebook" />
          <img src="/assets/images/tw.png" alt="Logo Twiter" />
          <img src="/assets/images/ig.png" alt="Logo Instagram" />
        </div>
        <img src="/assets/images/logo.png" alt="Logo Organo" />
        <p>Desenvolvido por ThiSouza</p>
      </section>
    </div>
  );
};

export default Footer;
