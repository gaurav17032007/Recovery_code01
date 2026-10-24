import { useState } from "react";
import '../Css_files/Login.css';
function Login({ SetShowLogin, SetShowAccount }) {
    const [Email, SetEmail] = useState("");
    const [Password, SetPassword] = useState("");
    const [ShowPassword, SetShowPassword] = useState(false);
    const [Submit, SetSubmit] = useState(false);
    const [EmailBool, SetEmailBool] = useState(false);
    const [PasswordBool, SetPasswordBool] = useState(false);
    const handle = (e) => {
        e.preventDefault();
        try {
            SetSubmit(true);
            let email = localStorage.getItem("Email");
            let password = localStorage.getItem("Password");

            const isEmailValid = Email === email;
            const isPasswordValid = Password === password;

            SetEmailBool(isEmailValid);
            SetPasswordBool(isPasswordValid);

            if (isEmailValid && isPasswordValid) {
                localStorage.setItem("IsSignIn", "true");
                localStorage.setItem("IsSignUp", "false");
            }
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="Main_box">
            <h1>Login page</h1>
            <form onSubmit={handle}>
                <span>Email</span>
                <input type="text" value={Email} placeholder="Enter your email"
                    onChange={(e) => SetEmail(e.target.value)} />
                {Submit && !EmailBool && (
                    <p>Email incorrect</p>
                )
                }
                <span>Password</span>
                <div className="password-field">
                    <input
                        type={ShowPassword ? "text" : "password"}
                        value={Password}
                        placeholder="Enter your password"
                        onChange={(e) => SetPassword(e.target.value)}
                    />
                    <button
                        type="button"
                        className="eye_btn"
                        aria-label={ShowPassword ? "Hide password" : "Show password"}
                        onClick={() => SetShowPassword(!ShowPassword)}
                    >
                        {ShowPassword ? "Hide" : "Show"}
                    </button>
                </div>
                {Submit && !PasswordBool && (
                    <p>Password is incorrect</p>
                )}
                <button type="submit">Login</button>
            </form>
            <button onClick={() => {
                SetShowLogin(false)
            }
            }>Close</button>
            <button
                type="button"
                onClick={() => {
                    SetShowLogin(false);
                    SetShowAccount(true);
                }}
            >
                Don't have an account? Sign up
            </button>
            {
                EmailBool && PasswordBool && (
                    <p>Congratulations! Your account is created.</p>
                )
            }
        </div>
    )
}
export default Login;