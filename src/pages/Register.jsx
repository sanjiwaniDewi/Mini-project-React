import FormLogReg from "../components/FormLogReg";
import LoginRegisterLink from "../components/LoginRegisterLink";
import "../style/pages.css";

const Register = () => {
    return (
        <main className="register">
            <div className="card card-register">
                <FormLogReg title="Register" />
                <LoginRegisterLink title="Register" />
            </div>
        </main>
    );
};

export default Register;
