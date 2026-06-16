(function () {
  const root = document.querySelector(".lula-application-root");

  if (!root) {
    console.error("Lula application root not found.");
    return;
  }

  const APPS_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwAbKrWsy55-rhVlVbMqWBHCtdDJx2T4MNkHmaWzh17QgUcmsn2pP8cnMtdb3uqQIf62w/exec";

  const LULAOLOGY_URL =
    "https://drive.google.com/file/d/1vh_0WWNJ-XNRZycdiMT-T1LoEVucWzsr/view?usp=sharing";

  const ROLE_AGREEMENT_URL =
    "https://drive.google.com/file/d/1fD1D-4APFOTNJMXPHfvM0Lo33XUUoeMB/view?usp=sharing";

  root.innerHTML = `
    <style>
      .lula-app {
        max-width: 760px;
        margin: 0 auto;
        color: inherit;
      }

      .lula-card {
        background: #ffffff;
        border-radius: 22px;
        padding: 28px;
        margin: 24px 0;
        box-shadow: 0 10px 28px rgba(0,0,0,0.08);
      }

      .lula-card h2 {
        margin-top: 0;
        margin-bottom: 10px;
        font-size: 1.65rem;
        line-height: 1.2;
      }

      .lula-card p {
        line-height: 1.5;
      }

      .lula-label {
        display: block;
        font-weight: 800;
        margin: 18px 0 7px;
      }

      .lula-input,
      .lula-select,
      .lula-textarea {
        width: 100%;
        box-sizing: border-box;
        padding: 13px 14px;
        border: 1px solid #d8d8d8;
        border-radius: 12px;
        font: inherit;
        background: #fff;
      }

      .lula-textarea {
        min-height: 125px;
        resize: vertical;
      }

      .lula-small {
        font-size: 0.92rem;
        opacity: 0.78;
      }

      .lula-checkbox-row {
        display: flex;
        gap: 10px;
        align-items: flex-start;
        margin-top: 16px;
      }

      .lula-checkbox-row input {
        margin-top: 4px;
      }

      .lula-checkbox-row label {
        line-height: 1.4;
      }

      .lula-checkbox-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 10px 18px;
        margin-top: 8px;
      }

      .lula-day-option {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .lula-button,
      .lula-doc-button {
        display: inline-block;
        padding: 16px 20px;
        border: 0;
        border-radius: 999px;
        background: #ff4fa3;
        color: #ffffff !important;
        font: inherit;
        font-size: 1.05rem;
        font-weight: 900;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
      }

      .lula-button {
        width: 100%;
      }

      .lula-doc-buttons {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
        margin-top: 20px;
        margin-bottom: 18px;
      }

      .lula-status {
        margin-top: 18px;
        padding: 14px;
        border-radius: 12px;
        font-weight: 800;
        display: none;
      }

      .lula-status.success {
        display: block;
        background: #e9fff1;
        color: #116b32;
      }

      .lula-status.error {
        display: block;
        background: #fff0f0;
        color: #9b1c1c;
      }

      .lula-two-col {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 14px;
      }

      @media (max-width: 640px) {
        .lula-two-col,
        .lula-checkbox-grid {
          grid-template-columns: 1fr;
        }

        .lula-card {
          padding: 22px;
        }

        .lula-doc-button {
          width: 100%;
          box-sizing: border-box;
        }
      }
    </style>

    <form class="lula-app" id="lulaApplicationForm">
      <div class="lula-card">
        <h2>Before You Apply</h2>
        <p>
          Please review the Lulaology Manual and the Barista Role Agreement before completing this application.
          Many applicants find it helpful to keep these documents open while answering the questions below.
        </p>

        <div class="lula-doc-buttons">
          <a href="${LULAOLOGY_URL}" target="_blank" rel="noopener noreferrer" class="lula-doc-button">
            Review Lulaology
          </a>

          <a href="${ROLE_AGREEMENT_URL}" target="_blank" rel="noopener noreferrer" class="lula-doc-button">
            Review Barista Role Agreement
          </a>
        </div>

        <div class="lula-checkbox-row">
          <input type="checkbox" id="reviewedDocs" name="reviewedDocs" required>
          <label for="reviewedDocs">
            I have reviewed Lulaology and the Barista Role Agreement before applying.
          </label>
        </div>
      </div>

      <div class="lula-card">
        <p>
          At Lula, we believe great coffee starts with great people.
          We hire for Self-Efficacy, Kindness, and Optimistic Care.
        </p>
        <p class="lula-small">
          Please answer thoughtfully and honestly. There are no perfect answers.
        </p>
      </div>

      <div class="lula-card">
        <h2>About You</h2>

        <div class="lula-two-col">
          <div>
            <label class="lula-label" for="firstName">First Name *</label>
            <input class="lula-input" id="firstName" name="firstName" required>
          </div>

          <div>
            <label class="lula-label" for="lastName">Last Name *</label>
            <input class="lula-input" id="lastName" name="lastName" required>
          </div>
        </div>

        <label class="lula-label" for="preferredName">Preferred Name</label>
        <input class="lula-input" id="preferredName" name="preferredName">

        <label class="lula-label" for="email">Email *</label>
        <input class="lula-input" id="email" name="email" type="email" required>

        <label class="lula-label" for="phone">Phone *</label>
        <input
          class="lula-input"
          id="phone"
          name="phone"
          type="tel"
          placeholder="(206) 555-1234"
          maxlength="14"
          required
        >
      </div>

      <div class="lula-card">
        <h2>Store, Role & Availability</h2>

        <label class="lula-label" for="primaryStore">Primary Store Applying To *</label>
        <select class="lula-select" id="primaryStore" name="primaryStore" required>
          <option value="">Choose one</option>
          <option value="WestSea">WestSea</option>
          <option value="Sodo">Sodo</option>
          <option value="Kent">Kent</option>
        </select>

        <label class="lula-label" for="role">Role Applying For *</label>
        <select class="lula-select" id="role" name="role" required>
          <option value="">Choose one</option>
          <option value="Barista">Barista</option>
        </select>

        <label class="lula-label" for="earliestStartDate">Earliest Start Date *</label>
        <input class="lula-input" id="earliestStartDate" name="earliestStartDate" type="date" required>

        <label class="lula-label" for="hoursPerWeek">Preferred Hours Per Week *</label>
        <select class="lula-select" id="hoursPerWeek" name="hoursPerWeek" required>
          <option value="">Choose one</option>
          <option value="5">5 hours</option>
          <option value="10">10 hours</option>
          <option value="15">15 hours</option>
          <option value="20">20 hours</option>
          <option value="25">25 hours</option>
          <option value="30">30 hours</option>
          <option value="35">35 hours</option>
          <option value="40">40 hours</option>
        </select>

        <label class="lula-label">Days Available *</label>
        <div class="lula-checkbox-grid">
          <label class="lula-day-option"><input type="checkbox" name="daysAvailable" value="Monday"> Monday</label>
          <label class="lula-day-option"><input type="checkbox" name="daysAvailable" value="Tuesday"> Tuesday</label>
          <label class="lula-day-option"><input type="checkbox" name="daysAvailable" value="Wednesday"> Wednesday</label>
          <label class="lula-day-option"><input type="checkbox" name="daysAvailable" value="Thursday"> Thursday</label>
          <label class="lula-day-option"><input type="checkbox" name="daysAvailable" value="Friday"> Friday</label>
          <label class="lula-day-option"><input type="checkbox" name="daysAvailable" value="Saturday"> Saturday</label>
          <label class="lula-day-option"><input type="checkbox" name="daysAvailable" value="Sunday"> Sunday</label>
        </div>

        <label class="lula-label" for="lengthOfEmployment">Desired Length of Employment *</label>
        <select class="lula-select" id="lengthOfEmployment" name="lengthOfEmployment" required>
          <option value="">Choose one</option>
          <option value="3 months">3 months</option>
          <option value="6 months">6 months</option>
          <option value="Permanent">Permanent</option>
        </select>

        <label class="lula-label" for="yearsOfExperience">Years of Relevant Experience *</label>
        <select class="lula-select" id="yearsOfExperience" name="yearsOfExperience" required>
          <option value="">Choose one</option>
          <option value="0">0 years</option>
          <option value="1-2">1–2 years</option>
          <option value="3-5">3–5 years</option>
          <option value="6-10">6–10 years</option>
          <option value="10+">10+ years</option>
        </select>

        <label class="lula-label" for="availability">Additional Availability Notes *</label>
        <textarea
          class="lula-textarea"
          id="availability"
          name="availability"
          required
          placeholder="Example: I can work Monday, Wednesday, and Friday after 2pm, Saturday mornings, and I cannot work Sundays. I am flexible during school breaks."
        ></textarea>
      </div>

      <div class="lula-card">
        <h2>Uploads</h2>

        <label class="lula-label" for="resumeFile">Upload Resume *</label>
        <input class="lula-input" id="resumeFile" name="resumeFile" type="file" accept=".pdf,.doc,.docx" required>

        <label class="lula-label" for="viaFile">Upload VIA Character Strengths Results *</label>
        <input class="lula-input" id="viaFile" name="viaFile" type="file" accept=".pdf,.png,.jpg,.jpeg" required>
      </div>

      <div class="lula-card">
        <h2>Lula Application Questions</h2>

        <label class="lula-label" for="q1">1. Why do you want to work at Lula?</label>
        <textarea class="lula-textarea" id="q1" name="q1" required></textarea>

        <label class="lula-label" for="q2">2. Tell us about one of your favorite things you’ve learned how to do.</label>
        <textarea class="lula-textarea" id="q2" name="q2" required></textarea>

        <label class="lula-label" for="q3">3. What does it mean to belong at Lula?</label>
        <textarea class="lula-textarea" id="q3" name="q3" required></textarea>

        <label class="lula-label" for="q4">4. A customer doesn’t like their drink. What would you do?</label>
        <textarea class="lula-textarea" id="q4" name="q4" required></textarea>

        <label class="lula-label" for="q5">5. A customer asks for an item that is sold out or unavailable. What would you do?</label>
        <textarea class="lula-textarea" id="q5" name="q5" required></textarea>

        <label class="lula-label" for="q6">6. You notice a teammate falling behind during a busy rush. What would you do?</label>
        <textarea class="lula-textarea" id="q6" name="q6" required></textarea>
      </div>

      <div class="lula-card">
        <h2>Final Agreement</h2>

        <div class="lula-checkbox-row">
          <input type="checkbox" id="accurateInfo" name="accurateInfo" required>
          <label for="accurateInfo">I certify that the information I provided is accurate.</label>
        </div>

        <div class="lula-checkbox-row">
          <input type="checkbox" id="valuesAgreement" name="valuesAgreement" required>
          <label for="valuesAgreement">
            I understand Lula hires for alignment with Self-Efficacy, Kindness, and Optimistic Care.
          </label>
        </div>

        <div class="lula-checkbox-row">
          <input type="checkbox" id="noGuarantee" name="noGuarantee" required>
          <label for="noGuarantee">
            I understand completing this application does not guarantee employment.
          </label>
        </div>

        <br>
        <button class="lula-button" type="submit">Submit Application</button>

        <div id="lulaStatus" class="lula-status"></div>
      </div>
    </form>
  `;

  const form = document.getElementById("lulaApplicationForm");
  const status = document.getElementById("lulaStatus");

  const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("input", function (e) {
  let value = e.target.value.replace(/\D/g, "");

  if (value.length > 10) {
    value = value.substring(0, 10);
  }

  if (value.length > 6) {
    value = `(${value.substring(0,3)}) ${value.substring(3,6)}-${value.substring(6)}`;
  } else if (value.length > 3) {
    value = `(${value.substring(0,3)}) ${value.substring(3)}`;
  } else if (value.length > 0) {
    value = `(${value}`;
  }

  e.target.value = value;
});

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const selectedDays = Array.from(
      form.querySelectorAll('input[name="daysAvailable"]:checked')
    ).map(input => input.value);

    if (selectedDays.length === 0) {
      status.className = "lula-status error";
      status.textContent = "Please select at least one day you are available.";
      return;
    }

    status.className = "lula-status success";
    status.textContent = "Submitting your application...";

    const formData = new FormData(form);

    const payload = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      preferredName: formData.get("preferredName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      primaryStore: formData.get("primaryStore"),
      role: formData.get("role"),
      earliestStartDate: formData.get("earliestStartDate"),
      hoursPerWeek: formData.get("hoursPerWeek"),
      daysAvailable: selectedDays.join(", "),
      lengthOfEmployment: formData.get("lengthOfEmployment"),
      yearsOfExperience: formData.get("yearsOfExperience"),
      availability: formData.get("availability"),
      q1: formData.get("q1"),
      q2: formData.get("q2"),
      q3: formData.get("q3"),
      q4: formData.get("q4"),
      q5: formData.get("q5"),
      q6: formData.get("q6")
    };

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify(payload)
      });

      status.className = "lula-status success";
      status.textContent =
        "Application submitted. Thank you for applying to Lula!";

      form.reset();

    } catch (error) {
      console.error(error);

      status.className = "lula-status error";
      status.textContent =
        "Something went wrong. Please try again.";
    }
  });
})();
