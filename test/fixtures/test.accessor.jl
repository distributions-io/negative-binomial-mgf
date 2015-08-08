using Distributions
using JSON

r = 5
p = 0.9
d = NegativeBinomial( r, p )

x = linspace( -5, 0.01, 100 )

dmgf(t) = mgf(d, t )
y = map( dmgf, x )
println( y )

data = Dict([
	("r", r),
	("p", p),
	("data", x),
	("expected", y)
])

outfile = open("./test/fixtures/accessor.json", "w")
JSON.json(data)

write( outfile, JSON.json(data) )
