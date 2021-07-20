// This file was generated by Mendix Modeler.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the code between BEGIN USER CODE and END USER CODE
// Other code you write will be lost the next time you deploy the project.

import { fetch } from "@react-native-community/netinfo";
import { NetInfoType } from "../../typings/NetInfo";

/**
 * @returns {Promise.<boolean>}
 */
export async function IsWifiConnection(): Promise<boolean> {
    // BEGIN USER CODE

    return fetch().then((info: NetInfoType) => info.type === "wifi");

    // END USER CODE
}
