import styles from "@/components/footer/foorer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMessage,
  faHandPointRight,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";
import {
  faPhone,
  faLocationDot,
  faFacebook,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faFacebookF,
  faXTwitter,
  faYoutube,
  faSnapchat,
  faTiktok,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import FooterMenuIcon from "./components/footerMenu";
import iconsTheStory from "./iconLest";
import Column1 from "./components/column-1";
import Column2 from "./components/column-2";
import Column3 from "./components/column-3";
import Column4 from "./components/column-4";
import Column5 from "./components/column-5";
export default function Footer() {
 

  return (
    <>
      <div className={`row ${styles.container}`}>
        <div className="m-2 col-3">
          <Column1 />
        </div>
        <div className="col-2">
          <Column2 />
        </div>
        <div className="col-2">
          <Column3 />
        </div>
        <div className="col-2">
          <Column4 />
        </div>
        <div className="col-2">
          <Column5 />
        </div>
      </div>
    </>
  );
}
