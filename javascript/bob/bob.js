export const hey = (message) => {
  const isUpperCase =
    message === message.toUpperCase() &&
    message.split("").find((char) => char.match(/[a-z]/i));
  const isQuestion = message.trim().slice(-1) === "?";
  if (isUpperCase && isQuestion) {
    return "Calm down, I know what I'm doing!";
  } else if (isUpperCase) {
    return "Whoa, chill out!";
  } else if (isQuestion) {
    return "Sure.";
  } else if (message.replace(/\s/g, "") == "") {
    return "Fine. Be that way!";
  } else {
    return "Whatever.";
  }
};
