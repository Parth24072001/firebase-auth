import { User, signInWithPopup, signOut } from "firebase/auth";
import { useContext, useState, createContext, useEffect } from "react";
import { auth, googleProvider } from "./firebaseConfig";

type t = {
  currentUser: User | null;
  signInWithGoogle: () => void;
  logOut: () => void;
};
const AuthContext = createContext({} as t);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // creating an account or sign up function

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
      setLoading(!loading);
      return err;
    }
  };
  const logOut = async () => {
    try {
      await signOut(auth);
      setCurrentUser(null);
    } catch (err) {
      console.error(err);
      setLoading(!loading);
      return err;
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(!loading);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signInWithGoogle,
    logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
