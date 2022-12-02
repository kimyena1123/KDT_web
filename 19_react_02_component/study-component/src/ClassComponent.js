import React from 'react';
import PropTypes from 'prop-types';

class ClassComponent extends React.Component{
    //클래스형 컴포넌트 render() 필수
    render(){
        console.log(this.props);

        const {name, student, num} = this.props;

        const teacher = "Sean";

        return(
            <>
                <h1>Hello, {teacher}</h1>
                <p>여기는 class Component!</p>

                <p><b>{this.props.name}</b>야!!. 학생 수는 <b>{this.props.students}명</b>이야</p>
            </>
        )
    }

    static defaultProps = {
        name: '기본이름',
        students: 1,

    }
    static propTypes = {
        name: PropTypes.string,
        students: PropTypes.number.isRequired,
    }
}
/*
ClassComponent.defaultProps = {
    name: '기본이름',
}

ClassComponent.propTypes = {
    name: PropTypes.string,
    students: PropTypes.number
}*/

export default ClassComponent;