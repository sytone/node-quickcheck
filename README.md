# quickcheck - Node.js port of the QuickCheck unit test framework

# HOMEPAGE

[http://www.yellosoft.us/quickcheck](http://www.yellosoft.us/quickcheck)

# DEVELOPMENT

# Linting

Keep the code tidy:

    $ npm run-script lint

# EXAMPLE

    $ git clone https://github.com/mcandre/node-quickcheck.git
    $ cd node-quickcheck
    $ node
    > var qc = require("quickcheck");
    > function propertyEven(x) { return x % 2 == 0; }
    > qc.forAll(propertyEven, qc.arbByte);
    *** Failed! 27
    false
