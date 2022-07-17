$(document).ready(function () {
    (function initalizeUserConsent(win) {
        win.WM.UserConsent.init({
            cookieDomain: win.WM.ConsentSiteConfig.cookiedomain,
            domId: win.WM.ConsentSiteConfig.domId,
            src: win.WM.ConsentSiteConfig.src,
            consentChangeAction: function (data) {
                document.getElementsByTagName('body')[0].dispatchEvent(new CustomEvent('consentChange', { detail: data }))
            },
            reloadOnConsentChange: false,
            languageFromBrowser: false,
            categories: {
                req: 'required',           // Built-in
                ven: 'vendor',             // CCPA
                pf: 'perf-general',        // Custom LATAM/EMEA
                fc: 'func-cookies',        // Custom LATAM/EMEA
                tc: 'ad-cookies'           // Custom LATAM/EMEA
            },
            consentDefaults: {
                'required': true,
                'vendor': true,
                'perf-general': true,
                'func-cookies': true,
                'ad-cookies': true
            },
            regions: [
                {
                    id: 'ccpa',
                    consentExpireIn: 3,  // Expire CCPA consent in 3 years
                    consentImpliedDefaults: {
                        'required': true,
                        'vendor': true,
                        'perf-general': true,
                        'func-cookies': true,
                        'ad-cookies': true
                    },
                    consentLinkTitle: 'Do Not Sell My Personal Information',
                    geoMatch: ['US', 'PR', 'VI', 'UM', 'AS', 'MP', 'GU', '']
                },
                {
                    id: 'latam-optout',
                    consentExpireIn: 3,  // Expire CCPA consent in 3 years
                    consentImpliedDefaults: {
                        'required': true,
                        'vendor': true, // CCPA only
                        'perf-general': true,
                        'func-cookies': true,
                        'ad-cookies': true
                    },
                    consentLinkTitle: 'Cookie Preferences',
                    geoMatch: ['BR', 'MX', 'NI', 'PY', 'VE', 'DO', 'AI', 'AG', 'AW', 'VG', 'BS', 'BB', 'BZ', 'KY', 'CW', 'DM', 'GD', 'GY', 'HT', 'JM', 'MS', 'KN', 'LC', 'VC', 'SR', 'TT', 'TC', 'BO', 'EC', 'SV', 'GT', 'HN', 'PA']
                },
                {
                    id: 'latam-gdpr',
                    consentDefaults: {  // Setting this here will override the top-level defaults when in this region
                        'required': true,
                        'vendor': true, // CCPA only
                        'perf-general': false,
                        'func-cookies': false,
                        'ad-cookies': false
                    },
                    consentImpliedDefaults: {
                        'required': true,
                        'vendor': true // CCPA only
                    },
                    consentLinkTitle: 'Cookie Preferences',
                    gdprApplies: true,
                    geoMatch: ['AR', 'CL', 'CO', 'PE', 'UY', 'CR']
                },
                {
                    id: 'gdpr',
                    consentDefaults: {  // Setting this here will override the top-level defaults when in this region
                        'required': true,
                        'vendor': true, // CCPA only
                        'perf-general': false,
                        'func-cookies': false,
                        'ad-cookies': false
                    },
                    consentImpliedDefaults: {
                        'required': true,
                        'vendor': true // CCPA only
                    },
                    consentLinkTitle: 'Manage Cookies+',
                    gdprApplies: true,
                    geoMatch: ['GB', 'DE', 'FR', 'IT', 'ES', 'PL', 'RO', 'NL', 'BE', 'GR', 'CZ', 'PT', 'SE', 'HU', 'AT', 'BG', 'DK', 'FI', 'SK', 'IE', 'HR', 'LT', 'SI', 'LV', 'EE', 'CY', 'LU', 'MT', 'NO', 'IS', 'LI', 'BQ', 'MQ', 'SX', 'BL', 'MF']
                },
                {
                    id: 'global',
                    geoMatch: ['*']
                }
            ]
        });
    })(window);
    var doNotSellSetting = !window.WM || !window.WM.UserConsent.getConsentState().vendor || false;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ doNotSellSetting: doNotSellSetting });

});




window.addEventListener("OTConsentApplied", function (a, b, c, d) {
    //location.reload();
});
window.addEventListener("consent.onetrust", function (a, b, c, d) {
    //a.detail.find(x => x == 'pf') --- not IE11 compatibile
    if (a.detail.filter(function (x) { return x === 'pf' })[0]) {
        (function (w, d, s, l, i) {
            w[l] = w[l] || []; w[l].push({
                'gtm.start':
                    new Date().getTime(), event: 'gtm.js'
            }); var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = false; j.src =
                    '../www.googletagmanager.com/gtm5445.html?id=' + i + dl; f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-TWW8F56');

    }
    else {
        _RemoveCookies('_ga');
        _RemoveCookies('_gi');
    }
});
window.addEventListener("OneTrustGroupsUpdated", function (a) {
    if (a.detail.filter(function (x) { return x === 'pf' })[0]) {

    }
    else {
        _RemoveCookies('_ga');
        _RemoveCookies('_gi');
    }
});