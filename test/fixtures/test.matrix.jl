using Distributions
using JSON

r = 4
p = 0.5
d = NegativeBinomial( r, p )

x = linspace( -0.2, 0.2, 25 )

dmgf(t) = mgf(d, t )
y = map( dmgf, x )
println( y )

data = Dict([
	("r", r),
	("p", p),
	("data", x),
	("expected", y)
])

outfile = open("./test/fixtures/matrix.json", "w")
JSON.json(data)

write( outfile, JSON.json(data) )
