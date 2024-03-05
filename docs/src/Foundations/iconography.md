<link rel="stylesheet" type="text/css" media="all" href="/vitepress-poc/fonts/pricons.css" />

<style>
  #pricons.grid-container {
    background-color: white;
    border: thin solid var(--v-grey200-base);
    display: inline-grid;
    grid-template-columns: auto auto auto auto;
    gap: 0;
    margin: 0 0 20px;
    width: 100%;
  }
  #pricons.grid-container .grid-item {
    margin: 16px 0;
    padding: 0;
    text-align: center;
    width: 190px;
  }
  #pricons.grid-container .grid-item  DIV.pricons-desc {
    font-size: 14px;
  }
  [class^="PRIcons-"], [class*="PRIcons-"] {
    font-size: 32px;
  }
  .dark #pricons.grid-container {
    background-color: transparent;
    border: thin solid var(--v-grey800-base);
  }
  @media screen and (min-width: 551px) and (max-width: 1155px) {
    #pricons.grid-container {
      grid-template-columns: auto auto;
    }
  }
</style>

# Iconography

## Meaning and Message

When applied consistently, icons give clarity to navigation or messaging components. An Icon should never be used solely as a decoration and should correspond to an action. The PRIcons and Material Icons are fonts that contain symbols and glyphs instead of letters or numbers. Also, since the icons are part of a font, customization is easy with CSS. The icon used should be close, literal, and visual representation. Abstract use of icons should be avoided to lessen confusion by a user.

Icons are divided into two groups:

<ol>
  <li>Decorative - Icons used to enhance the understanding of a text element through visual representation.</li>
  <li>
    <p>Interactive - Icons that are used as the sole element to complete an action or initiate a change. They do not appear in conjunction with text or any other element. When interactive icons are in an active state (i.e being clicked or tapped), they have a shadow behind them and slight change on color.</p>
    <img src="/assets/images/Icons-states.png" alt="Interactive icons states" class="image-border" />
  </li>
</ol>

## Material Design Icons

<p>OneX Design System uses <strong><a href="https://materialdesignicons.com/" target="_blank">Material Design Icons</a></strong> or also known as <strong><a href="https://fonts.google.com/icons" target="_blank">Google's Material Symbols</a></strong> in Primerica digital products. When icons are used in context of specific component or patterns, specs will be provided for those scenarios.</p>

### Rules

<ul>
  <li>Filled icons will be used by default on sizes from 40 px size and under, as they provide quicker scannability.</li>
  <li>
    <p>Outlined icons could be use are on sizes from 40 px and up, as they will be mainly decorative icons.</p>
    <img src="/assets/images/Icons-Sizing.png" alt="Icons sizing" class="image-border" />
  </li>
  <li>
    <p>Occasionally, outlined icons might be used as the default (40 px or less) state if the purpose of the icon is to visually mark or communicate a permanent state change, even after the user is done interacting with that icon. Examples include, ‘Bookmarked” pages, “Like” or “ Dislike” Icons. These remain filled after the user the has already interacted with them, and they are used as a visual marker.</p>
    <img src="/assets/images/Permanent-State-Change-Icons.png" alt="Permanent state change icons" class="image-border" />
  </li>
</ul>

## PRIcons

PRIcons are icons designed specifically for Primerica products. The use of PRIcons will be dictated by individual products and should only be used within the products they are intended.

