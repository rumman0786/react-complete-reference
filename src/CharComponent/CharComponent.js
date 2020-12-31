import React from 'react' 

const CharComponent = (props) => {
    const jsxStyle = {
        display: 'inline-block',
        padding: '16px',
        textalign: 'center',
        margin:'16px',
        border: '1px solid black'
    };    
    
    return (
        <div>
            <p style={jsxStyle} onClick={props.clickCallBack}>{props.char}</p>
        </div>
    );
};

export default CharComponent;