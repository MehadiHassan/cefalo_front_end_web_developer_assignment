import { AxiosInstance } from 'axios';
let cefaloMovieManiaAPI: AxiosInstance;

switch (process.env.ENVIRONMENT_APP) {
    case 'DEVELOPMENT': {
        import('./dev/index').then(({ cefaloMovieManiaInstance }) => {
            SetCefaloMovieManiaAPIInstance(cefaloMovieManiaInstance);
        });
        break;
    }
    case 'STAGING': {
        import('./staging/index').then(({ cefaloMovieManiaInstance }) => {
            SetCefaloMovieManiaAPIInstance(cefaloMovieManiaInstance);
        });
        break;
    }
    default: {
        import('./prod/index').then(({ cefaloMovieManiaInstance }) => {
            SetCefaloMovieManiaAPIInstance(cefaloMovieManiaInstance);
        });
        break;
    }
}

const SetCefaloMovieManiaAPIInstance = async (cefaloMovieManiaInstance: AxiosInstance) => {
    cefaloMovieManiaAPI = cefaloMovieManiaInstance;
};

export { cefaloMovieManiaAPI };
