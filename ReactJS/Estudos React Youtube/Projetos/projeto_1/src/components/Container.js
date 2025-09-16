import styles from "./Container.module.css";

function Container(props) {
  return (
    <div className={`${styles.containerStyle} ${styles[props.customClass]}`}>
      {props.children}
    </div>
  );
}

export default Container;
