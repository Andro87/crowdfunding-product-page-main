import styles from "./Pledge.module.scss";
import Button from "./Button";
import { useRef } from "react";
export default function Pledge(props) {
    const { placeholder, onChoose } = props;

    const number = useRef();

    return (
        <div className={styles.pledge_wrap}>
            <div className={styles.hor_line}></div>
            <div className={styles.wrap}>
                <p> Enter your pledge</p>

                <div className={styles.button_wrap}>
                    <form className={styles.money_form}>
                        <span>$</span>
                        <input
                            type="number"
                            title="money"
                            className={styles.money}
                            placeholder={placeholder}
                            ref={number}
                        />
                    </form>
                    <Button
                        name="Continue"
                        color="green"
                        onPick={() => onChoose(number.current.value)}
                    />
                </div>
            </div>
        </div>
    );
}
