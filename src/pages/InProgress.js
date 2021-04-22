const InProgress = () => (
  <>
    <header>
      <nav role="navigation">
        <div className="main-logo">
          <a href="../">
            <img src="./multimedia/img/logo/whril-logo.png" alt="" />
          </a>
        </div>
      </nav>
    </header>

    <main>
      <section className="__first-index-section">
        <div className="__left-sub-section">
          <p>
            Hey, we are still building
            our product but you can
            sign up early below.
          </p>
        </div>
      </section>

      <section className="__second-index-section">
        <div className="form" name="contact" method="POST" data-netlify="true">

          <div className="border-top" />

          <form action="">
            <label htmlFor="email">
              <p>
                What is your email?
                <sup>1</sup>
              </p>
              <input type="email" id="email" />
            </label>

            <label htmlFor="vender-select">
              <p>
                Who are you?
              </p>
              <select name="" id="vender-select">
                <option value="ad-vendor">
                  Someone with products to advertise
                </option>
                <option value="creator">
                  Someone who creates content
                </option>
              </select>
            </label>
          </form>

          <div className="terms">
            <button type="button" onClick="window.location.href='../';">
              <div className="glow-on-hover">
                Sign Up
              </div>
            </button>
          </div>
        </div>
      </section>

      <section className="__third-index-section">
        <div className="__center-section">
          <div className="border-top" />
          <p>
            Ads everyone can enjoy.
          </p>
          <video controls src="./multimedia/vid/y2mate.com - A 500 ad_1080p.mp4">
            <track src="" kind="captions" srcLang="en" label="english_captions" />
          </video>
        </div>
      </section>

      <section className="__last-section-terms">
        <div className="terms">
          <div className="border-top" />
          <p>
            <sup>1</sup>
            By clicking on sign up you agree to Whril
            <a href="../legal/terms-and-conditions/legal.html">Terms and Conditions of Use</a>
            .
          </p>
          <p>
            <sup>1</sup>
            {' '}
            To learn more about how Whril collects, uses,
            shares and protects your personal data please read
            Whril
            <a href="../legal/privacy-policy/privacy-policy.html">Privacy Policy</a>
            .
          </p>
        </div>
      </section>
    </main>

    <footer className="__footer">
      <div className="__center-sub-section">
        <div className="category__options">
          <a href="../" className="category">
            <img src="./multimedia/img/icons/footer/__marketplace-logo.png" alt="" />
            <h1>
              Home
            </h1>
          </a>
          <a href="../jobs.html" className="category">
            <img src="./multimedia/img/icons/footer/__job-logo.png" alt="" />
            <h1>
              Jobs
            </h1>
          </a>
          <a href="../legal/terms-and-conditions/legal.html" className="category">
            <img src="./multimedia/img/icons/footer/__terms-logo.png" alt="" />
            <h1>
              Terms
            </h1>
          </a>
          <a href="../legal/privacy-policy/privacy-policy.html" className="category">
            <img src="./multimedia/img/icons/footer/__privacy-logo.png" alt="" />
            <h1>
              Privacy
            </h1>
          </a>
          <a href="../legal/cookie-notice/cookies.html" className="category">
            <img src="./multimedia/img/icons/footer/__cookies-logo.png" alt="" />
            <h1>
              Cookies
            </h1>
          </a>
        </div>
      </div>
    </footer>
  </>
);

export default InProgress;
