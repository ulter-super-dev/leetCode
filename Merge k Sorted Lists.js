/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let mergedArr = [];
    for (let k = 0; k < lists.length; k ++) {
        
        for (let i = 0; i < lists[k].length; i ++) {
            mergedArr.push(lists[k][i]);            
        }

    }
    mergedArr.sort();
    return mergedArr;
};

console.log(mergeKLists([[1,4,5],[1,3,4],[2,6]]));