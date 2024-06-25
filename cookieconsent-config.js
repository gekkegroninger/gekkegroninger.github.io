import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.umd.js';

// Enable dark mode
document.documentElement.classList.add('cc--darkmode');

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "box",
            position: "bottom left",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        analytics: {}
    },
    language: {
        default: "en",
        autoDetect: "browser",
        translations: {
            en: {
                consentModal: {
                    title: "Hello traveller, it's cookie time!",
                    description: "Mijn website maakt gebruik van cookies om het gebruik en functionaliteit te waarborgen van deze website.",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    showPreferencesBtn: "Manage preferences",
                    footer: "<a href=\"https://gekkegroninger.nl/terms/privacy/\">Privacy Policy</a>\n<a href=\"https://gekkegroninger.nl/terms/disclamer/\">Disclamer</a>\n<a href=\"https://gekkegroninger.nl/terms/\">Terms en Conditions</a>"
                },
                preferencesModal: {
                    title: "Consent Preferences Center",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    savePreferencesBtn: "Save preferences",
                    closeIconLabel: "Close modal",
                    serviceCounterLabel: "Service|Services",
                    sections: [
                        {
                            title: "Cookie Usage",
                            description: "Ik gebruik cookies om uw gebruik van mijn website te anyliceren en het gebruik te verbeteren. Met het gebruik van cookies kan ik de content personaliseren met onder andere advertenties. Kies in deze tool welke cookies u accept. De Stricly Necessary Cookies kunt u niet uitschakelen."
                        },
                        {
                            title: "Strictly Necessary Cookies <span class=\"pm__badge\">Always Enabled</span>",
                            description: "Deze cookies zijn noodzakelijk om de website te kunnen bezoeken.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Analytics Cookies",
                            description: "Deze cookies zijn voor het anyliceren van het gebruik van de website.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "More information",
                            description: "For any query in relation to my policy on cookies and your choices, please <a class=\"cc__link\" href=\"https://gekkegroninger.nl/contact/\">contact me</a>."
                        }
                    ]
                }
            }
        }
    }
});