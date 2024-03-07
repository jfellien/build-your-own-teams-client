export const environment = {
    production: false,
    msalConfig: {
        auth: {
            clientId: '21e3ad9c-8e9b-45b9-8abd-0bd27d58c334',
            authority: 'https://login.microsoftonline.com/3157d5b8-9db5-431c-98fb-fa2fdcedf861'
        }
    },
    apiConfig: {
        scopes: ['user.read'],
        uri: 'https://graph.microsoft.com/v1.0/me'
    }
};
