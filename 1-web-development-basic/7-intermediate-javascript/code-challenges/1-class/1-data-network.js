// You are a college student and you want to stream a movie over one of the campuses Wi-Fi networks. Based on the number of users, some networks won’t have the data to stream a movie.

// The properties of the Network class are:
// - data: Total units of data supplied by the network
// - users: Total numbers of users currently on the network
// Each user on average deducts 5 units from the network’s total data.
// To watch a movie you must connect to a network that has at least 50 remaining units of data.
// To using video call and conference you must connect to a network that has at least 10 remaining units of data
// For the connection, system will console string "You must reconnect the Internet Connection" every 2 minutes

// This is a summary of what you will do:
// - Add a method movieTime() to the Network class that returns true if there is enough data available to watch a movie, false if there isn’t.
// - Add a method videoCall() to the Network class that returns true if there is enough data available to using video call and conference, false if there isn’t.
// - Add method connection() to the Network class that will show string "You must reconnect the Internet Connection" using console.log every 2 minutes of the connection for the simulation (in the real case usually 60 - 120 minutes)

class Network {
    constructor(data, users) {
      this.users = users;
      this.data = data - 5*users;
    }

    movieTime() {
        return this.data >= 50;
    }

    videoCall() {
        return this.data >= 10;
    }
    
    connection() {
        setInterval(function(){
            console.log("You must reconnect the Internet Connection")}
        , 120000);
    }
}

const library = new Network(50, 8); 

library.movieTime(); // returns false
library.videoCall(); // returns true
library.connection(); // Run the interval

