import Half_Left_Gradientgeometricwallpaperwithdifferentshapes from './Half_Left_Gradient geometric wallpaper with different shapes.jpg'
import './HomePageContent_Style.css';
import '../Header_Style.css'

function HomePage_Content() { 
  return (
    <>
    <div className="container">
  <div className="left">
  <img className="LetsTalk" src={Half_Left_Gradientgeometricwallpaperwithdifferentshapes} alt='Colorful_blobs_Image'/>
  </div>
  <div className="right">
    <p>
      Overcoming IT roadblocks to drive continuous progress, ensuring your business stays 
      <strong> agile</strong> and <strong>ready</strong> for what’s next—because the story of IT Solutions is one of growth and evolving potential.
    </p>
    <a href="#" className="LetsTalkButton">Let's Talk</a>
  </div>
</div>
<div className="ColorfulBannerImage">
<h2 className="ServicesContentContainer" >At IT Solutions, we’ve designed services
   to address all issues, providing reliable, scalable, and secure IT
  solutions tailored to your business needs.</h2>
  <a href="#" className="LetsTalkButton">Go to Services</a>
</div>
    </>
  );
}

export default HomePage_Content;