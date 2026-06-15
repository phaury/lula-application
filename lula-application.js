(function () {
  const root = document.querySelector(".lula-application-root");

  if (!root) {
    console.error("Lula application root not found.");
    return;
  }

  root.innerHTML = `
    <div style="
      margin-top: 32px;
      padding: 24px;
      border-radius: 18px;
      background: #fff;
      border: 3px solid #ff4fa3;
      font-family: Arial, sans-serif;
    ">
      <h2 style="margin-top:0; color:#ff4fa3;">
        Lula Application Loaded
      </h2>
      <p>
        If you can see this, Carrd is loading the GitHub script correctly.
      </p>
    </div>
  `;
})();
