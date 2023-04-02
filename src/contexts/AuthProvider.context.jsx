/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import PropTypes from 'prop-types';
import { auth } from '../firebase_setup/firebase';
// IMPORTS //////////////////////

const AuthContext = React.createContext(null);
export const useAuth = () => React.useContext(AuthContext);

/////////////////////////////////
// MAIN UI FUNCTION /////////////
export default function AuthProvider({ children }) {
  // LOCAL HOOKS:
  const [currentUser, setCurrentUser] = React.useState();
  const [loading, setLoading] = React.useState(true);

  // LOCAL HANDLERS:

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = React.useMemo(
    () => ({
      currentUser,
      login,
      logout,
    }),
    [],
  );

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = { children: PropTypes.element.isRequired };
