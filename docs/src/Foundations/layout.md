
# Layout

## Meaning and Message

Our layouts encourage consistency across platforms, environments, and screen sizes by using uniform elements and spacing.

They are:

<ul>
  <li><strong>Predictable:</strong> UIs should use intuitive and predictable layouts, with consistent UI regions and spatial organization.</li>
  <li><strong>Consistent:</strong> Layouts should use a consistent grid, key-lines, and padding.</li>
  <li><strong>Responsive:</strong> Layouts are adaptive and react to input from the user, device, and screen elements.</li>
</ul>

## Grid Layout

As we move forward in our development efforts, we are using Vuetify to build our digital products. Vuetify is a Vue UI library that provides us with the tools we need to build robust, effective, and engaging web applications using Material Design specifications.

Vuetify comes with a 12 point grid system built using flex-box, which is used to create specific and consistent layouts within an application's content.

<p><img src="/assets/images/grid-system.png" width="100%" alt="12 point grid system"/></p>

For more details of Vuetify grid system, check it out from Vuetify:

<ol>
  <li><strong><a href="https://v2.vuetifyjs.com/en/components/grids/" target="_blank">Vuetify 2 Grid system</a></strong></li>
  <li><strong><a href="https://vuetifyjs.com/en/components/grids/" target="_blank">Vuetify 3 Grid system</a></strong></li>
</ol> 

## Grid Specifications

### Breakpoints

This grid system contains 5 types of media breakpoints that are used for targeting specific screen sizes or orientations, xs, sm, md, lg and xl, however, we can easily change these to meet our needs.

These resolutions are defined in the Viewport Breakpoints table below and can be modified by customizing the Breakpoint service. This system allows us to control the layout depending upon the window size. That can be achieved by using specific grid props, or helper classes, that will target particular breakpoints.

Material Design Viewport Breakpoints:

<table id="layoutViewport">
  <thead>
    <tr>
      <th>Device</th>
      <th>Code</th>
      <th>Types</th>
      <th colSpan="2">Range</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><em className="mdi mdi-cellphone"></em></td>
      <td>Extra small</td>
      <td><strong>xs</strong></td>
      <td>small to large handset</td>
      <td>&lt; 600px</td>
    </tr>
    <tr>
      <td><em className="mdi mdi-tablet"></em></td>
      <td>Small</td>
      <td><strong>sm</strong></td>
      <td>small to medium tablet</td>
      <td>600px &gt; &lt; 960px</td>
    </tr>
    <tr>
      <td><em className="mdi mdi-laptop"></em></td>
      <td>Medium</td>
      <td><strong>md</strong></td>
      <td>large tablet to laptop</td>
      <td>960px &gt; &lt; 1264*</td>
    </tr>
    <tr>
      <td><em className="mdi mdi-monitor"></em></td>
      <td>Large</td>
      <td><strong>lg</strong></td>
      <td>desktop</td>
      <td>1264 &gt; &lt; 1904px*</td>
    </tr>
    <tr>
      <td><em className="mdi mdi-television"></em></td>
      <td>Extra large</td>
      <td><strong>xl</strong></td>
      <td>4k and ultra-wides</td>
      <td>&gt; 1904px*</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colSpan="5"><em>* -16px on Desktop</em></td>
    </tr>
  </tfoot>
</table>

## Grids for Designer Use

Check out the Layout Grid from Figma's best practice:

<ul>
  <li><strong><a href="https://www.figma.com/best-practices/everything-you-need-to-know-about-layout-grids/layout-grid-basics/" target="_blank">Layout grid basics</a></strong></li>
  <li><strong><a href="https://help.figma.com/hc/en-us/articles/360040450513-Create-Layout-Grids-with-Grids-Columns-and-Rows" target="_blank">Create layout grids with grids, columns, and rows</a></strong></li>
</ul>

