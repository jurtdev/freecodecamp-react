import React from 'react';

class ReturnTempPassword extends React.Component {
  render() {
    return (
      <div>
        {/* change code below this line */}
        <p>
          Your temporary password is: <strong>{this.props.pass}</strong>
        </p>
        {/* change code above this line */}
      </div>
    );
  }
}

export default class Challenge19 extends React.Component {
  render() {
    return (
      <div>
        <h1>Challenge # 19</h1>
        <h3>Access Props Using this.props</h3>
        {/* change code below this line */}
        <ReturnTempPassword pass={'myPassword'} />
        {/* change code above this line */}
      </div>
    );
  }
}
