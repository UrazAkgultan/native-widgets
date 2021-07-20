// This file was generated by Mendix Modeler.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the code between BEGIN USER CODE and END USER CODE
// Other code you write will be lost the next time you deploy the project.

import TouchID from "react-native-touch-id";

/**
 * @param {string} reason - The reason for requesting authentication. If empty, the system default message is used.
 * @returns {Promise.<boolean>}
 */
export async function BiometricAuthentication(reason?: string): Promise<boolean> {
    // BEGIN USER CODE
    // Documentation https://github.com/naoufal/react-native-touch-id

    return TouchID.authenticate(reason)
        .then(() => true)
        .catch(() => false);

    // END USER CODE
}
