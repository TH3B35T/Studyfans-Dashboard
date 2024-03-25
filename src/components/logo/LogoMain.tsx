import Image from 'next/image';
import logo from '/public/assets/images/logo.png';

const LogoMain = () => {
  return <Image src={logo} alt="icon logo" width={100} />;
};

export default LogoMain;
