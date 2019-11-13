
import React, { Component } from 'react';

class LanguageItemPage extends Component {
	
	render() {
        
        const {
            name,
            nativeName,
            code,
            id
        } = this.props.item;

		return (
            <li key={`language_${code}`}>
                <input id={`language_${code}`} type="checkbox" className="hide" />
                <label htmlFor={`language_${code}`}><i>{code}</i><span>{name}</span><span>{nativeName}</span></label>
            </li>
		)
	}
}

export default LanguageItemPage;
