import { Link } from "react-router-dom";
import { menu } from "../../data";
import styles from "./styles.module.scss";

const Menu = () => {
    return (
        <div className={styles.menu}>
            {menu.map((item) => (
                <div key={item.id} className={styles.item}>
                    <span className={styles.title}>{item.title}</span>
                    {item.listItems.map((item) => (
                        <Link
                            to={item.url}
                            className={styles.listItem}
                            key={item.id}
                        >
                            <img src={item.icon} alt="" />
                            <span className={styles.listItemTitle}>
                                {item.title}
                            </span>
                        </Link>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Menu;
