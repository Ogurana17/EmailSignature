var signatureWst = '';
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
const country = document.getElementById('inputCountry');


function create() {
    var code = document.getElementById('outputCode');
    var view = document.getElementById('outputView');
    var style = document.getElementsByName('optionsRadios');

    if (style[0].checked) {
        WesternCode();
        code.value = signatureWst;
        view.innerHTML = signatureWst;
        code.select();
    }
    else {
        japaneseCode();
        code.value = signatureJpn;
        view.innerHTML = signatureJpn;
        code.select();
    }
}


function WesternCode() {
    signatureWst = '<meta http-equiv="Content-Type" content="text/html" charset="UTF-8">--\n' +
        '<table style="font-family:sans-serif;font-size:12px;border-spacing:5px 0;border-top:1px solid;border-bottom:1px solid;border-collapse:separate;padding:5px 0;margin:6px 0">\n';

    if (name.value) {
        signatureWst += '<tr id=email_name_preview style="font-size:15px;font-weight:bold">\n' +
        '<td>' + name.value + '</td>\n' +
        '</tr>\n';
    }
    if (position.value) {
        signatureWst += '<tr id="position">\n' +
        '<td>' + position.value + '</td>\n' +
        '</tr>\n';
    }

    if (company.value) {
        signatureWst += '<tr id="job_company">\n' +
        '<td>' + company.value + '</td>\n' +
        '</tr>\n';
    }

    if (phone.value) {
        var phoneNum = phone.value;
        var phoneNumCha = convertToAnchorTag(phoneNum);
        signatureWst += '<tr id="phone">\n' +
        '<td>Phone: \n' +
        phone.value + '\n';

        if (mobile.value == "") {
            signatureWst += '</td>\n</tr>\n';
        }
    }

    if (mobile.value) {
        if (phone.value == "") {
            signatureWst += '<tr id="mobile">\n<td>';
        }
        var mobileNum = mobile.value;
        var mobileNumCha = convertToAnchorTag(mobileNum);
        if (phone.value) {
            signatureWst += ' | Mobile: \n' + mobile.value + '</td>\n';
        }
        else {
            signatureWst += 'Mobile: \n' + mobile.value + '</td>\n';
        }
        signatureWst += '</tr>\n';
    }

    if (fax.value) {
        signatureWst += '<tr id="fax">\n' +
        '<td>Fax: \n' +
        fax.value + '</td>\n' +
        '</tr>\n';
    }

    if (email.value) {
        signatureWst += '<tr id="email_website" style="padding:5px 0 0 0 ">\n<td>\n' +
            //'<td id="email"><a href="mailto:' + email.value + '" style="text-decoration:none;color:#1a0dab">' + email.value + '</a></td>\n';
            email.value + '\n';
        if (web.value == "") {
            signatureWst += '</tr>\n';
        }
    }

    if (web.value) {
        if (email.value == "") {
            signatureWst += '<tr id="email_website" style="padding:5px 0 0 0 ">\n<td>\n';
        }
        //var webStr = web.value;
        //var webStrChk = webStr.substr(0, 4);
        //if (!(webStrChk === 'http')) {
        //    webStr = 'http://' + web.value;
        //}
        //signatureWst += '<td id="website">| <a href="' + webStr + '" style="text-decoration:none;color:#1a0dab">' + web.value + '</a></td>\n' +
        if (email.value) {
            signatureWst += ' | ' + web.value + '</td>\n';
        }
        else {
            signatureWst += web.value + '</td>\n';
        }
        signatureWst += '</tr>\n';
    }

    if (address.value) {
        signatureWst += '<tr style="font-size:10px;padding:5px 0 0 0 ">\n' +
            '<td>' + address.value;
        if (zipCode.value == "") {
            signatureWst += '</tr>\n';
        }
    }

    if (zipCode.value) {
        if (address.value == "") {
            signatureWst += '<tr style="font-size:10px;padding:5px 0 0 0 ">\n<td>\n';
        }
        signatureWst += ' ' + zipCode.value;
    }

    if (country.value) {
        if (address.value == "") {
            signatureWst += '<tr style="font-size:10px;padding:5px 0 0 0 ">\n<td>\n';
        }
        signatureWst += ' ' + country.value + '</td>\n' +
        '</tr>\n';
    }

    signatureWst += '</table>\n<br>';
}


