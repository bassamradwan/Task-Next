import styles from "@/components/ProfileInfo/profile.module.css";

export default function Table() {
  const icons = [
    { index: 0, icon: "./Group1.svg", title: "bbb", value: "25" },
    { index: 1, icon: "./Group1.svg", title: "", value: "27" },
    { index: 2, icon: "./Group1.svg", title: "", value: " 13.9" },
    { index: 3, icon: "./Group1.svg", title: "", value: "14" },
    { index: 4, icon: "./Group1.svg", title: "", value: "25" },
    { index: 5, icon: "./Group1.svg", title: "", value: "27" },
  ];
  const icons2 = [
    { index: 6, icon: "./Group1.svg", title: "", value: " 13.9" },
    { index: 7, icon: "./Group1.svg", title: "", value: "14" },
    { index: 8, icon: "./Group1.svg", title: "", value: "25" },
    { index: 9, icon: "./Group1.svg", title: "", value: "27" },
    { index: 10, icon: "./Group1.svg", title: "", value: " 13.9" },
    { index: 11, icon: "./Group1.svg", title: "", value: "14" },
  ];
  return (
    // <div className="d-flex h-auto ">
    //   {icons.map((icon) => (
    //     <div className={styles.borderColors} key={icon.index}>
    //       <div className={styles.containerTable}>
    //         <img src={icon.icon} className="w-25" />
    //         </div>
    //         <hr className={styles.hrColors} />
    //         <span className={styles.containerTable}>{icon.value}</span>
    //         <hr className={styles.hrColors} />
    //         <span className={styles.containerTable}>{icon.title}</span>

    //     </div>
    //   ))}
    // </div>
    <div className={styles.containerT}>
      {icons.map((icon) => (
        <div className={styles.box}>
          <div className={styles.topSection}>
            <img src={icon.icon} className="w-25" />
            <hr className={styles.hrColors} />
          </div>
          <div className={styles.middleSection}>{icon.value}
          <hr className={styles.hrColors} />
          </div>
          <div className={styles.bottomSection}>{icon.title}
          </div>
        </div>
      ))}
    </div>
  );
}
