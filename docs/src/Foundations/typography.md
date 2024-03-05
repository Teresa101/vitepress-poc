<style>
  .typography-specs {
    border: 1px solid var(--vp-c-divider);
    display: inline-block;
    margin-bottom: 24px;
    padding: 0 20px 30px;
    width: 100%;
  }
  .typography-specs .inline-layout {
    display: inline-block;
  }
  .typography-specs P:first-of-type {
    margin-bottom: 0;
  }
  .typography-specs P.inline-layout {
    max-width: fit-content;
  }
  .typography-specs P.inline-layout .large-text {
    font-size: 78px;
    font-weight: 600;
    margin-right: 5px;
  }
  .typography-specs UL.inline-layout {
    list-style: none;
  }
  .typography-specs UL.inline-layout LI {
    font-size: 12px;
    margin-top: 0;
  }
  .typography-specs UL.inline-layout LI.normal-text {
    font-weight: 400;
  }
  .typography-specs UL.inline-layout LI.semibold-text,
  .sbdocs.sbdocs-wrapper .typography-specs .button {
    font-weight: 600;
  }
  .typography-specs UL.inline-layout LI.bold-text {
    font-weight: 700;
  }
  .typography-specs .heading {
    font-weight: 600;
    margin-top: 0;
    padding: 0;
  }
  .typography-specs .hero-heading-one {
    font-size: 64px;
    line-height: 82px;
    margin: 0;
    margin-left: -5px;
  }
  .typography-specs .hero-heading-two {
    font-size: 36px;
    line-height: 48px;
    margin-left: -3px;
  }
  .typography-specs .heading-one {
    font-size: 24px;
    line-height: 36px;
    margin-left: -1px;
  }
  .typography-specs .heading-two {
    font-size: 20px;
    line-height: 30px;
    margin-left: -1px;
  }
  .typography-specs .heading-three {
    font-size: 18px;
    line-height: 27px;
    margin-left: -1px;
  }
  .typography-specs .heading-four,
  .typography-specs .body-large,
  .typography-specs .button {
    font-size: 16px;
    line-height: 24px;
    margin-left: -1px;
  }
  .typography-specs .heading-five,
  .typography-specs .body.body-medium,
  .typography-specs .body-medium A {
    font-size: 14px;
    line-height: 24px;
    margin-left: -1px;
  }
  .typography-specs .heading-six,
  .typography-specs .body.body-small,
  .typography-specs .body-small A {
    font-size: 12px;
    line-height: 21px;
    margin-left: -1px;
  }
  .typography-specs .body {
    font-weight: 400;
    margin: 0;
    padding: 0;
  }
  .typography-specs .body A {
    text-decoration: underline;
  }
  .typography-specs .body.body-medium:first-of-type,
  .typography-specs .body.body-small:first-of-type,
  .typography-specs .button {
    margin-top: 16px;
  }
  .typography-specs .body.body-medium,
  .typography-specs .body-medium A,
  .typography-specs .body.body-small,
  .typography-specs .body-small A {
    margin-left: 0;
  }
  .typography-specs .body A.default-link,
  .typography-specs .button-normal {
    border-right: thin solid var(--v-grey400-base);
    color: var(--v-blue600-base);
    margin-right: 10px;
    padding-right: 10px;
  }
  .typography-specs .body A.hover-link,
  .typography-specs .button-hover {
    color: var(--v-blue700-base);
  }
  .typography-specs .text-format-rules {
    background-color: var(--vp-code-bg);
    font-size: 14px;
    margin-top: 0;
    padding: 3px 7px 5px;
  }
  .heading-samples {
    border: 1px solid var(--vp-c-divider);
    margin: 30px 0;
    padding: 7px 14px;
  }
  .heading-samples H2,
  .heading-samples H3 {
    border-top: none;
    margin-top: 0;
    padding-top: 0;
  }
  .vp-doc .heading-samples :not(pre, h1, h2, h3, h4, h5, h6) > code {
    color: var(--vp-c-text-1);
    margin-right: 7px;
  }
</style>


# Typography

## Meaning and Message

Good and proper use of our fonts is important for our brand and they should be used consistently across all products. Fonts used in our Primerica products should match our brand standards for their respective use.

For our digital products, we use Open Sans font. For print products, we use both Interstate and Garamond, as defined in the Primerica Branding Guidelines.

All our digital products should first use standard, semantic text tags wherever possible. Variables are given as modifiers for an alternate solution.

## Font, Headings, Body and Button Text Formats

<div class="typography-specs">

<p><strong>Open Sans</strong></p>

<p class="inline-layout"><span class="large-text">Aa</span></p>

<ul class="inline-layout">
  <li class="normal-text">Regular / 400</li>
  <li class="semibold-text">Semibold / 600</li>
  <li class="bold-text">Bold / 700</li>
