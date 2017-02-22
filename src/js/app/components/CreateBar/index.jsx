
import './style.scss';

import React, {PropTypes} from 'react';

const propTypes = {
    onClick: PropTypes.func.isRequired
};

function CreateBar({ onClick }){
    return(
        <a href="#" onClick={onClick} className="list-group-item create-bar-component">
            + �����µ�����
        </a>
    );
}

CreateBar.propTypes = propTypes;

export default CreateBar;