function japaneseCode() {
    signatureJpn = '<meta http-equiv="Content-Type" content="text/html" charset="UTF-8">--\n' +
        '<table style="font-family:sans-serif;font-size:12px;border-spacing:5px 0;border-top:1px solid;border-bottom:1px solid;border-collapse:separate;padding:5px 0;margin:6px 0">\n';

    if (name.value) {
        signatureJpn += '<tr id=email_name_preview style="font-size:15px;font-weight:bold">\n' +
        '<td>' + name.value + '</td>\n' +
        '</tr>\n';
    }
    if (position.value) {
        signatureJpn += '<tr id="position">\n' +
        '<td>' + position.value + '</td>\n' +
        '</tr>\n';
    }

    if (company.value) {
        signatureJpn += '<tr id="job_company">\n' +
        '<td>' + company.value + '</td>\n' +
        '</tr>\n';
    }

    if (phone.value) {
        var phoneNum = phone.value;
        var phoneNumCha = convertToAnchorTag(phoneNum);
        signatureJpn += '<tr id="phone">\n' +
        '<td>Phone: \n' +
        phone.value + '\n';

        if (mobile.value == "") {
            signatureJpn += '</td>\n</tr>\n';
        }
    }

    if (mobile.value) {
        if (phone.value == "") {
            signatureJpn += '<tr id="mobile">\n<td>';
        }
        var mobileNum = mobile.value;
        var mobileNumCha = convertToAnchorTag(mobileNum);
        if (phone.value) {
            signatureJpn += ' | Mobile: \n' + mobile.value + '</td>\n';
        }
        else {
            signatureJpn += 'Mobile: \n' + mobile.value + '</td>\n';
        }
        signatureJpn += '</tr>\n';
    }

    if (fax.value) {
        signatureJpn += '<tr id="fax">\n' +
        '<td>Fax: \n' +
        fax.value + '</td>\n' +
        '</tr>\n';
    }

    if (email.value) {
        signatureJpn += '<tr id="email_website" style="padding:5px 0 0 0 ">\n<td>\n' +
            //'<td id="email"><a href="mailto:' + email.value + '" style="text-decoration:none;color:#1a0dab">' + email.value + '</a></td>\n';
            email.value + '\n';
        if (web.value == "") {
            signatureJpn += '</tr>\n';
        }
    }

    if (web.value) {
        if (email.value == "") {
            signatureJpn += '<tr id="email_website" style="padding:5px 0 0 0 ">\n<td>\n';
        }
        //var webStr = web.value;
        //var webStrChk = webStr.substr(0, 4);
        //if (!(webStrChk === 'http')) {
        //    webStr = 'http://' + web.value;
        //}
        //signatureJpn += '<td id="website">| <a href="' + webStr + '" style="text-decoration:none;color:#1a0dab">' + web.value + '</a></td>\n' +
        if (email.value) {
            signatureJpn += ' | ' + web.value + '</td>\n';
        }
        else {
            signatureJpn += web.value + '</td>\n';
        }
        signatureJpn += '</tr>\n';
    }

    if (address.value) {
        signatureJpn += '<tr style="font-size:10px;padding:5px 0 0 0 ">\n' +
            '<td>' + '〒' + zipCode.value;
        if (zipCode.value == "") {
            signatureJpn += '</tr>\n';
        }
    }

    if (zipCode.value) {
        if (address.value == "") {
            signatureJpn += '<tr style="font-size:10px;padding:5px 0 0 0 ">\n<td>\n';
        }
        signatureJpn += ' ' + address.value + '</td>\n' +
        '</tr>\n';
    }

    signatureJpn += '</table>\n<br>';
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