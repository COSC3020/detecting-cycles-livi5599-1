function hasCycle(graph) { //O(n^2)
    let queue = []; //O(1)
    let visited = []; //O(1)
    let current = 0; //O(1)
    let parent = null; //O(1)
    visited.push(current); //O(1)
    queue.push(current); //O(1)

    while (queue.length != 0) { //runs n times -> O(n^2)
        current = queue.shift(); //O(1)
        for (let neighbor = 0; neighbor < graph[current].length; neighbor++) { //runs n times -> O(n)
            if (graph[current][neighbor] === 0) { //O(1)
                continue;
            }
            else if (neighbor === parent) { //O(1)
                continue;
            }
            else if (visited.includes(neighbor)) { //O(1)
                return true;
            }
            else {
                visited.push(neighbor); //O(1)
                queue.push(neighbor); //O(1)
            }
        }
        parent = current; //O(1)
    }
    return false; //O(1)
}
