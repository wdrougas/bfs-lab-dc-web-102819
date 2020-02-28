function bfs(rootNode, vertices, edges){
   
}

function findAdjacent(node, vertices, edges) {
    let adjacentNodes = edges.filter(edge => edge.includes(node))
    let names = []
    adjacentNodes.map(node => names.push(node[0]) && names.push(node[1]) )
    let verticesIncludingNode = vertices.filter(vertix => names.includes(vertix.name))
    let verticesWithoutNode = verticesIncludingNode.filter(vertix => vertix.name != node)
    let answer = verticesWithoutNode.filter(vertix => vertix.distance == null)
    return answer
}


function markDistanceAndPredecessor(predecessor, adjacentNodes) {
    return adjacentNodes.map(node => {
        node.distance = predecessor.distance + 1
        node.predecessor = predecessor
    })
}
