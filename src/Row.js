import React from 'react'

export default class Row extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const {label} = this.props;
        return (
            <React.Fragment>
                <div style={{"display":'flex',"gap":'5px'}}>
                    <span>{label}:</span>
                    {this.props.children}
                </div>
            </React.Fragment>
        );
    }
}