function solution(priorities, location) {
    let count = 0;
    let maxPriorityTarget = Math.max(...priorities);

    while (true) {
        let currentProcess = priorities.shift();

        if (currentProcess === maxPriorityTarget) {
            count++;

            //location 위치에 부합할 경우 return
            if(location === 0) return count;
            maxPriorityTarget = Math.max(...priorities);
        } else {
            priorities.push(currentProcess);
        }

        //location 조정
        location = location === 0 ? priorities.length - 1 : location - 1;
    }
}