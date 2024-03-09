import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from '../iconLest'
export default function Column3() {
    const iconsTheVs =icons.iconsTheVs

  return (
    <div>
           <ul style={{ listStyle: "none", padding: 0 }}>
            <h5>The Vs</h5>
          {iconsTheVs.map((icon) => (
            <li key={icon.i} >
              <FontAwesomeIcon icon={icon.nameIcon}/>
              <span  className="mx-1">{icon.value}</span>
            </li>
            ))}
          </ul>
    </div>
  )
}
