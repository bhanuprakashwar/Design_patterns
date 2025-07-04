/* 
Definition:
Lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they’re observing.
*/

class Button {
  private observers: Function[] = [];

  public addClickListener(observer: Function): void {
    this.observers.push(observer);
  }

  public click(): void {
    this.observers.forEach(observer => observer());
  }
}

function logAnalytics() {
  console.log("Logging click to analytics.");
}

function showRippleEffect() {
  console.log("Showing ripple animation.");
}

function sendClickToServer() {
  console.log("Sending click event to server.");
}

const button = new Button();
button.addClickListener(logAnalytics);
button.addClickListener(showRippleEffect);
button.addClickListener(sendClickToServer);

button.click();