import {resolve} from 'path';
import {generateApi} from 'swagger-typescript-api';


generateApi({
    name: 'API.ts',
    output: resolve(process.cwd(), './src/core/api'),
    url: 'http://192.168.1.25:8090/v3/api-docs',
    httpClientType: 'axios',
});
