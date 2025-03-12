// get count new in DB (jsonServer)

const getCountDone = (array) => {
    const statusDone = array.filter(function(s) { return s.done === true }).length;
    return statusDone;
}

export default getCountDone;