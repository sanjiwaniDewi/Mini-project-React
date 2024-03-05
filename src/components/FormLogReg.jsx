const FormLogReg = ({ title }) => {
    return (
        <div>
            <h1>{title}</h1>

            <div>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
            </div>
            <button type="submit">Submit</button>
        </div>
    );
};
