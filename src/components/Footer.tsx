import Bluesky from "./Bluesky";
import Twitter from "./Twitter";
import Linkedin from "./Linkedin";
import Github from "./Github";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container">
      <footer>
        <p>
          <span>&copy;{currentYear}</span>
          <a target="_blank" rel="noopener noreferrer" href="https://aprilcopley.netlify.app">April Copley</a>
        </p>
        <div className="social__links">
          <a target="_blank" rel="noopener noreferrer" href="https://bsky.app/profile/acopperlily.bsky.social"><Bluesky /></a>
          <a target="_blank" rel="noopener noreferrer" href="https://x.com/acopperlily"><Twitter /></a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/april-copley"><Linkedin/></a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/acopperlily"><Github/></a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
