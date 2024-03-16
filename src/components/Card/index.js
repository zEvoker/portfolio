import { Link } from 'react-router-dom'
import './index.scss'

export const Card = ({ title, desc, imgUrl, lnk }) => {
    return (
        <>
            <Link className="proj-bx" to={lnk} target='_blank'>
                <div className="imgx">
                    <img src={imgUrl} alt="pic" />
                </div>
                <div className="dex">
                    <h2>{title}<br /><span>{desc}</span></h2>
                </div>
            </Link>
        </>
    )
}