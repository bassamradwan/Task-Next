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
export default function Column1() {
  const icons = [
    { index: 0, name: faEnvelope, value: "info@myvverse.com" },
    { index: 0, name: faPhone, value: "+971 52 7956665" },
    {
      index: 0,
      name: faLocationDot,
      value: "Virtually Managed From UAE-Dubai",
    },
  ];
  const iconSocial = [
    { index: 0, name: faLinkedinIn },
    { index: 1, name: faFacebookF },
    { index: 2, name: faXTwitter },
    { index: 3, name: faYoutube },
    { index: 4, name: faTiktok },
    { index: 5, name: faSnapchat },
    { index: 5, name: faPinterest },
  ];
  return (
    <div>
      <div className="m-2">
        <img src="./Logo-White-MD.svg" alt="" className="my-2" />
        <p>
          Proudly, The 1st of It's Kind Worldwide, AIO Digital Platform For The
          Global Community Of The Veterinary Industry
        </p>
      </div>
      <hr className="border border-white  opacity-100" />
      {/* contact Us */}
      <h6>Let's Talk</h6>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {icons.map((icon) => (
          <li key={icon.index}>
            <FontAwesomeIcon icon={icon.name} />
            <span className="mx-2">{icon.value}</span>
          </li>
        ))}
      </ul>

      <hr className="border border-white  opacity-100" />
      {/* IconSocial */}
      <ul
        className="d-flex justify-content-between"
        style={{ listStyle: "none", padding: 0 }}
      >
        {iconSocial.map((icon) => (
          <li key={icon.index} className="">
            <FontAwesomeIcon icon={icon.name} size="lg" />
          </li>
        ))}
      </ul>
      <hr className="border border-white  opacity-100" />
      <h5>coming soon</h5>
      <img src="./apple.svg" alt="" className={styles.store} />
      <img src="./google.svg" alt="" className={styles.store} />
    </div>
  );
}