<div id="pricons" class="grid-container">
  <div class="grid-item">
    <i class="PRIcons-cal-edit"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-cal-edit</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-apps"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-apps</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-Okta"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-Okta</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-Prospects_Icon"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-Prospects_Icon</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-engage-90"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-engage-90</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-on-demand"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-on-demand</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-securities-licensing"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-securities-licensing</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-excel"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-excel</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-Signature"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-Signature</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-schedule"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-schedule</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-History"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-History</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-RegisterDownlines"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-RegisterDownlines</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-SearchDownlines"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-SearchDownlines</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-POL"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-POL</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-senior-healthcare"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-senior-healthcare</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-LifeLicensingGuide"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-LifeLicensingGuide</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-Sprinklr_Icon"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-Sprinklr_Icon</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-call-split"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-call-split</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-local-library"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-local-library</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-filter-list"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-filter-list</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-megaphone"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-megaphone</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-icon-globe"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-icon-globe</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-ftb-menu"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-ftb-menu</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-promoIcon"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-promoIcon</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-graduation-cap"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-graduation-cap</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-temp-license"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-temp-license</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-email"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-email</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-ftb-collect"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-ftb-collect</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-ftb-licensing"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-ftb-licensing</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-Payment-Ctr"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-Payment-Ctr</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-coc"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-coc</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-feedback-help"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-feedback-help</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-support-feedback"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-support-feedback</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-fast-start-bonus"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-fast-start-bonus</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-license-path"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-license-path</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-new-rep-reward"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-new-rep-reward</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-pfn"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-pfn</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-circle-full"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-circle-full</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-delete-content-for-rep"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-delete-content-for-rep</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-life-license"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-life-license</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-my-contacts"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-my-contacts</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-pass-now"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-pass-now</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-calendar1"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-calendar1</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-add-licensing-contact"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-add-licensing-contact</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-my-activity"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-my-activity</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-pass-now1"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-pass-now1</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-recruit-tracker"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-recruit-tracker</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-training"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-training</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-delete-favorite"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-delete-favorite</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-upload-video-messages"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-upload-video-messages</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-support-contacts"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-support-contacts</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-switch-user"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-switch-user</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-view-orientation"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-view-orientation</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-add-favorites"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-add-favorites</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-add-content"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-add-content</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-ez-key-new"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-ez-key-new</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-iba"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-iba</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-ez-key"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-ez-key</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-90day-tracker-logo"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-90day-tracker-logo</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-hide"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-hide</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-show"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-show</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-select-one"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-select-one</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-e-roster"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-e-roster</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-class-code"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-class-code</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-personal-standing"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-personal-standing</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-id-theft-deterrent"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-id-theft-deterrent</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-light-bulb"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-light-bulb</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-air-calculator"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-air-calculator</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-trend-report"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-trend-report</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-email-uplines"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-email-uplines</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-documents"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-documents</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-grab-n-move"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-grab-n-move</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-passcode"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-passcode</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-share-delegate"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-share-delegate</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-text-talkbubble"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-text-talkbubble</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-down"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-down</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-save-disk"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-save-disk</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-up-down"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-up-down</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-up"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-up</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-glove-empty"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-glove-empty</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-glove-full"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-glove-full</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-license-back"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-license-back</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-license"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-license</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-az-za-sort"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-az-za-sort</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-filter-sort"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-filter-sort</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-success-tracker-home"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-success-tracker-home</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-bookmark"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-bookmark</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-marker"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-marker</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-checkbox-square"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-checkbox-square</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-checkbox-square-empty"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-checkbox-square-empty</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-compliance"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-compliance</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-flag"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-flag</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-reports"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-reports</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-delete-trashcan"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-delete-trashcan</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-exam-pass"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-exam-pass</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-fingerprint"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-fingerprint</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-id"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-id</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-info"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-info</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-share"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-share</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-study"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-study</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-upload"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-upload</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-recruits"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-recruits</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-download-contact"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-download-contact</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-turbo-app"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-turbo-app</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-transaction-details"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-transaction-details</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-reset-app"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-reset-app</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-find-team"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-find-team</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-contact-support"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-contact-support</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-challenge-score"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-challenge-score</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-unlink"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-unlink</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-link"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-link</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-auto"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-auto</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-box"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-box</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-cake"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-cake</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-check"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-check</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-check-sign"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-check-sign</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-document"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-document</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-document-pdf"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-document-pdf</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-health"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-health</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-health-alt"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-health-alt</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-legal"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-legal</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-legal-alt"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-legal-alt</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-merge"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-merge</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-newspaper"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-newspaper</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-piggy-bank"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-piggy-bank</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-post-it"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-post-it</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-post-it-alt"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-post-it-alt</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-spark"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-spark</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-split"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-split</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-sync-no"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-sync-no</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-table"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-table</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-time"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-time</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-adjust"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-adjust</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-film"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-film</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-audio-file"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-audio-file</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-camera-video"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-camera-video</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-connectivity-problem"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-connectivity-problem</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-gallery"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-gallery</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-maple-leaf"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-maple-leaf</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-microphone"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-microphone</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-paperclip"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-paperclip</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-picture"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-picture</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-refresh"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-refresh</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-sync"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-sync</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-sync-problem"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-sync-problem</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-trophy"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-trophy</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-arrow-down"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-arrow-down</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-arrow-left"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-arrow-left</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-arrow-right"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-arrow-right</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-arrow-up"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-arrow-up</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-ban-circle"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-ban-circle</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-bell"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-bell</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-calculator"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-calculator</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-calculator-dream"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-calculator-dream</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-calculator-loan"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-calculator-loan</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-calculator-savings"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-calculator-savings</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-calendar"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-calendar</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-calendar-add"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-calendar-add</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-calendar-sync"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-calendar-sync</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-camera"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-camera</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-chevron-down"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-chevron-down</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-chevron-left"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-chevron-left</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-chevron-right"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-chevron-right</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-chevron-up"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-chevron-up</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-circle-empty"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-circle-empty</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-cog"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-cog</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-columns"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-columns</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-comment"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-comment</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-contact"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-contact</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-contact-manager"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-contact-manager</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-dashboard"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-dashboard</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-decrease"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-decrease</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-decrease-condensed"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-decrease-condensed</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-downline-sign"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-downline-sign</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-earphone"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-earphone</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-earphone-empty"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-earphone-empty</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-envelope"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-envelope</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-erase"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-erase</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-exclamation-sign"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-exclamation-sign</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-filter"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-filter</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-fna"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-fna</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-grip"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-grip</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-group"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-group</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-home"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-home</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-increase"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-increase</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-increase-condensed"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-increase-condensed</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-info-sign"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-info-sign</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-investments"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-investments</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-life-family"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-life-family</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-lock"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-lock</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-logo-mark"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-logo-mark</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-log-out"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-log-out</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-map-marker"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-map-marker</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-menu-navigation"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-menu-navigation</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-menu-utilities"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-menu-utilities</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-menu-utilities-alt"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-menu-utilities-alt</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-minus-sign"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-minus-sign</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-navigate"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-navigate</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-new"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-new</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-ok"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-ok</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-ok-sign"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-ok-sign</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-pencil"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-pencil</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-placeholder"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-placeholder</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-play-sign"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-play-sign</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-play-sign-alt"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-play-sign-alt</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-plus-sign"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-plus-sign</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-pol"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-pol</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-print"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-print</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-question-sign"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-question-sign</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-quick-quote"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-quick-quote</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-remove"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-remove</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-close"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-close</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-remove-sign"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-remove-sign</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-reply"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-reply</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-search"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-search</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-search-sign"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-search-sign</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-send"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-send</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-size"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-size</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-sort-by-attributes"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-sort-by-attributes</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-sort-by-attributes-alt"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-sort-by-attributes-alt</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-star"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-star</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-star-empty"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-star-empty</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-th"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-th</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-th-large"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-th-large</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-th-list"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-th-list</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-thumbs-up"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-thumbs-up</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-tools"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-tools</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-training1"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-training1</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-usd"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-usd</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-user"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-user</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-user-sign"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-user-sign</div>
  </div>
  <div class="grid-item">
    <i class="PRIcons-warning-sign"></i>
    <div class="pricons-desc grid-sub-item">PRIcons-warning-sign</div>
  </div>
