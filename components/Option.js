import styles from "./Option.module.scss";
import Button from "../components/Button";
export default function Option(props) {
    const {
        header,
        pledge,
        info,
        left,
        name,
        color,
        opacity,
        onSingle
    } = props;

    return (
        <div className={`${styles.option_wrap} ${styles[opacity]}`}>
            <div className={styles.option}>
                <h3>{header}</h3>
                <p className={styles.pledge}>{pledge}</p>
            </div>
            <p className={styles.info}>{info}</p>

            <div className={styles.option}>
                <div className={styles.wrap_left}>
                    <h3 className={styles.number}>{left} </h3>
                    <span> left</span>
                </div>

                <Button name={name} color={color} onPick={() => onSingle()} />
            </div>
        </div>
    );
}
