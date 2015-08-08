using Distributions
using JSON

r = 9
p = 0.25
d = NegativeBinomial( r, p )

x = [ -0.5, -0.25, 0, 0.25, 0.5 ]

dmgf(t) = mgf(d, t )
y = map( dmgf, x )
println( y )

data = Dict([
	("r", r),
	("p", p),
	("data", x),
	("expected", y)
])

outfile = open("./test/fixtures/partial.json", "w")
JSON.json(data)

write( outfile, JSON.json(data) )
