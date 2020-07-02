export const sizes = {
    laptop: {
        screenSize: '1025px',
        content_width: '380px',
    },
    tablet: {
        screenSize: '768px',
        content_width: '200px',
    },
    mobile: {
        screenSize: '500px',
        content_width: '100px',
    }

}

export const devices = {
    laptop: `(max-width: ${sizes.laptop.screenSize})`,
    tablet: `(max-width: ${sizes.tablet.screenSize})`,
    mobile: `(max-width: ${sizes.mobile.screenSize})`,
}