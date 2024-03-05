<style>
  .vp-doc TABLE.data-table TR > TD:first-of-type, 
  .vp-doc TABLE TR TH {
    background-color: var(--v-blue200-base);
    font-weight: 600;
  }
  .vp-doc TABLE TR:nth-child(2n) {
    background-color: var(--v-blueGrey100-base);
  }
  .dark .vp-doc TABLE.data-table TR > TD:first-of-type, 
  .dark .vp-doc TABLE TR TH {
    background-color: var(--v-black-base);
  }
  .dark .vp-doc TABLE TR:nth-child(2n),
  .dark .vp-doc TABLE.data-table TR:nth-child(2n),
  .dark .vp-doc TABLE#layoutViewport TR:nth-child(2n) {
    background-color: var(--v-grey900-base);
  }

  /* ----------- 0 - 550px ----------- */
  @media screen and (max-width: 550px) {
    .vp-doc TABLE.data-table TR > TD:first-of-type {
      background-color: var(--v-blue200-base);
    }
  }

  /* ----------- 550px - 1024px ----------- */
  @media screen and (max-width: 1024px) {
    .vp-doc TABLE.data-table,
    .vp-doc TABLE.data-table TBODY,
    .vp-doc TABLE.data-table TR {
      display: block;
    }
    .vp-doc TABLE.data-table TR {
      border-top: 0;
      height: auto;
    }
    .vp-doc TABLE.data-table {
      border: 1px solid var(--vp-c-divider);
    }
    .vp-doc TABLE.data-table TR:nth-of-type(2n) {
      background-color: white;
    }
    .vp-doc TABLE.data-table TD {
      display: flex;
      border: none;
      border-bottom: thin solid var(--vp-c-divider);
    }
  }
</style>

# Data Formats

## Meaning and Message

Data formats depict different types of numeric and linguistic data.

