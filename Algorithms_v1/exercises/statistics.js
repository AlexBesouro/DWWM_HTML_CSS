function statistics(data){
    if (data.length === 0){
        return null;
    }
    const stats = data.reduce((acc, val) => {
        return {
            "sum": acc.sum + val,
            "min": val < acc.min ? val: acc.min,
            "max": val > acc.max ? val: acc.max
        }
    }, {"sum": 0, "min": data[0], "max":data[0]});
    const sortedData = [...data].sort((a,b) => a - b); 
    const number = data.length;
    const sum = stats.sum ;
    const average = Math.round((stats.sum / number) * 100) / 100;
    const min = stats.min;
    const max = stats.max;
    const center = Math.floor(sortedData.length / 2);
    const extent = stats.max - stats.min ;
    const mediane = sortedData % 2 === 0 ? (sortedData[center - 1] + sortedData[center]) / 2: sortedData[center];
    return {"sortedData":sortedData, "length": number, "sum":sum, "average": average, "min": min, "max": max,
        "center": center, "extent": extent, "mediane" : mediane}

}
console.log(statistics([12, 5, 8, 20, 3, 15, 8, 10]));
