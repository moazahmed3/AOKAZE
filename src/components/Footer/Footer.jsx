import logo from "../../assets/logo.png";
export default function Footer() {
  return (
    <footer className=" py-10 border-t border-secondary/10">
      <div className="container flex items-center justify-between flex-col lg:flex-row gap-5 ">
        <a href="#">
          {" "}
          <img src={logo} alt="logo" />
        </a>
        <p className="text-caption/80 text-base">
          {" "}
          © 2026 Aokaze All rights served{" "}
        </p>
      </div>
    </footer>
  );
}
