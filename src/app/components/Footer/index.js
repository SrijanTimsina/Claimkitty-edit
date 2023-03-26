import './style.css';
import Logo from './Logo.png';
export function Footer() {
  return (
    <>
      <footer className="main-footer">
        <div className="footer-content wrapper">
          <div className="footer-main">
            <img src={Logo} alt="ClaimKitty" />
            <p>
              <p>All rights are reserved.</p>
              <a target="_blank" href="https://app.claimkitty.com/">
                ClaimKitty.com
              </a>
              &copy;
              {new Date().getFullYear()}.
            </p>
            <p>
              <a target="_blank" href="http://terms.claimkitty.com/">
                Terms & Conditions
              </a>
            </p>
          </div>
          <div className="sitemap">
            <h3>Sitemap</h3>
            <a target="_blank" href="https://app.claimkitty.com/app">
              Create Airdrop
            </a>
            <a target="_blank" href="https://app.claimkitty.com/user">
              Claim Airdrop
            </a>
            <a target="_blank" href="https://app.claimkitty.com/minting">
              Mint NFT
            </a>
            <a target="_blank" href="https://app.claimkitty.com/minting">
              Claim NFT
            </a>
          </div>
          <div className="social-links">
            <h3>Social Links</h3>
            <a target="_blank" href="https://twitter.com/ClaimKitty">
              Twitter
            </a>
            <a target="_blank" href="https://discord.gg/7x9U8YUa">
              Discord
            </a>
            <a target="_blank" href="forum.claimkitty.com">
              Forum
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
