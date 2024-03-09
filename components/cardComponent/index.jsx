import styles from '@/components/cardComponent/card.module.css'

export default function CardComponent() {
  return (
    <>
      <div className="card">
        <div className="d-flex justify-content-between">
          <div className={`${styles.infoCard}`}>
            <div className="d-flex ">
              <div className="mx-2 ">
                <img src="./Dr. Ahmed Hassan.svg" alt="" width={50} />
              </div>
              <div >
                <span className="">Dr.Ahmed Hassan</span>
                <p>Senior Veterinary Consultant at Animalz Story Zoo</p>
              </div>
            </div>
            <div className={`${styles.infoCard} rounded-pill m-2 p-2`}>
              <div>
                <img src="./Dr. Ahmed Hassan.svg" alt="" width={30} />
              </div>
              <div>
                <span className="bold">Dr.Ahmed Hassan</span>
                
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-between'>
            <div><a className={styles.buttonCard} href="#">Declined</a></div>
            <div><span>10/9/77</span></div>
           <div> <ul>
                <li>
                23
                </li></ul></div>
          </div>
        </div>
        <hr />
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            optio itaque amet reiciendis exercitationem excepturi tempora totam
            iste officia. Ut et alias ullam repellendus libero nostrum dolorum,
            rem eos eveniet?
          </p>
        </div>
      </div>
    </>
  );
}
