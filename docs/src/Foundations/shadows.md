<style>
  .vp-doc TABLE#elevations TR TH {
    text-align: left;
  }
</style>


# Shadows

## Meaning and Message

Shadows can express the degree of elevation between surfaces in ways that other techniques cannot.

Shadows show the edges of a surface and its degree of elevation against the background. They also make differences in surface elevations perceptible between non-overlapping surfaces.


## Shadow Examples

<p><img src="/assets/images/Shadows.png" alt="Shadows examples"/></p>

## Elevation for Shadows

### Measuring Elevation

Elevation is measured as the distance between visual surfaces. The distance from the front of one surface to the front of another surface is measured along the z-axis in pixels (px) and depicted (by default) using shadows.

<p><img src="/assets/images/Elevation1.png" alt="Elevation example 1" class="image-white-bg image-border" /></p>
<ol>
  <li>One surface at 1px elevation and another surface at 8px elevation, as viewed from the front.</li>
  <li>The difference in elevation between the two surfaces is 7px, as viewed from the side.</li>
</ol>

Surfaces at the same elevation can appear differently when other surfaces are behind them.

<p><img src="/assets/images/elevation2.png" alt="Elevation example 2" class="image-white-bg image-border" /></p>
<ol>
  <li>Both surfaces A and B are at the same 8px elevation. They cast different shadows because surface B is in front of another surface C that already has an elevation.</li>
  <li>Elevation differences between surfaces A, B, and C as viewed from the side.</li>
</ol>

## Default Elevations

All elements have default values for resting elevation and dynamic elevation offsets.  Certain components are positioned at higher elevations than others, establishing a consistent elevation order across all components.  For example, dialogs always appear in front of all other components.

The following table lists default values for resting elevation and dynamic elevation offsets.

### Table of Default Elevation Values

<table id="elevations">
  <thead>
    <tr>
      <th>Component</th>
      <th>Default Elevation Values (px)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Top Navigation Bar (resting elevation)</td>
      <td>0</td>
    </tr>
    <tr>
      <td>Search bar (resting elevation)</td>
      <td>0</td>
    </tr>
    <tr>
      <td>Text Button</td>
      <td>0</td>
    </tr>
    <tr>
      <td>Toggle</td>
      <td>1</td>
    </tr>
    <tr>
      <td>Card</td>
      <td>2</td>
    </tr>
    <tr>
      <td>Button Filled & Outline (resting elevation)</td>
      <td>2</td>
    </tr>
    <tr>
      <td>Top Navigation Bar (scrolled state)</td>
      <td>4</td>
    </tr>
    <tr>
      <td>Standard bottom sheet</td>
      <td>8</td>
    </tr>
    <tr>
      <td>Footer/Toasts</td>
      <td>8</td>
    </tr>
    <tr>
      <td>Menus and Sub Menus</td>
      <td>8</td>
    </tr>
    <tr>
      <td>Button Filled & Outline (pressed state)</td>
      <td>8</td>
    </tr>
    <tr>
      <td>Floating action button (FAB - pressed)</td>
      <td>12</td>
    </tr>
    <tr>
      <td>Modals</td>
      <td>16</td>
    </tr>
    <tr>
      <td>Navigation drawer</td>
      <td>16</td>
    </tr>
    <tr>
      <td>Dialog (notifications, ?)</td>
      <td>24</td>
    </tr>
  </tbody>
</table>

### Diagram of Default Elevation Values

Cross-section diagram showing the resting elevation and dynamic elevation offsets for multiple components.

<p><img src="/assets/images/shadow-graph.png" alt="Shadow Graph" class="image-white-bg image-border" /></p>

### Resting Elevation

Resting elevations are starting elevation values given to components by default.  Components move from resting elevations in response to the user.  All components have resting elevations that are the same for each type of component.  For example all filled and outlined button has the same resting elevations as each other, and a dialog has the same resting elevation as other dialogs.

### Changing Elevation

Components can change elevation in response to user interaction.  When user interaction happens, the components move to preset dynamic elevation offsets, which are the default elevation components move when not resting.

Dynamic elevation offsets are the same across each type of component.  For example, all outlined and filled buttons use the same offset as other filled and outlined buttons.

Once the user interaction is completed or cancelled, the component swiftly returns to its resting elevation.

