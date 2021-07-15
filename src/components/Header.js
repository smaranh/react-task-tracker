import PropTypes from "prop-types";
import { Button } from "./Button";

export const Header = ({showAdd, toggleAddTask}) => {

    return (
        <header className='header'>
            <h1>Task Tracker</h1>
            <Button text={showAdd ? 'Close' : 'Add'} 
                color={showAdd ? 'red' : 'green'}
                onClick={toggleAddTask}></Button>
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string
}