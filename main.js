let players = ["X", "O"]
let current_player = players[Math.floor(Math.random() * players.length)]
let my_player_span = document.querySelector(".game-info .user-turn")
let my_block = document.querySelectorAll(".game-squares .square")
let result = document.querySelector(".result .result-value")



my_player_span.textContent = current_player

my_block.forEach((block) => {
    block.addEventListener("click", (e) => {
        e.currentTarget.classList.add("clicked")
        e.currentTarget.textContent = current_player
        next_turn(current_player)
        if (check_win() == "X Won" || check_win() == "O Won" || check_win() == "Draw!") {
            result.innerHTML = check_win()
            close_all_btns()
        }
    })
})



function close_all_btns() {
    my_block.forEach((btn) => {
        btn.classList.add("clicked")
    })
}



function next_turn(current_player_x_o) {
    if (current_player === "X") {
        my_player_span.textContent = "O"
        current_player = "O"
    } else {
        my_player_span.textContent = "X"
        current_player = "X"
    }
}

function check_win() {
    let win_conditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6], 
        [1, 4, 7], 
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]  
    ];
    let is_won = "nothing"

    Array_from_My_Block = Array.from(my_block)





    for (var i = 0; i < win_conditions.length; i++) {

        if (my_block[win_conditions[i][0]].innerHTML == my_block[win_conditions[i][1]].innerHTML && my_block[win_conditions[i][1]].innerHTML == my_block[win_conditions[i][2]].innerHTML && my_block[win_conditions[i][2]].innerHTML == "X") {
            is_won = "X Won"
            return is_won
        }
        else if (my_block[win_conditions[i][0]].innerHTML == my_block[win_conditions[i][1]].innerHTML && my_block[win_conditions[i][1]].innerHTML == my_block[win_conditions[i][2]].innerHTML && my_block[win_conditions[i][2]].innerHTML == "O") {
            is_won = "O Won"
            return is_won

        }
        else if (Array_from_My_Block.every((ele, idx) => {
            return ele.classList.contains("clicked");
        })) {
            is_won = "Draw!"
            return is_won
        }
        else {
            continue
        }
    }


}