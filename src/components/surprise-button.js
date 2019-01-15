import React from 'react';

import SurpriseImage from './surprise-image';

export default function SurpriseButton(props) {
    return <button onClick={props.onClick}>Surprise!</button>;
}

