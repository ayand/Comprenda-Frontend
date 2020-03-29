export const convertToHTML = (string) => {
    const parts = string.split(/[\r\n]/g).map(part => `<p>${part}</p>`);
    return parts.join("<br/>")
}
