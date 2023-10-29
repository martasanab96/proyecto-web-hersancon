import React from 'react'
import { useLocation } from 'react-router-dom'
import { useCookies } from 'react-cookie';
import * as Icons from "react-icons/fa6";
import * as LuIcons from "react-icons/lu";
import * as GiIcons from "react-icons/gi";
import '../assets/Inicio.css';
import { IconContext } from 'react-icons';


function Inicio() {
    
    return (
        <div class="et_pb_section et_pb_section_1 et_pb_with_background et_section_regular">

				<div class="et_pb_row et_pb_row_1">
				    <div class="et_pb_text_inner"><h2>Instalaciones eléctricas, domótica o montaje de placas fotovoltaicas.</h2></div>
			    </div>
		
                <div class="et_pb_row et_pb_row_1">
				    <div class="et_pb_text_inner"><h1>Toma el control de tu casa</h1></div>
			    </div>

                <div class="icon-container-inicio">

				<div className="contenedor-icono-in">
					<div class="et_pb_main_blurb_image">
                    <IconContext.Provider value={{ size: '7em'  }}>
                        <Icons.FaMobileScreen/>
                    </IconContext.Provider>
                    </div>
					<div className="icons">
						<h4 class="et_pb_module_header"><span>Control remoto desde tu móvil </span></h4>
					</div>
				</div>

				<div className="contenedor-icono-in">
					<div class="et_pb_main_blurb_image">
                    <IconContext.Provider value={{ size: '7em'  }}>
                        <LuIcons.LuRadioTower/>
                    </IconContext.Provider>
                    </div>
					<div className="icons">
						<h4 class="et_pb_module_header"><span>Tecnología innovadora </span></h4>
					</div>
				</div>

				<div className="contenedor-icono-in">
					<div class="et_pb_main_blurb_image">
                    <IconContext.Provider value={{ size: '7em'  }}>
                        <GiIcons.GiAutoRepair/>
                    </IconContext.Provider>
                    </div>
					<div className="icons">
						<h4 class="et_pb_module_header"><span>Automatización y escena </span></h4>
					</div>
				</div>
                
				<div className="contenedor-icono-in">
					<div class="et_pb_main_blurb_image">
                    <IconContext.Provider value={{ size: '7em'  }}>
                        <Icons.FaHelmetSafety/>
                    </IconContext.Provider>
                    </div>
					<div className="icons">
						<h4 class="et_pb_module_header"><span>Profesionales expertos </span></h4>
					</div>
				</div>
                </div>

                    <div className="text-and-image">
                <div className="row">
                <div className="col-md-6 text">
                        <div  class="et_pb_module et_pb_text et_pb_text_18  et_pb_text_align_left ">
                            <div class="et_pb_text_inner"><h3><strong>Domótica</strong></h3>
                
                            <div class="et_pb_text_inner"><strong>Control remoto con una única aplicación.</strong></div>
                            <p><span>Ofrecemos un sistema basado en el IoT que aporta un valor añadido a tus establecimientos convirtiéndolos en espacios inteligentes que podrás controlar desde tu smartphone gracias a nuestro sistema de domótica. Este sistema está formado por productos inteligentes de la marca Si Smart, todos ellos compatibles con la App gratuita Smart Life. Crearemos automatizaciones y vincularemos tu asistente de voz favorito para que puedas controlar tus espacios inteligentes con la voz.</span></p></div>
                        </div></div>

                    <div className="col-md-6 imagen">
                    <span class="et_pb_image_wrap " >
                        <img decoding="async" loading="lazy" width="900" height="600" src="https://images.squarespace-cdn.com/content/v1/555111dce4b0e71274cbe0e9/1604948553656-CKS1V3M3PCWADR3QG230/Dom%C3%B3tica+para+eficiencia_2.jpg"/>
                    </span></div></div></div>

                    
                <div className="text-and-image">
                <div className="row">
                    
                    <div className="col-md-6 imagen">
                    <span class="et_pb_image_wrap " >
                        <img decoding="async" loading="lazy" width="900" height="600" src="https://www.electricidadgmg.com/wp-content/uploads/2016/08/montaje-de-instalaciones-electricas-bilbao.jpg"/>
                    </span></div>
                    
                    <div className="col-md-6 text">
                        <div  class="et_pb_module et_pb_text et_pb_text_18  et_pb_text_align_left ">
                            <div class="et_pb_text_inner"><h3><strong>Instalaciones eléctricas</strong></h3>
                
                            <div class="et_pb_text_inner"><strong>Instala y repara</strong></div>
                            <p><span>Somos especialistas en reformas eléctricas, ajustando las instalaciones antiguas al reglamento de baja tensión, al mismo tiempo que nos cercioramos de la seguridad de las mismas. Desde instalación hasta reparación y mantenimiento de instalaciones eléctricas tanto de domicilios pariculares como de negocios..</span></p></div>
                        </div></div>
                    </div></div>


                <div className="text-and-image">
                <div className="row">
                <div className="col-md-6 text">
                        <div  class="et_pb_module et_pb_text et_pb_text_18  et_pb_text_align_left ">
                            <div class="et_pb_text_inner"><h3><strong>Productos</strong></h3>
                
                            <div class="et_pb_text_inner"><strong>Contrólalos desde la App y por voz con Alexa o Google Home.</strong></div>
                            <p><span>Ofrecemos también una tienda de productos para aquellos con suficiente valentía para instalarlo ellos mismos. Tienes gran variedad de opciones, desde enchufes, bombillas y regletas hasta interruptores, persianas y alarmas.</span></p></div>
                        </div></div>

                    <div className="col-md-6 imagen">
                    <span class="et_pb_image_wrap " >
                        <img decoding="async" loading="lazy" width="900" height="600" src="https://i.blogs.es/a36614/bombillas/1366_2000.jpg"/>
                    </span></div></div></div>

                    <div className="text-and-image">
                <div className="row">
                    
                    <div className="col-md-6 imagen">
                    <span class="et_pb_image_wrap " >
                        <img decoding="async" loading="lazy" width="900" height="600" src="https://smartspain.es/wp-content/uploads/2022/09/aerial-view-of-private-house-with-solar-panels-on-the-roof-2.jpg"/>
                    </span></div>
                    
                    <div className="col-md-6 text">
                        <div  class="et_pb_module et_pb_text et_pb_text_18  et_pb_text_align_left ">
                            <div class="et_pb_text_inner"><h3><strong>Placas solares</strong></h3>
                
                            <div class="et_pb_text_inner"><strong>Diseño según tus necesidades</strong></div>
                            <p><span>¿Quieres instalar placas solares para casa? Descubre nuestra gama de productos y encuentra el kit solar que más se adapta a tus necesidades. Si necesitas cualquier ayuda con tu instalación placas solares no dudes en contactarnos. Nuestros profesionales se pueden encargar de la instalación de un kit placas solares para casa. No dudes en pedir tu presupuesto para un sistema con placas solares sin compromiso. Anímate a instalar placas solares al mejor precio.</span></p></div>
                        </div></div>
                    </div></div>
                

                </div>
				
			
        
    )
}

export default Inicio