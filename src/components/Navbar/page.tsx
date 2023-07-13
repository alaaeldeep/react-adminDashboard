import styles from "./styles.module.scss";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <img src="logo.svg" />
                <span>myadmin</span>
            </div>
            <div className={styles.icons}>
                <img src="search.svg" alt="" className="icon" />
                <img src="app.svg" alt="" className="icon" />
                <img src="expand.svg" alt="" className="icon" />
                <div className={styles.notification}>
                    <img src="notifications.svg" alt="" />
                    <span>1</span>
                </div>
                <div className={styles.user}>
                    <img
                        src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                        alt=""
                    />
                    <span>alaa</span>
                </div>
                <img src="settings.svg" alt="" className="icon" />
            </div>
        </div>
    );
};

export default Navbar;
