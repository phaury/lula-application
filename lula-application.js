(function () {
  const root = document.querySelector(".lula-application-root");

  if (!root) {
    console.error("Lula application root not found.");
    return;
  }

  const APPS_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyFf_tpmKCdXLAGUHVFXZtYjAcON1fE3-nTfK0RlOwvOQn55nsUyNyVV7M1Bx3t3jb6JQ/exec";

  const LULAOLOGY_URL =
    "https://drive.google.com/file/d/1vh_0WWNJ-XNRZycdiMT-T1LoEVucWzsr/view?usp=sharing";

  const ROLE_AGREEMENT_URL =
    "https://drive.google.com/file/d/1fD1D-4APFOTNJMXPHfvM0Lo33XUUoeMB/view?usp=sharing";

  const VIA_INSTRUCTIONS_URL =
    "https://drive.google.com/file/d/1lDOf-L2eWZn941FLXCOAmkTV6AqMJYAd/view?usp=sharing";

  root.innerHTML = `
    <style>
      .lula-app,
      .lula-app * {
        max-width: 760px;
        margin: 0 auto;
        color: inherit;
        font-family: 'Poppins', sans-serif !important;
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
        font-weight: 600;
        margin: 18px 0 7px;
      }

      .lula-section-heading {
        color: #919cd4;
        font-weight: 600;
        font-size: 1.15rem;
        margin-top: 28px;
        padding-bottom: 6px;
        border-bottom: 2px solid #919cd4;
      }

      .lula-question-help {
        margin: -2px 0 8px;
        font-size: 0.92rem;
        opacity: 0.72;
        font-style: italic;
        line-height: 1.35;
      }

      .lula-input,
      .lula-select,
      .lula-textarea {
        width: 100%;
        box-sizing: border-box;
        padding: 13px 14px;
        border: 1px solid #d8d8d8;
        border-radius: 12px;
        font-family: inherit;
        font-size: 1.15rem;
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
        gap: 12px;
        align-items: flex-start;
        margin-top: 16px;
      }
      
      .lula-checkbox-row input {
        flex-shrink: 0;
        margin-top: 4px;
      }
      
      .lula-checkbox-row label {
        flex: 1;
        line-height: 1.4;
      }

      .lula-checkbox-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px 18px;
        margin-top: 8px;
        justify-items: start;
      }
      
      .lula-day-option {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      
      .lula-day-option input {
        margin: 0;
      }

      .lula-button,
      .lula-doc-button {
        display: inline-block;
        padding: 16px 20px;
        border: 0;
        border-radius: 999px;
        background: #919cd4;
        color: #ffffff !important;
        font-family: inherit;
        font-size: 1.05rem;
        font-weight: 600;
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
        font-weight: 600;
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
        <h2><strong>Before You Apply</strong></h2>
        <p>
          To help you with your application for this role, please review the Lulaology Manual and the Barista Role Agreement before completing this application.
        </p>
        <br>
        <p>
          Additionally, you will need to complete the VIA Character Strengths Survey, download your results as a PDF, and upload those results along with your resume as part of your application.<br>
        </p>
        <br>
        <p>
          To make this easy, we’ve provided a step-by-step guide that walks you through creating your VIA account, taking the assessment, downloading your results PDF, and avoiding common mistakes during the process.
        </p>

        <div class="lula-doc-buttons">
          <a href="${LULAOLOGY_URL}" target="_blank" rel="noopener noreferrer" class="lula-doc-button">
            Review Lulaology
          </a>

          <a href="${ROLE_AGREEMENT_URL}" target="_blank" rel="noopener noreferrer" class="lula-doc-button">
            Review Barista Role Agreement
          </a>

          <a href="${VIA_INSTRUCTIONS_URL}" target="_blank" rel="noopener noreferrer" class="lula-doc-button">
            Complete the VIA Character Strengths Assessment
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
        <h2><strong>Let's find out if Lula is your tribe.</strong></h2>
        <p><strong>At Lula, we believe a great coffee experience starts with our great people.</strong></p>
        <br>
        <p>
          Our core values are Self-Efficacy, Kindness, and Optimistic Care.
        </p>
        <br>
        <p>
          Please answer the following questions thoughtfully and honestly. There are no perfect answers.
          We’re interested in how you think, how you work with others, and how you approach challenges.
        </p>
      </div>

      <div class="lula-card">
        <h2><strong>About You</strong></h2>

          <div>
            <label class="lula-label" for="firstName">First Name *</label>
            <input class="lula-input" id="firstName" name="firstName" required>
          </div>

          <div>
            <label class="lula-label" for="lastName">Last Name *</label>
            <input class="lula-input" id="lastName" name="lastName" required>
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
        <h2><strong>Store, Role & Availability</strong></h2>

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
          <option value="0-3 months">0-3 months</option>
          <option value="3-6 months">3-6 months</option>
          <option value="6-12 months">6-12 months</option>
          <option value="Long Term">Long Term</option>
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
          placeholder="Example: I can work Monday, Wednesday, and Friday after 2pm, Saturday mornings, and I cannot work Sundays. I am flexible during school breaks. I leave for school on such date. I have a scheduled vacation between the days or weeks of..."
        ></textarea>
      </div>

      <div class="lula-card">
        <h2><strong>Uploads</strong></h2>

        <label class="lula-label" for="resumeFile">Upload Resume *</label>
        <input class="lula-input" id="resumeFile" name="resumeFile" type="file" accept=".pdf,.doc,.docx" required>
        <p class="lula-small">Maximum file size: 5 MB.</p>

        <label class="lula-label" for="viaFile">Upload VIA Character Strengths Results *</label>
        <input class="lula-input" id="viaFile" name="viaFile" type="file" accept=".pdf,.png,.jpg,.jpeg" required>
        <p class="lula-small">Maximum file size: 5 MB.</p>
      </div>

      <div class="lula-card">
        <h2><strong>Lula Application Questions</strong></h2>

        <div class="lula-section-heading">Self-Efficacy</div> Belief in oneself to do and be personally able to do what you choose

        <label class="lula-label" for="q1">1. Tell us about one of your favorite things you’ve learned how to do.</label>
        <div class="lula-question-help">What did it take to learn that skill? Were there moments you wanted to give up? If so, what helped you keep going?</div>
        <textarea class="lula-textarea" id="q1" name="q1" required></textarea>

        <label class="lula-label" for="q2">2. Tell us about a time you had to figure something out without being shown first.</label>
        <div class="lula-question-help">How did you approach it? What did you do when you weren’t sure?</div>
        <textarea class="lula-textarea" id="q2" name="q2" required></textarea>

        <div class="lula-section-heading">Kindness</div> Creating warmth, welcome, and consideration through everyday moments

        <label class="lula-label" for="q3">3. Tell us about a time you made someone feel welcome — even when you didn’t know them.</label>
        <div class="lula-question-help">What did you notice, and what did you do?</div>
        <textarea class="lula-textarea" id="q3" name="q3" required></textarea>

        <label class="lula-label" for="q4">4. A customer is short with you — not terrible, but clearly having a bad day. How would you respond?</label>
        <div class="lula-question-help">Describe how you would handle the moment.</div>
        <textarea class="lula-textarea" id="q4" name="q4" required></textarea>

        <div class="lula-section-heading">Optimistic Care</div> Bringing hope, uplift, and belief into every action I take so people leave feeling lighter and more capable

        <label class="lula-label" for="q5">5. Tell us about a time something went wrong — how did you handle it?</label>
        <div class="lula-question-help">What happened, and what did you do next?</div>
        <textarea class="lula-textarea" id="q5" name="q5" required></textarea>

        <label class="lula-label" for="q6">6. You notice a teammate falling behind during a busy rush. What would you do?</label>
        <div class="lula-question-help">Describe how you would respond.</div>
        <textarea class="lula-textarea" id="q6" name="q6" required></textarea>

        <div class="lula-section-heading">Bonus</div>

        <label class="lula-label" for="q7">★. Why Lula?</label>
        <div class="lula-question-help">What drew you to Lula, and why do you think it’s a good fit — both for you and for us?</div>
        <textarea class="lula-textarea" id="q7" name="q7" required></textarea>
      </div>

      <div class="lula-card">
        <h2><strong>Application Agreement</strong></h2>

        <div class="lula-checkbox-row">
          <input type="checkbox" id="accurateInfo" name="accurateInfo" required>
          <label for="accurateInfo">
            I certify that the information I provided is accurate.
          </label>
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
      value = `(${value.substring(0, 3)}) ${value.substring(3, 6)}-${value.substring(6)}`;
    } else if (value.length > 3) {
      value = `(${value.substring(0, 3)}) ${value.substring(3)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }

    e.target.value = value;
  });

  function fileToBase64(file) {
    return new Promise((resolve, reject) => {
      if (!file) {
        resolve(null);
        return;
      }

      const maxSize = 5 * 1024 * 1024;

      if (file.size > maxSize) {
        reject(new Error(`${file.name} is too large. Max file size is 5 MB.`));
        return;
      }

      const reader = new FileReader();

      reader.onload = () => {
        resolve({
          name: file.name,
          type: file.type,
          data: reader.result.split(",")[1]
        });
      };

      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

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

    try {
      const resumeUpload = await fileToBase64(formData.get("resumeFile"));
      const viaUpload = await fileToBase64(formData.get("viaFile"));

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
        q6: formData.get("q6"),
        q7: formData.get("q7"),
        resumeFile: resumeUpload,
        viaFile: viaUpload
      };

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
      status.textContent = error.message || "Something went wrong. Please try again.";
    }
  });
})();
