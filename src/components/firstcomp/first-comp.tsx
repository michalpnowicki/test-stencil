import { Component, Prop, h, Method, State, Event, EventEmitter } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'first-comp',
  styleUrl: 'first-comp.css',
  shadow: true,
})
export class MyComponent {
  @State() active: string;

  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  /**
   * The last name
   */
  @Prop() data: string | {[key: string]: {label:string,content:string}};

  @Method()
  async handleClick(id) {
    this.active = id;
  }

  @Method()
  async handleGetStateClick() {
    console.log(this)
    alert(this.active)
  }

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  @Event({
    eventName: 'buttonClicked',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) buttonClicked: EventEmitter<string>;

  handleButtonClicked(clickedData: string) {
    this.buttonClicked.emit(clickedData);
  }

  render() {
    return <div>
      <div>Hello, World! I'm {this.getText()}</div>
      {this.data && (
        <div>
          <button class="button" onClick={() => this.handleClick("witam")}>
            Set "witam"
          </button>
          <button class="button" onClick={() => this.handleClick("serdecznie")}>
            Set "serdecznie"
          </button>
          <button class="button" onClick={() => this.handleGetStateClick()}>
            Get state
          </button>
          <button class="button" onClick={() => this.handleButtonClicked("To jest moja funkcja i przycisk został kliknięty")}>
            MyFunc
          </button>
        </div>
      )}
    </div>
    
  }
}
