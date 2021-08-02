import LocalizedStrings, { LocalizedStringsMethods } from 'react-localization';

export interface IStrings extends LocalizedStringsMethods {
    companyName: string;
    promotionalText: string;
    theBasics: string;
    about: string;
    pressRoom: string;
    advertising: string;
    jobs: string;
    community: string;
    copyright: string;
    guidelines: string;
    discussions: string;
    contact: string;
    cityCountry: string;
    email: string;
    fbPhoneNumber: string;
    printPhoneNumber: string;
    services: string;
}

export const Localization: IStrings = new LocalizedStrings({
    // English
    en: {
        companyName: 'Cefalo Movie Mania',
        promotionalText: 'One of the largets move fever site in Bangladesh. Unlimited Entertainment.',
        theBasics: 'The Basics',
        about: 'About CEFALO Movie Mania',
        pressRoom: 'Press Room',
        advertising: 'Advertising',
        jobs: 'Jobs',
        community: 'COMMUNITY',
        copyright: 'Copyright©',
        guidelines: 'Guidelines',
        discussions: 'Discussions',
        contact: 'Contact',
        cityCountry: 'Dhaka, Bangladesh',
        email: 'info@example.com',
        fbPhoneNumber: '+ 880 xxx xxx xx',
        printPhoneNumber: '+ 880 yyy yyy yy',
        services: 'Services',
    },
    // Norway
    no: {
        companyName: 'Cefalo Movie Mania',
        promotionalText: 'En av de største flyttene til feber i Bangladesh. Ubegrenset underholdning.',
        theBasics: 'Det grunnleggende',
        about: 'Om CEFALO Movie Mania',
        pressRoom: 'Presserom',
        advertising: 'Reklame',
        jobs: 'jobber',
        community: 'FELLESSKAP',
        copyright: 'Opphavsrett©',
        guidelines: 'Retningslinjer',
        discussions: 'Diskusjoner',
        contact: 'Kontakt',
        cityCountry: 'Dhaka, Bangladesh',
        email: 'info@example.com',
        fbPhoneNumber: '+ 880 xxx xxx xx',
        printPhoneNumber: '+ 880 yyy yyy yy',
        services: 'Tjenester',
    },
});
