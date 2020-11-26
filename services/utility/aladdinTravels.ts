const canAladdinTravel = (n: number, magic: number[], dist: number[], start: number): boolean => {
    let cummulative: number = magic[start%n]    
    for(let i: number = start; i < start + n; i++) {
        const index = i < n ? i : Math.abs(n-i);
        const nextIndex = index + 1 >= n ? Math.abs((index + 1) - n) : index + 1;
        const nextSource = (start + n === i+1) ? 0 : magic[nextIndex];        

        if(cummulative < dist[index]) return false;
        cummulative = (cummulative - dist[index]) + nextSource;
    }
    return true;
}

const doesAlladinCompleteMagicOdyssey = (n: number, magic: number[], dist: number[], start: number = 0): number => {
    if(start >= n) return -1;
    const canTravel: boolean = canAladdinTravel(n, magic, dist, start);

    return canTravel ? start : doesAlladinCompleteMagicOdyssey(n, magic, dist, start + 1);
}

export default doesAlladinCompleteMagicOdyssey;