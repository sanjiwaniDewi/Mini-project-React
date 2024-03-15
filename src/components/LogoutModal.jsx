import { PiSealWarningBold } from "react-icons/pi";

import "../style/components.css";

const LogoutModal = ({ handleShowModal, handleLogout }) => {
    return (
        <div className="container-modal">
            <div className="card card-modal">
                <div className="modal-icon">
                    <PiSealWarningBold />
                </div>

                <div className="modal-text">
                    <h3>Are you sure that you want to logout?</h3>
                </div>
                <div className="modal-action-button">
                    <button onClick={handleShowModal} className="button-cancel">
                        Cancel
                    </button>
                    <button onClick={handleLogout} className="button-logout">
                        Yes, log me out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LogoutModal;
