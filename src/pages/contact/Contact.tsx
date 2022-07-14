import { useState } from 'react';
import { compileAsync } from 'sass';
import './index.scss'

export function Contact() {
    const  [text, setText] = useState('');

    async function copy(str: string) {
        await navigator.clipboard.writeText(str);
    }

    return (
        <div className="contact">
            <div className='form-container'>
                <span className='text-main'>Lets's be working partners? </span>
                <span className='text-description'>I'm interested in opportunities, especially those with great profissional propercts. So, please, any question fell free to contact me. </span>
                <form action="https://formsubmit.co/danielduarte.tech@protonmail.com" method="POST">
                    <input type="hidden" name="_next" value="http://localhost:3000/" />

                    <input className='email-input' type="email" name="email" placeholder='Email' autoComplete='off' required />
                    <input className='name-input' type="text" name="name" placeholder='Name' autoComplete='off' required />
                    <input className='subject-input' type="text" name="subject" placeholder='Subject' autoComplete='off' required />
                    <textarea name="Message" placeholder='Message' autoComplete='off' required />
                    <button type="submit">Send</button>
                </form>
            </div>
            <div id="map">
                <div className='map-container'>
                <span className='adress-copy'>Belém, State of Pará - BR</span>
                <a className="redirect-map" href='https://www.google.com/maps/@-1.4599722,-48.4908691,6z' target="_blank">
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 484.457 484.457" xmlSpace="preserve">
                        <g>
	                        <path d="M447.112,37.345C423.031,13.263,391.012,0,356.957,0c-34.057,0-66.075,13.263-90.156,37.345L166.215,137.931l21.213,21.213
                            L288.013,58.558C306.428,40.143,330.913,30,356.957,30c26.043,0,50.527,10.143,68.942,28.558s28.558,42.899,28.558,68.942
		                    c0,26.044-10.143,50.528-28.558,68.943L325.313,297.029l21.213,21.213l100.586-100.586c24.082-24.081,37.345-56.1,37.345-90.156
		                    S471.194,61.426,447.112,37.345z"/>
	                        <path d="M196.443,425.899c-18.415,18.415-42.899,28.558-68.942,28.558s-50.527-10.143-68.943-28.558
		                    C40.142,407.484,30,383,30,356.957c0-26.044,10.142-50.528,28.557-68.943l100.586-100.586l-21.213-21.213L37.344,266.801
		                    C13.263,290.882,0,322.9,0,356.957c0,34.056,13.263,66.074,37.344,90.155c24.082,24.082,56.1,37.345,90.156,37.345
		                    s66.075-13.263,90.156-37.345l100.586-100.586l-21.213-21.213L196.443,425.899z"/>
	                        <path d="M321.688,141.552l21.213,21.213L162.768,342.898l-21.213-21.213L321.688,141.552z"/>
                        </g>
                    </svg>
                </a>
                <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16318114.47700193!2d-57.109252977854815!3d-3.1172745325950837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a46669f5986e5f%3A0xe336db2d6ab189cc!2sBel%C3%A9m%20-%20PA!5e0!3m2!1spt-BR!2sbr!4v1657311961850!5m2!1spt-BR!2sbr" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                
                <span className='email-copy'>danielduarte.tech@protonmail.com</span>
                <button className='copy-button' onClick={()=>{copy('danielduarte.tech@protonmail.com')}}>
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 460 460" xmlSpace="preserve">
                        <g>
                        	<g>
                        		<g>
                        			<path d="M425.934,0H171.662c-18.122,0-32.864,14.743-32.864,32.864v77.134h30V32.864c0-1.579,1.285-2.864,2.864-2.864h254.272
                        				c1.579,0,2.864,1.285,2.864,2.864v254.272c0,1.58-1.285,2.865-2.864,2.865h-74.729v30h74.729
                        				c18.121,0,32.864-14.743,32.864-32.865V32.864C458.797,14.743,444.055,0,425.934,0z"/>
                        			<path d="M288.339,139.998H34.068c-18.122,0-32.865,14.743-32.865,32.865v254.272C1.204,445.257,15.946,460,34.068,460h254.272
                        				c18.122,0,32.865-14.743,32.865-32.864V172.863C321.206,154.741,306.461,139.998,288.339,139.998z M288.341,430H34.068
                        				c-1.58,0-2.865-1.285-2.865-2.864V172.863c0-1.58,1.285-2.865,2.865-2.865h254.272c1.58,0,2.865,1.285,2.865,2.865v254.273h0.001
                        				C291.206,428.715,289.92,430,288.341,430z"/>
                        		</g>
                        	</g>
                        </g>
                    </svg>
                </button>

                <span className='website-copy'>danielduarte.dev</span>
                <button className='copy-button' onClick={()=>{copy('https://danielduarte.dev')}}>
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 460 460" xmlSpace="preserve">
                    <g>
                    	<g>
                    		<g>
                    			<path d="M425.934,0H171.662c-18.122,0-32.864,14.743-32.864,32.864v77.134h30V32.864c0-1.579,1.285-2.864,2.864-2.864h254.272
                    				c1.579,0,2.864,1.285,2.864,2.864v254.272c0,1.58-1.285,2.865-2.864,2.865h-74.729v30h74.729
                    				c18.121,0,32.864-14.743,32.864-32.865V32.864C458.797,14.743,444.055,0,425.934,0z"/>
                    			<path d="M288.339,139.998H34.068c-18.122,0-32.865,14.743-32.865,32.865v254.272C1.204,445.257,15.946,460,34.068,460h254.272
                    				c18.122,0,32.865-14.743,32.865-32.864V172.863C321.206,154.741,306.461,139.998,288.339,139.998z M288.341,430H34.068
                    				c-1.58,0-2.865-1.285-2.865-2.864V172.863c0-1.58,1.285-2.865,2.865-2.865h254.272c1.58,0,2.865,1.285,2.865,2.865v254.273h0.001
                    				C291.206,428.715,289.92,430,288.341,430z"/>
                    		</g>
                    	</g>
                    </g>
                </svg>
                </button>
                
                <button className='cv-download'>Download CV</button>
                </div>
            </div>
        </div>
    );
}