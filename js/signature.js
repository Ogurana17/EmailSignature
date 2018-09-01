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

    if (company.value) {
        signatureJpn += '<tr id=campany style="width:max-content">\n' +
            '<td colspan="2">' + company.value;
    }

    if (position.value) {
        signatureJpn += ' ' + position.value + '</td>\n' +
            '</tr>\n';
    }

    if (name.value) {
        signatureJpn += '<tr id=email_name_preview style="font-size:15px;font-weight:bold">\n' +
            '<td colspan="2" style="padding-bottom:5px">' + name.value + '</td>\n' +
            '</tr>\n';
    }

    if (zipCode.value) {
        signatureJpn += '<tr style="width:max-content">\n'
        '<td style=text-align:left>〒' + zipCode.value + '</td >\n';
    }

    if (address.value) {
        signatureJpn += '<td><a href="https://www.google.co.jp/maps/place/' + address.value + '" style="text-decoration:none;color:#001ba0">' + address.value + '</a></td>\n'
        '</tr>\n';
    }

    if (phone.value) {
        var phoneNum = phone.value;
        var phoneNumCha = phoneNum.match(/^[0-9]+$/);
        signatureJpn += '<tr style="width:max-content">\n' +
            '<td style=text-align:left>Tel</td>\n' +
            '<td><a href="tel:' + phoneNumCha + '" style="text-decoration:none;color:#001ba0">' + phone.value + '</a></td>\n' +
            '</tr>\n';
    }

    if (document.getElementById('inputMobile').value) {
        var mobileNum = mobile.value;
        var mobileNumCha = mobileNum.match(/^[0-9]+$/);
        signatureJpn += '<tr style="width:max-content">\n' +
            '<td style=text-align:left>Mobile</td>\n' +
            '<td><a href="tel:' + mobileNumCha + '" style="text-decoration:none;color:#001ba0">' + mobile.value + '</a></td>\n' +
            '</tr>\n';
    }

    if (fax.value) {
        signatureJpn += '<tr style="width:max-content">\n' +
            '<td style=text-align:left>Fax</td>\n' +
            '<td>' + fax.value + '</td>\n' +
            '</tr>\n';
    }

    if (email.value) {
        signatureJpn += '<tr style="width:max-content">\n' +
            '<td style=text-align:left>E-mail</td>\n' +
            '<td><a href=mailto:' + email.value + ' style="text-decoration:none;color:#001ba0">' + email.value + '</a></td>\n' +
            '</tr>\n';
    }

    if (web.value) {
        var webStr = web.value;
        var webStrChk = webStr.substr(0, 4);
        if (!(webStrChk === 'http')) {
            webStr = 'http://' + web.value;
        }
        signatureJpn += '<tr style="width:max-content">\n' +
            '<td style=text-align:left>URL</td>\n' +
            '<td><a href=' + webStr + ' style="text-decoration:none;color:#001ba0">' + web.value + '</a></td>\n' +
            '</tr>\n';
    }

    signatureJpn += '</table>';
}