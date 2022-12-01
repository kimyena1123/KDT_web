import PropTypes from 'prop-types';

const FuncComponent = (props) => {
    console.log(props); //{name: 'XXX'}
    const {name, students, num} = props;

    const teacher = "션";

    return(
        <div>
            <h1>Hi {teacher}</h1>
            <p>나는 <b>{name}</b>야</p>
            <p><b>{num}</b>기! 학생 수는 <b>{students}명</b>이야</p>
            <p>여기는 Functional Component</p>
        </div>
    )
}


FuncComponent.defaultProps = { // 기본값 설정
    name: '얏호',
    num: 0,
    students: 0,
}

FuncComponent.propTypes = { // app.js에서 잘못 선언시 오류를 보여준다.
    name: PropTypes.string,
    students: PropTypes.number.isRequired,
    num: PropTypes.number,
}

export default FuncComponent;


/*
const FuncComponent = ({ name, students }) => {
  
    const teacher = '션';
  
    return (
      <div>
        <h1>Hi! {teacher}</h1>
        <p>여기는 Functional Component!!</p>
        <p>
          <b>{name}</b> 수업시간~!~! 학생수는 <b>{students}</b>명입니다.
        </p>
      </div>
    );
  };
  
  export default FuncComponent;
*/