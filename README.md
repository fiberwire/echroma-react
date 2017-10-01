# echroma

### This is still a work in progress. So far, it just generates random paintings.

## What is echroma?
echroma is a genetic painting app, which allows you to evolve paintings through artificial selection.

## What does that mean?

### Lets start with "genetic painting".

A painting, in this case, is an image made of vector paths. A vector path is a line that is defined by coordinates of points, rather than by pixels. You can think of a path as a brush stoke on a canvas that can be defined programmatically.

echroma uses an evolution library I wrote called [enome](https://github.com/fiberwire/enome)

enome gives us a class called `Genome`, which is a container for genetic information. A Genome has genes, and each gene has a value that you can interpolate into many different types of variables. For this interpolation to work, you have to define a minimum and a maximum value for the variable.

To make a genetic painting, you define the min and max values for a variety of properties of the painting, such as X and Y values for points (which is typically set to the width and height of the image), the number of paths, the length of the paths, line thickness, stroke and fill opacity, etc.

Then you build a painting, path by path, using genes from the genome to create them.

Once you have created a painting from a genome, you can then mutate the painting by mutating its genome. You can also reproduce genomes together to create offspring.

### Artificial selection

Artificial selection is a type of evolution where you pick which paintings to keep and which paintings to kill (as opposed to natural selection, which is basically survival of the fittest). Over time, after a few generations of choosing your favorite paintings, you will eventually have a cool-looking painting that you evolved yourself from complete randomness.

#### How it works

The app will start off by generating a bunch of random paintings (paintings created from randomly generated genomes), and you choose which ones you want to keep, kill, or randomize.

When you keep a painting, it is added to the parents, and replaced by a new offspring of the parents.

When you kill a painting, it is deleted and replaced by a new offspring of the parents.

When you randomize a painting, it is deleted and replaced by a new randomly generated painting.

There is a limit (which you can change) to how many parents you can have at a time. Once that limit is reached, any new parents will replace the oldest parents. Unlike in the natural world of evolution, genetic paintings aren't limited to having only two parents, however, the fewer parents you have, the more closely their offspring will resemble them.