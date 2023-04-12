import "./scss/Midia.scss"
import {
  FcAbout,
  FcIdea,
  FcManager,
  FcContacts,

  FcRegisteredTrademark,
} from "react-icons/fc";
const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {[
      { name: "home", icon: <FcRegisteredTrademark size={47} /> },
      { name: "sobre", icon: <FcAbout size={47} /> },
      { name: "projetos", icon: <FcIdea size={47} /> },
      { name: "experiencias", icon: <FcManager size={47} /> },
      { name: "contato", icon: <FcContacts size={47} /> },
    ].map((item, index) => (
      <a
        href={`#${item.name}`}
        key={item.name + index}
        className="app__navigation-dot"
        style={{
          backgroundColor: active === item.name ? "#0ef51e" : "",
          width: 62,
          height: 62,
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          marginTop: 16,
          marginLeft: 34,
        }}>
        <div className="icones">
          <p className="teste3">{item.icon}</p>
        </div>
      </a>
    ))}
  </div>
);

export default NavigationDots;
