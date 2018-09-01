var signatureEng = '';
var signatureJpn = '';
const name = document.getElementById('inputName');
const position = document.getElementById('inputPosition');
const company = document.getElementById('inputCompany');
const phone = document.getElementById('inputPhone');
const mobile = document.getElementById('inputMobile');
const fax = document.getElementById('inputFax');
const email = document.getElementById('inputEmail');
const web = document.getElementById('inputWeb');
const address = document.getElementById('inputAddress');
const zipCode = document.getElementById('inputZipCode');


function create() {
    var code = document.getElementById('outputCode');
    var view = document.getElementById('outputView');
    var style = document.getElementsByName('optionsRadios');

    if (style[0].checked) {
        japaneseCode();
        signatureJpn += company.Value;
        code.innerText = signatureJpn;
        view.innerHTML = signatureJpn;
    }
    else {
        englishCode();
        code.innerText = signatureEng;
        view.innerHTML = signatureEng;
    }
}

function englishCode() {
    signatureEng = '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><br>\n' +
        '<meta http-equiv="Content-Type" content="text/html; charset = UTF-8"><br>\n' +
        '<table style="font-family:sans-serif;font-size:12px;color:#333;border-spacing:0px;border-top:1px solid #333;padding:5px">\n' +
        '<tr><td>\n' +
        '<table id="info1" style="font-family:sans-serif;font-size:12px;color:#333;border-spacing:0px">';
    
    signatureEng += '<tr id=email_name_preview style="font-size:15px;font-weight:bold">\n' +
        '<td colspan="2" style="padding-bottom:5px">' + 'Name' + '</td>\n' +
        '</tr>\n';
                    
    signatureEng += '<tr id="position">\n' +
        '<td colspan="2">' + 'Position' + '</td>\n' +
        '</tr>\n';

    signatureEng += '<tr id="job_company">\n' +
        '<td colspan="2">' + 'Company' + '</td>\n' +
        '</tr>\n';

    signatureEng += '<tr id="phone">\n' +
        '<td>Phone: </td>\n' +
        '<td><a href="tel:' + '0000000000' + '" style="text-decoration:none;color:#001ba0">' + '000-000-0000' + '</a></td>\n' +
        '</tr>\n';

    signatureEng += '<tr id="mobile">\n' +
        '<td>Mobile: </td>\n' +
        '<td><a href="tel:0000000000" style="text-decoration:none;color:#001ba0">000-0000-0000</a></td>\n' +
        '</tr>\n';

    signatureEng += '<tr id="fax">\n' +
        '<td>Fax: </td>\n' +
        '<td>' + '000-000-0000' + '</td>\n' +
        '</tr>\n';

    signatureEng += '</table>\n' +
        '</td></tr>\n' +
        '<tr><td>\n' +
        '<table id="info2" style="font-family:sans-serif;font-size:12px;color:#333;border-spacing:0px">\n';

    signatureEng += '<tr id="email_website" style="padding:5px 0 0 0 ">\n' +
        '<td id="email"><a href="mailto:' + 'mail@mail.com' + '" style="text-decoration:none;color:#001ba0">' + 'mail@mail.com' + '</a></td>\n' +
        '<td id="website">| <a href="' + 'http://www.google.com' + '" style="text-decoration:none;color:#001ba0">' + 'www.google.com' + '</a></td>\n' +
        '</tr>\n';

    signatureEng += '<tr style="font-size:10px;padding:5px 0 0 0 ">\n' +
        '<td colspan="2">' + '1-234-56 cho, shi, ken';
    
    signatureEng +=' ' + '123 - 4567' + '</td >\n' +
        '</tr>\n';

    signatureEng += '</table>\n' +
        '</td></tr>\n' +
        '</table>';
}

function japaneseCode() {
    signatureJpn = '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><br>\n' +
        '<table style="font-family:sans-serif;font-size:12px;color:#333;border-spacing:0px;border-top:1px solid #333;padding:5px">\n';

    if (company.Value) {
        signatureJpn += '<tr id=campany style="width:max-content">\n' +
            '<td colspan="2">' + company.Value;
    }

    if (position.Value) {
        signatureJpn += ' ' + position.Value + '</td>\n' +
            '</tr>\n';
    }

    if (name.Value) {
        signatureJpn += '<tr id=email_name_preview style="font-size:15px;font-weight:bold">\n' +
            '<td colspan="2" style="padding-bottom:5px">' + name.Value + '</td>\n' +
            '</tr>\n';
    }

    if (zipCode.Value) {
        signatureJpn += '<tr style="width:max-content">\n'
        '<td style=text-align:left>〒' + zipCode.Value + '</td >\n';
    }

    if (address.Value) {
        signatureJpn += '<td><a href="https://www.google.co.jp/maps/place/' + address.Value + '" style="text-decoration:none;color:#001ba0">' + address.Value + '</a></td>\n'
        '</tr>\n';
    }

    if (phone.Value) {
        var phoneNum = Phone.match(/^[0-9]+$/);
        signatureJpn += '<tr style="width:max-content">\n' +
            '<td style=text-align:left>Tel</td>\n' +
            '<td><a href="tel:' + phoneNum + '" style="text-decoration:none;color:#001ba0">' + phone.Value + '</a></td>\n' +
            '</tr>\n';
    }

    if (document.getElementById('inputMobile').Value) {
        var mobileNum = mobile.match(/^[0-9]+$/);
        signatureJpn += '<tr style="width:max-content">\n' +
            '<td style=text-align:left>Mobile</td>\n' +
            '<td><a href="tel:' + mobileNum + '" style="text-decoration:none;color:#001ba0">' + mobile.Value + '</a></td>\n' +
            '</tr>\n';
    }

    if (fax.Value) {
        signatureJpn += '<tr style="width:max-content">\n' +
            '<td style=text-align:left>Fax</td>\n' +
            '<td>' + fax.Value + '</td>\n' +
            '</tr>\n';
    }

    if (email.Value) {
        signatureJpn += '<tr style="width:max-content">\n' +
            '<td style=text-align:left>E-mail</td>\n' +
            '<td><a href=mailto:' + email.Value + ' style="text-decoration:none;color:#001ba0">' + email.Value + '</a></td>\n' +
            '</tr>\n';
    }

    if (web.Value) {
        var webStr = web.Value;
        var webStrChk = web.substr(0, 4);
        if (!(webStrChk === 'http')) {
            webStr = 'http://' + web.Value;
        }
        signatureJpn += '<tr style="width:max-content">\n' +
            '<td style=text-align:left>URL</td>\n' +
            '<td><a href=' + webStr.Value + ' style="text-decoration:none;color:#001ba0">' + web.Value + '</a></td>\n' +
            '</tr>\n';
    }

    signatureJpn += '</table>';
}