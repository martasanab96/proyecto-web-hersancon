import React from 'react'
import { useLocation } from 'react-router-dom'
import { useCookies } from 'react-cookie';
import {useState} from 'react'
import '../assets/PedirPresupuesto.css';
import {Link } from 'react-router-dom';



function PedirPresupuesto() {

    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        email: '',
        tamano_vivienda: '',
        mensaje: '',
    });

    const [formSent, setFormSent] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Después de enviar el formulario, muestra el mensaje y restablece los campos
        console.log('aquiii')
        setMessage('Formulario enviado con éxito. Nos pondremos en contacto con usted en las próximas 24h.');
        setFormSent(true);

        // Restablece los campos a sus valores iniciales
        setFormData({
            nombre: '',
            telefono: '',
            email: '',
            tamano_vivienda: '',
            mensaje: '',
        });
    };

    const backProducts = () => {
		console.log("Volviendo a home...")

	}

    const validatePhoneNumber = (e) => {
        const pattern = /^[0-9\b]+$/; // Expresión regular para números
        const inputChar = String.fromCharCode(e.charCode);
    
        if (!pattern.test(inputChar)) {
            e.preventDefault();
        }
    };
    
    return (
        <div>

            <Link to={'/Servicios'}>
                <span className="back_home" onClick={backProducts}>Volver a servicios</span>
            </Link>
            <div className="title-description-presupuesto">Pide presupuesto</div>

            <div className="et_pb_module et_pb_text et_pb_text_39  et_pb_text_align_left et_pb_bg_layout_light">
                <div className="et_pb_text_inner">
                {formSent ? (
                        <p className="message">{message}</p>
                    ) : (
                        <p>Hablanos de tu proyecto, consulta sin compromiso. Un agente se pondrá en contacto contigo.
                            <span>También puedes llamarnos al&nbsp;</span>
                            <strong>+34608925144 / +34670791908</strong>
                            <span> o escribirnos a&nbsp;</span>
                            <strong>info@hersancon.com</strong>
                            <span>.</span>

                        </p>
                    )}

                </div>
            </div>

            <div className="et_pb_contact">
                <form className="et_pb_contact_form clearfix" onSubmit={handleSubmit}>
                    <p className="et_pb_contact_field et_pb_contact_field_4 et_pb_text_align_left et_pb_contact_field_half">
                        <label htmlFor="et_pb_contact_nombre_1" className="et_pb_contact_form_label">Nombre:</label>
                        <input
                            type="text"
                            id="et_pb_contact_nombre_1"
                            className="input"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                            placeholder="Nombre"
                        />
                    </p>
                    <p className="et_pb_contact_field et_pb_contact_field_4 et_pb_text_align_left et_pb_contact_field_half">
                        <label htmlFor="et_pb_contact_telefono_1" className="et_pb_contact_form_label">Teléfono:</label>
                        <input
                            type="text"
                            id="et_pb_contact_telefono_1"
                            className="input"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            onKeyPress={validatePhoneNumber}
                            required
                            placeholder="Teléfono"
                        />
                    </p>
                    <p className="et_pb_contact_field et_pb_contact_field_4 et_pb_text_align_left et_pb_contact_field_half">
                        <label htmlFor="et_pb_contact_tamano_1" className="et_pb_contact_form_label">Tamaño de la vivienda:</label>
                        <input
                            type="text"
                            id="et_pb_contact_tamano_1"
                            className="input"
                            name="tamano_vivienda"
                            value={formData.tamano_vivienda}
                            onChange={handleChange}
                            required
                            placeholder="Tamaño de la vivienda"
                        />
                    </p>
                    <p className="et_pb_contact_field et_pb_contact_field_4 et_pb_text_align_left et_pb_contact_field_half">
                        <label htmlFor="et_pb_contact_mensaje_1" className="et_pb_contact_form_label">Mensaje:</label>
                        <textarea
                            type="text"
                            id="et_pb_contact_mensaje_1"
                            className="input"
                            name="mensaje"
                            value={formData.mensaje}
                            onChange={handleChange}
                            required
                            placeholder="Qué tipo de vivienda es, qué necesidades tiene, dudas..."
                        />
                    </p>
                    <div className="et_contact_bottom_container">
                        <button type="submit" className="et_pb_contact_submit et_pb_button">
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default PedirPresupuesto
