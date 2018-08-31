var signatureEng = '';
var signatureJpn = '';
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
        '<table style="font-family:sans-serif;font-size:12px;color:#333;border-spacing:0px;border-top:1px solid #333;padding:5px">\n';

    signatureEng += '</table>';
}

function japaneseCode() {
    signatureJpn = '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><br>\n' +
        '<table style="font-family:sans-serif;font-size:12px;color:#333;border-spacing:0px;border-top:1px solid #333;padding:5px">\n';

    if (document.getElementById('inputCompany').Value) {
        signatureJpn += '<tr id=campany style="width:max-content">\n' +
            '<td colspan="2">' + document.getElementById('inputCompany').Value;
    }

    if (document.getElementById('inputPosition').Value) {
        signatureJpn += ' ' + document.getElementById('inputPosition').Value + '</td>\n' +
            '</tr>\n';
    }

    if (document.getElementById('inputName').Value) {
        signatureJpn += '<tr id=email_name_preview style="font-size:15px;font-weight:bold">\n' +
            '<td colspan="2" style="padding-bottom:5px">' + document.getElementById('inputName').Value + '</td>\n' +
            '</tr>\n';
    }

    if (document.getElementById('inputZipCode').Value) {
        signatureJpn += '<tr style="width:max-content">\n'
        '<td style=text-align:left>〒' + document.getElementById('inputZipCode').Value + '</td >\n';
    }

    if (document.getElementById('inputZipCode').Value) {
        signatureJpn += '<td><a href="https://www.google.co.jp/maps/place/' + document.getElementById('inputAddress').Value + '" style="text-decoration:none;color:#001ba0">' + document.getElementById('inputAddress').Value + '</a></td>\n'
        '</tr>\n';
    }

    if (document.getElementById('inputPhone').Value) {
        var phoneNumStr = document.getElementById('inputPhone').Value;
        var phoneNum = PhoneNumStr.match(/^[0-9]+$/);
        signatureJpn += '<tr style="width:max-content">\n' +
            '<td style=text-align:left>Tel</td>\n' +
            '<td><a href="tel:' + phoneNum + '" style="text-decoration:none;color:#001ba0">' + document.getElementById('inputPhone').Value + '</a></td>\n' +
            '</tr>\n';
    }

    if (document.getElementById('inputMobile').Value) {
        var mobielNumStr = document.getElementById('inputMobile').Value;
        var mobileNum = mobileNumStr.match(/^[0-9]+$/);
        signatureJpn += '<tr style="width:max-content">\n' +
            '<td style=text-align:left>Mobile</td>\n' +
            '<td><a href="tel:' + mobileNum + '" style="text-decoration:none;color:#001ba0">' + document.getElementById('inputMobile').Value + '</a></td>\n' +
            '</tr>\n';
    }

    if (document.getElementById('inputFax').Value) {
        signatureJpn += '<tr style="width:max-content">\n' +
            '<td style=text-align:left>Fax</td>\n' +
            '<td>' + document.getElementById('inputFax').Value + '</td>\n' +
            '</tr>\n';
    }

    if (document.getElementById('inputEmail').Value) {
        signatureJpn += '<tr style="width:max-content">\n' +
            '<td style=text-align:left>E-mail</td>\n' +
            '<td><a href=mailto:' + document.getElementById('inputEmail').Value + ' style="text-decoration:none;color:#001ba0">' + document.getElementById('inputEmail').Value + '</a></td>\n' +
            '</tr>\n';
    }

    if (document.getElementById('inputWeb').Value) {
        var webStr = document.getElementById('inputWeb').Value;
        var webStrChk = webStr.substr(0, 4);
        if (!(webStrChk === 'http')) {
            webStr = 'http://' + document.getElementById('inputWeb').Value;
        }
        signatureJpn += '<tr style="width:max-content">\n' +
            '<td style=text-align:left>URL</td>\n' +
            '<td><a href=' + document.getElementById('inputWeb').Value + ' style="text-decoration:none;color:#001ba0">' + document.getElementById('inputWeb').Value + '</a></td>\n' +
            '</tr>\n';
    }

    signatureJpn += '</table>';
}