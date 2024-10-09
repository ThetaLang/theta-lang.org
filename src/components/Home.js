import React from 'react';
import { Typography, Grid, Box, Button, Container, Card, CardContent } from '@mui/material';
import { Highlight } from 'prism-react-renderer';
import dracula from '../prism/draculaTheme'; // Your custom Dracula theme
import '../prism/prism-theta'; // Import the custom Theta language definition

const thetaCode = `capsule Math {
  add<Function<Number, Number, Number>> = (
    a<Number>,
    b<Number>
  ) -> a + b

  square<Function<Number, Number>> = (n<Number>) -> n * n

  divideByTwo<Function<Number, Number>> = (
    n<Number>
  ) -> n / 2

  fancyMath<Function<Number>> = () ->
    5 => add(3) => square() => divideByTwo() // returns 32
}`;

function Home() {
  return (
    <Box>
      <Box sx={{ bgcolor: '#44475a', color: 'white', py: 10 }}>
        <Container maxWidth="xl">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" gutterBottom sx={{ fontWeight: 700 }}>
                A Language for Modern Development
              </Typography>
              <Typography variant="h5" paragraph sx={{ fontWeight: 300 }}>
                Clean syntax, powerful features, and a robust type system to write scalable, maintainable code.
              </Typography>
              <Button variant="contained" color="primary" href="https://docs.theta-lang.org" sx={{ mt: 4, fontWeight: 600 }}>
                Get Started
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ bgcolor: '#282a36', p: 4, borderRadius: 2, overflow: 'auto' }}>
                <Highlight code={thetaCode} language="theta" theme={dracula}>
                  {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre className={className} style={style}>
                      {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line, key: i })}>
                          {line.map((token, key) => (
                            <span key={key} {...getTokenProps({ token, key })} />
                          ))}
                        </div>
                      ))}
                    </pre>
                  )}
                </Highlight>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container sx={{ py: 10 }} maxWidth='xl'>
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 600 }}>
          Why Choose Theta?
        </Typography>
        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
            <Card raised sx={{ flex: 1 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 500 }}>
                  Strong Typing for Safety
                </Typography>
                <Typography sx={{ fontWeight: 300 }}>
                  Theta enforces a strong, static type system that catches errors at compile-time, ensuring
                  your code is correct before it runs. This reduces runtime bugs and makes your applications more reliable.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
            <Card raised sx={{ flex: 1 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 500 }}>
                  Functional Programming at its Core
                </Typography>
                <Typography sx={{ fontWeight: 300 }}>
                  Theta is designed with functional programming principles, embracing immutability and higher-order
                  functions. This leads to more predictable, maintainable code that’s easier to reason about.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
            <Card raised sx={{ flex: 1 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 500 }}>
                  Pattern Matching and Destructuring
                </Typography>
                <Typography sx={{ fontWeight: 300 }}>
                  Simplify your code with built-in pattern matching, allowing you to destructure data and
                  handle complex data structures with minimal boilerplate, making your code cleaner and more readable.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
            <Card raised sx={{ flex: 1 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 500 }}>
                  Modular Capsule Architecture
                </Typography>
                <Typography sx={{ fontWeight: 300 }}>
                  Organize your code into reusable capsules, each with its own isolated scope and logic. 
                  This encourages modular design, making large codebases easier to manage and scale.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
            <Card raised sx={{ flex: 1 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 500 }}>
                  REPL for Quick Experimentation
                </Typography>
                <Typography sx={{ fontWeight: 300 }}>
                  Experiment in real-time with Theta's interactive REPL. Test code snippets, play with new ideas, and 
                  get instant feedback—all without compiling a full program.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
            <Card raised sx={{ flex: 1 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 500 }}>
                  WebAssembly Ready
                </Typography>
                <Typography sx={{ fontWeight: 300 }}>
                  Theta compiles to WebAssembly, giving you the flexibility to run your applications in the browser 
                  or in other environments that support WebAssembly, ensuring high performance and portability.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Container sx={{ py: 10, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
          Documentation
        </Typography>
        <Typography variant="h6" paragraph sx={{ fontWeight: 300 }}>
          Ready to dive in? Check out the formal language grammar and explore how Theta works under the hood.
        </Typography>
        <Button variant="outlined" href="https://docs.theta-lang.org" sx={{ mr: 2, mt: 2, fontWeight: 500 }}>
          Explore Docs
        </Button>
        <Button variant="outlined" href="https://github.com/ThetaLang/Theta" sx={{ mt: 2, fontWeight: 500 }}>
          View Source
        </Button>
      </Container>
    </Box>
  );
}

export default Home;
