import {resolve} from 'path';
import {generateApi} from 'swagger-typescript-api';


generateApi({
    name: 'API.ts',
    output: resolve(process.cwd(), './src/core/api'),
    url: 'http://172.20.10.6:8090/v3/api-docs',
    httpClientType: 'axios',
});
