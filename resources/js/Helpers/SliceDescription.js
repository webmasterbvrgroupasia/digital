export default function sliceDescription(metaDescripition, lengthChar) {
    const splitDescription = metaDescripition.split(" ");
    const sliceDescription = splitDescription.slice(0, lengthChar);
    return sliceDescription.join(' ');
}
