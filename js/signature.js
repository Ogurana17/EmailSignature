const elements = ['Name', 'EnglishName', 'Position', 'Company', 'Address', 'Country', 'ZipCode', 'Phone', 'Mobile', 'Fax', 'Email', 'Web']
  .reduce((acc, id) => {
    const camelCaseId = id.charAt(0).toLocaleLowerCase() + id.slice(1);
    return { ...acc, [camelCaseId]: document.getElementById(`input${id}`) };
  }, {});

const headerText = '--<meta charset=UTF-8 content=text/html http-equiv=Content-Type>' +
  '<!--[if mso]><style type="text/css">table,td{mso-table-lspace:0pt!important;mso-table-rspace:0pt!important;}td,p{margin:0!important;mso-line-height-rule:exactly!important;line-height:140%!important;}a{color:#4493f8!important;text-decoration:none!important}</style><![endif]-->' +
  '<table cellpadding="0" cellspacing="0" style="font-family:sans-serif!important;font-size:12px!important;border-top:1px solid!important;border-bottom:1px solid!important;border-collapse:collapse!important;mso-table-lspace:0pt!important;mso-table-rspace:0pt!important">';

const urlStyle = ' style=color:#4493f8!important;text-decoration:none!important>';
const midTdStyle = '<td style="padding:0 6px!important;margin:0!important;line-height:140%!important;mso-line-height-rule:exactly!important">';
const lastTdStyle = '<td style="padding:0 6px 6px!important;margin:0!important;line-height:140%!important;mso-line-height-rule:exactly!important">';

const replaceSpacesWithNbsp = input => (input || "").replace(/\s/g, "&nbsp;");

const form = document.getElementById('signatureForm');
const view = document.getElementById('outputView');
const code = document.getElementById('outputCode');
const url = document.getElementById('outputUrl');
const copySignatureBtn = document.getElementById('copySignatureBtn');
const copyCodeBtn = document.getElementById('copyCodeBtn');
const copyUrlBtn = document.getElementById('copyUrlBtn');
const copyButtons = [copySignatureBtn, copyCodeBtn, copyUrlBtn];

let signatureHtml = '';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  create();
});

// Native reset only clears input fields; also clear the output panels.
form.addEventListener('reset', () => setTimeout(clearOutputs, 0));

function create() {
  signatureHtml = generateSignature();
  code.value = signatureHtml;
  url.value = generatePrefilledUrl();
  renderPreview(signatureHtml);
  copyButtons.forEach(btn => { btn.disabled = false; });
}

function clearOutputs() {
  signatureHtml = '';
  code.value = '';
  url.value = '';
  renderPreview('');
  copyButtons.forEach(btn => { btn.disabled = true; });
}

// The preview renders inside an iframe via srcdoc so none of this page's
// own CSS (or any framework reset) leaks in. That keeps it an accurate,
// unopinionated stand-in for how a mail client (e.g. Thunderbird) will
// actually render the generated markup.
function renderPreview(html) {
  view.srcdoc = html
    ? `<!DOCTYPE html><html><head><meta charset="utf-8"><style>html,body{margin:0;padding:12px;background:#fff;color:#000;}</style></head><body>${html}</body></html>`
    : '';
}

