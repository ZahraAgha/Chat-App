// Images
import LogoImage from "../../images/Logo.png";

const Logo = () => {
  return (
    <div className="h-15 w-15">
      <img src={LogoImage} alt="Logo" className="w-full h-full" />
    </div>
  );
};

export default Logo;
