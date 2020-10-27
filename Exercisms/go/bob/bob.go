package bob

import "strings"

func hasAlpha(str string) bool {
	lower := strings.ToLower(str)
	for _, ch := range lower {
		if ch <= 'z' && ch >= 'a' {
			return true
		}
	}
	return false
}

func Hey(remark string) string {
	response := ""
	remark = strings.Trim(remark, " \t\n\r")
	if strings.HasSuffix(remark, "?") && hasAlpha(remark) && strings.ToUpper(remark) == remark {
		response = "Calm down, I know what I'm doing!"
	} else if strings.HasSuffix(remark, "?") {
		response = "Sure."
	} else if strings.ToUpper(remark) == remark && hasAlpha(remark) {
		response = "Whoa, chill out!"
	} else if remark == "" {
		response = "Fine. Be that way!"
	} else {
		response = "Whatever."
	}
	return response
}
