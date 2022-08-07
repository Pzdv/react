import React, { Component } from 'react'
import { CustomInput } from './UI/CustomInput'

export class PostForm extends Component {

    render() {
        return (
            <form>
                <CustomInput type="text"/>
            </form>
        )  
    }
}