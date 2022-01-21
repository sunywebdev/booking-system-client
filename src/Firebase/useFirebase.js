import { useEffect, useState } from "react";
import {
	getAuth,
	signOut,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	sendPasswordResetEmail,
	getIdToken,
} from "firebase/auth";
import initializeAuth from "./firebase.init";
import Swal from "sweetalert2";

initializeAuth();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [error, setError] = useState("");
	const [isLoading, setIsloading] = useState(true);
	const [token, setToken] = useState("");
	const auth = getAuth();

	const resetPassword = (auth, email, navigate, location, setLoad) => {
		sendPasswordResetEmail(auth, email)
			.then(() => {
				Swal.fire({
					icon: "success",
					title: "Please Check Your Email Inbox",
					showConfirmButton: false,
					timer: 2000,
				}).then(function () {
					const destination = location?.state?.from || "/dashboard";
					navigate(destination);
					setLoad(false);
				});
			})
			.catch((error) => {
				const errorMessage = error.message;
				setLoad(false);
				Swal.fire({
					icon: "error",
					title: errorMessage,
					showConfirmButton: false,
					timer: 2000,
				}).then(function () {
					setError(errorMessage);
					setLoad(false);
				});
			})
			.finally(() => setIsloading(false));
	};

	const signInWithEmailPassword = (
		auth,
		email,
		password,
		navigate,
		location,
		setLoad,
	) => {
		setIsloading(true);
		signInWithEmailAndPassword(auth, email, password)
			.then(() => {
				Swal.fire({
					icon: "success",
					title: "Login Successfull",
					showConfirmButton: false,
					timer: 2000,
				}).then(function () {
					const destination = location?.state?.from || "/dashboard";
					navigate(destination);
					setLoad(false);
				});
			})

			.catch((error) => {
				const errorMessage = error.message;
				setLoad(false);
				Swal.fire({
					icon: "error",
					title: errorMessage,
					showConfirmButton: false,
					timer: 2000,
				}).then(function () {
					setError(errorMessage);
					setLoad(false);
				});
			})
			.finally(() => setIsloading(false));
	};

	const logOut = () => {
		setIsloading(true);
		signOut(auth)
			.then(() => {
				setUser({});
			})
			.catch((error) => {})
			.finally(() => setIsloading(false));
	};
	useEffect(() => {
		const unSubscribed = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
				setError("");
				getIdToken(user).then((idToken) => setToken(idToken));
			} else {
				setUser({});
			}
			setIsloading(false);
		});
		return () => unSubscribed;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return {
		auth,
		user,
		error,
		signInWithEmailPassword,
		logOut,
		isLoading,
		resetPassword,
		token,
	};
};

export default useFirebase;
