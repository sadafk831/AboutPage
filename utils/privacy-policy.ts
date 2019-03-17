/**
 * Fetch the Privacy Policy data from device
 */

import Asset from "./assets";

//============================================================================
export default class PrivacyPolicy {
    //============================================================================
    public static read(): Promise<any> {
        return Asset.read("privacy_policy.md");
    }
}