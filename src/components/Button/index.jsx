import { Button } from "../Button/styles.js";
import propTypes from "prop-types";

function DefaultButton({ children, theme, ...rest }) {
    
    return (
        <Button {...rest} theme={theme}>{children}</Button>
    )
}

DefaultButton.propTypes = {
    children: propTypes.node.isRequired,
    theme: propTypes.string
}

export default DefaultButton 