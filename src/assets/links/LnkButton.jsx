import React from 'react';
import './LnkButton.scss';

const LnkButton = (props) => {

    function getClassName () {
        let styleName = 'button ';
        console.log(props.lnkType);
        switch (props.lnkType) {
            case 'danger': 
                styleName += 'btn-danger';
                break;
            case 'info': 
                styleName += 'btn-info';
                break;
            case 'attention': 
                styleName += 'btn-attention';
                break;
            case 'success': 
                styleName += 'btn-success';
                break;
            case 'disabled': 
                styleName += 'btn-disabled';                
                break;
            default:
                styleName += 'btn-primary';                
                break;
        }
        return styleName;
    }

    return (
        <div>
            <a href={props.lnkAddr} className={getClassName()}>{props.lnkText}</a>            
        </div>
    );
};

export default LnkButton;