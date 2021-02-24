import styles from "./Button.module.scss";

export default function Button(props) {
    const { name, color, onPick } = props;

    return (
        <button
            className={`${styles.button} ${styles[color]}`}
            type="button"
            name="button"
            onClick={() => onPick()}
        >
            {name}
        </button>
    );
}
