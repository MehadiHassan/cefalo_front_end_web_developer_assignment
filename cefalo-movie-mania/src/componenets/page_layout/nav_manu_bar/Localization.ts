import LocalizedStrings, { LocalizedStringsMethods } from 'react-localization';

export interface IStrings extends LocalizedStringsMethods {
    company: string;
    slogan: string;
}

export const Localization: IStrings = new LocalizedStrings({
    // English
    en: {
        company: 'Cefalo',
        slogan: 'Movie Mania',
    },
    // Norway
    no: {
        company: 'Cefalo',
        slogan: 'Film Mania',
    },
});
