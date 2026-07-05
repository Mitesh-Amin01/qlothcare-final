import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function findField(formData, patterns) {
  const entry = Object.entries(formData).find(([key]) =>
    patterns.some((p) => key.toLowerCase().includes(p))
  );
  return entry ? entry[1] : null;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { title, formData } = body;

    const customerPhone = findField(formData, ["phone", "mobile", "contact", "tel"]);
    const customerEmail = findField(formData, ["email"]);

    const rows = Object.entries(formData)
      .map(
        ([key, value]) => `
          <tr class="data-row">
            <td class="label-cell" style="padding:14px 16px;font-size:13px;font-weight:600;color:#8a8f98;text-transform:uppercase;letter-spacing:0.4px;border-bottom:1px solid #eef0f2;width:38%;vertical-align:top;">
              ${key.replace(/([A-Z])/g, " $1")}
            </td>
            <td class="value-cell" style="padding:14px 16px;font-size:15px;color:#15171a;border-bottom:1px solid #eef0f2;vertical-align:top;word-break:break-word;">
              ${value || "-"}
            </td>
          </tr>
        `
      )
      .join("");

    const buttons = `
      ${
        customerPhone
          ? `<a href="tel:${customerPhone}" class="btn btn-primary" style="display:inline-block;background:#E46F33;color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;padding:13px 26px;border-radius:8px;margin:6px;">Call Customer</a>`
          : ""
      }
      ${
        customerEmail
          ? `<a href="mailto:${customerEmail}" class="btn btn-secondary" style="display:inline-block;background:#ffffff;color:#0B0D10;text-decoration:none;font-size:14px;font-weight:600;padding:13px 26px;border-radius:8px;margin:6px;border:1.5px solid #0B0D10;">Email Customer</a>`
          : ""
      }
    `;

    const html = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  body { margin:0; padding:0; }
  .wrapper { max-width:600px; margin:auto; }
  .btn { width:auto; }

  /* Hide preheader text from displaying in email body */
  .preheader {
    display:none;
    max-height:0;
    max-width:0;
    overflow:hidden;
    font-size:1px;
    line-height:1px;
    color:#fefefe;
    visibility:hidden;
    mso-hide:all;
  }

  @media only screen and (max-width:600px) {
    .outer-padding { padding:20px 12px !important; }
    .card { border-radius:12px !important; }
    .header-padding { padding:24px 20px 20px !important; }
    .title-text { font-size:20px !important; }
    .table-padding { padding:8px 20px 0 !important; }
    .btn-wrap { padding:22px 20px !important; }

    /* stack label/value into a block card instead of a row */
    .label-cell, .value-cell {
      display:block !important;
      width:100% !important;
      padding:6px 0 !important;
      border-bottom:none !important;
    }
    .data-row {
      display:block !important;
      padding:12px 0 !important;
      border-bottom:1px solid #eef0f2 !important;
    }
    .value-cell { padding-bottom:0 !important; }

    .btn {
      display:block !important;
      width:100% !important;
      margin:8px 0 !important;
      box-sizing:border-box !important;
      text-align:center !important;
    }
  }
</style>
</head>
<body style="background:#f4f4f5;font-family:'Segoe UI',Arial,sans-serif;">

  <!-- Preheader text that controls what shows in Gmail preview -->
  <div class="preheader">New form submission: ${title}</div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td class="outer-padding" style="padding:32px 16px;">

        <div class="wrapper">
          <div class="card" style="background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e8e9eb;box-shadow:0 12px 32px rgba(0,0,0,.06);">

            <div style="background:#0B0D10;">
              <div style="height:4px;background:#E46F33;"></div>
              <div class="header-padding" style="padding:30px 32px 26px;">
                <p style="margin:0 0 8px;color:#E46F33;font-size:12px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;">
                  New Submission
                </p>
                <h1 class="title-text" style="margin:0;color:#ffffff;font-size:24px;font-weight:700;">
                  ${title}
                </h1>
                <p style="margin:10px 0 0;color:#9CA3AF;font-size:13px;">
                  ${new Date().toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}
                </p>
              </div>
            </div>

            <div class="table-padding" style="padding:8px 32px 0;">
              <table width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
                ${rows}
              </table>
            </div>

            ${
              customerPhone || customerEmail
                ? `<div class="btn-wrap" style="padding:28px 32px;text-align:center;">${buttons}</div>`
                : ""
            }

            <div style="padding:18px;background:#fafafa;text-align:center;color:#9CA3AF;font-size:12px;border-top:1px solid #eef0f2;">
              Generated automatically from your website.
            </div>

          </div>
        </div>

      </td>
    </tr>
  </table>

</body>
</html>
`;

    const response = await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: title,
      html,
    });

    return Response.json({ success: true, response });
  } catch (error) {
    console.error(error);
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}