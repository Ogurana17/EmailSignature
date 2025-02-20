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
const headerText = '<meta charset=UTF-8 content=text/html http-equiv=Content-Type>--<!--[if mso]> <style type="text/css">table{mso-table-lspace:0pt!important;mso-table-rspace:0pt!important;}a{color:#0969da!important;text-decoration:none!important}</style><![end if]--><table style="font-family:sans-serif!important;font-size:12px!important;border-top:1px solid!important;border-bottom:1px solid!important;border-collapse:collapse!important">';
const urlStyle = ' style=color:#0969da!important;text-decoration:none!important>';
const midTdStyle = '<td style="padding:0 6px!important">';
const lastTdStyle = '<td style="padding:0 6px 6px 6px!important">';

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
    signatureWst = headerText;

    if (name.value) {
        signatureWst += '<tr id=email_name_preview>' +
        '<td style="font-size:15px!important;font-weight:700!important;padding:6px 6px 0 6px!important">' + name.value;
    }
    if (position.value) {
        signatureWst += '<tr id=position>' +
        midTdStyle + position.value;
    }

    if (company.value) {
        signatureWst += '<tr id=job_company>' +
        '<td style="padding:0 6px 3px 6px!important">' + company.value;
    }

    if (address.value) {
        signatureWst += '<tr id=address>' +
            midTdStyle + address.value;
    }

    if (country.value) {
        if (address.value == "") {
            signatureWst += '<tr id=address>' + midTdStyle;
        }
        signatureWst += ' ' + country.value;
    }

    if (zipCode.value) {
        if (address.value == "") {
            signatureWst += '<tr id=address>' + midTdStyle;
        }
        signatureWst += ' , ' + zipCode.value;
    }

    if (phone.value) {
        var phoneNum = phone.value;
        var phoneNumCha = convertToAnchorTag(phoneNum);
        signatureWst += '<tr id=phone>' +
        midTdStyle + 'Phone: ' +
        phone.value + '';
    }

    if (mobile.value) {
        if (phone.value == "") {
            signatureWst += '<tr id=mobile>' + midTdStyle;
        }
        var mobileNum = mobile.value;
        var mobileNumCha = convertToAnchorTag(mobileNum);
        if (phone.value) {
            signatureWst += ' | Mobile: ' + mobile.value;
        }
        else {
            signatureWst += 'Mobile: ' + mobile.value;
        }
    }

    if (fax.value) {
        signatureWst += '<tr id=fax>' +
        midTdStyle + 'Fax: ' +
        fax.value;
    }

    if (email.value) {
        signatureWst += '<tr id=email_website>' + lastTdStyle + '<a href=mailto:' + email.value + urlStyle +
            //'<td id="email"><a href="mailto:' + email.value + '" style="text-decoration:none;color:#1a0dab">' + email.value + '</a></td>';
            email.value + '</a>' + '';
    }

    if (web.value) {
        if (email.value == "") {
            signatureWst += '<tr id=email_website>' + lastTdStyle;
        }
        //var webStr = web.value;
        //var webStrChk = webStr.substr(0, 4);
        //if (!(webStrChk === 'http')) {
        //    webStr = 'http://' + web.value;
        //}
        //signatureWst += '<td id="website">| <a href="' + webStr + '" style="text-decoration:none;color:#1a0dab">' + web.value + '</a></td>' +
        if (email.value) {
            signatureWst += ' | <a href=' + web.value + urlStyle + web.value + '</a>';
        }
        else {
            signatureWst += '<a href=' + web.value + urlStyle + web.value + '</a>';
        }
    }

    signatureWst += '</table><br>';
}

function japaneseCode() {
    signatureJpn = headerText;

    if (name.value) {
        signatureJpn += '<tr id=email_name_preview>' +
        '<td style="font-size: 15px;font-weight: bold;padding: 6px 6px 0 6px;">' + name.value;
    }

    if (company.value) {
        signatureJpn += '<tr id="job_company">' +
        '<td style="padding: 0 6px;">' + company.value;
    }

    if (position.value) {
        signatureJpn += '<tr id="position">' +
        '<td style="padding: 0 6px 3px 6px;">' + position.value;
    }

    if (phone.value) {
        var phoneNum = phone.value;
        var phoneNumCha = convertToAnchorTag(phoneNum);
        signatureJpn += '<tr id="phone">' +
        '<td style="padding: 0 6px;">Phone: ' +
        phone.value + '';
    }

    if (mobile.value) {
        if (phone.value == "") {
            signatureJpn += '<tr id="mobile"><td style="padding: 0 6px;">';
        }
        var mobileNum = mobile.value;
        var mobileNumCha = convertToAnchorTag(mobileNum);
        if (phone.value) {
            signatureJpn += ' | Mobile: ' + mobile.value;
        }
        else {
            signatureJpn += 'Mobile: ' + mobile.value;
        }
    }

    if (fax.value) {
        signatureJpn += '<tr id="fax">' +
        '<td style="padding: 0 6px;">Fax: ' +
        fax.value;
    }

    if (email.value) {
        signatureJpn += '<tr id="email_website"><td style="padding: 0 6px;">' +
            //'<td id="email"><a href="mailto:' + email.value + '" style="text-decoration:none;color:#1a0dab">' + email.value + '</a></td>';
            email.value + '';
    }

    if (web.value) {
        if (email.value == "") {
            signatureJpn += '<tr id="email_website"><td style="padding: 0 6px;">';
        }
        //var webStr = web.value;
        //var webStrChk = webStr.substr(0, 4);
        //if (!(webStrChk === 'http')) {
        //    webStr = 'http://' + web.value;
        //}
        //signatureJpn += '<td id="website">| <a href="' + webStr + '" style="text-decoration:none;color:#1a0dab">' + web.value + '</a></td>' +
        if (email.value) {
            signatureJpn += ' | ' + web.value + '</td>';
        }
        else {
            signatureJpn += web.value;
        }
    }

    if (address.value) {
        signatureJpn += '<tr>' +
            '<td style="padding: 0 6px 6px 6px;">' + '〒' + zipCode.value;
    }

    if (zipCode.value) {
        if (address.value == "") {
            signatureJpn += '<tr><td style="padding: 0 6px 6px 6px;">';
        }
        signatureJpn += ' ' + address.value;
    }

    signatureJpn += '</table><br>';
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