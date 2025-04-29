import './Services_Style.css';
import Footer from '../Footer';
import Header from '../Header';
<<<<<<< HEAD
function Services() {
    return (


        <div className="page">

        
      
        
        <section className="services-section">
          <h1 className="main-title">Our Services</h1>
          <p className='intro-text'> At IT Solutions, we've designed services to address all issues,
          <br></br>providing reliable, scalable, and secure IT solutions tailored to your business needs.</p>

          
          <button>Let's Talk</button>
        
      
         
        {/*   <div className="service-box">
            <h2 className="service-title">Service 1</h2>
            <p className="service-desc">وصف الخدمة الأولى.</p>
          </div>
      
          <div className="service-box">
            <h2 className="service-title">Service 2</h2>
            <p className="service-desc">وصف الخدمة الثانية.</p>
          </div>
      
          <div className="service-box">
            <h2 className="service-title">Service 3</h2>
            <p className="service-desc">وصف الخدمة الثالثة.</p>
          </div> */}
      
        </section>
      
      </div>
      
      );
    };
    
=======
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
>>>>>>> 0423d0b5b71ef98240f75558421bd8c7f41d001e

export default Services;