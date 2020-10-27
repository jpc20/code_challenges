package bob

import "unicode"

func IsUpper(str string) bool {
	lettersPresent := false
	for _, ch := range str {
		if unicode.IsLetter(ch) {
			lettersPresent = true
		}
		if !unicode.IsUpper(ch) && unicode.IsLetter(ch) {
			return false
		}
	}
	return lettersPresent
}

func Hey(remark string) string {
	response := ""
	if remark[len(remark) - 1] == '?' && IsUpper(remark) {
		response = "Calm down, I know what I'm doing!"
	} else if remark[len(remark) - 1] == '?' {
		response = "Sure."
	} else if IsUpper(remark) {
		response = "Whoa, chill out!"
	} else {
		response = "Whatever."
	}
	return response
}
