import PropTypes from "prop-types";

export const Button = ({text, color, onClick}) => {

    return (
        <button className='btn' style={{backgroundColor: color}}
            onClick={onClick}
        >{text}</button>
    )
}

Button.defaultProps = {
    color: 'blue',
    text: 'Hello',
    onClick: () => {
        alert('wassup');
    }
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
}