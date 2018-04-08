import './study-system.less';
import { Column } from '../../../utils/utils';

const studySystem = require('./study-system.html');

export default class StudySystem extends Column {
  init () {
    super.init(studySystem);
  }
}


