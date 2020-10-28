def convert(number):
    response = ''
    if number % 3 == 0: response += 'Pling'
    if number % 5 == 0: response += 'Plang'
    if number % 7 == 0: response += 'Plong'
    if (number % 3 != 0) & (number % 5 != 0) & (number % 7 != 0):
        response = str(number)
    return response
