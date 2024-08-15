import { IoLogoFacebook } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";

export const Footer = () => {
  return (
    <div>
      <div>
        <div className="footer-bottom-wrap">
          {/* FOOTER BOTTOM */}
          <div className="footer-bottom container max-w-screen-xl">
            <p className="footer-bottom-text">
              <span className="brand">
                <span className="highlighted">Game Duel</span>
              </span>
              <span className="separator"> | </span>All Rights Reserved 2024
            </p>
            <div className="social-links">
              {/* BUBBLE ORNAMENT */}
              <a href="#" className="bubble-ornament fb">
                {/* FACEBOOK ICON */}
                <IoLogoFacebook className="facebook-icon" />
                {/* /FACEBOOK ICON */}
              </a>

              <a href="#" className="bubble-ornament twt">
                {/* TWITTER ICON */}
                <IoLogoTwitter className="twitter-icon" />
                {/* /TWITTER ICON */}
              </a>

              <a href="#" className="bubble-ornament insta">
                {/* INSTAGRAM ICON */}
                <IoLogoInstagram className="instagram-icon" />
                {/* /INSTAGRAM ICON */}
              </a>
            </div>
          </div>
        </div>
        {/* /FOOTER BOTTOM WRAP */}
      </div>
    </div>
  );
};
