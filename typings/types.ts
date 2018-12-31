
import { History, Location } from 'history';
import { IncomingMessage, ServerResponse } from 'http';
import { match as Match } from 'react-router-dom';

/**
 * These interfaces were extracted from
 * src/types.ts of the main source code
 * for After.js
 * Might try to make a PR to expose these types 
 * in the main library
 */
interface CtxBase {
    req?: IncomingMessage;
    res?: ServerResponse;
    history?: History;
    location?: Location;
}
export interface Ctx<P> extends CtxBase {
    match: Match<P>;
}