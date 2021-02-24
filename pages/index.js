import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.scss";
import Button from "../components/Button";
import Backe from "../components/Backe";
import Option from "../components/Option";
import Choose from "../components/Choose";
import Pledge from "../components/Pledge";

export default function Home() {
    const [open, setOpen] = useState(false);
    const [bookmark, setBookmark] = useState(false);
    const [back, setBack] = useState(false);
    const [thank, setThank] = useState(false);
    const [total, setTotal] = useState(89914);
    const [backers, setBackers] = useState(5007);
    const add = (a, b) => a + b;
    const target = 100000;
    return (
        <div className={styles.main_wrap}>
            <Head>
                <title>Frontend Mentor | Crowdfunding product page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div
                className={`${styles.main} ${back ? styles.background : null}`}
            >
                <div className={styles.header}>
                    <img src="/images/logo.svg" alt="logo" />
                    <button
                        className={styles.hamburger}
                        type="button"
                        title="button"
                        onClick={() => setOpen(!open)}
                    >
                        {!open ? (
                            <svg
                                width="16"
                                height="15"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g fill="#FFF" fill-rule="evenodd">
                                    <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
                                </g>
                            </svg>
                        ) : (
                            <svg
                                width="14"
                                height="15"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g fill="#FFF" fill-rule="evenodd">
                                    <path d="M2.404.782l11.314 11.314-2.122 2.122L.282 2.904z" />
                                    <path d="M.282 12.096L11.596.782l2.122 2.122L2.404 14.218z" />
                                </g>
                            </svg>
                        )}
                    </button>

                    <div
                        className={`${styles.menu_desktop} ${
                            open ? styles.menu_mobile : null
                        }`}
                    >
                        <a href="#">About</a>
                        <hr className={styles.line}></hr>
                        <a href="#"> Discover</a>
                        <hr className={styles.line}></hr>
                        <a href="#">Get Started</a>
                        <hr className={styles.line}></hr>
                    </div>
                </div>

                <div
                    className={`${styles.container} ${
                        open ? styles.background_mobile : null
                    }`}
                >
                    <div className={styles.box}>
                        <img
                            src="/images/logo-mastercraft.svg"
                            alt="logo"
                            className={styles.logo_master}
                        />
                        <h1>Mastercraft Bamboo Monitor Riser</h1>
                        <p>
                            A beautiful & handcrafted monitor stand to reduce
                            neck and eye strain.
                        </p>

                        <div className={styles.button_wrap}>
                            <Button
                                name="Back this project"
                                color="green"
                                onPick={() => setBack(!back)}
                            />

                            <div className={styles.bookmark_wrap}>
                                <button
                                    type="button"
                                    title="button"
                                    className={`${styles.bookmark} ${
                                        bookmark ? styles.marked : null
                                    }`}
                                    onClick={() => setBookmark(!bookmark)}
                                >
                                    <svg
                                        width="56"
                                        height="56"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g fill="none" fill-rule="evenodd">
                                            <circle
                                                fill="#2F2F2F"
                                                cx="28"
                                                cy="28"
                                                r="28"
                                            />
                                            <path
                                                fill="#B1B1B1"
                                                d="M23 19v18l5-5.058L33 37V19z"
                                            />
                                        </g>
                                    </svg>
                                </button>

                                <button
                                    className={`${styles.button_bookmark} ${
                                        bookmark ? styles.marked : null
                                    }	`}
                                    type="button"
                                    title="button"
                                >
                                    {bookmark ? "Bookmarked" : "Bookmark"}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.backed_box}>
                        <div className={styles.backed_wrap}>
                            <Backe
                                number={new Intl.NumberFormat(
                                    "en-IN",

                                    {
                                        style: "currency",
                                        currency: "USD",
                                        maximumSignificantDigits: 5
                                    }
                                ).format(total)}
                                detail="of $100,000 backed"
                            />
                            <div className={styles.vertical_line}></div>
                            <Backe
                                number={new Intl.NumberFormat("en-IN").format(
                                    backers
                                )}
                                detail=" total backers"
                            />
                            <div className={styles.vertical_line}></div>
                            <Backe number="56" detail="days left" />
                        </div>

                        <div className={styles.wrap_bar}>
                            <div className={styles.container_bar}>
                                <div
                                    className={styles.progress_bar}
                                    style={{
                                        width:
                                            Math.min(
                                                (total / target) * 100,
                                                100
                                            ) + "%"
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.container_info}>
                        <h2>About this project</h2>

                        <p>
                            The Mastercraft Bamboo Monitor Riser is a sturdy and
                            stylish platform that elevates your screen to a more
                            comfortable viewing height. Placing your monitor at
                            eye level has the potential to improve your posture
                            and make you more comfortable while at work, helping
                            you stay focused on the task at hand.
                            <br />
                            <br />
                            Featuring artisan craftsmanship, the simplicity of
                            design creates extra desk space below your computer
                            to allow notepads, pens, and USB sticks to be stored
                            under the stand.
                        </p>

                        <Option
                            header="Bamboo Stand"
                            pledge="Pledge $25 or more"
                            info="
                            You get an ergonomic stand made of natural bamboo.
                            You've helped us launch our promotional campaign,
                            and you’ll be added to a special Backer member list.
                        "
                            left="101"
                            name="Select Reward"
                            color="green"
                            onSingle={() => setBack(!back)}
                        />

                        <Option
                            header="Black Edition Stand"
                            pledge="Pledge $75 or more"
                            info="
                        You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
                        member list. Shipping is included.
                        "
                            left="64"
                            name="Select Reward"
                            color="green"
                            onSingle={() => setBack(!back)}
                        />

                        <Option
                            header=" Mahogany Special Edition"
                            pledge="Pledge $200 or more"
                            info="
                        You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
  to our Backer member list. Shipping is included.
                        "
                            left="0"
                            name="  Out of Stock"
                            color="grey"
                            opacity="light"
                            onSingle={() => setBack(!back)}
                        />
                    </div>
                </div>
            </div>
            {back ? (
                <div className={thank ? styles.diplay : styles.back_project}>
                    <button
                        type="button"
                        title="button"
                        className={styles.button_modal}
                        onClick={() => setBack(false)}
                    >
                        <svg
                            width="15"
                            height="15"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
                                fill="#000"
                                fill-rule="evenodd"
                                opacity=".4"
                            />
                        </svg>
                    </button>
                    <h3> Back this project</h3>

                    <p>
                        Want to support us in bringing Mastercraft Bamboo
                        Monitor Riser out in the world?
                    </p>
                    <div className={styles.option_wrap}>
                        <Choose
                            title="  Pledge with no reward"
                            info=" Choose to support us without a reward if you simply believe in our project. As a backer, 
                            you will be signed up to receive product updates via email."
                        />
                        <Choose
                            title="Bamboo Stand"
                            info=" You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
                        you’ll be added to a special Backer member list."
                            pledge="  Pledge $25 or more"
                            number="101"
                            left="left"
                            component={
                                <Pledge
                                    placeholder="25"
                                    onChoose={value => {
                                        setTotal(total =>
                                            add(parseInt(value), total)
                                        ),
                                            setBackers(more => more + 1),
                                            setThank(!thank);
                                    }}
                                />
                            }
                        />
                        <Choose
                            title="Black Edition Stand"
                            info="  You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
                            member list. Shipping is included."
                            pledge="   Pledge $75 or more"
                            number="64"
                            left="left"
                            component={
                                <Pledge
                                    placeholder="75"
                                    onChoose={value => {
                                        setTotal(total =>
                                            add(parseInt(value), total)
                                        ),
                                            setBackers(more => more + 1),
                                            setThank(!thank);
                                    }}
                                />
                            }
                        />

                        <Choose
                            opacity="light"
                            title="Mahogany Special Edition"
                            info="  You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
                            to our Backer member list. Shipping is included."
                            pledge="   Pledge $200 or more"
                            number="0"
                            left="left"
                            component={
                                <Pledge
                                    placeholder="200"
                                    onChoose={value => {
                                        setTotal(total =>
                                            add(parseInt(value), total)
                                        ),
                                            setBackers(more => more + 1),
                                            setThank(!thank);
                                    }}
                                />
                            }
                        />
                    </div>
                </div>
            ) : null}
            {thank ? (
                <div className={styles.thank_box}>
                    <svg
                        width="64"
                        height="64"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g fill="none" fill-rule="evenodd">
                            <circle fill="#3CB3AB" cx="32" cy="32" r="32" />
                            <path
                                stroke="#FFF"
                                stroke-width="5"
                                d="M20 31.86L28.093 40 44 24"
                            />
                        </g>
                    </svg>
                    <h4> Thanks for your support!</h4>
                    <p>
                        Your pledge brings us one step closer to sharing
                        Mastercraft Bamboo Monitor Riser worldwide. You will get
                        an email once our campaign is completed.
                    </p>
                    <Button
                        name="Got it!"
                        color="green"
                        onPick={() => {
                            setThank(false), setBack(false);
                        }}
                    />
                </div>
            ) : null}
        </div>
    );
}
