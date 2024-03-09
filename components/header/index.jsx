import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faComments,faHeart,faBell } from '@fortawesome/free-regular-svg-icons';
import { faPlus,faSearch,faCartShopping} from '@fortawesome/free-solid-svg-icons';
import style from '@/components/header/header.module.css'
export default function Header() {
    const icons2=[{index :0,icon:faSearch,value:null},
        {index :1,icon:faComments,value:"null"},
        {index :2,icon:faBell,value:"null"}]

    const icons=[{index :0 ,icon:faSearch,value:null}]
  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-center justify-content-between p-3">
          <div className="col-md-4">
            <Link href="/" passHref>
              <span className="navbar-brand"><img src="./Group.svg" alt="logo" /></span>
            </Link>
          </div>
          <div className="col-md-8">
            <ul className="nav justify-content-end">
              {/* <li className="nav-item mx-2">
                <Link href="/" passHref >
                  <span className={style.myIcon}><FontAwesomeIcon icon={faSearch} className={style.iconWhite} /></span>
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link href="/contact" passHref>
                  <span className={style.myIcon}><FontAwesomeIcon icon={faPlus} className={style.iconWhite} /></span>
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link href="/about" passHref>
                  <span className={style.myIcon}><FontAwesomeIcon icon={faBell} className={style.iconWhite}/></span>
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link href="/" passHref >
                  <span className={style.myIcon}><FontAwesomeIcon icon={faComments} className={style.iconWhite}/></span>
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link href="/contact" passHref>
                  <span className={style.myIcon}><FontAwesomeIcon icon={faHeart} className={style.iconWhite}/></span>
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link href="/about" passHref>
                  <span className={style.myIcon}><FontAwesomeIcon icon={faCartShopping} className={style.iconWhite}/></span>
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link href="/" passHref >
                  <span className={style.myIcon}><FontAwesomeIcon icon={faMessage} className={style.iconWhite}/></span>
                </Link>
              </li> */}
             
              {icons2.map((icon)=>(
                icon.value === null ? <li className="nav-item mx-4" key={icon.index}>
                <Link href="/contact" passHref>
                  <span className={style.myIcon}><FontAwesomeIcon icon={icon.icon} className={style.iconWhite} /></span>
                </Link>
              </li>:<li className="nav-item mx-2" key={icon.index} style={{position:'relative'}}>
                <Link href="/contact" passHref>
                  <span  className={style.myIcon}><FontAwesomeIcon icon={icon.icon} className={style.iconWhite} /></span>
                  <span className={style.myPosion} >1 en</span>
                </Link>
              </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>

  )
}
