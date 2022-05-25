import Menu from "./Menu";
import banner from "../assets/recorte-removebg.png"

export const Layout = ({ children }) => {
  return (
    <div style={{display: "grid", gridTemplateRows: "20vh 80vh", background: "#9A3C32"}}>
            <div className="container_banner">
              <img className="banner" src={banner}  />
            </div>
      <div style={{ display: "grid", gridTemplateColumns: "20vw 70vw" }}>
        <Menu />
        <div className="container_grilla">
          {children}
        </div>
      </div>
    </div>
  );
};
