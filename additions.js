export function strictEquals(a, b) {
    let x = Object.is(a, b);

    if (Object.is(a, NaN) || Object.is(b, NaN)) {
        x = false;
    } else if (Object.is(a, -0) || Object.is(b, 0)) {
        x = true;
    } else if (Object.is(a, 0) || Object.is(b, -0)) {
        x = true;
    }
    return x;
}

export default strictEquals;
