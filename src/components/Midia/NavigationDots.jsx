import "./scss/Midia.scss"
import {
  FcAbout,
  
  FcManager,
  FcContacts,
  FcElectronics,
  FcRegisteredTrademark,
} from "react-icons/fc";
const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {[
      { name: "home", icon: <FcRegisteredTrademark size={27} /> },
      { name: "sobre", icon: <FcAbout size={27} /> },
      { name: "experiencias", icon: <FcManager size={27} /> },
      { name: "projetos", icon: <FcElectronics size={27} /> },
      { name: "contato", icon: <FcContacts size={27} /> },
    ].map((item, index) => (
      <a
        href={`#${item.name}`}
        key={item.name + index}
        className="app__navigation-dot"
        style={{
          backgroundColor: active === item.name ? "#0ef51e" : "",
        }}>
        <div className="icones">
          <p className="teste3">{item.icon}</p>
        </div>
      </a>
    ))}
  </div>
);

export default NavigationDots;