</ul>
<div>
  <p class="heading hero-heading-one">Large Hero Header</p>
  <p class="text-format-rules">64px / 2.25rem / Line height: 82px</p>
</div>
<div>
  <p class="heading hero-heading-two">Hero Header</p>
  <p class="text-format-rules">36px / 2.25rem / Line height: 48px</p>
</div>
<div>
  <p class="heading heading-one">Heading one</p>
  <p class="text-format-rules">24px / 1.5rem / Line height: 36px</p>
</div>
<div>
  <p class="heading heading-two">Heading two</p>
  <p class="text-format-rules">20px / 1.25rem / Line height: 30px</p>
</div>
<div>
  <p class="heading heading-three">Heading three</p>
  <p class="text-format-rules">18px / 1.125rem / Line height: 27px</p>
</div>
<div>
  <p class="heading heading-four">Heading four</p>
  <p class="text-format-rules">16px / 1rem / Line height: 24px</p>
</div>
<div>
  <p class="heading heading-five">Heading five</p>
  <p class="text-format-rules">14px / .875rem / Line height: 24px</p>
</div>
<div>
  <p class="heading heading-six">Heading six</p>
  <p class="text-format-rules">12px / .75rem / Line height: 21px</p>
</div>
<div>
  <p class="body body-large">Body 1 - Large</p>
  <p class="body text-format-rules">16px / 1rem / Line height: 24px / Link default color: <span class="link-default-color" aria-label="blue-700"></span> / Link hover color: <span class="link-hover-color" aria-label="blue-800"></span></p>
  <p class="body body-large">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <p class="body body-large"><a href="#" target="_self" class="default-link">Default Text Link</a><a href="#" target="_self" class="hover-link">Hover Text Link</a></p>
</div>
<div>
  <p class="body body-medium">Body 2 - Medium</p>
  <p class="body text-format-rules">14px / .875rem / Line height: 24px / Link default color: <span class="link-default-color" aria-label="blue-700"></span> / Link hover color: <span class="link-hover-color" aria-label="blue-800"></span></p>
  <p class="body body-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <p class="body body-medium"><a href="#" target="_self" class="default-link">Default Text Link</a><a href="#" target="_self" class="hover-link">Hover Text Link</a></p>
</div>
<div>
  <p class="body body-small">Body 3 - Small</p>
  <p class="body text-format-rules">12px / .75rem / Line height: 21px / Link default color: <span class="link-default-color" aria-label="blue-700"></span> / Link hover color: <span class="link-hover-color" aria-label="blue-800"></span></p>
  <p class="body body-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <p class="body body-small"><a href="#" target="_self" class="default-link">Default Text Link</a><a href="#" target="_self" class="hover-link">Hover Text Link</a></p>
</div>
<div>
  <button class="button button-normal">Default Text Button</button><button class="button button-hover">Hover Text Button</button>
  <p class="text-format-rules">Semi-bold / 16px / 1rem / Line height: 24px / Button default color: <span class="link-default-color" aria-label="blue-700"></span> / Button hover color: <span class="link-hover-color" aria-label="blue-800"></span></p>
</div>

</div>


## Type Sizes

Type sizes should be used with semantic tags where possible. Classes can be created to use sizes that fall outside of the default specification, but should be used sparingly. Creating different specifications leads to inconsistency. Open Sans has five weights (300 Light, 400 Normal, Semi-Bold 600, Bold 700 and Extra Bold 800), each of them with an italic version, totaling ten versions.

## Type Colors

Our standard in page color for typography is #333333 on light backgrounds, and #FFFFFF on dark backgrounds. This is a guideline and may be changed as per project requirements or design needs.

## Line Height

In the context of an enterprise application, the need for long-form text is quite rare. More often, application design involves many small bits of text that all represent the user’s data. This text is spaced intentionally to maintain distinction between different types and rows of data. As a result, we take a pragmatic approach to spacing and line height by resetting all margins and paddings to 0, and allowing the line-height property for all text to inherit a globally defined ratio of 1.5 of the text size. This allows designers and developers to easily opt-in to specific text spacing by leveraging our CSS Text and Spacing Utilities. We do provide a long-form text CSS utility, which will result in our recommended vertical text rhythm for optimizing a balance between readability and space efficiency.

## Example Page Hierarchy

The following section is an example how headings appear with normal paragraph text.

