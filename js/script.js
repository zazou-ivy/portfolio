$message = $('.message')
messageArray = $message.text().split("")
$message.text("")

renderNextLetter = ->
    letter = "<span class='letter'>" + messageArray.shift() + "</span>"
$message.append(letter)

start = null
previous = 0

frame = (timestamp) ->
  if start is null then start = timestamp
if timestamp - previous > 60
    previous = timestamp
renderNextLetter()
progress = timestamp - start
if messageArray.length > 0 then requestAnimationFrame(frame)

requestAnimationFrame(frame)
