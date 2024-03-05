<style>
  #interactionStates.grid-container {
    display: inline-grid;
    grid-template-columns: auto auto;
    gap: 16px;
    margin: 0 0 20px;
    width: 100%;
  }
  #interactionStates.grid-container .grid-item {
    padding: 0;
    width: 400px;
  }

  /* ----------- 550px - 1495px ----------- */
  @media screen and (min-width: 551px) and (max-width: 1495px) {
    #interactionStates.grid-container {
      grid-template-columns: auto;
    }
    #interactionStates.grid-container .grid-item {
      width: 100%;
    }
  }
  /* ----------- 1495px - 1600px ----------- */
  @media screen and (min-width: 1496px) and (max-width: 1600px) {
    #interactionStates.grid-container {
      grid-template-columns: auto auto;
    }
  }
  /* ----------- 1600px + ----------- */
  @media screen and (min-width: 1601px) {
    #interactionStates.grid-container {
      grid-template-columns: auto auto;
    }
  }
</style>


# Interaction

## Meaning and Message

When applied correctly, interactions with the use of gestures and states can provide users with the feedback they need to help them move through an application or web experience.

## Interaction Guidelines

<ul>
  <li>When creating motion or animation for any Primerica product, please refer to Material Design for guidelines, principles and best practices.</li>
  <li>Use framework interactions that resemble current design system standards. Avoid inconsistent framework interactions.</li>
</ul>

## Gestures

Gestures help users to navigate in app, move content, and manipulate UI elements with touch.

## Other Inputs

Users navigate, move content, and manipulate UI elements with a mouse or keyboard on a desktop.


## Interaction Principles

### Effortless

Interaction principles help users perform tasks rapidly and intuitively using touch or mouse clicks.

### Ease of Use

Users should be able to intuitively and imprecisely manipulate elements.

Types of interactions include:

<ul>
  <li>Tap</li>
  <li>Scroll</li>
  <li>Swipe</li>
  <li>Drag</li>
  <li>Click</li>
</ul>

#### Tap and Click

Users can navigate to destinations by touching or clicking elements.

<p><img src="/assets/images/Tap-2.gif" width="400" alt="Tap interaction example" class="image-border" /></p>

#### Scroll

Users can slide surfaces vertically or horizontally to move continuously through content.

<p><img src="/assets/images/Scroll.gif" width="400" alt="Scroll interaction example" class="image-border" /></p>

#### Swipe

Users can move surfaces horizontally to navigate between peers, like tabs.

<p><img src="/assets/images/swip.gif" width="400" alt="Swipe interaction example" class="image-border" /></p>

#### Drag

Users can slide surfaces to bring them into and out of view.

<p><img src="/assets/images/Drag.gif" width="400" alt="Drag interaction example" class="image-border" /></p>


## States

States are visual representations used to communicate the status of a component or interactive element.

### State Principles

Each state should be visually similar and not drastically alter a component, but must have clear affordances that distinguish it from other states and the surrounding layout.

#### Distinct

States must have clear affordances distinguishing them from other states. States should be intuitively obvious to the user to match schemas. For example, disabled should be less visible or  be grayed out. Hover state should have a shadow to indicate the component is floating or in focus.

#### Additive

When multiple states occur at once such as selection and hover, both state indicators should be displayed. States should never be directly conflicting (error and success states in one element)

#### Consistent

States should be applied consistently across components in order to increase usability.

Types of States include:

<ul>
  <li>Enabled</li>
  <li>Disabled</li>
  <li>Hover</li>
  <li>Focused</li>
  <li>Selected</li>
  <li>Validation</li>
  <li>Error</li>
  <li>On</li>
  <li>Off</li>
</ul>
<div id="interactionStates" className="grid-container">
  <div className="grid-item">
    <h4 className="grid-sub-item">Enabled</h4>
    <div className="desc grid-sub-item">
      <p>An enabled state communicates an interactive component or element.</p>
      <p><img src="/assets/images/Enabled.png" width="400" alt="Enabled example" class="image-border" /></p>
    </div>
  </div>
  <div className="grid-item">
    <h4 className="grid-sub-item">Disabled</h4>
    <div className="desc grid-sub-item">
      <p>A disabled state communicates a noninteractive component or element.</p>
      <p><img src="/assets/images/Disabled.png" width="400" alt="Disabled example" class="image-border" /></p>
    </div>
  </div>
  <div className="grid-item">
    <h4 className="grid-sub-item">Hover</h4>
    <div className="desc grid-sub-item">
      <p>A hover state communicates when a user has placed a cursor above an interactive element.</p>
      <p><img src="/assets/images/Hover.png" width="400" alt="Hover example" class="image-border" /></p>
    </div>
  </div>
  <div className="grid-item">
    <h4 className="grid-sub-item">Focused</h4>
    <div className="desc grid-sub-item">
      <p>A focused state shows when a user highlights an element, using an input method such as a keyboard.</p>
      <p><img src="/assets/images/Focused.png" width="400" alt="Focused example" class="image-border" /></p>
    </div>
  </div>
  <div className="grid-item">
    <h4 className="grid-sub-item">Selected</h4>
    <div className="desc grid-sub-item">
      <p>A selected state communicates a user choice.</p>
      <p><img src="/assets/images/Selected.png" width="400" alt="Selected example" class="image-border" /></p>
    </div>
  </div>
  <div className="grid-item">
    <h4 className="grid-sub-item">Validation</h4>
    <div className="desc grid-sub-item">
      <p>Communicates feedback to the user.</p>
      <p><img src="/assets/images/Error.png" width="400" alt="Validation example" class="image-border"/></p>
    </div>
  </div>
  <div className="grid-item">
    <h4 className="grid-sub-item">On</h4>
    <div className="desc grid-sub-item">
      <p>An on state communicates a toggle between two options.</p>
      <p><img src="/assets/images/On.png" width="400" alt="On state example" class="image-border" /></p>
    </div>
  </div>
  <div className="grid-item">
    <h4 className="grid-sub-item">Off</h4>
    <div className="desc grid-sub-item">
      <p>An off state communicates a toggle between two options.</p>
      <p><img src="/assets/images/Off.png" width="400" alt="Off state example" class="image-border" /></p>
    </div>
  </div>
</div>

## Material Design Interaction Resources

### Material Design 2

<p>Gestures: <strong><a href="https://m2.material.io/design/interaction/gestures.html#principles" target="_blank">Gestures principles</a></strong></p>
<p>Selection: <strong><a href="https://m2.material.io/design/interaction/selection.html#properties" target="_blank">Selection properties</a></strong></p>
<p>States: <strong><a href="https://m2.material.io/design/interaction/states.html#usage" target="_blank">States usage</a></strong></p>
<h3>Material Design 3</h3>
<p>States: <strong><a href="https://m3.material.io/foundations/interaction-states" target="_blank">Interaction states</a></strong></p>

