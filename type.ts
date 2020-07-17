export interface _StrategyOptionsBase {
    host: string,
    realm: string,
    clientID: string,
    clientSecret: string,
    callbackURL: string,
    authorizationURL: string,
    tokenURL: string,
    userInfoURL: string   
}

export interface StrategyOptionsWithRequest extends _StrategyOptionsBase {
    passReqToCallback?: true;
}

export interface StrategyOptions extends _StrategyOptionsBase {
    passReqToCallback?: false;
}

export type VerifyCallback = (err?: string | Error, user?: any, info?: any) => void;