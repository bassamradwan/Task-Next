import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from '../iconLest'


export default function Column2() {
    const iconsTheStory = icons.iconsTheStory;
    const iconsTheOpportunity = icons.iconsTheOpportunity;
    const iconsTheAgency = icons.iconsTheAgency;
    const iconsTheHub = icons.iconsTheHub;
  return (
    <div>
         <h5>Home</h5>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <h5>The Story</h5>
          {iconsTheStory.map((icon) => (
            <li key={icon.i} >
              <FontAwesomeIcon icon={icon.nameIcon}/>
              <span  className="mx-1">{icon.value}</span>
            </li>
            ))}
          </ul>

          <ul style={{ listStyle: "none", padding: 0 }}>
            <h5>The Opportunity</h5>
          {iconsTheOpportunity.map((icon) => (
            <li key={icon.i} >
              <FontAwesomeIcon icon={icon.nameIcon}/>
              <span  className="mx-1">{icon.value}</span>
            </li>
            ))}
          </ul>

          <ul style={{ listStyle: "none", padding: 0 }}>
            <h5>The Agency</h5>
          {iconsTheAgency.map((icon) => (
            <li key={icon.i} >
              <FontAwesomeIcon icon={icon.nameIcon}/>
              <span  className="mx-1">{icon.value}</span>
            </li>
            ))}
          </ul>
          
          <ul style={{ listStyle: "none", padding: 0 }}>
            <h5>The Hub</h5>
          {iconsTheHub.map((icon) => (
            <li key={icon.i} >
              <FontAwesomeIcon icon={icon.nameIcon}/>
              <span  className="mx-1">{icon.value}</span>
            </li>
            ))}
          </ul>
    </div>
  )
}
