import { Button } from "../Button/styles.js";

function DefaultButton({ children, ...rest }) {
    
    return (
        <Button {...rest}>{children}</Button>
    )
}


export default DefaultButton 