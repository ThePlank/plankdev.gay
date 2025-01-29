-- used to approximate the colours of ref sheets to a name --
------- currently using x11 colour naming conventions -------

io.write('input the fucking hex colour: ')
local hex = io.read(7)
local palette = io.open('rgb.txt', 'r')

hex = hex:gsub('#', '')
local srcR, srcG, srcB = tonumber("0x"..hex:sub(1,2)), tonumber("0x"..hex:sub(3,4)), tonumber("0x"..hex:sub(5,6))

local closestMatch = {distance = 9999, r = 0, g = 0, b = 0, name ='Not A Colour'}

for colour in palette:lines('l') do
	if colour:match('!') then goto fuck end
	for destR, destG, destB, destName in colour:gmatch('(%d+)%s+(%d+)%s+(%d+)%s+([%w%s]+)') do
		-- https://en.wikipedia.org/wiki/Color_difference#sRGB
		local RDiff, GDiff, BDiff = (destR - srcR) ^ 2, (destG - srcG) ^ 2, (destB - srcB) ^ 2
		local distance = math.sqrt(RDiff + GDiff + BDiff)
		if closestMatch.distance > distance then
			closestMatch = {distance = distance, r = destR, g = destG, b = destB, name = destName}
		end

	end

	::fuck::
end

local rgb = (closestMatch.r * 0x10000) + (closestMatch.g * 0x100) + closestMatch.b
local destHex = string.format("%x", rgb)
print('closest match:', closestMatch.name, destHex)
io.write('input: ')
io.write(('\x1B[38;2;%d;%d;%dm'):format(srcR, srcG, srcB))
io.write('████████████')
io.write(('\x1B[0m'))

io.write('\toutput: ')
io.write(('\x1B[38;2;%d;%d;%dm'):format(closestMatch.r, closestMatch.g, closestMatch.b))
io.write('████████████')
io.write(('\x1B[0m'))