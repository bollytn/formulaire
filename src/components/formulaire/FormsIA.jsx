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

    // Nouveaux états pour gérer la validation de l'email uniquement après onBlur
    const [emailValid, setEmailValid] = useState(false)
    const [emailTouched, setEmailTouched] = useState(false)

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value })
    }

    const validerEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        return emailRegex.test(email)
    }
      
    // Exemple d'utilisation :
    console.log(validerEmail(formData.email)); // true

    // La fonction appelée quand l'input email perd le focus
    const handleEmailBlur = () => {
      setEmailTouched(true)
      setEmailValid(validerEmail(formData.email))
    }

    function handleSubmit(e) {
        e.preventDefault()
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

    // Le bouton est désactivé si nom, prénom ou email vide,
    // ou si l'email a été touché et est invalide
    const btnIsDisabled =
        formData.nom === '' ||
        formData.prenom === '' ||
        (emailTouched && emailValid === false)

    return (
        <div className='grp' onClick={handleExitClick}>
            <form id='form'>
                <div className='titre'>
                    <h1>Formulaire</h1>
                </div>
                <hr />
                <label>Nom:</label>
                <input 
                    type="text" 
                    value={formData.nom} 
                    onChange={(e) => handleInputChange('nom', e.target.value)}
                    required 
                />
                <label>Prénom:</label>
                <input 
                    type="text" 
                    value={formData.prenom} 
                    onChange={(e) => handleInputChange('prenom', e.target.value)}
                    required 
                />
                <label>Email:</label>
                <input 
                    type="email" 
                    required 
                    value={formData.email} 
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    onBlur={handleEmailBlur}
                />
                <label>Vous êtes employé ?</label>
                <input 
                    type="checkbox" 
                    checked={formData.isEmployer} 
                    onChange={(e) => handleInputChange('isEmployer', e.target.checked)}
                />
                <label>Salaire :</label>
                <select 
                    value={formData.salaire} 
                    onChange={(e) => handleInputChange('salaire', e.target.value)}
                >
                    <option value="1000">1000Dt</option>
                    <option value="2000">2000Dt</option>
                </select>
                <input 
                    type="submit" 
                    value="Envoyer" 
                    disabled={btnIsDisabled} 
                    onClick={handleSubmit} 
                />
            </form>
            <Modal isVisible={showModal} errorMsg={errorMsg} />
        </div>
    )
}
