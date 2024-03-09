import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";


export default function FooterMenuIcon(props) {
  return (
    <div>
      <h5>{props.title}</h5>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li className="nav-item ">
          <Link href="/contact" passHref>
            <div>
              <FontAwesomeIcon icon={props.nameIcon}  />
            <span className="mx-1"> {props.value}</span> 
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
