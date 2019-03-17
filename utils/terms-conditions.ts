/**
 * Fetch the Terms & Conditions data from device
 */

import Asset from "./assets";

//============================================================================
export default class TermsConditions {
    //============================================================================
    public static read(): Promise<any> {
        return Asset.read("terms_&_conditions.md");
    }
}