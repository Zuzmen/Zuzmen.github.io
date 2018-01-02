import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function() {

  class MyForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        email: '',
        pass: '',
        phone: '',
        picture: '',
        referral_code: '',
        allow: 0
      };
      this.onMyChange = this.onMyChange.bind(this);
      this.onMyClick = this.onMyClick.bind(this);
    }
    onMyChange(e)
    {
      switch (e.target.name) {
        case 'email':
          this.setState({email: e.target.value});
          break;
        case 'pass':
          this.setState({pass: e.target.value});
          break;
        case 'phone':
          this.setState({phone: e.target.value});
          break;
        case 'picture':
          this.setState({picture: e.target.value});
          break;
        case 'referral_code':
          this.setState({referral_code: e.target.value});
          break;
      }

      // when (email, pass, phone, picture without referral_code) these fields are filled then the key "Sign Up" will become active
      if (this.state.email !== '' && this.state.pass !== '' && this.state.phone !== '' && this.state.picture !== '')
        this.setState({allow: 1})
      else
        this.setState({allow: 0});
      }
    onMyClick() {}
    static propTypes = {
    // using PropTypes,when component is not a string ,we have warning appears in the console
      input: PropTypes.string.isRequired

    }
    render() {
      return (
        <div>
          <form>
            <tr>
              <td>email</td>
              <td><input onChange={this.onMyChange} placeholder='User email' name='email' type='text'/></td>
            </tr>
            <tr>
              <td>password</td>
              <td><input onChange={this.onMyChange} placeholder='User password' name='pass' type='password'/></td>
            </tr>
            <tr>
              <td>phone</td>
              <td><input onChange={this.onMyChange} placeholder='User phone number' name='phone' type='number'/></td>
            </tr>
            <tr>
              <td>picture</td>
              <td><input onChange={this.onMyChange} placeholder='User picture' name='picture' type='text'/></td>
            </tr>
            <tr>
              <td>referral_code</td>
              <td><input onChange={this.onMyChange} placeholder='Referral code' name='referral_code' type='number'/></td>
            </tr>
            <tr>
              <td>
                {this.state.allow == 1
                  ? <input type='button' onClick={this.onMyClick} value="Sign In"/>
                  : <input type='button' onClick={this.onMyClick} disabled value="Sign In"/>
}
              </td>
            </tr>
          </form>
        </div>
      );
    }
  };
  ReactDOM.render(
    <MyForm/>, document.getElementById('app'));

});
