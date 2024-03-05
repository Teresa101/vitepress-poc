<style>
  .inline-list {
    display: inline-block;
    margin: 0;
    width: 45%;
  }
  .inline-list:first-of-type {
    margin-right: 20px;
  }
  .toggles.inline-list {
    width: 33%;
  }
  .toggles.inline-list:first-of-type {
    margin-right: 0;
  }

  /* ----------- 0 - 847px ----------- */
  @media screen and (max-width: 847px) {
    .inline-list {
      display: block;
      width: 100%;
    }
    .inline-list:first-of-type {
      margin-right: 0;
    }
  }
</style>


# Multi-Language Support

## Meaning and Message

When text is translated from one language to another, the length of the source and translated text is likely to be different. There are some ways in which these differences in length can be systematic. The guidelines included here will help create a consistent user experience across Primerica products in all languages.

## Languages Supported on Primerica

Primerica Apps will support four language selections: English (US), Español (US), English (CAN), and Français (CAN). These languages all fall into the classification of “English-like” typefaces written in the Latin alphabet. All languages currently supported by Primerica will be read left to right and use the Open Sans font type.

## Text Length

When our UI is translated into other languages, the text length will often change. English is a compact language, and other languages may require more characters to display the same meaning. Always consider this when assigning text to areas that may have limited space, such as buttons or headers.

A good general rule for text expansion is: The shorter a word is in English, the longer the translated text is likely to be. The following table shows the average text expansion rate for different English text lengths.

<p><img src="/assets/images/TranslationExpansionTable.png" width="500" alt="Translation Expansion Table example"/></p>

## Character Count

While we do not have a hard rule on global character counts, we need to be aware of the limitations of some standard UI items.

### Buttons

The standard button may begin to look crowded with 20 characters. When designing in English, we can plan ahead for multi-language support by anticipating a 10 character call to action on a button may expand to 15-20 characters in other languages. See these examples of how a short CTA in English expands when translated into other languages we support.

**English (US)** 8 characters

<p class="image-grid"><img src="/assets/images/ButtonHelpEng.png" class="image-white-bg img-spacing" width="240" alt="Get Help button"/> <img src="/assets/images/ButtonEmailEng.png" width="240" alt="Email Us button"/></p>

**Español (US)** 14-18 characters

<p class="image-grid"><img src="/assets/images/ButtonHelpEsp.png" class="image-white-bg img-spacing" width="240" alt="Get Help button in Spanish"/> <img src="/assets/images/ButtonEmailEsp.png" width="240" alt="Email Us button in Spanish"/></p>

**Français (CAN)** 17-21 characters

<p class="image-grid"><img src="/assets/images/ButtonHelpFra.png" class="image-white-bg img-spacing" width="240" alt="Get Help button in French"/> <img src="/assets/images/ButtonEmailFra.png" width="240" alt="Email Us button in French"/></p>

### Headers

Headers should be direct, concise, and specific. Keep in mind that not only will we need to be aware of translation expansion, but also how this will be interpreted responsively on smaller devices. On tablet and desktop, the title below has plenty of room, but on a smaller device, an 18 character header has just enough space. The longer translated title with 25 characters fits too close to the back button and three-dot menu.

**Tablet English (US)**

<p><img src="/assets/images/HeaderTabEng.png" width="700" alt="Example of header bar in English on tablet"/></p>

**Tablet Français (CAN)**

<p><img src="/assets/images/HeaderTabFra.png" width="700" alt="Example of header bar in French on tablet"/></p>

**Mobile English (US)**

<p><img src="/assets/images/HeaderMobileEng.png" width="400" alt="Example of header bar in English on mobile"/></p>

**Mobile Français (CAN)**

<p><img src="/assets/images/HeaderMobileFra.png" width="400" alt="Example of header bar in French on mobile"/></p>

### Body Copy

In most cases body copy will be more forgiving of text expansion, allowing content to shift to accommodate copy. However, in rare cases, there may be limitations in design or technical capabilities depending in product requirements.

### Messaging

SMS messaging is always intended to be as short as possible, but you will need to consider a 160 character limit on SMS which may require more hands-on translation and wordsmithing to achieve similar messaging in all languages, especially if a URL is included.

## Behaviors and Guidelines

### Word Wrap

While some components are made to accommodate word wrapping as needed, we usually want to avoid wrapping. Alerts are intended to have concise messaging, but wrapping is possible as circumstances require. Tooltips will be short messages, but wrapping is possible. Tables and cells may be responsive and allow expanding or wrapping in some circumstances, but it is recommended to avoid wrapping in tables. Consider a character count for your table design that will allow for translation expansion. Some items are not designed to accommodate wrapping and may require greater consideration with translation to avoid copy expansion.

<div class="inline-list">
  <p><strong>Wrapping Possible</strong></p>
  <ul>
    <li>Tables and Cells</li>
    <li>Alerts</li>
    <li>Tooltips</li>
  </ul>
</div>
<div class="inline-list">
  <p><strong>Wrapping Not Possible</strong></p>
  <ul>
    <li>Buttons</li>
    <li>Input Fields (Floating Label)</li>
    <li>Headers</li>
  </ul>
</div>

### Character Counting in Table Design (English)

<p><img src="/assets/images/TableCharacterCountEng.png" width="700" alt="Example of character count in table design with English language"/></p>

### Character Counting in Table Design (Français)

<p><img src="/assets/images/TableCharacterCountFra.png" width="700" alt="Example of character count in table design with French language"/></p>

## Font Size

When displaying copy it is not recommended to adjust font size smaller to accommodate translation expansion. The font size in page is designed for optimal scannable legibility. Adjusting the font size to accommodate other languages would be a bad experience for users reading that language.

## Toggles

Sometimes we use a toggle with an On/Off selection. It may be impossible to fit the translated copy into the toggle component. In that case, use labeling outside of the toggle as seen below.

<div class="toggles inline-list">
  <p><strong>English</strong></p>
  <p><img src="/assets/images/ToggleEng.png" alt="Sample of Toggle in English language" class="image-white-bg" /></p>
</div>
<div class="toggles inline-list">
  <p><strong>Français</strong></p>
  <p><img src="/assets/images/ToggleFra.png" alt="Sample of Toggle in French language" class="image-white-bg" /></p>
</div>
<div class="toggles inline-list">
  <p><strong>Español</strong></p>
  <p><img src="/assets/images/ToggleEsp.png" alt="Sample of Toggle in Spanish language" class="image-white-bg" /></p>
</div>
