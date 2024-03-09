import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from '../iconLest'

export default function Column5() {
    const iconsTheMembers =icons.iconsTheMembers
  return (
 <div>
        <ul style={{ listStyle: "none", padding: 0 }}>
            <h5>The Vs</h5>
          {iconsTheMembers.map((icon) => (
            <li key={icon.i} >
              <FontAwesomeIcon icon={icon.nameIcon}/>
              <span  className="mx-1">{icon.value}</span>
            </li>
            ))}
          </ul>
 </div>
  )
}
