/**
 * 
 * Helper functions  
 *  
 */


/**
 * 
 * @param {*} bytes 
 * @param {*} si 
 */
function humanFileSize(bytes, si) {
    const thresh = si ? 1000 : 1024
    if (Math.abs(bytes) < thresh) {
        return `${bytes} B`
    }
    const units = si
        ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
        // : ['KiB','MiB','GiB','TiB','PiB','EiB','ZiB','YiB'];
        : ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    let u = -1
    do {
        bytes /= thresh
        ++u
    } while (Math.abs(bytes) >= thresh && u < units.length - 1)
    return `${bytes.toFixed(1)} ${units[u]}`
}

/**
 * 
 * @param {*} value 
 */
function allcap(value) {
    return value.toUpperCase();
  }