import linkedInIcon from '../assets/linkedin-rounded.png';
import gitHubIcon from '../assets/github-rounded.png';

export default function Footer() {
    return (
      <div className="footer">
        <a href="https://github.com/Arc4d3-G" target="_blank"><img src={gitHubIcon} /></a>
        <a href="https://www.linkedin.com/in/dewald-breed-a2297a272/" target="_blank"><img src={linkedInIcon} /></a>
      </div>
    )
  }
