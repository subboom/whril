import { useState } from 'react';

const InProgress = () => {
  const [userType, setUserType] = useState('company');
  const [formSent, setFormSent] = useState(false);

  const submitForm = () => {
    const url = 'https://whirl-back.herokuapp.com/polls/update';
    fetch(url, {
      method: 'PATCH',
      body: JSON.stringify({
        poll: {
          type: userType,
        },
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    setFormSent(true);
  };

  return (
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
              {" Hey, we're still building our product but you can help us by filling out the survey below! "}
            </p>
          </div>
        </section>

        <section className="__second-index-section">
          <div className="form" name="contact" method="POST" data-netlify="true">
            <div className="border-top" />
            {formSent === true
              ? <><h1 style={{ alignSelf: 'center' }}>Thank You!</h1></> : (
                <form action="">
                  <label htmlFor="user-type">
                    <p>
                      Who are you?
                    </p>
                    <select name="" id="user-type" onChange={(e) => setUserType(e.target.value)}>
                      <option value="company">
                        Someone with products to advertise
                      </option>
                      <option value="influencer">
                        Someone who creates content
                      </option>
                    </select>
                  </label>

                  <div className="terms">
                    <button type="button" onClick={submitForm}>
                      <div className="glow-on-hover">
                        Share Info
                      </div>
                    </button>
                  </div>
                </form>
              )}
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
              {" By clicking on sign up you agree to Whril's "}
              <a href="../legal/terms-and-conditions/legal.html">Terms and Conditions of Use</a>
              .
            </p>
            <p>
              <sup>1</sup>
              {" To learn more about how Whril collects, uses, shares and protects your personal data please read Whril's "}
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
};

export default InProgress;
