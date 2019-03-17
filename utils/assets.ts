/**
 * Fetch the Assets from device
 */

 import { Platform } from "react-native";
 import * as RNFS from "react-native-fs";

//============================================================================
export default class Assets {
    //============================================================================
    public static read(fileName: string): Promise<any> {
        if (Platform.OS === 'ios') {
            return RNFS.readFile(`${RNFS.MainBundlePath}/${fileName}`);
        }
        return RNFS.readFileAssets(`custom/${fileName}`);
    }
}