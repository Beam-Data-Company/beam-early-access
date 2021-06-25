import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Beam Data Early Access</title>
        {/* <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <div id="mc_embed_signup">
        <form
          action="https://beamdata.us18.list-manage.com/subscribe/post?u=dd1cb031b5967b36e210f451b&amp;id=081fc3dcb3"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <div>
              <input type="email" value="" name="EMAIL" id="mce-EMAIL" />
            </div>

            <div id="mce-responses">
              <div id="mce-error-response" style={{ display: 'none' }}></div>
              <div id="mce-success-response" style={{ display: 'none' }}></div>
            </div>

            <div
              style={{ position: 'absolute', left: '-5000px' }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_dd1cb031b5967b36e210f451b_081fc3dcb3"
                tabIndex={-1}
                value=""
              />
            </div>

            <div>
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
              />
            </div>
          </div>
        </form>
      </div>

      {/* <script
        type="text/javascript"
        src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
      ></script> */}

      <div className={styles.header}>Beam</div>

      <div className={styles.main}>
        <div className={styles.title}>Get early access for Enterprise</div>
        <div>
          <form>
            <input
              type="email"
              placeholder="Your work email address"
              className={styles.input}
            />
            <button className={styles.button}>Get Access</button>
          </form>
        </div>
      </div>
    </div>
  )
}
