
/**
 * Arshlichaining
 * Arshli shared safe nested-property utility.
 */

function Arshlichaining(object, path, defaultValue) {
    const keys = Array.isArray(path)
        ? path
        : String(path).replace(/\[(\d+)\]/g, ".$1").split(".");

    let result = object;

    for (const key of keys) {
        if (result == null) {
            return defaultValue;
        }

        result = result[key];
    }

    return result === undefined ? defaultValue : result;
}

export default Arshlichaining;
