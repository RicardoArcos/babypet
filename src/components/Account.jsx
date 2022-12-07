import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { db } from '../firebase/firebase-config';
import { getAuth, updateEmail } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useState } from 'react';

export const Account = () => {

    const [userData, setUserData] = useState({
        names: '',
        lastName: '',
        email: '',
        phoneNumber: ''
    });

    const [isDisabled, setIsDisabled] = useState(true);

    const [valName, setValName] = useState(true);
    const [valLastName, setValLastName] = useState(true);
    const [valEmail, setValEmail] = useState(true);
    const [valPhone, setValPhone] = useState(true);

    const auth = getAuth();
    const { uid } = auth.currentUser;
    
    const handleClick = () => {
        setIsDisabled(!isDisabled);
    }

    const handleInputChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }
    
    const getUserData = async () => {
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            setUserData(data);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }

    const updateData = async (e) => {
        e.preventDefault();

        if (userData.names === '' || userData.names.length < 3) {
            setValName(false);
            return alert("Datos invalidos.")
        } else {
            setValName(true)
        }

        if (userData.lastName === '' || userData.lastName.length < 3) {
            setValLastName(false);
            return alert("Datos invalidos.")
        } else {
            setValLastName(true);
        }

        const emailRegEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        if (!emailRegEx.test(userData.email)) {
            setValEmail(false);
            return alert("Datos invalidos.")
        } else {
            setValEmail(true);
        }

        const phoneRegEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        if (!phoneRegEx.test(userData.phoneNumber)) {
            setValPhone(false);
            return alert("Datos invalidos.")
        } else {
            setValPhone(true);
        }

        const userRef = doc(db, "users", uid);
        await updateDoc(userRef, {
                names: userData.names,
                lastName: userData.lastName,
                email: userData.email,
                phoneNumber: userData.phoneNumber
            });
        updateEmail(auth.currentUser, userData.email).then(() => {
            // Email updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
            console.log(error)
          });
        return alert('Se han actualizado los datos');
    }

    useEffect(() => {
        getUserData();
    }, [])

    return (
        <>
            <div className="container px-4 py-4">
                <h2 className="pb2- border-bottom">Cuenta</h2>
            </div>
            <div className="container my-2" id="div-form">
                <form onSubmit={updateData}>
                    <h4 className="fw-normal mb-3 pb-3">Edite su cuenta</h4>
                    {/* campo de nombre */}
                    <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example1">Nombre(s):</label>
                        <input type="text" name="names" className="form-control " placeholder="Juan" 
                            value={userData.names}
                            disabled={isDisabled} 
                            onChange={handleInputChange} />
                        <div className="val-name" hidden={valName}>
                            <i class="bi bi-exclamation-circle"></i>
                            <small>El nombre no es válido.</small>
                        </div>
                    </div>

                    {/* campo de apellidos*/}
                    <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example1">Apellido(s):</label>
                        <input type="text" name="lastName" className="form-control " placeholder="Pérez"  
                            value={userData.lastName}
                            disabled={isDisabled}
                            onChange={handleInputChange} />
                        <div className="val-name" hidden={valLastName}>
                            <i class="bi bi-exclamation-circle"></i>
                            <small>El apellido no puede quedar vacío.</small>
                        </div>
                    </div>

                    {/* campo de correo */}
                    <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example1">Correo electrónico:</label>
                        <input type="email" name="email" className="form-control " placeholder="correo@mail.com" 
                            value={userData.email}
                            disabled={isDisabled}
                            onChange={handleInputChange} />
                        <div className="val-name" hidden={valEmail}>
                            <i class="bi bi-exclamation-circle"></i>
                            <small>El email no es correcto.</small>
                        </div>
                    </div>

                    {/* campo de numero de telefono */}
                    <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example1">Número de teléfono:</label>
                        <input type="text" name="phoneNumber" className="form-control " placeholder="0123456789"  
                            value={userData.phoneNumber}
                            disabled={isDisabled}
                            onChange={handleInputChange} />
                        <div className="val-name" hidden={valPhone}>
                            <i class="bi bi-exclamation-circle"></i>
                            <small>El número no es correcto.</small>
                        </div>
                    </div>

                    {/* botón */}
                    <div className="text-center my-5" role="group">
                        <button type="submit" className="btn btn-primary mx-5" disabled={isDisabled}>
                            Guardar datos
                        </button>
                        <button className="btn btn-secondary mx-5" type="button" onClick={handleClick}>
                            Cambiar datos
                        </button>
                    </div>

                    <div className="text-center">
                        <p><Link to={"/forgot-password"}>¿Desea actualizar su contraseña?</Link></p>
                    </div>
                </form>
            </div>
        </>
    );
}