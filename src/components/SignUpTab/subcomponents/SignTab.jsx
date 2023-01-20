import React, { useEffect, useRef, useState } from 'react';
import Fieldset from '../../Form/subcomponents/Fieldset';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLock,
    faUser,
    faAt,
} from "@fortawesome/free-solid-svg-icons";

export let clearSign;

const SignTab = ({ active = '' }) => {
    const [email, setEmail] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [terms, setTerms] = useState("");
    const [clear, setClear] = useState(false);

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleLoginChange = (e) => setLogin(e.target.value);
    const handlePasswordChange = (e) => {
        info.current.classList.remove("tab-active");
        setPassword(e.target.value);
    };
    const handlePasswordConfirmChange = (e) => setPasswordConfirm(e.target.value);
    const handlePasswordInfo = () => info.current.classList.toggle("tab-active");
    const handleTermsChange = ({ target }) => setTerms(target.value);
    clearSign = () => setClear(true);

    useEffect(() => {
        setEmail('')
        setLogin('')
        setPassword('')
        setPasswordConfirm('')
        setTerms(false)
    }, [clear])

    const info = useRef();
    const passwordRef = useRef();

    const classess = `sign tab ${active}`
    return (
        <div className={classess}>
            <Fieldset
                className="email"
                legend="Email"
                inputValue={email}
                handleChange={handleEmailChange}
                icon={faAt}
                type="email"
            />
            <Fieldset
                className="login"
                legend="Login"
                inputValue={login}
                handleChange={handleLoginChange}
                icon={faUser}
            />
            <fieldset className="password">
                <legend>Password</legend>
                <div className="password-input">
                    <input
                        id='password'
                        onChange={handlePasswordChange}
                        value={password}
                        type="password"
                        ref={passwordRef}
                        onFocus={handlePasswordInfo}
                    />
                    <FontAwesomeIcon className="icon" icon={faLock} />
                    <div ref={info} className="info">
                        <span>Must have:</span>
                        <ul>
                            <li>At least one capital letter</li>
                            <li>At least one small letter</li>
                            <li>At least one number</li>
                            <li>At least one special character</li>
                            <li>At least six signs</li>
                        </ul>
                    </div>
                </div>
                <small></small>
            </fieldset>
            <Fieldset
                className="password-confirm"
                legend="Confirm Password"
                inputValue={passwordConfirm}
                handleChange={handlePasswordConfirmChange}
                icon={faLock}
                type="password"
            />
            <label>
                <span>Accept terms</span>
                <input
                    id='terms'
                    onChange={handleTermsChange}
                    value={terms}
                    type="checkbox"
                />
            </label>
        </div>
    )
}

export default SignTab;