## Global Rules
<ul>
  <li>‍Only valid characters are allowed to be typed into Input Fields.</li>
  <li>‍Input Fields should be programmed to prevent unapproved/disallowed characters.</li>
  <p class="list-example">
    <strong>Example: </strong>
    A user cannot type numbers in a name field. If they do, nothing will show up in the field.
  </p>
  <li>‍Auto formatting should occur with its appropriate input type.</li>
  <p class="list-example">
    <strong>Example: </strong>
    when entering phone number, field should auto format the users input as they are typing to (###)###-####.
  </p>
  
  <li>‍Typing stops when maximum characters are reached. When a user reaches the max allowed characters, there should be a clear visual indicator accompanied with brief message.</li>
  <p class="list-example">
    <strong>Example: </strong>
    &lt;max limit="160" reached=""&gt;... &lt;&#8725;max&gt;
  </p>
  <li>‍Allow exceptions for special name formatting.</li>
  <p class="list-example">
    <strong>Example: </strong>
    McElroy, O'Henry, vanDemeer, D'arcy, Shaw-Smith, etc.
  </p>
  <li>‍Allow for French & Spanish language special characters.</li>
  <p class="list-example">
    <strong>Example: </strong>
    é, è, í, ì, ç, ñ, etc.
  </p>
  <li>‍Use Title/Initial Caps for the following:</li>
  <ol>
    <li>Column headers</li>
    <li>Menu items</li>
    <li>Buttons</li>
    <li>Labels</li>
    <li>Section titles and subtitles</li>
    <li>Tabs</li>
  </ol>
</ul>

## Specific Data Rules - US & Canada

### Address Data

<table class="data-table">
  <tbody>
    <tr>
      <td>Solution Number (SOL)</td>
      <td>ANANA</td>
      <td>
        <ul>
          <li>Delete leading space</li>
          <li>Capitalize all letters</li>
          <li>No spaces</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Alpha Numeric Entry</li>
          <li>Maximum input = 5 characters</li>
          <li>Maximum display = 5 characters</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Title</td>
      <td>XXXX</td>
      <td>
        <ul>
          <li>Delete leading space</li>
          <li>Capitalize all letters</li>
          <li>No spaces</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Alpha characters only (ABCD)</li>
          <li>Maximum input = 4 characters</li>
          <li>Maximum display = 4 characters</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>First Name (US & CAN)</td>
      <td>Aabcdefg</td>
      <td>
        <ul>
          <li>Delete leading space</li>
          <li>Capitalize first letter</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Cannot be blank and cannot contain all spaces</li>
          <li>Maximum length = 25 characters</li>
          <li>Alpha characters Aa-Zz</li>
          <li>No leading spaces</li>
          <li>
            Special characters allowed:
            <ul>
              <li>Hyphen</li>
              <li>Apostrophe</li>
              <li>Period</li>
              <li>Spaces allowed after first letter is entered​</li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Middle Name (US & CAN)</td>
      <td>Aabcdefg</td>
      <td>
        <ul>
          <li>Delete leading space</li>
          <li>Capitalize first letter</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Alpha characters Aa-Zz</li>
          <li>Maximum length = 20 characters</li>
          <li>No leading spaces</li>
          <li>
            Special characters allowed:
            <ul>
              <li>Hyphen</li>
              <li>Apostrophe</li>
              <li>Period</li>
              <li>Spaces allowed after first letter is entered​</li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Middle Initial (US & CAN)</td>
      <td>A</td>
      <td>
        <ul>
          <li>Capitalize initial</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Alpha characters Aa-Zz</li>
          <li>One character</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Last Name (US & CAN)</td>
      <td>Aabcdefg</td>
      <td>
        <ul>
          <li>Delete leading space</li>
          <li>Capitalize first letter</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Cannot be blank and cannot contain all spaces</li>
          <li>Maximum length = 20 characters</li>
          <li>Alpha characters Aa-Zz</li>
          <li>No leading spaces</li>
          <li>
            Special characters allowed:
            <ul>
              <li>Hyphen</li>
              <li>Apostrophe</li>
              <li>Period</li>
              <li>Spaces allowed after first letter is entered​</li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Address 2 (US & CAN)</td>
      <td>1234 Aabcdefg</td>
      <td>
        <ul>
          <li>Delete leading space</li>
          <li>Capitalize first letter</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Maximum length = 50 characters</li>
          <li>Alpha Numeric entry</li>
          <li>
            Special characters allowed:
            <ul>
              <li>Hyphen</li>
              <li>Apostrophe</li>
              <li>Period</li>
              <li>Hashtag/Number Symbol​</li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>City (US)</td>
      <td>Aabcdefg</td>
      <td>
        <ul>
          <li>Delete leading space</li>
          <li>Capitalize first letter</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Maximum length = 25 characters</li>
          <li>Alpha characters only</li>
          <li>
            Special characters allowed:
            <ul>
              <li>Hyphen</li>
              <li>Apostrophe</li>
              <li>Period</li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>State Abbreviation (US)​</td>
      <td>AA</td>
      <td>
        <ul>
          <li>Always 2 characters in length</li>
          <li>Capitalize both letters</li>
          <li>No spaces</li>
          <li>State list should always be alphabetized by state abbreviation not state name</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Maximum length = 2 characters</li>
          <li>Alpha characters only</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>State Name (US)​</td>
      <td>
        <p>Aabcdefg</p>
        <p>Aabcdefg</p>
      </td>
      <td>
        <ul>
          <li>Delete leading space</li>
          <li>Title Casing</li>
          <li>State list alphabetized A-Z by state name, not abbreviation</li>
          <li>Used both in select menus and fields</li>
          <li>Abbreviation used only is very specific use cases</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Maximum length = 15 characters</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Province Abbreviation (CA)​​</td>
      <td>AA</td>
      <td>
        <ul>
          <li>Always 2 characters in length</li>
          <li>Capitalize both letters</li>
          <li>No spaces</li>
          <li>Province list should always be alphabetized by province abbreviation not province​ name</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Maximum length = 2 characters</li>
          <li>Alpha characters only</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Province (Canada)​​</td>
      <td>
        <p>Aabbccddeeff</p>
        <p>Aabbccdd</p>
      </td>
      <td>
        <ul>
          <li>Capitalize first letters</li>
          <li>Province list should always be alphabetized by Province name</li>
          <li>Use full name in both select menus and fields</li>
          <li>Abbreviation used only in very specific use cases​</li>
          <li>
            Translation occurs between TurboApps and Home office for the following two provinces:
            <ul>
              <li>Postal Abbr = NL;</li>
              <li>PFS Home Office Abbr = NF</li>
              <li>Postal Abbr = QC;</li>
              <li>PFS Home Office Abbr = PQ</li>
            </ul>
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Maximum length = 20 characters</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Country (US & CAN)​​</td>
      <td>AA</td>
      <td>
        <ul>
          <li>Delete leading space</li>
          <li>Capitalize abbreviation of US</li>
          <li>Capitalize first letter of Canada</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>None</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Phone Number (US & CAN)​​</td>
      <td>(123) 000-0000</td>
      <td>
        <ul>
          <li>Numeric character input only</li>
          <li>Return displays parenthesis used to separate area code</li>
          <li>Return display contains dashes to separate exchange, and number</li>
          <li>Field auto-formats while typing</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Must contain 10 digits (0-10)​​</li>
          <li>
            Special characters allowed on return display only:
            <ul>
              <li>Hyphen/dash</li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Zip Code (US)​​</td>
      <td>
        <p>0 or if including + 4 digits:</p>
        <p>00000-0000 *</p>
        <p>NNNNN</p>
      </td>
      <td>
        <ul>
          <li>NNNNN-NNNN</li>
          <li>NNNNN-NNNN-NNNN</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Minimum field length is always 5 numeric digits.​​</li>
          <li>Valid lengths are 5 or 9 digits​​</li>
          <li>Cannot contain more than 9 digits​</li>
          <li>
            Special characters allowed:
            <ul>
              <li>Hyphen/dash</li>
              <li>Cannot contain data other than numerical digits (0 – 9)</li>
              <li>No spaces allowed​</li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Postal Code (Canada)​​</td>
      <td>ANA NAN</td>
      <td>
        <ul>
          <li>Must be alpha-numeric-alpha SPACE numeric-alpha-numeric.</li>
          <li>Alpha characters must be UPPER CASE</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Field length is always 6​​</li>
          <li>(No spaces allowed)​​</li>
          <li>Cannot contain more than 9 digits​</li>
          <li>
            1st char of Postal Code will match Province. Province is selected in application:
            <ul>
              <li>NL(NL) = A</li>
              <li>NS = B</li>
              <li>PE = C​</li>
              <li>NB = E</li>
              <li>QC/PQ = G/H/J</li>
              <li>ON = K/L/M/N/P</li>
              <li>MB = R</li>
              <li>SK = S​</li>
              <li>AB = T</li>
              <li>BC = V</li>
              <li>NU/NT = X​</li>
              <li>YT = Y​</li>
              <li>No special characters allowed​​</li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### Financial Data

<table class="data-table">
  <tbody>
    <tr>
      <td>SSN (US)</td>
      <td>000-00-0000</td>
      <td>
        <div>
          <ul>
            <li>
              If it's being pulled in from the backend/servers
              <ul>
                <li>Renders as: •••••1234</li>
                <li>User cannot update field unless it is done in the appropriate app/place</li>
              </ul>
            </li>
            <li>As the user enters numbers into the SSN field, each number is immediately masked with a bullet [ • ]</li>
            <li>When the user has successfully finished entering all digits into the SSN field, all the numbers entered should be masked with bullets [ • ], and a circle checkmark icon will display in Green (Green 500 | Hex #0B8D1F | RGB 11-141-31) aligned at the right-hand side of the input line. Also, while the field is still on-focus, the input line will display in Green (Green 500 | Hex#08BD1F | RGB 11-141-31) at 2px thickness.</li>
          </ul>
          <p>ON SAVE/NAVIGATE OFF OF THE PAGE</p>
          <ul>
            <li>
              When user navigates back to the page
              <ul>
                <li>Renders as: •••••1234</li>
              </ul>
            </li>
            <li>
              When user focuses into the field
              <ul>
                <li>Field clears out all values and user will have to retype full SSN</li>
              </ul>
            </li>
          </ul>
        </div>
      </td>
      <td>
        <ul>
          <li>Field length always 9 numeric digits.</li>
          <li>Cannot be all same digits (e.g. 222-22-2222)</li>
          <li>Cannot contain continuous, sequential numbers from</li>
          <li>1 to 9 or 9 to 1 (i.e. 123-45-6789, 9876-54-321)</li>
          <li>Cannot contain data other than numerical digits (0-9)</li>
          <li>Restricted numbers beginning with 666, 000.</li>
          <li>Cannot contain 9 as the first number.</li>
          <li>Last four digits cannot be zeros (0000).</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>SIN (CAN)</td>
      <td>000-000-000</td>
      <td>
        <ul>
          <li>None</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>The SIN number for Canada validation uses the Modulas 10 validation method</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Currency (US & CAN)</td>
      <td>$000,000.00</td>
      <td>
        <ul>
          <li>Display auto-formats number with commas (,) while user is typing</li>
          <li>Display "$" Inside input field (dollar sign input not allowed)</li>
          <li>Field length is variable and will be defined for each currency field value.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Store data per product requirements​</li>
          <li>
            Allow special character entry defined per product requirements:
            <ul>
              <li>Decimal</li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Age (US & CAN)</td>
      <td>NNN</td>
      <td>
        <ul>
          <li>None​</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Numeric data (0-9) only</li>
          <li>No more than 3 digits in length</li>
          <li>User should always be promoted to verify any age over 100 years</li>
          <li>No spaces</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Date (US & CAN)</td>
      <td>MM/DD/YYYY</td>
      <td>
        <ul>
          <li>All devices will use the Date/Time Picker component. * View is still being defined *</li>
          <li>Dates available to pick will be dynamic based on the number of days in Month</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Verify Leap Year if 2/29 selected</li>
          <li>MM = 01 through 12</li>
          <li>DD = 01 through 31</li>
          <li>YYYY = Current year minus 100 years</li>
          <li>DD and MM max numeric length = 2</li>
          <li>YYYY max numeric length = 4</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Date of Birth (US & CAN)</td>
      <td>MM/DD/YYYY</td>
      <td>
        <ul>
          <li>All devices will use the Date/Time Picker component. * Component is still being defined *</li>
          <li>Date will be formatted/viewed in ONE field, NOT multiple fields</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Date must be past date</li>
          <li>MM = 01 through 12</li>
          <li>DD = 01 through 31</li>
          <li>YYYY = Current year minus 100 years</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Driver’s License</td>
      <td>Aa123aa123</td>
      <td>
        <ul>
          <li>Alpha-Numeric entry</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>No special characters with the exception of asterisks.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Email Address (US & CAN)</td>
      <td><a>xxxx.xxxx@xxxxx.xxx</a></td>
      <td>
        <ul>
          <li>
            Must contain some combination of the following:
            <ul>
              <li>Uppercase letters (A-Z)</li>
              <li>Lowercase letters (a-z)</li>
              <li>Numbers 0-9</li>
              <li>Period/Dot, Dash/Hyphen</li>
            </ul>
          </li>
          <li>May contain multiple periods/dots if separated by alpha-numeric characters​</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Local part (to the left of @)</li>
          <li>Cannot contain spaces</li>
          <li>Period cannot be first or last character in the Local name</li>
          <li>
            Must contain some combination of the following:
            <ul>
              <li>Uppercase letters (A-Z)</li>
              <li>Lowercase letters (a-z)</li>
              <li>Numbers 0-9</li>
              <li>Period/Dot, Underscore, Dash/Hyphen</li>
              <li>Must contain only one @ symbol</li>
              <li>Domain part (to the right of @)</li>
              <li>Cannot contain spaces</li>
              <li>Period cannot be first or last character in the Domain name</li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Bank Draft – Transit Number (US)​</td>
      <td>123456789</td>
      <td>
        <ul>
          <li>Must be 9 digits</li>
          <li>Numeric Only</li>
          <li>No special characters</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>
            Validation Algorithm:
            <ul>
              <li>Multiply 1st char by 3</li>
              <li>Multiply 2nd char by 7</li>
              <li>Multiply 3rd char by 1</li>
              <li>Multiply 4th char by 3</li>
              <li>Multiply 5th char by 7</li>
              <li>Multiply 6th char by 1</li>
              <li>Multiply 7th char by 3</li>
              <li>Multiply 8th char by 7</li>
              <li>Add all the totals together</li>
              <li>Divide that total by 10 giving an amount, and remainder</li>
              <li>If the reminder is 0, then that is the check digit</li>
              <li>Otherwise, subtract the remainder from 10 and that answer is the check digit</li>
              <li>No sequential numbers can be entered (i.e. 123456789)</li>
              <li>Cannot enter all Zeroes</li>
              <li>If US, transit # must start with 01 thru 32 or 90</li>
              <li>No Canadian transit numbers can be entered for US applicants</li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Bank Draft – Routing Number (CAN)​</td>
      <td>12345-678</td>
      <td>
        <ul>
          <li>Must be 8 digits (5 dash 3)</li>
          <li>Numeric Only</li>
          <li>No special characters</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>No validation algorithm for Canada</li>
          <li>No sequential numbers can be entered (i.e. 123456789)</li>
          <li>Cannot enter all Zeroes</li>
          <li>No US transit numbers can be entered for Canada applicants</li>
          <li>Once enter the first 5 digits, cursor automatically jumps to the next field</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Bank Draft – Account Number (US)​​</td>
      <td>123456789012345678</td>
      <td>
        <ul>
          <li>Up to 19 digits in length</li>
          <li>Numeric only</li>
          <li>No special characters</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>No sequential numbers can be entered (i.e. 123456789)</li>
          <li>Cannot enter all Zeroes</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Bank Draft – Account Number (CAN)​​</td>
      <td>1234567890123456789</td>
      <td>
        <ul>
          <li>Up to 19 digits in length</li>
          <li>Numeric only</li>
          <li>No special characters</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>No sequential numbers can be entered (i.e. 123456789)</li>
          <li>Cannot enter all Zeroes</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>