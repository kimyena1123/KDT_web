import React from 'react';
import PropTypes from 'prop-types';

class Console extends React.Component{
    render(){
        console.log(this.props);
        
        return (
            <>
                <h1>{this.props.text}</h1>
                <button onClick = {this.props.valid}>valid</button>
            </>
        )

        
        }

    static defaultProps = {
        text: '이건 기본 text props입니다.',
    }
    static propTypes = {
        text: PropTypes.string.isRequired
        //valid: PropTypes.string,
    }
}


export default Console;