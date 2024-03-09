import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from '../iconLest'

export default function Column4() {
    const iconsTheAssets =icons.iconsTheAssets
  return (
 <div>
        <ul style={{ listStyle: "none", padding: 0 }}>
            <h5>The Vs</h5>
          {iconsTheAssets.map((icon) => (
            <li key={icon.i} >
              <FontAwesomeIcon icon={icon.nameIcon}/>
              <span  className="mx-1">{icon.value}</span>
            </li>
            ))}
          </ul>
 </div>
  )
}
