import '../Css_files/06_Account.css';
import { useState } from 'react';
// import Login from './Login';
function Account({ SetShowAccount, SetShowLogin }) {

    const [FirstName, SetFirstName] = useState("");
    const [LastName, SetLastName] = useState("");
    const [Email, SetEmail] = useState("");
    const [Password, SetPassword] = useState("");
    const [ConfirmPassword, SetConfirmPassword] = useState("");
    const [Submited, SetSubmited] = useState(false);
    const [ShowPassword, SetShowPassword] = useState(false);
    const [ShowConfirmPassword, SetShowConfirmPassword] = useState(false);
    const [Bool, SetBool] = useState(false);

    const [Errors, SetErrors] = useState({
        FirstName: false,
        LastName: false,
        IsUpperCase: false,
        IsLowerCase: false,
        IsNumber: false,
        IsSymbol: false,
        IsEmailAt: false,
        IsEmailCom: false,
        IsPassword: false,
        IsConfirmPassword: false
    });

    const handle = (e) => {
        e.preventDefault();

        const validation = {
            FirstName: FirstName.length > 3,
            LastName: LastName.length > 0,
            IsUpperCase: /[A-Z]/.test(Password),
            IsLowerCase: /[a-z]/.test(Password),
            IsNumber: /[0-9]/.test(Password),
            IsSymbol: /[!@#$%^&*]/.test(Password),
            IsEmailAt: Email.includes("@"),
            IsEmailCom: Email.includes(".com"),
            IsPassword: Password.length >= 8,
            IsConfirmPassword:
                Password.length > 0 && Password === ConfirmPassword
        };

        SetSubmited(true);
        SetErrors(validation);

        const isValid = Object.values(validation).every(
            value => value === true
        );

        SetBool(isValid);

        if (isValid) {
            localStorage.setItem("FirstName", FirstName);
            localStorage.setItem("LastName", LastName);
            localStorage.setItem("Email", Email);
            localStorage.setItem("Password", Password);

            localStorage.setItem("IsSignIn","true");
            localStorage.setItem("IsSignUp","false");
        }

    };

    return (
        <div className='Main_box'>

            <h1>Create Account</h1>
            <h2>Form Validation</h2>

            <form onSubmit={handle}>
                <div>
                    <span>First Name</span>
                    <input
                        type="text"
                        placeholder="Vikas"
                        value={FirstName}
                        onChange={(e) => SetFirstName(e.target.value)}
                    />
                    <div className='close'>
                        <button onClick={() => SetShowAccount(false)}>
                            Close
                        </button>
                    </div>
                    {Submited && !Errors.FirstName && (
                        <p>First name must contain more than 3 characters.</p>
                    )}
                </div>

                <div>
                    <span>Last Name</span>
                    <input
                        type="text"
                        placeholder="Kumar"
                        value={LastName}
                        onChange={(e) => SetLastName(e.target.value)}
                    />
                    {Submited && !Errors.LastName && (
                        <p>Last name is required.</p>
                    )}
                </div>

                <div>
                    <span>Email</span>
                    <input
                        type="text"
                        placeholder="you@example.com"
                        value={Email}
                        onChange={(e) => SetEmail(e.target.value)}
                    />
                    {Submited && !Errors.IsEmailAt && (
                        <p>Email must contain @.</p>
                    )}
                    {Submited && !Errors.IsEmailCom && (
                        <p>Email must contain .com.</p>
                    )}
                </div>

                <div>
                    <span>Password</span>
                    <div className="password-field">
                        <input
                            type={ShowPassword ? "text" : "password"}
                            placeholder="Password"
                            value={Password}
                            onChange={(e) => SetPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            className="eye_btn"
                            onClick={() => SetShowPassword(!ShowPassword)}
                        >
                            {ShowPassword ? "🙈" : "👁️"}
                        </button>
                    </div>

                    {Submited && !Errors.IsPassword && (
                        <p>Password must contain at least 8 characters.</p>
                    )}
                    {Submited && !Errors.IsUpperCase && (
                        <p>Password must contain an uppercase letter (A-Z).</p>
                    )}
                    {Submited && !Errors.IsLowerCase && (
                        <p>Password must contain a lowercase letter (a-z).</p>
                    )}
                    {Submited && !Errors.IsNumber && (
                        <p>Password must contain a number (0-9).</p>
                    )}
                    {Submited && !Errors.IsSymbol && (
                        <p>Password must contain a symbol (!@#$%^&*).</p>
                    )}
                </div>

                <div>
                    <span>Confirm Password</span>
                    <div className="password-field">
                        <input
                            type={ShowConfirmPassword ? "text" : "password"}
                            placeholder="Confirm password"
                            value={ConfirmPassword}
                            onChange={(e) => SetConfirmPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            className="eye_btn"
                            onClick={() =>
                                SetShowConfirmPassword(!ShowConfirmPassword)
                            }
                        >
                            {ShowConfirmPassword ? "🙈" : "👁️"}
                        </button>
                    </div>

                    {Submited && !Errors.IsConfirmPassword && (
                        <p>Confirm password must match the password.</p>
                    )}
                </div>
                <button type="submit">Create Account</button>
            </form>
            <button onClick={() => {
                SetShowAccount(false)
                SetShowLogin(true)
            }}>Sign in</button>

            {
                Bool && (
                    <p>Congratulations! Your account is created.</p>
                )
            }
        </div >
    );
}

export default Account;
