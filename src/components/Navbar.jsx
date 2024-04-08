import "./navbar.css";
import Link from "./Link";

function Navbar() {
  const x = 81;
  const pippo = "cane";

  return (
    <div
      className={` rounded-lg w-72 h-72 ${
        x < 10 ? "rotate-45 bg-red-500" : "bg-sky-500 rotate-90"
      } `}
    >
      <ul>
        <li>
          {" "}
          <Link>POBA {pippo}</Link>
        </li>
        <li>ciao</li> <li>ciao</li> <li>ciao</li>
      </ul>
    </div>
  );
}

export default Navbar;
