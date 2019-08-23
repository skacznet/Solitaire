export const pointInRectangle = (pX, pY, rStartX, rStartY, w, h) => {
    const rEndX = rStartX + w;
    const rEndY = rStartY + h;

    if((pX >= rStartX) && (pX <= rEndX) && (pY >= rStartY) && (pY <= rEndY)) {
        return true;
    } else {
        return false;
    }
}