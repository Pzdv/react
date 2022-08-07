import React, { Component } from 'react'
import classes from './CustomInput.module.css';

export class CustomInput extends Component {
	render(props) {
		return (

			<input className={classes.CustomInput} {...props} />

		)
	}
}