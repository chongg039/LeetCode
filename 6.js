/**
 * 二维数组
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 * 中间有（numRows-2）行
 * i < numRows, 若当前值为P[i], 下一个为P[i+(2numRows-2)]
 * 考虑特殊情况
 */
function ZigZag(s, numRows) {
    if(numRows === 1){
        return s;
    }
    let count = 0;
    let colDirect = true;
    let row = 0, col = 0;
    let map = [];
    for(let i = 0; i < s.length; i++){
        map[i] = [];
    }
    for(let i = 0; i < s.length; i++){
        if(colDirect){
            map[row][col] = s[i];
            row++;
            count++;
        }else{
            map[row][col] = s[i];
            row--;
            col++;           
            count++;
        }
        if(colDirect && count === numRows){
            count = 0;
            row -= 2;
            col++; 
            colDirect = false;
        }
        if(!colDirect && count === numRows - 2){
            count = 0;
            colDirect = true;
        }
    }
    let res = "";
    for(let i = 0; i < map.length; i++){
        for(let j = 0; j < map[i].length; j++){
            if(map[i][j]){
                res += map[i][j];
            }
        }
    }
    return console.log(res);
};

const string = 'PAYPALISHIRING';
ZigZag(string, 3);
