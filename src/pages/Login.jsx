import FormLogReg from "../components/FormLogReg";
import LoginRegisterLink from "../components/LoginRegisterLink";
import "../style/pages.css";

const Login = () => {
    return (
        <main className="login">
            <div className="card card-login">
                <LoginRegisterLink title="Login" />
                <FormLogReg title="Login" />
            </div>
        </main>
    );
};

export default Login;
