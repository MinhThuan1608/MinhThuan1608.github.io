let table = []
table[0] = []
table[1] = []
table[2] = []
table[3] = []
table[4] = []
table[5] = []
table[6] = []
table[7] = []
table[8] = []

function input() {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let value = document.getElementsByClassName("o" + (j + 1))[i].value
            if (value == "") table[i][j] = 0
            else {
                table[i][j] = parseInt(value)
                document.getElementsByClassName("o" + (j + 1))[i].style.color = "red"
            }
        }
    }
    for (let i = 0; i < 9; i++) console.log(table[i])
    process(table,0,0)
    console.log("------------------------------------------------------------")
    alert("Done!")
}

function process(arr,x,y){
    if (y==9){
        if (x==8){
            output(arr)
            return
        }else{
            process(arr,x+1,0)
        }
    }else{
        if (arr[x][y]==0){
            for(let i=1;i<10;i++){
                arr[x][y]=i
                if (check(arr,i,x,y)) process(arr,x,y+1)
                arr[x][y]=0
            }
        }else{
            process(arr,x,y+1)
        }
    }
}

function check(arr,num, d, c) {
    for (let i = 0; i < 9; i++) {
        if (c != i && arr[d][i] == num) return false
        if (d != i && arr[i][c] == num) return false
    }
    let a = Math.floor(d / 3) * 3
    let b = Math.floor(c / 3) * 3
    let aMax = a + 2
    let bMax = b + 2
    for (let k=a; k <= aMax; k++) {
        for (let l=b; l <= bMax; l++) {
            if ((d != k || c != l) && arr[k][l] == num) return false
        }
    }
    return true
}

function output(arr) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            document.getElementsByClassName("o" + (j + 1))[i].value = arr[i][j]
        }
    }
}
