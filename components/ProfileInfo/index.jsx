import styles from "@/components/ProfileInfo/profile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMessage,
  faThumbsUp,
  faShareSquare,
} from "@fortawesome/free-regular-svg-icons";
import {
  faShareNodes,
  faLocationDot,
  faSpinner,
  fa,
} from "@fortawesome/free-solid-svg-icons";
import Table from "./components/table";
import iconLest from "@/components/footer/iconLest";
export default function ProfileInfo() {
  const imgs = [
    { index: 0, name: "./icon-points.svg", value: "25K" },
    { index: 1, name: "./likes.svg", value: "27K" },
    { index: 2, name: "./Group4.svg", value: " 13.9K" },
    { index: 3, name: "./Group5.svg", value: "14.K" },
  ];
  const icons = iconLest.iconsTheAgency;
  const iconsLeft = iconLest.iconsTheMembers;
  const iconsRight = iconLest.iconsTheOpportunity;
  return (
    <>
      <div className={styles.container}>
        <div className="card">
          <div className="row">
            <div className="col-3 p-0">
              left
              <img src="./Dr. Ahmed Hassan.svg" alt="" />
            </div>
            <div className="col-9">
              <div>
                <h1>Dr.Ahmed Hassan</h1>
                <p>Senior Veterinary Consultant at Animalz Story Zoo</p>
                <div className="d-flex">
                <ul className=" nav">
                  {imgs.map((icon) => (
                    <li key={icon.index} className={`mx-2 `}>
                      <img src={icon.name} alt="" />
                      <span className="mx-1">{icon.value}</span>
                    </li>
                  ))}
                </ul>
                <div class={styles.verticalLine}></div>
                <botton className={`mx-2 btn  ${styles.button}`}>
                     <img src="./Vector.svg" alt="" className="mx-1" />
                     Featured
                   </botton>
                </div>
               
              </div>
              <hr />
              <div className="row">
              <div className="col-9">
                <Table/>
                <Table/>
              </div>
            
              <div className="col-3">
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {icons.map((icon)=>(
                        <li key={icon.i}>
                            <FontAwesomeIcon icon={icon.nameIcon}  className="mx-1" />
                            {icon.value}
                        </li>
                    ))}
                </ul>
              </div>
              </div>
            
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
          <div>
            <ul className={`nav `}>
                {iconsLeft.map((icon)=>(
                    <li key={icon.i} className={styles.iconLeft}>
                        <FontAwesomeIcon icon={icon.nameIcon}  className="mx-1" />
                    </li>
                ))}
            </ul>
            </div>
            <div>
            <ul className={`nav `}>
                {iconsRight.map((icon)=>(
                    <li key={icon.i} className={styles.iconRight}>
                        <FontAwesomeIcon icon={icon.nameIcon}  className="mx-1" />
                    </li>
                ))}
            </ul>
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-center">
            <button className={` btn    ${styles.buttonEdit}`}>
            <img src="./Vector.svg" alt="" className="mx-1" />
                Edit</button>
            <button className={`btn ${styles.buttonEdit}`}>
            <img src="./Vector.svg" alt="" className="mx-1 " />
                Share</button>
          </div>
        </div>
      </div>
    </>
    // <div className={styles.container}>
    //   <div className={`${styles.CardInfo} card`}>
    //     <div className="d-flex">
    //       <div className="imgInfo d-flex">
    //         <img src="./Dr. Ahmed Hassan.svg" alt="" />
    //       </div>
    //       <div className="titleInfo">
    //         <div>
    //           <h1>Dr.Ahmed Hassan</h1>
    //           <p>Senior Veterinary Consultant at Animalz Story Zoo</p>
    //           <div className="icons d-flex">
    //             <ul className=" nav">
    //               {imgs.map((icon) => (
    //                 <li key={icon.index} className={`mx-2 `}>
    //                   <img src={icon.name} alt="" />
    //                   <span className="mx-1">{icon.value}</span>
    //                 </li>
    //               ))}
    //             </ul>
    //             <div class={styles.verticalLine}></div>
    //             <div>
    //               <botton className={`mx-2 btn  ${styles.button}`}>
    //                 <img src="./Vector.svg" alt="" className="mx-1" />
    //                 Featured
    //               </botton>
    //             </div>
    //           </div>
    //         </div>
    //         <hr />
    //         <div className="">
    //           <div className="row" >
    //             <div className="col-8">
    //               <Table />
    //               <Table />
    //             </div>
    //             <div class={styles.verticalLine}></div>
    //             <div className="col-3">
    //             <div>fkf</div>
    //               {/* {icons.map((icon) => (
    //               <div className={styles.borderColors} key={icon.index}>
    //                 <img src={icon.icon} />
    //                 <hr className={styles.hrColors} />
    //                 <span>{icon.value}</span>
    //                 <hr className={styles.hrColors} />
    //                 <span>{icon.title}</span>
    //               </div>
    //             ))} */}
    //             </div>

    //           </div>

    //         </div>
    //       </div>
    //     </div>
    //     <div>2</div>
    //     <div>3</div>
    //   </div>
    // </div>
  );
}
