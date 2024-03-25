import Image from 'next/image';
import logo from '/public/assets/images/logo.png';

// ==============================|| LOGO ICON SVG ||============================== //

const LogoIcon = () => {
  return <Image src={logo} alt="icon logo" width={80} />;
};

export default LogoIcon;
