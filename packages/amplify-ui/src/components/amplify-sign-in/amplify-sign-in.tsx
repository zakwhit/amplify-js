import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'amplify-sign-in',
})
export class AmplifySignIn {
  @Prop() handleSubmit: (Event) => void;

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <h2>Amplify Login</h2>
          <p>
            <amplify-sign-in-username-field />
          </p>
          <p>
            <amplify-sign-in-password-field />
          </p>
        </div>
        <amplify-button type="submit">Submit</amplify-button>
      </form>
    );
  }
}
