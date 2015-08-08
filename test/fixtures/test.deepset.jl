using Distributions
using JSON

r = 7
p = 0.5
d = NegativeBinomial( r, p )

x = linspace( -5, 0.2, 100 )

dmgf(t) = mgf(d, t )
y = map( dmgf, x )
println( y )

data = Dict([
	("r", r),
	("p", p),
	("data", x),
	("expected", y)
])

outfile = open("./test/fixtures/deepset.json", "w")
JSON.json(data)

write( outfile, JSON.json(data) )