</div>

### Source Files

<p>You may <strong><a href="/vitepress-poc/fonts/PRIcons-v2.4-30.zip" target="_blank">download the source files</a></strong> for use in your non-HTML projects.  Unzip this file an install the fonts located in the fonts folder onto your computer.</p>

### Using the PRIcons on your local machine

There is a quick reference page called demo.html inside the source zip file. Open it to see all of the icons displayed along with their reference class name, hex code and UNICODE information.

The UNICODE information is hidden within the little box in the bottom right hand corner the info block for each icon. This little box is very important when using the icons on your local machine because it contains the coded information your local apps will understand. Copy it for the icon you want to use, then paste it into the program you are using to see it appear as a glyph.

## ADA Compliant Icons

Any time you use an image to communicate a concept, use descriptive alt text to allow screen readers to describe what’s in the image.

If an icon is interactive, color alone is not enough to indicate a state change (i.e default -> hover/ active). This is because color vision impaired users will not be able to detect the change.

## Vuetify Icons' Properties (Props)

For more details of Vuetify icons' props usage, check it out from Vuetify:

<ol>
  <li><strong><a href="https://v2.vuetifyjs.com/en/components/icons/" target="_blank">Vuetify 2 icons</a></strong> and <strong><a href="https://v2.vuetifyjs.com/en/features/icon-fonts/" target="_blank">Vuetify 2 icon fonts</a></strong></li>
  <li><strong><a href="https://vuetifyjs.com/en/components/icons/" target="_blank">Vuetify 3 icons</a></strong> and <strong><a href="https://vuetifyjs.com/en/features/icon-fonts/" target="_blank">Vuetify 3 icon fonts</a></strong></li>
</ol>