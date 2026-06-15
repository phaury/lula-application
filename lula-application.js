(function () {
  const root = document.querySelector(".lula-application-root");

  if (!root) {
    console.error("Lula application root not found.");
    return;
  }

  const APPS_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbx7IyGowhbPof55bWWxpg3MwlkUfvsdEAE__u7Q64fkfmujMPsHESXp38fZlkE5wz0w8A/exec";

  root.innerHTML = `
    <style>
      .lula-app {
        max-width: 760px;
        margin: 0 auto;
        font-family: inherit;
        color: #111;
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

      .lula-button {
        width: 100%;
        padding: 16px 20px;
        border: 0;
        border-radius: 999px;
        background: #ff4fa3;
        color: #ffffff;
        font: inherit;
        font-size: 1.05rem;
        font-weight: 900;
        cursor: pointer;
      }

      .lula-button:hover {
        opacity: 0.9;
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
        .lula-two-col {
          grid-template-columns: 1fr;
        }

        .lula-card {
          padding: 22px;
        }
      }
    </style>

    <form class="lula-app" id="lulaApplicationForm">
      <div class="lula-card">
        <h2>Let's find out if Lula is your tribe.</h2>
        <p>
          At Lula, we believe great coffee starts with great people.
          We hire for Self-Efficacy, Kindness, and Optimistic Care.
        </p>
        <p class="lula-small">
          Please answer thoughtfully and honestly. There are no perfect answers.
          We’re interested in how you think, how you work with others, and how you approach challenges.
        </p>

        <div class="lula-checkbox-row">
          <input type="checkbox" id="reviewedDocs" name="reviewedDocs" required>
          <label for="reviewedDocs">
            I have reviewed Lulaology and the role agreement before applying.
          </label>
        </div>
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
        <input class="lula-input" id="phone" name="phone" type="tel" required>
      </div>

      <div class="lula-card">
        <h2>Store & Availability</h2>

        <label class="lula-label" for="primaryStore">Primary Store Applying To *</label>
        <select class="lula-select" id="primaryStore" name="primaryStore" required>
          <option value="">Choose one</option>
          <option value="WestSea">WestSea</option>
          <option value="Sodo">Sodo</option>
          <option value="Kent">Kent</option>
        </select>

        <label class="lula-label" for="role">Role Applying For *</label>
        <input class="lula-input" id="role" name="role" value="Barista" required>

        <label class="lula-label" for="earliestStartDate">Earliest Start Date *</label>
        <input class="lula-input" id="earliestStartDate" name="earliestStartDate" type="date" required>

        <label class="lula-label" for="availability">Availability *</label>
        <textarea
          class="lula-textarea"
          id="availability"
          name="availability"
          required
          placeholder="Example: Monday mornings, Tuesday after 2pm, weekends open..."
        ></textarea>
      </div>

      <div class="lula-card">
        <h2>Uploads</h2>

        <label class="lula-label" for="resumeFile">Upload Resume *</label>
        <input class="lula-input" id="resumeFile" name="resumeFile" type="file" accept=".pdf,.doc,.docx" required>
        <p class="lula-small">Accepted file types: PDF, DOC, DOCX. Upload processing comes in the next system layer.</p>

        <label class="lula-label" for="viaFile">Upload VIA Character Strengths Results *</label>
        <input class="lula-input" id="viaFile" name="viaFile" type="file" accept=".pdf,.png,.jpg,.jpeg" required>
        <p class="lula-small">Accepted file types: PDF, PNG, JPG. Upload processing comes in the next system layer.</p>
      </div>

      <div class="lula-card">
        <h2>Lula Application Questions</h2>

        <label class="lula-label" for="q1">1. Why do you want to work at Lula?</label>
        <p class="lula-small">What about Lula stands out to you, and why do you think it would be a good fit for you?</p>
        <textarea class="lula-textarea" id="q1" name="q1" required></textarea>

        <label class="lula-label" for="q2">2. Tell us about one of your favorite things you’ve learned how to do.</label>
        <p class="lula-small">What did it take to learn that skill? Were there moments you wanted to give up? If so, what helped you keep going?</p>
        <textarea class="lula-textarea" id="q2" name="q2" required></textarea>

        <label class="lula-label" for="q3">3. What does it mean to belong at Lula?</label>
        <p class="lula-small">In your own words, describe what belonging means on a team and in a workplace.</p>
        <textarea class="lula-textarea" id="q3" name="q3" required></textarea>

        <label class="lula-label" for="q4">4. A customer doesn’t like their drink. What would you do?</label>
        <p class="lula-small">Describe how you would handle the situation.</p>
        <textarea class="lula-textarea" id="q4" name="q4" required></textarea>

        <label class="lula-label" for="q5">5. A customer asks for an item that is sold out or unavailable. What would you do?</label>
        <p class="lula-small">Describe how you would handle the situation while still creating a positive experience.</p>
        <textarea class="lula-textarea" id="q5" name="q5" required></textarea>

        <label class="lula-label" for="q6">6. You notice a teammate falling behind during a busy rush. What would you do?</label>
        <p class="lula-small">Describe how you would respond.</p>
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

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

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

    window.scrollTo({
      top: status.getBoundingClientRect().top + window.scrollY - 120,
      behavior: "smooth"
    });
  });
})();
