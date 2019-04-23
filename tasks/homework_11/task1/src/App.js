import React from 'react';
import Form from './Form';

class App extends React.PureComponent {
  state = {}

  componentDidMount() {
    setTimeout(() => this.setState(this.getInitialValues), 3000);
  }

  submit = values => alert(JSON.stringify(values, null, 4))

  getInitialValues = () => ({
    name: 'Sally',
    gender: 'female'
     })

  render() {
    return (
      <Form
        // onSubmit={this.submit}
        // initialValues={this.state}
      />
    );
  }
}

export default App;
