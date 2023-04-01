// Time Complexity: O(n^2)
// Space Complexity: O(1)

const count = [0, 2, 5, 60, 34, 20, 15, -15, -5]

const countArray = (list) => {
    for (let i = 0; i < list.length; i++) {
        for (let k = 0; k < list.length; k++) {
            let sum = list[i] + list[k];
            if (sum === 0) {
                return true
            };
        };
    };
    return false
};


const results = countArray(count)
console.log(results)

// Time Complexity: O(n^2)
// Space Complexity: O(1)

const character = (arr) => {
    const splitWord = arr.split('')
    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k < arr.length; k++) {
            if (arr[i] === arr[k] && i !== k) {
                return false;
            };
        };
    };
    return true;
};

const wordResults = character("volcano") 
console.log(wordResults)

// Time Complexity: O(n)
// Space Complexity: O(1)


const pangram = (str) => {
    let alphabet = new Set("abcdefghijklmnopqrstuvwxyz")
    for (let i of str.toLowerCase()) {
        alphabet.delete(i)
        if (alphabet.size == 0 ) 
        return true
        
    }
    return false
}
const sentence = ('the quick brown fox jumps over the lazy dog');

const pragramResults = pangram(sentence)
console.log(pragramResults)

// Time Complexity: O(n)
// Space Complexity: O(n)

const longestWord = (str) => {
    str = str.split(" ")
    return str.sort((a, b) => b.length - a.length) [0].length
}

const resultsLongestString = longestWord("Hippo and the frog married on the moon")
console.log(resultsLongestString)