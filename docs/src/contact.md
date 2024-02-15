import { Meta } from '@storybook/addon-docs';

<Meta title="OneX Design System/CONTACT" />

<style>
  {`
  .main-container {
    margin: auto;
    padding-bottom: 30px;
    width: 60%;
  }
  #mainContent H1,
  #mainContent H2,
  #mainContent H3 {
    margin-top: 20px;
  }
  .sbdocs.sbdocs-content .main-container H2,
  .sbdocs.sbdocs-content .main-container SECTION > H2 {
    border-bottom: 1px solid rgba(0, 0, 0, 0.35);
    margin-bottom: 20px;
  }
  #mainContent {
    top: 0;
  }
  .main-container A > IMG {
    box-shadow: 0px 0px 7px rgb(0 0 0 / 10%);
  }
  .btn-navy {
    background-color: #063562;
    width: 280px;
    max-width: 100%;
    height: 48px;
  }
  #mainContent .btn-navy A {
    color: white;
    font-size: 18px;
  }
  .btn-navy:hover {
    background-color: #02579e;
  }
  .btn-navy:focus {
    background-color: #063562;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.15), 0 2px 4px 0 rgba(0, 0, 0, 0.12);
  }
  `}
</style>

<div className="main-container">
  <div id="mainContent">
    <h1>Contact Strategic Design Department</h1>
    <p>
      Please feel free to contact the Strategic Design Team leadership with any questions, 
      or to submit a request for any design work you may need. Our Team leaders are:
    </p>
    <ul>
      <li>
        <strong><a href="mailto:stephen.dussault@primerica.com" target="_blank">Stephen Dussault</a></strong>
      </li>
      <li>
        <strong><a href="mailto:Chris.Manning@primerica.com" target="_blank">Chris Manning</a></strong>
      </li>
    </ul>
    <h2>New Requests</h2>
    <p>
      All requests for design work need to go through our intake process. 
      Click the button below to access our XD Intake Request form and initiate your request.
    </p>
    <button class="btn-navy">
      <strong><a href="https://forms.office.com/Pages/ResponsePage.aspx?id=TBnNGmm6qEumgJBDYbP6M5c7BAFgfEhCsJQozUodtX5URE9KR1VRR1lXNDZDWVVKMU9HRTJZMzVWOSQlQCN0PWcu" target="_blank">Request form</a></strong>
    </button>
  </div>
</div>
