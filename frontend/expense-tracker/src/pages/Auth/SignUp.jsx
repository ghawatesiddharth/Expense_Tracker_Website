import React, { useState } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import { useNavigate, Link } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import { validateEmail } from "../../utils/helper";
import ProfilePhotoSelector from "../../components/Inputs/ProfilePhotoSelector";

const SignUp = () => {
    const [profilePic, setProfilePic] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();

        let profileImageUrl = "";

        // Clear previous errors
        setNameError("");
        setEmailError("");
        setPasswordError("");

        let hasError = false;

        if (!fullName.trim()) {
            setNameError("Please enter your name.");
            hasError = true;
        }

        if (!validateEmail(email)) {
            setEmailError("Please enter a valid email address.");
            hasError = true;
        }

        if (!password) {
            setPasswordError("Please enter your password.");
            hasError = true;
        } else if (password.length < 8) {
            setPasswordError("Password must be at least 8 characters.");
            hasError = true;
        }

        if (hasError) return;

        // Sign Up API Call
    };

    return (
        <AuthLayout>
            <div className="lg:w-full h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-black">
                    Create an Account
                </h3>

                <p className="text-xs text-slate-700 mt-5px mb-6">
                    Join us today by entering your details below.
                </p>

                <ProfilePhotoSelector
                    image={profilePic}
                    setImage={setProfilePic}
                />

                <form onSubmit={handleSignUp}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        <div>
                            <Input
                                value={fullName}
                                onChange={({ target }) => setFullName(target.value)}
                                label="Full Name"
                                placeholder="John"
                                type="text"
                            />
                            {nameError && (
                                <p className="text-red-500 text-xs mt-1">
                                    {nameError}
                                </p>
                            )}
                        </div>

                        <div>
                            <Input
                                value={email}
                                onChange={({ target }) => setEmail(target.value)}
                                label="Email Address"
                                placeholder="john@example.com"
                                type="text"
                            />
                            {emailError && (
                                <p className="text-red-500 text-xs mt-1">
                                    {emailError}
                                </p>
                            )}
                        </div>

                        <div className="col-span-2">
                            <Input
                                value={password}
                                onChange={({ target }) => setPassword(target.value)}
                                label="Password"
                                placeholder="Min 8 characters"
                                type="password"
                            />
                            {passwordError && (
                                <p className="text-red-500 text-xs mt-1">
                                    {passwordError}
                                </p>
                            )}
                        </div>

                    </div>

                    <button type="submit" className="btn-primary mt-4">
                        SIGN UP
                    </button>

                    <p className="text-[13px] text-slate-800 mt-3">
                        Already have an Account?{" "}
                        <Link
                            className="font-medium text-primary underline"
                            to="/login"
                        >
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </AuthLayout>
    );
};

export default SignUp;