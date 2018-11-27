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
        code.value = signatureJpn;
        view.innerHTML = signatureJpn;
        code.select();
    }
    else {
        englishCode();
        code.value = signatureEng;
        view.innerHTML = signatureEng;
        code.select();
    }
}


function englishCode() {
    signatureEng = '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><br>\n' +
        '<table style="font-family:sans-serif;font-size:12px;color:#333;border-spacing:0px;border-top:1px solid #333">\n' +
        '<tr><td>\n' +
        '<table style="font-family:sans-serif;font-size:12px;color:#333;border-spacing:5px 0;border-top:1px solid #333;border-bottom:1px solid #333;border-collapse:separate;padding:5px 0">';
    
    if (name.value) {
        signatureEng += '<tr id=email_name_preview style="font-size:15px;font-weight:bold">\n' +
        '<td colspan="2">' + name.value + '</td>\n' +
        '</tr>\n';    
    }
    if (position.value) {
        signatureEng += '<tr id="position">\n' +
        '<td colspan="2">' + position.value + '</td>\n' +
        '</tr>\n';
    }

    if (company.value) {
        signatureEng += '<tr id="job_company">\n' +
        '<td colspan="2">' + company.value + '</td>\n' +
        '</tr>\n';
    }
    
    if (phone.value) {
        var phoneNum = phone.value;
        var phoneNumCha = convertToAnchorTag(phoneNum);
        signatureEng += '<tr id="phone">\n' +
        '<td>Phone: </td>\n' +
        '<td><a href="tel:' + phoneNumCha + '" style="text-decoration:none;color:#1a0dab">' + phone.value + '</a></td>\n' +
        '</tr>\n';
    }

    if (mobile.value) {
        var mobileNum = mobile.value;
        var mobileNumCha = convertToAnchorTag(mobileNum);
        signatureEng += '<tr id="mobile">\n' +
        '<td>Mobile: </td>\n' +
        '<td><a href="tel:' + mobileNumCha + '" style="text-decoration:none;color:#1a0dab">' + mobile.value + '</a></td>\n' +
        '</tr>\n';
    }

    if (fax.value) {
        signatureEng += '<tr id="fax">\n' +
        '<td>Fax: </td>\n' +
        '<td>' + fax.value + '</td>\n' +
        '</tr>\n';
    }

    signatureEng += '</table>\n' +
        '</td></tr>\n' +
        '<tr><td>\n' +
        '<table id="info2" style="font-family:sans-serif;font-size:12px;color:#333;border-spacing:5px 0;border-collapse:separate">\n';

    if (email.value) {
        signatureEng += '<tr id="email_website" style="padding:5px 0 0 0 ">\n' +
            '<td id="email"><a href="mailto:' + email.value + '" style="text-decoration:none;color:#1a0dab">' + email.value + '</a></td>\n';
    }

    if (web.value) {
        var webStr = web.value;
        var webStrChk = webStr.substr(0, 4);
        if (!(webStrChk === 'http')) {
            webStr = 'http://' + web.value;
        }
        signatureEng += '<td id="website">| <a href="' + webStr + '" style="text-decoration:none;color:#1a0dab">' + web.value + '</a></td>\n' +
        '</tr>\n';
    }

    if (address.value) {
        signatureEng += '<tr style="font-size:10px;padding:5px 0 0 0 ">\n' +
        '<td colspan="2">' + address.value;
    }
    
    if (zipCode.value) {
        signatureEng +=' ' + zipCode.value + '</td >\n' +
        '</tr>\n';
    }

    signatureEng += '</table>\n' +
        '</td></tr>\n' +
        '</table>';
}


function japaneseCode() {
    signatureJpn = '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><br>\n' +
        '<table style="font-family:sans-serif;font-size:12px;color:#333;border-spacing:5px 0;border-top:1px solid #333;border-bottom:1px solid #333;border-collapse:separate;padding:5px 0">\n';

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
        signatureJpn += '<tr style="width:max-content">\n' +
        '<td style=text-align:left>〒' + zipCode.value + '</td >\n';
    }

    if (address.value) {
        signatureJpn += '<td><a href="https://www.google.co.jp/maps/place/' + address.value + '" style="text-decoration:none;color:#1a0dab">' + address.value + '</a></td>\n' +
        '</tr>\n';
    }

    if (phone.value) {
        var phoneNum = phone.value;
        var phoneNumCha = convertToAnchorTag(phoneNum);
        signatureJpn += '<tr style="width:max-content">\n' +
            '<td style=text-align:left>Tel</td>\n' +
            '<td><a href="tel:' + phoneNumCha + '" style="text-decoration:none;color:#1a0dab">' + phone.value + '</a></td>\n' +
            '</tr>\n';
    }

    if (mobile.value) {
        var mobileNum = mobile.value;
        var mobileNumCha = convertToAnchorTag(mobileNum);
        signatureJpn += '<tr style="width:max-content">\n' +
            '<td style=text-align:left>Mobile</td>\n' +
            '<td><a href="tel:' + mobileNumCha + '" style="text-decoration:none;color:#1a0dab">' + mobile.value + '</a></td>\n' +
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
            '<td style=text-align:left>Email</td>\n' +
            '<td><a href=mailto:' + email.value + ' style="text-decoration:none;color:#1a0dab">' + email.value + '</a></td>\n' +
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
            '<td><a href=' + webStr + ' style="text-decoration:none;color:#1a0dab">' + web.value + '</a></td>\n' +
            '</tr>\n';
    }

    signatureJpn += '</table>';
}

// http://www.de2p.co.jp/tech/html-css-js/tel-to-anchor-tag/
function convertToAnchorTag( str )
{
	// 電話番号だと思われる文字列を抽出
	var phone_array = str.match( /\+?[0-9]+[\-\x20]?[0-9]+[\-\x20]?[0-9]+[\-\x20]?[0-9]+/g );
	var cursor = 0;
	for ( var i = 0; phone_array != null && i < phone_array.length; i++ ) {

		// ハイフンとスペースを削除
		var tmp = phone_array[i];
		tmp = tmp.replace( /[\-\x20]/g, '' );
		if ( tmp.length < 10 ) {
			// 10桁未満は電話番号とみなさない
			continue;
		}
	}

	return tmp;
}