import "./main.less";
import 'bootstrap';

import Main from './wrappers/main/main';
import Footer from './wrappers/footer/footer';

class App {
  init () {
    this.root = document.getElementById('app');
    const footer = new Footer(this.root);
    const main = new Main(this.root);

    main.init();
    footer.init();
  }
}

const app = new App();

app.init();
