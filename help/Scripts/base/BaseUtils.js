$(document).ready(function () {

    $('.PageHeader').resize(CalcResize);
    $('.PageContent').resize(CalcResize);
    $('.PageFooter').resize(CalcResize);


});
function CalcResize() {
    var HeaderHeight = $(".PageHeader").height();
    var FooterHeight = $(".PageFooter").height();
    var TotalHeight = HeaderHeight + FooterHeight + 1;
    var MinHeight = 'calc(100% - ' + TotalHeight + 'px)';
    $(".PageContent").css('min-height', MinHeight);

}

function _diff(A, B) {
    return A.filter(function (a) {
        return B.indexOf(a) == -1;
    });
}
function _toggleBitVal(ElementId)
{
    var iVal = $("#"+ElementId).val();
    if ( iVal == "0"  )
    {
        iVal = "1";
    }
    else
    {
        iVal = "0";
    }
    $("#" + ElementId).val(iVal).trigger('change');
}

function _ShowAlertMessage(msgTitle, msgText, msgType, msgTimer)
{
    if (_MessageCookieExists()) {

        var timeMS = null;
        if (msgTimer) {
            timeMS = parseInt(msgTimer);
            if (timeMS == 0) {
                timeMS = null;
            }
        }
        if (!msgType) {
            msgType = "info";
        }
        swal({
            title: msgTitle,
            text: msgText,
            type: msgType,
            confirmButtonText: "OK",
            timer: timeMS,
            animation: false
        });

        Cookies.remove('SSPMessageCookie');
    }
}
function _MessageCookieExists()
{
    var mc = Cookies.get('SSPMessageCookie');
    if (typeof mc === 'undefined') {
        return false;
    } else {
        return true;
    }
}
function preventEnterSubmit(e) {
    if (e.which == 13) {
        var $targ = $(e.target);

        if (!$targ.is("textarea") && !$targ.is(":button,:submit")) {
            var focusNext = false;
            $(this).find(":input:visible:not([disabled],[readonly]), a").each(function () {
                if (this === e.target) {
                    focusNext = true;
                }
                else if (focusNext) {
                    $(this).focus();
                    return false;
                }
            });

            return false;
        }
    }
}


function _PrintElement(elem) {
    _PrintPopup($(elem).html());
}

function _PrintPopup(data) {
    var printWindow = window.open('', 'my div', 'height=400,width=600');
    printWindow.document.write('<html><head><title></title>');
    /*optional stylesheet*/ //mywindow.document.write('<link rel="stylesheet" href="main.css" type="text/css" />');
    printWindow.document.write('</head><body >');
    printWindow.document.write(data);
    printWindow.document.write('</body></html>');

    printWindow.document.close(); // necessary for IE >= 10
    printWindow.focus(); // necessary for IE >= 10

    printWindow.print();
    printWindow.close();

    return true;
}







function timeStamp() {
    var now = new Date();
    var date = [now.getMonth() + 1, now.getDate(), now.getFullYear()];
    var time = [now.getHours(), now.getMinutes(), now.getSeconds()];
    var suffix = (time[0] < 12) ? "AM" : "PM";
    time[0] = (time[0] < 12) ? time[0] : time[0] - 12;
    time[0] = time[0] || 12;
    for (var i = 1; i < 3; i++) {
        if (time[i] < 10) {
            time[i] = "0" + time[i];
        }
    }
    return date.join("index.html") + " " + time.join(":") + " " + suffix;
}

