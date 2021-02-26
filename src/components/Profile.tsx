import { setLazyProp } from 'next/dist/next-server/server/api-utils'
import styles from '../styles/components/Profile.module.css'

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-1/s200x200/120955204_1025819667840696_4233298559856068897_n.jpg?_nc_cat=105&ccb=3&_nc_sid=7206a8&_nc_ohc=ltLa7omTFxUAX_zJPdY&_nc_ht=scontent-gru2-2.xx&tp=7&oh=27a1fa3ec25d602cfc903ebcdc237a1a&oe=605D4D9E" alt=""/>
            <div>
                <strong>Guilherme Silva</strong>
                <p>
                    <img src="icons/level.svg" alt=""/>
                    Level 1
                </p>
            </div>
        </div>

    )
}