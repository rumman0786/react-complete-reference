import React from 'react' 

const Validation = (props) => {
    
    const validationMessage = (props.length < 5 ) ? 'Text too short' 
                            : (props.length > 10 ) ? 'Text too long'
                            : '';  
    return (
        <p>{validationMessage}</p>
    );
};

export default Validation;