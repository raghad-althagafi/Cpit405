import HomePageImage from './HomePageImage.jpg'
import Half_Left_Gradientgeometricwallpaperwithdifferentshapes from './Half_Left_Gradient geometric wallpaper with different shapes.jpg'
import './HomePageContent_Style.css';
import '../Header_Style.css'
import Button from '../Button';

function HomePage_Content() { 
  return (
    <>
    <div className="Header_Image">
    <img src={HomePageImage} alt="HomePage Image" width={10000}/> 
    <h1 className="Banner">
        Discover <br/>
        real-world <br/>
        IT Solutions <br/>
      </h1>
      </div>
<div className="Headercontainer">
  <div className="C_left">
    <img src={Half_Left_Gradientgeometricwallpaperwithdifferentshapes} alt="Colorful blobs" />
  </div>
  <div className="C_right">
    <p>
      Overcoming IT roadblocks to drive continuous progress, ensuring your business stays
      <strong> agile</strong> and <strong>ready</strong> for what’s next—because the story of IT Solutions is one of growth and evolving potential.
    </p>
    <Button  Link = "#" name = "Let's Talk!"/>
  </div>
</div>
<div className="ColorfulBannerImage">
<h2 className="ServicesContentContainer" >At IT Solutions, we’ve designed services
   to address all issues, providing reliable, scalable, and secure IT
  solutions tailored to your business needs.</h2>
  
  <Button  Link = "#" name = "Go to Services"/>
</div> 
    </>
  );
}

export default HomePage_Content;