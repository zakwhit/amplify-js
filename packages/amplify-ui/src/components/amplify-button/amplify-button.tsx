import { Component, Element, Prop } from '@stencil/core';

@Component({
  tag: 'amplify-button',
  styleUrl: 'amplify-button.css',
})
export class AmplifyButton {
  @Element() el: HTMLElement;

  @Prop() type: string = 'button';
  @Prop() role: string = 'button';

  render() {
    return (
      <button role={this.role} type={this.type}>
        <slot />
      </button>
    );
  }
}
