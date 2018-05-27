import "babel-polyfill";
import {eventBus} from "./controller/EventBus";
// testA();
// import main from "./css/main.scss";
import {signupView} from './views/signup/signup';
import {commonEvents} from './events/CommonEvents';
commonEvents.assign();

console.log(signupView.render());

