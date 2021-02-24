import styles from "./Backe.module.scss";

export default function Button(props) {
    const { number, detail } = props;
    return (
        <div className={styles.wrap}>
            <p className={styles.number}>{number}</p>
            <p>{detail}</p>
        </div>
    );
}
