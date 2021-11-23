import classes from "./Card.module.css";
import {useContext} from "react";
import CardContext from "../../store/cart-context";

const Card = props => {


    return (
        <div className={classes.card}>
            {props.children}
        </div>
    )
};

export default Card;
