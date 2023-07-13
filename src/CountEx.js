import React, { Component } from 'react';

const Promblematic = () => {
  throw (new Error('버그가 나타났다!'));
  return (
    <div>

    </div>
  );
};

class Counter extends Component {
  state = {
    name:'',
      phone: '',
    number: 0,
     foo: {
       bar: 1000,
       foobar: 10
     }
  }

 constructor(props) {
    super(props);
    console.log('constructor');
  }

 componentDidCatch(error, info) {
    this.setState({
      error: true
    });
  }


  componentWillMount() {
    console.log('componentWillMount (deprecated)');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 5 의 배수라면 리렌더링 하지 않음
    console.log('shouldComponentUpdate');
    if (nextState.number % 5 === 0) return false;
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }
 /* handleIncrease = () => {
    this.setState({
      number: this.state.number + 1
    });
  }*/


   handleIncrease = () => {
       this.setState(
       ({number}) => ({
        number : number+1
       }));
     }


  handleDecrease = () => {
    this.setState({
      number: this.state.number - 1
    });
  }

 handleChange = (e) => {
  console.log("name: "+ e.target.value)
       this.setState({
           [e.target.name]: e.target.value
       });

       console.log("name2: "+ this.state.name)
     }

handleSubmit = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onCreate 를 통하여 부모에게 전달
    this.props.onCreate(this.state);
    // 상태 초기화
    this.setState({
      name: '',
      phone: ''
    })
  }

  render() {
    if (this.state.error) return (<h1>에러발생!</h1>);
    return (
      <div>
        <h1>카운터</h1>
          { this.state.number  < 0&& <Promblematic /> }
        <div>값: {this.state.number}</div>
         <div>
         <ul className="list_day">
             <li key={this.state.foo.bar}>
                bar: {this.state.foo.bar}<br/>
                foobar: {this.state.foo.foobar}
              </li>
           </ul></div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
        <div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="이름"
            defaultValue= {this.state.name}
            onChange={this.handleChange}
            name="name"
          />

          <input
            placeholder="전화번호"
            defaultValue={this.state.phone}
            onChange={this.handleChange}
            name="phone"
          />

            <div>{this.state.name}</div>
             <div>PHONE: {this.state.phone}</div>
             <button type="submit">등록</button>
        </form>
        </div>
     </div>

    );
  }
}

export default Counter;