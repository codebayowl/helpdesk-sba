import React from 'react';
import "./MsgBlock.scss";

const MsgBlock = (props) => {

    let styleName = 'msgInfo ';
    let msgIcon = false;
    let svgImg;

    function setCssClass () {        
        switch (props.type) {
            case 'danger': 
                styleName += 'danger';
                msgIcon = true;
                svgImg = <span>danger</span>;
                break;
            case 'info': 
                styleName += 'info';
                msgIcon = true;
                svgImg = <span>info</span>;
                break;
            case 'attention': 
                styleName += 'attention';
                msgIcon = true;
                svgImg = <span>attention</span>;
                break;
            case 'success': 
                styleName += 'success';
                msgIcon = true;
                svgImg = <span>success</span>;
                break;
            case 'disabled': 
                styleName += 'disabled';                                
                break;
            default:
                styleName += 'primary';                
                break;
        }        
    }

    return (        
        <div className={"msgBlock"}>
            { setCssClass() }
            { msgIcon === true ? <div className={"msgIcon"}>{svgImg}</div> : <></> }             
            <div className={styleName}>
                <h4>Heading</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error odit, tenetur provident rem unde laborum voluptatem quaerat qui? Sapiente, est.</p>
            </div>            
        </div>
    );
};

export default MsgBlock;