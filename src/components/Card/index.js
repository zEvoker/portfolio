import { Link } from 'react-router-dom'
import './index.scss'

export const Card = ({ title, desc, imgUrl, lnk, longDesc, stack }) => {
    return (
        <Link className="proj-bx" to={lnk} target='_blank'>
            <div className="imgx">
                <img src={imgUrl} alt="pic" />
            </div>
            <div className="dex">
                <h2>{title}<br /><span>{desc}</span></h2>
            </div>
            <div className="descript">
                <span>{longDesc}</span>
            </div>
            <div className='stack'>
                <span>{stack}</span>
                <button>Source Code</button>
            </div>
        </Link>
    )
}