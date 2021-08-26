/*
 * BrowserService handles all browser interactions
 */

/**
 * jumpTo
 * @param {string} location A string anchor tag to send users to on the page
 */
const jumpTo = (location) => {
    let newURL = window.location.href

    if (newURL.includes('#')) {
        newURL = newURL.split('#')[0]
    }

    newURL = newURL + (location ? '#' + location : '')
    window.location = newURL
}

export { jumpTo }
