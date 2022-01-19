import { useEffect, useState } from "react";
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	signOut,
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	sendPasswordResetEmail,
	getIdToken,
} from "firebase/auth";
import initializeAuth from "./firebase.init";
import axios from "axios";
import Swal from "sweetalert2";

initializeAuth();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [error, setError] = useState("");
	const [isLoading, setIsloading] = useState(true);
	const [admin, setAdmin] = useState(false);
	const [token, setToken] = useState("");
	const auth = getAuth();
	const googleProvider = new GoogleAuthProvider();

	const signInUsingGoogle = (navigate, location, setLoad) => {
		setIsloading(true);
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				const user = result?.user;
				saveOrReplaceUserToDb(
					user?.email,
					user?.displayName,
					user?.photoURL,
					navigate,
					location,
					setLoad,
				);
			})
			.catch((error) => {
				const errorMessage = error.message;
				setError(errorMessage);
				setLoad(false);
			})
			.finally(() => setIsloading(false));
	};
	const resetPassword = (auth, email, navigate, location, setLoad) => {
		sendPasswordResetEmail(auth, email)
			.then(() => {
				Swal.fire({
					icon: "success",
					title: "Please Check Your Email Inbox",
					showConfirmButton: false,
					timer: 2000,
				}).then(function () {
					const destination = location?.state?.from || "/";
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

	const createNewUserUsingEmailPassword = (
		auth,
		email,
		password,
		displayName,
		navigate,
		location,
		setLoad,
	) => {
		setIsloading(true);
		createUserWithEmailAndPassword(auth, email, password)
			.then((res) => {
				setLoad(false);
				setUser(res.user);
				saveUserToDb(email, displayName, navigate, location, setLoad);
			})
			.catch((error) => {
				const errorMessage = error.message;
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
					const destination = location?.state?.from || "/";
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

	const saveUserToDb = (email, displayName, navigate, location, setLoad) => {
		const save = {
			email,
			displayName,
		};
		axios
			.post(`http://localhost:5000/users`, save)
			.then(function (response) {
				Swal.fire({
					icon: "success",
					title: "Acccount Creation Successfull",
					showConfirmButton: false,
					timer: 2000,
				}).then(function () {
					const destination = location?.state?.from || "/";
					navigate(destination);
					setLoad(false);
				});
			})
			.catch(function (error) {
				setLoad(false);
				Swal.fire({
					icon: "error",
					title: error,
					showConfirmButton: false,
					timer: 2000,
				});
				console.log(error);
			});
	};
	const saveOrReplaceUserToDb = (
		email,
		displayName,
		navigate,
		location,
		setLoad,
	) => {
		const save = { email, displayName };
		axios
			.put(`http://localhost:5000/users`, save)
			.then(function (response) {
				Swal.fire({
					icon: "success",
					title: "Login Successfull",
					showConfirmButton: false,
					timer: 2000,
				}).then(function () {
					const destination = location?.state?.from || "/";
					navigate(destination);
					setLoad(false);
				});
			})
			.catch(function (error) {
				setLoad(false);
				Swal.fire({
					icon: "error",
					title: error,
					showConfirmButton: false,
					timer: 2000,
				});
				console.log(error);
			});
	};

	/*------ to findout user is admin or not---------- */
	useEffect(() => {
		fetch(`http://localhost:5000/users/${user?.email}`)
			.then((res) => res.json())
			.then((data) => setAdmin(data?.admin));
	}, [user?.email]);

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
		signInUsingGoogle,
		createNewUserUsingEmailPassword,
		signInWithEmailPassword,
		logOut,
		isLoading,
		resetPassword,
		admin,
		token,
	};
};

export default useFirebase;
