import './Services_Style.css';
import Footer from '../Footer';
import Header from '../Header';
import Services_list from '../Backend/Services_list';
import Button from '../Button';

function Services() {
    return (
        <div className="page">
            
            <div className="services-section">
                <h1 className="title">Our Services</h1>
                <p className='text'> 
                    At IT Solutions, we've designed services to address all issues,
                    <br />
                    providing reliable, scalable, and secure IT solutions tailored to your business needs.
                </p>

                 

                <Button  Link = '/ContactUs' name = "Let's Talk!" style={{ marginBottom: '40%' }}/>

                <p className='text'>Tailor-made services for all your business needs</p>

                <Services_list />
            </div>
            <div className="End-Page">
              <h1 className="title">Ready to Transform Your IT Infrastructure?</h1>
              <Button  Link = '/ContactUs' name = "Let's Talk!"/>

            </div>

            
        </div>
    );
};

export default Services;