import React from 'react';

class ClassBind extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: 'KDT3rd',
        };

        //his.printConsole = this.printConsole.bind(this); // 이런식으로 선언해줘야 한다.
        
        //bind가 귀찮다면 화살표 함수로 해결가능
        
    }

    
    printConsole = () => {
        console.log('>>>>', this.state);
    }

    // printConsole(){
    //     console.log('>>>>> ', this.state);
    // }

    render(){
        
        return(
            <div>
                <button onClick = {this.printConsole}>printConsole</button>
            </div>
        )
    }

}

export default ClassBind;