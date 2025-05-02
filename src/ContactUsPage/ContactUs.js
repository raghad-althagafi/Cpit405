import './ContactUs_Style.css';
import { useRef } from 'react';


function ContactUs() {
    const formRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your message! We will get back to you soon.");
        formRef.current.reset();
    };

    return (
        <div className="page">
            <section className="contact-section">
                <h1 className="title">Get In Touch</h1>
                <p className='text'>
                    Contact us via the form below or call at 055555555. Whether you need network management, 
                    secure cloud hosting, or custom application development, our team is here to help
                </p>

                <div className="contact-form-container">
                    <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
                        <input type="text" placeholder="How can we help you?" className="form-input" />
                        <div className="form-row">
                            <input type="text" placeholder="First Name" className="form-input" />
                            <input type="text" placeholder="Last Name" className="form-input" />
                        </div>
                        <div className="form-row">
                            <input type="text" placeholder="Company Name" className="form-input" />
                            <input type="email" placeholder="Company Email" className="form-input" />
                        </div>
                        <input type="text" placeholder="Phone Number" className="form-input" />
                        <input type="text" placeholder="Message" className="form-input" />
                        <div className="checkbox-row">
                            <label>
                                <input type="checkbox" /> I consent to receive related messages about services, account verification, and any request information from IT Solutions and agree to the privacy policy.
                            </label>
                        </div>
                        <div className="checkbox-row">
                            <label>
                                <input type="checkbox" /> I agree to receive emails and other details from IT Solutions.
                            </label>
                        </div>
                        <button type="submit" className="Button" style={{ marginBottom: '40%' }}>Send Contact Request</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default ContactUs;