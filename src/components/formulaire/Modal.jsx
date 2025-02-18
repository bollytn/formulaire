export default function Modal({ isVisible, errorMsg = null }) {
    if (isVisible) {
        return (
            <div className="modal">
                <div className="modal-content">
                    {/* { if erroMsg != null  */}
                    {
                        <h1 className={errorMsg ? "modalMsg err" : "modalMsg"}> {errorMsg != null
                            ? errorMsg
                            : 'formulaire envoyer par succes'} </h1>
                    }
                </div>
            </div>
        )
    } else {
        return (<></>)
    }
} 