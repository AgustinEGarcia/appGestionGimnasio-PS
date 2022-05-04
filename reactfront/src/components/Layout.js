import Menu from "./Menu";
import banner from "../assets/banner.png"

export const Layout = ({ children }) => {
  return (
    <div style={{display: "grid", gridTemplateRows: "10vh 90vh"}}>
            <image src={banner} style={{height: "10vh", width: "100%", border: "1px solid"}}/>
      <div style={{ display: "grid", gridTemplateColumns: "20vw 80vw" }}>
        <Menu />
        {children}
      </div>
    </div>
  );
};
