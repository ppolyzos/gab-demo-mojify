import { getOsEnv } from './lib/env';

export const env = {
    node:          process.env.NODE_ENV || 'development',
    isProduction:  process.env.NODE_ENV === 'production',
    isTest:        process.env.NODE_ENV === 'test',
    isDevelopment: process.env.NODE_ENV === 'development',
    app: {
        faceApiUrl: getOsEnv('FACE_API_URL'),
        faceApiKey: getOsEnv('FACE_API_KEY')
    }
}
