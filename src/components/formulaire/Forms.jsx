import { useState } from 'react'
import Modal from './Modal'
import './style.css'

export default function Forms() {

    
    const [errorMsg, setErrorMsg] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        email: "",
        isEmployer: false,
        salaire: "",
    })

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value })
    }

    const validerEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        return emailRegex.test(email)
      }
      
      // Exemple d'utilisation :
      console.log(validerEmail(formData.email)); // true
      

    function handleSubmit(e) {
        e.preventDefault();
        if (formData.nom === "bilel") {
            setErrorMsg("the name is false")
        } else {
            setErrorMsg(null)
        }
        setShowModal(true)
    }

    function handleExitClick() {
        if (showModal) {
            setShowModal(false)
        }
    }

    const btnIsDisabled =
        formData.nom === ''
        || formData.prenom === ''
        || validerEmail(formData.email) === false

    return (
        <div className='grp' onClick={handleExitClick}>
            <form id='form'>
                <div className='titre'>
                    <h1>Formulaire</h1>
                    
                </div>
                <hr />
                <label >Nom:</label>
                <input type="text" value={formData.nom} onChange={(e) =>
                    handleInputChange('nom', e.target.value)
                } required />
                <label >Prénom:</label>
                <input type="text" value={formData.prenom} onChange={(e) =>
                    handleInputChange('prenom', e.target.value)
                } required />
                <label >Email:</label>
                <input type="email" required value={formData.email} onChange={(e) =>
                    handleInputChange('email', e.target.value)
                } />
                <label >Vous etes employer ?</label>
                <input type="checkbox" value={formData.isEmployer} onChange={(e) =>
                    handleInputChange('isEmloyer', e.target.value)
                } />
                <label>Salaire :</label>
                <select value={formData.salaire} onChange={(e) =>
                    handleInputChange('salaire', e.target.value)
                }>
                    <option value="1000">1000Dt</option>
                    <option value="2000">2000Dt</option>
                </select>
                <input type="submit" value="Envoyer" disabled={btnIsDisabled} onClick={handleSubmit} />
            </form>
            <Modal isVisible={showModal} errorMsg={errorMsg} />
        </div>
    )
}