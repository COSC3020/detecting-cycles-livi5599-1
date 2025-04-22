const fs = require('fs');
eval(fs.readFileSync('code.js') + '');

const testCases = [
  {
    graph: [
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 0, 1],
      [0, 0, 1, 0]
    ],
    expected: false
  },
  {
    graph: [
      [0]
    ],
    expected: false
  },
  {
    graph: [
      [0, 1, 0],
      [1, 0, 1],
      [0, 1, 0]
    ],
    expected: false
  },
  {
    graph: [
      [0, 1, 0, 0],
      [1, 0, 1, 1],
      [0, 1, 0, 1],
      [0, 1, 1, 0]
    ],
    expected: true
  }
];

function runMatrixTests() {
  let passed = 0;
  for (let i = 0; i < testCases.length; i++) {
    const { graph, expected } = testCases[i];
    const result = hasCycle(graph);
    if (result === expected) {
      console.log(`Test ${i} passed`);
      passed++;
    } else {
      console.error(`Test ${i} failed | Expected ${expected}, got ${result}`);
    }
  }
  console.log(`${passed}/${testCases.length} tests passed.`);
}

runMatrixTests();
