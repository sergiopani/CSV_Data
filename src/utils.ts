export const dateStringToDate = (dateString: string): Date => {
    const dateParts = dateString.split('/').map((value: string): number => {
        return parseInt(value);
    });//Pass into array of numbers with map

    return new Date(dateParts[2], dateParts[1] - 1,dateParts[0])
}