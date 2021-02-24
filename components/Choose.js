import styles from "./Choose.module.scss";
import { useState } from "react";
import Pledge from "./Pledge";

export default function Choose(props) {
    const [option, setOption] = useState(false);
    const { title, info, pledge, number, left, component, opacity } = props;
    return (
        <>
            <div
                className={`${styles.option_box} ${
                    option ? styles.border_option : null
                } ${styles[opacity]} `}
            >
                <div className={styles.wrap}>
                    <button
                        type="button"
                        name="button"
                        className={styles.option_button}
                        onClick={() => setOption(!option)}
                    >
                        {option ? <div className={styles.circle}></div> : null}
                    </button>
                    <div className={styles.box_info}>
                        <div className={styles.detail}>
                            <h4>{title}</h4>
                            <p className={styles.pledge}> {pledge} </p>
                            <p className={styles.number}>{number}</p>
                            <span>{left}</span>
                        </div>

                        <p>{info}</p>
                    </div>
                </div>
                {option ? component : null}
            </div>
        </>
    );
}
