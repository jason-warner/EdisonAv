import Navbar from '../components/Navbar/Navbar';
import { useState } from 'react';
import styles from '../styles/pages/support.module.css';
const Support = () => {
    const [buttonClicked, buttonIs] = useState(false);
    return (
        <div>
            <Navbar
                context={null}
                audio={null}
            />
            <main className={styles.navMargin}>
                <h1>Support</h1>
                <button onClick={() => buttonIs(!buttonClicked)}>
                    Message
                </button>
                {buttonClicked && <h1>Coming soon!</h1>}
            </main>

        </div>
    );
}

export default Support;