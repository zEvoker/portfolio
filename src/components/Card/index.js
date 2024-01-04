import { Link } from 'react-router-dom'
import './index2.scss'

export const Card = ({ title, desc, imgUrl, lnk }) => {
    return (
        <Link className="proj-imgbx" to={lnk} target='_blank'>
            <div className="imgBx">
                <img src={imgUrl} alt="pic" />
            </div>
            <div className="descs">
                <h2>{title}<br /><span>{desc}</span></h2>
            </div>
        </Link>
    )
}