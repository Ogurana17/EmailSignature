let signatureWst = '';
let signatureJpn = '';

const elements = ['Name', 'EnglishName', 'Position', 'Company', 'Address', 'Country', 'ZipCode', 'Phone', 'Mobile', 'Fax', 'Email', 'Web']
  .reduce((acc, id) => {
    const camelCaseId = id.charAt(0).toLocaleLowerCase() + id.slice(1);
    return { ...acc, [camelCaseId]: document.getElementById(`input${id}`) };
  }, {});

const headerText = '--<meta charset=UTF-8 content=text/html http-equiv=Content-Type>' +
  '<!--[if mso]><style type="text/css">table{mso-table-lspace:0pt!important;mso-table-rspace:0pt!important;}a{color:#0969da!important;text-decoration:none!important}</style><![end if]-->' +
  '<table style="font-family:sans-serif!important;font-size:12px!important;border-top:1px solid!important;border-bottom:1px solid!important;border-collapse:collapse!important">';

const urlStyle = ' style=color:#0969da!important;text-decoration:none!important>';
const midTdStyle = '<td style="padding:0 6px!important">';
const lastTdStyle = '<td style="padding:0 6px 6px 6px!important">';

const replaceSpacesWithNbsp = input => (input || "").replace(/\s/g, "&nbsp;");

function create() {
  let code = document.getElementById('outputCode');
  let view = document.getElementById('outputView');
  let style = document.getElementsByName('optionsRadios');

  if (style[0].checked) {
    generateSignature('wst');
    code.value = signatureWst;
    view.innerHTML = signatureWst;
  }
  else {
    generateSignature('jpn');
    code.value = signatureJpn;
    view.innerHTML = signatureJpn;
  }
  code.select();
}

function generateSignature(type) {
  let signature = headerText;
  const e = elements;

  if (e.name.value) signature += `<tr id=name><td style="font-size:15px!important;font-weight:700!important;padding:6px 6px 0 6px!important">${replaceSpacesWithNbsp(e.name.value)}`;
  if (e.englishName.value) {
    if (!e.name.value) signature += `<tr id=englishName><td style="font-size:15px!important;font-weight:700!important;padding:6px 6px 0 6px!important">${replaceSpacesWithNbsp(e.englishName.value)}`;
    else signature += `<a href=https://ogurana17.github.io/EmailSignature/${urlStyle}&nbsp;/&nbsp;</a>${replaceSpacesWithNbsp(e.englishName.value)}`;
  }
  if (e.position.value) signature += `<tr id=position>${midTdStyle}${replaceSpacesWithNbsp(e.position.value)}`;
  if (e.company.value) signature += `<tr id=job_company><td style="padding:0 6px 3px 6px!important">${replaceSpacesWithNbsp(e.company.value)}`;
  if (e.address.value) signature += `<tr id=address>${midTdStyle}<a href="https://www.google.com/maps/search/?api=1&query=${replaceSpacesWithNbsp(e.address.value)}"${urlStyle}${replaceSpacesWithNbsp(e.address.value)}</a>`;
  if (e.country.value) {
    if (!e.address.value) signature += `<tr id=address>${midTdStyle}`;
    signature += ` ${replaceSpacesWithNbsp(e.country.value)}`;
  }
  if (e.zipCode.value) {
    if (!e.address.value) signature += `<tr id=address>${midTdStyle}`;
    signature += ` , ${replaceSpacesWithNbsp(e.zipCode.value)}`;
  }
  if (e.phone.value) {
    let phoneNum = e.phone.value;
    let phoneNumCha = convertToAnchorTag(phoneNum);
    signature += `<tr id=phone>${midTdStyle}Phone: <a href=tel:${e.phone.value}${urlStyle}${e.phone.value}</a>`;
  }
  if (e.mobile.value) {
    if (!e.phone.value) signature += `<tr id=mobile>${midTdStyle}`;
    let mobileNum = e.mobile.value;
    let mobileNumCha = convertToAnchorTag(mobileNum);
    if (e.phone.value) signature += ` | Mobile: <a href=tel:${e.mobile.value}${urlStyle}${e.mobile.value}</a>`;
    else signature += `Mobile: <a href=tel:${e.mobile.value}${urlStyle}${e.mobile.value}</a>`;
  }
  if (e.fax.value) signature += `<tr id=fax>${midTdStyle}Fax: ${e.fax.value}`;
  if (e.email.value) signature += `<tr id=email_website>${lastTdStyle}<a href=mailto:${e.email.value}${urlStyle}${e.email.value}</a>`;
  if (e.web.value) {
    if (!e.email.value) signature += `<tr id=email_website>${lastTdStyle}`;
    if (e.email.value) signature += ` | <a href=${e.web.value}${urlStyle}${e.web.value}</a>`;
    else signature += `<a href=${e.web.value}${urlStyle}${e.web.value}</a>`;
  }

  signature += `</table><br>`;
  if (type == 'wst') signatureWst = signature;
  else signatureJpn = signature;
}

function convertToAnchorTag(str) {
  const phone = (str.match(/\+?[0-9]+[\-\x20]?[0-9]+[\-\x20]?[0-9]+[\-\x20]?[0-9]+/g) || [])
    .map(num => num.replace(/[\-\x20]/g, ''))
    .find(num => num.length >= 10);
  return phone ? `<a href="tel:${phone}"${urlStyle}>${phone}</a>` : str;
}