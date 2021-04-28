import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <h3 className="title-footer">LAZY<span>NIGHT</span></h3>
      <hr />
      <div>
        <p>&copy;{new Date().getFullYear()} LazyNight | All rights reserved</p>
      </div>
    </div>
  );
};
export default Footer;
