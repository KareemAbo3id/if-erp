// FIREBASE CONFIGS:
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

//////////////////////////////////
// IF_ERP_DEV_FIREBASE_CONFIG_KEYS [DEVELOPMENT]:
const firebaseConfig = {
  apiKey: process.env.REACT_APP_DEV_apiKey,
  authDomain: process.env.REACT_APP_DEV_authDomain,
  projectId: process.env.REACT_APP_DEV_projectId,
  storageBucket: process.env.REACT_APP_DEV_storageBucket,
  messagingSenderId: process.env.REACT_APP_DEV_messagingSenderId,
  appId: process.env.REACT_APP_DEV_appId,
};
//////////////////////////////////

//////////////////////////////////
// IF_ERP_PROD_FIREBASE_CONFIG_KEYS [PRODUCTION]:
// const firebaseConfig = {
// apiKey: process.env.REACT_APP_PROD_apiKey,
// authDomain: process.env.REACT_APP_PROD_authDomain,
// projectId: process.env.REACT_APP_PROD_projectId,
// storageBucket: process.env.REACT_APP_PROD_storageBucket,
// messagingSenderId: process.env.REACT_APP_PROD_messagingSenderId,
// appId: process.env.REACT_APP_PROD_appId,
// }
//////////////////////////////////

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
