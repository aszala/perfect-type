<script>
  import { CONTACT_URL } from '../lib/config.js';
</script>

<header class="page-header">
  <h1>privacy policy</h1>
  <p>last updated october 18, 2026</p>
</header>

<article class="prose">
  <p>
    this page explains what perfect type (perfect-type.com) collects, why, and what you can do about it. you can
    play without an account, and we never sell your personal information.
  </p>

  <h2>if you create an account</h2>
  <ul>
    <li>
      <strong>your email address and password</strong> are handled by Firebase Authentication, a Google service.
      we use your email to log you in, verify your account and send password resets. we never see your password.
    </li>
    <li>
      <strong>your username, avatar and stats</strong> (games played and won, average and best words per minute)
      are stored in Google Cloud Firestore.
    </li>
    <li>
      <strong>leaderboard entries</strong> show your username, avatar, best score and the date you set it. these
      are public.
    </li>
  </ul>

  <h2>advertising</h2>
  <p>
    perfect type is free because it shows ads from Google AdSense. Google and its partners use cookies to serve
    ads based on your visits to this and other websites. you can turn off personalized ads in
    <a href="https://adssettings.google.com" target="_blank" rel="noopener">Google's ad settings</a>, and learn
    more in
    <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener"
      >how Google uses information from sites that use its services</a
    >. visitors in the EEA, the UK and Switzerland are asked for consent before personalized ads are shown.
  </p>

  <h2>analytics</h2>
  <p>
    we use Google Analytics to count visits and see how the game is played, for example which modes are popular.
    it uses cookies and collects information such as your device type, browser and approximate location.
  </p>

  <h2>security</h2>
  <p>
    Google reCAPTCHA checks that requests come from the real site, not from scripts. its use is subject to
    Google's <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">privacy policy</a> and
    <a href="https://policies.google.com/terms" target="_blank" rel="noopener">terms of service</a>. we also
    record the timing of your key presses during a game, in your browser only, to spot automated runs. the
    timings themselves are never uploaded.
  </p>

  <h2>stored on your device</h2>
  <p>your browser remembers your last game mode and keeps you logged in.</p>

  <h2>deleting your data</h2>
  <p>
    you can delete your account at any time from your <a href="/profile">profile</a>. this permanently removes
    your login, stats and leaderboard entries.
  </p>

  <h2>children</h2>
  <p>perfect type isn't directed at children under 13, and we don't knowingly collect their information.</p>

  <h2>changes and contact</h2>
  <p>
    if this policy changes, we'll update the date at the top. questions? reach us through
    <a href={CONTACT_URL} target="_blank" rel="noopener">our github page</a>.
  </p>
</article>
