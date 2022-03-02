import Star from "./Star";
import './Stars.css'
import PropTypes from "prop-types";

function Stars({count}) {
    if (!count || count < 1 || count > 5) {
        return null;
    }

    const stars = Array(count).fill(null).map((_, index) => <Star key={index}/>);

    return (
        <ul className="card-body-stars u-clearfix">{stars}</ul>
    )
}

Stars.propTypes = {
    count: PropTypes.number,
}

export default Stars;
