$(document).ready(function () {

    $(document).on('click', function (e) {
        if (!(e.target.id == 'PageSearchInput' || e.target.id == 'SearchHome' || e.target.id == 'DynamicSearchWrapper' || $('#DynamicSearchWrapper').has(e.target).length)) {
            $("#DynamicSearchResultsDT").addClass("DisplayNone");
            $("#DynamicSearchHome").addClass("DisplayNone");
        }
        if (!(e.target.id == 'LanguagePickerButton' || $('#LanguagePickerButton').has(e.target).length)) {
            $("#LanguagePickerOverlay").addClass("DisplayNone");
        }
        if ($(e.target).data("validation") && $(e.target).data("validation") != '') {
            $("#" + $(e.target).data("validation")).focus();
            document.getElementById($(e.target).data("validation")).scrollIntoView({
                behavior: 'auto',
                block: 'center',
                inline: 'center'
            });
        }
    });
    $(document).mousedown(function () {
        var $focused = $(':focus');
        console.log('md mouse remove Focus is: ' + $focused);
        $($focused[0]).removeClass("Kfocus");
    });
    $(document).keyup(function (e) {
        if (e.keyCode === 27) {  //esc
            if (e.target.id == 'SearchHome' || e.target.id == 'PageSearchInput' || $(e.target).parents('#DynamicSearchWrapper').length) {
                $("#DynamicSearchHome").addClass("DisplayNone");
                $("#DynamicSearchResultsDT").addClass("DisplayNone");
            }
        }
        if (e.keyCode === 9) {
            var $focused = $(':focus');
            console.log('ku add Focus is: ' + $focused[0]);
            $($focused[0]).addClass("Kfocus");
            if ($($focused[0]).data("nav")) {
                $($focused[0]).addClass($($focused[0]).data("nav"));
            }
            if ($($focused[0]).data("skiptarget")) {
                var skipTarget = $(e.target).data("skiptarget");
                if (skipTarget) {
                    $($focused[0]).removeClass("Kfocus");
                    $("#" + skipTarget).removeClass("DisplayNone");
                    $("#" + skipTarget).focus();
                }
            }
        }
    });
    $(document).keydown(function (e) {
        if (e.keyCode === 9) {  //tab
            var $focused = $(':focus');
            console.log('kd remove Focus is: ' + $focused);
            $($focused[0]).removeClass("Kfocus");
            if ($(e.target).data("lastselection") == '1') {
                $("#DynamicSearchHome").addClass("DisplayNone");
                $("#DynamicSearchResultsDT").addClass("DisplayNone");
            }
            if ($($focused[0]).data("skipcontent")) {
                $(e.target).addClass("DisplayNone");
            }
        }

        if (e.keyCode === 13) {  //enter
            if ($(e.target).hasClass("CollapsibleSectionExpander")) {
                $(e.target).click();
            }
            if ($(e.target).attr("role") == 'tab' && $(e.target).hasClass("Device")) {
                $(e.target).click();
            }
            var skipContent = $(e.target).data("skipcontent");
            if (skipContent) {
                $(e.target).addClass("DisplayNone");
                $("[data-skipdestination='" + skipContent + "']").focus();
                $("[data-skipdestination='" + skipContent + "']").addClass("Kfocus");
            }
        }
    });
    $("a[data-dlink='1']").each(function (ind, sectionTag) {
        var oldUrl = $(sectionTag).attr("href");
        var dURL = createLocalURL(HHURL.config.baseUrl, HHURL.config.selectedCountry, HHURL.config.selectedLanguage);
        var newUrl = oldUrl.replace("{|{link}|}", dURL);
        $(sectionTag).attr("href", newUrl);
    });
    $("#ScrollToTop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });
    $("#CountryPickerButton").click(function () {
        $("#CountryPickerOverlay").removeClass("DisplayNone");
    });
    $("#CountryOverlayClose").click(function () {
        $("#CountryPickerOverlay").addClass("DisplayNone");
    });
    $("#LanguagePickerButton").click(function () {
        $("#LanguagePickerOverlay").removeClass("DisplayNone");
        //$("html").addClass("OverflowHidden");
    });
    $("#LanguageOverlayClose").click(function () {
        $("#LanguagePickerOverlay").addClass("DisplayNone");
        $("html").removeClass("OverflowHidden");
    });
    $("#FooterCUButton").click(function () {
        $("#CUModalBG").removeClass("DisplayNone");
        $("html").addClass("OverflowHidden");
    });
    $("#CUModalClose").click(function () {
        $("#CUModalBG").addClass("DisplayNone");
        $("html").removeClass("OverflowHidden");
    });
    $("#ContactUsMobileDD").click(function () {
        $("#CUTopicOverlay").removeClass("DisplayNone");
        $("html").removeClass("OverflowHidden");
    });
    $("#CUTopicOverlayClose").click(function () {
        $("#CUTopicOverlay").addClass("DisplayNone");
        $("html").removeClass("OverflowHidden");
    });
    $("#CUPhoneOverlayClose").click(function () {
        $("#CUPhoneOverlay").addClass("DisplayNone");
        $("html").removeClass("OverflowHidden");
    });
    $("#CUEmailOverlayClose").click(function () {
        $("#CUEmailOverlay").addClass("DisplayNone");
        $("html").removeClass("OverflowHidden");
    });
    $("#OOHMessageOverlayClose").click(function () {
        $("#OOHOverlay").addClass("DisplayNone");
        $("html").removeClass("OverflowHidden");
    });
});


function createLocalURL(BaseURL, Country, Lang) {
    var url = BaseURL;
    if (Country) url = url + Country;
    if (Lang) url = url + '-' + Lang;
    url = url + '/';
    return url;
}

function ThankYou() {
    var form = document.querySelector('#AnswerFeedbackForm');
    var formYes = document.querySelector('#AnswerFeedbackFormYes');
    var feedbackbtns = document.querySelector('.feedback-btns');
    form.style.display = 'none';
    formYes.style.display = 'none';
    feedbackbtns.className += ' answered';
    feedbackbtns.innerHTML = HHTranslate.g_Thanks;
}

function FormSubmitted(formname) {
    if ($("#" + formname).valid()) {
        $("#issueSpinnerImg").removeClass("issueSpinClosed");
        $("#issueSpinnerImg").addClass("issueSpinOpen");
        $("#CreateIssueButton").attr('disabled', 'disabled');
    }
}
function TestEmail(email) {
    var emailPattern = new RegExp("^((([-_!#$%&'*+/=?^~`{|}\\w]+([.][-_!#$%&'*+/=?^~`{|}\\w]*)*)|(\"[^\"]+\"))@[0-9A-Za-z]+([\\-]+[0-9A-Za-z]+)*(\\.[0-9A-Za-z]+([\\-]+[0-9A-Za-z]+)*)+[;, ]*)+$");
    if (emailPattern.test(email)) {
        // valid email
        return true;
    }
    else {
        // invalid email
        return false;
    }
}
function RealTimeSearch(SearchTerm, ReplaceDiv, SearchURL) {
    var ServiceURL = SearchURL + '?SearchTerm=' + encodeURIComponent(SearchTerm);
    $.ajax({
        type: 'GET',
        url: ServiceURL,
        dataType: 'json',
        success: function (sdata) {
            if (sdata && sdata.SearchResults) {
                $("#PopularBlock").addClass("DisplayNone");
                $('#' + ReplaceDiv).html(sdata.SearchResults);
            }
            else {
                $("#PopularBlock").removeClass("DisplayNone");
                $('#' + ReplaceDiv).html("");
            }
            return;
        }
    });
}
function MonitorSearch(SearchElement, ReplaceDiv, SearchURL) {
    $("#" + SearchElement).keyup(function () {
        clearTimeout($.data(this, 'timer'));
        var CurrentSearchTerm = $("#" + SearchElement).val();
        if (CurrentSearchTerm.length < 3) {
            $("#PopularBlock").removeClass("DisplayNone");
            $('#' + ReplaceDiv).html("");
            return;
        }
        $(this).data('timer', setTimeout(function () {
            RealTimeSearch(CurrentSearchTerm, ReplaceDiv, SearchURL);
        }, 500));
    });
}
function _isTabletWidth() {
    if ($(window).width() < 1024) {
        return true;
    }
    else {
        return false;
    }
}
function _RemoveCookies(cName) {
    $.each(Cookies.get(), function (name, value) {
        var pattern = new RegExp('^'+cName, 'i');
        if (pattern.test(name)) {
            Cookies.remove(name, { path: '', domain: HHURL.config.cookieDomain});
        }
    });
}
