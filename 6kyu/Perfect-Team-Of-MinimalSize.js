// #Perfect Team Of MinimalSize
// Task
// You are looking for teammates for an oncoming intellectual game in which you will have to answer some questions.

// It is known that each question belongs to one of the n categories. A team is called perfect if for each category there is at least one team member who knows it perfectly.

// You don't know any category well enough, but you are going to build a perfect team. You consider several candidates, and you are aware of the categories each of them knows perfectly. There is no restriction on the team size, but smaller teams gain additional bonus points. Thus, you want to build a perfect team of minimal possible size. Find this size (and don't forget to count yourself!) or determine that it is impossible to form a perfect team from the candidates you have.

// Input/Output
// [input] integer n representing the number of categories

// 1 ≤ n ≤ 10.

// [input] 2D integer candidatesay candidates

// For each valid i, candidates[i] is an candidatesay of different integers representing indices of the categories which the ith candidate knows perfectly.

// 0 ≤ candidates.length ≤ 10,

// 0 ≤ candidates[i].length < n,

// 0 ≤ candidates[i][j] < n.

// [output] an integer

// The minimal possible size of the perfect team, or -1 ( or Nothing or a similar empty value ) if you can't build it.

// Example
// For n = 3 and
// candidates = [[0, 2],
//               [1, 2],
//               [0, 1],
//               [0]]
// the output should be  3.

// You can build a perfect team of size 3 in any of the following ways:

// yourself, candidate number 1 (1-based) and candidate number 2 
// [] + [0, 2] + [1, 2] = [0, 1, 2]
// yourself, candidate number 1 and candidate number 3
// [] + [0, 2] + [0, 1] = [0, 1, 2]
// yourself, candidate number 2 and candidate number 3
// [] + [1, 2] + [0, 1] = [0, 1, 2]
// yourself, candidate number 2 and candidate number 4
// [] + [1, 2] + [0] = [0, 1, 2]

// For n = 3 and
// candidates = [[0, 2],
//               [1, 2],
//               [0, 1],
//               [0]]

// function perfectTeamOfMinimalSize(n, candidates) {
//     //coding and coding..
    
    
//   }


// let candidates = [[0, 1], [2, 3], [1], [0, 1, 2]];
// n = 10
// let candidates = [[2,3,5,6],[1,3,5,7,9],[0,1,2,3,4,5,6,7,8,9],[0,1,3,5],[1,4,5,7,8,9],[9],[4,7,8],[1,2],[0,1,3,5,8,9]];
// let candidates = [[0,1],  [1, 3],  [0,2],  [0,5],  [1,4]];
// let candidates = [[0,2,3,5,6,7],[0,1,2,3,4,5,7],[0,1,5,7],[2],[1,2,3,5,7],[2,3,4,5,7]] ;
// let candidates = [[0,1,2,4,5,6,7,9],[1,2,3,4,6],[0,1,3,4,5,6,7,8,9],[1,2,3,4,5]];
// let candidates = [[1,3,4,5,6,7,8],[0,1,2,3,5,6,7,8,9]];
// let candidates = [[0,1],[0],[0,1],[],[0,1],[0,1]];
// let candidates = [[0],[0,1,2,3],[0,1,2,3],[0,1,2,3]] ;
// let candidates = [[2],[2,5,7],[0,1,2,3,4,5,6,7]] 
let candidates = [[0],[2,5],[1,2,3,4],[0,1,2,3,4,7],[1,3,4,6,7]];
// let candidates = [[0],[0],[0],[0],[0]];
// let candidates = [[0,1,2],[1,2]];
let n = 8;
// let candidates = [[0,2,4],[0,1,6],[0,1,3,4],[0,4],[0,1,3,4,5,6],[0,2,4,5,6]];
// let candidates = [[0,1,2,3,4,5,6,7,8,9],[0,3,4,6,7,8],[2,3,5],[0,1,3,4,5,7,8,9],[1,2,7,9],[0,1,5,6,7,9],[0,1,4,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,4,6,7,8,9],[3,4,6,7,9]];
// let n = 10;

function perfectTeamOfMinimalSize(n, candidates) {
  let collection = [];
  let bestCandidates = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
  let teamCandidates = [];
  for (let z=0; z<candidates.length; z++) {
    candidates[z].unshift(candidates[z].length-1);
  }
  let candidatesDescending = candidates.sort().reverse();
  for (let x=0; x<candidatesDescending.length; x++) {
    candidatesDescending[x].shift();
  }
  for(let i=0; i<candidatesDescending.length; i++) {
    for (let j=0; j<candidatesDescending[i].length; j++) {
      if (!collection.includes(candidatesDescending[i][j])) {
        collection.push(candidatesDescending[i][j]);
        bestCandidates[i]++;
        if (!teamCandidates.includes(candidatesDescending[i])) {
          teamCandidates.push(candidatesDescending[i]);
        }
      }
    }
  }
  if (collection.length < n) {
    return -1;
  } else {    
    let notUnique = 0;
    for (let m=0; m<teamCandidates.length; m++) {
      // if (bestCandidates[m] !== 0) {
        let filteredCandidates = teamCandidates.filter(can => can !== teamCandidates[m]);
        let filteredCategories = [];
        for (let k=0; k<filteredCandidates.length; k++) {
          for (let l=0; l<filteredCandidates[k].length; l++) {
            filteredCategories.push(filteredCandidates[k][l]);
          }
        }
        let count = 0;
        for (let n=0; n<teamCandidates[m].length; n++) {
          if (filteredCategories.includes(teamCandidates[m][n])) {
            count++;
            if (count == teamCandidates[m].length) {
              notUnique++;
            }
          }
        }
      // }
    }
    let numb = bestCandidates.filter(cand => cand != 0).length + 1 - notUnique;
    return numb;
  }
}
console.log(perfectTeamOfMinimalSize(n, candidates));
