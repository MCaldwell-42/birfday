import firebase from 'firebase/app';
import 'bootstrap';
import '../styles/main.scss';
import auth from './components/auth/auth';
import birf from './components/birfday/birfday';
import apiKeys from './helpers/apiKeys.json';


const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  auth.authStringBuilder();
  birf.birfStringBuilder();
};

init();
