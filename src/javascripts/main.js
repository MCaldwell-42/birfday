import 'bootstrap';
import '../styles/main.scss';
import auth from './components/auth/auth';
import birf from './components/birfday/birfday';


const init = () => {
  auth.authStringBuilder();
  birf.birfStringBuilder();
};

init();
