import './index.scss';
import { Link } from "react-router-dom";

export const ProjectCard = ({ title, desc, imgUrl, lnk }) => {
    return (
        <Link className="proj-imgbx" to={lnk} target='_blank'>
            <img src={imgUrl} alt="pic" />
            <div className="proj-txt">
                <h4>{title}</h4>
                <span>{desc}</span>
            </div>
        </Link>
    )
}