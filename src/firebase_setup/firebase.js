// FIREBASE CONFIGS:
import firebase from 'firebase/app';
import 'firebase/auth';

//////////////////////////////////
// IF_ERP_DEV_FIREBASE_CONFIG_KEYS [DEVELOPMENT]:
const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_DEV_apiKey,
  authDomain: process.env.REACT_APP_DEV_authDomain,
  projectId: process.env.REACT_APP_DEV_projectId,
  storageBucket: process.env.REACT_APP_DEV_storageBucket,
  messagingSenderId: process.env.REACT_APP_DEV_messagingSenderId,
  appId: process.env.REACT_APP_DEV_appId,
});
//////////////////////////////////

//////////////////////////////////
// IF_ERP_PROD_FIREBASE_CONFIG_KEYS [PRODUCTION]:
// const app = firebase.initializeApp({
// apiKey: process.env.REACT_APP_PROD_apiKey,
// authDomain: process.env.REACT_APP_PROD_authDomain,
// projectId: process.env.REACT_APP_PROD_projectId,
// storageBucket: process.env.REACT_APP_PROD_storageBucket,
// messagingSenderId: process.env.REACT_APP_PROD_messagingSenderId,
// appId: process.env.REACT_APP_PROD_appId,
// })
//////////////////////////////////

export const auth = app.auth();
export default app;
