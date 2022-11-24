import { createContext } from "react";
import { getAuth  } from 'firebase/auth';
import app from "../components/firebase/firebase.config";

const AuthContex = createContext();
const auth = getAuth(app);
