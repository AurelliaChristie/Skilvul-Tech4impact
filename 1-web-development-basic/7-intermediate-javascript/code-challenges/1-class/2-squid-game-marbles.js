// A Squid Game consists of two players floating using 100 marbles. The players shoot at each other’s marbles and after 10 minutes the player with the most marbles left wins.
// Write a game function marbleAttack that takes two Player instances, calculates the marble left for each player after 10 minutes (using the hitsPerMinute property) and returns the name of the winner. If the result is a tie, return the string 'Tie'.

class Player {
    constructor(name, hitsPerMinute) {
      this.name = name;
      this.hitsPerMinute = hitsPerMinute;
      this.marbleCount = 100;
    }
   
    status() {
      console.log(`Player: ${this.name} -- Marbles Left: ${this.marbleCount}`)
    }
}

function marbleAttack(player1, player2){
    for(let i=1; i<=10; i++){
        if(player1.marbleCount - player2.hitsPerMinute < 0){
            player1.marbleCount = 0;
            break;
        } else {
            player1.marbleCount -= player2.hitsPerMinute;            
        }
        
        if(player2.marbleCount - player1.hitsPerMinute < 0){
            player2.marbleCount = 0;
            break;
        } else {
            player2.marbleCount -= player1.hitsPerMinute;            
        }
        player2.marbleCount -= player1.hitsPerMinute;
        player1.status();
        player2.status();
    }

    if(player1.marbleCount > player2.marbleCount){
        return player1.name;
    } else if(player2.marbleCount > player1.marbleCount){
        return player2.name;
    } else {
        return "Tie";
    }
}

const p1 = new Player('p1', 5);
const p2 = new Player('p2', 2);
 
marbleAttack(p1, p2); // return p1

const p3 = new Player('p1', 5);
const p4 = new Player('p2', 5);
 
marbleAttack(p3, p4); // return Tie