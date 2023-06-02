const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id: string, width: number, height: number) =>
    `https://i.ibb.co/${id}/${width}x${height}`;

const unsplashPhotos = [
    { id: "yRtP5CM/IMG-20230529-WA0005.jpg", width: 1080, height: 1080 },
    { id: "", width: 1080, height: 1080 },
    { id: "", width: 1080, height: 1080 },
    { id: "", width: 1080, height: 2000 },
    { id: "", width: 1080, height: 2000 },
    { id: "", width: 1080, height: 2000 },
    { id: "", width: 1080, height: 1080 },
    { id: "", width: 1080, height: 1080 },
    { id: "", width: 1080, height: 1180 },
    { id: "", width: 1080, height: 1180 },
    { id: "", width: 1080, height: 1080 },
    { id: "", width: 1080, height: 1080 },
    { id: "", width: 1080, height: 600 },
    { id: "", width: 1080, height: 800 },

];

const photos = unsplashPhotos.map((photo) => {
    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;

    return {
        src: unsplashLink(photo.id, width, height),
        width,
        height,
        srcSet: breakpoints.map((breakpoint) => {
            const height = Math.round((photo.height / photo.width) * breakpoint);
            return {
                src: unsplashLink(photo.id, breakpoint, height),
                width: breakpoint,
                height,
            };
        }),
    };
});

export default photos;