function generateSignature() {
  const e = elements;
  let rows = '';

  // Name / English Name
  if (e.name.value || e.englishName.value) {
    let content;
    if (e.name.value) {
      content = replaceSpacesWithNbsp(e.name.value);
      if (e.englishName.value) {
        content += `<a href=https://ogurana17.github.io/EmailSignature/${urlStyle}&nbsp;/&nbsp;</a>${replaceSpacesWithNbsp(e.englishName.value)}`;
      }
    } else {
      content = replaceSpacesWithNbsp(e.englishName.value);
    }
    rows += `<tr id=name><td style="font-size:15px!important;font-weight:700!important;padding:6px 6px 0!important;margin:0!important;line-height:140%!important;mso-line-height-rule:exactly!important">${content}</td></tr>`;
  }

  // Position
  if (e.position.value) {
    rows += `<tr id=position>${midTdStyle}${replaceSpacesWithNbsp(e.position.value)}</td></tr>`;
  }

  // Company
  if (e.company.value) {
    rows += `<tr id=job_company><td style="padding:0 6px 3px!important;margin:0!important;line-height:140%!important;mso-line-height-rule:exactly!important">${replaceSpacesWithNbsp(e.company.value)}</td></tr>`;
  }

  // Address / Country / ZipCode
  if (e.address.value || e.country.value || e.zipCode.value) {
    let content = '';
    if (e.address.value) {
      content += `<a href="https://www.google.com/maps/search/?api=1&query=${replaceSpacesWithNbsp(e.address.value)}"${urlStyle}${replaceSpacesWithNbsp(e.address.value)}</a>`;
    }
    if (e.country.value) content += ` ${replaceSpacesWithNbsp(e.country.value)}`;
    if (e.zipCode.value) content += ` , ${replaceSpacesWithNbsp(e.zipCode.value)}`;
    rows += `<tr id=address>${midTdStyle}${content}</td></tr>`;
  }

  // Phone / Mobile
  if (e.phone.value || e.mobile.value) {
    let content = '';
    if (e.phone.value) content += `Phone: <a href=tel:${e.phone.value}${urlStyle}${e.phone.value}</a>`;
    if (e.mobile.value) {
      content += e.phone.value
        ? ` | Mobile: <a href=tel:${e.mobile.value}${urlStyle}${e.mobile.value}</a>`
        : `Mobile: <a href=tel:${e.mobile.value}${urlStyle}${e.mobile.value}</a>`;
    }
    rows += `<tr id=phone>${midTdStyle}${content}</td></tr>`;
  }

  // Fax
  if (e.fax.value) {
    rows += `<tr id=fax>${midTdStyle}Fax: ${e.fax.value}</td></tr>`;
  }

  // Email / Web
  if (e.email.value || e.web.value) {
    let content = '';
    if (e.email.value) content += `<a href=mailto:${e.email.value}${urlStyle}${e.email.value}</a>`;
    if (e.web.value) {
      content += e.email.value
        ? ` | <a href=${e.web.value}${urlStyle}${e.web.value}</a>`
        : `<a href=${e.web.value}${urlStyle}${e.web.value}</a>`;
    }
    rows += `<tr id=email_website>${lastTdStyle}${content}</td></tr>`;
  }

  return `${headerText}${rows}</table><br>`;
}

// プリフィルURLデコード
window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  let hasParams = false;
  for (const key in elements) {
    if (params.has(key)) {
      elements[key].value = decodeURIComponent(params.get(key).replace(/\+/g, ' '));
      hasParams = true;
    }
  }
  // If the page was opened via a parameter URL, render immediately
  // instead of waiting for the user to press Create.
  if (hasParams) create();
});

// プリフィルURLエンコード
function generatePrefilledUrl() {
  const baseUrl = window.location.origin + window.location.pathname;
  const params = new URLSearchParams();

  for (const key in elements) {
    const value = elements[key].value.trim();
    if (value) {
      params.set(key, value);
    }
  }

  return `${baseUrl}?${params.toString()}`;
}

// Clipboard helpers

async function copyPlainText(text, btn) {
  try {
    await navigator.clipboard.writeText(text);
    flashCopied(btn);
  } catch (err) {
    console.error('Copy failed', err);
  }
}

async function copySignature(btn) {
  try {
    if (navigator.clipboard && window.ClipboardItem) {
      const item = new ClipboardItem({
        'text/html': new Blob([signatureHtml], { type: 'text/html' }),
        'text/plain': new Blob([signatureHtml], { type: 'text/plain' }),
      });
      await navigator.clipboard.write([item]);
    } else {
      await navigator.clipboard.writeText(signatureHtml);
    }
    flashCopied(btn);
  } catch (err) {
    console.error('Copy failed', err);
  }
}

function flashCopied(btn) {
  const original = btn.textContent;
  btn.textContent = 'Copied';
  btn.classList.add('copied');
  setTimeout(() => {
    btn.textContent = original;
    btn.classList.remove('copied');
  }, 1500);
}

copySignatureBtn.addEventListener('click', () => copySignature(copySignatureBtn));
copyCodeBtn.addEventListener('click', () => copyPlainText(code.value, copyCodeBtn));
copyUrlBtn.addEventListener('click', () => copyPlainText(url.value, copyUrlBtn));
