# quickcheck - Node.js port of the QuickCheck unit test framework

Now compatible with [mocha](http://visionmedia.github.io/mocha/)!

# EXAMPLES

* [node-ios7crypt](https://github.com/mcandre/node-ios7crypt/blob/master/test/test.js)

Also see quickcheck's own [self-tests](https://github.com/mcandre/node-quickcheck/blob/master/test/test.js):

```
$ grunt test
Running "exec:test" (exec) task

> quickcheck@0.0.4 test /Users/andrew/Desktop/src/node-quickcheck
> mocha



  quickcheck
    forAll
      ✓ random numbers should not all be even
      ✓ random even numbers should all be even
      ✓ random strings should not all be valid numbers
      ✓ random digits should all be valid numbers


  4 passing (8ms)


Done, without errors.
```

# HOMEPAGE

http://www.yellosoft.us/quickcheck

# NPM

https://www.npmjs.com/package/quickcheck

# REQUIREMENTS

* [Node.js](http://nodejs.org/) 0.8+

## Optional

* [Ruby](https://www.ruby-lang.org/) 2+
* [Bundler](http://bundler.io/)
* [Cucumber](http://cukes.info/)
* [Guard](http://guardgem.org/)
* [aspelllint](https://github.com/mcandre/aspelllint)

# DEVELOPMENT

## Test

```
$ grunt test
```

Guard can automatically run tests when the code changes:

```
$ bundle
$ guard
...
```

## Lint

Keep the code tidy:

```
$ grunt lint
```

## Spell Check

```
$ grunt aspelllint
...
```

## Local CI

Guard can automatically lint when the code changes:

```
$ bundle
$ guard -G Guardfile-lint
...
```

## Git Hooks

See `hooks/`.
