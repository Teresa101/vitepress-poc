<script setup lang="ts">

  async function copy(e) {
    const target = e.target;
    const targetParentEl = target.parentNode;
    navigator.clipboard.writeText(target.innerText);
    const childEl = document.createElement('span');
    childEl.id = "copiedText";
    childEl.setAttribute('aria-live', 'assertive');
    childEl.append('Copied');
    targetParentEl.appendChild(childEl);
    const wait = (timeToDelay:any) => new Promise((resolve) => setTimeout(resolve, timeToDelay));
    await wait(800);
    targetParentEl.removeChild(targetParentEl.lastElementChild);
  }

</script>

<style>
  .palette-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 16px;
  }
  .color-watches {
    display: flex;
    position: relative;
    width: 100%;
  }
  .color-watch {
    box-shadow: -2px 0 7px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-basis: 1px;
    flex-grow: 1;
    height: 130px;
    position: relative;
  }
  .color-watch .color-info {
    padding: 0;
    display: none;
  }
  .color-watch .color-info > DIV {
    padding: 0;
  }
  .color-watch .color-info > DIV:last-of-type {
    margin-left: 16px;
  }
  .color-watch .color-info > DIV > P {
    font-weight: 600;
    margin-top: 7px;
    margin-bottom: 3px;
  }
  .color-watch .color-info > DIV > UL {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .color-watch .color-info > DIV > UL LI {
    margin-top: 0;
  }
  .color-watch .color-info > DIV > P,
  .color-watch .color-info > DIV > UL LI {
    font-size: 14px;
  }
  .color-watch .color-info > DIV > UL LI > BUTTON {
    color: var(--vp-code-link-color);
  }
  .color-watch .color-info > DIV > UL LI > BUTTON:hover {
    color: var(--vp-code-link-hover-color);
  }
  .color-watch .color-info > DIV > UL LI SPAN#copiedText {
    display: block;
    color: var(--v-green800-base);
    font-size: 12px;
    font-weight: 600;
  }
  .color-watch.blue900:hover,
  .color-watch.blue800:hover,
  .color-watch.blue700:hover,
  .color-watch.blue600:hover,
  .color-watch.blue500:hover,
  .color-watch.blue400:hover,
  .color-watch.blue300:hover,
  .color-watch.blue200:hover,
  .color-watch.blue100:hover,
  .color-watch.green900:hover,
  .color-watch.green800:hover,
  .color-watch.green700:hover,
  .color-watch.green600:hover,
  .color-watch.green500:hover,
  .color-watch.green400:hover,
  .color-watch.green300:hover,
  .color-watch.green200:hover,
  .color-watch.green100:hover,
  .color-watch.cyan900:hover,
  .color-watch.cyan800:hover,
  .color-watch.cyan700:hover,
  .color-watch.cyan600:hover,
  .color-watch.cyan500:hover,
  .color-watch.cyan400:hover,
  .color-watch.cyan300:hover,
  .color-watch.cyan200:hover,
  .color-watch.cyan100:hover,
  .color-watch.grey900:hover,
  .color-watch.grey800:hover,
  .color-watch.grey700:hover,
  .color-watch.grey600:hover,
  .color-watch.grey500:hover,
  .color-watch.grey400:hover,
  .color-watch.grey300:hover,
  .color-watch.grey200:hover,
  .color-watch.grey100:hover,
  .color-watch.blueGrey900:hover,
  .color-watch.blueGrey800:hover,
  .color-watch.blueGrey700:hover,
  .color-watch.blueGrey600:hover,
  .color-watch.blueGrey500:hover,
  .color-watch.blueGrey400:hover,
  .color-watch.blueGrey300:hover,
  .color-watch.blueGrey200:hover,
  .color-watch.blueGrey100:hover,
  .color-watch.orange900:hover,
  .color-watch.orange800:hover,
  .color-watch.orange700:hover,
  .color-watch.orange600:hover,
  .color-watch.orange500:hover,
  .color-watch.orange400:hover,
  .color-watch.orange300:hover,
  .color-watch.orange200:hover,
  .color-watch.orange100:hover,
  .color-watch.red900:hover,
  .color-watch.red800:hover,
  .color-watch.red700:hover,
  .color-watch.red600:hover,
  .color-watch.red500:hover,
  .color-watch.red400:hover,
  .color-watch.red300:hover,
  .color-watch.red200:hover,
  .color-watch.red100:hover,
  .color-watch.beige:hover,
  .color-watch.porcelain:hover,
  .color-watch.almond:hover,
  .color-watch.espresso:hover,
  .color-watch.opp-night:hover,
  .color-watch.accelerator:hover {
    flex-grow: 12;
  }
  .color-watch.blue900:hover .color-info,
  .color-watch.blue800:hover .color-info,
  .color-watch.blue700:hover .color-info,
  .color-watch.blue600:hover .color-info,
  .color-watch.blue500:hover .color-info,
  .color-watch.blue400:hover .color-info,
  .color-watch.blue300:hover .color-info,
  .color-watch.blue200:hover .color-info,
  .color-watch.blue100:hover .color-info,
  .color-watch.green900:hover .color-info,
  .color-watch.green800:hover .color-info,
  .color-watch.green700:hover .color-info,
  .color-watch.green600:hover .color-info,
  .color-watch.green500:hover .color-info,
  .color-watch.green400:hover .color-info,
  .color-watch.green300:hover .color-info,
  .color-watch.green200:hover .color-info,
  .color-watch.green100:hover .color-info,
  .color-watch.cyan900:hover .color-info,
  .color-watch.cyan800:hover .color-info,
  .color-watch.cyan700:hover .color-info,
  .color-watch.cyan600:hover .color-info,
  .color-watch.cyan500:hover .color-info,
  .color-watch.cyan400:hover .color-info,
  .color-watch.cyan300:hover .color-info,
  .color-watch.cyan200:hover .color-info,
  .color-watch.cyan100:hover .color-info,
  .color-watch.grey900:hover .color-info,
  .color-watch.grey800:hover .color-info,
  .color-watch.grey700:hover .color-info,
  .color-watch.grey600:hover .color-info,
  .color-watch.grey500:hover .color-info,
  .color-watch.grey400:hover .color-info,
  .color-watch.grey300:hover .color-info,
  .color-watch.grey200:hover .color-info,
  .color-watch.grey100:hover .color-info,
  .color-watch.blueGrey900:hover .color-info,
  .color-watch.blueGrey800:hover .color-info,
  .color-watch.blueGrey700:hover .color-info,
  .color-watch.blueGrey600:hover .color-info,
  .color-watch.blueGrey500:hover .color-info,
  .color-watch.blueGrey400:hover .color-info,
  .color-watch.blueGrey300:hover .color-info,
  .color-watch.blueGrey200:hover .color-info,
  .color-watch.blueGrey100:hover .color-info,
  .color-watch.orange900:hover .color-info,
  .color-watch.orange800:hover .color-info,
  .color-watch.orange700:hover .color-info,
  .color-watch.orange600:hover .color-info,
  .color-watch.orange500:hover .color-info,
  .color-watch.orange400:hover .color-info,
  .color-watch.orange300:hover .color-info,
  .color-watch.orange200:hover .color-info,
  .color-watch.orange100:hover .color-info,
  .color-watch.red900:hover .color-info,
  .color-watch.red800:hover .color-info,
  .color-watch.red700:hover .color-info,
  .color-watch.red600:hover .color-info,
  .color-watch.red500:hover .color-info,
  .color-watch.red400:hover .color-info,
  .color-watch.red300:hover .color-info,
  .color-watch.red200:hover .color-info,
  .color-watch.red100:hover .color-info,
  .color-watch.beige:hover .color-info,
  .color-watch.porcelain:hover .color-info,
  .color-watch.almond:hover .color-info,
  .color-watch.espresso:hover .color-info,
  .color-watch.opp-night:hover .color-info,
  .color-watch.accelerator:hover .color-info {
    background-color: var(--v-white-base);
    display: flex;
    position: relative;
    left: 25px;
    width: calc(100% - 25px);
  }
  .color-watch.blue900:hover .color-info:before,
  .color-watch.blue800:hover .color-info:before,
  .color-watch.blue700:hover .color-info:before,
  .color-watch.blue600:hover .color-info:before,
  .color-watch.blue500:hover .color-info:before,
  .color-watch.blue400:hover .color-info:before,
  .color-watch.blue300:hover .color-info:before,
  .color-watch.blue200:hover .color-info:before,
  .color-watch.blue100:hover .color-info:before,
  .color-watch.green900:hover .color-info:before,
  .color-watch.green800:hover .color-info:before,
  .color-watch.green700:hover .color-info:before,
  .color-watch.green600:hover .color-info:before,
  .color-watch.green500:hover .color-info:before,
  .color-watch.green400:hover .color-info:before,
  .color-watch.green300:hover .color-info:before,
  .color-watch.green200:hover .color-info:before,
  .color-watch.green100:hover .color-info:before,
  .color-watch.cyan900:hover .color-info:before,
  .color-watch.cyan800:hover .color-info:before,
  .color-watch.cyan700:hover .color-info:before,
  .color-watch.cyan600:hover .color-info:before,
  .color-watch.cyan500:hover .color-info:before,
  .color-watch.cyan400:hover .color-info:before,
  .color-watch.cyan300:hover .color-info:before,
  .color-watch.cyan200:hover .color-info:before,
  .color-watch.cyan100:hover .color-info:before,
  .color-watch.grey900:hover .color-info:before,
  .color-watch.grey800:hover .color-info:before,
  .color-watch.grey700:hover .color-info:before,
  .color-watch.grey600:hover .color-info:before,
  .color-watch.grey500:hover .color-info:before,
  .color-watch.grey400:hover .color-info:before,
  .color-watch.grey300:hover .color-info:before,
  .color-watch.grey200:hover .color-info:before,
  .color-watch.grey100:hover .color-info:before,
  .color-watch.blueGrey900:hover .color-info:before,
  .color-watch.blueGrey800:hover .color-info:before,
  .color-watch.blueGrey700:hover .color-info:before,
  .color-watch.blueGrey600:hover .color-info:before,
  .color-watch.blueGrey500:hover .color-info:before,
  .color-watch.blueGrey400:hover .color-info:before,
  .color-watch.blueGrey300:hover .color-info:before,
  .color-watch.blueGrey200:hover .color-info:before,
  .color-watch.blueGrey100:hover .color-info:before,
  .color-watch.orange900:hover .color-info:before,
  .color-watch.orange800:hover .color-info:before,
  .color-watch.orange700:hover .color-info:before,
  .color-watch.orange600:hover .color-info:before,
  .color-watch.orange500:hover .color-info:before,
  .color-watch.orange400:hover .color-info:before,
  .color-watch.orange300:hover .color-info:before,
  .color-watch.orange200:hover .color-info:before,
  .color-watch.orange100:hover .color-info:before,
  .color-watch.red900:hover .color-info:before,
  .color-watch.red800:hover .color-info:before,
  .color-watch.red700:hover .color-info:before,
  .color-watch.red600:hover .color-info:before,
  .color-watch.red500:hover .color-info:before,
  .color-watch.red400:hover .color-info:before,
  .color-watch.red300:hover .color-info:before,
  .color-watch.red200:hover .color-info:before,
  .color-watch.red100:hover .color-info:before,
  .color-watch.beige:hover .color-info:before,
  .color-watch.porcelain:hover .color-info:before,
  .color-watch.almond:hover .color-info:before,
  .color-watch.espresso:hover .color-info:before,
  .color-watch.opp-night:hover .color-info:before,
  .color-watch.accelerator:hover .color-info:before {
    content:'';
    clip-path: polygon(100% 50%, 0% 100%, 0% 0%);
    float: left;
    width: 50px;
    height: 130px;
    margin: 0;
    position: relative;
    left: -1px;
    margin-right: 12px;
  }
  .color-watch.blue900,
  .color-watch.blue900:hover .color-info:before {
    background-color: var(--v-blue900-base);
  }
  .color-watch.blue800,
  .color-watch.blue800:hover .color-info:before {
    background-color: var(--v-blue800-base);
  }
  .color-watch.blue700,
  .color-watch.blue700:hover .color-info:before {
    background-color: var(--v-blue700-base);
  }
  .color-watch.blue600,
  .color-watch.blue600:hover .color-info:before {
    background-color: var(--v-blue600-base);
  }
  .color-watch.blue500,
  .color-watch.blue500:hover .color-info:before {
    background-color: var(--v-blue500-base);
  }
  .color-watch.blue400,
  .color-watch.blue400:hover .color-info:before {
    background-color: var(--v-blue400-base);
  }
  .color-watch.blue300,
  .color-watch.blue300:hover .color-info:before {
    background-color: var(--v-blue300-base);
  }
  .color-watch.blue200,
  .color-watch.blue200:hover .color-info:before {
    background-color: var(--v-blue200-base);
  }
  .color-watch.blue100,
  .color-watch.blue100:hover .color-info:before {
    background-color: var(--v-blue100-base);
  }
  .color-watch.green900,
  .color-watch.green900:hover .color-info:before {
    background-color: var(--v-green900-base);
  }
  .color-watch.green800,
  .color-watch.green800:hover .color-info:before {
    background-color: var(--v-green800-base);
  }
  .color-watch.green700,
  .color-watch.green700:hover .color-info:before {
    background-color: var(--v-green700-base);
  }
  .color-watch.green600,
  .color-watch.green600:hover .color-info:before {
    background-color: var(--v-green600-base);
  }
  .color-watch.green500,
  .color-watch.green500:hover .color-info:before {
    background-color: var(--v-green500-base);
  }
  .color-watch.green400,
  .color-watch.green400:hover .color-info:before {
    background-color: var(--v-green400-base);
  }
  .color-watch.green300,
  .color-watch.green300:hover .color-info:before {
    background-color: var(--v-green300-base);
  }
  .color-watch.green200,
  .color-watch.green200:hover .color-info:before {
    background-color: var(--v-green200-base);
  }
  .color-watch.green100,
  .color-watch.green100:hover .color-info:before {
    background-color: var(--v-green100-base);
  }
  .color-watch.cyan900,
  .color-watch.cyan900:hover .color-info:before {
    background-color: var(--v-cyan900-base);
  }
  .color-watch.cyan800,
  .color-watch.cyan800:hover .color-info:before {
    background-color: var(--v-cyan800-base);
  }
  .color-watch.cyan700,
  .color-watch.cyan700:hover .color-info:before {
    background-color: var(--v-cyan700-base);
  }
  .color-watch.cyan600,
  .color-watch.cyan600:hover .color-info:before {
    background-color: var(--v-cyan600-base);
  }
  .color-watch.cyan500,
  .color-watch.cyan500:hover .color-info:before {
    background-color: var(--v-cyan500-base);
  }
  .color-watch.cyan400,
  .color-watch.cyan400:hover .color-info:before {
    background-color: var(--v-cyan400-base);
  }
  .color-watch.cyan300,
  .color-watch.cyan300:hover .color-info:before {
    background-color: var(--v-cyan300-base);
  }
  .color-watch.cyan200,
  .color-watch.cyan200:hover .color-info:before {
    background-color: var(--v-cyan200-base);
  }
  .color-watch.cyan100,
  .color-watch.cyan100:hover .color-info:before {
    background-color: var(--v-cyan100-base);
  }
  .color-watch.grey900,
  .color-watch.grey900:hover .color-info:before {
    background-color: var(--v-grey900-base);
  }
  .color-watch.grey800,
  .color-watch.grey800:hover .color-info:before {
    background-color: var(--v-grey800-base);
  }
  .color-watch.grey700,
  .color-watch.grey700:hover .color-info:before {
    background-color: var(--v-grey700-base);
  }
  .color-watch.grey600,
  .color-watch.grey600:hover .color-info:before {
    background-color: var(--v-grey600-base);
  }
  .color-watch.grey500,
  .color-watch.grey500:hover .color-info:before {
    background-color: var(--v-grey500-base);
  }
  .color-watch.grey400,
  .color-watch.grey400:hover .color-info:before {
    background-color: var(--v-grey400-base);
  }
  .color-watch.grey300,
  .color-watch.grey300:hover .color-info:before {
    background-color: var(--v-grey300-base);
  }
  .color-watch.grey200,
  .color-watch.grey200:hover .color-info:before {
    background-color: var(--v-grey200-base);
  }
  .color-watch.grey100,
  .color-watch.grey100:hover .color-info:before {
    background-color: var(--v-grey100-base);
  }
  .color-watch.blueGrey900,
  .color-watch.blueGrey900:hover .color-info:before {
    background-color: var(--v-blueGrey900-base);
  }
  .color-watch.blueGrey800,
  .color-watch.blueGrey800:hover .color-info:before {
    background-color: var(--v-blueGrey800-base);
  }
  .color-watch.blueGrey700,
  .color-watch.blueGrey700:hover .color-info:before {
    background-color: var(--v-blueGrey700-base);
  }
  .color-watch.blueGrey600,
  .color-watch.blueGrey600:hover .color-info:before {
    background-color: var(--v-blueGrey600-base);
  }
  .color-watch.blueGrey500,
  .color-watch.blueGrey500:hover .color-info:before {
    background-color: var(--v-blueGrey500-base);
  }
  .color-watch.blueGrey400,
  .color-watch.blueGrey400:hover .color-info:before {
    background-color: var(--v-blueGrey400-base);
  }
  .color-watch.blueGrey300,
  .color-watch.blueGrey300:hover .color-info:before {
    background-color: var(--v-blueGrey300-base);
  }
  .color-watch.blueGrey200,
  .color-watch.blueGrey200:hover .color-info:before {
    background-color: var(--v-blueGrey200-base);
  }
  .color-watch.blueGrey100,
  .color-watch.blueGrey100:hover .color-info:before {
    background-color: var(--v-blueGrey100-base);
  }
  .color-watch.orange900,
  .color-watch.orange900:hover .color-info:before {
    background-color: var(--v-orange900-base);
  }
  .color-watch.orange800,
  .color-watch.orange800:hover .color-info:before {
    background-color: var(--v-orange800-base);
  }
  .color-watch.orange700,
  .color-watch.orange700:hover .color-info:before {
    background-color: var(--v-orange700-base);
  }
  .color-watch.orange600,
  .color-watch.orange600:hover .color-info:before {
    background-color: var(--v-orange600-base);
  }
  .color-watch.orange500,
  .color-watch.orange500:hover .color-info:before {
    background-color: var(--v-orange500-base);
  }
  .color-watch.orange400,
  .color-watch.orange400:hover .color-info:before {
    background-color: var(--v-orange400-base);
  }
  .color-watch.orange300,
  .color-watch.orange300:hover .color-info:before {
    background-color: var(--v-orange300-base);
  }
  .color-watch.orange200,
  .color-watch.orange200:hover .color-info:before {
    background-color: var(--v-orange200-base);
  }
  .color-watch.orange100,
  .color-watch.orange100:hover .color-info:before {
    background-color: var(--v-orange100-base);
  }
  .color-watch.red900,
  .color-watch.red900:hover .color-info:before {
    background-color: var(--v-red900-base);
  }
  .color-watch.red800,
  .color-watch.red800:hover .color-info:before {
    background-color: var(--v-red800-base);
  }
  .color-watch.red700,
  .color-watch.red700:hover .color-info:before {
    background-color: var(--v-red700-base);
  }
  .color-watch.red600,
  .color-watch.red600:hover .color-info:before {
    background-color: var(--v-red600-base);
  }
  .color-watch.red500,
  .color-watch.red500:hover .color-info:before {
    background-color: var(--v-red500-base);
  }
  .color-watch.red400,
  .color-watch.red400:hover .color-info:before {
    background-color: var(--v-red400-base);
  }
  .color-watch.red300,
  .color-watch.red300:hover .color-info:before {
    background-color: var(--v-red300-base);
  }
  .color-watch.red200,
  .color-watch.red200:hover .color-info:before {
    background-color: var(--v-red200-base);
  }
  .color-watch.red100,
  .color-watch.red100:hover .color-info:before {
    background-color: var(--v-red100-base);
  }
  .color-watch.beige,
  .color-watch.beige:hover .color-info:before {
    background-color: #F7D3A6;
  }
  .color-watch.porcelain,
  .color-watch.porcelain:hover .color-info:before {
    background-color: #FDB797;
  }
  .color-watch.almond,
  .color-watch.almond:hover .color-info:before {
    background-color: #BC7758;
  }
  .color-watch.espresso,
  .color-watch.espresso:hover .color-info:before {
    background-color: #7E3C06;
  }
  .color-watch.opp-night,
  .color-watch.opp-night:hover .color-info:before {
    background: linear-gradient(to bottom, #0a2144, #336699);
  }
  .color-watch.accelerator,
  .color-watch.accelerator:hover .color-info:before {
    background: linear-gradient(to right, #ff0000, #3399ff 100%);
  }
  .dark .color-watch .color-info > DIV > P,
  .dark .color-watch .color-info > DIV > UL LI {
    --vp-c-text-1: var(--v-grey800-base);
    color: var(--vp-c-text-1);
  }

  @media screen and (max-width: 1395px) {
    .color-watch {
      flex-basis: auto;
      height: 220px;
    }
    .color-watch.blue900:hover,
    .color-watch.blue800:hover,
    .color-watch.blue700:hover,
    .color-watch.blue600:hover,
    .color-watch.blue500:hover,
    .color-watch.blue400:hover,
    .color-watch.blue300:hover,
    .color-watch.blue200:hover,
    .color-watch.blue100:hover,
    .color-watch.green900:hover,
    .color-watch.green800:hover,
    .color-watch.green700:hover,
    .color-watch.green600:hover,
    .color-watch.green500:hover,
    .color-watch.green400:hover,
    .color-watch.green300:hover,
    .color-watch.green200:hover,
    .color-watch.green100:hover,
    .color-watch.cyan900:hover,
    .color-watch.cyan800:hover,
    .color-watch.cyan700:hover,
    .color-watch.cyan600:hover,
    .color-watch.cyan500:hover,
    .color-watch.cyan400:hover,
    .color-watch.cyan300:hover,
    .color-watch.cyan200:hover,
    .color-watch.cyan100:hover,
    .color-watch.grey900:hover,
    .color-watch.grey800:hover,
    .color-watch.grey700:hover,
    .color-watch.grey600:hover,
    .color-watch.grey500:hover,
    .color-watch.grey400:hover,
    .color-watch.grey300:hover,
    .color-watch.grey200:hover,
    .color-watch.grey100:hover,
    .color-watch.blueGrey900:hover,
    .color-watch.blueGrey800:hover,
    .color-watch.blueGrey700:hover,
    .color-watch.blueGrey600:hover,
    .color-watch.blueGrey500:hover,
    .color-watch.blueGrey400:hover,
    .color-watch.blueGrey300:hover,
    .color-watch.blueGrey200:hover,
    .color-watch.blueGrey100:hover,
    .color-watch.orange900:hover,
    .color-watch.orange800:hover,
    .color-watch.orange700:hover,
    .color-watch.orange600:hover,
    .color-watch.orange500:hover,
    .color-watch.orange400:hover,
    .color-watch.orange300:hover,
    .color-watch.orange200:hover,
    .color-watch.orange100:hover,
    .color-watch.red900:hover,
    .color-watch.red800:hover,
    .color-watch.red700:hover,
    .color-watch.red600:hover,
    .color-watch.red500:hover,
    .color-watch.red400:hover,
    .color-watch.red300:hover,
    .color-watch.red200:hover,
    .color-watch.red100:hover,
    .color-watch.beige:hover,
    .color-watch.porcelain:hover,
    .color-watch.almond:hover,
    .color-watch.espresso:hover,
    .color-watch.opp-night:hover,
    .color-watch.accelerator:hover {
      flex-grow: 2;
    }
    .color-watch.blue900:hover .color-info,
    .color-watch.blue800:hover .color-info,
    .color-watch.blue700:hover .color-info,
    .color-watch.blue600:hover .color-info,
    .color-watch.blue500:hover .color-info,
    .color-watch.blue400:hover .color-info,
    .color-watch.blue300:hover .color-info,
    .color-watch.blue200:hover .color-info,
    .color-watch.blue100:hover .color-info,
    .color-watch.green900:hover .color-info,
    .color-watch.green800:hover .color-info,
    .color-watch.green700:hover .color-info,
    .color-watch.green600:hover .color-info,
    .color-watch.green500:hover .color-info,
    .color-watch.green400:hover .color-info,
    .color-watch.green300:hover .color-info,
    .color-watch.green200:hover .color-info,
    .color-watch.green100:hover .color-info,
    .color-watch.cyan900:hover .color-info,
    .color-watch.cyan800:hover .color-info,
    .color-watch.cyan700:hover .color-info,
    .color-watch.cyan600:hover .color-info,
    .color-watch.cyan500:hover .color-info,
    .color-watch.cyan400:hover .color-info,
    .color-watch.cyan300:hover .color-info,
    .color-watch.cyan200:hover .color-info,
    .color-watch.cyan100:hover .color-info,
    .color-watch.grey900:hover .color-info,
    .color-watch.grey800:hover .color-info,
    .color-watch.grey700:hover .color-info,
    .color-watch.grey600:hover .color-info,
    .color-watch.grey500:hover .color-info,
    .color-watch.grey400:hover .color-info,
    .color-watch.grey300:hover .color-info,
    .color-watch.grey200:hover .color-info,
    .color-watch.grey100:hover .color-info,
    .color-watch.blueGrey900:hover .color-info,
    .color-watch.blueGrey800:hover .color-info,
    .color-watch.blueGrey700:hover .color-info,
    .color-watch.blueGrey600:hover .color-info,
    .color-watch.blueGrey500:hover .color-info,
    .color-watch.blueGrey400:hover .color-info,
    .color-watch.blueGrey300:hover .color-info,
    .color-watch.blueGrey200:hover .color-info,
    .color-watch.blueGrey100:hover .color-info,
    .color-watch.orange900:hover .color-info,
    .color-watch.orange800:hover .color-info,
    .color-watch.orange700:hover .color-info,
    .color-watch.orange600:hover .color-info,
    .color-watch.orange500:hover .color-info,
    .color-watch.orange400:hover .color-info,
    .color-watch.orange300:hover .color-info,
    .color-watch.orange200:hover .color-info,
    .color-watch.orange100:hover .color-info,
    .color-watch.red900:hover .color-info,
    .color-watch.red800:hover .color-info,
    .color-watch.red700:hover .color-info,
    .color-watch.red600:hover .color-info,
    .color-watch.red500:hover .color-info,
    .color-watch.red400:hover .color-info,
    .color-watch.red300:hover .color-info,
    .color-watch.red200:hover .color-info,
    .color-watch.red100:hover .color-info,
    .color-watch.beige:hover .color-info,
    .color-watch.porcelain:hover .color-info,
    .color-watch.almond:hover .color-info,
    .color-watch.espresso:hover .color-info,
    .color-watch.opp-night:hover .color-info,
    .color-watch.accelerator:hover .color-info {
      display: block;
    }
    .color-watch.blue900:hover .color-info:before,
    .color-watch.blue800:hover .color-info:before,
    .color-watch.blue700:hover .color-info:before,
    .color-watch.blue600:hover .color-info:before,
    .color-watch.blue500:hover .color-info:before,
    .color-watch.blue400:hover .color-info:before,
    .color-watch.blue300:hover .color-info:before,
    .color-watch.blue200:hover .color-info:before,
    .color-watch.blue100:hover .color-info:before,
    .color-watch.green900:hover .color-info:before,
    .color-watch.green800:hover .color-info:before,
    .color-watch.green700:hover .color-info:before,
    .color-watch.green600:hover .color-info:before,
    .color-watch.green500:hover .color-info:before,
    .color-watch.green400:hover .color-info:before,
    .color-watch.green300:hover .color-info:before,
    .color-watch.green200:hover .color-info:before,
    .color-watch.green100:hover .color-info:before,
    .color-watch.cyan900:hover .color-info:before,
    .color-watch.cyan800:hover .color-info:before,
    .color-watch.cyan700:hover .color-info:before,
    .color-watch.cyan600:hover .color-info:before,
    .color-watch.cyan500:hover .color-info:before,
    .color-watch.cyan400:hover .color-info:before,
    .color-watch.cyan300:hover .color-info:before,
    .color-watch.cyan200:hover .color-info:before,
    .color-watch.cyan100:hover .color-info:before,
    .color-watch.grey900:hover .color-info:before,
    .color-watch.grey800:hover .color-info:before,
    .color-watch.grey700:hover .color-info:before,
    .color-watch.grey600:hover .color-info:before,
    .color-watch.grey500:hover .color-info:before,
    .color-watch.grey400:hover .color-info:before,
    .color-watch.grey300:hover .color-info:before,
    .color-watch.grey200:hover .color-info:before,
    .color-watch.grey100:hover .color-info:before,
    .color-watch.blueGrey900:hover .color-info:before,
    .color-watch.blueGrey800:hover .color-info:before,
    .color-watch.blueGrey700:hover .color-info:before,
    .color-watch.blueGrey600:hover .color-info:before,
    .color-watch.blueGrey500:hover .color-info:before,
    .color-watch.blueGrey400:hover .color-info:before,
    .color-watch.blueGrey300:hover .color-info:before,
    .color-watch.blueGrey200:hover .color-info:before,
    .color-watch.blueGrey100:hover .color-info:before,
    .color-watch.orange900:hover .color-info:before,
    .color-watch.orange800:hover .color-info:before,
    .color-watch.orange700:hover .color-info:before,
    .color-watch.orange600:hover .color-info:before,
    .color-watch.orange500:hover .color-info:before,
    .color-watch.orange400:hover .color-info:before,
    .color-watch.orange300:hover .color-info:before,
    .color-watch.orange200:hover .color-info:before,
    .color-watch.orange100:hover .color-info:before,
    .color-watch.red900:hover .color-info:before,
    .color-watch.red800:hover .color-info:before,
    .color-watch.red700:hover .color-info:before,
    .color-watch.red600:hover .color-info:before,
    .color-watch.red500:hover .color-info:before,
    .color-watch.red400:hover .color-info:before,
    .color-watch.red300:hover .color-info:before,
    .color-watch.red200:hover .color-info:before,
    .color-watch.red100:hover .color-info:before,
    .color-watch.beige:hover .color-info:before,
    .color-watch.porcelain:hover .color-info:before,
    .color-watch.almond:hover .color-info:before,
    .color-watch.espresso:hover .color-info:before,
    .color-watch.opp-night:hover .color-info:before,
    .color-watch.accelerator:hover .color-info:before {
      height: 220px;
    }
  }

  @media screen and (max-width: 680px) {
    .color-watches {
      flex-direction: column;
    }
    .color-watch {
      flex-basis: 50px;
    }
  }
</style>

# Color

## Meaning and Message

Color is the foundation of a visual vocabulary we use to express who and what we are as a company: contemporary, trustworthy, leading, reliable, caring, dependable, successful, vibrant, and focused. The Primerica color palette has been carefully chosen to express these and other key ideas and attributes. It’s important that we all understand and adhere to this palette to present a unified, consistent expression of the Primerica purpose, personality, and values.

## Primary

These are the bedrock colors of our company’s digital palette and, as such, should dominate any design. They echo the blue in the Primerica logo and instill a sense of confidence in our clients. The multiple shades of blue allow for design flexibility while maintaining the Primerica look and feel.

### Blue

<div class="palette-container">
  <div class="color-watches">
    <div class="color-watch blue900">
      <div class="color-info">
        <div>
          <p>Blue 900</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#032445</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">3, 36, 69</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-blue900-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch blue800">
      <div class="color-info">
        <div>
          <p>Blue 800</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#063562</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">6, 53, 98</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-blue800-base</button>
            </li>
            <li>
              <span>Button text:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-primary-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch blue700">
      <div class="color-info">
        <div>
          <p>Blue 700</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#02579E</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">2, 87, 158</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-blue700-base</button>
            </li>
            <li>
              <span>Link:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-anchor-base</button>
            </li>
            <li>
              <span>???:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-accent-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch blue600">
      <div class="color-info">
        <div>
          <p>Blue 600</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#0C6DCA</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">12, 109, 202</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-blue600-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch blue500">
      <div class="color-info">
        <div>
          <p>Blue 500</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#3399FF</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">51, 153, 255</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-blue500-base</button>
            </li>
            <li>
              <span>Info:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-info-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch blue400">
      <div class="color-info">
        <div>
          <p>Blue 400</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#8BC0F4</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">139, 192, 244</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-blue400-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch blue300">
      <div class="color-info">
        <div>
          <p>Blue 300</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#C1DEFB</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">193, 222, 251</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-blue300-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch blue200">
      <div class="color-info">
        <div>
          <p>Blue 200</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#E2F0FE</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">226, 240, 254</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul>
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-blue200-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch blue100">
      <div class="color-info">
        <div>
          <p>Blue 100</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#F5FAFF</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">245, 250, 255</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-blue100-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

## Accent

As the name suggests, accent colors highlight and amplify areas of exceptional interest or importance. Limited and purposeful use of these colors is best practice. Incorporating accent colors simply for design variety will reduce their effectiveness. Excessive use of these colors overshadows the primary colors and presents an unclear Primerica brand message.

### Green

<div class="palette-container">
  <div class="color-watches">
    <div class="color-watch green900">
      <div class="color-info">
        <div>
          <p>Green 900</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#093F11</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">9, 63, 17</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-green900-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch green800">
      <div class="color-info">
        <div>
          <p>Green 800</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#0F6C1D</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">15, 108, 29</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-green800-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch green700">
      <div class="color-info">
        <div>
          <p>Green 700</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#0B8D1F</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">11, 141, 31</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-green700-base</button>
            </li>
            <li>
              <span>Success:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-success-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch green600">
      <div class="color-info">
        <div>
          <p>Green 600</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#39AC4B</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">57, 172, 75</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-green600-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch green500">
      <div class="color-info">
        <div>
          <p>Green 500</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#6CD07B</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">108, 208, 123</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-green500-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch green400">
      <div class="color-info">
        <div>
          <p>Green 400</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#91E89E</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">145, 232, 158</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-green400-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch green300">
      <div class="color-info">
        <div>
          <p>Green 300</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#BAF2C3</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">186, 242, 195</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-green300-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch green200">
      <div class="color-info">
        <div>
          <p>Green 200</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#D8F8DD</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">216, 248, 221</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul>
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-green200-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch green100">
      <div class="color-info">
        <div>
          <p>Green 100</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#EAFBEC</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">234, 251, 236</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-green100-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

### Cyan

<div class="palette-container">
  <div class="color-watches">
    <div class="color-watch cyan900">
      <div class="color-info">
        <div>
          <p>Cyan 900</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#E0FCFF</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">3, 71, 83</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-cyan900-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch cyan800">
      <div class="color-info">
        <div>
          <p>Cyan 800</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#0B646F</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">11, 100, 111</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-cyan800-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch cyan700">
      <div class="color-info">
        <div>
          <p>Cyan 700</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#008293</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">0, 130, 147</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-cyan700-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch cyan600">
      <div class="color-info">
        <div>
          <p>Cyan 600</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#19A1B3</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">25, 161, 179</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-cyan600-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch cyan500">
      <div class="color-info">
        <div>
          <p>Cyan 500</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#26BBCF</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">38, 187, 207</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-cyan500-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch cyan400">
      <div class="color-info">
        <div>
          <p>Cyan 400</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#67D1DF</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">103, 209, 223</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-cyan400-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch cyan300">
      <div class="color-info">
        <div>
          <p>Cyan 300</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#91E8F3</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">145, 232, 243</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-cyan300-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch cyan200">
      <div class="color-info">
        <div>
          <p>Cyan 200</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#C4F7FD</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">196, 247, 253</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul>
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-cyan200-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch cyan100">
      <div class="color-info">
        <div>
          <p>Cyan 100</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#E0FCFF</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">224, 252, 255</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-cyan100-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

## Neutral

Used in backgrounds, text and peripheral elements, these colors work in conjunction with primary, accent, and semantic colors to optimize them. It is the neutrality of these colors that allow other colors to stand out and make the greatest impact.

### Grey

<div class="palette-container">
  <div class="color-watches">
    <div class="color-watch grey900">
      <div class="color-info">
        <div>
          <p>Grey 900</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#171717</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">23, 23, 23</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-grey900-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch grey800">
      <div class="color-info">
        <div>
          <p>Grey 800</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#333333</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">51, 51, 51</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Text:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-grey800-base</button>
            </li>
            <li>
              <span>Secondary ???:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-secondary-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch grey700">
      <div class="color-info">
        <div>
          <p>Grey 700</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#666666</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">102, 102, 102</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-grey700-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch grey600">
      <div class="color-info">
        <div>
          <p>Grey 600</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#8A8A8A</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">138, 138, 138</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-grey600-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch grey500">
      <div class="color-info">
        <div>
          <p>Grey 500</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#ADADAD</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">173, 173, 173</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-grey500-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch grey400">
      <div class="color-info">
        <div>
          <p>Grey 400</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#CCCCCC</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">204, 204, 204</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-grey400-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch grey300">
      <div class="color-info">
        <div>
          <p>Grey 300</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#E3E3E3</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">227, 227, 227</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-grey300-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch grey200">
      <div class="color-info">
        <div>
          <p>Grey 200</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#EEEEEE</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">238, 238, 238</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul>
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-grey200-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch grey100">
      <div class="color-info">
        <div>
          <p>Grey 100</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#F5F5F5</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">245, 245, 245</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-grey100-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

### Blue Grey

<div class="palette-container">
  <div class="color-watches">
    <div class="color-watch blueGrey900">
      <div class="color-info">
        <div>
          <p>Blue Grey 900</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#233B52</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">35, 59, 82</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-blueGrey900-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch blueGrey800">
      <div class="color-info">
        <div>
          <p>Blue Grey 800</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#2F4B65</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">47, 75, 101</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Text:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-blueGrey800-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch blueGrey700">
      <div class="color-info">
        <div>
          <p>Blue Grey 700</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#385D81</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">56, 93, 129</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-blueGrey700-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch blueGrey600">
      <div class="color-info">
        <div>
          <p>Blue Grey 600</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#5E7D9C</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">94, 125, 156</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-blueGrey600-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch blueGrey500">
      <div class="color-info">
        <div>
          <p>Blue Grey 500</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#809CB7</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">128, 156, 183</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-blueGrey500-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch blueGrey400">
      <div class="color-info">
        <div>
          <p>Blue Grey 400</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#B4C9DB</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">180, 201, 219</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-blueGrey400-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch blueGrey300">
      <div class="color-info">
        <div>
          <p>Blue Grey 300</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#D2DEE9</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">210, 222, 233</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-blueGrey300-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch blueGrey200">
      <div class="color-info">
        <div>
          <p>Blue Grey 200</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#E7EDF3</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">231, 237, 243</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul>
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-blueGrey200-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch blueGrey100">
      <div class="color-info">
        <div>
          <p>Blue Grey 100</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#F5F7FA</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">245, 247, 250</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-blueGrey100-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

## Semantic

Semantic Colors are universally recognized and reserved to identify specific types of messages and information. Avoid using these colors, or those closely resembling them, for general design. They should be used exclusively to indicate the following: Blue = Information; Green = Success, correct; Orange = Alert, caution; Red = Danger, error.

### Blue, Green, Orange & Red

<div class="palette-container">
  <div class="color-watches">
    <div class="color-watch blue500">
      <div class="color-info">
        <div>
          <p>Blue 500</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#3399FF</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">51, 153, 255</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-blue500-base</button>
            </li>
            <li>
              <span>Info:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-info-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch green700">
      <div class="color-info">
        <div>
          <p>Green 700</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#0B8D1F</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">11, 141, 31</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-green700-base</button>
            </li>
            <li>
              <span>Success:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-success-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch orange500">
      <div class="color-info">
        <div>
          <p>Orange 500</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#F39C12</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">243, 156, 18</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-orange500-base</button>
            </li>
            <li>
              <span>Warning:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-warning-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch red600">
      <div class="color-info">
        <div>
          <p>Red 600</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#DD3333</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">221, 51, 51</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-red600-base</button>
            </li>
            <li>
              <span>Error:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-error-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>


## Supporting Semantic Colors

In addition to the full family of Primary Blue and Accent Green being available as supporting semantic colors we also have Orange and Red palette’s.

### Orange

<div class="palette-container">
  <div class="color-watches">
    <div class="color-watch orange900">
      <div class="color-info">
        <div>
          <p>Orange 900</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#654006</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">101, 64, 6</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-orange900-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch orange800">
      <div class="color-info">
        <div>
          <p>Orange 800</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#8E5D10</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">142, 93, 16</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-orange800-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch orange700">
      <div class="color-info">
        <div>
          <p>Orange 700</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#AF7312</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">175, 115, 18</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-orange700-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch orange600">
      <div class="color-info">
        <div>
          <p>Orange 600</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#D0840B</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">208, 132, 11</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-orange600-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch orange500">
      <div class="color-info">
        <div>
          <p>Orange 500</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#F39C12</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">243, 156, 18</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-orange500-base</button>
            </li>
            <li>
              <span>Warning:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-warning-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch orange400">
      <div class="color-info">
        <div>
          <p>Orange 400</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#F6BC60</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">246, 188, 96</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-orange400-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch orange300">
      <div class="color-info">
        <div>
          <p>Orange 300</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#F9D090</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">249, 208, 144</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-orange300-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch orange200">
      <div class="color-info">
        <div>
          <p>Orange 200</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#FDE3BA</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">253, 227, 186</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul>
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-orange200-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch orange100">
      <div class="color-info">
        <div>
          <p>Orange 100</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#FDF3E2</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">253, 243, 226</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-orange100-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>


### Red

<div class="palette-container">
  <div class="color-watches">
    <div class="color-watch red900">
      <div class="color-info">
        <div>
          <p>Red 900</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#651111</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">101, 17, 17</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-red900-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch red800">
      <div class="color-info">
        <div>
          <p>Red 800</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#901818</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">144, 24, 24</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-red800-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch red700">
      <div class="color-info">
        <div>
          <p>Red 700</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#BC1F1F</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">188, 31, 31</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-red700-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch red600">
      <div class="color-info">
        <div>
          <p>Red 600</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#DD3333</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">221, 51, 51</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-red600-base</button>
            </li>
            <li>
              <span>Error:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-error-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch red500">
      <div class="color-info">
        <div>
          <p>Red 500</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#EC5555</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">236, 85, 85</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-red500-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch red400">
      <div class="color-info">
        <div>
          <p>Red 400</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#F18383</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">241, 131, 131</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-red400-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch red300">
      <div class="color-info">
        <div>
          <p>Red 300</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#F6ACAC</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">246, 172, 172</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-red300-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch red200">
      <div class="color-info">
        <div>
          <p>Red 200</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#FCCFCF</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">252, 207, 207</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul>
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-red200-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch red100">
      <div class="color-info">
        <div>
          <p>Red 100</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#FDECEC</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">253, 236, 236</button>
            </li>
          </ul>
        </div>
        <div>
          <p>Tokens</p>
          <ul class="color-tokens">
            <li>
              <span>Background:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">--v-red100-base</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

## Interactive States

We use shades of Blue to indicate active states of icons and buttons, while Grey indicates a disabled state. 

Use these colors to indicate the following: Normal = Blue 700; Active = Blue 600 with a 4dp shadow; Hover = Blue 600; Disable = Grey 400.

## Illustration Skin Tones

Please use to the following skin tone palette for Illustrations only.

<div class="palette-container">
  <div class="color-watches">
    <div class="color-watch beige">
      <div class="color-info">
        <div>
          <p>Beige</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#F7D3A6</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">247, 211, 166</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch porcelain">
      <div class="color-info">
        <div>
          <p>Porcelain</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#FDB797</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">253, 183, 151</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch almond">
      <div class="color-info">
        <div>
          <p>Almond</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#BC7758</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">188, 119, 88</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch espresso">
      <div class="color-info">
        <div>
          <p>Espresso</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#7E3C06</button>
            </li>
            <li>
              <span>RGB:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">126, 60, 6</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>


## Gradients

While gradients can add visual interest, they are best used to illustrate and emphasize the concepts of progression, change, and movement. If overused or used without specific purpose, gradients can lose their effectiveness.

<div class="palette-container">
  <div class="color-watches">
    <div class="color-watch opp-night">
      <div class="color-info">
        <div>
          <p>Linear Gradient Opp Night</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX 1:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#0A2144</button>
            </li>
            <li>
              <span>HEX 2:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#336699</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="color-watch accelerator">
      <div class="color-info">
        <div>
          <p>Linear Gradient Accelerator</p>
          <ul class="hex-rgb">
            <li>
              <span>HEX 1:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#FF0000</button>
            </li>
            <li>
              <span>HEX 2:&nbsp;&nbsp;</span>
              <button title="Click to copy" @click="copy">#3399FF</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

## ADA Color Compatibility

For greatest success, it’s important that Primerica digital communications be accessible to everyone. 
Just as importantly, our commitment to accessibility reinforces the Primerica values of inclusion 
and provides exceptional customer service. For these reasons, Primerica strives to have the proper color 
contrast ratios to comply with WCAG 2.0, Level AA. This includes, but is not limited to:


For normal text less than 24 px or less than 18pt, WCAG level AA requires a color contrast ratio of at least 4:5:1. 
Level AAA requires a ratio that’s equal to or more than 7:1. 


For large text equal to or more than 24 px or equal to or more than 18pt, WCAG level AA requires a color contrast ratio of at least 3:1. 
Level AAA requires a ratio that’s equal to or more than 4:5:1. 

<ul>
<li>‍Menus and navigation items</li>
<li>‍Titles and headers</li>
<li>‍Font colors in combination with any background colors</li>
<li>‍Font colors in combination with font sizes and weights</li>
<li>‍Background colors in combination with images or text</li>
</ul>

One important step in meeting ADA accessibility standards is to check color contrast ratios at 
<strong><a href="https://webaim.org/resources/contrastchecker/" target="_blank">Contrast Checker</a></strong>