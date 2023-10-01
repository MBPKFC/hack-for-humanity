export const numberFormatter = (number) => {
    return new Intl.NumberFormat("en-US", {
    }).format(number);
}