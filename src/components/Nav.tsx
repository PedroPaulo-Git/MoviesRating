import { Link,useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from '../styles/navbar/navbar.module.css';
import { BiSearchAlt2 } from 'react-icons/bi';
import Icon from '../img/icon.png';

function Nav() {

    const [search, setSearch] = useState('')
    const navigate = useNavigate();
    const handleSubmit = (e:any)=>{
        e.preventDefault();
        console.log(search)
        if(!search) return
        navigate(`/search?q=${search}`)
        setSearch("")

    }

    const [isactive, setisactive] = useState(true)
    const isactiveclick = () => {
        setisactive(!isactive)
    }
 
    return (
        <div>
            <div className={styles.containerNav}>
                <div className={styles.containerLink}>

                    <Link className={styles.LinkIMG} to={'/'}> <img className={styles.IMG} src={Icon} alt="" /><p>Movies</p></Link>


                </div>
                <div className={styles.containerControll_link}>
                    <div className={styles.containerControll_link_uteis}>
                        <Link to={'/'}>Serviços</Link>
                        <Link to={'/'}>Sobre</Link>
                    </div>
                    <form className={`${styles.searchcontainer} ${styles.searchcontainer_active}${isactive ? '_active' : ''}`}>
                        <div className={styles.searchinput}>
                        <input type="text"
                         placeholder='Procure pelo filme' 
                         onChange={(e) =>{setSearch(e.target.value)}}
                        value = {search}
                       />
                        </div>
                        <div className={styles.searchbutton} onClick={isactiveclick}>
                            {!isactive ? (
                                <button type='submit' className={styles.searchbutton_actived} onClick={handleSubmit}><BiSearchAlt2 /></button>
                            ) : (
                                <span className={styles.searchbutton} ><BiSearchAlt2 /></span>
                            )

                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Nav;