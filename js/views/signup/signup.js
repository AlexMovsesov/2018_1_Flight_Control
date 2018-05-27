'use strict';
import template from './signup.pug.tmpl';
class SignupView {
    render() {
        return template([1,2,3]);
    }
}
const signupView = new SignupView();
export {signupView};