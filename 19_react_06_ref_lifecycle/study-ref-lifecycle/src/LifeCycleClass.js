import React from 'react';

class MyComponent extends React.Component {
  componentDidMount() {
    console.log('Class Component | ⭕️ mount!');
  }

  componentDidUpdate() {
    console.log('Class Component | ✅ update!');
  }

  componentWillUnmount() {
    console.log('Class Component | ❌ unmount!');
  }

  render() {
    return <p>MyComponent {this.props.number}</p>;
  }
}

class LifeCycleClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      visible: true,
    };
  }

  changeNumberState = () => this.setState({ number: this.state.number + 1 });
  changeVisibleState = () => this.setState({ visible: !this.state.visible });

  render() {
    return (
      <>
        <button onClick={this.changeNumberState}>PLUS</button>
        <button onClick={this.changeVisibleState}>ON/OFF</button>
        {this.state.visible && <MyComponent number={this.state.number} />}
      </>
    );
  }
}

export default LifeCycleClass;