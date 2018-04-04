import "./main.less";
import 'bootstrap';
import $ from 'jquery';
import Navigation from './wrappers/navigation/navigation';

class App {
  init () {
    this.root = document.getElementById('app');
    const navigation = new Navigation(this.root);

    navigation.init();
  }
}

const app = new App();

app.init();

if (process.env.NODE_ENV !== 'production') {
  console.log('Dev mode On!');
}