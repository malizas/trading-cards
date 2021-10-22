'use strict';

function Homepage(props) {
  return (
    <React.Fragment>
      <a href="/cards">Click here if you want to see the trading cards</a><br></br>
      <img src="/static/img/balloonicorn.jpg"/>
    </React.Fragment>
  )
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
