import LocalizedStrings, { LocalizedStringsMethods } from 'react-localization';

export interface IStrings extends LocalizedStringsMethods {
    company: string;
    slogan: string;
    home: string;
    watchList: string;
}

export const Localization: IStrings = new LocalizedStrings({
    // English
    en: {
        company: 'Cefalo',
        slogan: 'Movie Mania',
        home: 'Home',
        watchList: 'Watchlist',
    },
    // Norway
    no: {
        company: 'Cefalo',
        slogan: 'Film Mania',
        home: 'Hjem',
        watchList: 'Watchlist',
    },
});
