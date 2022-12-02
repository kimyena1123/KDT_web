import PropTypes from 'prop-types';

const Food = (props) => {
    console.log(props);

    const {myName, foodName, color} = props;

    const pColor = {
        color: 'red',
    }

    return (
        <div>
            <h1>실습1.</h1>
            <p style = {pColor}>내 이름은 {myName}</p>
            <p style = {pColor} >내가 좋아하는 음식은 {foodName}이야.</p>
            <p style = {pColor} >{foodName}은 {color}이야.</p>
        </div>
    )
}

Food.defaultProps = {
    myName: '사람',
    foodName: '사과',
    color: '빨간색'
}
export default Food;