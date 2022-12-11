import PropTypes from "prop-types";
import BtnStyled from "./Button.module.css";

function Btn({text}){
    return <button className={BtnStyled.btn1} >{text}</button>
}
Btn.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Btn;