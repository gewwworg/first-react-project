import styles from './UserInfo.module.css';

import { Link } from "react-router-dom"

import ava from '../../img/ava.png'

function UserInfo() {
  return (
    <div className={styles.UserInfo}>
        <div>
        <Link className={styles.UserName} to='/'>GEVORG GEVORGYAN</Link>
            <div className={styles.UnderName}>
              <div className={styles.UserNickname}>@gaiko</div>
              <Link className={styles.UserNickname} to='/create'>CREATE</Link>
            </div>
        </div>
        <img src={ava} className={styles.UserAvatar} alt="" />
    </div>
  );
}

export default UserInfo;
