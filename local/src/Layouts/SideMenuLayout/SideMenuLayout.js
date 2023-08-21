import SideMenu from "../../components/SideMenu/SideMenu";

const SideMenuLayout = ({ children, className, footer, style }) => {
  return (
    <>
      <SideMenu />
      <div
        className={`${className}`}
        style={style ? style : { paddingLeft: "144px", paddingTop: "55px" }}
      >
        {children}
        {footer && <div className="">{/* <Footer /> */}</div>}
      </div>
    </>
  );
};

export default SideMenuLayout;
