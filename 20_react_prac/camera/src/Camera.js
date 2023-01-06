import React, {useEffect, useRef} from 'react';

const Camera = () => {

    // ref 객체 생성
    const videoRef = useRef(null);

    //사용자 웹캠에 접근

    //비동기 처리
    const getUserCamera = () => {
        navigator.mediaDevices.getUserMedia({
            video: true
        }).then((stream) => {
            //비디오 tag에 stream 추가
            //useRef()로 만든 객체 안의 current가 실제 요소를 가르킴
            let video = videoRef.current;

            video.srcObject = stream;

            video.play();
        }).catch((error) => {
            console.log(error);
        })
    }

    //컴포넌트 Mount 될 떄 동작
    useEffect(() => {
        getUserCamera()
    }, [videoRef]);


    return(
        <div className='container'>
            <h1>카메라 기능</h1>
            <video className='container' ref = {videoRef}></video>
        </div>
    )
}

export default Camera;