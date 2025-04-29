import './Services_Style.css';
import Footer from '../Footer';
import Header from '../Header';
import Services_list from '../Backend/Services_list';

function Services() {
    return (
        <div className="page">
            <section className="services-section">
                <h1 className="title">Our Services</h1>
                <p className='text'> 
                    At IT Solutions, we've designed services to address all issues,
                    <br />
                    providing reliable, scalable, and secure IT solutions tailored to your business needs.
                </p>

                 

                <button style={{ marginBottom: '40%' }}>Let's Talk</button>

                <p className='text'>Tailor-made services for all your business needs</p>

                <Services_list />
                <img></img>
            </section>
            <div className="End-Page">
              {/* <p className='text'>Ready to Transform Your IT Infrastructure?</p> */}
              <h1 className="title">Ready to Transform Your IT Infrastructure?</h1>
              <button>Let's Talk</button>

            </div>

            

            <Footer />
        </div>
    );
};

export default Services;