<div class="heading-samples">
  <h1><code>&lt;h1&gt;Page Heading&lt;&#47;h1&gt;</code> Page Heading</h1>
  <p>font-size: 1.5rem; (24px) font-weight: 600; line-height: 36px;</p>
  <h2><code>&lt;h2&gt;Section Heading&lt;&#47;h2&gt;</code> Section Heading</h2>
  <p>font-size: 1.25rem; (20px) font-weight: 600; line-height: 30px;</p>
  <h3><code>&lt;h3&gt;Section of the page&lt;&#47;h3&gt;</code> Section of the page</h3>
  <p>font-size: 1.125rem; (18px) font-weight:600; line-height: 27px;</p>
  <h4><code>&lt;h4&gt;Subsection of the page&lt;&#47;h4&gt;</code> Subsection of the page</h4>
  <p>font-size: 1rem; (16px) font-weight: 600; line-height: 24px;</p>
  <h5><code>&lt;h5&gt;Subsection of the page&lt;&#47;h5&gt;</code> Subsection of the page</h5>
  <p>font-size: .875rem (14px) font-weight: 600; line-height: 24px;</p>
  <h6><code>&lt;h6&gt;Subsection of the page&lt;&#47;h6&gt;</code> Subsection of the page</h6>
  <p>font-size: .75rem (12px) font-weight: 600; line-height: 21px;</p>
</div>

## Inline Formatting

Inline formatting is used to give special treatment to specific portions of typical paragraph text.  It is applied using standards HTML tags as shown in the code below the example.

<div class="heading-samples">
  <p><code>&lt;a&gt;This is a text link&lt;&#47;a&gt;</code><a>This is a text link</a></p>
  <p><code>&lt;strong&gt;Strong is used to indicate strong importance&lt;&#47;strong&gt;</code><strong> Strong is used to indicate strong importance</strong></p>
  <p><code>&lt;i&gt;This text has added emphasis&lt;&#47;i&gt;</code><i> This text has added emphasis</i></p>
  <p><code>&lt;b&gt;b element&lt;&#47;b&gt;</code>The<b> b element</b> is stylistically different text from normal text, without any special importance</p>
  <p><code>&lt;i&gt;i element&lt;&#47;i&gt;</code>The<i> i element</i> is text that is set off from the normal text</p>
  <p><code>&lt;u&gt;u element&lt;&#47;u&gt;</code>The <u>u element</u> is text with an unarticulated, though explicitly rendered, non-textual annotation</p>
  <p><code>&lt;del&gt;This text is deleted&lt;&#47;del&gt;</code> <del>This text is deleted</del> and <code>&lt;ins&gt;This text is inserted&lt;&#47;ins&gt;</code> <ins>This text is inserted</ins></p>
  <p><code>&lt;s&gt;This text has a strikethrough&lt;&#47;s&gt;</code> <s>This text has a strikethrough</s></p>
  <p><code>&lt;sup&gt;®&lt;&#47;sup&gt;</code> Superscript<sup>®</sup></p>
  <p><code>&lt;sub&gt;2&lt;&#47;sub&gt;</code> Subscript for things like H<sub>2</sub>O</p>
  <p><code>&lt;small&gt;This small text is for fine print, etc.&lt;&#47;small&gt;</code> <small>This small text is for fine print, etc.</small></p>
  <p><code>&lt;abbr&gt;title="HyperText Markup Language">HTML&lt;&#47;abbr&gt;</code> Abbreviation: <abbr title="HyperText Markup Language">HTML</abbr></p>
  <p><code>&lt;kbd&gt;Cmd&lt;&#47;kbd&gt;</code> Keyboard input: <kbd>Cmd</kbd></p>
  <p><code>&lt;q&gt;This text is a short inline quotation&lt;&#47;q&gt;</code> <q>This text is a short inline quotation</q></p>
  <p><code>&lt;cite&gt;&mdash;This is a citation&lt;&#47;cite&gt;</code> <cite>&mdash;This is a citation</cite></p>
  <p><code>&lt;dfn&gt;dfn element&lt;&#47;dfn&gt;</code>The <dfn>dfn element</dfn> indicates a definition</p>
  <p><code>&lt;mark&gt;mark element&lt;&#47;mark&gt;</code> The <mark>mark element</mark> indicates a highlight</p>
  <p><code>&lt;code&gt;This is what inline code looks like&lt;&#47;code&gt;</code> <code>This is what inline code looks like</code></p>
  <p><code>&lt;samp&gt;This is sample output from a computer program&lt;&#47;samp&gt;</code> <samp>This is sample output from a computer program</samp></p>
  <p><code>&lt;var&gt;x = y&lt;&#47;var&gt;</code> The variable element: <var>x = y</var></p>
</div>

## Hyperlinks

<p>Link purpose (in context): The <strong><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html#linkpurposedef" target="_blank">purpose of each link</a></strong> can be determined from the link text alone or from the link text together with its <strong><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html#pdlinkcontextdef" target="_blank">programmatically determined link context</a></strong>, except where the purpose of the link would be <strong><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html#ambiguouslinkdef" target="_blank">ambiguous to users in general</a></strong>. (Level A) In cases where the link takes one to a document or a web application, the name of the document or web application would be sufficient to describe the purpose of the link (which is to take you to the document or web application.)</p>