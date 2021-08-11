export const hey = (message) => {
    if (message === message.toUpperCase()) {
      return "Whoa, chill out!";
    } else if (message.slice(-1) === "?"){
      return "Sure."
    } else {
      return "Whatever.";
    }
}
